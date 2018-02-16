import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onStartedGame(gameData: { counter: number}) {
    if (gameData.counter % 2) {
      console.log('even')
    } else {
      console.log('odd')
    }
  }
}
