// package: listenfield.repo.catalog
// file: repo/catalog-types.proto

import * as jspb from "google-protobuf";
import * as repo_common_types_pb from "../repo/common-types_pb";

export class ContactInfo extends jspb.Message {
  hasIds(): boolean;
  clearIds(): void;
  getIds(): repo_common_types_pb.CompoundIdentifier | undefined;
  setIds(value?: repo_common_types_pb.CompoundIdentifier): void;

  hasData(): boolean;
  clearData(): void;
  getData(): ContactInfo.Data | undefined;
  setData(value?: ContactInfo.Data): void;

  getOwner(): string;
  setOwner(value: string): void;

  clearContextitemsList(): void;
  getContextitemsList(): Array<repo_common_types_pb.ContextItem>;
  setContextitemsList(value: Array<repo_common_types_pb.ContextItem>): void;
  addContextitems(value?: repo_common_types_pb.ContextItem, index?: number): repo_common_types_pb.ContextItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ContactInfo): ContactInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactInfo;
  static deserializeBinaryFromReader(message: ContactInfo, reader: jspb.BinaryReader): ContactInfo;
}

export namespace ContactInfo {
  export type AsObject = {
    ids?: repo_common_types_pb.CompoundIdentifier.AsObject,
    data?: ContactInfo.Data.AsObject,
    owner: string,
    contextitemsList: Array<repo_common_types_pb.ContextItem.AsObject>,
  }

  export class ContactLineTypeEnum extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContactLineTypeEnum.AsObject;
    static toObject(includeInstance: boolean, msg: ContactLineTypeEnum): ContactLineTypeEnum.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ContactLineTypeEnum, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContactLineTypeEnum;
    static deserializeBinaryFromReader(message: ContactLineTypeEnum, reader: jspb.BinaryReader): ContactLineTypeEnum;
  }

  export namespace ContactLineTypeEnum {
    export type AsObject = {
    }

    export enum Value {
      FixedPhone = 0,
      MobilePhone = 1,
      Fax = 2,
      Email = 3,
      InstantMessaging = 100,
      URL = 101,
      SocialProfile = 102,
    }
  }

  export class ContactLine extends jspb.Message {
    getIdentifier(): string;
    setIdentifier(value: string): void;

    getType(): ContactInfo.ContactLineTypeEnum.Value;
    setType(value: ContactInfo.ContactLineTypeEnum.Value): void;

    getAnnotation(): string;
    setAnnotation(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContactLine.AsObject;
    static toObject(includeInstance: boolean, msg: ContactLine): ContactLine.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ContactLine, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContactLine;
    static deserializeBinaryFromReader(message: ContactLine, reader: jspb.BinaryReader): ContactLine;
  }

  export namespace ContactLine {
    export type AsObject = {
      identifier: string,
      type: ContactInfo.ContactLineTypeEnum.Value,
      annotation: string,
    }
  }

  export class Data extends jspb.Message {
    getAddressline1(): string;
    setAddressline1(value: string): void;

    getAddressline2(): string;
    setAddressline2(value: string): void;

    getPoboxnumber(): string;
    setPoboxnumber(value: string): void;

    getPostalcode(): string;
    setPostalcode(value: string): void;

    getCity(): string;
    setCity(value: string): void;

    getStateorprovince(): string;
    setStateorprovince(value: string): void;

    getCountry(): string;
    setCountry(value: string): void;

    getCountrycode(): string;
    setCountrycode(value: string): void;

    clearContactlinesList(): void;
    getContactlinesList(): Array<ContactInfo.ContactLine>;
    setContactlinesList(value: Array<ContactInfo.ContactLine>): void;
    addContactlines(value?: ContactInfo.ContactLine, index?: number): ContactInfo.ContactLine;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): repo_common_types_pb.Location | undefined;
    setLocation(value?: repo_common_types_pb.Location): void;

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
      addressline1: string,
      addressline2: string,
      poboxnumber: string,
      postalcode: string,
      city: string,
      stateorprovince: string,
      country: string,
      countrycode: string,
      contactlinesList: Array<ContactInfo.ContactLine.AsObject>,
      location?: repo_common_types_pb.Location.AsObject,
    }
  }
}

