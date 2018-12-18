// Require NPM Packages
var express = require("express");
var path = require("path");
var app = express();

// Set initial Port
var PORT = process.env.PORT || 8080;

// Data Handling
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routing 
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Start Server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
