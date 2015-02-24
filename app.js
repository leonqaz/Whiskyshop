(function () {
    "use strict";
    angular.module("Main", ["ngRoute", "Main.productsController", "Main.basketController", "Main.productController", "Main.checkoutController"]).
    config(function ($routeProvider) {
        $routeProvider
        .when('/product/:id', {
            templateUrl: '/product/product.html',
            controller: 'productController'
        }).
        when('/', {
            templateUrl: '/products/Products.html',
            controller: 'productsController'
        }).
            when('/checkout/', {
                templateUrl: '/CustomerCheckOut/checkOut.html',
                controller: 'basketController'
            }).
        otherwise({ redirectTo: '/' });

    })
    
    
})();