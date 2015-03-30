
var dataAccess = require('../data/dataAccess.js');
    

exports.getOrigins = function (req, res) {
    dataAccess.getOrigins(res);
};
exports.getOrigin = function (req, res) { 
    dataAccess.getOrigin(req.params.id, res);
};

exports.putOrigin = function (req, res) {    
    dataAccess.putOrigin(req.body.origin, req.params.id, res); 
};
exports.delOrigin = function (req, res) {
    dataAccess.delOrigin(req.params.id, res);
};
exports.getWhiskies = function (req, res) {
    dataAccess.getWhiskies(res);
};
exports.getWhisky = function (req, res) {
    dataAccess.getWhisky(req.params.id, res);
};

exports.putWhisky = function (req, res) {
    dataAccess.putWhisky(req.params.id, req.body.whisky, res);
};
exports.delWhisky = function (req, res) {
    dataAccess.delWhisky(req.params.id, res);
};

exports.putOrder = function (req, res) {
    dataAccess.putOrder(req.body.basket, req.body.customer, res);

};
exports.getOrders = function (req, res) {
    dataAccess.getOrders(res);
}
exports.deleteOrder = function (req, res) {
    dataAccess.deleteOrder(req.params.id, res);
}




