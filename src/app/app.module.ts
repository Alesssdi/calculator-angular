import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalculatorComponentComponent } from './calculator-component/calculator-component.component';
import { DisplayComponentComponent } from './display-component/display-component.component';
import { AddButtonComponentComponent } from './add-button-component/add-button-component.component';
import { SubtractButtonComponentComponent } from './subtract-button-component/subtract-button-component.component';
import { MultiplyButtonComponentComponent } from './multiply-button-component/multiply-button-component.component';
import { DivideButtonComponentComponent } from './divide-button-component/divide-button-component.component';
import { NumberButtonComponentComponent } from './number-button-component/number-button-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponentComponent,
    DisplayComponentComponent,
    AddButtonComponentComponent,
    SubtractButtonComponentComponent,
    MultiplyButtonComponentComponent,
    DivideButtonComponentComponent,
    NumberButtonComponentComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [], 
  bootstrap: [AppComponent], 
  exports: [] 
})
export class AppModule { }