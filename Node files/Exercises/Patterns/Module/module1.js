function makeCustomer(){
    var customer = {}

    var _id,_name;

    customer.setId = function(id){
        _id = id;
    }

    customer.setName = function(name){
        _name = name;
    }

    customer.getDetails = function(){
        return (" Name : " + _name + " ID : " + _id)
    }
    return customer
}

var c1 = makeCustomer()
c1.setName("Nikhil")
c1.setId(12)
console.log(c1.getDetails())
console.log(c1)