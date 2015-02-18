(function () {
    "use strict";
    angular.module("Main.productsController", []).controller("productsController", productsController);
    function productsController($scope, $location, dataService, basketService) {

        $scope.categoriesSelected = new Array();
             
        var setProducts = function (data) {
            $scope.products = data;
        }
        var setOrigins = function(data)
        {
            $scope.categories = data;
        }
        
        
        dataService.getProducts().then(setProducts);
        dataService.getOrigins().then(setOrigins);
       
        $scope.buyPorduct = function(product)
        {
            basketService.updateBasket(product, 1);
        }

        $scope.removeProduct = function(product)
        {
            basketService.updateBasket(product, -1);
        }
        $scope.gotoDetails = function(product)
        {
            $location.path('/product/'.concat(product.id));
        }
        $scope.categoryChanged = function(category)
        {
            var i = $scope.categoriesSelected.indexOf(category);
            if (i > -1)
                $scope.categoriesSelected.splice(i, 1);
            else
                $scope.categoriesSelected.push(category);
        }
        $scope.categoryFilter = function (product) {
            if($scope.categoriesSelected.length > 0)
            {
                if ($scope.categoriesSelected.indexOf(product.origin)<0)
                    return;
            }
            return product;

        }

    }
})();