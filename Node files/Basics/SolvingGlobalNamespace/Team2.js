var Teams = Teams || {};
Teams.team2 = Teams.team2 || {};

Teams.team2.Student = function(fname,mname,lname,rollno){
    fname, mname, lname, rollno;

    this.getDetails = function() {
        return fname + " " + mname + " " + lname + " " + rollno;
    }
    return this;
}