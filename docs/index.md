# Protocol Documentation
<a name="top"/>

## Table of Contents

- [api.proto](#api.proto)
    - [BatchedQueryMetadata](#listenfield.BatchedQueryMetadata)
    - [BatchedQueryRequest](#listenfield.BatchedQueryRequest)
    - [ChangeGrantsRequest](#listenfield.ChangeGrantsRequest)
    - [ChangeGrantsResult](#listenfield.ChangeGrantsResult)
    - [EchoMessage](#listenfield.EchoMessage)
    - [Grant](#listenfield.Grant)
    - [Grant.TypeEnum](#listenfield.Grant.TypeEnum)
    - [GrantList](#listenfield.GrantList)
    - [SimpleGetRequest](#listenfield.SimpleGetRequest)
    - [SortCriterium](#listenfield.SortCriterium)
  
  
  
  

- [Scalar Value Types](#scalar-value-types)



<a name="api.proto"/>
<p align="right"><a href="#top">Top</a></p>

## api.proto
This file has common definitions used by many ListenField APIs.


<a name="listenfield.BatchedQueryMetadata"/>

### BatchedQueryMetadata
Returned by standard CRUD queries, once per call, to express information
about the query itself. Notably used for paging results, in conjunction with
the `page_size` parameter in BatchedQueryRequest.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| page_token | [string](#string) |  | An opaque identifier that indicates more items are available than have been returned (due to paging). To get the next batch (page), repeat the call with the same parameters, but passing this token in the parameter of the same name. |
| count | [uint32](#uint32) |  | Number of items returned. Will never be more than `page_size`, but may be less if fewer items than that are available. |
| scanned | [uint32](#uint32) |  | Total number of items that matched the search and filter. |






<a name="listenfield.BatchedQueryRequest"/>

### BatchedQueryRequest
Standard format for CRUD queries.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| search | [string](#string) |  | Full-text search. |
| filter | [string](#string) |  | A JSON object containing filters in the format expected by MongoDB or CouchDB Find (Mango). |
| sort | [SortCriterium](#listenfield.SortCriterium) | repeated | One or more sort criteria, which are applied in the provided order. |
| page_size | [uint32](#uint32) |  | Maximum items to return; defaults to 20; if more items than that are available, a `page_token` will be returned, allowing a following call with the same parameters to get more items. |
| page_token | [string](#string) |  | An opaque identifier returned by a previous call, which can be used to get the next `page_size` items. |






<a name="listenfield.ChangeGrantsRequest"/>

### ChangeGrantsRequest
Standard request to change the access control to one or more
resources. Requires that the calling user has `grant` access to each
provided resource, otherwise an error will be returned.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| uuids | [string](#string) | repeated | Resources to which the changes should be applied. |
| add | [Grant](#listenfield.Grant) | repeated | New grants to add. The service does *not* check for duplicates. |
| remove | [Grant](#listenfield.Grant) | repeated | Grants to remove. If any of them are missing, they&#39;re ignored. |






<a name="listenfield.ChangeGrantsResult"/>

### ChangeGrantsResult
Returned by calls to change access control. For each resource in the
request, one ChangeGrantsResult will be returned (in a stream).


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| uuid | [string](#string) |  | Resource UUID. |
| grants | [Grant](#listenfield.Grant) | repeated | New set of grants after the changes. |
| error | [google.rpc.Status](#google.rpc.Status) |  | Error, if any, while applying the changes. |






<a name="listenfield.EchoMessage"/>

### EchoMessage
Used for test services. Many APIs have a simple test service, which expects
and returns an EchoMessage; if the request includes a message, the response
will return the same, otherwise a default will be used.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [string](#string) |  |  |






<a name="listenfield.Grant"/>

### Grant
Access control system for various resources. Grants access of a certain
type, to a certain user or group, for a certain resource.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| grantee | [string](#string) |  | Who is the grant to? Can be a user or group uuid, or &#34;PUBLIC&#34;. |
| type | [Grant.TypeEnum.Value](#listenfield.Grant.TypeEnum.Value) |  | What kind of access? |






<a name="listenfield.Grant.TypeEnum"/>

### Grant.TypeEnum







<a name="listenfield.GrantList"/>

### GrantList
A set of grants; typically the list of grants for a given resource.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| grants | [Grant](#listenfield.Grant) | repeated |  |






<a name="listenfield.SimpleGetRequest"/>

### SimpleGetRequest
A request for a single item from a CRUD interface, by providing the UUID.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| uuid | [string](#string) |  |  |






<a name="listenfield.SortCriterium"/>

### SortCriterium
Used as a sub-message for standard query calls, to specify how to sort the
results.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| field | [string](#string) |  | Field name to use as sort criterium. |
| descending | [bool](#bool) |  | True for descending order, false for ascending. |





 

 

 

 



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

