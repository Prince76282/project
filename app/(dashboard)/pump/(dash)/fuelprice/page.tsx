"use client";

import React, { useState, useEffect } from "react";
import {
  FaGasPump,
  FaArrowUp,
  FaArrowDown,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const fuelData = [
  {
    station: "Shell",
    address: "123 Main St, Cityville",
    petrol: 3.85,
    diesel: 3.45,
    cng: 2.75,
    hours: "Open 24/7",
  },
  {
    station: "BP",
    address: "456 Elm St, Townsburg",
    petrol: 3.78,
    diesel: 3.52,
    cng: 2.8,
    hours: "6 AM - 10 PM",
  },
  {
    station: "Exxon",
    address: "789 Oak St, Villageton",
    petrol: 3.9,
    diesel: 3.6,
    cng: 2.85,
    hours: "Open 24/7",
  },
  {
    station: "Chevron",
    address: "101 Maple St, Hamlet",
    petrol: 3.82,
    diesel: 3.5,
    cng: 2.78,
    hours: "5 AM - 11 PM",
  },
];

const FuelPrices = () => {
  const [selectedFuel, setSelectedFuel] = useState<"petrol" | "diesel" | "cng">(
    "petrol"
  );
  const [prices, setPrices] = useState(fuelData);

  // Simulate live price updates every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPrices((prevPrices) =>
        prevPrices.map((station) => ({
          ...station,
          petrol: (station.petrol + (Math.random() * 0.1 - 0.05)).toFixed(2),
          diesel: (station.diesel + (Math.random() * 0.1 - 0.05)).toFixed(2),
          cng: (station.cng + (Math.random() * 0.1 - 0.05)).toFixed(2),
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-green-100 to-green-50 min-h-screen p-6 md:p-12">
      {/* Title */}
      <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center flex items-center justify-center gap-2">
        <FaGasPump className="text-green-600 text-4xl animate-pulse" /> Live
        Fuel Prices
      </h2>

      {/* Fuel Type Selector */}
      <div className="flex justify-center space-x-3 mb-6">
        {["petrol", "diesel", "cng"].map((type) => (
          <button
            key={type}
            className={`px-6 py-2 rounded-full font-semibold text-lg transition shadow-md hover:scale-105 ${
              selectedFuel === type
                ? "bg-green-600 text-white shadow-lg"
                : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setSelectedFuel(type as "petrol" | "diesel" | "cng")}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Table Section */}
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden p-4 md:p-8">
        <table className="w-full border-collapse">
          <thead className="bg-green-600 text-white text-lg">
            <tr>
              <th className="py-4 px-6 text-left">Fuel Station</th>
              <th className="py-4 px-6 text-left">Price ($/L)</th>
              <th className="py-4 px-6 text-left hidden md:table-cell">
                Address
              </th>
              <th className="py-4 px-6 text-left hidden md:table-cell">
                Hours
              </th>
            </tr>
          </thead>
          <tbody>
            {prices.map((station, index) => {
              const price = parseFloat(station[selectedFuel]);
              const prevPrice = price - (Math.random() * 0.1 - 0.05); // Mock price fluctuation
              const isPriceUp = price > prevPrice;

              return (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-100 transition duration-200"
                >
                  <td className="py-4 px-6 font-semibold text-lg">
                    {station.station}
                  </td>
                  <td className="py-4 px-6 flex items-center space-x-2 text-lg font-medium">
                    <span className="font-semibold text-gray-800">
                      ${price.toFixed(2)}
                    </span>
                    {isPriceUp ? (
                      <FaArrowUp className="text-red-500 animate-bounce" />
                    ) : (
                      <FaArrowDown className="text-green-500 animate-bounce" />
                    )}
                  </td>
                  <td className="py-4 px-6 flex items-center space-x-2 hidden md:table-cell">
                    <FaMapMarkerAlt className="text-blue-500" />
                    <span>{station.address}</span>
                  </td>
                  <td className="py-4 px-6 flex items-center space-x-2 hidden md:table-cell">
                    <FaClock className="text-yellow-500" />
                    <span>{station.hours}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

   
    </div>
  );
};

export default FuelPrices;
