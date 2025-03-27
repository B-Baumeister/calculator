import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { UserInputComponent } from './user-input/user-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, InvestmentResultsComponent, UserInputComponent],
})
export class AppComponent {
  calculateInvestmentResults(
    // 1. version mit den variablen als input. Achtung: wenn ohne {} dann ist die Anordnung der Parameter wichtig. Als Objekt kann es variabel sein, wichtig aber, ein title für die variable (hier data)
    data: {
      initialInvestment: number;
      duration: number;
      expectedReturn: number;
      annualInvestment: number;
    }
  ) {
    //Alternativ zu data: hier direkt wieder enstructuren:
    // const { initialInvestment, duration, expectedReturn, annualInvestment } =
    //   data;
    const annualData = [];
    let investmentValue = data.initialInvestment;

    for (let i = 0; i < data.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue * (data.expectedReturn / 100);
      investmentValue += interestEarnedInYear + data.annualInvestment;
      const totalInterest =
        investmentValue - data.annualInvestment * year - data.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: data.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested:
          data.initialInvestment + data.annualInvestment * year,
      });
    }

    return annualData;
  }
}
