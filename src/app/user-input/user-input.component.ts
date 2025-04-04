import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  // calculate = output();  1. möglichkeit, wie man die daten weiter gibt
  @Output() calculate = new EventEmitter<{
    initialInvestment: number;
    duration: number;
    expectedReturn: number;
    annualInvestment: number;
  }>(); // 2. Möglichkeit wie man die daten weiter gibt
  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment, //mit + vor der variable, kann man es in eine number transformieren
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpectedReturn,
      annualInvestment: +this.enteredAnnualInvestment,
    });
  }
}
