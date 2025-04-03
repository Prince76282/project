"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function HistoricalSites() {
  const router = useRouter();

  return (
    <div className="w-full min-h-screen bg-gray-100 text-gray-900 p-8">
      <h1 className="text-4xl font-bold text-center mb-6">Historical Sites</h1>
      <p className="text-center text-lg text-gray-600 mb-8">
        Discover the rich history and heritage of our city.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((site) => (
          <Card
            key={site}
            className="cursor-pointer hover:shadow-lg"
            onClick={() => router.push(`/tourist/historical/${site}`)}
          >
            <CardContent className="p-4">
              <img
                src={`/historical${site}.jpg`}
                alt={`Historical Site ${site}`}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="mt-4 text-xl font-semibold">
                Historical Site {site}
              </h3>
              <p className="text-gray-600">A brief description of this site.</p>
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
