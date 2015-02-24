(function () {
    "use strict";
    var basketService = function ($http) {
        var basket = {
            products : {},
            totalPrice: 0,
            productCount:0
        };
        var subscribers = new Array();
        
      
        // public method
        var updateBasketItem = function(item)
        {
            handleBaksetUpdates(item.product, item.count);
        }
        // public method
        var i = 1;
        var subscribeToBasketChanges = function(func)
        {
            subscribers.push(func);
            func(basket); //bring late subscribes up to speed
        }
        // public method
        var updateBasket = function(prod, changedCount)
        {
           
            var p = basket.products[prod.id]; 
            if(p)
            {
                changedCount = p.count + changedCount;
            }
            handleBaksetUpdates(prod,changedCount);
         
        }
        var handleBaksetUpdates = function (prod, buyCount) {
            //remove or update item
            if (buyCount <= 0)
                delete basket.products[prod.id];
            else
                basket.products[prod.id] = {
                    product: prod,
                    count: parseInt(buyCount)
                };
            callBasketSubscribers();
               
        }
        var callBasketSubscribers = function (price, count)
        {
            basket.productCount = countProducts();            ;
            basket.totalPrice = calcTotalPrice();
            var basketCopy = getBasketCopy();
            subscribers.forEach(function (entry)
               {
                entry(basketCopy);
            }
)
        }
        var calcTotalPrice = function () {
            var total = 0;

            for (var prop in basket.products) {
                total += basket.products[prop].count * basket.products[prop].product.price;
            }
            
            return total;
        }
        var countProducts = function () {
            var total = 0;

            for (var prop in basket.products) {
                total += basket.products[prop].count;
            }
            return total;
        }
        
        // The basket should only be modified by the service, hence always return a clone
        var getBasketCopy = function()
        {
           return JSON.parse(JSON.stringify(basket));
        }

        return {
            updateBasket: updateBasket,
            updateBasketItem: updateBasketItem,
            subscribeToBasketChanges : subscribeToBasketChanges,
        };

    }
    angular
    .module("Main")
    .factory("basketService", basketService);

}());