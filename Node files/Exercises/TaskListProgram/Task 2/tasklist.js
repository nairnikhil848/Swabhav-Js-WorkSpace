
var input = document.getElementById("text");

function deleteATask(){

    var id = this.parentElement.id
    var li = document.getElementById(id);
    li.remove();
    //console.log(arguments);
}


function addtoList(text){
    const ul = document.getElementById('list');
    const listItems = ul.getElementsByTagName('li');


    console.log(listItems.length);
    var newli = document.createElement("li");
    newli.id = listItems.length + 1; 
    
    var btn = document.createElement("button");
    var txt = document.createTextNode("\u00D7");
    btn.addEventListener('click', deleteATask );
    btn.appendChild(txt);
    
    newli.appendChild(document.createTextNode(text));
    newli.appendChild(document.createTextNode("\u00A0"));
    newli.appendChild(btn);
    ul.prepend(newli);
}



input.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        console.log(arguments);
        let text = input.value;
        if(text){
            addtoList(text);
        }   
    }
});



