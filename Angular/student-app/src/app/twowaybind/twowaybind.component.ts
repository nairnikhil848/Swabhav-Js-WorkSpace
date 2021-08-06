import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybind',
  templateUrl: './twowaybind.component.html',
  styleUrls: ['./twowaybind.component.css'],
})
export class TwowaybindComponent implements OnInit {
  firstName: string;
  lastName: string;
  constructor() {
    this.firstName = 'abc';
    this.lastName = 'pqr';
  }
  updateFirstName(n: string): void {
    this.firstName = n;
  }

  ngOnInit(): void {}
}
