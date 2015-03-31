console.log("server.js top");
var express = require('express');
var app = express();
var routes = require('./routes/routes.js');
var ejs = require("ejs");
//var router = express.Router();
var mongoose = require('mongoose');
var dbname = 'WhiskyShop';
var bodyParser = require('body-parser')
console.log("setup static");
app.use(express.static(__dirname + '/Public'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/origins/", routes.getOrigins);
app.get("/origin/:id", routes.getOrigin);
app.put("/origin/:id", routes.putOrigin);
app.put("/origin/", routes.putOrigin);
app.delete("/origin/:id", routes.delOrigin);
app.get("/whiskies/", routes.getWhiskies);
app.get("/whisky/:id", routes.getWhisky);
app.put("/whisky/:id", routes.putWhisky);
app.put("/whisky/", routes.putWhisky);
app.delete("/whisky/:id", routes.delWhisky);
app.put("/order/", routes.putOrder);
app.get("/orders/", routes.getOrders);
app.delete("/order/:id", routes.deleteOrder)
//app.use('/', router);

console.log("mongoose connect");
mongoose.connect("mongodb://dbuser:Pa$$w0rd@ds059471.mongolab.com:59471/whiskydb");

console.log("mongoose connect2");
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function (callback) {
    console.log("Connection created");
});

var server = app.listen((process.env.PORT || 3000), function () {
    console.log(process.env.PORT);
})
