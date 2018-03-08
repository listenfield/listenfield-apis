// package: listenfield.repo
// file: repo/catalog-rpc.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as repo_catalog_types_pb from "../repo/catalog-types_pb";
import * as api_pb from "../api_pb";

export class UpsertFieldBoundaryRequest extends jspb.Message {
  hasItem(): boolean;
  clearItem(): void;
  getItem(): repo_catalog_types_pb.FieldBoundary | undefined;
  setItem(value?: repo_catalog_types_pb.FieldBoundary): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertFieldBoundaryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertFieldBoundaryRequest): UpsertFieldBoundaryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertFieldBoundaryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertFieldBoundaryRequest;
  static deserializeBinaryFromReader(message: UpsertFieldBoundaryRequest, reader: jspb.BinaryReader): UpsertFieldBoundaryRequest;
}

export namespace UpsertFieldBoundaryRequest {
  export type AsObject = {
    item?: repo_catalog_types_pb.FieldBoundary.AsObject,
  }
}

export class UpsertFieldBoundaryResult extends jspb.Message {
  hasItem(): boolean;
  clearItem(): void;
  getItem(): repo_catalog_types_pb.FieldBoundary | undefined;
  setItem(value?: repo_catalog_types_pb.FieldBoundary): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertFieldBoundaryResult.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertFieldBoundaryResult): UpsertFieldBoundaryResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertFieldBoundaryResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertFieldBoundaryResult;
  static deserializeBinaryFromReader(message: UpsertFieldBoundaryResult, reader: jspb.BinaryReader): UpsertFieldBoundaryResult;
}

export namespace UpsertFieldBoundaryResult {
  export type AsObject = {
    item?: repo_catalog_types_pb.FieldBoundary.AsObject,
  }
}

export class QueryFieldBoundaryResult extends jspb.Message {
  hasItem(): boolean;
  clearItem(): void;
  getItem(): repo_catalog_types_pb.FieldBoundary | undefined;
  setItem(value?: repo_catalog_types_pb.FieldBoundary): void;

  hasQuerymeta(): boolean;
  clearQuerymeta(): void;
  getQuerymeta(): api_pb.BatchedQueryMetadata | undefined;
  setQuerymeta(value?: api_pb.BatchedQueryMetadata): void;

  getQueryResOneofCase(): QueryFieldBoundaryResult.QueryResOneofCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryFieldBoundaryResult.AsObject;
  static toObject(includeInstance: boolean, msg: QueryFieldBoundaryResult): QueryFieldBoundaryResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryFieldBoundaryResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryFieldBoundaryResult;
  static deserializeBinaryFromReader(message: QueryFieldBoundaryResult, reader: jspb.BinaryReader): QueryFieldBoundaryResult;
}

export namespace QueryFieldBoundaryResult {
  export type AsObject = {
    item?: repo_catalog_types_pb.FieldBoundary.AsObject,
    querymeta?: api_pb.BatchedQueryMetadata.AsObject,
  }

  export enum QueryResOneofCase {
    QUERY_RES_ONEOF_NOT_SET = 0,
    ITEM = 1,
    QUERYMETA = 2,
  }
}

export class UpsertFieldRequest extends jspb.Message {
  hasItem(): boolean;
  clearItem(): void;
  getItem(): repo_catalog_types_pb.Field | undefined;
  setItem(value?: repo_catalog_types_pb.Field): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertFieldRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertFieldRequest): UpsertFieldRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertFieldRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertFieldRequest;
  static deserializeBinaryFromReader(message: UpsertFieldRequest, reader: jspb.BinaryReader): UpsertFieldRequest;
}

export namespace UpsertFieldRequest {
  export type AsObject = {
    item?: repo_catalog_types_pb.Field.AsObject,
  }
}

export class UpsertFieldResult extends jspb.Message {
  hasItem(): boolean;
  clearItem(): void;
  getItem(): repo_catalog_types_pb.Field | undefined;
  setItem(value?: repo_catalog_types_pb.Field): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertFieldResult.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertFieldResult): UpsertFieldResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertFieldResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertFieldResult;
  static deserializeBinaryFromReader(message: UpsertFieldResult, reader: jspb.BinaryReader): UpsertFieldResult;
}

export namespace UpsertFieldResult {
  export type AsObject = {
    item?: repo_catalog_types_pb.Field.AsObject,
  }
}

