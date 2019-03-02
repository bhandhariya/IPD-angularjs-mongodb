var mongoose = require('mongoose');
// var mongoURI = "mongodb://localhost:27017/IPD-17-jan";
// var mongoURI = "mongodb://localhost:27017/IPD-05-feb";
// var mongoURI = "mongodb://localhost:27017/IPD-06-feb";
 var mongoURI = "mongodb://localhost:27017/IPD-07-first-feb";
 // var mongoURI = "mongodb://prashant:prashant123@ds251804.mlab.com:51804/mentdoc";

mongoose.Promise = global.Promise;
mongoose.connect(mongoURI,{useNewUrlParser:true})
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("mongodb connection open");
});
exports.db = db;
