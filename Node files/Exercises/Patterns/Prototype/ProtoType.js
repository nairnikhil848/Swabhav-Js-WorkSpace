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

Customer.prototype.getDetails = function(){
    return "Details"
}

Object.prototype.ObjectFn = function(){
    return "Object Prototype"
}




var c1 = new Customer(1,"NIkhil")

var c2 = new Customer(2,"Shivam")


console.log(c1.ObjectFn())
console.log(c2.getDetails())

console.log(c1.__proto__ == Customer.prototype)
console.log(c1.__proto__ == c2.__proto__)
console.log(Customer.prototype.__proto__ == Object.prototype)

console.log(Customer.prototype.__proto__)

console.log(Object.prototype)

console.log(Object.prototype.__proto__)



// console.log(c2)
// console.log(c1)

