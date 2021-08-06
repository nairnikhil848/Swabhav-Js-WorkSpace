
(function(){

lButtons = [];

var c = 0;

var slider = document.getElementById("slider");
var output = document.getElementById("value");

slider.oninput = function() {
    output.innerHTML = this.value;
    render(this.value);
    
}
// function render(val){
//     deleteButtons();
//     createButtons(val);
// }
function printId(){
    alert(this.id);
}

function render(val){
    var container = document.getElementById('list');
    if(val == 0){
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        return;
    }

    if(container.children.length > val){
        deleteButtons(val,container.children.length);
        // for(let i = val; i<container.children.length ;i++){
        //     container.removeChild(container.childNodes[i]);
        // }
        return;
    }
    createbuttons(container.children.length,val);
    // for(let i= container.children.length;i<val ;i++){
    //     var btn = document.createElement("button");
    //     btn.id = i+1;
    //     btn.addEventListener('click', printId );
    //     btn.appendChild(document.createTextNode(i+1));
    //     var container = document.getElementById('list');
    //     container.appendChild(btn);
    // }
    

}
function deleteButtons(start,end){
    var container = document.getElementById('list');
    for(let i = start; i<end;i++){
        container.removeChild(container.childNodes[i]);
    }
}


function createbuttons(start,end){
    for(let i= start;i<end ;i++){
        var btn = document.createElement("button");
        btn.id = i+1;
        btn.addEventListener('click', printId );
        btn.appendChild(document.createTextNode(i+1));
        var container = document.getElementById('list');
        container.appendChild(btn);
    }
}


}());