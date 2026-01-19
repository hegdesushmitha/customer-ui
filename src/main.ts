import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { CustomerDetailsComponent } from './app/components/customer-details/customer-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CustomerDetailsComponent],
  template: `
    <h2>Customer Support Portal</h2>
    <app-customer-details [accountNo]="'ACC123'"></app-customer-details>
  `
})
export class App {}

bootstrapApplication(App, {
  providers: [provideHttpClient()]
});
