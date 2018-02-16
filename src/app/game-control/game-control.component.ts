import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  private gameCounter: number = 0;
  eventEmitIntervalId;

  @Output()
  gameStarted = new EventEmitter<{counter: number}>();

  constructor() { }

  ngOnInit() {

  }

  onGameStop() {
    if (this.eventEmitIntervalId) {
      clearInterval(this.eventEmitIntervalId);
    }
  }

  onGameStart() {
    this.eventEmitIntervalId = setInterval(() => {
      let counter = this.gameCounter+=1;
      this.gameStarted.emit({
        counter
      });
      console.log('Emmitted event `counter`');
    }, 1000);
  }

}
