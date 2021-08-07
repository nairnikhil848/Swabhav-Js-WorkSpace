var app = angular.module('timeoutApp', []);
  
app.controller('timeoutCtrl',[ "$scope","$timeout",function ($scope, $timeout) {

    $scope.text="Text 1"
    
    $timeout(function () {
            $scope.text = "Text 2 ";
    }, 5000);

}]);