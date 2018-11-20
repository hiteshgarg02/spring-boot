package com.techjava.accountbackend.service.impl;

import com.techjava.accountbackend.model.Account;
import com.techjava.accountbackend.repository.AccountRepository;
import com.techjava.accountbackend.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountServiceImpl implements AccountService {

    @Autowired
    private AccountRepository accountRepository;

    @Override
    public List<Account> getAllActiveAccounts() {
        return (List<Account>) accountRepository.findAllActive();
    }

    public List<Account> getAllAccounts() {
        return (List<Account>) accountRepository.findAll();
    }


    @Override
    public Account getAccountById(int accountId) {
        return accountRepository.findOne(accountId);
    }

    @Override
    public Account addAccount(Account account) {
        return accountRepository.save(account);
    }

    @Override
    public Account updateAccountById(Account account) {
        return accountRepository.save(account);
    }

    @Override
    public void deleteAccountById(int accountId) {
        accountRepository.delete(accountId);
    }
}
