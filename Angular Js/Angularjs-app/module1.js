angular.module("mod1",[])
   .controller('ControllerA',['$scope','$rootScope','$log',function($scope,$rootScope,$log){
        console.log("Inside Controller A")
        $log.info("Using log Services")

        $rootScope.Company = {
            Name : 'AurionPro',
            Strength : '1500'
        }

        $scope.Developer = {
            Name :'Nikhil',
            Role :'Junior Engineer'
        }
        $log.info($rootScope)

        $log.info($scope);
}])


// ControllerA.$inject = ['$scope','$rootScope','$log'];