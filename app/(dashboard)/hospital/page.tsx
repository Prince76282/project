
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const topCategories = [
  {
    name: "Medical Shop",
    path: "/hospital/medicalshop",
    icon: "https://cdn-icons-png.flaticon.com/512/2977/2977890.png",
  },
 
  {
    name: "Hospital",
    path: "/hospital/hospital",
    icon: "https://cdn-icons-png.flaticon.com/512/1048/1048943.png",
  },
 
];

const hospitalItems = [
  {
    id: "1",
    name: "City Hospital",
    category: "Hospital",
    image: "https://source.unsplash.com/400x300/?hospital",
    rating: 4.8,
    location: "New York, NY",
    services: "Emergency, Surgery, OPD",
    offer: true,
  },
  {
    id: "2",
    name: "MediCare Clinic",
    category: "Clinic",
    image: "https://source.unsplash.com/400x300/?clinic",
    rating: 4.6,
    location: "Los Angeles, CA",
    services: "General Checkup, Diagnostics",
    offer: false,
  },
];

export default function HospitalPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const filteredHospitals = hospitalItems.filter((hospital) =>
    hospital.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <Input
          type="text"
          placeholder="🔍 Search hospital..."
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

      {/* Hospital Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredHospitals.length > 0 ? (
          filteredHospitals.map((hospital) => (
            <Card
              key={hospital.id}
              className="relative overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300"
            >
              {/* Floating Rating */}
              <span className="absolute top-3 right-3 bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded-full">
                ⭐ {hospital.rating}
              </span>

              {/* Image */}
              <CardHeader className="p-0">
                <img
                  src={hospital.image}
                  alt={hospital.name}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
              </CardHeader>

              {/* Details */}
              <CardContent className="flex flex-col items-center p-5">
                <CardTitle className="text-xl font-bold text-gray-800 mb-2">
                  {hospital.name}
                </CardTitle>

                {/* Services & Location */}
                <p className="text-gray-600 text-sm">🏥 {hospital.services}</p>
                <p className="text-gray-500 text-xs mb-4">
                  📍 {hospital.location}
                </p>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No hospitals available.
          </p>
        )}
      </div>
    </div>
  );
}
