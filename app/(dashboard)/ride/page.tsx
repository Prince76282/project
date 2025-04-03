"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const topCategories = [
  {
    name: "Rent Vehicle",
    path: "/ride/rentvehicle",
    icon: "https://cdn-icons-png.flaticon.com/512/177/177888.png",
  },
  {
    name: "Bus Stops",
    path: "/ride/busstops",
    icon: "https://img.icons8.com/emoji/48/bus-emoji.png",
  },
  {
    name: "Contact Number",
    path: "/ride/contact",
    icon: "https://cdn-icons-png.flaticon.com/512/126/126509.png",
  },
  {
    name: "Wash Stations",
    path: "/ride/washstations",
    icon: "https://i.pinimg.com/736x/3e/e2/d0/3ee2d09be1740dc0a9b85853ff451f53.jpg",
  },
];

const rideOptions = [
  {
    id: "1",
    name: "Car Rental",
    category: "Rental",
    image: "https://source.unsplash.com/400x300/?car,rental",
    originalPrice: 50.99,
    price: 40.99,
    rating: 4.8,
    location: "New York, NY",
    provider: "NYC Car Rentals",
    offer: true,
  },
  {
    id: "2",
    name: "Bike Rental",
    category: "Rental",
    image: "https://source.unsplash.com/400x300/?bike,rental",
    originalPrice: 20.99,
    price: 15.99,
    rating: 4.6,
    location: "Los Angeles, CA",
    provider: "LA Bike Hub",
    offer: true,
  },
];

export default function RidePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const filteredRides = rideOptions.filter((ride) =>
    ride.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 sm:p-6 max-w-7xl">
      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <Input
          type="text"
          placeholder="🔍 Search rides..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-xl p-3 border rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        />
      </div>

      {/* Categories with Icons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {topCategories.map((category) => (
          <button
            key={category.name}
            className="flex flex-col items-center space-y-2 p-3 rounded-lg bg-gray-100 text-gray-800 font-medium hover:bg-gray-200 shadow-md transition-all"
            onClick={() => router.push(category.path)}
          >
            <img
              src={category.icon}
              alt={category.name}
              className="w-10 h-10"
            />
            <span className="text-sm text-center">{category.name}</span>
          </button>
        ))}
      </div>

      {/* Ride Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRides.length > 0 ? (
          filteredRides.map((ride) => {
            const discount = Math.round(
              ((ride.originalPrice - ride.price) / ride.originalPrice) * 100
            );

            return (
              <Card
                key={ride.id}
                className="relative overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300"
              >
                {/* Discount Badge */}
                {ride.offer && (
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    -{discount}% OFF
                  </span>
                )}

                {/* Floating Rating */}
                <span className="absolute top-3 right-3 bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded-full">
                  ⭐ {ride.rating}
                </span>

                {/* Image */}
                <CardHeader className="p-0">
                  <img
                    src={ride.image}
                    alt={ride.name}
                    className="w-full h-48 object-cover rounded-t-2xl"
                  />
                </CardHeader>

                {/* Details */}
                <CardContent className="flex flex-col items-center p-5">
                  <CardTitle className="text-lg font-bold text-gray-800 mb-2">
                    {ride.name}
                  </CardTitle>

                  {/* Price Section */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-gray-500 line-through text-sm">
                      ${ride.originalPrice.toFixed(2)}
                    </span>
                    <span className="text-green-600 font-bold text-lg">
                      ${ride.price.toFixed(2)}
                    </span>
                  </div>

                  {/* Provider & Location */}
                  <p className="text-gray-600 text-sm">🚗 {ride.provider}</p>
                  <p className="text-gray-500 text-xs mb-4">
                    📍 {ride.location}
                  </p>
                </CardContent>
              </Card>
            );
          })
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No ride options available.
          </p>
        )}
      </div>
    </div>
  );
}
