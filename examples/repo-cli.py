import argparse
import json
import sys
import time

# pip install grpcio-tools
import grpc
# pip install python-jose
try:
  from jose import jwt, exceptions as jose
except:
  jose = None

from listenfield_client import api
from listenfield_client.repo import common_rpc as common
from listenfield_client.repo import common_rpc_grpc as common_grpc
from listenfield_client.repo import catalog_rpc as catalog
from listenfield_client.repo import catalog_rpc_grpc as catalog_grpc
from listenfield_client.repo import common_types

timeScopeId = None
testAdminUUID = "6cade40b-1a35-4469-bbf8-3daaf223157e"
session_file = "session.json" # overriden by command line, see below

# Since this script is a developer tool, we'll just trust any exceptions it
# raises are clear enough to express what went wrong
def authenticatedCall(handler, message, metadata=None):
  if metadata is None:
    metadata = []
  elif type(metadata) is dict:
    metadata = metadata.items()
  elif type(metadata) is not list:
    metadata = list(metadata)

  # we load it for each request in case it's been updated (e.g. refresh)
  with open(session_file) as f:
    session = json.load(f)

  if jose is not None:
    # Installing jose is optional, of course, but here's how you can use it to
    # check if the session is expired without having to go to the server.
    token_data = jwt.get_unverified_claims(session["AccessToken"])
    if token_data["exp"] < time.time():
      print("Error: your session (session.json) expired, please refresh it first")
      sys.exit(1)
  metadata.append(("authorization", "Bearer " + session["AccessToken"]))
  return handler(message, metadata=metadata)

def echo():
  print("Echo test:")
  test_stub = common_grpc.TestStub(channel)
  print(test_stub.Echo(api.EchoMessage(message="hello")))

def timeScopeQuery():
  print("TimeScope query test:")
  timeScope_stub = common_grpc.TimeScopesStub(channel)
  response = authenticatedCall(timeScope_stub.Query, common.QueryTimeScopeRequest())
  global timeScopeId
  for resp in response:
    if (timeScopeId is None and resp.item.UUID): timeScopeId = resp.item.UUID
    print("got:", resp)

def timeScopeInsert():
  print("TimeScope insert:")
  timeScope_stub = common_grpc.TimeScopesStub(channel)
  response = authenticatedCall(timeScope_stub.Upsert, common.UpsertTimeScopeRequest(item=common_types.TimeScope(
    data=common_types.TimeScope.Data(
      Description="2018",
      DateContext=common_types.TimeScope.DateContextEnum.CropSeason,
    )
  )))
  print(response)
  global timeScopeId
  if (timeScopeId is None): timeScopeId = response.item.UUID

def timeScopeGet():
  if (timeScopeId is None):
    raise RuntimeError("Can't call timeScopeGet() before some other test that gets an ID (such as insert, query)")
  print("TimeScope get ({}):".format(timeScopeId))
  timeScope_stub = common_grpc.TimeScopesStub(channel)
  response = authenticatedCall(timeScope_stub.Get, api.SimpleGetRequest(UUID=timeScopeId))
  print(response)

def timeScopeGetInvalid():
  print("TimeScope get (invalid id):")
  timeScope_stub = common_grpc.TimeScopesStub(channel)
  response = authenticatedCall(timeScope_stub.Get, api.SimpleGetRequest(UUID="fnord"))
  print(response)

def timeScopeGetACL():
  if (timeScopeId is None):
    raise RuntimeError("Can't call timeScopeGetACL() before some other test that gets an ID (such as insert, query)")
  print("TimeScope getACL ({}):".format(timeScopeId))
  timeScope_stub = common_grpc.TimeScopesStub(channel)
  response = authenticatedCall(timeScope_stub.GetACL, api.SimpleGetRequest(UUID=timeScopeId))
  print(response)

def timeScopeSetACL():
  if (timeScopeId is None):
    raise RuntimeError("Can't call timeScopeSetACL() before some other test that gets an ID (such as insert, query)")
  print("TimeScope setACL ({}):".format(timeScopeId))
  timeScope_stub = common_grpc.TimeScopesStub(channel)
  response = authenticatedCall(timeScope_stub.SetACL, api.ChangeGrantsRequest(
    UUIDs=[timeScopeId],
    add=[api.Grant(grantee=testAdminUUID, type=api.Grant.TypeEnum.read)],
    remove=[api.Grant(grantee="PUBLIC", type=api.Grant.TypeEnum.read)],
  ))
  for resp in response:
    print("got:", resp)

def farmQuery():
  print("Farm query test:")
  farm_stub = catalog_grpc.FarmsStub(channel)
  response = authenticatedCall(farm_stub.Query, catalog.QueryFarmRequest(page_size=5))
  page_token = None
  for resp in response:
    print("got:", resp)
    if resp.HasField("queryMeta"):
      page_token = resp.queryMeta.page_token
  if page_token:
    response = authenticatedCall(farm_stub.Query, catalog.QueryFarmRequest(page_size=5, page_token=page_token))
    print("******************************\nSecond call to Farm query:")
    for resp in response:
      print("got:", resp)
  else:
    print("No page token, so not making a second call")

