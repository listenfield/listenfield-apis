// package: listenfield
// file: api.proto

import * as jspb from "google-protobuf";
import * as status_pb from "./status_pb";

export class EchoMessage extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EchoMessage.AsObject;
  static toObject(includeInstance: boolean, msg: EchoMessage): EchoMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EchoMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EchoMessage;
  static deserializeBinaryFromReader(message: EchoMessage, reader: jspb.BinaryReader): EchoMessage;
}

export namespace EchoMessage {
  export type AsObject = {
    message: string,
  }
}

export class SortCriterium extends jspb.Message {
  getField(): string;
  setField(value: string): void;

  getDescending(): boolean;
  setDescending(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SortCriterium.AsObject;
  static toObject(includeInstance: boolean, msg: SortCriterium): SortCriterium.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SortCriterium, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SortCriterium;
  static deserializeBinaryFromReader(message: SortCriterium, reader: jspb.BinaryReader): SortCriterium;
}

export namespace SortCriterium {
  export type AsObject = {
    field: string,
    descending: boolean,
  }
}

export class BatchedQueryRequest extends jspb.Message {
  getSearch(): string;
  setSearch(value: string): void;

  getFilter(): string;
  setFilter(value: string): void;

  clearSortList(): void;
  getSortList(): Array<SortCriterium>;
  setSortList(value: Array<SortCriterium>): void;
  addSort(value?: SortCriterium, index?: number): SortCriterium;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchedQueryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchedQueryRequest): BatchedQueryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchedQueryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchedQueryRequest;
  static deserializeBinaryFromReader(message: BatchedQueryRequest, reader: jspb.BinaryReader): BatchedQueryRequest;
}

export namespace BatchedQueryRequest {
  export type AsObject = {
    search: string,
    filter: string,
    sortList: Array<SortCriterium.AsObject>,
    pageSize: number,
    pageToken: string,
  }
}

export class BatchedQueryMetadata extends jspb.Message {
  getPageToken(): string;
  setPageToken(value: string): void;

  getCount(): number;
  setCount(value: number): void;

  getScanned(): number;
  setScanned(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchedQueryMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: BatchedQueryMetadata): BatchedQueryMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchedQueryMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchedQueryMetadata;
  static deserializeBinaryFromReader(message: BatchedQueryMetadata, reader: jspb.BinaryReader): BatchedQueryMetadata;
}

export namespace BatchedQueryMetadata {
  export type AsObject = {
    pageToken: string,
    count: number,
    scanned: number,
  }
}

export class SimpleGetRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SimpleGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SimpleGetRequest): SimpleGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SimpleGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SimpleGetRequest;
  static deserializeBinaryFromReader(message: SimpleGetRequest, reader: jspb.BinaryReader): SimpleGetRequest;
}

export namespace SimpleGetRequest {
  export type AsObject = {
    uuid: string,
  }
}

export class Grant extends jspb.Message {
  getGrantee(): string;
  setGrantee(value: string): void;

  getType(): Grant.TypeEnum.Value;
  setType(value: Grant.TypeEnum.Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Grant.AsObject;
  static toObject(includeInstance: boolean, msg: Grant): Grant.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Grant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Grant;
  static deserializeBinaryFromReader(message: Grant, reader: jspb.BinaryReader): Grant;
}

export namespace Grant {
  export type AsObject = {
    grantee: string,
    type: Grant.TypeEnum.Value,
  }

  export class TypeEnum extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TypeEnum.AsObject;
    static toObject(includeInstance: boolean, msg: TypeEnum): TypeEnum.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TypeEnum, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TypeEnum;
    static deserializeBinaryFromReader(message: TypeEnum, reader: jspb.BinaryReader): TypeEnum;
  }

  export namespace TypeEnum {
    export type AsObject = {
    }

    export enum Value {
      INVALID = 0,
      read = 1,
      write = 2,
      grant = 3,
      chown = 4,
    }
  }
}

export class GrantList extends jspb.Message {
  clearGrantsList(): void;
  getGrantsList(): Array<Grant>;
  setGrantsList(value: Array<Grant>): void;
  addGrants(value?: Grant, index?: number): Grant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GrantList.AsObject;
  static toObject(includeInstance: boolean, msg: GrantList): GrantList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GrantList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GrantList;
  static deserializeBinaryFromReader(message: GrantList, reader: jspb.BinaryReader): GrantList;
}

export namespace GrantList {
  export type AsObject = {
    grantsList: Array<Grant.AsObject>,
  }
}

export class ChangeGrantsRequest extends jspb.Message {
  clearUuidsList(): void;
  getUuidsList(): Array<string>;
  setUuidsList(value: Array<string>): void;
  addUuids(value: string, index?: number): string;

  clearAddList(): void;
  getAddList(): Array<Grant>;
  setAddList(value: Array<Grant>): void;
  addAdd(value?: Grant, index?: number): Grant;

  clearRemoveList(): void;
  getRemoveList(): Array<Grant>;
  setRemoveList(value: Array<Grant>): void;
  addRemove(value?: Grant, index?: number): Grant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeGrantsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeGrantsRequest): ChangeGrantsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeGrantsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeGrantsRequest;
  static deserializeBinaryFromReader(message: ChangeGrantsRequest, reader: jspb.BinaryReader): ChangeGrantsRequest;
}

export namespace ChangeGrantsRequest {
  export type AsObject = {
    uuidsList: Array<string>,
    addList: Array<Grant.AsObject>,
    removeList: Array<Grant.AsObject>,
  }
}

export class ChangeGrantsResult extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  clearGrantsList(): void;
  getGrantsList(): Array<Grant>;
  setGrantsList(value: Array<Grant>): void;
  addGrants(value?: Grant, index?: number): Grant;

  hasError(): boolean;
  clearError(): void;
  getError(): status_pb.Status | undefined;
  setError(value?: status_pb.Status): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeGrantsResult.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeGrantsResult): ChangeGrantsResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeGrantsResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeGrantsResult;
  static deserializeBinaryFromReader(message: ChangeGrantsResult, reader: jspb.BinaryReader): ChangeGrantsResult;
}

export namespace ChangeGrantsResult {
  export type AsObject = {
    uuid: string,
    grantsList: Array<Grant.AsObject>,
    error?: status_pb.Status.AsObject,
  }
}

