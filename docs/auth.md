# Protocol Documentation
<a name="top"/>

## Table of Contents

- [auth.proto](#auth.proto)
    - [ContinueLoginRequest](#listenfield.auth.ContinueLoginRequest)
    - [ContinueLoginRequest.ChallengeDataEntry](#listenfield.auth.ContinueLoginRequest.ChallengeDataEntry)
    - [LoginChallenge](#listenfield.auth.LoginChallenge)
    - [LoginChallenge.ChallengeTypeEnum](#listenfield.auth.LoginChallenge.ChallengeTypeEnum)
    - [LoginChallenge.DataEntry](#listenfield.auth.LoginChallenge.DataEntry)
    - [LoginResult](#listenfield.auth.LoginResult)
    - [LoginWithPasswordRequest](#listenfield.auth.LoginWithPasswordRequest)
    - [RefreshRequest](#listenfield.auth.RefreshRequest)
    - [SessionInfo](#listenfield.auth.SessionInfo)
    - [SessionTypeRequest](#listenfield.auth.SessionTypeRequest)
  
  
  
    - [Authentication](#listenfield.auth.Authentication)
    - [Test](#listenfield.auth.Test)
  

- [Scalar Value Types](#scalar-value-types)



<a name="auth.proto"/>
<p align="right"><a href="#top">Top</a></p>

## auth.proto
ListenField authentication and authorization, token management, identity
management, and related functionality


<a name="listenfield.auth.ContinueLoginRequest"/>

### ContinueLoginRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| username | [string](#string) |  |  |
| continuationToken | [string](#string) |  |  |
| mfaCode | [string](#string) |  |  |
| challengeData | [ContinueLoginRequest.ChallengeDataEntry](#listenfield.auth.ContinueLoginRequest.ChallengeDataEntry) | repeated |  |






<a name="listenfield.auth.ContinueLoginRequest.ChallengeDataEntry"/>

### ContinueLoginRequest.ChallengeDataEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |






<a name="listenfield.auth.LoginChallenge"/>

### LoginChallenge



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [LoginChallenge.ChallengeTypeEnum.Value](#listenfield.auth.LoginChallenge.ChallengeTypeEnum.Value) |  |  |
| data | [LoginChallenge.DataEntry](#listenfield.auth.LoginChallenge.DataEntry) | repeated |  |
| continuationToken | [string](#string) |  |  |






<a name="listenfield.auth.LoginChallenge.ChallengeTypeEnum"/>

### LoginChallenge.ChallengeTypeEnum







<a name="listenfield.auth.LoginChallenge.DataEntry"/>

### LoginChallenge.DataEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |






<a name="listenfield.auth.LoginResult"/>

### LoginResult



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| session | [SessionInfo](#listenfield.auth.SessionInfo) |  |  |
| challenge | [LoginChallenge](#listenfield.auth.LoginChallenge) |  |  |






<a name="listenfield.auth.LoginWithPasswordRequest"/>

### LoginWithPasswordRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| username | [string](#string) |  |  |
| password | [string](#string) |  |  |
| mfaCode | [string](#string) |  |  |
| sessionTypeRequest | [SessionTypeRequest](#listenfield.auth.SessionTypeRequest) |  |  |






<a name="listenfield.auth.RefreshRequest"/>

### RefreshRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| refreshToken | [string](#string) |  |  |
| sessionTypeRequest | [SessionTypeRequest](#listenfield.auth.SessionTypeRequest) |  | the refresh field on the type request is ignored (assumed true) |






<a name="listenfield.auth.SessionInfo"/>

### SessionInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| accessToken | [string](#string) |  |  |
| tokenType | [string](#string) |  |  |
| expiresAt | [google.protobuf.Timestamp](#google.protobuf.Timestamp) |  |  |
| username | [string](#string) |  |  |
| refreshToken | [string](#string) |  |  |
| idToken | [string](#string) |  |  |






<a name="listenfield.auth.SessionTypeRequest"/>

### SessionTypeRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| refresh | [bool](#bool) |  |  |
| username | [bool](#bool) |  |  |
| idToken | [bool](#bool) |  |  |





 

 

 


<a name="listenfield.auth.Authentication"/>

### Authentication


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| LoginWithPassword | [LoginWithPasswordRequest](#listenfield.auth.LoginWithPasswordRequest) | [LoginResult](#listenfield.auth.LoginWithPasswordRequest) |  |
| ContinueLogin | [ContinueLoginRequest](#listenfield.auth.ContinueLoginRequest) | [LoginResult](#listenfield.auth.ContinueLoginRequest) |  |
| Refresh | [RefreshRequest](#listenfield.auth.RefreshRequest) | [SessionInfo](#listenfield.auth.RefreshRequest) |  |


<a name="listenfield.auth.Test"/>

### Test


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Echo | [.listenfield.EchoMessage](#listenfield.EchoMessage) | [.listenfield.EchoMessage](#listenfield.EchoMessage) |  |

 



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

