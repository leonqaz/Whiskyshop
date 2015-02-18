(function () {
    "use strict";
    angular.module("Main.basketController", []).controller("basketController", basketController);
    function basketController($scope, $rootScope,basketService) {
        $scope.displayContent = false;
        $scope.basket = basketService.getBasket();

        $scope.showHideContent = function () {
            console.log($scope.displayContent);
            $scope.displayContent = !$scope.displayContent;
        }

        $scope.updateBasketItem = function (item)
        {
            basketService.updateBasketItem(item);
            $rootScope.basketNoOfProducts = basketService.getNoOfProducts();
            $rootScope.basketPrice = basketService.getTotalPrice();
        }
    }
})();