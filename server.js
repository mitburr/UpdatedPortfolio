    
//BOILERPLATE AND REQUIRES
const express = require("express");
const path = require("path");
const routes = require('./routes/api/gitRepo')
var mongoose = require("mongoose")
require("dotenv").config()
//express server opened
const app = express();

//|------------------------------------------------------------------------------------------------|

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "build")));

//|------------------------------------------------------------------------------------------------|

// Define API routes here
app.use(routes);

//|------------------------------------------------------------------------------------------------|

//HEROKU DEPLOYMENT SERVER BOILERPLATE

//or instantiated to open a port for Heroku
const PORT = process.env.PORT || 3001;
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//|------------------------------------------------------------------------------------------------|
// DATABASE CONFIGURATION: MONGO
var databaseUrl = "portfolio";
var collections = ["visitCount"];

// Hook mongojs configuration to the db variable
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/" + databaseUrl;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
});

//|------------------------------------------------------------------------------------------------|


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});