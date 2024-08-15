package com.revature.thelemonlot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.thelemonlot.model.Transaction;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Integer> {
    // You can define additional query methods here if needed
}