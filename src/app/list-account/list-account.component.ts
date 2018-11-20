import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { Account } from '../model/account';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css']
})
export class ListAccountComponent implements OnInit {

  accounts: Account[];
  isEdit: boolean = false;
  childData: Account;
  constructor(private router: Router, private accountService: AccountService,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.accountService.getAccounts().subscribe(res => {
      this.accounts =  res;
    });
    this.authenticationService.loginCredentials.subscribe(val => {
      const x = val;
    })
  }

  deleteAccount(account: Account): void {
    this.accountService.deleteAccount(account.accountId).subscribe(res => {
      this.accounts = this.accounts.filter(acc => acc !== account);
    });
  }

  editAccount(account: Account): void {
    this.childData= account;
    this.isEdit=true;
  }

  addAccount(): void {
    this.router.navigate(['add-account']);
  }
  
  closeEdit() {
    this.isEdit = false;
    this.ngOnInit();
  }

}