export class Grower extends jspb.Message {
  hasIds(): boolean;
  clearIds(): void;
  getIds(): repo_common_types_pb.CompoundIdentifier | undefined;
  setIds(value?: repo_common_types_pb.CompoundIdentifier): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Grower.Data | undefined;
  setData(value?: Grower.Data): void;

  getOwner(): string;
  setOwner(value: string): void;

  clearContextitemsList(): void;
  getContextitemsList(): Array<repo_common_types_pb.ContextItem>;
  setContextitemsList(value: Array<repo_common_types_pb.ContextItem>): void;
  addContextitems(value?: repo_common_types_pb.ContextItem, index?: number): repo_common_types_pb.ContextItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Grower.AsObject;
  static toObject(includeInstance: boolean, msg: Grower): Grower.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Grower, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Grower;
  static deserializeBinaryFromReader(message: Grower, reader: jspb.BinaryReader): Grower;
}

export namespace Grower {
  export type AsObject = {
    ids?: repo_common_types_pb.CompoundIdentifier.AsObject,
    data?: Grower.Data.AsObject,
    owner: string,
    contextitemsList: Array<repo_common_types_pb.ContextItem.AsObject>,
  }

  export class Data extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getContactinfoid(): string;
    setContactinfoid(value: string): void;

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
      name: string,
      contactinfoid: string,
    }
  }
}

export class Farm extends jspb.Message {
  hasIds(): boolean;
  clearIds(): void;
  getIds(): repo_common_types_pb.CompoundIdentifier | undefined;
  setIds(value?: repo_common_types_pb.CompoundIdentifier): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Farm.Data | undefined;
  setData(value?: Farm.Data): void;

  getOwner(): string;
  setOwner(value: string): void;

  clearContextitemsList(): void;
  getContextitemsList(): Array<repo_common_types_pb.ContextItem>;
  setContextitemsList(value: Array<repo_common_types_pb.ContextItem>): void;
  addContextitems(value?: repo_common_types_pb.ContextItem, index?: number): repo_common_types_pb.ContextItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Farm.AsObject;
  static toObject(includeInstance: boolean, msg: Farm): Farm.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Farm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Farm;
  static deserializeBinaryFromReader(message: Farm, reader: jspb.BinaryReader): Farm;
}

export namespace Farm {
  export type AsObject = {
    ids?: repo_common_types_pb.CompoundIdentifier.AsObject,
    data?: Farm.Data.AsObject,
    owner: string,
    contextitemsList: Array<repo_common_types_pb.ContextItem.AsObject>,
  }

  export class Data extends jspb.Message {
    getDescription(): string;
    setDescription(value: string): void;

    getGrowerid(): string;
    setGrowerid(value: string): void;

    getContactinfoid(): string;
    setContactinfoid(value: string): void;

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
      growerid: string,
      contactinfoid: string,
    }
  }
}

export class FieldBoundary extends jspb.Message {
  hasIds(): boolean;
  clearIds(): void;
  getIds(): repo_common_types_pb.CompoundIdentifier | undefined;
  setIds(value?: repo_common_types_pb.CompoundIdentifier): void;

  hasData(): boolean;
  clearData(): void;
  getData(): FieldBoundary.Data | undefined;
  setData(value?: FieldBoundary.Data): void;

  getOwner(): string;
  setOwner(value: string): void;

  clearContextitemsList(): void;
  getContextitemsList(): Array<repo_common_types_pb.ContextItem>;
  setContextitemsList(value: Array<repo_common_types_pb.ContextItem>): void;
  addContextitems(value?: repo_common_types_pb.ContextItem, index?: number): repo_common_types_pb.ContextItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldBoundary.AsObject;
  static toObject(includeInstance: boolean, msg: FieldBoundary): FieldBoundary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FieldBoundary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldBoundary;
  static deserializeBinaryFromReader(message: FieldBoundary, reader: jspb.BinaryReader): FieldBoundary;
}