export class QueryFieldResult extends jspb.Message {
  hasItem(): boolean;
  clearItem(): void;
  getItem(): repo_catalog_types_pb.Field | undefined;
  setItem(value?: repo_catalog_types_pb.Field): void;

  hasQuerymeta(): boolean;
  clearQuerymeta(): void;
  getQuerymeta(): api_pb.BatchedQueryMetadata | undefined;
  setQuerymeta(value?: api_pb.BatchedQueryMetadata): void;

  getQueryResOneofCase(): QueryFieldResult.QueryResOneofCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryFieldResult.AsObject;
  static toObject(includeInstance: boolean, msg: QueryFieldResult): QueryFieldResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryFieldResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryFieldResult;
  static deserializeBinaryFromReader(message: QueryFieldResult, reader: jspb.BinaryReader): QueryFieldResult;
}

export namespace QueryFieldResult {
  export type AsObject = {
    item?: repo_catalog_types_pb.Field.AsObject,
    querymeta?: api_pb.BatchedQueryMetadata.AsObject,
  }

  export enum QueryResOneofCase {
    QUERY_RES_ONEOF_NOT_SET = 0,
    ITEM = 1,
    QUERYMETA = 2,
  }
}

export class UpsertFarmRequest extends jspb.Message {
  hasItem(): boolean;
  clearItem(): void;
  getItem(): repo_catalog_types_pb.Farm | undefined;
  setItem(value?: repo_catalog_types_pb.Farm): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertFarmRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertFarmRequest): UpsertFarmRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertFarmRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertFarmRequest;
  static deserializeBinaryFromReader(message: UpsertFarmRequest, reader: jspb.BinaryReader): UpsertFarmRequest;
}

export namespace UpsertFarmRequest {
  export type AsObject = {
    item?: repo_catalog_types_pb.Farm.AsObject,
  }
}

export class UpsertFarmResult extends jspb.Message {
  hasItem(): boolean;
  clearItem(): void;
  getItem(): repo_catalog_types_pb.Farm | undefined;
  setItem(value?: repo_catalog_types_pb.Farm): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertFarmResult.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertFarmResult): UpsertFarmResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertFarmResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertFarmResult;
  static deserializeBinaryFromReader(message: UpsertFarmResult, reader: jspb.BinaryReader): UpsertFarmResult;
}

export namespace UpsertFarmResult {
  export type AsObject = {
    item?: repo_catalog_types_pb.Farm.AsObject,
  }
}

export class QueryFarmResult extends jspb.Message {
  hasItem(): boolean;
  clearItem(): void;
  getItem(): repo_catalog_types_pb.Farm | undefined;
  setItem(value?: repo_catalog_types_pb.Farm): void;

  hasQuerymeta(): boolean;
  clearQuerymeta(): void;
  getQuerymeta(): api_pb.BatchedQueryMetadata | undefined;
  setQuerymeta(value?: api_pb.BatchedQueryMetadata): void;

  getQueryResOneofCase(): QueryFarmResult.QueryResOneofCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryFarmResult.AsObject;
  static toObject(includeInstance: boolean, msg: QueryFarmResult): QueryFarmResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryFarmResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryFarmResult;
  static deserializeBinaryFromReader(message: QueryFarmResult, reader: jspb.BinaryReader): QueryFarmResult;
}

export namespace QueryFarmResult {
  export type AsObject = {
    item?: repo_catalog_types_pb.Farm.AsObject,
    querymeta?: api_pb.BatchedQueryMetadata.AsObject,
  }

  export enum QueryResOneofCase {
    QUERY_RES_ONEOF_NOT_SET = 0,
    ITEM = 1,
    QUERYMETA = 2,
  }
}

export class UpsertGrowerRequest extends jspb.Message {
  hasItem(): boolean;
  clearItem(): void;
  getItem(): repo_catalog_types_pb.Grower | undefined;
  setItem(value?: repo_catalog_types_pb.Grower): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertGrowerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertGrowerRequest): UpsertGrowerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertGrowerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertGrowerRequest;
  static deserializeBinaryFromReader(message: UpsertGrowerRequest, reader: jspb.BinaryReader): UpsertGrowerRequest;
}

export namespace UpsertGrowerRequest {
  export type AsObject = {
    item?: repo_catalog_types_pb.Grower.AsObject,
  }
}

