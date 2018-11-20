import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../model/account';

@Injectable()
export class AccountService {

  baseURL = 'http://localhost:8081/account-portal';

  constructor(private _http: HttpClient) { }

  getAccounts() {
    return this._http.get<Account[]>(this.baseURL + '/all');
  }

  getAccountById(accountId: number) {
    return this._http.get<Account>(this.baseURL + '/id/' + accountId);
  }

  addAccount(account: Account) {
    return this._http.post(this.baseURL + '/add', account);
  }

  updateAccount(account: Account) {
    return this._http.put(this.baseURL + '/update/' + account.accountId, account);
  }

  deleteAccount(accountId: number) {
    return this._http.delete(this.baseURL + '/delete/' + accountId);
  }
}
