"use client";

import { useState, useEffect } from "react";

const RentalVehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API fetch (replace with actual API call)
    setTimeout(() => {
      setVehicles([
        {
          id: 1,
          type: "Car",
          name: "Tesla Model 3",
          price: "$50/day",
          image: "/images/tesla.jpg",
          seats: 5,
          fuel: "Electric",
        },
        {
          id: 2,
          type: "Bike",
          name: "Yamaha R1",
          price: "$30/day",
          image: "/images/yamaha.jpg",
          seats: 2,
          fuel: "Petrol",
        },
        {
          id: 3,
          type: "Scooter",
          name: "Honda Activa",
          price: "$15/day",
          image: "/images/activa.jpg",
          seats: 2,
          fuel: "Petrol",
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8 drop-shadow-lg">
        🚗 Rent a Vehicle
      </h1>
      {loading ? (
        <p className="text-center text-gray-600 text-lg animate-pulse">
          Loading available vehicles...
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-gray-100 shadow-md rounded-2xl p-6 border-l-8 border-gray-400 hover:shadow-lg transition transform hover:scale-105 flex flex-col items-center"
            >
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-40 object-cover rounded-xl shadow-md mb-4"
              />
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {vehicle.name}
              </h2>
              <p className="text-gray-700">Type: {vehicle.type}</p>
              <p className="text-gray-700">Seats: {vehicle.seats}</p>
              <p className="text-gray-700">Fuel: {vehicle.fuel}</p>
              <p className="text-gray-900 font-bold">Price: {vehicle.price}</p>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RentalVehicles;
