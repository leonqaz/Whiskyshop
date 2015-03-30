var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var productSchema = new Schema({
    id: Number,
    name: String,
    price: Number,
    origin: String,
    imageUrl: String,
    description: String
});

var ProductsModel = mongoose.model("Products", productSchema);
module.exports = ProductsModel;
