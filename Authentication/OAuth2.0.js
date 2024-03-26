//npm install oauth2-server
// Begin app.js
const OAuth2Server = require('oauth2-server');

//create instance + pass object with attribute + pass tokens with URL + Access Token lifetime (set to one hour)
const oauth = new OAuth2Server({
    model: require('./model.js'),
    allowBearerTokensInQueryString: true,
    accessTokenLifetime: 60 * 60
  })
// create a module to hold our confidential client credentials and access tokens.
  module.exports = {
    confidentialClients: [{
      clientId: 'secretapplication',
      clientSecret: 'topsecret',
      grants: [
        'client_credentials'
      ]
    }],
    //a location to store access tokens
    tokens: []
  }
//import to model.js
let db = require('./db.js');

const getClient = (clientId, clientSecret) => {
    let confidentialClients = db.confidentialClients.filter((client)=>{
      return client.clientId === clientId && client.clientSecret === clientSecret
    });
    return confidentialClients[0];
  }
const getUserFromClient = (client) => {
  return {};
};
// export
module.exports = {
    getClient: getClient
  }
  // The saveToken() function must be implemented for all grant types in the model used by OAuth2Server. This function stores the access token as an object to a database when an access token is obtained.
const saveToken = (token, client, user) => {
  token.client = {
    id: client.clientId
  }
  token.user = {
    username: user.username
  }
  db.tokens.push(token);
  return token;
}
//export
module.exports = {
    getClient: getClient,
    saveToken: saveToken,
    getUserFromClient: getUserFromClient
  }