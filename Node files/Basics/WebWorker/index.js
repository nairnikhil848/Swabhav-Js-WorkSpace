var btn1 = document.querySelector("#btn1")
btn1.addEventListener('click',function(){ alert("Hi") })

var btn2 = document.querySelector("#btn2")
btn2.addEventListener('click',function(){ 
                         for (var i = 0; i <= 1000000000; i += 1) {
                        var j = i;
                        }
                        alert("Sync Result :" + j)
                                      
                             })

var btn3 = document.querySelector("#btn3")
btn3.addEventListener('click',function(){ 

                                var worker = new Worker('Webworker.js');
                                worker.postMessage("Start Worker");

                                worker.onmessage = function(event){
                                    alert("Aync Result : "+ event.data)
                                }    
                                worker.onerror = function (event) {
                                    alert(event.message,event);
                                 };
                             })