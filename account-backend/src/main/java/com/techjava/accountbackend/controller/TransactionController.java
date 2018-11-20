package com.techjava.accountbackend.controller;

import com.techjava.accountbackend.model.Account;
import com.techjava.accountbackend.model.Transaction;
import com.techjava.accountbackend.data.TransactionData;
import com.techjava.accountbackend.service.AccountService;
import com.techjava.accountbackend.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Date;
import java.util.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/transaction-portal")
public class TransactionController {

    @Autowired
    private AccountService accountService;

    @Autowired
    private TransactionService transactionService;


    @GetMapping("/all")
    public List<TransactionData> getAllTransactions(){

        List<Transaction> transactions = transactionService.getAllTransactions();
        List<Account> accounts = accountService.getAllAccounts();
        List<TransactionData> transData = new ArrayList<TransactionData>();

        transactions.parallelStream().forEach(trn -> {
            TransactionData trnData = new TransactionData();
            trnData.setTransactionId(trn.transactionId);
            trnData.setAmount(trn.amount);
            trnData.setFromEmail(accounts.stream().filter(x -> x.accountId == trn.fromId)
                    .map(obj -> obj.email).findFirst().get());
            trnData.setToEmail(accounts.stream().filter(x -> x.accountId == trn.toId)
                    .map(obj -> obj.email).findFirst().get());
            trnData.setCreationDate(trn.createDate);
            trnData.setLastUpdatedDate(trn.modifyDate);
            transData.add(trnData);
        });

        return transData;
    }

    @PostMapping("/add")
    public Transaction addTransaction(@RequestBody Transaction transaction) {
        return transactionService.addTransaction(transaction);
    }

}
