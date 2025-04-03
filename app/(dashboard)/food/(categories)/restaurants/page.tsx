"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const restaurantItems = [
  {
    id: "1",
    name: "Gourmet Bistro",
    category: "Fine Dining",
    image: "https://source.unsplash.com/400x300/?restaurant",
    rating: 4.8,
    location: "Downtown, New York",
    foodTypes: ["Italian", "French", "Seafood"],
    openTime: "10:00 AM - 11:00 PM",
  },
  {
    id: "2",
    name: "Street Bites",
    category: "Casual Dining",
    image: "https://source.unsplash.com/400x300/?food",
    rating: 4.5,
    location: "Central Square, San Francisco",
    foodTypes: ["Fast Food", "Burgers", "Tacos"],
    openTime: "9:00 AM - 10:00 PM",
  },
];

export default function RestaurantsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRestaurants = restaurantItems.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <Input
          type="text"
          placeholder="Search restaurants..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        />
      </div>

      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        🍽️ Popular Restaurants
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <Card
              key={restaurant.id}
              className="relative overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300"
            >
              <CardHeader className="p-0 relative">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-t-2xl"></div>
              </CardHeader>

              <CardContent className="flex flex-col items-center p-5">
                <CardTitle className="text-xl font-bold text-gray-800 mb-2">
                  {restaurant.name}
                </CardTitle>
                <p className="text-gray-500 text-sm mb-2">
                  📍 {restaurant.location}
                </p>
                <p className="text-gray-500 text-sm mb-2">
                  🍽️ {restaurant.category}
                </p>
                <p className="text-gray-500 text-sm mb-2">
                  🍕 {restaurant.foodTypes.join(", ")}
                </p>
                <p className="text-green-600 font-semibold text-sm mb-2">
                  🕒 {restaurant.openTime}
                </p>
                <p className="text-yellow-500 font-semibold text-lg">
                  ⭐ {restaurant.rating}
                </p>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No restaurants found.
          </p>
        )}
      </div>
    </div>
  );
}
