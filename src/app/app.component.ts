import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenElements = [];
  oddElements = [];
  onStartedGame(gameData: { counter: number}) {
    if (gameData.counter % 2) {
      this.evenElements.push(gameData.counter);
    } else {
      this.oddElements.push(gameData.counter);
    }
  }
}
