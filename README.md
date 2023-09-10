# [Jenius - Technical Test] Back End Developer - Alfin Fernandha

## User API SPEC

### Create User

Endpoint : POST /api/users

Headers :

- Authorization : token

Request Body :

```json
{
    "username" : "test",
    "emailAddress" : "test@mail.com",
    "accountNumber" : "12345678",
    "identityNumber" : "12345678"
}
```

Response Body Success :

```json
{
    "data" : {
        "id": "64fd505f65c1be26e9cf56b2",
        "username" : "test",
        "emailAddress" : "test@mail.com",
        "accountNumber" : "12345678",
        "identityNumber" : "12345678"
    }
}
```

Response Body Error :

```json
{
    "errors" : "username invalid"
}
```

## Update User

Endpoint : PATCH /api/users

Headers :

- Authorization : token

Params :

- id : idUser

Request Body :

```json
{
    "username" : "test",
    "emailAddress" : "test@mail.com",
    "accountNumber" : "12345678",
    "identityNumber" : "12345678"
}
```

Response Body Success :

```json
{
    "data" : {
        "name" : "alfin fernandha"
    }
}
```

Response Body Error :

```json
{
    "data" : {},
    "errors" : "name length max"
}
```

## Get User API

Endpoint : GET /api/users

Headers :

- Authorization : token
  
Response Body Success :

```json
{
    "data" : {
        "name" : "alfin fernandha",
        "username" : "raven"
    }
}
```

Response Body Error :

```json
{
    "data" : {},
    "errors" : "Unauthorized"
}
```

## Delete User

Endpoint : DELETE /api/users/logout

Headers :

- Authorization : token

Response Body Success :

```json
{
    "data" : {
        "logout" : "ok"
    }
}
```

Response Body Error :

```json
{
    "data" : {},
    "errors" : "Unauthorized"
}
```
