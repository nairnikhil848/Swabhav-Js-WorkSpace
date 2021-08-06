var service = function(){
    var obj = {}
    console.log("Service called")
    obj.doSomething1 = function(){
        console.log("Inside 1")
    }
    obj.doSomething2 = function(){
        console.log("Inside 2")
    }
    return obj
}();

console.log(service)
service.doSomething1();
service.doSomething2();