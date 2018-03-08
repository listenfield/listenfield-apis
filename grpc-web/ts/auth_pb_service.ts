// package: listenfield.auth
// file: auth.proto

import * as auth_pb from "./auth_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as api_pb from "./api_pb";
export class Test {
  static serviceName = "listenfield.auth.Test";
}
export namespace Test {
  export class Echo {
    static readonly methodName = "Echo";
    static readonly service = Test;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = api_pb.EchoMessage;
    static readonly responseType = api_pb.EchoMessage;
  }
}
export class Authentication {
  static serviceName = "listenfield.auth.Authentication";
}
export namespace Authentication {
  export class LoginWithPassword {
    static readonly methodName = "LoginWithPassword";
    static readonly service = Authentication;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = auth_pb.LoginWithPasswordRequest;
    static readonly responseType = auth_pb.LoginResult;
  }
  export class ContinueLogin {
    static readonly methodName = "ContinueLogin";
    static readonly service = Authentication;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = auth_pb.ContinueLoginRequest;
    static readonly responseType = auth_pb.LoginResult;
  }
  export class Refresh {
    static readonly methodName = "Refresh";
    static readonly service = Authentication;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = auth_pb.RefreshRequest;
    static readonly responseType = auth_pb.SessionInfo;
  }
}
