# Protocol Documentation
<a name="top"/>

## Table of Contents

- [repo/common-rpc.proto](#repo/common-rpc.proto)
    - [QueryTimeScopeResult](#listenfield.repo.QueryTimeScopeResult)
    - [UpsertTimeScopeRequest](#listenfield.repo.UpsertTimeScopeRequest)
    - [UpsertTimeScopeResult](#listenfield.repo.UpsertTimeScopeResult)
  
  
  
    - [Test](#listenfield.repo.Test)
    - [TimeScopes](#listenfield.repo.TimeScopes)
  

- [repo/common-types.proto](#repo/common-types.proto)
    - [CompoundIdentifier](#listenfield.repo.common.CompoundIdentifier)
    - [CompoundIdentifier.CompoundIdentifierTypeEnum](#listenfield.repo.common.CompoundIdentifier.CompoundIdentifierTypeEnum)
    - [CompoundIdentifier.IdSourceTypeEnum](#listenfield.repo.common.CompoundIdentifier.IdSourceTypeEnum)
    - [CompoundIdentifier.UniqueId](#listenfield.repo.common.CompoundIdentifier.UniqueId)
    - [ContextItem](#listenfield.repo.common.ContextItem)
    - [EnumeratedRepresentationValue](#listenfield.repo.common.EnumeratedRepresentationValue)
    - [GpsSource](#listenfield.repo.common.GpsSource)
    - [LinearRing](#listenfield.repo.common.LinearRing)
    - [Location](#listenfield.repo.common.Location)
    - [MultiPolygon](#listenfield.repo.common.MultiPolygon)
    - [NumericRepresentationValue](#listenfield.repo.common.NumericRepresentationValue)
    - [NumericValue](#listenfield.repo.common.NumericValue)
    - [Point](#listenfield.repo.common.Point)
    - [Polygon](#listenfield.repo.common.Polygon)
    - [ShapeTypeEnum](#listenfield.repo.common.ShapeTypeEnum)
    - [StringRepresentationValue](#listenfield.repo.common.StringRepresentationValue)
    - [TimeScope](#listenfield.repo.common.TimeScope)
    - [TimeScope.Data](#listenfield.repo.common.TimeScope.Data)
    - [TimeScope.DateContextEnum](#listenfield.repo.common.TimeScope.DateContextEnum)
  
    - [GpsSource.GpsSourceEnum](#listenfield.repo.common.GpsSource.GpsSourceEnum)
    - [ShapeTypeEnum.Value](#listenfield.repo.common.ShapeTypeEnum.Value)
  
  
  

- [repo/catalog-rpc.proto](#repo/catalog-rpc.proto)
    - [QueryCompanyResult](#listenfield.repo.QueryCompanyResult)
    - [QueryContactInfoResult](#listenfield.repo.QueryContactInfoResult)
    - [QueryCropResult](#listenfield.repo.QueryCropResult)
    - [QueryCropZoneResult](#listenfield.repo.QueryCropZoneResult)
    - [QueryFarmResult](#listenfield.repo.QueryFarmResult)
    - [QueryFieldBoundaryResult](#listenfield.repo.QueryFieldBoundaryResult)
    - [QueryFieldResult](#listenfield.repo.QueryFieldResult)
    - [QueryGrowerResult](#listenfield.repo.QueryGrowerResult)
    - [QueryPersonResult](#listenfield.repo.QueryPersonResult)
    - [QueryPersonRoleRequest](#listenfield.repo.QueryPersonRoleRequest)
    - [QueryPersonRoleResult](#listenfield.repo.QueryPersonRoleResult)
    - [UpsertCompanyRequest](#listenfield.repo.UpsertCompanyRequest)
    - [UpsertCompanyResult](#listenfield.repo.UpsertCompanyResult)
    - [UpsertContactInfoRequest](#listenfield.repo.UpsertContactInfoRequest)
    - [UpsertContactInfoResult](#listenfield.repo.UpsertContactInfoResult)
    - [UpsertCropRequest](#listenfield.repo.UpsertCropRequest)
    - [UpsertCropResult](#listenfield.repo.UpsertCropResult)
    - [UpsertCropZoneRequest](#listenfield.repo.UpsertCropZoneRequest)
    - [UpsertCropZoneResult](#listenfield.repo.UpsertCropZoneResult)
    - [UpsertFarmRequest](#listenfield.repo.UpsertFarmRequest)
    - [UpsertFarmResult](#listenfield.repo.UpsertFarmResult)
    - [UpsertFieldBoundaryRequest](#listenfield.repo.UpsertFieldBoundaryRequest)
    - [UpsertFieldBoundaryResult](#listenfield.repo.UpsertFieldBoundaryResult)
    - [UpsertFieldRequest](#listenfield.repo.UpsertFieldRequest)
    - [UpsertFieldResult](#listenfield.repo.UpsertFieldResult)
    - [UpsertGrowerRequest](#listenfield.repo.UpsertGrowerRequest)
    - [UpsertGrowerResult](#listenfield.repo.UpsertGrowerResult)
    - [UpsertPersonRequest](#listenfield.repo.UpsertPersonRequest)
    - [UpsertPersonResult](#listenfield.repo.UpsertPersonResult)
    - [UpsertPersonRoleRequest](#listenfield.repo.UpsertPersonRoleRequest)
    - [UpsertPersonRoleResult](#listenfield.repo.UpsertPersonRoleResult)
  
  
  
    - [Companies](#listenfield.repo.Companies)
    - [ContactInfos](#listenfield.repo.ContactInfos)
    - [CropZones](#listenfield.repo.CropZones)
    - [Crops](#listenfield.repo.Crops)
    - [Farms](#listenfield.repo.Farms)
    - [FieldBoundaries](#listenfield.repo.FieldBoundaries)
    - [Fields](#listenfield.repo.Fields)
    - [Growers](#listenfield.repo.Growers)
    - [PersonRoles](#listenfield.repo.PersonRoles)
    - [Persons](#listenfield.repo.Persons)
  

- [repo/catalog-types.proto](#repo/catalog-types.proto)
    - [Company](#listenfield.repo.catalog.Company)
    - [Company.Data](#listenfield.repo.catalog.Company.Data)
    - [ContactInfo](#listenfield.repo.catalog.ContactInfo)
    - [ContactInfo.ContactLine](#listenfield.repo.catalog.ContactInfo.ContactLine)
    - [ContactInfo.ContactLineTypeEnum](#listenfield.repo.catalog.ContactInfo.ContactLineTypeEnum)
    - [ContactInfo.Data](#listenfield.repo.catalog.ContactInfo.Data)
    - [Crop](#listenfield.repo.catalog.Crop)
    - [Crop.Data](#listenfield.repo.catalog.Crop.Data)
    - [CropZone](#listenfield.repo.catalog.CropZone)
    - [CropZone.Data](#listenfield.repo.catalog.CropZone.Data)
    - [Farm](#listenfield.repo.catalog.Farm)
    - [Farm.Data](#listenfield.repo.catalog.Farm.Data)
    - [Field](#listenfield.repo.catalog.Field)
    - [Field.Data](#listenfield.repo.catalog.Field.Data)
    - [FieldBoundary](#listenfield.repo.catalog.FieldBoundary)
    - [FieldBoundary.ConstantOffsetHeadland](#listenfield.repo.catalog.FieldBoundary.ConstantOffsetHeadland)
    - [FieldBoundary.Data](#listenfield.repo.catalog.FieldBoundary.Data)
    - [FieldBoundary.DrivenHeadland](#listenfield.repo.catalog.FieldBoundary.DrivenHeadland)
    - [FieldBoundary.InteriorBoundaryAttribute](#listenfield.repo.catalog.FieldBoundary.InteriorBoundaryAttribute)
    - [Grower](#listenfield.repo.catalog.Grower)
    - [Grower.Data](#listenfield.repo.catalog.Grower.Data)
    - [Person](#listenfield.repo.catalog.Person)
    - [Person.Data](#listenfield.repo.catalog.Person.Data)
    - [PersonRole](#listenfield.repo.catalog.PersonRole)
    - [PersonRole.Data](#listenfield.repo.catalog.PersonRole.Data)
    - [PersonRole.PersonRolesEnum](#listenfield.repo.catalog.PersonRole.PersonRolesEnum)
  
  
  
  

- [Scalar Value Types](#scalar-value-types)



<a name="repo/common-rpc.proto"/>
<p align="right"><a href="#top">Top</a></p>

## repo/common-rpc.proto



<a name="listenfield.repo.QueryTimeScopeResult"/>

### QueryTimeScopeResult



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| item | [common.TimeScope](#listenfield.repo.common.TimeScope) |  |  |
| queryMeta | [listenfield.BatchedQueryMetadata](#listenfield.BatchedQueryMetadata) |  |  |






<a name="listenfield.repo.UpsertTimeScopeRequest"/>

### UpsertTimeScopeRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| item | [common.TimeScope](#listenfield.repo.common.TimeScope) |  |  |






<a name="listenfield.repo.UpsertTimeScopeResult"/>

### UpsertTimeScopeResult



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| item | [common.TimeScope](#listenfield.repo.common.TimeScope) |  |  |





 

 

 


<a name="listenfield.repo.Test"/>

### Test


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Echo | [.listenfield.EchoMessage](#listenfield.EchoMessage) | [.listenfield.EchoMessage](#listenfield.EchoMessage) |  |


<a name="listenfield.repo.TimeScopes"/>

### TimeScopes


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Upsert | [UpsertTimeScopeRequest](#listenfield.repo.UpsertTimeScopeRequest) | [UpsertTimeScopeResult](#listenfield.repo.UpsertTimeScopeRequest) |  |
| Query | [.listenfield.BatchedQueryRequest](#listenfield.BatchedQueryRequest) | [QueryTimeScopeResult](#listenfield.BatchedQueryRequest) |  |
| Get | [.listenfield.SimpleGetRequest](#listenfield.SimpleGetRequest) | [common.TimeScope](#listenfield.SimpleGetRequest) |  |
| GetACL | [.listenfield.SimpleGetRequest](#listenfield.SimpleGetRequest) | [.listenfield.GrantList](#listenfield.SimpleGetRequest) |  |
| SetACL | [.listenfield.ChangeGrantsRequest](#listenfield.ChangeGrantsRequest) | [.listenfield.ChangeGrantsResult](#listenfield.ChangeGrantsRequest) |  |

 



<a name="repo/common-types.proto"/>
<p align="right"><a href="#top">Top</a></p>

## repo/common-types.proto



<a name="listenfield.repo.common.CompoundIdentifier"/>

### CompoundIdentifier



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| uuid | [string](#string) |  |  |
| uniqueIds | [CompoundIdentifier.UniqueId](#listenfield.repo.common.CompoundIdentifier.UniqueId) | repeated |  |






<a name="listenfield.repo.common.CompoundIdentifier.CompoundIdentifierTypeEnum"/>

### CompoundIdentifier.CompoundIdentifierTypeEnum







<a name="listenfield.repo.common.CompoundIdentifier.IdSourceTypeEnum"/>

### CompoundIdentifier.IdSourceTypeEnum







<a name="listenfield.repo.common.CompoundIdentifier.UniqueId"/>

### CompoundIdentifier.UniqueId



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| identifierType | [CompoundIdentifier.CompoundIdentifierTypeEnum.Value](#listenfield.repo.common.CompoundIdentifier.CompoundIdentifierTypeEnum.Value) |  |  |
| source | [string](#string) |  |  |
| sourceType | [CompoundIdentifier.IdSourceTypeEnum.Value](#listenfield.repo.common.CompoundIdentifier.IdSourceTypeEnum.Value) |  |  |






<a name="listenfield.repo.common.ContextItem"/>

### ContextItem



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| contextItemType | [string](#string) |  | DomainID for a Representation |
| numericRepresentationValue | [NumericRepresentationValue](#listenfield.repo.common.NumericRepresentationValue) |  |  |
| stringRepresentationValue | [StringRepresentationValue](#listenfield.repo.common.StringRepresentationValue) |  |  |
| enumeratedRepresentationValue | [EnumeratedRepresentationValue](#listenfield.repo.common.EnumeratedRepresentationValue) |  |  |
| contextItems | [ContextItem](#listenfield.repo.common.ContextItem) | repeated |  |






<a name="listenfield.repo.common.EnumeratedRepresentationValue"/>

### EnumeratedRepresentationValue



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| representationId | [string](#string) |  |  |
| value | [string](#string) |  |  |
| unitOfMeasureId | [string](#string) |  |  |






<a name="listenfield.repo.common.GpsSource"/>

### GpsSource



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sourceType | [GpsSource.GpsSourceEnum](#listenfield.repo.common.GpsSource.GpsSourceEnum) |  |  |
| estimatedPrecision | [NumericRepresentationValue](#listenfield.repo.common.NumericRepresentationValue) |  |  |
| horizontalAccuracy | [NumericRepresentationValue](#listenfield.repo.common.NumericRepresentationValue) |  |  |
| verticalAccuracy | [NumericRepresentationValue](#listenfield.repo.common.NumericRepresentationValue) |  |  |
| numberOfSatellites | [uint32](#uint32) |  |  |
| gpsUTCTime | [string](#string) |  |  |






<a name="listenfield.repo.common.LinearRing"/>

### LinearRing



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| points | [Point](#listenfield.repo.common.Point) | repeated |  |






<a name="listenfield.repo.common.Location"/>

### Location



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| position | [Point](#listenfield.repo.common.Point) |  |  |
| gpsSource | [GpsSource](#listenfield.repo.common.GpsSource) |  |  |






<a name="listenfield.repo.common.MultiPolygon"/>

### MultiPolygon



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| polygons | [Polygon](#listenfield.repo.common.Polygon) | repeated |  |






<a name="listenfield.repo.common.NumericRepresentationValue"/>

### NumericRepresentationValue



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| representationId | [string](#string) |  |  |
| value | [NumericValue](#listenfield.repo.common.NumericValue) |  |  |
| unitOfMeasureId | [string](#string) |  |  |






<a name="listenfield.repo.common.NumericValue"/>

### NumericValue



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [double](#double) |  |  |
| unitOfMeasureId | [string](#string) |  |  |






<a name="listenfield.repo.common.Point"/>

### Point



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| x | [double](#double) |  |  |
| y | [double](#double) |  |  |
| z | [double](#double) |  |  |






<a name="listenfield.repo.common.Polygon"/>

### Polygon



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| exteriorRing | [LinearRing](#listenfield.repo.common.LinearRing) |  |  |
| interiorRings | [LinearRing](#listenfield.repo.common.LinearRing) | repeated |  |






<a name="listenfield.repo.common.ShapeTypeEnum"/>

### ShapeTypeEnum







<a name="listenfield.repo.common.StringRepresentationValue"/>

### StringRepresentationValue



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| representationId | [string](#string) |  |  |
| value | [string](#string) |  |  |
| unitOfMeasureId | [string](#string) |  |  |






<a name="listenfield.repo.common.TimeScope"/>

### TimeScope



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ids | [CompoundIdentifier](#listenfield.repo.common.CompoundIdentifier) |  |  |
| data | [TimeScope.Data](#listenfield.repo.common.TimeScope.Data) |  |  |
| owner | [string](#string) |  |  |
| contextItems | [ContextItem](#listenfield.repo.common.ContextItem) | repeated |  |






<a name="listenfield.repo.common.TimeScope.Data"/>

### TimeScope.Data



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| description | [string](#string) |  |  |
| dateContext | [TimeScope.DateContextEnum.Value](#listenfield.repo.common.TimeScope.DateContextEnum.Value) |  |  |
| timeStamp1 | [google.protobuf.Timestamp](#google.protobuf.Timestamp) |  |  |
| timeStamp2 | [google.protobuf.Timestamp](#google.protobuf.Timestamp) |  |  |
| location1 | [Location](#listenfield.repo.common.Location) |  |  |
| location2 | [Location](#listenfield.repo.common.Location) |  |  |
| duration | [google.protobuf.Duration](#google.protobuf.Duration) |  |  |






<a name="listenfield.repo.common.TimeScope.DateContextEnum"/>

### TimeScope.DateContextEnum






 


<a name="listenfield.repo.common.GpsSource.GpsSourceEnum"/>

### GpsSource.GpsSourceEnum


| Name | Number | Description |
| ---- | ------ | ----------- |
| Unknown | 0 |  |
| Drawn | 1 |  |
| MobileGPS | 2 |  |
| DeereRTK | 3 |  |
| DeereRTKX | 4 |  |
| DeereSF1 | 5 |  |
| DeereSF2 | 6 |  |
| DeereWAAS | 7 |  |
| GNSSfix | 8 |  |
| DGNSSfix | 9 |  |
| PreciseGNSS | 10 |  |
| RTKFixedInteger | 11 |  |
| RTKFloat | 12 |  |
| EstDRmode | 13 |  |
| ManualInput | 14 |  |
| SimulateMode | 15 |  |
| DesktopGeneratedData | 16 |  |
| Other | 17 |  |



<a name="listenfield.repo.common.ShapeTypeEnum.Value"/>

### ShapeTypeEnum.Value


| Name | Number | Description |
| ---- | ------ | ----------- |
| LinearRing | 0 |  |
| LineString | 1 |  |
| MultiLineString | 2 |  |
| MultiPoint | 3 |  |
| MultiPolygon | 4 |  |
| Point | 5 |  |
| Polygon | 6 |  |
| RasterGrid | 7 |  |


 

 

 



<a name="repo/catalog-rpc.proto"/>
<p align="right"><a href="#top">Top</a></p>

## repo/catalog-rpc.proto



<a name="listenfield.repo.QueryCompanyResult"/>

### QueryCompanyResult



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| item | [catalog.Company](#listenfield.repo.catalog.Company) |  |  |
| queryMeta | [listenfield.BatchedQueryMetadata](#listenfield.BatchedQueryMetadata) |  |  |






<a name="listenfield.repo.QueryContactInfoResult"/>

### QueryContactInfoResult



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| item | [catalog.ContactInfo](#listenfield.repo.catalog.ContactInfo) |  |  |
| queryMeta | [listenfield.BatchedQueryMetadata](#listenfield.BatchedQueryMetadata) |  |  |






<a name="listenfield.repo.QueryCropResult"/>

### QueryCropResult



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| item | [catalog.Crop](#listenfield.repo.catalog.Crop) |  |  |
| queryMeta | [listenfield.BatchedQueryMetadata](#listenfield.BatchedQueryMetadata) |  |  |






<a name="listenfield.repo.QueryCropZoneResult"/>

### QueryCropZoneResult



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| item | [catalog.CropZone](#listenfield.repo.catalog.CropZone) |  |  |
| queryMeta | [listenfield.BatchedQueryMetadata](#listenfield.BatchedQueryMetadata) |  |  |






<a name="listenfield.repo.QueryFarmResult"/>

### QueryFarmResult



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| item | [catalog.Farm](#listenfield.repo.catalog.Farm) |  |  |
| queryMeta | [listenfield.BatchedQueryMetadata](#listenfield.BatchedQueryMetadata) |  |  |






<a name="listenfield.repo.QueryFieldBoundaryResult"/>

### QueryFieldBoundaryResult



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| item | [catalog.FieldBoundary](#listenfield.repo.catalog.FieldBoundary) |  |  |
| queryMeta | [listenfield.BatchedQueryMetadata](#listenfield.BatchedQueryMetadata) |  |  |






<a name="listenfield.repo.QueryFieldResult"/>

### QueryFieldResult



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| item | [catalog.Field](#listenfield.repo.catalog.Field) |  |  |
| queryMeta | [listenfield.BatchedQueryMetadata](#listenfield.BatchedQueryMetadata) |  |  |






<a name="listenfield.repo.QueryGrowerResult"/>

### QueryGrowerResult



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| item | [catalog.Grower](#listenfield.repo.catalog.Grower) |  |  |
| queryMeta | [listenfield.BatchedQueryMetadata](#listenfield.BatchedQueryMetadata) |  |  |






<a name="listenfield.repo.QueryPersonResult"/>

### QueryPersonResult



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| item | [catalog.Person](#listenfield.repo.catalog.Person) |  |  |
| queryMeta | [listenfield.BatchedQueryMetadata](#listenfield.BatchedQueryMetadata) |  |  |






<a name="listenfield.repo.QueryPersonRoleRequest"/>

### QueryPersonRoleRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| page_size | [uint32](#uint32) |  |  |
| page_token | [string](#string) |  |  |
| PersonId | [string](#string) |  |  |
| GrowerId | [string](#string) |  |  |
| TimeStamp | [google.protobuf.Timestamp](#google.protobuf.Timestamp) |  | Not implemened |
| Role | [catalog.PersonRole.PersonRolesEnum.Value](#listenfield.repo.catalog.PersonRole.PersonRolesEnum.Value) |  |  |
| CompanyId | [string](#string) |  |  |






<a name="listenfield.repo.QueryPersonRoleResult"/>

### QueryPersonRoleResult



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| item | [catalog.PersonRole](#listenfield.repo.catalog.PersonRole) |  |  |
| queryMeta | [listenfield.BatchedQueryMetadata](#listenfield.BatchedQueryMetadata) |  |  |






<a name="listenfield.repo.UpsertCompanyRequest"/>

### UpsertCompanyRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| item | [catalog.Company](#listenfield.repo.catalog.Company) |  |  |






<a name="listenfield.repo.UpsertCompanyResult"/>

### UpsertCompanyResult



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| item | [catalog.Company](#listenfield.repo.catalog.Company) |  |  |






<a name="listenfield.repo.UpsertContactInfoRequest"/>

### UpsertContactInfoRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| item | [catalog.ContactInfo](#listenfield.repo.catalog.ContactInfo) |  |  |






<a name="listenfield.repo.UpsertContactInfoResult"/>

### UpsertContactInfoResult



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| item | [catalog.ContactInfo](#listenfield.repo.catalog.ContactInfo) |  |  |






<a name="listenfield.repo.UpsertCropRequest"/>

### UpsertCropRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| item | [catalog.Crop](#listenfield.repo.catalog.Crop) |  |  |






<a name="listenfield.repo.UpsertCropResult"/>

### UpsertCropResult



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| item | [catalog.Crop](#listenfield.repo.catalog.Crop) |  |  |






<a name="listenfield.repo.UpsertCropZoneRequest"/>

### UpsertCropZoneRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| item | [catalog.CropZone](#listenfield.repo.catalog.CropZone) |  |  |






<a name="listenfield.repo.UpsertCropZoneResult"/>

### UpsertCropZoneResult



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| item | [catalog.CropZone](#listenfield.repo.catalog.CropZone) |  |  |






<a name="listenfield.repo.UpsertFarmRequest"/>

### UpsertFarmRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| item | [catalog.Farm](#listenfield.repo.catalog.Farm) |  |  |






<a name="listenfield.repo.UpsertFarmResult"/>

### UpsertFarmResult



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| item | [catalog.Farm](#listenfield.repo.catalog.Farm) |  |  |






<a name="listenfield.repo.UpsertFieldBoundaryRequest"/>

### UpsertFieldBoundaryRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| item | [catalog.FieldBoundary](#listenfield.repo.catalog.FieldBoundary) |  |  |






<a name="listenfield.repo.UpsertFieldBoundaryResult"/>

### UpsertFieldBoundaryResult



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| item | [catalog.FieldBoundary](#listenfield.repo.catalog.FieldBoundary) |  |  |






<a name="listenfield.repo.UpsertFieldRequest"/>

### UpsertFieldRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| item | [catalog.Field](#listenfield.repo.catalog.Field) |  |  |






<a name="listenfield.repo.UpsertFieldResult"/>

### UpsertFieldResult



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| item | [catalog.Field](#listenfield.repo.catalog.Field) |  |  |






<a name="listenfield.repo.UpsertGrowerRequest"/>

### UpsertGrowerRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| item | [catalog.Grower](#listenfield.repo.catalog.Grower) |  |  |






<a name="listenfield.repo.UpsertGrowerResult"/>

### UpsertGrowerResult



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| item | [catalog.Grower](#listenfield.repo.catalog.Grower) |  |  |






<a name="listenfield.repo.UpsertPersonRequest"/>

### UpsertPersonRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| item | [catalog.Person](#listenfield.repo.catalog.Person) |  |  |






<a name="listenfield.repo.UpsertPersonResult"/>

### UpsertPersonResult



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| item | [catalog.Person](#listenfield.repo.catalog.Person) |  |  |






<a name="listenfield.repo.UpsertPersonRoleRequest"/>

### UpsertPersonRoleRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| item | [catalog.PersonRole](#listenfield.repo.catalog.PersonRole) |  |  |






<a name="listenfield.repo.UpsertPersonRoleResult"/>

### UpsertPersonRoleResult



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| item | [catalog.PersonRole](#listenfield.repo.catalog.PersonRole) |  |  |





 

 

 


<a name="listenfield.repo.Companies"/>

### Companies


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Upsert | [UpsertCompanyRequest](#listenfield.repo.UpsertCompanyRequest) | [UpsertCompanyResult](#listenfield.repo.UpsertCompanyRequest) |  |
| Query | [.listenfield.BatchedQueryRequest](#listenfield.BatchedQueryRequest) | [QueryCompanyResult](#listenfield.BatchedQueryRequest) |  |
| Get | [.listenfield.SimpleGetRequest](#listenfield.SimpleGetRequest) | [catalog.Company](#listenfield.SimpleGetRequest) |  |
| GetACL | [.listenfield.SimpleGetRequest](#listenfield.SimpleGetRequest) | [.listenfield.GrantList](#listenfield.SimpleGetRequest) |  |
| SetACL | [.listenfield.ChangeGrantsRequest](#listenfield.ChangeGrantsRequest) | [.listenfield.ChangeGrantsResult](#listenfield.ChangeGrantsRequest) |  |


<a name="listenfield.repo.ContactInfos"/>

### ContactInfos


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Upsert | [UpsertContactInfoRequest](#listenfield.repo.UpsertContactInfoRequest) | [UpsertContactInfoResult](#listenfield.repo.UpsertContactInfoRequest) |  |
| Query | [.listenfield.BatchedQueryRequest](#listenfield.BatchedQueryRequest) | [QueryContactInfoResult](#listenfield.BatchedQueryRequest) |  |
| Get | [.listenfield.SimpleGetRequest](#listenfield.SimpleGetRequest) | [catalog.ContactInfo](#listenfield.SimpleGetRequest) |  |
| GetACL | [.listenfield.SimpleGetRequest](#listenfield.SimpleGetRequest) | [.listenfield.GrantList](#listenfield.SimpleGetRequest) |  |
| SetACL | [.listenfield.ChangeGrantsRequest](#listenfield.ChangeGrantsRequest) | [.listenfield.ChangeGrantsResult](#listenfield.ChangeGrantsRequest) |  |


<a name="listenfield.repo.CropZones"/>

### CropZones


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Upsert | [UpsertCropZoneRequest](#listenfield.repo.UpsertCropZoneRequest) | [UpsertCropZoneResult](#listenfield.repo.UpsertCropZoneRequest) |  |
| Query | [.listenfield.BatchedQueryRequest](#listenfield.BatchedQueryRequest) | [QueryCropZoneResult](#listenfield.BatchedQueryRequest) |  |
| Get | [.listenfield.SimpleGetRequest](#listenfield.SimpleGetRequest) | [catalog.CropZone](#listenfield.SimpleGetRequest) |  |
| GetACL | [.listenfield.SimpleGetRequest](#listenfield.SimpleGetRequest) | [.listenfield.GrantList](#listenfield.SimpleGetRequest) |  |
| SetACL | [.listenfield.ChangeGrantsRequest](#listenfield.ChangeGrantsRequest) | [.listenfield.ChangeGrantsResult](#listenfield.ChangeGrantsRequest) |  |


<a name="listenfield.repo.Crops"/>

### Crops


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Upsert | [UpsertCropRequest](#listenfield.repo.UpsertCropRequest) | [UpsertCropResult](#listenfield.repo.UpsertCropRequest) |  |
| Query | [.listenfield.BatchedQueryRequest](#listenfield.BatchedQueryRequest) | [QueryCropResult](#listenfield.BatchedQueryRequest) |  |
| Get | [.listenfield.SimpleGetRequest](#listenfield.SimpleGetRequest) | [catalog.Crop](#listenfield.SimpleGetRequest) |  |
| GetACL | [.listenfield.SimpleGetRequest](#listenfield.SimpleGetRequest) | [.listenfield.GrantList](#listenfield.SimpleGetRequest) |  |
| SetACL | [.listenfield.ChangeGrantsRequest](#listenfield.ChangeGrantsRequest) | [.listenfield.ChangeGrantsResult](#listenfield.ChangeGrantsRequest) |  |


<a name="listenfield.repo.Farms"/>

### Farms


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Upsert | [UpsertFarmRequest](#listenfield.repo.UpsertFarmRequest) | [UpsertFarmResult](#listenfield.repo.UpsertFarmRequest) |  |
| Query | [.listenfield.BatchedQueryRequest](#listenfield.BatchedQueryRequest) | [QueryFarmResult](#listenfield.BatchedQueryRequest) |  |
| Get | [.listenfield.SimpleGetRequest](#listenfield.SimpleGetRequest) | [catalog.Farm](#listenfield.SimpleGetRequest) |  |
| GetACL | [.listenfield.SimpleGetRequest](#listenfield.SimpleGetRequest) | [.listenfield.GrantList](#listenfield.SimpleGetRequest) |  |
| SetACL | [.listenfield.ChangeGrantsRequest](#listenfield.ChangeGrantsRequest) | [.listenfield.ChangeGrantsResult](#listenfield.ChangeGrantsRequest) |  |


<a name="listenfield.repo.FieldBoundaries"/>

### FieldBoundaries


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Upsert | [UpsertFieldBoundaryRequest](#listenfield.repo.UpsertFieldBoundaryRequest) | [UpsertFieldBoundaryResult](#listenfield.repo.UpsertFieldBoundaryRequest) |  |
| Query | [.listenfield.BatchedQueryRequest](#listenfield.BatchedQueryRequest) | [QueryFieldBoundaryResult](#listenfield.BatchedQueryRequest) |  |
| Get | [.listenfield.SimpleGetRequest](#listenfield.SimpleGetRequest) | [catalog.FieldBoundary](#listenfield.SimpleGetRequest) |  |
| GetACL | [.listenfield.SimpleGetRequest](#listenfield.SimpleGetRequest) | [.listenfield.GrantList](#listenfield.SimpleGetRequest) |  |
| SetACL | [.listenfield.ChangeGrantsRequest](#listenfield.ChangeGrantsRequest) | [.listenfield.ChangeGrantsResult](#listenfield.ChangeGrantsRequest) |  |


<a name="listenfield.repo.Fields"/>

### Fields


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Upsert | [UpsertFieldRequest](#listenfield.repo.UpsertFieldRequest) | [UpsertFieldResult](#listenfield.repo.UpsertFieldRequest) |  |
| Query | [.listenfield.BatchedQueryRequest](#listenfield.BatchedQueryRequest) | [QueryFieldResult](#listenfield.BatchedQueryRequest) |  |
| Get | [.listenfield.SimpleGetRequest](#listenfield.SimpleGetRequest) | [catalog.Field](#listenfield.SimpleGetRequest) |  |
| GetACL | [.listenfield.SimpleGetRequest](#listenfield.SimpleGetRequest) | [.listenfield.GrantList](#listenfield.SimpleGetRequest) |  |
| SetACL | [.listenfield.ChangeGrantsRequest](#listenfield.ChangeGrantsRequest) | [.listenfield.ChangeGrantsResult](#listenfield.ChangeGrantsRequest) |  |


<a name="listenfield.repo.Growers"/>

### Growers


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Upsert | [UpsertGrowerRequest](#listenfield.repo.UpsertGrowerRequest) | [UpsertGrowerResult](#listenfield.repo.UpsertGrowerRequest) |  |
| Query | [.listenfield.BatchedQueryRequest](#listenfield.BatchedQueryRequest) | [QueryGrowerResult](#listenfield.BatchedQueryRequest) |  |
| Get | [.listenfield.SimpleGetRequest](#listenfield.SimpleGetRequest) | [catalog.Grower](#listenfield.SimpleGetRequest) |  |
| GetACL | [.listenfield.SimpleGetRequest](#listenfield.SimpleGetRequest) | [.listenfield.GrantList](#listenfield.SimpleGetRequest) |  |
| SetACL | [.listenfield.ChangeGrantsRequest](#listenfield.ChangeGrantsRequest) | [.listenfield.ChangeGrantsResult](#listenfield.ChangeGrantsRequest) |  |


<a name="listenfield.repo.PersonRoles"/>

### PersonRoles


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Upsert | [UpsertPersonRoleRequest](#listenfield.repo.UpsertPersonRoleRequest) | [UpsertPersonRoleResult](#listenfield.repo.UpsertPersonRoleRequest) |  |
| Query | [.listenfield.BatchedQueryRequest](#listenfield.BatchedQueryRequest) | [QueryPersonRoleResult](#listenfield.BatchedQueryRequest) |  |
| Get | [.listenfield.SimpleGetRequest](#listenfield.SimpleGetRequest) | [catalog.PersonRole](#listenfield.SimpleGetRequest) |  |
| GetACL | [.listenfield.SimpleGetRequest](#listenfield.SimpleGetRequest) | [.listenfield.GrantList](#listenfield.SimpleGetRequest) |  |
| SetACL | [.listenfield.ChangeGrantsRequest](#listenfield.ChangeGrantsRequest) | [.listenfield.ChangeGrantsResult](#listenfield.ChangeGrantsRequest) |  |


<a name="listenfield.repo.Persons"/>

### Persons


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Upsert | [UpsertPersonRequest](#listenfield.repo.UpsertPersonRequest) | [UpsertPersonResult](#listenfield.repo.UpsertPersonRequest) |  |
| Query | [.listenfield.BatchedQueryRequest](#listenfield.BatchedQueryRequest) | [QueryPersonResult](#listenfield.BatchedQueryRequest) |  |
| Get | [.listenfield.SimpleGetRequest](#listenfield.SimpleGetRequest) | [catalog.Person](#listenfield.SimpleGetRequest) |  |
| GetACL | [.listenfield.SimpleGetRequest](#listenfield.SimpleGetRequest) | [.listenfield.GrantList](#listenfield.SimpleGetRequest) |  |
| SetACL | [.listenfield.ChangeGrantsRequest](#listenfield.ChangeGrantsRequest) | [.listenfield.ChangeGrantsResult](#listenfield.ChangeGrantsRequest) |  |

 



<a name="repo/catalog-types.proto"/>
<p align="right"><a href="#top">Top</a></p>

## repo/catalog-types.proto



<a name="listenfield.repo.catalog.Company"/>

### Company



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ids | [listenfield.repo.common.CompoundIdentifier](#listenfield.repo.common.CompoundIdentifier) |  |  |
| data | [Company.Data](#listenfield.repo.catalog.Company.Data) |  |  |
| owner | [string](#string) |  |  |
| contextItems | [listenfield.repo.common.ContextItem](#listenfield.repo.common.ContextItem) | repeated |  |






<a name="listenfield.repo.catalog.Company.Data"/>

### Company.Data



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| contactInfoId | [string](#string) |  |  |






<a name="listenfield.repo.catalog.ContactInfo"/>

### ContactInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ids | [listenfield.repo.common.CompoundIdentifier](#listenfield.repo.common.CompoundIdentifier) |  |  |
| data | [ContactInfo.Data](#listenfield.repo.catalog.ContactInfo.Data) |  |  |
| owner | [string](#string) |  |  |
| contextItems | [listenfield.repo.common.ContextItem](#listenfield.repo.common.ContextItem) | repeated |  |






<a name="listenfield.repo.catalog.ContactInfo.ContactLine"/>

### ContactInfo.ContactLine



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [string](#string) |  |  |
| type | [ContactInfo.ContactLineTypeEnum.Value](#listenfield.repo.catalog.ContactInfo.ContactLineTypeEnum.Value) |  |  |
| annotation | [string](#string) |  | e.g. home, office |






<a name="listenfield.repo.catalog.ContactInfo.ContactLineTypeEnum"/>

### ContactInfo.ContactLineTypeEnum







<a name="listenfield.repo.catalog.ContactInfo.Data"/>

### ContactInfo.Data



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| addressLine1 | [string](#string) |  |  |
| addressLine2 | [string](#string) |  |  |
| poBoxNumber | [string](#string) |  |  |
| postalCode | [string](#string) |  |  |
| city | [string](#string) |  |  |
| stateOrProvince | [string](#string) |  |  |
| country | [string](#string) |  |  |
| countryCode | [string](#string) |  |  |
| contactLines | [ContactInfo.ContactLine](#listenfield.repo.catalog.ContactInfo.ContactLine) | repeated |  |
| location | [listenfield.repo.common.Location](#listenfield.repo.common.Location) |  |  |






<a name="listenfield.repo.catalog.Crop"/>

### Crop



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ids | [listenfield.repo.common.CompoundIdentifier](#listenfield.repo.common.CompoundIdentifier) |  |  |
| data | [Crop.Data](#listenfield.repo.catalog.Crop.Data) |  |  |
| owner | [string](#string) |  |  |
| contextItems | [listenfield.repo.common.ContextItem](#listenfield.repo.common.ContextItem) | repeated |  |






<a name="listenfield.repo.catalog.Crop.Data"/>

### Crop.Data



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| parentId | [string](#string) |  | leaving this as it&#39;s in the docs, but what does it link to? |
| referenceWeight | [listenfield.repo.common.NumericRepresentationValue](#listenfield.repo.common.NumericRepresentationValue) |  |  |
| standardPayableMoisture | [listenfield.repo.common.NumericRepresentationValue](#listenfield.repo.common.NumericRepresentationValue) |  |  |






<a name="listenfield.repo.catalog.CropZone"/>

### CropZone



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ids | [listenfield.repo.common.CompoundIdentifier](#listenfield.repo.common.CompoundIdentifier) |  |  |
| data | [CropZone.Data](#listenfield.repo.catalog.CropZone.Data) |  |  |
| owner | [string](#string) |  |  |
| contextItems | [listenfield.repo.common.ContextItem](#listenfield.repo.common.ContextItem) | repeated |  |






<a name="listenfield.repo.catalog.CropZone.Data"/>

### CropZone.Data



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| timeScopeIds | [string](#string) | repeated |  |
| description | [string](#string) |  |  |
| fieldId | [string](#string) |  |  |
| cropId | [string](#string) |  |  |
| area | [listenfield.repo.common.NumericRepresentationValue](#listenfield.repo.common.NumericRepresentationValue) |  |  |
| boundingRegion | [listenfield.repo.common.MultiPolygon](#listenfield.repo.common.MultiPolygon) |  |  |
| boundarySource | [listenfield.repo.common.GpsSource](#listenfield.repo.common.GpsSource) |  |  |
| noteIds | [string](#string) | repeated |  |
| guidanceGroupIds | [string](#string) | repeated |  |






<a name="listenfield.repo.catalog.Farm"/>

### Farm



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ids | [listenfield.repo.common.CompoundIdentifier](#listenfield.repo.common.CompoundIdentifier) |  |  |
| data | [Farm.Data](#listenfield.repo.catalog.Farm.Data) |  |  |
| owner | [string](#string) |  |  |
| contextItems | [listenfield.repo.common.ContextItem](#listenfield.repo.common.ContextItem) | repeated |  |






<a name="listenfield.repo.catalog.Farm.Data"/>

### Farm.Data



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| description | [string](#string) |  |  |
| growerId | [string](#string) |  |  |
| contactInfoId | [string](#string) |  |  |






<a name="listenfield.repo.catalog.Field"/>

### Field



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ids | [listenfield.repo.common.CompoundIdentifier](#listenfield.repo.common.CompoundIdentifier) |  |  |
| data | [Field.Data](#listenfield.repo.catalog.Field.Data) |  |  |
| owner | [string](#string) |  |  |
| contextItems | [listenfield.repo.common.ContextItem](#listenfield.repo.common.ContextItem) | repeated |  |






<a name="listenfield.repo.catalog.Field.Data"/>

### Field.Data



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| description | [string](#string) |  |  |
| farmId | [string](#string) |  |  |
| area | [listenfield.repo.common.NumericRepresentationValue](#listenfield.repo.common.NumericRepresentationValue) |  |  |
| timeScopeIds | [string](#string) | repeated |  |
| activeBoundaryId | [string](#string) |  |  |
| slope | [listenfield.repo.common.NumericRepresentationValue](#listenfield.repo.common.NumericRepresentationValue) |  |  |
| aspect | [listenfield.repo.common.NumericRepresentationValue](#listenfield.repo.common.NumericRepresentationValue) |  |  |
| slopeLength | [listenfield.repo.common.NumericRepresentationValue](#listenfield.repo.common.NumericRepresentationValue) |  |  |
| guidanceGroupIds | [string](#string) | repeated |  |






<a name="listenfield.repo.catalog.FieldBoundary"/>

### FieldBoundary



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ids | [listenfield.repo.common.CompoundIdentifier](#listenfield.repo.common.CompoundIdentifier) |  |  |
| data | [FieldBoundary.Data](#listenfield.repo.catalog.FieldBoundary.Data) |  |  |
| owner | [string](#string) |  |  |
| contextItems | [listenfield.repo.common.ContextItem](#listenfield.repo.common.ContextItem) | repeated |  |






<a name="listenfield.repo.catalog.FieldBoundary.ConstantOffsetHeadland"/>

### FieldBoundary.ConstantOffsetHeadland



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| description | [string](#string) |  |  |
| value | [listenfield.repo.common.NumericRepresentationValue](#listenfield.repo.common.NumericRepresentationValue) |  |  |






<a name="listenfield.repo.catalog.FieldBoundary.Data"/>

### FieldBoundary.Data



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| description | [string](#string) |  |  |
| fieldId | [string](#string) |  |  |
| spatialData | [listenfield.repo.common.MultiPolygon](#listenfield.repo.common.MultiPolygon) |  |  |
| timeScopeIds | [string](#string) | repeated |  |
| drivenHeadland | [FieldBoundary.DrivenHeadland](#listenfield.repo.catalog.FieldBoundary.DrivenHeadland) |  |  |
| constantOffsetHeadland | [FieldBoundary.ConstantOffsetHeadland](#listenfield.repo.catalog.FieldBoundary.ConstantOffsetHeadland) |  |  |
| boundarySource | [listenfield.repo.common.GpsSource](#listenfield.repo.common.GpsSource) |  |  |
| originalEpsgCode | [string](#string) |  |  |
| interiorBoundaryAttributes | [FieldBoundary.InteriorBoundaryAttribute](#listenfield.repo.catalog.FieldBoundary.InteriorBoundaryAttribute) | repeated |  |






<a name="listenfield.repo.catalog.FieldBoundary.DrivenHeadland"/>

### FieldBoundary.DrivenHeadland



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| description | [string](#string) |  |  |
| spatialData | [listenfield.repo.common.MultiPolygon](#listenfield.repo.common.MultiPolygon) |  |  |






<a name="listenfield.repo.catalog.FieldBoundary.InteriorBoundaryAttribute"/>

### FieldBoundary.InteriorBoundaryAttribute



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| shapeIdRef | [uint32](#uint32) |  |  |
| isPassable | [bool](#bool) |  |  |
| description | [string](#string) |  |  |






<a name="listenfield.repo.catalog.Grower"/>

### Grower



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ids | [listenfield.repo.common.CompoundIdentifier](#listenfield.repo.common.CompoundIdentifier) |  |  |
| data | [Grower.Data](#listenfield.repo.catalog.Grower.Data) |  |  |
| owner | [string](#string) |  |  |
| contextItems | [listenfield.repo.common.ContextItem](#listenfield.repo.common.ContextItem) | repeated |  |






<a name="listenfield.repo.catalog.Grower.Data"/>

### Grower.Data



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| contactInfoId | [string](#string) |  |  |






<a name="listenfield.repo.catalog.Person"/>

### Person



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ids | [listenfield.repo.common.CompoundIdentifier](#listenfield.repo.common.CompoundIdentifier) |  |  |
| data | [Person.Data](#listenfield.repo.catalog.Person.Data) |  |  |
| owner | [string](#string) |  |  |
| contextItems | [listenfield.repo.common.ContextItem](#listenfield.repo.common.ContextItem) | repeated |  |






<a name="listenfield.repo.catalog.Person.Data"/>

### Person.Data



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| firstName | [string](#string) |  |  |
| middleName | [string](#string) |  |  |
| lastName | [string](#string) |  |  |
| combinedName | [string](#string) |  |  |
| contactInfoId | [string](#string) |  |  |






<a name="listenfield.repo.catalog.PersonRole"/>

### PersonRole



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ids | [listenfield.repo.common.CompoundIdentifier](#listenfield.repo.common.CompoundIdentifier) |  |  |
| data | [PersonRole.Data](#listenfield.repo.catalog.PersonRole.Data) |  |  |
| owner | [string](#string) |  |  |
| contextItems | [listenfield.repo.common.ContextItem](#listenfield.repo.common.ContextItem) | repeated |  |






<a name="listenfield.repo.catalog.PersonRole.Data"/>

### PersonRole.Data



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| personId | [string](#string) |  |  |
| growerId | [string](#string) |  |  |
| activeScopeIds | [string](#string) | repeated |  |
| role | [PersonRole.PersonRolesEnum.Value](#listenfield.repo.catalog.PersonRole.PersonRolesEnum.Value) |  |  |
| companyId | [string](#string) |  |  |






<a name="listenfield.repo.catalog.PersonRole.PersonRolesEnum"/>

### PersonRole.PersonRolesEnum






 

 

 

 



## Scalar Value Types

| .proto Type | Notes | C++ Type | Java Type | Python Type |
| ----------- | ----- | -------- | --------- | ----------- |
| <a name="double" /> double |  | double | double | float |
| <a name="float" /> float |  | float | float | float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long |
| <a name="bool" /> bool |  | bool | boolean | boolean |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str |

