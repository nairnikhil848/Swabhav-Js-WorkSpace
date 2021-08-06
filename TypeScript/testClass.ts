class Customer{
    
    _id:number;
    _firstName:string;
    _lastName:string;

    constructor(id:number,firstName:string,lastName:string){
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
    }
    get Id(){
        return this._id;
    }
    get FirstName(){
        return this._firstName;
    }
    get lastName(){
        return this._lastName;
    }
    set Id(id:number){
        this._id = id;
    }
    set FirstName(name:string){
        this._firstName = name;
    }
    set LastName(name:string){
        this._lastName = name;
    }

}

let c1 = new Customer(101,"abc","pqr");
console.log(c1.FirstName);
c1.FirstName = "Nikhil";
console.log(c1.FirstName);

