"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const hospitals = [
  {
    id: "1",
    name: "City General Hospital",
    image: "https://cdn-icons-png.flaticon.com/512/2921/2921822.png",
    rating: 4.8,
    location: "New York, NY",
    services: "Emergency, Surgery, OPD, ICU",
    contact: "+1 123-456-7890",
    hours: "24/7",
    address: "123 Main Street, New York, NY 10001",
  },
  {
    id: "2",
    name: "Sunrise Medical Center",
    image: "https://cdn-icons-png.flaticon.com/512/2921/2921822.png",
    rating: 4.6,
    location: "Los Angeles, CA",
    services: "Cardiology, Neurology, Maternity, Pediatrics",
    contact: "+1 987-654-3210",
    hours: "24/7",
    address: "456 Elm Street, Los Angeles, CA 90001",
  },
];

export default function HospitalsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredHospitals = hospitals.filter((hospital) =>
    hospital.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6 bg-white min-h-screen">
      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <Input
          type="text"
          placeholder="🔍 Search hospitals..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        />
      </div>

      {/* Hospital Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredHospitals.length > 0 ? (
          filteredHospitals.map((hospital) => (
            <Card
              key={hospital.id}
              className="relative overflow-hidden rounded-xl shadow-lg bg-white hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 border border-gray-200"
            >
              {/* Floating Rating */}
              <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-md">
                ⭐ {hospital.rating}
              </span>

              {/* Image */}
              <CardHeader className="p-0">
                <img
                  src={hospital.image}
                  alt={hospital.name}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
              </CardHeader>

              {/* Details */}
              <CardContent className="flex flex-col items-center p-5">
                <CardTitle className="text-xl font-bold text-blue-800 mb-2">
                  {hospital.name}
                </CardTitle>

                {/* Services & Location */}
                <p className="text-gray-700 text-sm font-medium mb-1">
                  🏥 {hospital.services}
                </p>
                <p className="text-gray-500 text-xs mb-2">
                  📍 {hospital.location}
                </p>
                <p className="text-gray-600 text-xs font-semibold">
                  🏢 {hospital.address}
                </p>
                <p className="text-blue-600 text-sm font-semibold">
                  📞 {hospital.contact}
                </p>
                <p className="text-green-600 text-xs font-medium mt-1">
                  🕒 {hospital.hours}
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
