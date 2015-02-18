(function () {
    "use strict";
    angular.module("Main.checkoutController", []).controller("checkoutController", checkoutController);
    function checkoutController($scope, basketService) {
       
       

        $scope.checkout = function () {
            var basket = basketService.getBasket();
            console.log(basket);
            console.log($scope.customer);
        }

      
    }
})();