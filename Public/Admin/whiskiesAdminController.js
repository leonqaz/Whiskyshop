(function () {
    "use strict";
    angular.module("Main.whiskiesAdminController", []).controller("whiskiesAdminController", whiskiesAdminController);
    
    function whiskiesAdminController($scope, $location, dataService) {
        
        $scope.OriginIndex = {};

        var setOrigins = function (data) {
            $scope.Origins = data;
        }
        
        var setWhiskies = function (data) {
            $scope.Whiskies = data;
            $scope.Whiskies.forEach(function (w, i) {
                $scope.Origins.forEach(function (o, j) {
                    if (w.origin._id == o._id)
                        $scope.OriginIndex[w._id] = j;

                });
            });
            $scope.newWhisky = {};
        }

        dataService.getOrigins().then(setOrigins).then(dataService.getProducts().then(setWhiskies));
        
        
        $scope.alterWhisky = function (whisky) {
            whisky.origin = whisky.origin._id;
            console.log(whisky);
            dataService.putWhisky(whisky._id, whisky).then(dataService.getOrigins().then(setOrigins).then(dataService.getProducts().then(setWhiskies)));
        }
        
        $scope.createWhisky = function () {
            console.log($scope.newWhisky);
            $scope.newWhisky.origin = $scope.newWhisky.origin._id;
            dataService.putWhisky('', $scope.newWhisky).then(dataService.getOrigins().then(setOrigins).then(dataService.getProducts().then(setWhiskies)));            ;

        }
        
        $scope.selectOrigin = function (w) {
            return $scope.OriginIndex[w._id];
               
        }
        $scope.deleteWhisky = function (whisky) {
            dataService.deleteWhisky(whisky._id).then(
                dataService.getProducts().then(setWhiskies));
        }
    }
})();