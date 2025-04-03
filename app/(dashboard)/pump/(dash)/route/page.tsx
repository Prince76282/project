"use client";

import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaGasPump,
  FaRoute,
  FaClock,
  FaCar,
  FaMoneyBillWave,
  FaLocationArrow,
} from "react-icons/fa";

const RouteOptimization = () => {
  const [start, setStart] = useState("");
  const [destination, setDestination] = useState("");
  const [optimizedRoute, setOptimizedRoute] = useState<string | null>(null);
  const [fuelCost, setFuelCost] = useState<string | null>(null);
  const [estimatedTime, setEstimatedTime] = useState<string | null>(null);
  const [fuelType, setFuelType] = useState<"petrol" | "diesel" | "cng">(
    "petrol"
  );

  const handleOptimizeRoute = () => {
    if (!start || !destination) {
      alert("Please enter both start and destination.");
      return;
    }

    // Mocked response for optimized route, fuel cost, and estimated time
    setOptimizedRoute(`Fastest route from ${start} to ${destination}`);
    setFuelCost(
      fuelType === "petrol"
        ? "$15.00 estimated fuel cost"
        : fuelType === "diesel"
        ? "$12.50 estimated fuel cost"
        : "$10.00 estimated fuel cost"
    );
    setEstimatedTime("Estimated travel time: 35 minutes");
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 md:p-12 flex flex-col items-center">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center flex items-center gap-2">
        <FaRoute className="text-purple-600 text-3xl sm:text-4xl animate-pulse" />
        Smart Route Optimization
      </h2>

      <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md w-full max-w-lg">
        {/* Start Location */}
        <label className="block text-gray-700 font-semibold flex items-center gap-2">
          <FaMapMarkerAlt className="text-red-500" />
          Start Location
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg mt-1 mb-3"
            placeholder="Enter start location"
            value={start}
            onChange={(e) => setStart(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white p-2 sm:p-3 rounded-lg shadow-md hover:bg-blue-600 transition"
            title="Use current location"
          >
            <FaLocationArrow />
          </button>
        </div>

        {/* Destination */}
        <label className="block text-gray-700 font-semibold flex items-center gap-2">
          <FaMapMarkerAlt className="text-green-500" />
          Destination
        </label>
        <input
          type="text"
          className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg mt-1 mb-3"
          placeholder="Enter destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />

        {/* Fuel Type Selector */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold flex items-center gap-2">
            <FaGasPump className="text-orange-500" />
            Select Fuel Type
          </label>
          <div className="flex flex-wrap gap-3 mt-2">
            {["petrol", "diesel", "cng"].map((type) => (
              <button
                key={type}
                className={`px-3 sm:px-4 py-2 rounded-full font-semibold text-sm sm:text-lg transition shadow-md ${
                  fuelType === type
                    ? "bg-green-600 text-white shadow-lg"
                    : "bg-gray-200 text-gray-800 border border-gray-300"
                }`}
                onClick={() => setFuelType(type as "petrol" | "diesel" | "cng")}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Optimize Button */}
        <button
          onClick={handleOptimizeRoute}
          className="bg-purple-600 text-white w-full py-2 sm:py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
        >
          Optimize Route
        </button>

        {/* Results Section */}
        {optimizedRoute && (
          <div className="mt-5 p-4 bg-gray-200 rounded-lg shadow-md">
            <p className="text-gray-800 font-semibold flex items-center gap-2">
              <FaRoute className="text-blue-500" />
              {optimizedRoute}
            </p>
            <p className="text-green-600 font-bold mt-2 flex items-center gap-2">
              <FaMoneyBillWave className="text-yellow-500" />
              {fuelCost}
            </p>
            <p className="text-blue-600 font-semibold mt-2 flex items-center gap-2">
              <FaClock className="text-purple-500" />
              {estimatedTime}
            </p>
            <p className="text-gray-600 font-medium mt-2 flex items-center gap-2">
              <FaCar className="text-gray-500" />
              Route optimized for minimum fuel consumption
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RouteOptimization;
