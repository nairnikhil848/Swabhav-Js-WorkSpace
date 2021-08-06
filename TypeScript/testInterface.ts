interface ICustomer{
    id:number;
    firstName:string;
    lastName:string;
    location?:string
    
}
function printInfo(customers:ICustomer[]){
    for(let c of customers){
        console.log(c);
    }
}

printInfo([
    {id:101,firstName:'abc',lastName:'def'},
    {id:102,firstName:'abc1',lastName:'def1'},
    {id:103,firstName:'abc2',lastName:'def2'},
    {id:104,firstName:'abc3',lastName:'def3',location:"location1"}
])