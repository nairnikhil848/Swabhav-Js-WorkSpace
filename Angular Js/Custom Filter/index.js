var app = angular.module("filterApp",[])

app.filter('firstLetterUppercase',function(){
    return function(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
})

app.filter('aciiValue',function(){
    return function(string){
        var result = ""
        for (var i = 0; i < string.length; i++) {
            result += string.charCodeAt(i)
          }
        return result
    }
})

app.controller('ControllerA',[ "$scope",function ($scope) {

    $scope.name = "nikhil"
    
}])
