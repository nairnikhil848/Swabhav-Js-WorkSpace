  
function DevilSubscriber(){
    console.log("Devil is listening...");
}

function GodSubscriber(){
    console.log("God is listening...");
}

var ListofSubscriber = []
ListofSubscriber.push(DevilSubscriber);
ListofSubscriber.push(GodSubscriber);


function publisher(fn){
    fn();
}

var btn = document.getElementById("clickableBtn");

btn.addEventListener('click', function () {
    
    for(var i=0;i<ListofSubscriber.length;i++){
        publisher(ListofSubscriber[i]);
    }
});