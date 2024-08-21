package com.revature.thelemonlot.model;

import java.time.LocalDate;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
@Table(name = "transactions")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "transaction_id", updatable = false)
    private int transactionId;

    @Column(name = "user_id", nullable = false)
    private int userId;

    @Column(name = "salesperson_id")
    private int salespersonId;

    @Column(name = "car_id", nullable = false)
    private int carId;

    // the the date of finalized transactions
    @Column(name = "date", nullable = false)
    private LocalDate transactionDate;

    // final price of the car
    @Column(name = "amount", nullable = false)
    private double amount;

    @Column(name = "status",  nullable = false)
    private String status;

    @Column(name = "payment_method", nullable = false)
    private String paymentMethod;

    @Column(name = "offer_amount")
    private double offerAmount;

    @Column(name = "comments", nullable = false)
    private String comments;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false, nullable = false)
    private LocalDate createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDate updatedAt;

}
