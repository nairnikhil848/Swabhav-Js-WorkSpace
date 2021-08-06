var app = angular.module("NumberApp",[])


app.factory('MathService',['$log','$q',function($log,$q){

    var math = {}
    math.checkPrime = function(n){
        return $q(function(resolve,reject){
            if (n <= 1){
                resolve(false)
                return
            }
            if (n == 2){
                resolve(true)
                return
            }

            if (n % 2 == 0){
                resolve(false)
                return
            }
            
            for (var i = 3; i <= Math.sqrt(n); i += 2)
            {
                if (n % i == 0){
                    resolve(false)
                    return
                }
            }
            resolve(true)
            return

        })
    }
    math.checkEven = function(no){
        return $q(function(resolve,reject){
            console.log("inside")
            if(no%2==0){
                resolve(true)
                return
            }
            resolve(false)
            return
        })

    }

    return math

}])

app.controller('PrimeController',['$scope','MathService',function($scope,MathService){
    
    $scope.CheckPrime = function(){
        
        MathService.checkPrime($scope.no1).then(function(data) { 

            $scope.Primeresult = data;
        
          })
        
    }


}])

app.controller('EvenController',['$scope','MathService',function($scope,MathService){
    
    $scope.checkEven = function(){
        console.log("start")
        MathService.checkEven($scope.no2).then(function(data) {
            console.log("here")
            $scope.Evenresult = data;
        
          })
          console.log("end")
    }


}])
// app.controller('EvenController',[])





