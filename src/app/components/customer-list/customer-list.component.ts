import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html'
})
export class CustomerListComponent {

  customers = [
    { name: 'John Doe', accountNo: 'ACC123' },
    { name: 'Jane Smith', accountNo: 'ACC456' }
  ];

  @Output() accountSelected = new EventEmitter<string>();

  selectCustomer(accountNo: string) {
    this.accountSelected.emit(accountNo);
  }
}
