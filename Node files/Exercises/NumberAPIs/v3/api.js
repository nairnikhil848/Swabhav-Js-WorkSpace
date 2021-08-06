function fact(id,no,text,isdeleted,dateAdded){
    this.id = id;
    this.no = no;
    this.text= text;
    this.isdeleted = isdeleted;
    this.dateAdded = dateAdded;
}

var numbersList = localStorage.getItem('numbersList');
numbersList = numbersList ? JSON.parse(numbersList) : [];

for(i=0;i<numbersList.length;i++){
    if(!numbersList[i].isdeleted){
        liMaker(numbersList[i]);
    }
}

function liMaker(fact){
    
    const ul = document.getElementById('list');

    var newli = document.createElement("li");
    newli.id = fact.id ; 

    var btn = document.createElement("button");
    var txt = document.createTextNode("\u00D7");
    btn.appendChild(txt);
    btn.addEventListener('click', deleteAFact );
    btn.className = "close";
    var span = document.createElement('span');

    span.style.color = '#2F3C7E'; 
    span.style.backgroundColor = '#FBEAEB';

    if( fact.no % 2  ){
        colorPurpleAndYellow(span)
    }

    var fact_text = document.createTextNode(fact.text)
    span.appendChild(fact_text);

    newli.appendChild(span);
    newli.appendChild(document.createTextNode("\u00A0"));
    newli.appendChild(document.createTextNode("\u00A0"));
    newli.appendChild(document.createTextNode("..."));
    newli.appendChild(document.createTextNode(moment(fact.dateAdded).fromNow()));;
    newli.appendChild(document.createTextNode("\u00A0"));

    newli.appendChild(btn);
    ul.prepend(newli);
}

function colorPurpleAndYellow(span){
    span.style.color = '#FFF748'; 
    span.style.backgroundColor = '#3C1A5B';
}
var btn = document.querySelector("#btn");
btn.addEventListener('click', render );

function render(){
    var number = document.querySelector("#text").value

    getFact(number).then(function(text){
                              console.log(text)
                              addtoList(number,text,false)
                            })
                    .catch(function(error){alert(error)})

}

function getFact(number){
    return new Promise(function(resolve,reject){
        

        // //Synchronous Request
        // var xmlHttp = new XMLHttpRequest();
        // xmlHttp.open( "GET", "http://numbersapi.com/" + number, false ); 
        // xmlHttp.send( null );
        // var response = xmlHttp.responseText;

        // if(response){
        //     console.log(response)
        //     resolve(response)
        //     return
        // }
        //     reject({error:'something went wrong'})     
        //     return;          
        

        //Asynchronous Request
        var data = new XMLHttpRequest();
        data.addEventListener("load",function(){
            var response = data.responseText
            if(response){
                    console.log(response)
                    resolve(response)
                    return
                }
                reject({error:'something went wrong'})     
                return;   

        })
        if(!isNaN(number)){
            data.open("GET","http://numbersapi.com/" + number)
            data.send();
            return
        }
        reject({error:'Not an Number'}) 
        return;

    })
}

function addtoList(no,text,isdeleted){
    var d = new Date();
    var n = d.getTime();
    var Fact = new fact(numbersList.length,no,text,isdeleted,n)
    numbersList.push(Fact);
    localStorage.setItem('numbersList', JSON.stringify(numbersList));
    liMaker(Fact);
   
}

function deleteAFact(){
    var id = this.parentElement.id

    var li = document.getElementById(id);
    li.remove();
    deleteFromList(id);
}

function deleteFromList(id){
    numbersList[id].isdeleted = true;
    localStorage.setItem('numbersList', JSON.stringify(numbersList));
}