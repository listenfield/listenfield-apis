import argparse
import json
import sys
import time

# pip install grpcio-tools
import grpc

try:
  from listenfield_client import api
  from listenfield_client import auth
  from listenfield_client import auth_grpc
except ImportError:
  print("""
Error: listenfield-client library not found. Please build it from the python directory,
then install the resulting `lintenfield_client` package in your python path.
""".strip())
  sys.exit(1)

running = 0

def echo(channel, config):
  print("Echo test:")
  test_stub = auth_grpc.TestStub(channel)
  print(test_stub.Echo(api.EchoMessage(message=config.message)))

def login(channel, config):
  if not config.username:
    config.username = input("Username: ")
  if not config.password:
    import getpass
    config.password = getpass.getpass()

  auth_stub = auth_grpc.AuthenticationStub(channel)
  res = auth_stub.LoginWithPassword(auth.LoginWithPasswordRequest(username=config.username, password=config.password, sessionTypeRequest=auth.SessionTypeRequest(refresh=True)))
  if res.HasField("challenge"):
    print("Got a challenge from the server, not yet supported!", res.challenge);
  else:
    with open(config.session_file, "w") as f:
      json.dump({
        "accessToken": res.session.accessToken,
        "tokenType": res.session.tokenType,
        "refreshToken": res.session.refreshToken,
      }, f)


def refresh(channel, config):
  with open(config.session_file) as f:
    session = json.load(f)
  auth_stub = auth_grpc.AuthenticationStub(channel)
  res = auth_stub.Refresh(auth.RefreshRequest(refreshToken=session["refreshToken"]))
  print(res)
  with open(config.session_file, "w") as f:
    json.dump({
      "accessToken": res.session.accessToken,
      "tokenType": res.session.tokenType,
      "refreshToken": res.session.refreshToken,
    }, f)


parser = argparse.ArgumentParser(description="Manage authentication, authorization, and tokens")
parser.add_argument("--endpoint_url", "-u")
parser.add_argument("--session_file", "-f")
parser.add_argument("--trusted_certs")
parser.add_argument("--insecure")
parser.set_defaults(endpoint_url="u.listenfield.com", session_file="session.json")

subparsers = parser.add_subparsers(help="sub-command help")

cmdparser = subparsers.add_parser("echo", help="Test the server using the test service and echo call")
cmdparser.set_defaults(func=echo)
cmdparser.add_argument("--message", "-m")

cmdparser = subparsers.add_parser("login", help="Log in with username and password")
cmdparser.set_defaults(func=login)
cmdparser.add_argument("--username", "-U")
cmdparser.add_argument("--password", "-P")

cmdparser = subparsers.add_parser("refresh", help="Get a new session using a saved refresh token")
cmdparser.set_defaults(func=refresh)

args = parser.parse_args()
if args.insecure:
  channel = grpc.insecure_channel(args.endpoint_url)
else:
  credentials = grpc.ssl_channel_credentials()
  channel = grpc.secure_channel(args.endpoint_url, credentials)
try:
  args.func(channel, args)
except KeyboardInterrupt:
  pass
while running > 0:
  try:
    time.sleep(1)
  except KeyboardInterrupt:
    break
