// package: listenfield.repo.common
// file: repo/common-types.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class CompoundIdentifier extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  clearUniqueidsList(): void;
  getUniqueidsList(): Array<CompoundIdentifier.UniqueId>;
  setUniqueidsList(value: Array<CompoundIdentifier.UniqueId>): void;
  addUniqueids(value?: CompoundIdentifier.UniqueId, index?: number): CompoundIdentifier.UniqueId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompoundIdentifier.AsObject;
  static toObject(includeInstance: boolean, msg: CompoundIdentifier): CompoundIdentifier.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompoundIdentifier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompoundIdentifier;
  static deserializeBinaryFromReader(message: CompoundIdentifier, reader: jspb.BinaryReader): CompoundIdentifier;
}

export namespace CompoundIdentifier {
  export type AsObject = {
    uuid: string,
    uniqueidsList: Array<CompoundIdentifier.UniqueId.AsObject>,
  }

  export class CompoundIdentifierTypeEnum extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CompoundIdentifierTypeEnum.AsObject;
    static toObject(includeInstance: boolean, msg: CompoundIdentifierTypeEnum): CompoundIdentifierTypeEnum.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CompoundIdentifierTypeEnum, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CompoundIdentifierTypeEnum;
    static deserializeBinaryFromReader(message: CompoundIdentifierTypeEnum, reader: jspb.BinaryReader): CompoundIdentifierTypeEnum;
  }

  export namespace CompoundIdentifierTypeEnum {
    export type AsObject = {
    }

    export enum Value {
      UUID = 0,
      String = 1,
      LongInt = 2,
      URI = 3,
    }
  }

  export class IdSourceTypeEnum extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IdSourceTypeEnum.AsObject;
    static toObject(includeInstance: boolean, msg: IdSourceTypeEnum): IdSourceTypeEnum.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IdSourceTypeEnum, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IdSourceTypeEnum;
    static deserializeBinaryFromReader(message: IdSourceTypeEnum, reader: jspb.BinaryReader): IdSourceTypeEnum;
  }

  export namespace IdSourceTypeEnum {
    export type AsObject = {
    }

    export enum Value {
      URI = 0,
      GLN = 1,
    }
  }

  export class UniqueId extends jspb.Message {
    getId(): string;
    setId(value: string): void;

    getIdentifiertype(): CompoundIdentifier.CompoundIdentifierTypeEnum.Value;
    setIdentifiertype(value: CompoundIdentifier.CompoundIdentifierTypeEnum.Value): void;

    getSource(): string;
    setSource(value: string): void;

    getSourcetype(): CompoundIdentifier.IdSourceTypeEnum.Value;
    setSourcetype(value: CompoundIdentifier.IdSourceTypeEnum.Value): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UniqueId.AsObject;
    static toObject(includeInstance: boolean, msg: UniqueId): UniqueId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UniqueId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UniqueId;
    static deserializeBinaryFromReader(message: UniqueId, reader: jspb.BinaryReader): UniqueId;
  }

  export namespace UniqueId {
    export type AsObject = {
      id: string,
      identifiertype: CompoundIdentifier.CompoundIdentifierTypeEnum.Value,
      source: string,
      sourcetype: CompoundIdentifier.IdSourceTypeEnum.Value,
    }
  }
}

export class NumericValue extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  getUnitofmeasureid(): string;
  setUnitofmeasureid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NumericValue.AsObject;
  static toObject(includeInstance: boolean, msg: NumericValue): NumericValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NumericValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NumericValue;
  static deserializeBinaryFromReader(message: NumericValue, reader: jspb.BinaryReader): NumericValue;
}

export namespace NumericValue {
  export type AsObject = {
    value: number,
    unitofmeasureid: string,
  }
}

export class NumericRepresentationValue extends jspb.Message {
  getRepresentationid(): string;
  setRepresentationid(value: string): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): NumericValue | undefined;
  setValue(value?: NumericValue): void;

  getUnitofmeasureid(): string;
  setUnitofmeasureid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NumericRepresentationValue.AsObject;
  static toObject(includeInstance: boolean, msg: NumericRepresentationValue): NumericRepresentationValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NumericRepresentationValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NumericRepresentationValue;
  static deserializeBinaryFromReader(message: NumericRepresentationValue, reader: jspb.BinaryReader): NumericRepresentationValue;
}

