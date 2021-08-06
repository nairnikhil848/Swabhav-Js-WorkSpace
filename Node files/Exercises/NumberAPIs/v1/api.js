console.log("Start")

var btn = document.querySelector("#btn");
btn.addEventListener('click', render );

function render(){
    var data = new XMLHttpRequest()
    data.addEventListener("load",function(){
        console.log(data.responseText)
        var label = document.querySelector("#label")
        label.innerHTML = ""
        label.innerHTML = data.responseText;
    })
    var number = document.querySelector("#text").value
    if(!isNaN(number)){
        data.open("GET","http://numbersapi.com/" + number)
        data.send();
        return
    }
    alert("Not an number");
}
console.log("End")