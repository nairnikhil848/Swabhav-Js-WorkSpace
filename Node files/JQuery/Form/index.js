

    var service = function(){
        var student = {}

        student.getData = function(){
            return $.get('http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students');
        }

        student.PostData = function(Data){

            return $.post( 'http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students' , Data)
        
        }

        return student
    }();

$("#displaybtn").click( renderStudentList);

function renderStudentList(){
    service.getData().done(function(data){ displayStudentList(data) })
}

function displayStudentList(data){
    $("#frame2").css('visibility',"visible")
    $("#count").html(data.length);
    createheaderForTable(data[0])
    createrow(data)
}

function createheaderForTable(header){

    const table = $('#table');
    table.empty();

    var tr = document.createElement('tr');
    for(var key in header){
        $('<th>'+key+'</th>').appendTo(tr);
    }
    $(tr).appendTo(table)
    
}

function createrow(data){
    
    const table = $('#table');

    for(var i=0;i<data.length;i++){
        var tr = document.createElement('tr');
        for(var key in data[i]){
            $('<td>'+data[i][key]+'</td>').appendTo(tr);
        }
        $(tr).appendTo(table)
    }

}






$(".slider").on('input', function() {
    $("#slidervalue").html(this.value);   
})


$('#myForm').submit(function() {

    $("#indicator").css("background-color", "yellow");
    $("#loading").css('visibility',"visible")
    $("#submit").attr("disabled", true);

    var $inputs = $('#myForm :input');

    var values = {};
    $inputs.each(function() {
        if(this.id == "submit"){
            return
        }
        values[this.name] = $(this).val();
    });

    if($('#sexM').is(':checked')){
        values["isMale"] = "true";
    }
    else{
        values["isMale"] = "false";
    }
    delete values['sex']
    
    console.log(values);
    
    const myJSON = JSON.stringify(values);
    console.log(myJSON)


    service.PostData(myJSON).done(function(data){
        $("#loading").css('visibility',"hidden")
        $("#submit").attr("disabled", false);
        $("#indicator").css("background-color", "green");
        console.log("ID : " + data);
    })
    .fail(function(xhr, status, error) {
        $("#indicator").css("background-color", "red");
        $("#loading").css('visibility',"hidden")
        $("#submit").attr("disabled", false);
        console.log(status)
        console.log(error)
        console.log(xhr)
    });

    return false;

});