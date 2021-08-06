
var input = document.getElementById("text");

input.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        let text = input.value;
        if(text){
            addtoList(text);
        }
        
    }

    function addtoList(text){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(text));
        document.getElementById("list").prepend(li);
    }
});