export class UpsertGrowerResult extends jspb.Message {
  hasItem(): boolean;
  clearItem(): void;
  getItem(): repo_catalog_types_pb.Grower | undefined;
  setItem(value?: repo_catalog_types_pb.Grower): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertGrowerResult.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertGrowerResult): UpsertGrowerResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertGrowerResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertGrowerResult;
  static deserializeBinaryFromReader(message: UpsertGrowerResult, reader: jspb.BinaryReader): UpsertGrowerResult;
}

export namespace UpsertGrowerResult {
  export type AsObject = {
    item?: repo_catalog_types_pb.Grower.AsObject,
  }
}

export class QueryGrowerResult extends jspb.Message {
  hasItem(): boolean;
  clearItem(): void;
  getItem(): repo_catalog_types_pb.Grower | undefined;
  setItem(value?: repo_catalog_types_pb.Grower): void;

  hasQuerymeta(): boolean;
  clearQuerymeta(): void;
  getQuerymeta(): api_pb.BatchedQueryMetadata | undefined;
  setQuerymeta(value?: api_pb.BatchedQueryMetadata): void;

  getQueryResOneofCase(): QueryGrowerResult.QueryResOneofCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryGrowerResult.AsObject;
  static toObject(includeInstance: boolean, msg: QueryGrowerResult): QueryGrowerResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryGrowerResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryGrowerResult;
  static deserializeBinaryFromReader(message: QueryGrowerResult, reader: jspb.BinaryReader): QueryGrowerResult;
}

export namespace QueryGrowerResult {
  export type AsObject = {
    item?: repo_catalog_types_pb.Grower.AsObject,
    querymeta?: api_pb.BatchedQueryMetadata.AsObject,
  }

  export enum QueryResOneofCase {
    QUERY_RES_ONEOF_NOT_SET = 0,
    ITEM = 1,
    QUERYMETA = 2,
  }
}

export class UpsertCropRequest extends jspb.Message {
  hasItem(): boolean;
  clearItem(): void;
  getItem(): repo_catalog_types_pb.Crop | undefined;
  setItem(value?: repo_catalog_types_pb.Crop): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertCropRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertCropRequest): UpsertCropRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertCropRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertCropRequest;
  static deserializeBinaryFromReader(message: UpsertCropRequest, reader: jspb.BinaryReader): UpsertCropRequest;
}

export namespace UpsertCropRequest {
  export type AsObject = {
    item?: repo_catalog_types_pb.Crop.AsObject,
  }
}

export class UpsertCropResult extends jspb.Message {
  hasItem(): boolean;
  clearItem(): void;
  getItem(): repo_catalog_types_pb.Crop | undefined;
  setItem(value?: repo_catalog_types_pb.Crop): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertCropResult.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertCropResult): UpsertCropResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertCropResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertCropResult;
  static deserializeBinaryFromReader(message: UpsertCropResult, reader: jspb.BinaryReader): UpsertCropResult;
}

export namespace UpsertCropResult {
  export type AsObject = {
    item?: repo_catalog_types_pb.Crop.AsObject,
  }
}

export class QueryCropResult extends jspb.Message {
  hasItem(): boolean;
  clearItem(): void;
  getItem(): repo_catalog_types_pb.Crop | undefined;
  setItem(value?: repo_catalog_types_pb.Crop): void;

  hasQuerymeta(): boolean;
  clearQuerymeta(): void;
  getQuerymeta(): api_pb.BatchedQueryMetadata | undefined;
  setQuerymeta(value?: api_pb.BatchedQueryMetadata): void;

  getQueryResOneofCase(): QueryCropResult.QueryResOneofCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryCropResult.AsObject;
  static toObject(includeInstance: boolean, msg: QueryCropResult): QueryCropResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryCropResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryCropResult;
  static deserializeBinaryFromReader(message: QueryCropResult, reader: jspb.BinaryReader): QueryCropResult;
}

export namespace QueryCropResult {
  export type AsObject = {
    item?: repo_catalog_types_pb.Crop.AsObject,
    querymeta?: api_pb.BatchedQueryMetadata.AsObject,
  }

  export enum QueryResOneofCase {
    QUERY_RES_ONEOF_NOT_SET = 0,
    ITEM = 1,
    QUERYMETA = 2,
  }
}

export class UpsertCropZoneRequest extends jspb.Message {
  hasItem(): boolean;
  clearItem(): void;
  getItem(): repo_catalog_types_pb.CropZone | undefined;
  setItem(value?: repo_catalog_types_pb.CropZone): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertCropZoneRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertCropZoneRequest): UpsertCropZoneRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertCropZoneRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertCropZoneRequest;
  static deserializeBinaryFromReader(message: UpsertCropZoneRequest, reader: jspb.BinaryReader): UpsertCropZoneRequest;
}

