(function () {
    "use strict";
    angular.module("Main.originsAdminController", []).controller("originsAdminController", originsAdminController);
    function originsAdminController($scope, $location, dataService) {
        
        var setOrigins = function (data) 
        {
            $scope.Origins = data;
        }
        
        dataService.getOrigins().then(setOrigins);
     
        $scope.createOrigin = function ()
        {
            dataService.putOrigin('', $scope.newOrigin).then(
                dataService.getOrigins().then(setOrigins).then(
                    $scope.newOrigin = ''));

        }

        $scope.deleteOrigin = function (origin) 
        {
            dataService.deleteOrigin(origin._id).then(
                dataService.getOrigins().then(setOrigins).then(
                    $scope.newOrigin = ''));

        }

        $scope.alterOrigin = function (origin) {
            dataService.putOrigin(origin._id, origin.origin).then(
                dataService.getOrigins().then(setOrigins).then(
                    $scope.newOrigin = ''));
        }
    }
}
)();