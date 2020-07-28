import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  interval;
  lastNumber = 0;
  evenNumbers = [];
  oddNumbers = [];

  startGameClicked() {
    this.interval = setInterval(() => {
      this.lastNumber++;
      if(this.lastNumber % 2 === 0)
        this.evenNumbers.push(this.lastNumber);
      else
        this.oddNumbers.push(this.lastNumber);
    }, 1000);
  }
  pauseGameClicked() {
    // for (const n in this.numbers) {
      clearInterval(this.interval);
    // }
  }
}