export namespace UpsertCropZoneRequest {
  export type AsObject = {
    item?: repo_catalog_types_pb.CropZone.AsObject,
  }
}

export class UpsertCropZoneResult extends jspb.Message {
  hasItem(): boolean;
  clearItem(): void;
  getItem(): repo_catalog_types_pb.CropZone | undefined;
  setItem(value?: repo_catalog_types_pb.CropZone): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertCropZoneResult.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertCropZoneResult): UpsertCropZoneResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertCropZoneResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertCropZoneResult;
  static deserializeBinaryFromReader(message: UpsertCropZoneResult, reader: jspb.BinaryReader): UpsertCropZoneResult;
}

export namespace UpsertCropZoneResult {
  export type AsObject = {
    item?: repo_catalog_types_pb.CropZone.AsObject,
  }
}

export class QueryCropZoneResult extends jspb.Message {
  hasItem(): boolean;
  clearItem(): void;
  getItem(): repo_catalog_types_pb.CropZone | undefined;
  setItem(value?: repo_catalog_types_pb.CropZone): void;

  hasQuerymeta(): boolean;
  clearQuerymeta(): void;
  getQuerymeta(): api_pb.BatchedQueryMetadata | undefined;
  setQuerymeta(value?: api_pb.BatchedQueryMetadata): void;

  getQueryResOneofCase(): QueryCropZoneResult.QueryResOneofCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryCropZoneResult.AsObject;
  static toObject(includeInstance: boolean, msg: QueryCropZoneResult): QueryCropZoneResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryCropZoneResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryCropZoneResult;
  static deserializeBinaryFromReader(message: QueryCropZoneResult, reader: jspb.BinaryReader): QueryCropZoneResult;
}

export namespace QueryCropZoneResult {
  export type AsObject = {
    item?: repo_catalog_types_pb.CropZone.AsObject,
    querymeta?: api_pb.BatchedQueryMetadata.AsObject,
  }

  export enum QueryResOneofCase {
    QUERY_RES_ONEOF_NOT_SET = 0,
    ITEM = 1,
    QUERYMETA = 2,
  }
}

export class UpsertContactInfoRequest extends jspb.Message {
  hasItem(): boolean;
  clearItem(): void;
  getItem(): repo_catalog_types_pb.ContactInfo | undefined;
  setItem(value?: repo_catalog_types_pb.ContactInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertContactInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertContactInfoRequest): UpsertContactInfoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertContactInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertContactInfoRequest;
  static deserializeBinaryFromReader(message: UpsertContactInfoRequest, reader: jspb.BinaryReader): UpsertContactInfoRequest;
}

export namespace UpsertContactInfoRequest {
  export type AsObject = {
    item?: repo_catalog_types_pb.ContactInfo.AsObject,
  }
}

export class UpsertContactInfoResult extends jspb.Message {
  hasItem(): boolean;
  clearItem(): void;
  getItem(): repo_catalog_types_pb.ContactInfo | undefined;
  setItem(value?: repo_catalog_types_pb.ContactInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertContactInfoResult.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertContactInfoResult): UpsertContactInfoResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertContactInfoResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertContactInfoResult;
  static deserializeBinaryFromReader(message: UpsertContactInfoResult, reader: jspb.BinaryReader): UpsertContactInfoResult;
}

export namespace UpsertContactInfoResult {
  export type AsObject = {
    item?: repo_catalog_types_pb.ContactInfo.AsObject,
  }
}

export class QueryContactInfoResult extends jspb.Message {
  hasItem(): boolean;
  clearItem(): void;
  getItem(): repo_catalog_types_pb.ContactInfo | undefined;
  setItem(value?: repo_catalog_types_pb.ContactInfo): void;

  hasQuerymeta(): boolean;
  clearQuerymeta(): void;
  getQuerymeta(): api_pb.BatchedQueryMetadata | undefined;
  setQuerymeta(value?: api_pb.BatchedQueryMetadata): void;

  getQueryResOneofCase(): QueryContactInfoResult.QueryResOneofCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryContactInfoResult.AsObject;
  static toObject(includeInstance: boolean, msg: QueryContactInfoResult): QueryContactInfoResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryContactInfoResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryContactInfoResult;
  static deserializeBinaryFromReader(message: QueryContactInfoResult, reader: jspb.BinaryReader): QueryContactInfoResult;
}

