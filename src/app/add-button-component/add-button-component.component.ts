import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-button-component',
  templateUrl: './add-button-component.component.html',
  styleUrl: './add-button-component.component.scss'
})
export class AddButtonComponentComponent {
  @Output() buttonClick = new EventEmitter();

  addToDisplay(char:string){
    this.buttonClick.emit(char);
  }
}
