angular.module('modA',['modB']).controller('controllerA',['$scope','$rootScope',function($scope,$rootScope){
    $scope.message = "Hello from controller A"
    $rootScope.developer = {
        name :'Nikhil',
        role :"Junior",
        address : ["1st Address","2nd Address"]
    }
    console.log($rootScope.developer)

}])