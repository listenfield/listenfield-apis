import argparse
import json
import sys
import time

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
  def gen():
    global running
    running += 1
    yield auth.LoginWithPasswordRequest(Username=config.username, Password=config.password)
    while True:
      try:
        res = stream.__next__()
      except StopIteration:
        print("End of responses")
        running -= 1
        break
      except:
        print("Error in streaming")
        import traceback; traceback.print_exc()
        running -= 1
        sys.exit(1)
      print(res)
      if not res.HasField("challenge"):
        with open(config.session_file, "w") as f:
          json.dump({
            "AccessToken": res.session.AccessToken,
            "Username": res.session.Username,
            "TokenType": res.session.TokenType,
            "RefreshToken": res.session.RefreshToken,
            "IdToken": res.session.IdToken,
          }, f)
        running -= 1
        raise StopIteration()
      elif res.challenge.Type == auth.LoginChallenge.ChallengeTypeEnum.NEW_PASSWORD:
        requiredAttributes = res.challenge.Data.get("requiredAttributes")
        if requiredAttributes and len(requiredAttributes) > 2:
          requiredAttributes = json.loads(requiredAttributes)
          print("The server requires you to update your password and some information")
        else:
          requiredAttributes = []
          print("The server requires you to update your password")
        import getpass
        new_password = None
        confirm = None
        while True:
          new_password = getpass.getpass("New password: ")
          confirm = getpass.getpass("Confirm password: ")
          if new_password == confirm:
            break
          else:
            print("Sorry, those don't match")
        new_data = {}
        for name in requiredAttributes:
          new_data[name] = input("New value for {}: ".format(name))
        yield auth.LoginWithPasswordRequest(Password=config.password, ChallengeData=new_data)


  stream = auth_stub.LoginWithPassword(gen())


def refresh(channel, config):
  with open(config.session_file) as f:
    session = json.load(f)
  auth_stub = auth_grpc.AuthenticationStub(channel)
  res = auth_stub.Refresh(auth.RefreshRequest(RefreshToken=session["RefreshToken"], Username=session["Username"]))
  with open(config.session_file, "w") as f:
    json.dump({
      "AccessToken": res.AccessToken,
      "Username": res.Username,
      "TokenType": res.TokenType,
      "RefreshToken": res.RefreshToken,
      "IdToken": res.IdToken,
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
credentials = None
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
