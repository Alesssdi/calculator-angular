import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-subtract-button-component',
  templateUrl: './subtract-button-component.component.html',
  styleUrl: './subtract-button-component.component.scss'
})
export class SubtractButtonComponentComponent {
  @Output() buttonClick = new EventEmitter();

  addToDisplay(char:string){
    this.buttonClick.emit(char);
  }
}
