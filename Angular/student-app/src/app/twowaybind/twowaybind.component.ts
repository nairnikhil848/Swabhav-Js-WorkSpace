import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-twowaybind',
  templateUrl: './twowaybind.component.html',
  styleUrls: ['./twowaybind.component.css'],
})
export class TwowaybindComponent implements OnInit {
  firstName: string;
  lastName: string;
  dataServiceObservable: any;

  // dataServiceObservable:DataServiceService;

  constructor(private dataSevice: DataServiceService) {
    this.firstName = 'abc';
    this.lastName = 'pqr';
  }
  updateFirstName(n: string): void {
    this.firstName = n;
  }

  ngOnInit(): void {
    console.log('Start of OnInit');
    // console.log(this.dataSevice.getData());

    this.dataSevice.getDataAsync().subscribe({
      next(x) {
        console.log('Async Value' + x);
      },
      error(err) {
        console.error('something wrong occurred: ' + err);
      },
      complete() {
        console.log('Acync Completed');
      },
    });
    console.log('End of onInit');
  }

  NgDestory(): void {
    this.dataServiceObservable.unsubscribe();
  }
}