export namespace NumericRepresentationValue {
  export type AsObject = {
    representationid: string,
    value?: NumericValue.AsObject,
    unitofmeasureid: string,
  }
}

export class StringRepresentationValue extends jspb.Message {
  getRepresentationid(): string;
  setRepresentationid(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  getUnitofmeasureid(): string;
  setUnitofmeasureid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringRepresentationValue.AsObject;
  static toObject(includeInstance: boolean, msg: StringRepresentationValue): StringRepresentationValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StringRepresentationValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringRepresentationValue;
  static deserializeBinaryFromReader(message: StringRepresentationValue, reader: jspb.BinaryReader): StringRepresentationValue;
}

export namespace StringRepresentationValue {
  export type AsObject = {
    representationid: string,
    value: string,
    unitofmeasureid: string,
  }
}

export class EnumeratedRepresentationValue extends jspb.Message {
  getRepresentationid(): string;
  setRepresentationid(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  getUnitofmeasureid(): string;
  setUnitofmeasureid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnumeratedRepresentationValue.AsObject;
  static toObject(includeInstance: boolean, msg: EnumeratedRepresentationValue): EnumeratedRepresentationValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnumeratedRepresentationValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnumeratedRepresentationValue;
  static deserializeBinaryFromReader(message: EnumeratedRepresentationValue, reader: jspb.BinaryReader): EnumeratedRepresentationValue;
}

export namespace EnumeratedRepresentationValue {
  export type AsObject = {
    representationid: string,
    value: string,
    unitofmeasureid: string,
  }
}

export class ContextItem extends jspb.Message {
  getContextitemtype(): string;
  setContextitemtype(value: string): void;

  hasNumericrepresentationvalue(): boolean;
  clearNumericrepresentationvalue(): void;
  getNumericrepresentationvalue(): NumericRepresentationValue | undefined;
  setNumericrepresentationvalue(value?: NumericRepresentationValue): void;

  hasStringrepresentationvalue(): boolean;
  clearStringrepresentationvalue(): void;
  getStringrepresentationvalue(): StringRepresentationValue | undefined;
  setStringrepresentationvalue(value?: StringRepresentationValue): void;

  hasEnumeratedrepresentationvalue(): boolean;
  clearEnumeratedrepresentationvalue(): void;
  getEnumeratedrepresentationvalue(): EnumeratedRepresentationValue | undefined;
  setEnumeratedrepresentationvalue(value?: EnumeratedRepresentationValue): void;

  clearContextitemsList(): void;
  getContextitemsList(): Array<ContextItem>;
  setContextitemsList(value: Array<ContextItem>): void;
  addContextitems(value?: ContextItem, index?: number): ContextItem;

  getRepresentationValueCase(): ContextItem.RepresentationValueCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContextItem.AsObject;
  static toObject(includeInstance: boolean, msg: ContextItem): ContextItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContextItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContextItem;
  static deserializeBinaryFromReader(message: ContextItem, reader: jspb.BinaryReader): ContextItem;
}

export namespace ContextItem {
  export type AsObject = {
    contextitemtype: string,
    numericrepresentationvalue?: NumericRepresentationValue.AsObject,
    stringrepresentationvalue?: StringRepresentationValue.AsObject,
    enumeratedrepresentationvalue?: EnumeratedRepresentationValue.AsObject,
    contextitemsList: Array<ContextItem.AsObject>,
  }

  export enum RepresentationValueCase {
    REPRESENTATION_VALUE_NOT_SET = 0,
    NUMERICREPRESENTATIONVALUE = 2,
    STRINGREPRESENTATIONVALUE = 3,
    ENUMERATEDREPRESENTATIONVALUE = 4,
  }
}

export class TimeScope extends jspb.Message {
  hasIds(): boolean;
  clearIds(): void;
  getIds(): CompoundIdentifier | undefined;
  setIds(value?: CompoundIdentifier): void;

  hasData(): boolean;
  clearData(): void;
  getData(): TimeScope.Data | undefined;
  setData(value?: TimeScope.Data): void;

  getOwner(): string;
  setOwner(value: string): void;

  clearContextitemsList(): void;
  getContextitemsList(): Array<ContextItem>;
  setContextitemsList(value: Array<ContextItem>): void;
  addContextitems(value?: ContextItem, index?: number): ContextItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeScope.AsObject;
  static toObject(includeInstance: boolean, msg: TimeScope): TimeScope.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimeScope, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeScope;
  static deserializeBinaryFromReader(message: TimeScope, reader: jspb.BinaryReader): TimeScope;
}

export namespace TimeScope {
  export type AsObject = {
    ids?: CompoundIdentifier.AsObject,
    data?: TimeScope.Data.AsObject,
    owner: string,
    contextitemsList: Array<ContextItem.AsObject>,
  }

