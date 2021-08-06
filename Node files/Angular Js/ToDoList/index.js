var todo = angular.module("TodoApp",[])

todo.controller('controllerA',['$scope',function($scope){
        
        $scope.toDoList = ["Hello","New Text"]    

        $scope.addItem = function(){
            $scope.toDoList.unshift($scope.text)
            console.log($scope.toDoList)
        }

        $scope.removeItem = function(text){

            var list = $scope.toDoList;
            for(var i=0;i<list.length;i++){
                if(list[i] == text){
                    list.splice(i,1)
                }
            }
        }

}])