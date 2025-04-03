"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash, Plus, Minus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function EventCartPage() {
  const [cart, setCart] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("eventCart")) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("eventCart", JSON.stringify(updatedCart));
  };

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return;
    const updatedCart = cart.map((event, i) =>
      i === index ? { ...event, quantity: newQuantity } : event
    );
    setCart(updatedCart);
    localStorage.setItem("eventCart", JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cart
      .reduce((total, event) => total + event.price * (event.quantity || 1), 0)
      .toFixed(2);
  };

  const handleCheckout = () => {
    alert("Thank you for booking your tickets!");
    setCart([]);
    localStorage.removeItem("eventCart");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Event Cart{" "}
        {cart.length > 0 && (
          <span className="text-green-600">({cart.length} events)</span>
        )}
      </h1>

      {cart.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cart.map((event, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 rounded-xl overflow-hidden"
              >
                <CardHeader>
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="flex flex-col items-center p-4">
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    {event.name}
                  </CardTitle>
                  <p className="text-gray-600">
                    {event.date} | {event.time}
                  </p>
                  <p className="text-gray-500">{event.location}</p>
                  <p className="text-lg font-semibold text-gray-700">
                    ${event.price} per ticket
                  </p>

                  <div className="flex items-center mt-3">
                    <Button
                      className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l hover:bg-gray-300 transition-colors duration-200"
                      onClick={() =>
                        updateQuantity(index, (event.quantity || 1) - 1)
                      }
                      disabled={(event.quantity || 1) <= 1}
                    >
                      <Minus size={16} />
                    </Button>
                    <span className="px-4 text-gray-700">
                      {event.quantity || 1}
                    </span>
                    <Button
                      className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r hover:bg-gray-300 transition-colors duration-200"
                      onClick={() =>
                        updateQuantity(index, (event.quantity || 1) + 1)
                      }
                    >
                      <Plus size={16} />
                    </Button>
                  </div>

                  <Button
                    className="mt-3 w-full bg-red-600 text-white hover:bg-red-700 transition-colors duration-200"
                    onClick={() => removeFromCart(index)}
                  >
                    <Trash size={18} className="mr-2" /> Remove
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800">
              Total: ${calculateTotal()}
            </h2>
            <Button
              className="mt-4 w-full bg-green-600 text-white hover:bg-green-700 transition-colors duration-200"
              onClick={handleCheckout}
            >
              Checkout
            </Button>
          </div>
        </>
      ) : (
        <div className="text-center py-20">
          <p className="text-2xl text-gray-500">Your event cart is empty.</p>
          <p className="text-gray-400 mt-2">
            Browse events and add tickets to your cart!
          </p>
         
        </div>
      )}
    </div>
  );
}
