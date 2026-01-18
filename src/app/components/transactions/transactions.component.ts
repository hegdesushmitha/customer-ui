import { Component, Input, OnChanges } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html'
})
export class TransactionsComponent implements OnChanges {

  @Input() accountNo!: string;
  transactions: any[] = [];

  constructor(private service: CustomerService) {}

  ngOnChanges() {
    if (this.accountNo) {
      this.service.getTransactions(this.accountNo)
        .subscribe(res => this.transactions = res);
    }
  }
}
