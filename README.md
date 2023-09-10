# [Jenius - Technical Test] Back End Developer - Alfin Fernandha

## App

### Base URL

- <http://34.16.185.253:3000>
  
### Feature

- Protected API with Authorization (JWT)
- CRUD operation for User using MongoDB
- Caching strategy using Redis
- Produce user data from mongodb to Kafka

### Tech-Stack

- Nodejs
- MongoDB
- Redis
- Kafka
- Docker

## Public API SPEC

### Get Token

Endpoint : GET /api/token

Response Body Success :

```json
{
    "code": 200, 
    "data" : {
        "token": "eyJhbGciOiJIUzI1NiJ9.dGVzdA.jRGkdJjq1ItpcSlSKNQXHB5H3E8EmliKLZT_iXQQXD0",
        "expiresIn": "3600s"
    },
    "message": "get token success"
}
```

Response Body Error :

```json
{
    "code":500,
    "message" : "something went wrong!"
}
```

### Get Health Check

Endpoint : GET /api/health

Response Body Success :

```json
{
    "code": 200, 
    "message": "Redis, DB Connection OK. Health checks passed.'"
}
```

Response Body Error :

```json
{
    "code":500,
    "message" : "Health checks failed: something went wrong!"
}
```

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
    "code": 200, 
    "data" : {
        "id": "64fd505f65c1be26e9cf56b2",
        "username" : "test",
        "emailAddress" : "test@mail.com",
        "accountNumber" : "12345678",
        "identityNumber" : "12345678"
    },
    "message": "create data success"
}
```

Response Body Error :

```json
{
    "code":400,
    "message" : "username invalid"
}
```

### Update User

Endpoint : PUT /api/users/:id

Headers :

- Authorization : token

Path :

- id : idUser

Request Body :

```json
{
    "username" : "test_updated",
}
```

Response Body Success :

```json
{
    "code": 200, 
    "data" : {
        "id": "64fd505f65c1be26e9cf56b2",
        "username" : "test_updated",
        "emailAddress" : "test@mail.com",
        "accountNumber" : "12345678",
        "identityNumber" : "12345678"
    },
    "message": "update data success"

}
```

Response Body Error :

```json
{   
    "code": 400,
    "message" : "invalid user id"
}
```

### Get User API

Endpoint : GET /api/users

Headers :

- Authorization : token

Query Param :

- accountNumber : accountNumber
- identityNumber : identityNumber
  
Response Body Success :

```json
{
    "code": 200, 
    "data" : {
        "id": "64fd505f65c1be26e9cf56b2",
        "username" : "test",
        "emailAddress" : "test@mail.com",
        "accountNumber" : "12345678",
        "identityNumber" : "12345678"
    },
    "message": "get data success"
}
```

Response Body Error :

```json
{
    "code" : 404,
    "message" : "user not found"
}
```

### Delete User

Endpoint : DELETE /api/users/:id

Headers :

- Authorization : token

Path :

- id : idUser

Response Body Success :

```json
{
    "code": 200, 
    "message": "delete data success"
   
}
```

Response Body Error :

```json
{
    "code" : 404,
    "message" : "user not found"
}
```
