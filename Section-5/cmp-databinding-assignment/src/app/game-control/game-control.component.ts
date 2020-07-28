import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() onStartGameClick = new EventEmitter()
  @Output() onPauseGameClick = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  startGameClick(){
    this.onStartGameClick.emit()
  }
  pauseGameClick(){
    this.onPauseGameClick.emit()
  }

}
