(function () {
    "use strict";
    angular.module("Main.checkoutController", []).controller("checkoutController", checkoutController);
    function checkoutController($scope, basketService) {
        var basket = '';
       
        var keepBasket = function (refreshedBasket) {
            basket = refreshedBasket;
        }
        
        basketService.subscribeToBasketChanges(keepBasket)

        $scope.checkout = function () {
            console.log(basket);
            console.log($scope.customer);
        }

      
    }
})();