# [Jenius - Technical Test] Back End Developer - Alfin Fernandha

## User API SPEC

### Create User

Endpoint : POST /api/users

Request Body :

```json
{
    "username" : "raven",
    "password" : "rahasia",
    "name" : "alfin fernandha"
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
    "errors" : "username already registered"
}
```

## Update User

Endpoint : PATCH /api/users

Headers :

- Authorization : token

Request Body :

```json
{
    "name" : "alfin fernandha", //optional
    "password" : "rahasia" //optional
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