  export class DateContextEnum extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DateContextEnum.AsObject;
    static toObject(includeInstance: boolean, msg: DateContextEnum): DateContextEnum.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DateContextEnum, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DateContextEnum;
    static deserializeBinaryFromReader(message: DateContextEnum, reader: jspb.BinaryReader): DateContextEnum;
  }

  export namespace DateContextEnum {
    export type AsObject = {
    }

    export enum Value {
      Unspecified = 0,
      Approval = 1,
      ProposedStart = 2,
      ProposedEnd = 3,
      CropSeason = 4,
      TimingEvent = 5,
      ActualStart = 6,
      ActualEnd = 7,
      RequestedStart = 8,
      RequestedEnd = 9,
      Expiration = 10,
      Creation = 11,
      Modification = 12,
      ValidityRange = 13,
      RequestedShipping = 14,
      ActualShipping = 15,
      Calibration = 16,
      Load = 17,
      Unload = 18,
      Suspend = 19,
      Resume = 20,
    }
  }

  export class Data extends jspb.Message {
    getDescription(): string;
    setDescription(value: string): void;

    getDatecontext(): TimeScope.DateContextEnum.Value;
    setDatecontext(value: TimeScope.DateContextEnum.Value): void;

    hasTimestamp1(): boolean;
    clearTimestamp1(): void;
    getTimestamp1(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp1(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasTimestamp2(): boolean;
    clearTimestamp2(): void;
    getTimestamp2(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setTimestamp2(value?: google_protobuf_timestamp_pb.Timestamp): void;

    hasLocation1(): boolean;
    clearLocation1(): void;
    getLocation1(): Location | undefined;
    setLocation1(value?: Location): void;

    hasLocation2(): boolean;
    clearLocation2(): void;
    getLocation2(): Location | undefined;
    setLocation2(value?: Location): void;

    hasDuration(): boolean;
    clearDuration(): void;
    getDuration(): google_protobuf_duration_pb.Duration | undefined;
    setDuration(value?: google_protobuf_duration_pb.Duration): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Data.AsObject;
    static toObject(includeInstance: boolean, msg: Data): Data.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Data, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Data;
    static deserializeBinaryFromReader(message: Data, reader: jspb.BinaryReader): Data;
  }

  export namespace Data {
    export type AsObject = {
      description: string,
      datecontext: TimeScope.DateContextEnum.Value,
      timestamp1?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      timestamp2?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      location1?: Location.AsObject,
      location2?: Location.AsObject,
      duration?: google_protobuf_duration_pb.Duration.AsObject,
    }
  }
}

export class Point extends jspb.Message {
  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  getZ(): number;
  setZ(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Point.AsObject;
  static toObject(includeInstance: boolean, msg: Point): Point.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Point, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Point;
  static deserializeBinaryFromReader(message: Point, reader: jspb.BinaryReader): Point;
}

export namespace Point {
  export type AsObject = {
    x: number,
    y: number,
    z: number,
  }
}

export class GpsSource extends jspb.Message {
  getSourcetype(): GpsSource.GpsSourceEnum;
  setSourcetype(value: GpsSource.GpsSourceEnum): void;

  hasEstimatedprecision(): boolean;
  clearEstimatedprecision(): void;
  getEstimatedprecision(): NumericRepresentationValue | undefined;
  setEstimatedprecision(value?: NumericRepresentationValue): void;

  hasHorizontalaccuracy(): boolean;
  clearHorizontalaccuracy(): void;
  getHorizontalaccuracy(): NumericRepresentationValue | undefined;
  setHorizontalaccuracy(value?: NumericRepresentationValue): void;

  hasVerticalaccuracy(): boolean;
  clearVerticalaccuracy(): void;
  getVerticalaccuracy(): NumericRepresentationValue | undefined;
  setVerticalaccuracy(value?: NumericRepresentationValue): void;

  getNumberofsatellites(): number;
  setNumberofsatellites(value: number): void;

  getGpsutctime(): string;
  setGpsutctime(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GpsSource.AsObject;
  static toObject(includeInstance: boolean, msg: GpsSource): GpsSource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GpsSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GpsSource;
  static deserializeBinaryFromReader(message: GpsSource, reader: jspb.BinaryReader): GpsSource;
}

export namespace GpsSource {
  export type AsObject = {
    sourcetype: GpsSource.GpsSourceEnum,
    estimatedprecision?: NumericRepresentationValue.AsObject,
    horizontalaccuracy?: NumericRepresentationValue.AsObject,
    verticalaccuracy?: NumericRepresentationValue.AsObject,
    numberofsatellites: number,
    gpsutctime: string,
  }

  export enum GpsSourceEnum {
    Unknown = 0,
    Drawn = 1,
    MobileGPS = 2,
    DeereRTK = 3,
    DeereRTKX = 4,
    DeereSF1 = 5,
    DeereSF2 = 6,
    DeereWAAS = 7,
    GNSSfix = 8,
    DGNSSfix = 9,
    PreciseGNSS = 10,
    RTKFixedInteger = 11,
    RTKFloat = 12,
    EstDRmode = 13,
    ManualInput = 14,
    SimulateMode = 15,
    DesktopGeneratedData = 16,
    Other = 17,
  }
}

export class ShapeTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShapeTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ShapeTypeEnum): ShapeTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShapeTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShapeTypeEnum;
  static deserializeBinaryFromReader(message: ShapeTypeEnum, reader: jspb.BinaryReader): ShapeTypeEnum;
}

export namespace ShapeTypeEnum {
  export type AsObject = {
  }

  export enum Value {
    LinearRing = 0,
    LineString = 1,
    MultiLineString = 2,
    MultiPoint = 3,
    MultiPolygon = 4,
    Point = 5,
    Polygon = 6,
    RasterGrid = 7,
  }
}

export class LinearRing extends jspb.Message {
  clearPointsList(): void;
  getPointsList(): Array<Point>;
  setPointsList(value: Array<Point>): void;
  addPoints(value?: Point, index?: number): Point;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinearRing.AsObject;
  static toObject(includeInstance: boolean, msg: LinearRing): LinearRing.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LinearRing, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinearRing;
  static deserializeBinaryFromReader(message: LinearRing, reader: jspb.BinaryReader): LinearRing;
}

export namespace LinearRing {
  export type AsObject = {
    pointsList: Array<Point.AsObject>,
  }
}

export class Polygon extends jspb.Message {
  hasExteriorring(): boolean;
  clearExteriorring(): void;
  getExteriorring(): LinearRing | undefined;
  setExteriorring(value?: LinearRing): void;

  clearInteriorringsList(): void;
  getInteriorringsList(): Array<LinearRing>;
  setInteriorringsList(value: Array<LinearRing>): void;
  addInteriorrings(value?: LinearRing, index?: number): LinearRing;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Polygon.AsObject;
  static toObject(includeInstance: boolean, msg: Polygon): Polygon.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Polygon, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Polygon;
  static deserializeBinaryFromReader(message: Polygon, reader: jspb.BinaryReader): Polygon;
}

export namespace Polygon {
  export type AsObject = {
    exteriorring?: LinearRing.AsObject,
    interiorringsList: Array<LinearRing.AsObject>,
  }
}

export class MultiPolygon extends jspb.Message {
  clearPolygonsList(): void;
  getPolygonsList(): Array<Polygon>;
  setPolygonsList(value: Array<Polygon>): void;
  addPolygons(value?: Polygon, index?: number): Polygon;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiPolygon.AsObject;
  static toObject(includeInstance: boolean, msg: MultiPolygon): MultiPolygon.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MultiPolygon, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiPolygon;
  static deserializeBinaryFromReader(message: MultiPolygon, reader: jspb.BinaryReader): MultiPolygon;
}

export namespace MultiPolygon {
  export type AsObject = {
    polygonsList: Array<Polygon.AsObject>,
  }
}

export class Location extends jspb.Message {
  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): Point | undefined;
  setPosition(value?: Point): void;

  hasGpssource(): boolean;
  clearGpssource(): void;
  getGpssource(): GpsSource | undefined;
  setGpssource(value?: GpsSource): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Location.AsObject;
  static toObject(includeInstance: boolean, msg: Location): Location.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Location, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Location;
  static deserializeBinaryFromReader(message: Location, reader: jspb.BinaryReader): Location;
}

export namespace Location {
  export type AsObject = {
    position?: Point.AsObject,
    gpssource?: GpsSource.AsObject,
  }
}

