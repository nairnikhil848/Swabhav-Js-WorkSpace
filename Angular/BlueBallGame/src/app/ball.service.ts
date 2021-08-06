import { Injectable } from '@angular/core';
import { Ball } from './ball';
import { Balls } from './balls';

@Injectable({
  providedIn: 'root',
})
export class BallService {
  getBalls(): Ball[] {
    return Balls;
  }

  constructor() {}
}
