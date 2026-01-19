import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { CustomerDetailsComponent } from './app/components/customer-details/customer-details.component';
import { TransactionsComponent } from './app/components/transactions/transactions.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CustomerDetailsComponent,
    TransactionsComponent
  ],
  template: `
    <h2>Customer Support Portal</h2>

    <app-customer-details [accountNo]="accountNo"></app-customer-details>

    <app-transactions [accountNo]="accountNo"></app-transactions>
  `
})
export class App {
  accountNo = 'ACC123'; // mock selected customer
}

bootstrapApplication(App, {
  providers: [provideHttpClient()]
});
