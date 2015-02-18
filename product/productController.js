(function () {
    "use strict";
    angular.module("Main.productController", []).controller("productController", productController);
    function productController($scope, $routeParams, $rootScope, dataService, basketService) {

        dataService.getProduct($routeParams.id).then(
            function (data) {
                $scope.product = data;
            })

        $scope.buyPorduct = function (product) {
            basketService.updateBasket(product, $scope.buyCount);
            $rootScope.basketNoOfProducts = basketService.getNoOfProducts();
            $rootScope.basketPrice = basketService.getTotalPrice();
        }
    }
})();