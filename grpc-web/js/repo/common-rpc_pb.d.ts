// package: listenfield.repo
// file: repo/common-rpc.proto

import * as jspb from "google-protobuf";
import * as repo_common_types_pb from "../repo/common-types_pb";
import * as api_pb from "../api_pb";

export class UpsertTimeScopeRequest extends jspb.Message {
  hasItem(): boolean;
  clearItem(): void;
  getItem(): repo_common_types_pb.TimeScope | undefined;
  setItem(value?: repo_common_types_pb.TimeScope): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertTimeScopeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertTimeScopeRequest): UpsertTimeScopeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertTimeScopeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertTimeScopeRequest;
  static deserializeBinaryFromReader(message: UpsertTimeScopeRequest, reader: jspb.BinaryReader): UpsertTimeScopeRequest;
}

export namespace UpsertTimeScopeRequest {
  export type AsObject = {
    item?: repo_common_types_pb.TimeScope.AsObject,
  }
}

export class UpsertTimeScopeResult extends jspb.Message {
  hasItem(): boolean;
  clearItem(): void;
  getItem(): repo_common_types_pb.TimeScope | undefined;
  setItem(value?: repo_common_types_pb.TimeScope): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertTimeScopeResult.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertTimeScopeResult): UpsertTimeScopeResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertTimeScopeResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertTimeScopeResult;
  static deserializeBinaryFromReader(message: UpsertTimeScopeResult, reader: jspb.BinaryReader): UpsertTimeScopeResult;
}

export namespace UpsertTimeScopeResult {
  export type AsObject = {
    item?: repo_common_types_pb.TimeScope.AsObject,
  }
}

export class QueryTimeScopeResult extends jspb.Message {
  hasItem(): boolean;
  clearItem(): void;
  getItem(): repo_common_types_pb.TimeScope | undefined;
  setItem(value?: repo_common_types_pb.TimeScope): void;

  hasQuerymeta(): boolean;
  clearQuerymeta(): void;
  getQuerymeta(): api_pb.BatchedQueryMetadata | undefined;
  setQuerymeta(value?: api_pb.BatchedQueryMetadata): void;

  getQueryResOneofCase(): QueryTimeScopeResult.QueryResOneofCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTimeScopeResult.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTimeScopeResult): QueryTimeScopeResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryTimeScopeResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTimeScopeResult;
  static deserializeBinaryFromReader(message: QueryTimeScopeResult, reader: jspb.BinaryReader): QueryTimeScopeResult;
}

export namespace QueryTimeScopeResult {
  export type AsObject = {
    item?: repo_common_types_pb.TimeScope.AsObject,
    querymeta?: api_pb.BatchedQueryMetadata.AsObject,
  }

  export enum QueryResOneofCase {
    QUERY_RES_ONEOF_NOT_SET = 0,
    ITEM = 1,
    QUERYMETA = 2,
  }
}

