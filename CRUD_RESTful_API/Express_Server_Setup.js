/*Setting up an Express server
To set up a Node.js app and Express server, first create a directory for the project to live in:

mkdir node-api-postgres
cd node-api-postgres
You can either run npm init -y to create a package.json file, or copy the code below into a package.json file: */

{
  "name": "node-api-postgres",
  "version": "1.0.0",
  "description": "RESTful API with Node.js, Express, and PostgreSQL",
  "main": "index.js",
  "license": "MIT"
}
/*We’ll want to install Express for the server and node-postgres to connect to PostgreSQL: */

npm i express pg
/*Now, we have our dependencies loaded into node_modules and package.json.

Create an index.js file, which we’ll use as the entry point for our server. At the top, we’ll require the express module, the built-in body-parser middleware, and we’ll set our app and port variables: */

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
//We’ll tell a route to look for a GET request on the root / URL and return some JSON:

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})
//Now, set the app to listen on the port you set:

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
//From the command line, we can start the server by hitting index.js:

node index.js
App running on port 3000.
//Go to http://localhost:3000 in the URL bar of your browser, and you’ll see the JSON we set earlier:

{
  info: "Node.js, Express, and Postgres API"
}
/*The Express server is running now, but it’s only sending some static JSON data that we created. The next step is to connect to PostgreSQL from Node.js to be able to make dynamic queries.

Exit node with control+c  */