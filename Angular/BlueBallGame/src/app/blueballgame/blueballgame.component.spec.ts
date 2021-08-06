import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueballgameComponent } from './blueballgame.component';

describe('BlueballgameComponent', () => {
  let component: BlueballgameComponent;
  let fixture: ComponentFixture<BlueballgameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlueballgameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueballgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
