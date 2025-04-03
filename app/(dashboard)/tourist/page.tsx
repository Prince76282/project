"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function TouristPage() {
  const router = useRouter();

  return (
    <div className="w-full min-h-screen bg-gray-100 text-gray-900">
      {/* Top Attractions */}
      <section className="p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Top Attractions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((attraction) => (
            <Card
              key={attraction}
              className="cursor-pointer"
              onClick={() => router.push("/attraction")}
            >
              <CardContent className="p-4">
                <img
                  src={`/attraction${attraction}.jpg`}
                  alt="Attraction"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="mt-4 text-xl font-semibold">
                  Attraction {attraction}
                </h3>
                <p className="text-gray-600">Opening Hours: 9AM - 7PM</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="p-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">
          Categories of Experiences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Historical Sites", path: "/tourist/historical" },
            { name: "Adventure & Nature", path: "/tourist/adventure" },
            { name: "Food & Cuisine", path: "/tourist/foodcuisine" },
          ].map((category, index) => (
            <Card
              key={index}
              className="cursor-pointer"
              onClick={() => router.push(category.path)}
            >
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold">{category.name}</h3>
                <p className="text-gray-600">
                  Explore the best {category.name.toLowerCase()}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Interactive Map */}
      <section className="p-8 bg-gray-200 text-center">
        <h2 className="text-3xl font-bold mb-4">Explore on the Map</h2>
        <div className="w-full h-80 bg-gray-400 rounded-lg flex items-center justify-center">
          <p className="text-white">Map Placeholder</p>
        </div>
      </section>

      {/* Booking & Footer */}
      <section className="p-8 bg-gray-900 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Plan Your Stay</h2>
        <Button
          className="bg-green-500 hover:bg-green-600"
          onClick={() => router.push("/tourist/booking")}
        >
          Book Now
        </Button>
      </section>
    </div>
  );
}
