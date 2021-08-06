(function(){
    var blueLocation = Math.floor(Math.random() * 50) + 1;
    var chances = 5;
    const rules = document.querySelector('.rules')
    
    let char = 0
    let timer = setInterval(animateRules,50)

    function animateRules(){
        const spans = rules.querySelectorAll('span')[char]
        spans.classList.add('fade');
        char ++
        if(char == 6 ){
            clearInterval(timer)
            timer = null;
            return;
        }
    }

    console.log(blueLocation)
    var start = document.getElementById("start");
    start.addEventListener('click', startGame );
    
    function startGame(){
        var frame1 = document.querySelector("#frame1");
        var frame2 = document.querySelector("#frame2");

        frame1.remove();
        frame2.style.visibility = 'visible';
        frame2.style.height = '100vh';

        createFiftyButtons();
    }

    function createFiftyButtons(){
        for(let i = 1;i <= 50; i++){
            
            var btn = document.createElement("button");
            btn.id = i;
            btn.className = "GreyButtons";
            btn.classList.add('btnstyle');
            btn.addEventListener('click', render );
            var container = document.getElementById('frame2');
            container.appendChild(btn);
            
        }
    }
    function render(){
        id = this.id
        var style = getComputedStyle(this);
        console.log(style['background-color']);

        if(style['background-color'] != 'rgb(105, 105, 105)' ){
            return;
        }
        chances -=1
        
        if(this.id > blueLocation){
            changeToGreen(id)
            checkchances()
            return 
        }
        if(this.id < blueLocation){
            changeToRed(id)
            checkchances()
            return
        }
        changeToBlue(id)
        setTimeout(function(){ alert("You have Won! Sensational.") }, 200);
        setTimeout('location.reload()', 210);

    }

    function checkchances(){
        if(chances == 0){
            setTimeout(function(){ alert("You have lost your horses. Game Over!") }, 200);
            setTimeout(function(){ location.reload() }, 210);
            return
        }
        if(chances == 1){
            setTimeout(function(){ alert("Last another chance. You Got there!") }, 200);
            return
        }
    }

    function changeToRed(id){
        document.getElementById(id).style.backgroundColor = '#e32636'; 
    }
    function changeToBlue(id){
        document.getElementById(id).style.backgroundColor = '#0f52ba'; 
    }
    function changeToGreen(id){
        document.getElementById(id).style.backgroundColor = '#04AA6D'; 
    } 

})();

// const styles = {
//     backgroundColor: '#04AA6D',
//     border: 'none',
//     color: 'white',
//     padding: '20px',
//     text-align: 'center',
//     text-decoration: 'none',
//     display: 'inline-block',
//     font-size: '16px',
//     margin: '4px 2px',
//     border-radius: '50%',
// }