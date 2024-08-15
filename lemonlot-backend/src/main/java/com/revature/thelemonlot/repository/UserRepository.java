package com.revature.thelemonlot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.thelemonlot.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    
}
