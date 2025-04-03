"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return;
    const updatedCart = cart.map((item, i) =>
      i === index ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0).toFixed(2);
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout!");
    setCart([]);
    localStorage.removeItem("cartItems");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Shopping Cart</h1>
      {cart.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cart.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
                </CardHeader>
                <CardContent className="flex flex-col items-center p-4">
                  <CardTitle className="text-lg font-semibold text-gray-800">{product.name}</CardTitle>
                  <p className="text-lg font-semibold text-gray-600">${product.price}</p>
                  <div className="flex items-center mt-3">
                    <Button
                      className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l hover:bg-gray-300"
                      onClick={() => updateQuantity(index, (product.quantity || 1) - 1)}
                      disabled={(product.quantity || 1) <= 1}
                    >
                      -
                    </Button>
                    <span className="px-4 text-gray-700">{product.quantity || 1}</span>
                    <Button
                      className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r hover:bg-gray-300"
                      onClick={() => updateQuantity(index, (product.quantity || 1) + 1)}
                    >
                      +
                    </Button>
                  </div>
                  <Button 
                    className="mt-3 w-full bg-red-600 text-white hover:bg-red-700"
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-sm text-center">
            <h2 className="text-2xl font-bold text-gray-800">Total: ${calculateTotal()}</h2>
            <Button 
              className="mt-4 w-full bg-blue-600 text-white hover:bg-blue-700"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </Button>
          </div>
        </>
      ) : (
        <div className="text-center py-20">
          <p className="text-2xl text-gray-500">Your cart is empty.</p>
          <p className="text-gray-400 mt-2">Start adding items to your cart!</p>
        </div>
      )}
    </div>
  );
}
