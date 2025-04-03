"use client";

import { useState, useEffect } from "react";

const WashStations = () => {
  const [stations, setStations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API fetch (replace with actual API call)
    setTimeout(() => {
      setStations([
        {
          id: 1,
          name: "Sparkle Auto Wash",
          location: "Main St & 5th Ave",
          services: ["Exterior Wash", "Interior Cleaning", "Waxing"],
          price: "$20 - $50",
          image: "/images/wash1.jpg",
        },
        {
          id: 2,
          name: "Shiny Wheels Car Wash",
          location: "7th Ave & Pine St",
          services: ["Quick Wash", "Detailing", "Ceramic Coating"],
          price: "$25 - $60",
          image: "/images/wash2.jpg",
        },
        {
          id: 3,
          name: "Eco Wash Center",
          location: "Elm St & 3rd Ave",
          services: ["Waterless Wash", "Vacuuming", "Tire Shine"],
          price: "$15 - $40",
          image: "/images/wash3.jpg",
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8 drop-shadow-lg">
        🧼 Wash Stations
      </h1>
      {loading ? (
        <p className="text-center text-gray-600 text-lg animate-pulse">
          Loading wash stations...
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stations.map((station) => (
            <div
              key={station.id}
              className="bg-gray-100 shadow-md rounded-2xl p-6 border-l-8 border-gray-400 hover:shadow-lg transition transform hover:scale-105 flex flex-col items-center"
            >
              <img
                src={station.image}
                alt={station.name}
                className="w-full h-40 object-cover rounded-xl shadow-md mb-4"
              />
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {station.name}
              </h2>
              <p className="text-gray-700">📍 {station.location}</p>
              <p className="text-gray-700">
                🛠️ Services: {station.services.join(", ")}
              </p>
              <p className="text-gray-900 font-bold">
                💰 Price Range: {station.price}
              </p>
              <button className="mt-4 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-900 transition">
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WashStations;