export namespace QueryContactInfoResult {
  export type AsObject = {
    item?: repo_catalog_types_pb.ContactInfo.AsObject,
    querymeta?: api_pb.BatchedQueryMetadata.AsObject,
  }

  export enum QueryResOneofCase {
    QUERY_RES_ONEOF_NOT_SET = 0,
    ITEM = 1,
    QUERYMETA = 2,
  }
}

export class UpsertPersonRequest extends jspb.Message {
  hasItem(): boolean;
  clearItem(): void;
  getItem(): repo_catalog_types_pb.Person | undefined;
  setItem(value?: repo_catalog_types_pb.Person): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertPersonRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertPersonRequest): UpsertPersonRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertPersonRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertPersonRequest;
  static deserializeBinaryFromReader(message: UpsertPersonRequest, reader: jspb.BinaryReader): UpsertPersonRequest;
}

export namespace UpsertPersonRequest {
  export type AsObject = {
    item?: repo_catalog_types_pb.Person.AsObject,
  }
}

export class UpsertPersonResult extends jspb.Message {
  hasItem(): boolean;
  clearItem(): void;
  getItem(): repo_catalog_types_pb.Person | undefined;
  setItem(value?: repo_catalog_types_pb.Person): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertPersonResult.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertPersonResult): UpsertPersonResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertPersonResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertPersonResult;
  static deserializeBinaryFromReader(message: UpsertPersonResult, reader: jspb.BinaryReader): UpsertPersonResult;
}

export namespace UpsertPersonResult {
  export type AsObject = {
    item?: repo_catalog_types_pb.Person.AsObject,
  }
}

export class QueryPersonResult extends jspb.Message {
  hasItem(): boolean;
  clearItem(): void;
  getItem(): repo_catalog_types_pb.Person | undefined;
  setItem(value?: repo_catalog_types_pb.Person): void;

  hasQuerymeta(): boolean;
  clearQuerymeta(): void;
  getQuerymeta(): api_pb.BatchedQueryMetadata | undefined;
  setQuerymeta(value?: api_pb.BatchedQueryMetadata): void;

  getQueryResOneofCase(): QueryPersonResult.QueryResOneofCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPersonResult.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPersonResult): QueryPersonResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryPersonResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPersonResult;
  static deserializeBinaryFromReader(message: QueryPersonResult, reader: jspb.BinaryReader): QueryPersonResult;
}

export namespace QueryPersonResult {
  export type AsObject = {
    item?: repo_catalog_types_pb.Person.AsObject,
    querymeta?: api_pb.BatchedQueryMetadata.AsObject,
  }

  export enum QueryResOneofCase {
    QUERY_RES_ONEOF_NOT_SET = 0,
    ITEM = 1,
    QUERYMETA = 2,
  }
}

export class UpsertPersonRoleRequest extends jspb.Message {
  hasItem(): boolean;
  clearItem(): void;
  getItem(): repo_catalog_types_pb.PersonRole | undefined;
  setItem(value?: repo_catalog_types_pb.PersonRole): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertPersonRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertPersonRoleRequest): UpsertPersonRoleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertPersonRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertPersonRoleRequest;
  static deserializeBinaryFromReader(message: UpsertPersonRoleRequest, reader: jspb.BinaryReader): UpsertPersonRoleRequest;
}

export namespace UpsertPersonRoleRequest {
  export type AsObject = {
    item?: repo_catalog_types_pb.PersonRole.AsObject,
  }
}

export class UpsertPersonRoleResult extends jspb.Message {
  hasItem(): boolean;
  clearItem(): void;
  getItem(): repo_catalog_types_pb.PersonRole | undefined;
  setItem(value?: repo_catalog_types_pb.PersonRole): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertPersonRoleResult.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertPersonRoleResult): UpsertPersonRoleResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertPersonRoleResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertPersonRoleResult;
  static deserializeBinaryFromReader(message: UpsertPersonRoleResult, reader: jspb.BinaryReader): UpsertPersonRoleResult;
}

export namespace UpsertPersonRoleResult {
  export type AsObject = {
    item?: repo_catalog_types_pb.PersonRole.AsObject,
  }
}

