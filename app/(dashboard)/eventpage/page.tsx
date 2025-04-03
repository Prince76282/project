"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  {
    id: "1",
    name: "Concert Night",
    image: "",
    price: 49.9,
  },
  {
    id: "2",
    name: "Tech Conference",
    image:
      "https://assets.techrepublic.com/uploads/2022/05/top-5-conferences-2022-tom.jpeg",
    price: 99.99,
  },
  {
    id: "3",
    name: "Food Festival",
    image:
      "https://www.shutterstock.com/image-vector/editable-text-effect-food-festival-600w-2260606417.jpg",
    price: 29.99,
  },
  {
    id: "4",
    name: "Art Exhibition",
    image: "",
    price: 19.99,
  },
  {
    id: "5",
    name: "Sports Meetup",
    image: "",
    price: 39.99,
  },
  {
    id: "6",
    name: "Music Festival",
    image: "",
    price: 79.99,
  },
  {
    id: "8",
    name: "Comedy Show",
    image: "",
    price: 25.99,
  },
  {
    id: "9",
    name: "Book Fair",
    image:
      "https://images.indianexpress.com/2025/02/book-fair_-amit-mehra_20250203075016.jpeg",
    price: 15.99,
  },
  {
    id: "10",
    name: "Gaming Expo",
    image:
      "https://us.v-cdn.net/6036147/uploads/I68KDAH8MDYQ/10-must-attend-gaming-conventions-in-2024.jpg",
    price: 49.99,
  },
  {
    id: "11",
    name: "Photography Workshop",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPdSVyynztI_Wpgbjru3blOvHe-RapYBuKDA&s",
    price: 34.99,
  },
];

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const storedCart = localStorage.getItem("eventBookings");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("eventBookings", JSON.stringify(cart));
  }, [cart]);

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const bookEvent = (event) => {
    setCart((prevCart) => {
      const existingEvent = prevCart.find((item) => item.id === event.id);
      if (existingEvent) {
        return prevCart.map((item) =>
          item.id === event.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...event, quantity: 1 }];
    });
  };

  const goToBookingsPage = () => {
    router.push("/eventpage/cartpage");
  };

  const goToEventDetail = (eventId) => {
    router.push(`/eventpage/${eventId}`);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <Input
          type="text"
          placeholder="Search events..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        />
        <div className="relative cursor-pointer" onClick={goToBookingsPage}>
          <Calendar className="w-8 h-8 text-gray-700 hover:text-blue-600 transition-colors" />
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
              {cart.length}
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <Card
              key={event.id}
              className="cursor-pointer hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
              onClick={() => goToEventDetail(event.id)}
            >
              <CardHeader>
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="flex flex-col items-center p-4">
                <CardTitle className="text-xl font-semibold mb-2">
                  {event.name}
                </CardTitle>
                <p className="text-gray-600 font-medium mb-4">
                  ${event.price.toFixed(2)}
                </p>
                <Button
                  className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    bookEvent(event);
                  }}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No events found.
          </p>
        )}
      </div>
    </div>
  );
}