export namespace FieldBoundary {
  export type AsObject = {
    ids?: repo_common_types_pb.CompoundIdentifier.AsObject,
    data?: FieldBoundary.Data.AsObject,
    owner: string,
    contextitemsList: Array<repo_common_types_pb.ContextItem.AsObject>,
  }

  export class InteriorBoundaryAttribute extends jspb.Message {
    getShapeidref(): number;
    setShapeidref(value: number): void;

    getIspassable(): boolean;
    setIspassable(value: boolean): void;

    getDescription(): string;
    setDescription(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InteriorBoundaryAttribute.AsObject;
    static toObject(includeInstance: boolean, msg: InteriorBoundaryAttribute): InteriorBoundaryAttribute.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InteriorBoundaryAttribute, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InteriorBoundaryAttribute;
    static deserializeBinaryFromReader(message: InteriorBoundaryAttribute, reader: jspb.BinaryReader): InteriorBoundaryAttribute;
  }

  export namespace InteriorBoundaryAttribute {
    export type AsObject = {
      shapeidref: number,
      ispassable: boolean,
      description: string,
    }
  }

  export class DrivenHeadland extends jspb.Message {
    getDescription(): string;
    setDescription(value: string): void;

    hasSpatialdata(): boolean;
    clearSpatialdata(): void;
    getSpatialdata(): repo_common_types_pb.MultiPolygon | undefined;
    setSpatialdata(value?: repo_common_types_pb.MultiPolygon): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DrivenHeadland.AsObject;
    static toObject(includeInstance: boolean, msg: DrivenHeadland): DrivenHeadland.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DrivenHeadland, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DrivenHeadland;
    static deserializeBinaryFromReader(message: DrivenHeadland, reader: jspb.BinaryReader): DrivenHeadland;
  }

  export namespace DrivenHeadland {
    export type AsObject = {
      description: string,
      spatialdata?: repo_common_types_pb.MultiPolygon.AsObject,
    }
  }

  export class ConstantOffsetHeadland extends jspb.Message {
    getDescription(): string;
    setDescription(value: string): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): repo_common_types_pb.NumericRepresentationValue | undefined;
    setValue(value?: repo_common_types_pb.NumericRepresentationValue): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConstantOffsetHeadland.AsObject;
    static toObject(includeInstance: boolean, msg: ConstantOffsetHeadland): ConstantOffsetHeadland.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConstantOffsetHeadland, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConstantOffsetHeadland;
    static deserializeBinaryFromReader(message: ConstantOffsetHeadland, reader: jspb.BinaryReader): ConstantOffsetHeadland;
  }

  export namespace ConstantOffsetHeadland {
    export type AsObject = {
      description: string,
      value?: repo_common_types_pb.NumericRepresentationValue.AsObject,
    }
  }

  export class Data extends jspb.Message {
    getDescription(): string;
    setDescription(value: string): void;

    getFieldid(): string;
    setFieldid(value: string): void;

    hasSpatialdata(): boolean;
    clearSpatialdata(): void;
    getSpatialdata(): repo_common_types_pb.MultiPolygon | undefined;
    setSpatialdata(value?: repo_common_types_pb.MultiPolygon): void;

    clearTimescopeidsList(): void;
    getTimescopeidsList(): Array<string>;
    setTimescopeidsList(value: Array<string>): void;
    addTimescopeids(value: string, index?: number): string;

    hasDrivenheadland(): boolean;
    clearDrivenheadland(): void;
    getDrivenheadland(): FieldBoundary.DrivenHeadland | undefined;
    setDrivenheadland(value?: FieldBoundary.DrivenHeadland): void;

    hasConstantoffsetheadland(): boolean;
    clearConstantoffsetheadland(): void;
    getConstantoffsetheadland(): FieldBoundary.ConstantOffsetHeadland | undefined;
    setConstantoffsetheadland(value?: FieldBoundary.ConstantOffsetHeadland): void;

