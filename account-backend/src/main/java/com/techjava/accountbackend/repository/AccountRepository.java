package com.techjava.accountbackend.repository;

import com.techjava.accountbackend.model.Account;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface AccountRepository extends CrudRepository<Account, Integer> {
    @Query( "select o from Account o where o.isDeleted = false" )
    List<Account> findAllActive();
}

