var input = document.getElementById("text");

var permanentStorage = localStorage.getItem('TaskList');
permanentStorage = permanentStorage ? JSON.parse(permanentStorage) : [];

var tempStorage = sessionStorage.getItem('TaskList');
tempStorage = tempStorage ? JSON.parse(tempStorage) : [];

for(i=0;i<tempStorage.length;i++){
    liMaker(tempStorage[i]);
}

function liMaker(text){
    const ul = document.getElementById('list');
    const listItems = ul.getElementsByTagName('li');

    var newli = document.createElement("li");
    newli.id = listItems.length ; 
    
    var btn = document.createElement("button");
    var txt = document.createTextNode("\u00D7");
    btn.addEventListener('click', deleteATask );
    btn.className = "close";
    btn.appendChild(txt);
    
    newli.appendChild(document.createTextNode(text));
    newli.appendChild(document.createTextNode("\u00A0"));
    btn.addEventListener('click', deleteATask );
    newli.appendChild(btn);
    ul.prepend(newli);
}


function deleteATask(){
    var id = this.parentElement.id
    console.log(arguments);
    //console.log(this.parentElement.id)
    console.log(event)
    //console.log(li.innerHTML);
    var li = document.getElementById(id);
    li.remove();
    //const index = array.indexOf(5);
    //console.log(arguments[0].path[1].id);
    tempStorage.splice(id , 1);
    //console.log(tempStorage);
    sessionStorage.setItem('TaskList', JSON.stringify(tempStorage));

}

function addtoList(text){
    if(text){
        liMaker(text);
        tempStorage.push(text);
        permanentStorage.push(text);
        sessionStorage.setItem('TaskList', JSON.stringify(tempStorage));
        localStorage.setItem('TaskList', JSON.stringify(permanentStorage));
    }
}

input.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        let text = input.value;
        addtoList(text);
    }
});