import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerService } from '/./src/services/customer.service';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3 *ngIf="transactions.length">Last 10 Transactions</h3>

    <table *ngIf="transactions.length" border="1">
      <tr>
        <th>ID</th>
        <th>Amount</th>
        <th>Type</th>
      </tr>
      <tr *ngFor="let t of transactions">
        <td>{{ t.transactionId }}</td>
        <td>{{ t.amount }}</td>
        <td>{{ t.type }}</td>
      </tr>
    </table>
  `
})
export class TransactionsComponent implements OnChanges {

  @Input() accountNo!: string;
  transactions = [];

  constructor(private service: CustomerService) {}

  ngOnChanges() {
    if (this.accountNo) {
      this.service.getTransactions(this.accountNo)
        .subscribe(res => this.transactions = res);
    }
  }
}
