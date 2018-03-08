// package: listenfield.repo
// file: repo/catalog-rpc.proto

import * as repo_catalog_rpc_pb from "../repo/catalog-rpc_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as repo_catalog_types_pb from "../repo/catalog-types_pb";
import * as api_pb from "../api_pb";
export class FieldBoundaries {
  static serviceName = "listenfield.repo.FieldBoundaries";
}
export namespace FieldBoundaries {
  export class Upsert {
    static readonly methodName = "Upsert";
    static readonly service = FieldBoundaries;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = repo_catalog_rpc_pb.UpsertFieldBoundaryRequest;
    static readonly responseType = repo_catalog_rpc_pb.UpsertFieldBoundaryResult;
  }
  export class Query {
    static readonly methodName = "Query";
    static readonly service = FieldBoundaries;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = api_pb.BatchedQueryRequest;
    static readonly responseType = repo_catalog_rpc_pb.QueryFieldBoundaryResult;
  }
  export class Get {
    static readonly methodName = "Get";
    static readonly service = FieldBoundaries;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = api_pb.SimpleGetRequest;
    static readonly responseType = repo_catalog_types_pb.FieldBoundary;
  }
  export class GetACL {
    static readonly methodName = "GetACL";
    static readonly service = FieldBoundaries;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = api_pb.SimpleGetRequest;
    static readonly responseType = api_pb.GrantList;
  }
  export class SetACL {
    static readonly methodName = "SetACL";
    static readonly service = FieldBoundaries;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = api_pb.ChangeGrantsRequest;
    static readonly responseType = api_pb.ChangeGrantsResult;
  }
}
export class Fields {
  static serviceName = "listenfield.repo.Fields";
}
export namespace Fields {
  export class Upsert {
    static readonly methodName = "Upsert";
    static readonly service = Fields;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = repo_catalog_rpc_pb.UpsertFieldRequest;
    static readonly responseType = repo_catalog_rpc_pb.UpsertFieldResult;
  }
  export class Query {
    static readonly methodName = "Query";
    static readonly service = Fields;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = api_pb.BatchedQueryRequest;
    static readonly responseType = repo_catalog_rpc_pb.QueryFieldResult;
  }
  export class Get {
    static readonly methodName = "Get";
    static readonly service = Fields;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = api_pb.SimpleGetRequest;
    static readonly responseType = repo_catalog_types_pb.Field;
  }
  export class GetACL {
    static readonly methodName = "GetACL";
    static readonly service = Fields;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = api_pb.SimpleGetRequest;
    static readonly responseType = api_pb.GrantList;
  }
  export class SetACL {
    static readonly methodName = "SetACL";
    static readonly service = Fields;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = api_pb.ChangeGrantsRequest;
    static readonly responseType = api_pb.ChangeGrantsResult;
  }
}
export class Farms {
  static serviceName = "listenfield.repo.Farms";
}
export namespace Farms {
  export class Upsert {
    static readonly methodName = "Upsert";
    static readonly service = Farms;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = repo_catalog_rpc_pb.UpsertFarmRequest;
    static readonly responseType = repo_catalog_rpc_pb.UpsertFarmResult;
  }
  export class Query {
    static readonly methodName = "Query";
    static readonly service = Farms;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = api_pb.BatchedQueryRequest;
    static readonly responseType = repo_catalog_rpc_pb.QueryFarmResult;
  }
  export class Get {
    static readonly methodName = "Get";
    static readonly service = Farms;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = api_pb.SimpleGetRequest;
    static readonly responseType = repo_catalog_types_pb.Farm;
  }
  export class GetACL {
    static readonly methodName = "GetACL";
    static readonly service = Farms;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = api_pb.SimpleGetRequest;
    static readonly responseType = api_pb.GrantList;
  }
  export class SetACL {
    static readonly methodName = "SetACL";
    static readonly service = Farms;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = api_pb.ChangeGrantsRequest;
    static readonly responseType = api_pb.ChangeGrantsResult;
  }
}
export class Growers {
  static serviceName = "listenfield.repo.Growers";
}
export namespace Growers {
  export class Upsert {
    static readonly methodName = "Upsert";
    static readonly service = Growers;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = repo_catalog_rpc_pb.UpsertGrowerRequest;
    static readonly responseType = repo_catalog_rpc_pb.UpsertGrowerResult;
  }
  export class Query {
    static readonly methodName = "Query";
    static readonly service = Growers;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = api_pb.BatchedQueryRequest;
    static readonly responseType = repo_catalog_rpc_pb.QueryGrowerResult;
  }
  export class Get {
    static readonly methodName = "Get";
    static readonly service = Growers;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = api_pb.SimpleGetRequest;
    static readonly responseType = repo_catalog_types_pb.Grower;
  }
  export class GetACL {
    static readonly methodName = "GetACL";
    static readonly service = Growers;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = api_pb.SimpleGetRequest;
    static readonly responseType = api_pb.GrantList;
  }
  export class SetACL {
    static readonly methodName = "SetACL";
    static readonly service = Growers;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = api_pb.ChangeGrantsRequest;
    static readonly responseType = api_pb.ChangeGrantsResult;
  }
}
export class Crops {
  static serviceName = "listenfield.repo.Crops";
}
export namespace Crops {
  export class Upsert {
    static readonly methodName = "Upsert";
    static readonly service = Crops;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = repo_catalog_rpc_pb.UpsertCropRequest;
    static readonly responseType = repo_catalog_rpc_pb.UpsertCropResult;
  }
  export class Query {
    static readonly methodName = "Query";
    static readonly service = Crops;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = api_pb.BatchedQueryRequest;
    static readonly responseType = repo_catalog_rpc_pb.QueryCropResult;
  }
  export class Get {
    static readonly methodName = "Get";
    static readonly service = Crops;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = api_pb.SimpleGetRequest;
    static readonly responseType = repo_catalog_types_pb.Crop;
  }
  export class GetACL {
    static readonly methodName = "GetACL";
    static readonly service = Crops;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = api_pb.SimpleGetRequest;
    static readonly responseType = api_pb.GrantList;
  }
  export class SetACL {
    static readonly methodName = "SetACL";
    static readonly service = Crops;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = api_pb.ChangeGrantsRequest;
    static readonly responseType = api_pb.ChangeGrantsResult;
  }
}
export class CropZones {
  static serviceName = "listenfield.repo.CropZones";
}
export namespace CropZones {
  export class Upsert {
    static readonly methodName = "Upsert";
    static readonly service = CropZones;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = repo_catalog_rpc_pb.UpsertCropZoneRequest;
    static readonly responseType = repo_catalog_rpc_pb.UpsertCropZoneResult;
  }
  export class Query {
    static readonly methodName = "Query";
    static readonly service = CropZones;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = api_pb.BatchedQueryRequest;
    static readonly responseType = repo_catalog_rpc_pb.QueryCropZoneResult;
  }
  export class Get {
    static readonly methodName = "Get";
    static readonly service = CropZones;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = api_pb.SimpleGetRequest;
    static readonly responseType = repo_catalog_types_pb.CropZone;
  }
  export class GetACL {
    static readonly methodName = "GetACL";
    static readonly service = CropZones;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = api_pb.SimpleGetRequest;
    static readonly responseType = api_pb.GrantList;
  }
  export class SetACL {
    static readonly methodName = "SetACL";
    static readonly service = CropZones;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = api_pb.ChangeGrantsRequest;
    static readonly responseType = api_pb.ChangeGrantsResult;
  }
}
export class ContactInfos {
  static serviceName = "listenfield.repo.ContactInfos";
}
export namespace ContactInfos {
  export class Upsert {
    static readonly methodName = "Upsert";
    static readonly service = ContactInfos;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = repo_catalog_rpc_pb.UpsertContactInfoRequest;
    static readonly responseType = repo_catalog_rpc_pb.UpsertContactInfoResult;
  }
  export class Query {
    static readonly methodName = "Query";
    static readonly service = ContactInfos;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = api_pb.BatchedQueryRequest;
    static readonly responseType = repo_catalog_rpc_pb.QueryContactInfoResult;
  }
  export class Get {
    static readonly methodName = "Get";
    static readonly service = ContactInfos;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = api_pb.SimpleGetRequest;
    static readonly responseType = repo_catalog_types_pb.ContactInfo;
  }
  export class GetACL {
    static readonly methodName = "GetACL";
    static readonly service = ContactInfos;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = api_pb.SimpleGetRequest;
    static readonly responseType = api_pb.GrantList;
  }
  export class SetACL {
    static readonly methodName = "SetACL";
    static readonly service = ContactInfos;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = api_pb.ChangeGrantsRequest;
    static readonly responseType = api_pb.ChangeGrantsResult;
  }
}
export class Persons {
  static serviceName = "listenfield.repo.Persons";
}
export namespace Persons {
  export class Upsert {
    static readonly methodName = "Upsert";
    static readonly service = Persons;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = repo_catalog_rpc_pb.UpsertPersonRequest;
    static readonly responseType = repo_catalog_rpc_pb.UpsertPersonResult;
  }
  export class Query {
    static readonly methodName = "Query";
    static readonly service = Persons;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = api_pb.BatchedQueryRequest;
    static readonly responseType = repo_catalog_rpc_pb.QueryPersonResult;
  }
  export class Get {
    static readonly methodName = "Get";
    static readonly service = Persons;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = api_pb.SimpleGetRequest;
    static readonly responseType = repo_catalog_types_pb.Person;
  }
  export class GetACL {
    static readonly methodName = "GetACL";
    static readonly service = Persons;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = api_pb.SimpleGetRequest;
    static readonly responseType = api_pb.GrantList;
  }
  export class SetACL {
    static readonly methodName = "SetACL";
    static readonly service = Persons;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = api_pb.ChangeGrantsRequest;
    static readonly responseType = api_pb.ChangeGrantsResult;
  }
}
export class PersonRoles {
  static serviceName = "listenfield.repo.PersonRoles";
}
export namespace PersonRoles {
  export class Upsert {
    static readonly methodName = "Upsert";
    static readonly service = PersonRoles;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = repo_catalog_rpc_pb.UpsertPersonRoleRequest;
    static readonly responseType = repo_catalog_rpc_pb.UpsertPersonRoleResult;
  }
  export class Query {
    static readonly methodName = "Query";
    static readonly service = PersonRoles;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = api_pb.BatchedQueryRequest;
    static readonly responseType = repo_catalog_rpc_pb.QueryPersonRoleResult;
  }
  export class Get {
    static readonly methodName = "Get";
    static readonly service = PersonRoles;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = api_pb.SimpleGetRequest;
    static readonly responseType = repo_catalog_types_pb.PersonRole;
  }
  export class GetACL {
    static readonly methodName = "GetACL";
    static readonly service = PersonRoles;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = api_pb.SimpleGetRequest;
    static readonly responseType = api_pb.GrantList;
  }
  export class SetACL {
    static readonly methodName = "SetACL";
    static readonly service = PersonRoles;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = api_pb.ChangeGrantsRequest;
    static readonly responseType = api_pb.ChangeGrantsResult;
  }
}
export class Companies {
  static serviceName = "listenfield.repo.Companies";
}
export namespace Companies {
  export class Upsert {
    static readonly methodName = "Upsert";
    static readonly service = Companies;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = repo_catalog_rpc_pb.UpsertCompanyRequest;
    static readonly responseType = repo_catalog_rpc_pb.UpsertCompanyResult;
  }
  export class Query {
    static readonly methodName = "Query";
    static readonly service = Companies;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = api_pb.BatchedQueryRequest;
    static readonly responseType = repo_catalog_rpc_pb.QueryCompanyResult;
  }
  export class Get {
    static readonly methodName = "Get";
    static readonly service = Companies;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = api_pb.SimpleGetRequest;
    static readonly responseType = repo_catalog_types_pb.Company;
  }
  export class GetACL {
    static readonly methodName = "GetACL";
    static readonly service = Companies;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = api_pb.SimpleGetRequest;
    static readonly responseType = api_pb.GrantList;
  }
  export class SetACL {
    static readonly methodName = "SetACL";
    static readonly service = Companies;
    static readonly requestStream = false;
    static readonly responseStream = true;
    static readonly requestType = api_pb.ChangeGrantsRequest;
    static readonly responseType = api_pb.ChangeGrantsResult;
  }
}
