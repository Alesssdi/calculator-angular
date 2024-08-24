import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-divide-button-component',
  templateUrl: './divide-button-component.component.html',
  styleUrl: './divide-button-component.component.scss'
})
export class DivideButtonComponentComponent {
  @Output() buttonClick = new EventEmitter();

  addToDisplay(char:string){
    this.buttonClick.emit(char);
  }
}
