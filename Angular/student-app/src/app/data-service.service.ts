import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  constructor() {}

  getDataAsync(): Observable<number> {
    let observable = new Observable<number>((subscriber) => {
      let n1 = Math.random() * 10;
      let n2 = Math.random() * 100;
      // subscriber.next(n1);
      // subscriber.next(n2);

      setTimeout(() => {
        console.log('in set Timeout');
        subscriber.next(n1);
        subscriber.next(n2);
        subscriber.complete();
      }, 1000);
    });
    return observable;
  }

  getData(): number {
    return Math.floor(Math.random() * 10);
  }
}
