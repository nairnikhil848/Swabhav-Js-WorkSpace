function doSomething(input,callbackSuccess,callbackError){
    var result = Math.random() * input;

    console.log(result);

    if(result > 5){
        callbackSuccess ({ result :"success"});
        return;
    }
    callbackError({ error: "Something is Wrong" }) ;
    return;
}

doSomething(10,function(data){ console.log("Success Happened " + data.result)},
                function(error){ console.log("Error Happened" + error.error)}  )

console.log("end")