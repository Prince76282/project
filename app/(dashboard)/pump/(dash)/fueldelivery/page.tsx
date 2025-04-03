"use client";

import React, { useState } from "react";
import {  FaTruckMoving } from "react-icons/fa";

const FuelDelivery = () => {
  const [location, setLocation] = useState("");
  const [fuelType, setFuelType] = useState("Petrol");
  const [quantity, setQuantity] = useState("10L");
  const [confirmation, setConfirmation] = useState<string | null>(null);

  const handleOrder = () => {
    if (!location) {
      alert("Please enter your location.");
      return;
    }

    // Mock API response (Replace with real backend call)
    setConfirmation(
      `Your ${quantity} of ${fuelType} will be delivered to ${location} shortly.`
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6 md:p-12 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center flex items-center gap-2">
        <FaTruckMoving className="text-red-600" /> Fuel Delivery Service
      </h2>

      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-lg">
        <label className="block text-gray-700 font-semibold">
          Delivery Location
        </label>
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg mt-1 mb-4"
          placeholder="Enter your location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <label className="block text-gray-700 font-semibold">Fuel Type</label>
        <select
          className="w-full p-3 border border-gray-300 rounded-lg mt-1 mb-4"
          value={fuelType}
          onChange={(e) => setFuelType(e.target.value)}
        >
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="CNG">CNG</option>
        </select>

        <label className="block text-gray-700 font-semibold">Quantity</label>
        <select
          className="w-full p-3 border border-gray-300 rounded-lg mt-1 mb-4"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        >
          <option value="L">5 Liters</option>
          <option value="10L">10 Liters</option>
          <option value="20L">20 Liters</option>
          <option value="50L">50 Liters</option>
        </select>

        <button
          onClick={handleOrder}
          className="bg-red-600 text-white w-full py-3 rounded-lg font-semibold hover:bg-red-700 transition"
        >
          Request Fuel Delivery
        </button>

        {confirmation && (
          <div className="mt-6 p-4 bg-green-100 text-green-700 font-semibold rounded-lg">
            {confirmation}
          </div>
        )}
      </div>
    </div>
  );
};

export default FuelDelivery;
