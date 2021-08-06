import { Component, OnInit } from '@angular/core';
import { Ball } from '../ball';
import { BallService } from '../ball.service';
@Component({
  selector: 'app-blueballgame',
  templateUrl: './blueballgame.component.html',
  styleUrls: ['./blueballgame.component.css'],
})
export class BlueballgameComponent implements OnInit {
  isStartbtnClicked: boolean = false;
  balls: Ball[] = [];
  blueLocation: number = Math.floor(Math.random() * 30) + 1;
  chances: number = 5;

  constructor(private ballService: BallService) {
    console.log(this.blueLocation);
  }

  startGame(): void {
    this.isStartbtnClicked = true;
    console.log(this.isStartbtnClicked);
  }
  getBalls(): void {
    this.balls = this.ballService.getBalls();
  }

  render(id: number): void {
    for (var ball of this.balls) {
      if (ball.id == id) {
        if (ball.color != 'gray') {
          return;
        }
      }
    }

    this.chances -= 1;

    if (id > this.blueLocation) {
      this.changeColor(id, 'red');
      this.checkchances();
      return;
    }

    if (id < this.blueLocation) {
      this.changeColor(id, 'green');
      this.checkchances();
      return;
    }

    this.changeColor(id, 'blue');
    setTimeout(function () {
      alert('You have Won! Sensational.');
    }, 200);
    setTimeout('location.reload()', 210);
  }

  checkchances(): void {
    if (this.chances == 0) {
      setTimeout(function () {
        alert('You have lost your horses. Game Over!');
      }, 200);
      setTimeout(function () {
        location.reload();
      }, 210);
      return;
    }
    if (this.chances == 1) {
      setTimeout(function () {
        alert('Last another chance. You Got there!');
      }, 200);
      return;
    }
  }

  changeColor(id: number, color: string): void {
    for (var ball of this.balls) {
      if (ball.id == id) {
        ball.color = color;
        return;
      }
    }
  }

  ngOnInit(): void {
    this.getBalls();
  }
}
function colors(colors: any) {
  throw new Error('Function not implemented.');
}
