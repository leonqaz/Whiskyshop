(function () {
    "use strict";
    var basketService = function ($http) {
        var basket = {};
        var totalPrice = 0;
        var noOfProducts = 0;
        
        // public method
        var getTotalPrice = function () {
            return totalPrice;
        }
        // public method
        var getNoOfProducts = function()
        {
            return noOfProducts;
        }
        // public method
        var updateBasketItem = function(item)
        {
            handleBaksetUpdates(item.product, item.count);
        }
        // public method
        var updateBasket = function(prod, changedCount)
        {
           
            var p = basket[prod.id]; 
            if(p)
            {
                changedCount = p.count + changedCount;
            }
            
            handleBaksetUpdates(prod,changedCount);
         
        }
        var handleBaksetUpdates = function (prod, buyCount) {
            //remove or update item
            if (buyCount <= 0)
                delete basket[prod.id];
            else
                basket[prod.id] = {
                    product: prod,
                    count: buyCount
                };

            totalPrice = calcTotalPrice();
            noOfProducts = countProducts();

        }
        var calcTotalPrice = function () {
            var total = 0;

            for (var prop in basket) {
                total += basket[prop].count * basket[prop].product.price;
            }
            return total;
        }
        var countProducts = function () {
            var total = 0;

            for (var prop in basket) {
                total += basket[prop].count;
            }
            return total;
        }
        // public method :-(
        var getBasket = function()
        {
            return basket;
        }

        return {
            getTotalPrice: getTotalPrice,
            getNoOfProducts: getNoOfProducts,
            updateBasket: updateBasket,
            updateBasketItem: updateBasketItem,
            getBasket: getBasket
        };

    }
    angular
    .module("Main")
    .factory("basketService", basketService);

}());