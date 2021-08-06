export default class StudentAnalyzer{
    #studentList;
    constructor(studentList){
        this.#studentList = studentList;
    }
    getCount(){
        var count = 0;
        for (let i = 0; i < this.#studentList.length; i++){
            count ++;
        }
        return count;
    }
    getMinCgpa(){
        var min = Number.MAX_VALUE;
        for (let i = 0; i < this.#studentList.length; i++){
            if(this.#studentList[i].CGPA<min){
            min = this.#studentList[i].CGPA;
            }
        }
        return min;

    }

    getMaxCgpa(){
        var max = 0;
        for (let i = 0; i < this.#studentList.length; i++){
            if(this.#studentList[i].CGPA>max){
            max = this.#studentList[i].CGPA;
            }
        }
        return max;

    }
    getSumCgpa(){
        var sum = 0;
        for (let i = 0; i < this.#studentList.length; i++){
            sum += this.#studentList[i].CGPA;
            
        }
        return sum;

    }
    getAvgCgpa(){
        var avg = this.getSumCgpa()/this.getCount();
        return avg;
    }


}


