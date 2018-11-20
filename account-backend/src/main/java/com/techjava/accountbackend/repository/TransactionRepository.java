package com.techjava.accountbackend.repository;

import com.techjava.accountbackend.model.Transaction;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface TransactionRepository extends CrudRepository<Transaction, Integer> {
}
