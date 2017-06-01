[![Build Status](https://travis-ci.org/patrickvaler/express-jwt-acl-mongoose-starter.svg?branch=master)](https://travis-ci.org/patrickvaler/express-jwt-acl-mongoose-starter) [![Dependency Status](https://david-dm.org/patrickvaler/express-jwt-acl-mongoose-starter/status.svg?style=flat)](https://david-dm.org/patrickvaler/express-jwt-acl-mongoose-starter) [![GitHub version](https://badge.fury.io/gh/patrickvaler%2Fexpress-jwt-acl-mongoose-starter.svg)](https://badge.fury.io/gh/patrickvaler%2Fexpress-jwt-acl-mongoose-starter)


express-jwt-acl-mongoose-starter 
====
Basic setup of express with JWT authentication (passport, passport-jwt), access control lists (node_acl) and Mongoose, written in ES6.




## Requirements
- [Node.js]("https://nodejs.org/") >= 6.x
- [MongoDB]("https://docs.mongodb.com/manual/installation/")

## Authentication
Authentication is based on [json web tokens]("https://jwt.io"). `passport-jwt` strategy is used to handle the email / password authentication.
After a successful login the generated token is sent to the requester. To access the protected routes, the requester must sent the token
in the header request.

## API
### Signup: `/api/signup`
```
POST /api/signup
Host: localhost:3000
Content-Type: application/json

{
    "email": "example@example.com",
    "password": "password123"
}
```

### Login: `/api/login`
```
POST /api/login
Host: localhost:3000
Content-Type: application/json

{
    "email": "example@example.com",
    "password": "password123"
}
```

### Protected route: `/api/protected`
Token must be put in request header, by using `Authorization` key
```
GET /api/protected
Host: localhost:3000
Authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5MmRhZTg1NGQ4ODlmNzkwZTY4NzMxZCIsImVtYWlsIjoiaW5mb0BwYXRyaWNrdmFsZXIuY2giLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE0OTYyNDE0NjAsImV4cCI6MTQ5NjI1MTU0MH0.VqwxvFavzhJtYe4XvPk9N19hzU62pGBUzA7XzlSPoq0
```

### Protected route (access for admin role only): `/api/adminonly`
User must have role `admin` to be able to get access to this endpoint. Token must be put in request header, by using `Authorization` key
```
GET /api/adminonly
Host: localhost:3000
Authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5MmRhZTg1NGQ4ODlmNzkwZTY4NzMxZCIsImVtYWlsIjoiaW5mb0BwYXRyaWNrdmFsZXIuY2giLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE0OTYyNDE0NjAsImV4cCI6MTQ5NjI1MTU0MH0.VqwxvFavzhJtYe4XvPk9N19hzU62pGBUzA7XzlSPoq0
```

## Scripts
**Run for development**
```bash
$ npm run serve
```
Runs the application with [nodemon]("https://nodemon.io/"). Server is listening on Port 3000 by default, this can be overwritten by `API_PORT` constant in `src/config/config.js`. Application will automatically run babel and eslint and restart if a code change was detected.

**Build**
```bash
$ npm run build
```
Runs eslint, transpiles the ES6 code and copies the transpiled code into build folder.

**Test**
```bash
$ npm test
```
Runs eslint and verifies the unit tests from `test/` folder;

## Eslint
`eslint` is pre-configured for this project It uses the airbnb configuration package and a minimal set of own rules. Configuration is available in `.eslintrc.js`.


## License

*The MIT License (MIT)*

Copyright (c) 2017 Patrick Valer

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---
Made with ♥ by [Patrick Valer]("https://patrickvaler.ch") (<hello@patrickvaler.ch>)