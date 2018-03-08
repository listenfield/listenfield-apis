// package: listenfield.repo
// file: repo/common-rpc.proto

import * as repo_common_rpc_pb from "../repo/common-rpc_pb";
import * as repo_common_types_pb from "../repo/common-types_pb";
import * as api_pb from "../api_pb";
export class Test {
  static serviceName = "listenfield.repo.Test";
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
export class TimeScopes {
  static serviceName = "listenfield.repo.TimeScopes";
}
export namespace TimeScopes {
  export class Upsert {
    static readonly methodName = "Upsert";
    static readonly service = TimeScopes;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = repo_common_rpc_pb.UpsertTimeScopeRequest;
    static readonly responseType = repo_common_rpc_pb.UpsertTimeScopeResult;
  }
  export class Query {
    static readonly methodName = "Query";
    static readonly service = TimeScopes;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = api_pb.BatchedQueryRequest;
    static readonly responseType = repo_common_rpc_pb.QueryTimeScopeResult;
  }
  export class Get {
    static readonly methodName = "Get";
    static readonly service = TimeScopes;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = api_pb.SimpleGetRequest;
    static readonly responseType = repo_common_types_pb.TimeScope;
  }
  export class GetACL {
    static readonly methodName = "GetACL";
    static readonly service = TimeScopes;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = api_pb.SimpleGetRequest;
    static readonly responseType = api_pb.GrantList;
  }
  export class SetACL {
    static readonly methodName = "SetACL";
    static readonly service = TimeScopes;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = api_pb.ChangeGrantsRequest;
    static readonly responseType = api_pb.ChangeGrantsResult;
  }
}
