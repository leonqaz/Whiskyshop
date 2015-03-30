var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var originsSchema = new Schema({
    origin: String
});
var OriginsModel = mongoose.model("origins", originsSchema);

var whiskySchema = new Schema({
    name: String,
    price: Number,
    imageUrl: String,
    description: String,
    origin: { type: Schema.Types.ObjectId, ref: 'origins' }

});

var WhiskyModel = mongoose.model("whisky", whiskySchema);

var boughtproductSchema = new Schema({
    product: [whiskySchema],
    count: Number
})
var BoughtproductModel = mongoose.model("boughtproduct", boughtproductSchema);

var basketScehma = new Schema({
    products : [boughtproductSchema],
    totalPrice: Number,
    productCount: Number
})
var BasketModel = mongoose.model("basket", basketScehma);

var customerScehma = new Schema({
    firstname: String,
    lastname: String,
    street: String,
    houseNo: Number,
    zip: Number,
    city: String
})

var CustomerModel = mongoose.model("customer", customerScehma);

var orderSchema = new Schema({
    customer: [customerScehma],
    basket: [basketScehma]
    
    
})
var OrderModel = mongoose.model("order", orderSchema);


module.exports = {
    OriginsModel: OriginsModel , WhiskyModel: WhiskyModel, 
    BasketModel: BasketModel, BoughtproductModel: BoughtproductModel, 
    OrderModel: OrderModel, CustomerModel: CustomerModel
};