    hasBoundarysource(): boolean;
    clearBoundarysource(): void;
    getBoundarysource(): repo_common_types_pb.GpsSource | undefined;
    setBoundarysource(value?: repo_common_types_pb.GpsSource): void;

    getOriginalepsgcode(): string;
    setOriginalepsgcode(value: string): void;

    clearInteriorboundaryattributesList(): void;
    getInteriorboundaryattributesList(): Array<FieldBoundary.InteriorBoundaryAttribute>;
    setInteriorboundaryattributesList(value: Array<FieldBoundary.InteriorBoundaryAttribute>): void;
    addInteriorboundaryattributes(value?: FieldBoundary.InteriorBoundaryAttribute, index?: number): FieldBoundary.InteriorBoundaryAttribute;

    getHeadlandCase(): Data.HeadlandCase;
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
      fieldid: string,
      spatialdata?: repo_common_types_pb.MultiPolygon.AsObject,
      timescopeidsList: Array<string>,
      drivenheadland?: FieldBoundary.DrivenHeadland.AsObject,
      constantoffsetheadland?: FieldBoundary.ConstantOffsetHeadland.AsObject,
      boundarysource?: repo_common_types_pb.GpsSource.AsObject,
      originalepsgcode: string,
      interiorboundaryattributesList: Array<FieldBoundary.InteriorBoundaryAttribute.AsObject>,
    }

    export enum HeadlandCase {
      HEADLAND_NOT_SET = 0,
      DRIVENHEADLAND = 101,
      CONSTANTOFFSETHEADLAND = 102,
    }
  }
}

export class Field extends jspb.Message {
  hasIds(): boolean;
  clearIds(): void;
  getIds(): repo_common_types_pb.CompoundIdentifier | undefined;
  setIds(value?: repo_common_types_pb.CompoundIdentifier): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Field.Data | undefined;
  setData(value?: Field.Data): void;

  getOwner(): string;
  setOwner(value: string): void;

  clearContextitemsList(): void;
  getContextitemsList(): Array<repo_common_types_pb.ContextItem>;
  setContextitemsList(value: Array<repo_common_types_pb.ContextItem>): void;
  addContextitems(value?: repo_common_types_pb.ContextItem, index?: number): repo_common_types_pb.ContextItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Field.AsObject;
  static toObject(includeInstance: boolean, msg: Field): Field.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Field, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Field;
  static deserializeBinaryFromReader(message: Field, reader: jspb.BinaryReader): Field;
}

export namespace Field {
  export type AsObject = {
    ids?: repo_common_types_pb.CompoundIdentifier.AsObject,
    data?: Field.Data.AsObject,
    owner: string,
    contextitemsList: Array<repo_common_types_pb.ContextItem.AsObject>,
  }

  export class Data extends jspb.Message {
    getDescription(): string;
    setDescription(value: string): void;

    getFarmid(): string;
    setFarmid(value: string): void;

    hasArea(): boolean;
    clearArea(): void;
    getArea(): repo_common_types_pb.NumericRepresentationValue | undefined;
    setArea(value?: repo_common_types_pb.NumericRepresentationValue): void;

    clearTimescopeidsList(): void;
    getTimescopeidsList(): Array<string>;
    setTimescopeidsList(value: Array<string>): void;
    addTimescopeids(value: string, index?: number): string;

    getActiveboundaryid(): string;
    setActiveboundaryid(value: string): void;

    hasSlope(): boolean;
    clearSlope(): void;
    getSlope(): repo_common_types_pb.NumericRepresentationValue | undefined;
    setSlope(value?: repo_common_types_pb.NumericRepresentationValue): void;

    hasAspect(): boolean;
    clearAspect(): void;
    getAspect(): repo_common_types_pb.NumericRepresentationValue | undefined;
    setAspect(value?: repo_common_types_pb.NumericRepresentationValue): void;

    hasSlopelength(): boolean;
    clearSlopelength(): void;
    getSlopelength(): repo_common_types_pb.NumericRepresentationValue | undefined;
    setSlopelength(value?: repo_common_types_pb.NumericRepresentationValue): void;

