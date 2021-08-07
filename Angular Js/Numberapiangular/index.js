var app = angular.module("HttpApp",[])

app.controller('controllerA',["$scope","$http",function($scope,$http){

    $scope.getData = function(){
        console.log("here")
        $http.get("http://numbersapi.com/"+$scope.no)
        .then(function(response){
            $scope.result = response.data;
        })
        .catch(function(err){
            $scope.result = err;
        })
    }

}])