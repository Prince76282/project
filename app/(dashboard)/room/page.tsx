"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const rooms = [
  { 
    id: "1", 
    name: "Cozy 2BHK Apartment", 
    image: "/room1.jpg", 
    price: 15000, 
    location: "Downtown", 
    beds: 2, 
    baths: 2, 
    type: "Apartment", 
    amenities: ["WiFi", "Parking", "Balcony"] 
  },
  { 
    id: "2", 
    name: "Spacious 3BHK Villa", 
    image: "/room2.jpg", 
    price: 25000, 
    location: "Suburbs", 
    beds: 3, 
    baths: 3, 
    type: "Villa", 
    amenities: ["Garden", "Garage", "Swimming Pool"] 
  },
  { 
    id: "3", 
    name: "Modern Studio Apartment", 
    image: "/room3.jpg", 
    price: 12000, 
    location: "City Center", 
    beds: 1, 
    baths: 1, 
    type: "Studio", 
    amenities: ["Gym Access", "Security", "Elevator"] 
  },
  { 
    id: "4", 
    name: "Luxury 4BHK Penthouse", 
    image: "/room4.jpg", 
    price: 45000, 
    location: "Beachfront", 
    beds: 4, 
    baths: 4, 
    type: "Penthouse", 
    amenities: ["Sea View", "Terrace", "Private Pool"] 
  },
  { 
    id: "5", 
    name: "Affordable 1BHK", 
    image: "/room5.jpg", 
    price: 8000, 
    location: "Residential Area", 
    beds: 1, 
    baths: 1, 
    type: "Apartment", 
    amenities: ["Nearby Market", "Public Transport", "Play Area"] 
  },
];

export default function RoomListingPage() {
  const [locationQuery, setLocationQuery] = useState("");
  const [savedRooms, setSavedRooms] = useState([]);
  const router = useRouter();


  const filteredRooms = rooms.filter(
    (room) =>   
      room.location.toLowerCase().includes(locationQuery.toLowerCase())
  );


  const addToFavorites = (room) => {
    setSavedRooms((prevRooms) => [...prevRooms, room]);
  };


  const goToFavoritesPage = () => {
    const favoritesData = JSON.stringify(savedRooms);
    localStorage.setItem("favoriteRooms", favoritesData);
    router.push("/room/addtocard");
  };

  return (
    <div className="container mx-auto p-6">

      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <Input
          type="text"
          placeholder="Search by location..."
          value={locationQuery}
          onChange={(e) => setLocationQuery(e.target.value)}
          className="w-full max-w-md p-2 border rounded-lg"
        />
        <div className="relative cursor-pointer" onClick={goToFavoritesPage}>
          <ShoppingCart className="w-8 h-8 text-gray-700" />
          {savedRooms.length > 0 && (
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
              {savedRooms.length}
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredRooms.length > 0 ? (
          filteredRooms.map((room) => (
            <Card key={room.id} className="cursor-pointer hover:shadow-lg transition-shadow cursor-default">
            
                <CardHeader>
                  <img src={room.image} alt={room.name} className="w-full h-40 object-cover rounded-lg" />
                </CardHeader>
       
              <CardContent className="flex flex-col items-center">
                <CardTitle className="text-lg">{room.name}</CardTitle>
                <p className="text-gray-500 mt-1">₹{room.price} / month</p>
                <p className="text-gray-400">{room.location}</p>
                <p className="text-sm text-gray-600">
                  {room.beds} Beds • {room.baths} Baths • {room.type}
                </p>
                <p className="text-sm text-gray-500">Amenities: {room.amenities.join(", ")}</p>
                <Button className="mt-2 w-full bg-blue-600 text-white" onClick={() => addToFavorites(room)}>
                  Add To Cart
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3">No rooms found.</p>
        )}
      </div>
    </div>
  );
}
