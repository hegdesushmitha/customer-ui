import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { CustomerComponent } from './app/customer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CustomerComponent],
  template: `
    <h2>Customer Support Portal</h2>
    <app-customer></app-customer>
  `
})
export class App {}

bootstrapApplication(App, {
  providers: [provideHttpClient()]
});
