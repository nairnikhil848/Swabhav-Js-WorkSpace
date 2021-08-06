export class Student{

    constructor(private firstName,private lastName){   
    }
    get FirstName(){
        return this.firstName;
    }
    get LastName(){
        return this.lastName;
    }

}
export class Address{

    constructor(private location,private city){
    }
    get City(){
        return this.city;
    }

}