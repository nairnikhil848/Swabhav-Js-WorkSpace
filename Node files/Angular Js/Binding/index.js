var app = angular.module('binding-module', []);
  
app.controller('mainController',[ "$scope",function ($scope) {

    $scope.student = {
        rollno : 101,
        name :'Nikhil',
        cgpa : 10
    }
    
}]);