(function () {
    "use strict";
    var dataService = function ($http) {
        var products;
        var getProducts = function () {
            return $http.get("data/products.json").
            then(function (response) { return response.data});
        }

        var getOrigins = function () {
            return $http.get("data/categories.json").then(function (response) { return response.data });
            //then(returnData, getError);
        }

        var getProduct = function (productId) {
            
                return getProducts().then(function (response) { return filterproducts(response, productId) });          
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
        return {
            getProducts: getProducts,
            getOrigins: getOrigins,
            getProduct: getProduct
        };

    }
    angular
    .module("Main")
    .factory("dataService", dataService);

}());