package com.techjava.accountbackend.service;

import com.techjava.accountbackend.model.Account;

import java.util.List;

public interface AccountService {

    List<Account> getAllAccounts();

    Account getAccountById(int accountId);

    Account addAccount(Account account);

    Account updateAccountById(Account account);

    void deleteAccountById(int accountId);

    List<Account> getAllActiveAccounts();

}
