# Example Authentication JWT Node JS and MongoDB

## 1. Make sure you have mongodb and nodejs has been install in your PC
## 2. Install Dependecies

```
$ git clone https://github.com/zulfikar4568/jwt-mongodb-example.git
$ cd jwt-mongodb-example
$ npm install
```
## 3. Configure your APPS
    Change `.env.example` to  `.env`, and change DB_CONNECT_LOCAL to your url MongoDB and change SECRET_TOKEN to your secret token.

## 4. Running your apps
```
$ npm start
```
Open in http://localhost:3000

Enjoyy!!!

## 5. How to use?

### API
Please use postman or anything to request

* Register account in http://localhost:3000/api/user/register with method POST
```
{
    "name": "zulfikar",
    "email": "isnaen7ds0@gmail.com",
    "password": "@Is123"
}
```
* Login http://localhost:3000/api/user/login with method POST
```
{
    "email": "isnaen70@gmail.com",
    "password": "@Is123"
}
```
and you will receive a token for example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM0ODczMmNkMzA0NzNlNDc3Y2E2NzIiLCJpYXQiOjE2MjM0OTYwNjMsImV4cCI6MTYyMzQ5NjE4M30.89_326sTkmFnfJScvT1tCbaaAhPDPWC4UQ0apMgnNBE

* And access fake posts with http://localhost:3000/api/posts with method GET
change headers to 'auth-token' eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM0ODczMmNkMzA0NzNlNDc3Y2E2NzIiLCJpYXQiOjE2MjM0OTYwNjMsImV4cCI6MTYyMzQ5NjE4M30.89_326sTkmFnfJScvT1tCbaaAhPDPWC4UQ0apMgnNBE

and you will get response post for example
```
{
    post: {
            title: 'my first post', 
            description: 'random description'
          }
}
```