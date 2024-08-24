import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-component',
  templateUrl: './display-component.component.html',
  styleUrl: './display-component.component.scss'
})

export class DisplayComponentComponent {
  displayValue:string="";
}
