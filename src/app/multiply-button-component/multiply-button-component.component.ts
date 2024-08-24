import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-multiply-button-component',
  templateUrl: './multiply-button-component.component.html',
  styleUrl: './multiply-button-component.component.scss'
})
export class MultiplyButtonComponentComponent {
  @Output() buttonClick = new EventEmitter();

  addToDisplay(char:string){
    this.buttonClick.emit(char);
  }
}
