import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionService } from '../services/transaction.service';
import { Transaction } from '../model/transaction';

@Component({
  selector: 'app-list-transaction',
  templateUrl: './list-transaction.component.html',
  styleUrls: ['./list-transaction.component.css']
})
export class ListTransactionComponent implements OnInit {

  transactions: Transaction[];
  constructor(private router: Router, private transactionService: TransactionService) { }


  ngOnInit() {
    this.transactionService.getTransactions().subscribe(data => {
      this.transactions =  data;
    });
  }
}


