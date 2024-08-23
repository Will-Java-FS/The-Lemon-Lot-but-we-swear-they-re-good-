package com.revature.thelemonlot.service;


import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.revature.thelemonlot.model.Transaction;
import com.revature.thelemonlot.repository.TransactionRepository;

@Service
public class TransactionService {

    private final TransactionRepository transactionRepository;
    public TransactionService(TransactionRepository transactionRepository)
    {
        this.transactionRepository = transactionRepository;
    }

    public Transaction findTransactionById(int transactionId)
    {
        Optional<Transaction> optionalTransactions = transactionRepository.findById(transactionId);
        if(optionalTransactions.isPresent())
        {
            return optionalTransactions.get();
        }
        return null;
    }

    public List<Transaction> findAllTransaction()
    {
        return transactionRepository.findAll();
    }

    public Transaction createTransaction(Transaction transaction) {
        return transactionRepository.save(transaction);
    }
}
