package com.techjava.accountbackend.controller;

import com.techjava.accountbackend.model.Account;
import com.techjava.accountbackend.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/account-portal")
public class AccountController {

    @Autowired
    private AccountService accountService;


    @GetMapping("/all")
    public List<Account> getAllAccounts(){
        return accountService.getAllActiveAccounts();
    }

    @PostMapping("/add")
    public Account addAccount(@RequestBody Account account) {
        return accountService.addAccount(account);
    }

    @PutMapping("/update/{accountId}")
    public Account updateAccount(@RequestBody Account account, @PathVariable int accountId) {
        Account ac = accountService.getAccountById(accountId);
        ac.setAccountName(account.getAccountName());
        ac.setBankName(account.getBankName());
        ac.setEmail(account.getEmail());
        return accountService.updateAccountById(ac);
    }

    @GetMapping("/id/{accountId}")
    public Account getAccountById(@PathVariable int accountId) {
        return accountService.getAccountById(accountId);
    }

    @DeleteMapping("/delete/{accountId}")
    public Account updateAccount(@PathVariable int accountId) {
        Account ac = accountService.getAccountById(accountId);
        ac.setDeleted(true);
        return accountService.updateAccountById(ac);
    }
    //public void deleteByAccountId(@PathVariable int accountId) {
    //    accountService.deleteAccountById(accountId);
    //}

}
