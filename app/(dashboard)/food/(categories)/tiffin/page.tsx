"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { MapPin, Phone, Utensils } from "lucide-react";

const tiffins = [
  {
    id: "1",
    name: "Vegetarian Tiffin",
    description: "Healthy and delicious vegetarian meal.",
    image: "https://example.com/veg-tiffin.jpg",
    price: 5.99,
    area: "Downtown, City Center",
    contact: "+123 456 7890",
    foodItems: "Rice, Dal, Roti, Sabzi, Salad",
  },
  {
    id: "2",
    name: "Non-Veg Tiffin",
    description: "Includes chicken or egg curry with rice and sides.",
    image: "https://example.com/nonveg-tiffin.jpg",
    price: 7.99,
    area: "West Side, Suburbs",
    contact: "+987 654 3210",
    foodItems: "Rice, Chicken Curry, Roti, Dal, Salad",
  },
  {
    id: "3",
    name: "Special Tiffin",
    description: "A complete meal with multiple dishes.",
    image: "https://example.com/special-tiffin.jpg",
    price: 9.99,
    area: "East Town, Near Park",
    contact: "+112 233 4455",
    foodItems: "Biryani, Raita, Roti, Dal, Dessert",
  },
];

export default function TiffinsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTiffins = tiffins.filter((tiffin) =>
    tiffin.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <Input
          type="text"
          placeholder="Search tiffins..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        />
      </div>

      {/* Tiffin Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredTiffins.length > 0 ? (
          filteredTiffins.map((tiffin) => (
            <Card
              key={tiffin.id}
              className="cursor-pointer hover:shadow-2xl transition-transform transform hover:-translate-y-2 rounded-2xl overflow-hidden bg-white shadow-lg duration-300"
            >
              <CardHeader className="relative">
                <img
                  src={tiffin.image}
                  alt={tiffin.name}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  Best Seller
                </span>
              </CardHeader>

              <CardContent className="flex flex-col items-center p-5 text-center">
                <CardTitle className="text-xl font-bold text-gray-800 mb-2">
                  {tiffin.name}
                </CardTitle>
                <p className="text-gray-600 mb-2">{tiffin.description}</p>
                <p className="text-gray-700 font-semibold text-lg mb-2">
                  ${tiffin.price.toFixed(2)}
                </p>

                {/* Additional Details */}
                <div className="text-sm text-gray-500 flex flex-col gap-2 items-center">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" /> {tiffin.area}
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-green-500" />{" "}
                    {tiffin.contact}
                  </p>
                  <p className="flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-yellow-500" />{" "}
                    {tiffin.foodItems}
                  </p>
                </div>

              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No tiffins available.
          </p>
        )}
      </div>
    </div>
  );
}
