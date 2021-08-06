import { Component, OnInit } from '@angular/core';
import { listenerCount } from 'process';
import { Students } from '../student-list';

@Component({
  selector: 'app-welcome-app',
  templateUrl: './welcome-app.component.html',
  styleUrls: ['./welcome-app.component.css'],
})
export class WelcomeAppComponent implements OnInit {
  students = Students;
  constructor() {}

  ngOnInit(): void {}
}
