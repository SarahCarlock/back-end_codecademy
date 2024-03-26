//
const getAccessToken = (accessToken) => {
    let tokens = db.tokens.filter((savedToken)=>{
      return savedToken.accessToken === accessToken;
    })
    return tokens[0];
   }

module.exports = {
  // Exported functions
  getAccessToken: getAccessToken
}
