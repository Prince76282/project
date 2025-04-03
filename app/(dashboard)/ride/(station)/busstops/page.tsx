"use client";

import { useState, useEffect } from "react";

const BusStops = () => {
  const [busStops, setBusStops] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API fetch (replace with actual API call)
    setTimeout(() => {
      setBusStops([
        {
          id: 1,
          name: "Downtown Stop",
          location: "Main St & 5th Ave",
          routes: ["A1", "B2"],
          arrival: "10:15 AM",
          departure: "10:30 AM",
          image: "/images/busstop1.jpg",
        },
        {
          id: 2,
          name: "Central Station",
          location: "7th Ave & Pine St",
          routes: ["C3", "D4"],
          arrival: "10:45 AM",
          departure: "11:00 AM",
          image: "/images/busstop2.jpg",
        },
        {
          id: 3,
          name: "West End",
          location: "Elm St & 3rd Ave",
          routes: ["E5", "F6"],
          arrival: "11:15 AM",
          departure: "11:30 AM",
          image: "/images/busstop3.jpg",
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-[url('/images/bus-bg.jpg')] bg-cover bg-center p-8">
      <h1 className="text-4xl font-extrabold text-center text-black mb-8 drop-shadow-lg">
        🚏 Bus Stops
      </h1>
      {loading ? (
        <p className="text-center text-gray-200 text-lg animate-pulse">
          Loading bus stops...
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {busStops.map((stop) => (
            <div
              key={stop.id}
              className="bg-white bg-opacity-90 shadow-xl rounded-2xl p-6 border-l-8 border-blue-600 hover:shadow-2xl transition transform hover:scale-105 flex space-x-4 items-center"
            >
              <img
                src={stop.image}
                alt={stop.name}
                className="w-24 h-24 object-cover rounded-xl shadow-md"
              />
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {stop.name}
                </h2>
                <p className="text-gray-600">📍 {stop.location}</p>
                <p className="text-gray-600">
                  🚌 Routes:{" "}
                  <span className="font-semibold">
                    {stop.routes.join(", ")}
                  </span>
                </p>
                <p className="text-green-600 font-bold">
                  ⏳ Arrival: {stop.arrival}
                </p>
                <p className="text-red-600 font-bold">
                  ⏳ Departure: {stop.departure}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BusStops;
