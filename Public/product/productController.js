(function () {
    "use strict";
    angular.module("Main.productController", []).controller("productController", productController);
    function productController($scope, $routeParams, dataService, basketService) {
        
        console.log($routeParams.id);
        dataService.getProduct($routeParams.id).then(
            function (data) {
                $scope.product = data;
            })

        $scope.buyPorduct = function (product) {
            basketService.updateBasket(product, $scope.buyCount);
        }
    }
})();