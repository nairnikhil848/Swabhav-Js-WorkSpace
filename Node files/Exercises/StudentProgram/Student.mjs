export default class Student{
    #name;
    #cgpa;
    constructor(name,cgpa){
        this.#name =name;
        this.#cgpa = cgpa;
    }

    get Name(){
        return this.#name;
    }
    get CGPA(){
        return this.#cgpa
    }
}