var express = require('express');
var app = express(); 						// create our app w/ express
var mongoose = require('mongoose'); 				// mongoose for mongodb
var port = process.env.PORT || 8080; 				// set the port
var morgan = require('morgan');
var bodyParser = require('body-parser');
app.use(express.static('./public')); 		// set the static files location /public/img will be /img for users
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json


app.get('/',function(req,res){
res.sendFile( __dirname + "/public/" + "index.html" );
})



app.listen(port);
console.log("App listening on port " + port);
