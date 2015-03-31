(function () {
    "use strict";
    angular.module("Main.checkoutController", []).controller("checkoutController", checkoutController);
    function checkoutController($scope, basketService, dataService) {
        var basket = '';
       
        var keepBasket = function (refreshedBasket) {
            basket = refreshedBasket;
        }
        
        basketService.subscribeToBasketChanges(keepBasket)

        $scope.checkout = function () {
            console.log(basket);
            dataService.putOrder(basket, $scope.customer);
        }

      
    }
})();