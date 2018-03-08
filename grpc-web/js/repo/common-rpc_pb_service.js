// package: listenfield.repo
// file: repo/common-rpc.proto

var jspb = require("google-protobuf");
var repo_common_rpc_pb = require("../repo/common-rpc_pb");
var repo_common_types_pb = require("../repo/common-types_pb");
var api_pb = require("../api_pb");
var Test = {
  serviceName: "listenfield.repo.Test"
};
Test.Echo = {
  methodName: "Echo",
  service: Test,
  requestStream: false,
  responseStream: false,
  requestType: api_pb.EchoMessage,
  responseType: api_pb.EchoMessage
};
var TimeScopes = {
  serviceName: "listenfield.repo.TimeScopes"
};
TimeScopes.Upsert = {
  methodName: "Upsert",
  service: TimeScopes,
  requestStream: false,
  responseStream: false,
  requestType: repo_common_rpc_pb.UpsertTimeScopeRequest,
  responseType: repo_common_rpc_pb.UpsertTimeScopeResult
};
TimeScopes.Query = {
  methodName: "Query",
  service: TimeScopes,
  requestStream: false,
  responseStream: true,
  requestType: api_pb.BatchedQueryRequest,
  responseType: repo_common_rpc_pb.QueryTimeScopeResult
};
TimeScopes.Get = {
  methodName: "Get",
  service: TimeScopes,
  requestStream: false,
  responseStream: false,
  requestType: api_pb.SimpleGetRequest,
  responseType: repo_common_types_pb.TimeScope
};
TimeScopes.GetACL = {
  methodName: "GetACL",
  service: TimeScopes,
  requestStream: false,
  responseStream: false,
  requestType: api_pb.SimpleGetRequest,
  responseType: api_pb.GrantList
};
TimeScopes.SetACL = {
  methodName: "SetACL",
  service: TimeScopes,
  requestStream: false,
  responseStream: true,
  requestType: api_pb.ChangeGrantsRequest,
  responseType: api_pb.ChangeGrantsResult
};
module.exports = {
  Test: Test,
  TimeScopes: TimeScopes,
};

