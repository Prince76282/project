"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const streetFoodOffers = [
  {
    id: "1",
    name: "Pani Puri",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Pani_Puri.jpg",
    rating: 4.8,
    location: "Mumbai, India",
    price: "₹50 - ₹100",
    description:
      "Crispy puris filled with tangy, spicy water and mashed potatoes.",
    foodType: "Vegetarian",
    timing: "4 PM - 10 PM",
  },
  {
    id: "2",
    name: "Samosa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b3/Samosachutney.jpg",
    rating: 4.5,
    location: "Delhi, India",
    price: "₹15 - ₹30",
    description:
      "Deep-fried pastry stuffed with spicy mashed potatoes and peas.",
    foodType: "Vegetarian",
    timing: "4 PM - 10 PM",
  },
  {
    id: "3",
    name: "Vada Pav",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Vada_Pav.jpg",
    rating: 4.7,
    location: "Pune, India",
    price: "₹20 - ₹40",
    description: "Spicy potato fritter sandwiched in a bun with chutneys.",
    foodType: "Vegetarian",
    timing: "4 PM - 10 PM",
  },
  {
    id: "4",
    name: "Kathi Roll",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Kathi_Roll.jpg",
    rating: 4.6,
    location: "Kolkata, India",
    price: "₹80 - ₹150",
    description:
      "Flatbread roll filled with spiced meat or paneer and veggies.",
    foodType: "Both Vegetarian & Non-Vegetarian",
    timing: "4 PM - 10 PM",
  },
];

export default function StreetFoodPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFood = streetFoodOffers.filter((food) =>
    food.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <Input
          type="text"
          placeholder="Search street food..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        />
      </div>

      <h2 className="text-3xl font-bold mb-6 text-center">
        Today's Street Food Delights
      </h2>

      {/* Food Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredFood.length > 0 ? (
          filteredFood.map((food) => (
            <Card
              key={food.id}
              className="relative overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300"
            >
              {/* Image */}
              <CardHeader className="p-0">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
              </CardHeader>

              {/* Details */}
              <CardContent className="flex flex-col items-center p-5">
                <CardTitle className="text-xl font-bold text-gray-800 mb-2">
                  {food.name}
                </CardTitle>
                <p className="text-gray-500 text-sm mb-1">📍 {food.location}</p>
                <p className="text-gray-600 text-sm mb-1">💰 {food.price}</p>
                <p className="text-gray-600 text-sm mb-1">⏰ {food.timing}</p>
                <p className="text-gray-700 text-sm text-center mb-2">
                  {food.description}
                </p>

                <p className="text-yellow-400 font-bold">⭐ {food.rating}</p>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No street food items found.
          </p>
        )}
      </div>
    </div>
  );
}
