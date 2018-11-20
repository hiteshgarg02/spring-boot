package com.techjava.accountbackend.service;

import com.techjava.accountbackend.model.Transaction;

import java.util.List;

public interface TransactionService {

    List<Transaction> getAllTransactions();

    Transaction addTransaction(Transaction transaction);

    Transaction updateTransactionById(Transaction transaction);

    void deleteTransactionById(int transactionId);

}
