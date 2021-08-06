(function(){
    
    var nxtbtn = document.querySelector("#next");
    var prevbtn = document.querySelector("#prev");

    var ans = new Array(questionBank.length)
    var counter = 0;

    displayObjectiveResponse(questionBank[counter].question,questionBank[counter].options)

    

    function displayObjectiveResponse(question,options){
        var Question = document.querySelector("#question")
        Question.innerHTML = ""
        Question.innerHTML = question

        for(var i=0;i< options.length;i++){
            var Option = document.getElementById(i)
            Option.innerHTML = ""
            Option.innerHTML = options[i]
        }
    }

    nxtbtn.addEventListener('click', rendernxt );

    function rendernxt(){
        var choices = document.querySelectorAll("input");
        choices.forEach(function(choice) {
            if(choice.checked){
                ans.splice( counter, 1, choice.value );
                choice.checked = false;
            }
        });

        counter +=1;
        checkMarkedAns();

        if(counter == 1){
            prevbtn.style.visibility = "visible";
        }

        if((counter+1) == questionBank.length){
            nxtbtn.innerHTML = "Submit";
        }

        if(counter == questionBank.length){
            calculateResult();
            return
        }

        displayObjectiveResponse(questionBank[counter].question,questionBank[counter].options)
    }

    function checkMarkedAns(){
        var choices = document.querySelectorAll("input");
        if(ans[counter] == undefined){
            return
        }
        choices.forEach(function(choice) {
            choice.checked = false;
            if(ans[counter] == choice.value){
                choice.checked = true;
            }
        });
    }

    prevbtn.addEventListener('click', renderprev );

    function renderprev(){
        counter -= 1
        if(counter == 0){
            prevbtn.style.visibility = "hidden";
        }
        checkMarkedAns();
        displayObjectiveResponse(questionBank[counter].question,questionBank[counter].options)
    }

    function calculateResult(){
        var correctanswers = 0;
        for(var i=0;i<questionBank.length;i++){
            if(questionBank[i].ans == ans[i]){
                correctanswers +=1;
            }
        }
        displayResult((correctanswers/questionBank.length)*100)
    }

    function displayResult(result){
        document.querySelector("#frame1").remove();
        document.querySelector("#frame2").style.visibility = "visible";

        document.querySelector("#result").innerHTML = result +"%";
    }

})();