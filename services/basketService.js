(function () {
    "use strict";
    var basketService = function ($http) {
        var basket = {};
        var subscribers = {};
        
      
        // public method
        var updateBasketItem = function(item)
        {
            handleBaksetUpdates(item.product, item.count);
        }
        // public method
        var subscribeToBasketChanges = function(name, func)
        {
            subscribers[name] = func;
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
            callBasketSubscribers(calcTotalPrice(), countProducts());
        }
        var callBasketSubscribers = function (price, count)
        {
            for (var prop in subscribers) {
                subscribers[prop](price, count);
            }
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
            updateBasket: updateBasket,
            updateBasketItem: updateBasketItem,
            getBasket: getBasket,
            subscribeToBasketChanges : subscribeToBasketChanges,
        };

    }
    angular
    .module("Main")
    .factory("basketService", basketService);

}());