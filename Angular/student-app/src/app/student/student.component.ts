import { Component, OnInit } from '@angular/core';
import { IStudent } from './IStudent';

@Component({
  selector: 'sw-student',
  templateUrl: './student.component.html',
})
export class StudentComponent implements OnInit {
  student: IStudent;
  students?: IStudent[];
  imgmaxWidth: number;
  imgmaxHeight: number;
  constructor() {
    this.imgmaxWidth = 100;
    this.imgmaxHeight = 100;

    this.student = {
      rollno: 101,
      name: 'nikhil',
      cgpa: 8,
      picture: 'assets/1.jpg',
    };
  }

  load(): void {
    console.log('here');
    this.students = [
      { rollno: 101, name: 'studnet1', cgpa: 5, picture: 'e' },
      { rollno: 101, name: 'student2', cgpa: 2, picture: 'e' },
    ];
    console.log(this.students);
  }
  cgpaToColor(cgpa: number): String {
    if (cgpa > 7) {
      return 'green';
    }
    if (cgpa > 4) {
      return 'yellow';
    }
    return 'red';
  }

  ngOnInit(): void {}
}
