var app = angular.module("module1",[]);

app.controller("controllerA",["$scope",function($scope){
    $scope.blue = "blue"
    $scope.red = "Red"
    $scope.colorChange = function(index){
        if(index == $scope.blue){
            $scope.myObj = {   
                "background-color" : "blue",  
              }  
              return;  
        }
        $scope.myObj = {   
            "background-color" : "red",  
          }  
          return;
    }

}])

