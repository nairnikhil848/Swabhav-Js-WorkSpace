function doSomething(input){

    return new Promise(function(resolve,reject){
        console.log("Inisde Promise")
        var result = Math.random() *input
        console.log(result)
    
        if(result >5 ){
            resolve({ success: result })
            return
        }
        reject({error:'something went wrong'})
        return
    })
}

doSomething(10)
    .then(function(result){ console.log("success happened "+ result.success) })
    .then(function(result){ console.log("success2 happened"+ result.success) })
    .catch(function(result){ console.log("error Happened " + result.error)  })
    .then(function(){ console.log("Everytime this happens") })

console.log("end ")