function Customer(id,name){
    var _id,_name;
    if(id>0){
        _id = id;
    }

    if(name.length>0){
        _name =name;
    }
    this.foo = "Testing foo ";

    this.setName = function(name){
        _name =name;
    }
    this.getName = function(){
        return _name;
    }
    this.getId = function(){
        return _id;
    }
}

var c1 = new Customer(1,"NIkhil")

var c2 = new Customer(2,"Shivam")


console.log(c2)
console.log(c1)
// console.log({c1})
// console.log(c1.getName())
// console.log(c1.setName("ABC"))
// console.log(c1.getName())
// console.log(c1.foo)
// console.log({c1})
