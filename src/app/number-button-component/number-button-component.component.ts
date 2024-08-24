import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-number-button-component',
  templateUrl: './number-button-component.component.html',
  styleUrl: './number-button-component.component.scss'
})
export class NumberButtonComponentComponent {
  @Output() buttonClick = new EventEmitter();

  addNumber(value: string) {
    this.buttonClick.emit(value);
  }

  @Output() calculateClick = new EventEmitter();

  calculate() {
    this.calculateClick.emit();
  }
}
