var schema = require('./schema.js');
var returnJson = function (err, data, response)
{
    if (err) {
        console.log(err);
        response.send(500);
    }
    else
        response.json(data);
}
exports.getOrigin = function (id, response) {
    schema.OriginsModel.findById(id, function (err, data) {
        returnJson(err, data, response);
    });
};  
exports.getOrigins = function (response) {

    schema.OriginsModel.find(
        function (err, data) {
            returnJson(err, data, response);
        });
  
};

exports.putOrigin = function (org, id, response) {

    var origin = new schema.OriginsModel({ 'origin': org });
    if (id && id !='') {
        var upsertData = origin.toObject();
        delete upsertData._id;
        schema.OriginsModel.findByIdAndUpdate(id, upsertData, { upsert: false }, function (err, data) { returnJson(err, data, response) });
    }
    else {
        origin.save(function (err, data) { returnJson(err, data, response) });
    }

}
exports.delOrigin = function(id, response)
{
    return schema.OriginsModel.findByIdAndRemove(id, function (err, data) {
        returnJson(err, data, response);
    });
}

exports.getWhisky = function (id, response) {
 
    schema.WhiskyModel.findById(id).populate('origin').exec( function (err, data) {
        returnJson(err, data, response);
    });
};
exports.getWhiskies = function (response) {
    schema.WhiskyModel.find().populate('origin').exec(
        function (err, data) {
            returnJson(err, data, response);
        });
  
};

exports.putWhisky = function (id, whisky, response) {
   
   
    if (id) {
        //   var upsertData = whisky.toObject();
        delete whisky._id;
        schema.WhiskyModel.findByIdAndUpdate(id, whisky, { upsert: false }, function (err, data) { returnJson(err, data, response) });
    }
    else {
        var newWhisky = new schema.WhiskyModel(whisky);
        newWhisky.save(function (err, data) { returnJson(err, data, response) })
    }

}
exports.delWhisky = function (id, response) {
    return schema.WhiskyModel.findByIdAndRemove(id, function (err, data) {
        returnJson(err, data, response);
    });
}
exports.putOrder = function (basket, customer, response) {
    var newBasket = new schema.BasketModel(basket);
    var order = new schema.OrderModel();
    
    order.customer = new schema.CustomerModel(customer);
    delete order.customer._id;
    
    //convert object to array 
    var arr = [];
    var j = 0;
    for (var i in basket.products) {
        
        var t = basket.products[i];
        delete t.product._id;
        newBasket.products[j] = new schema.BoughtproductModel({count:t.count, product: new schema.WhiskyModel(t.product) });
        j++;
    }
    order.basket = newBasket;
    //delete order.Basket._id;
    order.save(function (err, data) { returnJson(err, data, response) });
}

exports.getOrders = function (response) {
    schema.OrderModel.find().exec(
        function (err, data) {
            returnJson(err, data, response);
        });
  
};

exports.deleteOrder = function (id, response) {
    schema.OrderModel.findByIdAndRemove(id,
        function (err, data) {
            returnJson(err, data, response);
        });

}
