(function () {
    "use strict";
    var dataService = function ($http) {
        var products;
        var getProducts = function () {
            return $http.get("/whiskies").
            then(function (response) { return response.data});
        }

        var getOrigins = function () {
            return $http.get("/origins").then(function (response) { return response.data });
            //then(returnData, getError);
        }
        var putOrigin = function (id, origin)
        {
            return $http.put("/origin/"+id, {origin: origin });
        }
        
        var putWhisky = function (id, whisky) {
            return $http.put("/whisky/" + id, { whisky: whisky });
        }
        
        var deleteOrigin = function (id)
        {
            return $http.delete("/origin/" + id);
        }
        var deleteWhisky = function (id) {
            return $http.delete("/whisky/" + id);
        }
        var getProduct = function (id) {
            return $http.get("/whisky/" + id).
            then(function (response) { return response.data });
        }

        var setReturnProducts = function(response)
        {
            products = response.data;
            return response.data
        }
        var filterproducts = function (response, id)
        {
            var newArray =response.filter(function (e1) {
               return e1.id == id;
            });
            return newArray[0];
            
        }
        var putOrder = function (basket, customer) {
            return $http.put("/order/", { basket: basket, customer: customer });
        }
        
        var getOrders = function () {
            return $http.get("/orders/").then(function (response) { return response.data });
            //then(returnData, getError);
        }
        
var deleteOrder = function (id)
        {
            return $http.delete("/order/" + id);
        }
        return {
            getProducts: getProducts,
            getOrigins: getOrigins,
            getProduct: getProduct,
            putOrigin: putOrigin,
            deleteOrigin: deleteOrigin,
            putWhisky : putWhisky,
            deleteWhisky: deleteWhisky,
            putOrder: putOrder,
            getOrders: getOrders,
            deleteOrder: deleteOrder
        };

    }
    angular
    .module("Main")
    .factory("dataService", dataService);

}());