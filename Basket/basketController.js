(function () {
    "use strict";
    angular.module("Main.basketController", []).controller("basketController", basketController);
    function basketController($scope, basketService) {
        $scope.displayContent = false;
      

        $scope.showHideContent = function () {
            console.log($scope.displayContent);
            $scope.displayContent = !$scope.displayContent;
        }
        var setBasketCountPrice = function (basket)
        {
            $scope.basketNoOfProducts = basket.productCount;
            $scope.basketPrice = basket.totalPrice;
            $scope.basket = basket.products;
        }
        basketService.subscribeToBasketChanges(setBasketCountPrice)

        $scope.updateBasketItem = function (item)
        {
            basketService.updateBasketItem(item);
        }
    }
})();