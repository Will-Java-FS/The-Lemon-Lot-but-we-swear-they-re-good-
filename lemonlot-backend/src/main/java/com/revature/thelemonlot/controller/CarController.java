package com.revature.thelemonlot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.thelemonlot.model.Car;
import com.revature.thelemonlot.service.CarService;

@RestController
@RequestMapping("/api/cars")
public class CarController {

    @Autowired
    private CarService carService;

    // Get all Cars
    @GetMapping
    public List<Car> getAllCars() {
        return carService.getAllCars();
    }

    @GetMapping("/make/{make}")
    public List<Car> getCarsByMake(@PathVariable String make) {
        return carService.getByMake(make);
    }

    @GetMapping("/model/{model}")
    public List<Car> getCarsByModel(@PathVariable String model) {
        return carService.getByModel(model);
    }

    @GetMapping("/price/{price}")
    public List<Car> getCarsByPrice(@PathVariable double price) {
        return carService.getByPriceLessThanEqual(price);
    }

    @PostMapping
    public ResponseEntity<Car> createCar(@RequestBody Car car) {
        Car createdCar = carService.createCar(car);
        return new ResponseEntity<>(createdCar, HttpStatus.CREATED);
    }
}
