function doSomething(input){
    var result = Math.random() * input

    console.log(result)

    if(result > 5){
        return { result :"success"}
    }
    return {error:"Something is Wrong"}
    
}
console.log(doSomething(10))
console.log("end")