    clearGuidancegroupidsList(): void;
    getGuidancegroupidsList(): Array<string>;
    setGuidancegroupidsList(value: Array<string>): void;
    addGuidancegroupids(value: string, index?: number): string;

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
      farmid: string,
      area?: repo_common_types_pb.NumericRepresentationValue.AsObject,
      timescopeidsList: Array<string>,
      activeboundaryid: string,
      slope?: repo_common_types_pb.NumericRepresentationValue.AsObject,
      aspect?: repo_common_types_pb.NumericRepresentationValue.AsObject,
      slopelength?: repo_common_types_pb.NumericRepresentationValue.AsObject,
      guidancegroupidsList: Array<string>,
    }
  }
}

export class Crop extends jspb.Message {
  hasIds(): boolean;
  clearIds(): void;
  getIds(): repo_common_types_pb.CompoundIdentifier | undefined;
  setIds(value?: repo_common_types_pb.CompoundIdentifier): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Crop.Data | undefined;
  setData(value?: Crop.Data): void;

  getOwner(): string;
  setOwner(value: string): void;

  clearContextitemsList(): void;
  getContextitemsList(): Array<repo_common_types_pb.ContextItem>;
  setContextitemsList(value: Array<repo_common_types_pb.ContextItem>): void;
  addContextitems(value?: repo_common_types_pb.ContextItem, index?: number): repo_common_types_pb.ContextItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Crop.AsObject;
  static toObject(includeInstance: boolean, msg: Crop): Crop.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Crop, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Crop;
  static deserializeBinaryFromReader(message: Crop, reader: jspb.BinaryReader): Crop;
}

export namespace Crop {
  export type AsObject = {
    ids?: repo_common_types_pb.CompoundIdentifier.AsObject,
    data?: Crop.Data.AsObject,
    owner: string,
    contextitemsList: Array<repo_common_types_pb.ContextItem.AsObject>,
  }

  export class Data extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getParentid(): string;
    setParentid(value: string): void;

    hasReferenceweight(): boolean;
    clearReferenceweight(): void;
    getReferenceweight(): repo_common_types_pb.NumericRepresentationValue | undefined;
    setReferenceweight(value?: repo_common_types_pb.NumericRepresentationValue): void;

    hasStandardpayablemoisture(): boolean;
    clearStandardpayablemoisture(): void;
    getStandardpayablemoisture(): repo_common_types_pb.NumericRepresentationValue | undefined;
    setStandardpayablemoisture(value?: repo_common_types_pb.NumericRepresentationValue): void;

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
      name: string,
      parentid: string,
      referenceweight?: repo_common_types_pb.NumericRepresentationValue.AsObject,
      standardpayablemoisture?: repo_common_types_pb.NumericRepresentationValue.AsObject,
    }
  }
}

export class CropZone extends jspb.Message {
  hasIds(): boolean;
  clearIds(): void;
  getIds(): repo_common_types_pb.CompoundIdentifier | undefined;
  setIds(value?: repo_common_types_pb.CompoundIdentifier): void;

  hasData(): boolean;
  clearData(): void;
  getData(): CropZone.Data | undefined;
  setData(value?: CropZone.Data): void;

  getOwner(): string;
  setOwner(value: string): void;

  clearContextitemsList(): void;
  getContextitemsList(): Array<repo_common_types_pb.ContextItem>;
  setContextitemsList(value: Array<repo_common_types_pb.ContextItem>): void;
  addContextitems(value?: repo_common_types_pb.ContextItem, index?: number): repo_common_types_pb.ContextItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CropZone.AsObject;
  static toObject(includeInstance: boolean, msg: CropZone): CropZone.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CropZone, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CropZone;
  static deserializeBinaryFromReader(message: CropZone, reader: jspb.BinaryReader): CropZone;
}

export namespace CropZone {
  export type AsObject = {
    ids?: repo_common_types_pb.CompoundIdentifier.AsObject,
    data?: CropZone.Data.AsObject,
    owner: string,
    contextitemsList: Array<repo_common_types_pb.ContextItem.AsObject>,
  }

