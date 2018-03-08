// package: listenfield.auth
// file: auth.proto

var jspb = require("google-protobuf");
var auth_pb = require("./auth_pb");
var google_protobuf_timestamp_pb = require("google-protobuf/google/protobuf/timestamp_pb");
var api_pb = require("./api_pb");
var Test = {
  serviceName: "listenfield.auth.Test"
};
Test.Echo = {
  methodName: "Echo",
  service: Test,
  requestStream: false,
  responseStream: false,
  requestType: api_pb.EchoMessage,
  responseType: api_pb.EchoMessage
};
var Authentication = {
  serviceName: "listenfield.auth.Authentication"
};
Authentication.LoginWithPassword = {
  methodName: "LoginWithPassword",
  service: Authentication,
  requestStream: false,
  responseStream: false,
  requestType: auth_pb.LoginWithPasswordRequest,
  responseType: auth_pb.LoginResult
};
Authentication.ContinueLogin = {
  methodName: "ContinueLogin",
  service: Authentication,
  requestStream: false,
  responseStream: false,
  requestType: auth_pb.ContinueLoginRequest,
  responseType: auth_pb.LoginResult
};
Authentication.Refresh = {
  methodName: "Refresh",
  service: Authentication,
  requestStream: false,
  responseStream: false,
  requestType: auth_pb.RefreshRequest,
  responseType: auth_pb.SessionInfo
};
module.exports = {
  Test: Test,
  Authentication: Authentication,
};

