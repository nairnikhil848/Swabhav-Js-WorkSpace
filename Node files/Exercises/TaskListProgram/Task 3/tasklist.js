function task (id,text,isdeleted,dateAdded) {
    this.id = id;
    this.text = text;
    this.isdeleted = isdeleted;
    this.dateAdded = dateAdded;
}

var ListsOfTasksFromBackend = localStorage.getItem('TaskList');
ListsOfTasksFromBackend = ListsOfTasksFromBackend ? JSON.parse(ListsOfTasksFromBackend) : [];

for(i=0;i<ListsOfTasksFromBackend.length;i++){
    if(!ListsOfTasksFromBackend[i].isdeleted){
        liMaker(ListsOfTasksFromBackend[i]);
    }
}

var input = document.getElementById("text");

input.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        let text = input.value;
        addtoList(text);
    }
});

function liMaker(task){

    const ul = document.getElementById('list');

    var newli = document.createElement("li");
    newli.id = task.id ; 
    
    var btn = document.createElement("button");
    var txt = document.createTextNode("\u00D7");
    btn.appendChild(txt);
    btn.addEventListener('click', deleteATask );
    btn.className = "close";
    
    newli.appendChild(document.createTextNode(task.text));
    newli.appendChild(document.createTextNode("\u00A0"));
    newli.appendChild(document.createTextNode("\u00A0"));
    newli.appendChild(document.createTextNode("..."));
    newli.appendChild(document.createTextNode(moment(task.dateAdded).fromNow()));
    newli.appendChild(document.createTextNode("\u00A0"));

    newli.appendChild(btn);
    ul.prepend(newli);
    
}


function deleteATask(){
    var id = this.parentElement.id

    var li = document.getElementById(id);
    li.remove();

    deleteFromBackend(id);
}

function addtoList(text){
    if(text){
        addtoBackend(text);
        liMaker(ListsOfTasksFromBackend[ListsOfTasksFromBackend.length-1]);
    }
}

function addtoBackend(text){
    var d = new Date();
    var n = d.getTime();
    ListsOfTasksFromBackend.push(new task(ListsOfTasksFromBackend.length,text,false,n));
    localStorage.setItem('TaskList', JSON.stringify(ListsOfTasksFromBackend));
}

function deleteFromBackend(id){
    ListsOfTasksFromBackend[id].isdeleted = true;
    localStorage.setItem('TaskList', JSON.stringify(ListsOfTasksFromBackend));
}