  export class Data extends jspb.Message {
    clearTimescopeidsList(): void;
    getTimescopeidsList(): Array<string>;
    setTimescopeidsList(value: Array<string>): void;
    addTimescopeids(value: string, index?: number): string;

    getDescription(): string;
    setDescription(value: string): void;

    getFieldid(): string;
    setFieldid(value: string): void;

    getCropid(): string;
    setCropid(value: string): void;

    hasArea(): boolean;
    clearArea(): void;
    getArea(): repo_common_types_pb.NumericRepresentationValue | undefined;
    setArea(value?: repo_common_types_pb.NumericRepresentationValue): void;

    hasBoundingregion(): boolean;
    clearBoundingregion(): void;
    getBoundingregion(): repo_common_types_pb.MultiPolygon | undefined;
    setBoundingregion(value?: repo_common_types_pb.MultiPolygon): void;

    hasBoundarysource(): boolean;
    clearBoundarysource(): void;
    getBoundarysource(): repo_common_types_pb.GpsSource | undefined;
    setBoundarysource(value?: repo_common_types_pb.GpsSource): void;

    clearNoteidsList(): void;
    getNoteidsList(): Array<string>;
    setNoteidsList(value: Array<string>): void;
    addNoteids(value: string, index?: number): string;

    clearGuidancegroupidsList(): void;
    getGuidancegroupidsList(): Array<string>;
    setGuidancegroupidsList(value: Array<string>): void;
    addGuidancegroupids(value: string, index?: number): string;

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
      timescopeidsList: Array<string>,
      description: string,
      fieldid: string,
      cropid: string,
      area?: repo_common_types_pb.NumericRepresentationValue.AsObject,
      boundingregion?: repo_common_types_pb.MultiPolygon.AsObject,
      boundarysource?: repo_common_types_pb.GpsSource.AsObject,
      noteidsList: Array<string>,
      guidancegroupidsList: Array<string>,
    }
  }
}

export class Person extends jspb.Message {
  hasIds(): boolean;
  clearIds(): void;
  getIds(): repo_common_types_pb.CompoundIdentifier | undefined;
  setIds(value?: repo_common_types_pb.CompoundIdentifier): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Person.Data | undefined;
  setData(value?: Person.Data): void;

  getOwner(): string;
  setOwner(value: string): void;

  clearContextitemsList(): void;
  getContextitemsList(): Array<repo_common_types_pb.ContextItem>;
  setContextitemsList(value: Array<repo_common_types_pb.ContextItem>): void;
  addContextitems(value?: repo_common_types_pb.ContextItem, index?: number): repo_common_types_pb.ContextItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Person.AsObject;
  static toObject(includeInstance: boolean, msg: Person): Person.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Person, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Person;
  static deserializeBinaryFromReader(message: Person, reader: jspb.BinaryReader): Person;
}

export namespace Person {
  export type AsObject = {
    ids?: repo_common_types_pb.CompoundIdentifier.AsObject,
    data?: Person.Data.AsObject,
    owner: string,
    contextitemsList: Array<repo_common_types_pb.ContextItem.AsObject>,
  }

  export class Data extends jspb.Message {
    getFirstname(): string;
    setFirstname(value: string): void;

    getMiddlename(): string;
    setMiddlename(value: string): void;

    getLastname(): string;
    setLastname(value: string): void;

    getCombinedname(): string;
    setCombinedname(value: string): void;

    getContactinfoid(): string;
    setContactinfoid(value: string): void;

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
      firstname: string,
      middlename: string,
      lastname: string,
      combinedname: string,
      contactinfoid: string,
    }
  }
}

export class PersonRole extends jspb.Message {
  hasIds(): boolean;
  clearIds(): void;
  getIds(): repo_common_types_pb.CompoundIdentifier | undefined;
  setIds(value?: repo_common_types_pb.CompoundIdentifier): void;

  hasData(): boolean;
  clearData(): void;
  getData(): PersonRole.Data | undefined;
  setData(value?: PersonRole.Data): void;

  getOwner(): string;
  setOwner(value: string): void;

