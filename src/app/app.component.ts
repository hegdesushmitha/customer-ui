import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { TransactionsComponent } from './components/transactions/transactions.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    CustomerListComponent,
    CustomerDetailsComponent,
    TransactionsComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  selectedAccount!: string;
}