export class QueryPersonRoleRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getPersonid(): string;
  setPersonid(value: string): void;

  getGrowerid(): string;
  setGrowerid(value: string): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getRole(): repo_catalog_types_pb.PersonRole.PersonRolesEnum.Value;
  setRole(value: repo_catalog_types_pb.PersonRole.PersonRolesEnum.Value): void;

  getCompanyid(): string;
  setCompanyid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPersonRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPersonRoleRequest): QueryPersonRoleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryPersonRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPersonRoleRequest;
  static deserializeBinaryFromReader(message: QueryPersonRoleRequest, reader: jspb.BinaryReader): QueryPersonRoleRequest;
}

export namespace QueryPersonRoleRequest {
  export type AsObject = {
    pageSize: number,
    pageToken: string,
    personid: string,
    growerid: string,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    role: repo_catalog_types_pb.PersonRole.PersonRolesEnum.Value,
    companyid: string,
  }
}

export class QueryPersonRoleResult extends jspb.Message {
  hasItem(): boolean;
  clearItem(): void;
  getItem(): repo_catalog_types_pb.PersonRole | undefined;
  setItem(value?: repo_catalog_types_pb.PersonRole): void;

  hasQuerymeta(): boolean;
  clearQuerymeta(): void;
  getQuerymeta(): api_pb.BatchedQueryMetadata | undefined;
  setQuerymeta(value?: api_pb.BatchedQueryMetadata): void;

  getQueryResOneofCase(): QueryPersonRoleResult.QueryResOneofCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryPersonRoleResult.AsObject;
  static toObject(includeInstance: boolean, msg: QueryPersonRoleResult): QueryPersonRoleResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryPersonRoleResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryPersonRoleResult;
  static deserializeBinaryFromReader(message: QueryPersonRoleResult, reader: jspb.BinaryReader): QueryPersonRoleResult;
}

export namespace QueryPersonRoleResult {
  export type AsObject = {
    item?: repo_catalog_types_pb.PersonRole.AsObject,
    querymeta?: api_pb.BatchedQueryMetadata.AsObject,
  }

  export enum QueryResOneofCase {
    QUERY_RES_ONEOF_NOT_SET = 0,
    ITEM = 1,
    QUERYMETA = 2,
  }
}

export class UpsertCompanyRequest extends jspb.Message {
  hasItem(): boolean;
  clearItem(): void;
  getItem(): repo_catalog_types_pb.Company | undefined;
  setItem(value?: repo_catalog_types_pb.Company): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertCompanyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertCompanyRequest): UpsertCompanyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertCompanyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertCompanyRequest;
  static deserializeBinaryFromReader(message: UpsertCompanyRequest, reader: jspb.BinaryReader): UpsertCompanyRequest;
}

export namespace UpsertCompanyRequest {
  export type AsObject = {
    item?: repo_catalog_types_pb.Company.AsObject,
  }
}

export class UpsertCompanyResult extends jspb.Message {
  hasItem(): boolean;
  clearItem(): void;
  getItem(): repo_catalog_types_pb.Company | undefined;
  setItem(value?: repo_catalog_types_pb.Company): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertCompanyResult.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertCompanyResult): UpsertCompanyResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpsertCompanyResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertCompanyResult;
  static deserializeBinaryFromReader(message: UpsertCompanyResult, reader: jspb.BinaryReader): UpsertCompanyResult;
}

export namespace UpsertCompanyResult {
  export type AsObject = {
    item?: repo_catalog_types_pb.Company.AsObject,
  }
}

export class QueryCompanyResult extends jspb.Message {
  hasItem(): boolean;
  clearItem(): void;
  getItem(): repo_catalog_types_pb.Company | undefined;
  setItem(value?: repo_catalog_types_pb.Company): void;

  hasQuerymeta(): boolean;
  clearQuerymeta(): void;
  getQuerymeta(): api_pb.BatchedQueryMetadata | undefined;
  setQuerymeta(value?: api_pb.BatchedQueryMetadata): void;

  getQueryResOneofCase(): QueryCompanyResult.QueryResOneofCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryCompanyResult.AsObject;
  static toObject(includeInstance: boolean, msg: QueryCompanyResult): QueryCompanyResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryCompanyResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryCompanyResult;
  static deserializeBinaryFromReader(message: QueryCompanyResult, reader: jspb.BinaryReader): QueryCompanyResult;
}

export namespace QueryCompanyResult {
  export type AsObject = {
    item?: repo_catalog_types_pb.Company.AsObject,
    querymeta?: api_pb.BatchedQueryMetadata.AsObject,
  }

  export enum QueryResOneofCase {
    QUERY_RES_ONEOF_NOT_SET = 0,
    ITEM = 1,
    QUERYMETA = 2,
  }
}

