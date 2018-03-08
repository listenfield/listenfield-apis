// package: listenfield.auth
// file: auth.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as api_pb from "./api_pb";

export class SessionTypeRequest extends jspb.Message {
  getRefresh(): boolean;
  setRefresh(value: boolean): void;

  getUsername(): boolean;
  setUsername(value: boolean): void;

  getIdtoken(): boolean;
  setIdtoken(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessionTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SessionTypeRequest): SessionTypeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SessionTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessionTypeRequest;
  static deserializeBinaryFromReader(message: SessionTypeRequest, reader: jspb.BinaryReader): SessionTypeRequest;
}

export namespace SessionTypeRequest {
  export type AsObject = {
    refresh: boolean,
    username: boolean,
    idtoken: boolean,
  }
}

export class LoginWithPasswordRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getMfacode(): string;
  setMfacode(value: string): void;

  hasSessiontyperequest(): boolean;
  clearSessiontyperequest(): void;
  getSessiontyperequest(): SessionTypeRequest | undefined;
  setSessiontyperequest(value?: SessionTypeRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginWithPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginWithPasswordRequest): LoginWithPasswordRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginWithPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginWithPasswordRequest;
  static deserializeBinaryFromReader(message: LoginWithPasswordRequest, reader: jspb.BinaryReader): LoginWithPasswordRequest;
}

export namespace LoginWithPasswordRequest {
  export type AsObject = {
    username: string,
    password: string,
    mfacode: string,
    sessiontyperequest?: SessionTypeRequest.AsObject,
  }
}

export class ContinueLoginRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  getContinuationtoken(): string;
  setContinuationtoken(value: string): void;

  getMfacode(): string;
  setMfacode(value: string): void;

  getChallengedataMap(): jspb.Map<string, string>;
  clearChallengedataMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContinueLoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ContinueLoginRequest): ContinueLoginRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContinueLoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContinueLoginRequest;
  static deserializeBinaryFromReader(message: ContinueLoginRequest, reader: jspb.BinaryReader): ContinueLoginRequest;
}

export namespace ContinueLoginRequest {
  export type AsObject = {
    username: string,
    continuationtoken: string,
    mfacode: string,
    challengedataMap: Array<[string, string]>,
  }
}

export class LoginChallenge extends jspb.Message {
  getType(): LoginChallenge.ChallengeTypeEnum.Value;
  setType(value: LoginChallenge.ChallengeTypeEnum.Value): void;

  getDataMap(): jspb.Map<string, string>;
  clearDataMap(): void;
  getContinuationtoken(): string;
  setContinuationtoken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginChallenge.AsObject;
  static toObject(includeInstance: boolean, msg: LoginChallenge): LoginChallenge.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginChallenge, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginChallenge;
  static deserializeBinaryFromReader(message: LoginChallenge, reader: jspb.BinaryReader): LoginChallenge;
}

export namespace LoginChallenge {
  export type AsObject = {
    type: LoginChallenge.ChallengeTypeEnum.Value,
    dataMap: Array<[string, string]>,
    continuationtoken: string,
  }

  export class ChallengeTypeEnum extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChallengeTypeEnum.AsObject;
    static toObject(includeInstance: boolean, msg: ChallengeTypeEnum): ChallengeTypeEnum.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChallengeTypeEnum, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChallengeTypeEnum;
    static deserializeBinaryFromReader(message: ChallengeTypeEnum, reader: jspb.BinaryReader): ChallengeTypeEnum;
  }

  export namespace ChallengeTypeEnum {
    export type AsObject = {
    }

    export enum Value {
      MFA = 0,
      PASSWORD_VERIFIER = 1,
      NEW_PASSWORD = 2,
    }
  }
}

export class SessionInfo extends jspb.Message {
  getAccesstoken(): string;
  setAccesstoken(value: string): void;

  getTokentype(): string;
  setTokentype(value: string): void;

  hasExpiresat(): boolean;
  clearExpiresat(): void;
  getExpiresat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiresat(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getUsername(): string;
  setUsername(value: string): void;

  getRefreshtoken(): string;
  setRefreshtoken(value: string): void;

  getIdtoken(): string;
  setIdtoken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SessionInfo): SessionInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SessionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessionInfo;
  static deserializeBinaryFromReader(message: SessionInfo, reader: jspb.BinaryReader): SessionInfo;
}

export namespace SessionInfo {
  export type AsObject = {
    accesstoken: string,
    tokentype: string,
    expiresat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    username: string,
    refreshtoken: string,
    idtoken: string,
  }
}

export class LoginResult extends jspb.Message {
  hasSession(): boolean;
  clearSession(): void;
  getSession(): SessionInfo | undefined;
  setSession(value?: SessionInfo): void;

  hasChallenge(): boolean;
  clearChallenge(): void;
  getChallenge(): LoginChallenge | undefined;
  setChallenge(value?: LoginChallenge): void;

  getLoginResOneofCase(): LoginResult.LoginResOneofCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResult.AsObject;
  static toObject(includeInstance: boolean, msg: LoginResult): LoginResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginResult;
  static deserializeBinaryFromReader(message: LoginResult, reader: jspb.BinaryReader): LoginResult;
}

export namespace LoginResult {
  export type AsObject = {
    session?: SessionInfo.AsObject,
    challenge?: LoginChallenge.AsObject,
  }

  export enum LoginResOneofCase {
    LOGIN_RES_ONEOF_NOT_SET = 0,
    SESSION = 1,
    CHALLENGE = 2,
  }
}

export class RefreshRequest extends jspb.Message {
  getRefreshtoken(): string;
  setRefreshtoken(value: string): void;

  hasSessiontyperequest(): boolean;
  clearSessiontyperequest(): void;
  getSessiontyperequest(): SessionTypeRequest | undefined;
  setSessiontyperequest(value?: SessionTypeRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshRequest): RefreshRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RefreshRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshRequest;
  static deserializeBinaryFromReader(message: RefreshRequest, reader: jspb.BinaryReader): RefreshRequest;
}

export namespace RefreshRequest {
  export type AsObject = {
    refreshtoken: string,
    sessiontyperequest?: SessionTypeRequest.AsObject,
  }
}

