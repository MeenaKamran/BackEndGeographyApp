var express = require("express");
var path = require("path");
// create the express app
var app = express();
// require bodyParser since we need to handle post data for adding a user
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')));

// require the mongoose configuration file which does the rest for us
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

// // store the function in a variable
// var routes_setter = require('request');
// invoke the function stored in routes_setter and pass it the "app" variable
// set up a static file server that points to the "client" directory
app.use(express.static(path.join(__dirname, '/client')));

app.listen(8000, function(){
	console.log("listening on port 8000");
})