def fieldBoundaryQuery():
  print("FieldBoundary query test:")
  fieldBoundary_stub = catalog_grpc.FieldBoundariesStub(channel)
  response = authenticatedCall(fieldBoundary_stub.Query, catalog.QueryFieldBoundaryRequest(page_size=5))
  page_token = None
  for resp in response:
    print("got:", resp)
    if resp.HasField("queryMeta"):
      page_token = resp.queryMeta.page_token
  if page_token:
    response = authenticatedCall(fieldBoundary_stub.Query, catalog.QueryFieldBoundaryRequest(page_size=5, page_token=page_token))
    print("******************************\nSecond call to FieldBoundary query:")
    for resp in response:
      print("got:", resp)
  else:
    print("No page token, so not making a second call")

def fieldQuery():
  print("Field query test:")
  field_stub = catalog_grpc.FieldsStub(channel)
  response = authenticatedCall(field_stub.Query, catalog.QueryFieldRequest(page_size=5))
  page_token = None
  for resp in response:
    print("got:", resp)
    if resp.HasField("queryMeta"):
      page_token = resp.queryMeta.page_token
  if page_token:
    response = authenticatedCall(field_stub.Query, catalog.QueryFieldRequest(page_size=5, page_token=page_token))
    print("******************************\nSecond call to Field query:")
    for resp in response:
      print("got:", resp)
  else:
    print("No page token, so not making a second call")

def growerQuery():
  print("Grower query test:")
  grower_stub = catalog_grpc.GrowersStub(channel)
  response = authenticatedCall(grower_stub.Query, catalog.QueryGrowerRequest(page_size=5))
  page_token = None
  for resp in response:
    print("got:", resp)
    if resp.HasField("queryMeta"):
      page_token = resp.queryMeta.page_token
  if page_token:
    response = authenticatedCall(grower_stub.Query, catalog.QueryGrowerRequest(page_size=5, page_token=page_token))
    print("******************************\nSecond call to Grower query:")
    for resp in response:
      print("got:", resp)
  else:
    print("No page token, so not making a second call")

def cropQuery():
  print("Crop query test:")
  crop_stub = catalog_grpc.CropsStub(channel)
  response = authenticatedCall(crop_stub.Query, catalog.QueryCropRequest(page_size=5))
  page_token = None
  for resp in response:
    print("got:", resp)
    if resp.HasField("queryMeta"):
      page_token = resp.queryMeta.page_token
  if page_token:
    response = authenticatedCall(crop_stub.Query, catalog.QueryCropRequest(page_size=5, page_token=page_token))
    print("******************************\nSecond call to Crop query:")
    for resp in response:
      print("got:", resp)
  else:
    print("No page token, so not making a second call")

def cropZoneQuery():
  print("CropZone query test:")
  cropZone_stub = catalog_grpc.CropZonesStub(channel)
  response = authenticatedCall(cropZone_stub.Query, catalog.QueryCropZoneRequest(page_size=5))
  page_token = None
  for resp in response:
    print("got:", resp)
    if resp.HasField("queryMeta"):
      page_token = resp.queryMeta.page_token
  if page_token:
    response = authenticatedCall(cropZone_stub.Query, catalog.QueryCropZoneRequest(page_size=5, page_token=page_token))
    print("******************************\nSecond call to CropZone query:")
    for resp in response:
      print("got:", resp)
  else:
    print("No page token, so not making a second call")


###############################################################################
parser = argparse.ArgumentParser(description="Example code for ListenField repo API")
parser.add_argument("--endpoint_url", "-u")
parser.add_argument("--session_file", "-f")
parser.add_argument("--trusted_certs")
parser.add_argument("--insecure")
parser.add_argument("tests", nargs="*")
parser.set_defaults(endpoint_url="u.listenfield.com", session_file="session.json")

args = parser.parse_args()
if args.insecure:
  channel = grpc.insecure_channel(args.endpoint_url)
else:
  credentials = grpc.ssl_channel_credentials()
  channel = grpc.secure_channel(args.endpoint_url, credentials)
session_file = args.session_file

try:
  grpc.channel_ready_future(channel).result(timeout=10)
except grpc.FutureTimeoutError as e:
  sys.exit("Timeout connecting to server")
else:
  tests = args.tests
  if len(tests) == 0 or tests == ["all"]:
    tests = [
      "echo",
      "timeScopeQuery",
      "timeScopeInsert",
      "timeScopeGet",
      "timeScopeGetInvalid",
      "cropZoneQuery",
      "cropQuery",
      "fieldQuery",
      "fieldBoundaryQuery",
      "farmQuery",
    ]
  for test_name in tests:
    tf = globals().get(test_name)
    if tf and callable(tf):
      try:
        tf()
      except (SystemExit, KeyboardInterrupt):
        pass
      except Exception as e:
        print("Error:")
        import traceback
        traceback.print_exc()
        if hasattr(e, "result"):
          try: print("result:", e.result())
          except: pass
        if hasattr(e, "initial_metadata"): print("metadata:", e.initial_metadata())
        if hasattr(e, "trailing_metadata"): print("trailers:", e.trailing_metadata())
        print()
