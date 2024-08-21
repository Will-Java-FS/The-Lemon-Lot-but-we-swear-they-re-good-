import axios from "axios";
import React, { useState, useEffect } from 'react';
import { Input } from "./ui/input";

const CarSearch = () => {
    interface Car {
        id: number;
        make: string;
        model: string;
        color: string;
        price: number;
    }

    const [cars, setCars] = useState<Car[]>([]);
    const [filteredCars, setFilteredCars] = useState<Car[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedColor, setSelectedColor] = useState<string>('');
    const [selectedModel, setSelectedModel] = useState<string>('');
    const [maxPrice, setMaxPrice] = useState<number>(0);

    const fetchCars = async (): Promise<Car[]> => {
        const response = await axios.get<Car[]>('http://localhost:8080/api/cars');
        return response.data;
    };

    useEffect(() => {
        const getCars = async () => {
            const carData = await fetchCars();
            setCars(carData);
            setFilteredCars(carData);
        };

        getCars();
    }, []);

    useEffect(() => {
        filterCars();
    }, [searchTerm, selectedColor, selectedModel, maxPrice]);

    const filterCars = () => {
        let updatedCars = cars;

        if (searchTerm) {
          updatedCars = updatedCars.filter((car) =>
            car.model.toLowerCase().includes(searchTerm.toLowerCase())
          );
        }

        if (selectedColor) {
          updatedCars = updatedCars.filter((car) =>
            car.color.toLowerCase() === selectedColor.toLowerCase()
          );
        }

        if (selectedModel) {
          updatedCars = updatedCars.filter((car) =>
            car.model.toLowerCase().includes(selectedModel.toLowerCase())
          );
        }

        if (maxPrice > 0) {
          updatedCars = updatedCars.filter((car) => car.price <= maxPrice);
        }

        setFilteredCars(updatedCars);
    };

    return (
        <div>
            <h1 className="mb-8 text-2xl font-bold">Search Cars</h1>

            <div>
                <Input type="text" 
                    placeholder="Search by make" 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                />
                <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
                    <option value="">Select Color</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="black">Black</option>
                </select>
                <Input type="text" 
                    placeholder="Search by model" 
                    value={selectedModel} 
                    onChange={(e) => setSelectedModel(e.target.value)} 
                />
                <Input type="number" 
                    placeholder="Max Price"
                    value={maxPrice === 0 ? '' : maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))} 
                />
            </div>
            <div>
                {filteredCars.length > 0 ? (
                    filteredCars.map((car) => (
                        <div key={car.id}>
                            <h2>{car.make}</h2>
                            <h2>{car.model}</h2>
                            <p>Color: {car.color}</p>
                            <p>Price: ${car.price}</p>
                        </div>
                    )) ) : (<p>No cars found</p>)}
            </div>
        </div>
    );
};

export default CarSearch;