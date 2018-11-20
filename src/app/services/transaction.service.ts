import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../model/transaction';

@Injectable()
export class TransactionService {
  baseURL = 'http://localhost:8081/transaction-portal';
  constructor(private _http: HttpClient) { }

  getTransactions() {
    return this._http.get<Transaction[]>(this.baseURL + '/all');
  }

  addTransaction(transaction: Transaction) {
    return this._http.post(this.baseURL + '/add', transaction);
  }

}

