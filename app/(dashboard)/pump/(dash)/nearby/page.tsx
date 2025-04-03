"use client";

import React, { useState, useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaGasPump,
  FaTimesCircle,
  FaStar,
  FaSearch,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";

interface FuelStation {
  id: number;
  name: string;
  address: string;
  fuelAvailable: boolean;
  distance: string;
  rating: number;
  prices: {
    petrol: { price: string; trend: "up" | "down" | "stable" };
    diesel: { price: string; trend: "up" | "down" | "stable" };
    cng: { price: string; trend: "up" | "down" | "stable" };
  };
}

const NearbyFuelStations = () => {
  const [stations, setStations] = useState<FuelStation[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setStations([
        {
          id: 1,
          name: "Shell Station",
          address: "123 Main St, City",
          fuelAvailable: true,
          distance: "2.3 km",
          rating: 4.5,
          prices: {
            petrol: { price: "$1.20/L", trend: "up" },
            diesel: { price: "$1.10/L", trend: "stable" },
            cng: { price: "$0.85/L", trend: "down" },
          },
        },
        {
          id: 2,
          name: "BP Fuel",
          address: "456 Oak St, City",
          fuelAvailable: false,
          distance: "3.1 km",
          rating: 4.2,
          prices: {
            petrol: { price: "-", trend: "stable" },
            diesel: { price: "-", trend: "stable" },
            cng: { price: "-", trend: "stable" },
          },
        },
        {
          id: 3,
          name: "Chevron Express",
          address: "789 Pine St, City",
          fuelAvailable: true,
          distance: "4.5 km",
          rating: 4.8,
          prices: {
            petrol: { price: "$1.18/L", trend: "down" },
            diesel: { price: "$1.08/L", trend: "up" },
            cng: { price: "$0.82/L", trend: "down" },
          },
        },
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  const filteredStations = stations.filter((station) =>
    station.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <FaGasPump className="text-green-600" /> Nearby Fuel Stations
          </h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search station..."
              className="border border-gray-300 rounded-lg p-2 pl-10 w-64 focus:ring-2 focus:ring-green-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="absolute top-3 left-3 text-gray-400" />
          </div>
        </div>

        {loading ? (
          <p className="text-center text-gray-600">Loading fuel stations...</p>
        ) : (
          <div className="space-y-6">
            {filteredStations.map((station) => (
              <div
                key={station.id}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col md:flex-row justify-between items-center border-l-8 border-green-500"
              >
                <div className="w-full md:w-2/3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {station.name}
                  </h3>
                  <p className="text-gray-600">{station.address}</p>
                  <p className="text-gray-500 text-sm">📍 {station.distance}</p>
                  <p
                    className={`mt-2 font-semibold ${
                      station.fuelAvailable ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {station.fuelAvailable
                      ? "✅ Fuel Available"
                      : "❌ Out of Stock"}
                  </p>
                  <div className="flex items-center mt-2  ">
                    <span className="text-yellow-500 text-lg flex">
                      {Array(Math.round(station.rating))
                        .fill(0)
                        .map((_, i) => (
                          <FaStar key={i} />
                        ))}
                    </span>
                    <span className="ml-2 text-gray-600">
                      {station.rating.toFixed(1)}
                    </span>
                  </div>
                </div>

                <div className="w-full md:w-1/3">
                  <table className="text-sm text-gray-700 border border-gray-300 rounded-lg overflow-hidden w-full">
                    <thead className="bg-gray-200">
                      <tr>
                        <th className="px-4 py-2">Fuel Type</th>
                        <th className="px-4 py-2">Price (L)</th>
                        <th className="px-4 py-2">Trend</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(station.prices).map(([fuel, data]) => (
                        <tr key={fuel} className="border-b">
                          <td className="px-4 py-2 capitalize">{fuel}</td>
                          <td className="px-4 py-2">{data.price}</td>
                          <td className="px-4 py-2">
                            {data.trend === "up" ? (
                              <FaArrowUp className="text-red-500" />
                            ) : data.trend === "down" ? (
                              <FaArrowDown className="text-green-500" />
                            ) : (
                              "➖"
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <div className="mt-4 flex justify-center">
                    {station.fuelAvailable ? (
                      <FaMapMarkerAlt className="text-blue-500 text-3xl cursor-pointer hover:text-blue-700 transition" />
                    ) : (
                      <FaTimesCircle className="text-red-500 text-3xl" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NearbyFuelStations;
