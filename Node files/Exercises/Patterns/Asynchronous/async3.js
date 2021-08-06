

function doSomething(input,callbackSuccess,callbackError){

setTimeout( function(){
    var result = Math.random() * input;

    console.log(result);

    if(result > 5){
        callbackSuccess ({ result :"success"});
        return "executed";
    }
    callbackError({ error: "Something is Wrong" }) ;
    return "executed";
},0)

}

var res = doSomething(10,function(data){ console.log("Success Happened " + data.result)},
                        function(error){ console.log("Error Happened " + error.error)} )

console.log("end")
console.log(res)