  clearContextitemsList(): void;
  getContextitemsList(): Array<repo_common_types_pb.ContextItem>;
  setContextitemsList(value: Array<repo_common_types_pb.ContextItem>): void;
  addContextitems(value?: repo_common_types_pb.ContextItem, index?: number): repo_common_types_pb.ContextItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PersonRole.AsObject;
  static toObject(includeInstance: boolean, msg: PersonRole): PersonRole.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PersonRole, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PersonRole;
  static deserializeBinaryFromReader(message: PersonRole, reader: jspb.BinaryReader): PersonRole;
}

export namespace PersonRole {
  export type AsObject = {
    ids?: repo_common_types_pb.CompoundIdentifier.AsObject,
    data?: PersonRole.Data.AsObject,
    owner: string,
    contextitemsList: Array<repo_common_types_pb.ContextItem.AsObject>,
  }

  export class PersonRolesEnum extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PersonRolesEnum.AsObject;
    static toObject(includeInstance: boolean, msg: PersonRolesEnum): PersonRolesEnum.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PersonRolesEnum, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PersonRolesEnum;
    static deserializeBinaryFromReader(message: PersonRolesEnum, reader: jspb.BinaryReader): PersonRolesEnum;
  }

  export namespace PersonRolesEnum {
    export type AsObject = {
    }

    export enum Value {
      Unspecified = 0,
      Grower = 1,
      MarketProvider = 2,
      Customer = 3,
      Operator = 4,
      Owner = 5,
      FarmManager = 6,
      MarketAdvisor = 7,
      EndUser = 8,
      Financier = 9,
      InsuranceAgent = 10,
      GovernmentAgency = 11,
      FixedAssetSupplier = 12,
      MobileAssetSupplier = 13,
      InputSupplier = 14,
      IrrigationManager = 15,
      CropAdvisor = 16,
      CustomServiceProvider = 17,
      Laborer = 18,
      Transporter = 19,
      DataServicesProvider = 20,
      Authorizer = 21,
    }
  }

  export class Data extends jspb.Message {
    getPersonid(): string;
    setPersonid(value: string): void;

    getGrowerid(): string;
    setGrowerid(value: string): void;

    clearActivescopeidsList(): void;
    getActivescopeidsList(): Array<string>;
    setActivescopeidsList(value: Array<string>): void;
    addActivescopeids(value: string, index?: number): string;

    getRole(): PersonRole.PersonRolesEnum.Value;
    setRole(value: PersonRole.PersonRolesEnum.Value): void;

    getCompanyid(): string;
    setCompanyid(value: string): void;

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
      personid: string,
      growerid: string,
      activescopeidsList: Array<string>,
      role: PersonRole.PersonRolesEnum.Value,
      companyid: string,
    }
  }
}

export class Company extends jspb.Message {
  hasIds(): boolean;
  clearIds(): void;
  getIds(): repo_common_types_pb.CompoundIdentifier | undefined;
  setIds(value?: repo_common_types_pb.CompoundIdentifier): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Company.Data | undefined;
  setData(value?: Company.Data): void;

  getOwner(): string;
  setOwner(value: string): void;

  clearContextitemsList(): void;
  getContextitemsList(): Array<repo_common_types_pb.ContextItem>;
  setContextitemsList(value: Array<repo_common_types_pb.ContextItem>): void;
  addContextitems(value?: repo_common_types_pb.ContextItem, index?: number): repo_common_types_pb.ContextItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Company.AsObject;
  static toObject(includeInstance: boolean, msg: Company): Company.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Company, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Company;
  static deserializeBinaryFromReader(message: Company, reader: jspb.BinaryReader): Company;
}

export namespace Company {
  export type AsObject = {
    ids?: repo_common_types_pb.CompoundIdentifier.AsObject,
    data?: Company.Data.AsObject,
    owner: string,
    contextitemsList: Array<repo_common_types_pb.ContextItem.AsObject>,
  }

  export class Data extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getContactinfoid(): string;
    setContactinfoid(value: string): void;

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
      name: string,
      contactinfoid: string,
    }
  }
}

