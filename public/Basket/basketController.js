(function () {
    "use strict";
    angular.module("Main.basketController", []).controller("basketController", basketController).directive("basketcontentWidget", basketcontentWidget);
    function basketController($scope, basketService) {
        $scope.displayContent = false;
      

        $scope.showHideContent = function () {
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
    function basketcontentWidget() {
        var widget = {
            templateUrl: "./basket/BasketContent.html",
            restrict: "E",
            controller: basketController
        }
        return widget;
    }
})();