(function () {
    "use strict";
    angular.module("Main", ["ngRoute", "Main.productsController", "Main.basketController", "Main.productController", "Main.checkoutController", "Main.originsAdminController", "Main.whiskiesAdminController", "Main.ordersAdminController"]).
    config(function ($routeProvider) {
        $routeProvider
        .when('/product/:id', {
            templateUrl: '/product/product.html',
            controller: 'productController'
        }).
        when('/', {
            templateUrl: '/products/Products.html',
            controller: 'productsController'
        })
        .when('/originsAdmin',
 {
            templateUrl: 'Admin/originsAdmin.html',
            controller: 'originsAdminController'

        })
        .when('/whiskiesAdmin',
 {
            templateUrl: 'Admin/whiskiesAdmin.html',
            controller: 'whiskiesAdminController'

        })
        .when('/ordersAdmin',
 {
            templateUrl: 'Admin/ordersAdmin.html',
            controller: 'ordersAdminController'

        })
            .when('/checkout/', {
                templateUrl: '/CustomerCheckOut/checkOut.html',
                controller: 'basketController'
            }).
        otherwise({ redirectTo: '/' });

    })
    
    
})();