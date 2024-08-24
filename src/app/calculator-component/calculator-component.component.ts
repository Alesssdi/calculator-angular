import {  Component, ViewChild } from '@angular/core';
import { DisplayComponentComponent } from '../display-component/display-component.component';

@Component({
  selector: 'app-calculator-component',
  templateUrl: './calculator-component.component.html',
  styleUrl: './calculator-component.component.scss',
})
export class CalculatorComponentComponent {
  @ViewChild(DisplayComponentComponent) display!: DisplayComponentComponent;

  displayField: string = '';
  current_num = '';
  operandStack: number[] = [];
  operatorStack: string[] = [];

  clearEntry() {
    this.display.displayValue = this.display.displayValue.slice(0, -1);
    this.current_num = this.current_num.slice(0, -1);
  }
  clear() {
    this.display.displayValue = "";
    this.display.displayValue = '';
  }

  onButtonClick(value: string) {
    if (this.display.displayValue == "ERROR") {
      this.clear();
    }
    if (value === "." && !this.current_num.includes(".")) {
      this.display.displayValue += value;
      this.current_num += value;
    } else if (/[0-9]/.test(value)) {
      this.current_num += value;
      this.display.displayValue += value;
    } else if (this.display.displayValue !== "" && '+×÷-'.includes(value)) {
      if ('+×÷-'.includes(this.display.displayValue.slice(-1))) {
        this.display.displayValue = this.display.displayValue.slice(0, -1);
      }
      this.display.displayValue += value;
      this.current_num = '';
    }

  }

  calculate() {
    if (this.display.displayValue !== "") {
      while ('+×÷-'.includes(this.display.displayValue.slice(-1))) {
        this.display.displayValue = this.display.displayValue.slice(0, -1);
      }
    }

    this.display.displayValue = this.display.displayValue.replace(/(\d)(\()/g, "$1*$2").replace(/(\))(\d)/g, "$1*$2");;
    this.display.displayValue = this.display.displayValue.replace(/÷/g, '/').replace(/×/g, '*');
    this.display.displayValue = this.display.displayValue.replace(/[^-+*/ ().\d]/g, '');
    if (this.display.displayValue != "" && this.display.displayValue != null) {
      try {
        var result = this.calculateResult(this.display.displayValue);

        if (!isFinite(result!)) {
          throw new Error;
        }
        this.display.displayValue = result!.toFixed(2).replace(/\.?0+$/, '');
      } catch (error) {
        this.display.displayValue = "ERROR";
      }
    }
  }

  private calculateResult(expression: string) {
    let array = expression.match(/(?:\d+\.\d+|\.\d+|\d+|(?<=[+\-*\/(]|^)-?\d+\.\d+|(?<=[+\-*\/(]|^)-?\d+|[+\-*\/()^])/g);

    while (array!.length > 0) {
      let t = array!.shift();
      if (!isNaN(Number(t))) {
        this.operandStack.push(parseFloat(t!));
      } else {
        while (this.operatorStack.length > 0 && this.hasHigherPrecedence(this.operatorStack[this.operatorStack.length - 1], t!)) {
          this.applyOperation();
        }
        this.operatorStack.push(t!);
      }
    }
    while (this.operatorStack.length > 0) {
      this.applyOperation();
    }

    return this.operandStack.pop();
  }

  private applyOperation() {
    let operator = this.operatorStack.pop();
    let operand2 = this.operandStack.pop();
    let operand1 = this.operandStack.pop();
    this.operandStack.push(this.performOperation(operand1!, operand2!, operator!));
  }

  private hasHigherPrecedence(op1: string, op2: string) {
    const precedence: Record<string, number> = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2
    };
    return precedence[op1] >= precedence[op2];
  }

  private performOperation(operand1: number, operand2: number, operator: string) {
    switch (operator) {
      case '+':
        return operand1 + operand2;
      case '-':
        return operand1 - operand2;
      case '*':
        return operand1 * operand2;
      case '/':
        return operand1 / operand2;
      default:
        throw new Error('Invalid operator');
    }
  }
}


