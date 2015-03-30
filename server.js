
var express = require('express');
var app = express();
var routes = require('./routes/routes.js');
var ejs = require("ejs");
var router = express.Router();
var mongoose = require('mongoose');
var dbname = 'WhiskyShop';
var bodyParser = require('body-parser')
app.use(express.static(__dirname + '/public'));
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
app.use('/', router);

mongoose.connect("mongodb://localhost/" + dbname);

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function (callback) {
    console.log("Connection created");
});

var server = app.listen(3000, function () {
    console.log(__dirname);
})
