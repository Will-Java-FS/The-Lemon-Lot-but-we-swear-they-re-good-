package com.revature.thelemonlot.model;

import java.time.LocalDate;

import static org.assertj.core.api.Assertions.assertThat;
import org.junit.jupiter.api.Test;

public class TransactionTest {

    @Test
    public void testTransactionGettersAndSetters() {
        // Given
        Transaction transaction = new Transaction();
        transaction.setTransactionId(1);
        transaction.setUserId(123);
        transaction.setSalespersonId(456);
        transaction.setCarId(789);
        transaction.setTransactionDate(LocalDate.now());
        transaction.setAmount(15000.00f);
        transaction.setStatus("Completed");
        transaction.setPaymentMethod("Credit Card");
        transaction.setOfferAmount(14000.00f);
        transaction.setComments("Customer is happy with the purchase.");
        transaction.setCreatedAt(LocalDate.now());
        transaction.setUpdatedAt(LocalDate.now());

        // When
        // Getters are called implicitly through assertions

        // Then
        assertThat(transaction.getTransactionId()).isEqualTo(1);
        assertThat(transaction.getUserId()).isEqualTo(123);
        assertThat(transaction.getSalespersonId()).isEqualTo(456);
        assertThat(transaction.getCarId()).isEqualTo(789);
        assertThat(transaction.getTransactionDate()).isNotNull();
        assertThat(transaction.getAmount()).isEqualTo(15000.00f);
        assertThat(transaction.getStatus()).isEqualTo("Completed");
        assertThat(transaction.getPaymentMethod()).isEqualTo("Credit Card");
        assertThat(transaction.getOfferAmount()).isEqualTo(14000.00f);
        assertThat(transaction.getComments()).isEqualTo("Customer is happy with the purchase.");
        assertThat(transaction.getCreatedAt()).isNotNull();
        assertThat(transaction.getUpdatedAt()).isNotNull();
    }

    @Test
    public void testTransactionAllArgsConstructor() {
        // Given
        Transaction transaction = new Transaction(1, 123, 456, 789, LocalDate.now(),
                15000.00f, "Completed", "Credit Card", 14000.00f,
                "Customer is happy with the purchase.", LocalDate.now(), LocalDate.now());

        // Then
        assertThat(transaction.getTransactionId()).isEqualTo(1);
        assertThat(transaction.getUserId()).isEqualTo(123);
        assertThat(transaction.getSalespersonId()).isEqualTo(456);
        assertThat(transaction.getCarId()).isEqualTo(789);
        assertThat(transaction.getTransactionDate()).isNotNull();
        assertThat(transaction.getAmount()).isEqualTo(15000.00f);
        assertThat(transaction.getStatus()).isEqualTo("Completed");
        assertThat(transaction.getPaymentMethod()).isEqualTo("Credit Card");
        assertThat(transaction.getOfferAmount()).isEqualTo(14000.00f);
        assertThat(transaction.getComments()).isEqualTo("Customer is happy with the purchase.");
        assertThat(transaction.getCreatedAt()).isNotNull();
        assertThat(transaction.getUpdatedAt()).isNotNull();
    }
}
