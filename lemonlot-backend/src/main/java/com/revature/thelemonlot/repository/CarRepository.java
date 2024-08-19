package com.revature.thelemonlot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.thelemonlot.model.Car;

@Repository
public interface CarRepository extends JpaRepository<Car, Integer> {
    List<Car> findByMake(String make);
    List<Car> findByMakeAndModel(String make, String model);
}
