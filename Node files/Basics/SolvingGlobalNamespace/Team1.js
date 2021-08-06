var Teams = Teams || {};
Teams.team1 = Teams.team1 || {};


Teams.team1.Student = function(fname,lname,rollno){
    this.fname =fname;
    this.lname = lname ;
    this.rollno = rollno;

    this.getDetails = function(){
        return fname + " " + lname + " " + rollno;
    }
    return this;
}