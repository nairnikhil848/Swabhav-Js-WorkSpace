angular.module('modB',[]).controller('controllerB',['$scope','$rootScope',function($scope,$rootScope){
    $scope.message = "Hello from controller B"
    console.log($rootScope.developer)

}])