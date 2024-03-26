const obtainToken = (req, res) => {
    let request = new OAuth2Server.Request(req);
    let response = new OAuth2Server.Response(res);
  
    return oauth.token(request, response)
        .then((token) => {
            res.json(token);
        })
        .catch((err) => {
            res.status(err.code || 500).json(err);
          });
  }
  app.all('/auth', obtainToken);