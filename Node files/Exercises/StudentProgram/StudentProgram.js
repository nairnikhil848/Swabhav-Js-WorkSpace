
const studentlist = []

studentlist.push(new Student('Nikhil',8));
studentlist.push(new Student('Alex',7.5));
studentlist.push(new Student('Stroll',10));
studentlist.push(new Student('Max',9.4));
studentlist.push(new Student('Ham',8.6));

avg = sum = count = min = max =0;

console.log(studentlist);


for (let i = 0; i < studentlist.length; i++) {
    currentcgpa = studentlist[i].cgpa;
    sum += currentcgpa;
    if(min == 0){
        min = currentcgpa;
    }
    if(currentcgpa<min){
        min = currentcgpa;
    }
        
    if(currentcgpa > max){
        max = currentcgpa;
    }
    
    count ++;
}

console.log("Count of The Student is " + count);
console.log("Sum of the CGPA is :"+ sum);
console.log("Average of CGPA is :" + sum/count);
console.log("Min of the CGPA is :" + min);
console.log("Max of the CGPA is :" + max);