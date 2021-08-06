import Student from './Student.mjs';
import StudentAnalyzer from './StudentAnalyzer.mjs';


const studentlist = []

studentlist.push(new Student('Nikhil',8));
studentlist.push(new Student('Alex',7.5));
studentlist.push(new Student('Stroll',10));
studentlist.push(new Student('Max',9.4));
studentlist.push(new Student('Ham',8.6));

var analyzer = new StudentAnalyzer(studentlist);

console.log();

console.log("Count of The Student is " + analyzer.getCount());
console.log("Sum of the CGPA is :"+ analyzer.getSumCgpa());
console.log("Average of CGPA is :" + analyzer.getAvgCgpa());
console.log("Min of the CGPA is :" + analyzer.getMinCgpa());
console.log("Max of the CGPA is :" + analyzer.getMaxCgpa());


