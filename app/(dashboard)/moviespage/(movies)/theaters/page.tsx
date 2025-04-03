"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const movieTheaters = [
  {
    id: "1",
    name: "Cineplex Grand",
    image: "https://source.unsplash.com/400x300/?cinema",
    rating: 4.8,
    location: "New York, NY",
    services: "IMAX, 3D, Dolby Atmos",
  },
  {
    id: "2",
    name: "Movie Magic",
    image: "https://source.unsplash.com/400x300/?theater",
    rating: 4.6,
    location: "Los Angeles, CA",
    services: "Regular, VIP Seating",
  },
  {
    id: "3",
    name: "Star Cinemas",
    image: "https://source.unsplash.com/400x300/?moviehall",
    rating: 4.7,
    location: "Chicago, IL",
    services: "4DX, Recliners, Dolby Vision",
  },
];

export default function NearbyMovieTheaters() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const filteredTheaters = movieTheaters.filter((theater) =>
    theater.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <Input
          type="text"
          placeholder="🔍 Search theaters..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        />
      </div>

      {/* Movie Theater Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredTheaters.length > 0 ? (
          filteredTheaters.map((theater) => (
            <Card
              key={theater.id}
              className="relative overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300"
            >
              {/* Floating Rating */}
              <span className="absolute top-3 right-3 bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded-full">
                ⭐ {theater.rating}
              </span>

              {/* Image */}
              <CardHeader className="p-0">
                <img
                  src={theater.image}
                  alt={theater.name}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
              </CardHeader>

              {/* Details */}
              <CardContent className="flex flex-col items-center p-5">
                <CardTitle className="text-xl font-bold text-gray-800 mb-2">
                  {theater.name}
                </CardTitle>

                {/* Services & Location */}
                <p className="text-gray-600 text-sm">🎥 {theater.services}</p>
                <p className="text-gray-500 text-xs mb-4">
                  📍 {theater.location}
                </p>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No movie theaters available.
          </p>
        )}
      </div>
    </div>
  );
}
