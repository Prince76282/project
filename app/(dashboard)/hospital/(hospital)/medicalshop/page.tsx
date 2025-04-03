"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const medicalShops = [
  {
    id: "1",
    name: "City Pharmacy",
    image: "https://cdn-icons-png.flaticon.com/512/9638/9638472.png",
    rating: 4.7,
    location: "New York, NY",
    services: "Medicines, Health Products, Consultation",
    contact: "+1 123-456-7890",
    hours: "8 AM - 10 PM",
    address: "123 Main Street, New York, NY 10001",
    offer: true,
  },
  {
    id: "2",
    name: "MediPlus Store",
    image: "https://cdn-icons-png.flaticon.com/512/9638/9638472.png",
    rating: 4.5,
    location: "Los Angeles, CA",
    services: "OTC Drugs, Prescription Medicines, Wellness Products",
    contact: "+1 987-654-3210",
    hours: "9 AM - 9 PM",
    address: "456 Elm Street, Los Angeles, CA 90001",
    offer: false,
  },
];

export default function MedicalShopPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const filteredShops = medicalShops.filter((shop) =>
    shop.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6 bg-white min-h-screen">
      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <Input
          type="text"
          placeholder="🔍 Search medical shops..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md p-3 border rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50"
        />
      </div>

      {/* Medical Shop Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredShops.length > 0 ? (
          filteredShops.map((shop) => (
            <Card
              key={shop.id}
              className="relative overflow-hidden rounded-xl shadow-lg bg-white border border-gray-200 hover:shadow-xl transition-transform transform hover:-translate-y-2 duration-300"
            >
              {/* Floating Rating */}
              <span className="absolute top-3 right-3 bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-md">
                ⭐ {shop.rating}
              </span>

              {/* Image */}
              <CardHeader className="p-0">
                <img
                  src={shop.image}
                  alt={shop.name}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
              </CardHeader>

              {/* Details */}
              <CardContent className="flex flex-col items-center p-5">
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  {shop.name}
                </CardTitle>

                {/* Services & Location */}
                <p className="text-gray-700 text-sm font-medium mb-1">
                  💊 {shop.services}
                </p>
                <p className="text-gray-500 text-xs mb-2">📍 {shop.location}</p>
                <p className="text-gray-600 text-xs font-semibold">
                  🏢 {shop.address}
                </p>
                <p className="text-blue-600 text-sm font-semibold">
                  📞 {shop.contact}
                </p>
                <p className="text-green-600 text-xs font-medium mt-1">
                  🕒 {shop.hours}
                </p>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No medical shops available.
          </p>
        )}
      </div>
    </div>
  );
}
