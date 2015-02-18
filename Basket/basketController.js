(function () {
    "use strict";
    angular.module("Main.basketController", []).controller("basketController", basketController);
    function basketController($scope, basketService) {
        $scope.displayContent = false;
        $scope.basket = basketService.getBasket();

        $scope.showHideContent = function () {
            console.log($scope.displayContent);
            $scope.displayContent = !$scope.displayContent;
        }
        var setBasketCountPrice = function (price, count)
        {
            $scope.basketNoOfProducts = count;
            $scope.basketPrice = price;
        }
        basketService.subscribeToBasketChanges("basketController", setBasketCountPrice)
        $scope.updateBasketItem = function (item)
        {
            basketService.updateBasketItem(item);
        }
    }
})();