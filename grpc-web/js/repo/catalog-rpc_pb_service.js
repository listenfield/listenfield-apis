// package: listenfield.repo
// file: repo/catalog-rpc.proto

var jspb = require("google-protobuf");
var repo_catalog_rpc_pb = require("../repo/catalog-rpc_pb");
var google_protobuf_timestamp_pb = require("google-protobuf/google/protobuf/timestamp_pb");
var repo_catalog_types_pb = require("../repo/catalog-types_pb");
var api_pb = require("../api_pb");
var FieldBoundaries = {
  serviceName: "listenfield.repo.FieldBoundaries"
};
FieldBoundaries.Upsert = {
  methodName: "Upsert",
  service: FieldBoundaries,
  requestStream: false,
  responseStream: false,
  requestType: repo_catalog_rpc_pb.UpsertFieldBoundaryRequest,
  responseType: repo_catalog_rpc_pb.UpsertFieldBoundaryResult
};
FieldBoundaries.Query = {
  methodName: "Query",
  service: FieldBoundaries,
  requestStream: false,
  responseStream: true,
  requestType: api_pb.BatchedQueryRequest,
  responseType: repo_catalog_rpc_pb.QueryFieldBoundaryResult
};
FieldBoundaries.Get = {
  methodName: "Get",
  service: FieldBoundaries,
  requestStream: false,
  responseStream: false,
  requestType: api_pb.SimpleGetRequest,
  responseType: repo_catalog_types_pb.FieldBoundary
};
FieldBoundaries.GetACL = {
  methodName: "GetACL",
  service: FieldBoundaries,
  requestStream: false,
  responseStream: false,
  requestType: api_pb.SimpleGetRequest,
  responseType: api_pb.GrantList
};
FieldBoundaries.SetACL = {
  methodName: "SetACL",
  service: FieldBoundaries,
  requestStream: false,
  responseStream: true,
  requestType: api_pb.ChangeGrantsRequest,
  responseType: api_pb.ChangeGrantsResult
};
var Fields = {
  serviceName: "listenfield.repo.Fields"
};
Fields.Upsert = {
  methodName: "Upsert",
  service: Fields,
  requestStream: false,
  responseStream: false,
  requestType: repo_catalog_rpc_pb.UpsertFieldRequest,
  responseType: repo_catalog_rpc_pb.UpsertFieldResult
};
Fields.Query = {
  methodName: "Query",
  service: Fields,
  requestStream: false,
  responseStream: true,
  requestType: api_pb.BatchedQueryRequest,
  responseType: repo_catalog_rpc_pb.QueryFieldResult
};
Fields.Get = {
  methodName: "Get",
  service: Fields,
  requestStream: false,
  responseStream: false,
  requestType: api_pb.SimpleGetRequest,
  responseType: repo_catalog_types_pb.Field
};
Fields.GetACL = {
  methodName: "GetACL",
  service: Fields,
  requestStream: false,
  responseStream: false,
  requestType: api_pb.SimpleGetRequest,
  responseType: api_pb.GrantList
};
Fields.SetACL = {
  methodName: "SetACL",
  service: Fields,
  requestStream: false,
  responseStream: true,
  requestType: api_pb.ChangeGrantsRequest,
  responseType: api_pb.ChangeGrantsResult
};
var Farms = {
  serviceName: "listenfield.repo.Farms"
};
Farms.Upsert = {
  methodName: "Upsert",
  service: Farms,
  requestStream: false,
  responseStream: false,
  requestType: repo_catalog_rpc_pb.UpsertFarmRequest,
  responseType: repo_catalog_rpc_pb.UpsertFarmResult
};
Farms.Query = {
  methodName: "Query",
  service: Farms,
  requestStream: false,
  responseStream: true,
  requestType: api_pb.BatchedQueryRequest,
  responseType: repo_catalog_rpc_pb.QueryFarmResult
};
Farms.Get = {
  methodName: "Get",
  service: Farms,
  requestStream: false,
  responseStream: false,
  requestType: api_pb.SimpleGetRequest,
  responseType: repo_catalog_types_pb.Farm
};
Farms.GetACL = {
  methodName: "GetACL",
  service: Farms,
  requestStream: false,
  responseStream: false,
  requestType: api_pb.SimpleGetRequest,
  responseType: api_pb.GrantList
};
Farms.SetACL = {
  methodName: "SetACL",
  service: Farms,
  requestStream: false,
  responseStream: true,
  requestType: api_pb.ChangeGrantsRequest,
  responseType: api_pb.ChangeGrantsResult
};
var Growers = {
  serviceName: "listenfield.repo.Growers"
};
Growers.Upsert = {
  methodName: "Upsert",
  service: Growers,
  requestStream: false,
  responseStream: false,
  requestType: repo_catalog_rpc_pb.UpsertGrowerRequest,
  responseType: repo_catalog_rpc_pb.UpsertGrowerResult
};
Growers.Query = {
  methodName: "Query",
  service: Growers,
  requestStream: false,
  responseStream: true,
  requestType: api_pb.BatchedQueryRequest,
  responseType: repo_catalog_rpc_pb.QueryGrowerResult
};
Growers.Get = {
  methodName: "Get",
  service: Growers,
  requestStream: false,
  responseStream: false,
  requestType: api_pb.SimpleGetRequest,
  responseType: repo_catalog_types_pb.Grower
};
Growers.GetACL = {
  methodName: "GetACL",
  service: Growers,
  requestStream: false,
  responseStream: false,
  requestType: api_pb.SimpleGetRequest,
  responseType: api_pb.GrantList
};
Growers.SetACL = {
  methodName: "SetACL",
  service: Growers,
  requestStream: false,
  responseStream: true,
  requestType: api_pb.ChangeGrantsRequest,
  responseType: api_pb.ChangeGrantsResult
};
var Crops = {
  serviceName: "listenfield.repo.Crops"
};
Crops.Upsert = {
  methodName: "Upsert",
  service: Crops,
  requestStream: false,
  responseStream: false,
  requestType: repo_catalog_rpc_pb.UpsertCropRequest,
  responseType: repo_catalog_rpc_pb.UpsertCropResult
};
Crops.Query = {
  methodName: "Query",
  service: Crops,
  requestStream: false,
  responseStream: true,
  requestType: api_pb.BatchedQueryRequest,
  responseType: repo_catalog_rpc_pb.QueryCropResult
};
Crops.Get = {
  methodName: "Get",
  service: Crops,
  requestStream: false,
  responseStream: false,
  requestType: api_pb.SimpleGetRequest,
  responseType: repo_catalog_types_pb.Crop
};
Crops.GetACL = {
  methodName: "GetACL",
  service: Crops,
  requestStream: false,
  responseStream: false,
  requestType: api_pb.SimpleGetRequest,
  responseType: api_pb.GrantList
};
Crops.SetACL = {
  methodName: "SetACL",
  service: Crops,
  requestStream: false,
  responseStream: true,
  requestType: api_pb.ChangeGrantsRequest,
  responseType: api_pb.ChangeGrantsResult
};
var CropZones = {
  serviceName: "listenfield.repo.CropZones"
};
CropZones.Upsert = {
  methodName: "Upsert",
  service: CropZones,
  requestStream: false,
  responseStream: false,
  requestType: repo_catalog_rpc_pb.UpsertCropZoneRequest,
  responseType: repo_catalog_rpc_pb.UpsertCropZoneResult
};
CropZones.Query = {
  methodName: "Query",
  service: CropZones,
  requestStream: false,
  responseStream: true,
  requestType: api_pb.BatchedQueryRequest,
  responseType: repo_catalog_rpc_pb.QueryCropZoneResult
};
CropZones.Get = {
  methodName: "Get",
  service: CropZones,
  requestStream: false,
  responseStream: false,
  requestType: api_pb.SimpleGetRequest,
  responseType: repo_catalog_types_pb.CropZone
};
CropZones.GetACL = {
  methodName: "GetACL",
  service: CropZones,
  requestStream: false,
  responseStream: false,
  requestType: api_pb.SimpleGetRequest,
  responseType: api_pb.GrantList
};
CropZones.SetACL = {
  methodName: "SetACL",
  service: CropZones,
  requestStream: false,
  responseStream: true,
  requestType: api_pb.ChangeGrantsRequest,
  responseType: api_pb.ChangeGrantsResult
};
var ContactInfos = {
  serviceName: "listenfield.repo.ContactInfos"
};
ContactInfos.Upsert = {
  methodName: "Upsert",
  service: ContactInfos,
  requestStream: false,
  responseStream: false,
  requestType: repo_catalog_rpc_pb.UpsertContactInfoRequest,
  responseType: repo_catalog_rpc_pb.UpsertContactInfoResult
};
ContactInfos.Query = {
  methodName: "Query",
  service: ContactInfos,
  requestStream: false,
  responseStream: true,
  requestType: api_pb.BatchedQueryRequest,
  responseType: repo_catalog_rpc_pb.QueryContactInfoResult
};
ContactInfos.Get = {
  methodName: "Get",
  service: ContactInfos,
  requestStream: false,
  responseStream: false,
  requestType: api_pb.SimpleGetRequest,
  responseType: repo_catalog_types_pb.ContactInfo
};
ContactInfos.GetACL = {
  methodName: "GetACL",
  service: ContactInfos,
  requestStream: false,
  responseStream: false,
  requestType: api_pb.SimpleGetRequest,
  responseType: api_pb.GrantList
};
ContactInfos.SetACL = {
  methodName: "SetACL",
  service: ContactInfos,
  requestStream: false,
  responseStream: true,
  requestType: api_pb.ChangeGrantsRequest,
  responseType: api_pb.ChangeGrantsResult
};
var Persons = {
  serviceName: "listenfield.repo.Persons"
};
Persons.Upsert = {
  methodName: "Upsert",
  service: Persons,
  requestStream: false,
  responseStream: false,
  requestType: repo_catalog_rpc_pb.UpsertPersonRequest,
  responseType: repo_catalog_rpc_pb.UpsertPersonResult
};
Persons.Query = {
  methodName: "Query",
  service: Persons,
  requestStream: false,
  responseStream: true,
  requestType: api_pb.BatchedQueryRequest,
  responseType: repo_catalog_rpc_pb.QueryPersonResult
};
Persons.Get = {
  methodName: "Get",
  service: Persons,
  requestStream: false,
  responseStream: false,
  requestType: api_pb.SimpleGetRequest,
  responseType: repo_catalog_types_pb.Person
};
Persons.GetACL = {
  methodName: "GetACL",
  service: Persons,
  requestStream: false,
  responseStream: false,
  requestType: api_pb.SimpleGetRequest,
  responseType: api_pb.GrantList
};
Persons.SetACL = {
  methodName: "SetACL",
  service: Persons,
  requestStream: false,
  responseStream: true,
  requestType: api_pb.ChangeGrantsRequest,
  responseType: api_pb.ChangeGrantsResult
};
var PersonRoles = {
  serviceName: "listenfield.repo.PersonRoles"
};
PersonRoles.Upsert = {
  methodName: "Upsert",
  service: PersonRoles,
  requestStream: false,
  responseStream: false,
  requestType: repo_catalog_rpc_pb.UpsertPersonRoleRequest,
  responseType: repo_catalog_rpc_pb.UpsertPersonRoleResult
};
PersonRoles.Query = {
  methodName: "Query",
  service: PersonRoles,
  requestStream: false,
  responseStream: true,
  requestType: api_pb.BatchedQueryRequest,
  responseType: repo_catalog_rpc_pb.QueryPersonRoleResult
};
PersonRoles.Get = {
  methodName: "Get",
  service: PersonRoles,
  requestStream: false,
  responseStream: false,
  requestType: api_pb.SimpleGetRequest,
  responseType: repo_catalog_types_pb.PersonRole
};
PersonRoles.GetACL = {
  methodName: "GetACL",
  service: PersonRoles,
  requestStream: false,
  responseStream: false,
  requestType: api_pb.SimpleGetRequest,
  responseType: api_pb.GrantList
};
PersonRoles.SetACL = {
  methodName: "SetACL",
  service: PersonRoles,
  requestStream: false,
  responseStream: true,
  requestType: api_pb.ChangeGrantsRequest,
  responseType: api_pb.ChangeGrantsResult
};
var Companies = {
  serviceName: "listenfield.repo.Companies"
};
Companies.Upsert = {
  methodName: "Upsert",
  service: Companies,
  requestStream: false,
  responseStream: false,
  requestType: repo_catalog_rpc_pb.UpsertCompanyRequest,
  responseType: repo_catalog_rpc_pb.UpsertCompanyResult
};
Companies.Query = {
  methodName: "Query",
  service: Companies,
  requestStream: false,
  responseStream: true,
  requestType: api_pb.BatchedQueryRequest,
  responseType: repo_catalog_rpc_pb.QueryCompanyResult
};
Companies.Get = {
  methodName: "Get",
  service: Companies,
  requestStream: false,
  responseStream: false,
  requestType: api_pb.SimpleGetRequest,
  responseType: repo_catalog_types_pb.Company
};
Companies.GetACL = {
  methodName: "GetACL",
  service: Companies,
  requestStream: false,
  responseStream: false,
  requestType: api_pb.SimpleGetRequest,
  responseType: api_pb.GrantList
};
Companies.SetACL = {
  methodName: "SetACL",
  service: Companies,
  requestStream: false,
  responseStream: true,
  requestType: api_pb.ChangeGrantsRequest,
  responseType: api_pb.ChangeGrantsResult
};
module.exports = {
  FieldBoundaries: FieldBoundaries,
  Fields: Fields,
  Farms: Farms,
  Growers: Growers,
  Crops: Crops,
  CropZones: CropZones,
  ContactInfos: ContactInfos,
  Persons: Persons,
  PersonRoles: PersonRoles,
  Companies: Companies,
};

