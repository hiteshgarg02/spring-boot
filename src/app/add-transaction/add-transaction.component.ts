import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Account } from '../model/account';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {
  
  addForm: FormGroup;
  fromList: Account[];
  toList: Account[];
  constructor(private router: Router,
    private accountService: AccountService,
    private formBuilder: FormBuilder,
    private transactionService: TransactionService) { }
  
    ngOnInit() {
      this.addForm = this.formBuilder.group({
        fromId: ['', Validators.required],
        toId: ['', Validators.required],
        amount: ['', Validators.required]
      });
      this.accountService.getAccounts().subscribe(res => {
        this.fromList = this.toList =  res;
      });
    }
  
    onCreate() {
      this.transactionService.addTransaction(this.addForm.value).subscribe(res => {
        this.router.navigate(['list-transaction']);
      });
    }
  
  }
  