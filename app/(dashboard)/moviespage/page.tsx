"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const topCategories = [
  {
    name: "Movie Theaters",
    path: "/moviespage/theaters",
    icon: "https://cdn-icons-png.flaticon.com/512/2977/2977890.png",
  },
  {
    name: "Movies",
    path: "/moviespage/movies",
    icon: "https://cdn-icons-png.flaticon.com/512/1048/1048943.png",
  },
];

const movieItems = [
  {
    id: "1",
    name: "Cineplex Grand",
    category: "Movie Theater",
    image: "https://source.unsplash.com/400x300/?cinema",
    rating: 4.8,
    location: "New York, NY",
    services: "IMAX, 3D, Dolby Atmos",
    offer: true,
  },
  {
    id: "2",
    name: "Movie Magic",
    category: "Cinema Hall",
    image: "https://source.unsplash.com/400x300/?movie",
    rating: 4.6,
    location: "Los Angeles, CA",
    services: "Regular, VIP Seating",
    offer: false,
  },
];

export default function NearbyMovieTheaters() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const filteredMovies = movieItems.filter((movie) =>
    movie.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <Input
          type="text"
          placeholder="🔍 Search movies..."
          aria-label="Search movies"
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

      {/* Trending Movies Section */}
      <section className="mt-4">
        <h2 className="font-bold text-3xl mb-6 text-black">Trending Movies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <Card
                key={movie.id}
                className="relative overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 h-full flex flex-col"
              >
                {/* Floating Rating */}
                <span className="absolute top-3 right-3 bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded-full">
                  ⭐ {movie.rating}
                </span>

                {/* Image */}
                <CardHeader className="p-0">
                  <img
                    src={movie.image}
                    alt={movie.name}
                    className="w-full h-48 object-cover rounded-t-2xl"
                  />
                </CardHeader>

                {/* Details */}
                <CardContent className="flex flex-col items-center p-5 flex-grow justify-between">
                  <CardTitle className="text-xl font-bold text-gray-800 mb-2">
                    {movie.name}
                  </CardTitle>

                  {/* Services & Location */}
                  <p className="text-gray-600 text-sm">🎥 {movie.services}</p>
                  <p className="text-gray-500 text-xs mb-4">
                    📍 {movie.location}
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
      </section>
    </div>
  );
}
