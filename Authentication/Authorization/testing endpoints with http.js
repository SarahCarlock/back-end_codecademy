//We can make an HTTP POST request to the /auth route to obtain an access token.
POST http://localhost:4001/auth
Content-Type: application/x-www-form-urlencoded
Authorization: Basic Y29kZWNhZGVteTpjb2RlY0BkZW15

grant_type=client_credentials

//The server will respond with an access token that looks like this:
{
  "accessToken":" "<access token>",
  "accessTokenExpiresAt":"2021-06-17T01:02:37.272Z",
  "client": {
    "id": "codecademy",
    "user":{}
  }
}

//To use the access token while requesting authenticated content, we pass the bearer token in the Authentication request header, replacing <Access Token> with the token returned from the request to /auth like so:

GET http://localhost:4001/secret
Authorization: Bearer <Access Token>
