import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from '/../../services/customer.service';

@Component({
  selector: 'app-customer-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule 
  ],
  templateUrl: './customer-details.component.html'
})
export class CustomerDetailsComponent implements OnChanges {

  @Input() accountNo!: string;
  customerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: CustomerService
  ) {
    this.customerForm = this.fb.group({
      name: ['', Validators.required],
      accountNo: ['', Validators.required],
      status: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnChanges() {
    if (this.accountNo) {
      this.service.getCustomer(this.accountNo)
        .subscribe(res: any => {
          this.customerForm.patchValue({
            name: res.customerName,
            accountNo: res.accountNumber,
            status: res.status,
            email: 'test@email.com'
          });
        });
    }
  }
}
