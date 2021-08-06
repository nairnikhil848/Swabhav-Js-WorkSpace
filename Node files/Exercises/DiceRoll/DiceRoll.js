
var diceList = [];

//initialising with zeros;
for(let i = 0;i < 6;i++){
    diceList[i] = 0;
}

function rollDice(){
    diceList[(Math.floor(Math.random() * 6))] += 1;
}

for(let i = 0;i < 10;i++){
   rollDice();
}

for(i = 0; i<diceList.length;i++){
    console.log("Frequency of the "+(i+1)+"'s is: "+diceList[i] );
}


