import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CustomerService {

  private readonly baseApiUrl =
    'https://customer-api-xyz-f0bsgch3e6bbcxh8.centralindia-01.azurewebsites.net';

  constructor(private http: HttpClient) {}

  getCustomer(accountNo: string) {
    return this.http.get<any>(
      `${this.baseApiUrl}/api/customers/${accountNo}`
    );
  }

  getTransactions(accountNo: string) {
    return this.http.get<any[]>(
      `${this.baseApiUrl}/api/transactions/${accountNo}`
    );
  }
}
