"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function AdventureNature() {
  const router = useRouter();

  return (
    <div className="w-full min-h-screen bg-gray-100 text-gray-900 p-8">
      <h1 className="text-4xl font-bold text-center mb-6">
        Adventure & Nature
      </h1>
      <p className="text-center text-lg text-gray-600 mb-8">
        Experience the thrill of adventure and the beauty of nature in our top
        destinations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((spot) => (
          <Card
            key={spot}
            className="cursor-pointer hover:shadow-lg"
            onClick={() => router.push(`/tourist/adventure/${spot}`)}
          >
            <CardContent className="p-4">
              <img
                src={`/adventure${spot}.jpg`}
                alt={`Adventure Spot ${spot}`}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="mt-4 text-xl font-semibold">
                Adventure Spot {spot}
              </h3>
              <p className="text-gray-600">
                A brief description of this adventure spot.
              </p>
              <Button className="mt-4 bg-blue-600 hover:bg-blue-700 w-full">
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8">
        <Button
          className="bg-green-600 hover:bg-green-700"
          onClick={() => router.push("/tourist")}
        >
          Back to Tourist Page
        </Button>
      </div>
    </div>
  );
}
