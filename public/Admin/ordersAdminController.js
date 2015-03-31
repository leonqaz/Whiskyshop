(function () {
    "use strict";
    angular.module("Main.ordersAdminController", []).controller("ordersAdminController", ordersAdminController);
    function ordersAdminController($scope, $location, dataService) {
        
        var setOrders = function (data) {
            console.log(data);
            $scope.Orders = data;
        }
        
        dataService.getOrders().then(setOrders);
        
     
        
        $scope.deleteOrder = function (id) {
            dataService.deleteOrder(id).then(dataService.getOrders().then(setOrders));

        }
        
       
    }
}
)();