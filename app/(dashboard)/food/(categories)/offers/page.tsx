"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const offerItems = [
  {
    id: "1",
    name: "Discount Pizza",
    category: "Pizza",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ9c4T8ahaLDklv9SRpAWhrYIyRZYuphaLPg&s",
    price: 7.99,
    originalPrice: 10.99,
    restaurant: "Pizza Heaven",
    location: "Downtown, NYC",
  },
  {
    id: "2",
    name: "Burger Combo",
    category: "Burger",
    image:
      "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg",
    price: 6.99,
    originalPrice: 8.99,
    restaurant: "Burger Shack",
    location: "Times Square, NYC",
  },
];

export default function OffersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) setCart(JSON.parse(storedCart));
  }, []);

  const filteredOffers = offerItems.filter((food) =>
    food.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <Input
          type="text"
          placeholder="Search offers..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        />
      </div>

      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        🔥 Special Offers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredOffers.length > 0 ? (
          filteredOffers.map((food) => {
            const discount = Math.round(
              ((food.originalPrice - food.price) / food.originalPrice) * 100
            );

            return (
              <Card
                key={food.id}
                className="relative overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300"
              >
                {/* Discount Badge */}
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  -{discount}% OFF
                </span>

                <CardHeader className="p-0">
                  <img
                    src={food.image}
                    alt={food.name}
                    className="w-full h-48 object-cover rounded-t-2xl"
                  />
                </CardHeader>

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
            No offers available.
          </p>
        )}
      </div>
    </div>
  );
}
