"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const topCategories = [
  {
    name: "Street Food",
    path: "/food/streetfood",
    icon: "https://cdn-icons-png.flaticon.com/512/651/651107.png",
  },
  {
    name: "Tiffin",
    path: "/food/tiffin",
    icon: "https://img.icons8.com/emoji/48/bento-box-emoji.png",
  },
  {
    name: "Restaurants",
    path: "/food/restaurants",
    icon: "https://cdn-icons-png.flaticon.com/512/9638/9638472.png",
  },
  {
    name: "Offers",
    path: "/food/offers",
    icon: "https://img.icons8.com/emoji/48/money-with-wings-emoji.png",
  },
];

const foodItems = [
  {
    id: "1",
    name: "Pizza",
    category: "Fast Food",
    image: "https://source.unsplash.com/400x300/?pizza",
    originalPrice: 15.99,
    price: 10.99,
    rating: 4.5,
    location: "New York, NY",
    restaurant: "Joe's Pizza",
    offer: true,
  },
  {
    id: "2",
    name: "Burger",
    category: "Fast Food",
    image: "https://source.unsplash.com/400x300/?burger",
    originalPrice: 12.99,
    price: 8.99,
    rating: 4.7,
    location: "Los Angeles, CA",
    restaurant: "Burger Hub",
    offer: true,
  },
];

export default function FoodPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const filteredFood = foodItems.filter((food) =>
    food.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <Input
          type="text"
          placeholder="🔍 Search food..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        />
      </div>

      {/* Categories with Icons */}
      <div className="flex space-x-4 overflow-x-auto pb-4 mb-6 border-b">
        {topCategories.map((category) => (
          <button
            key={category.name}
            className="relative flex items-center space-x-3 px-5 py-2 rounded-lg bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 shadow-md transition-all whitespace-nowrap"
            onClick={() => router.push(category.path)}
          >
            <img src={category.icon} alt={category.name} className="w-6 h-6" />
            <span>{category.name}</span>
          </button>
        ))}
      </div>

      {/* Food Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredFood.length > 0 ? (
          filteredFood.map((food) => {
            const discount = Math.round(
              ((food.originalPrice - food.price) / food.originalPrice) * 100
            );

            return (
              <Card
                key={food.id}
                className="relative overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300"
              >
                {/* Discount Badge */}
                {food.offer && (
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    -{discount}% OFF
                  </span>
                )}

                {/* Floating Rating */}
                <span className="absolute top-3 right-3 bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded-full">
                  ⭐ {food.rating}
                </span>

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

                  {/* Price Section */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-gray-500 line-through text-sm">
                      ${food.originalPrice.toFixed(2)}
                    </span>
                    <span className="text-green-600 font-bold text-lg">
                      ${food.price.toFixed(2)}
                    </span>
                  </div>

                  {/* Restaurant & Location */}
                  <p className="text-gray-600 text-sm">🍽️ {food.restaurant}</p>
                  <p className="text-gray-500 text-xs mb-4">
                    📍 {food.location}
                  </p>
                </CardContent>
              </Card>
            );
          })
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No food items available.
          </p>
        )}
      </div>
    </div>
  );
}
