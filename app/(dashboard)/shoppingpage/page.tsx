"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  { id: "1", name: "Laptop", image: "/laptop.jpg", price: 999.99 },
  { id: "2", name: "Smartphone", image: "/smartphone.jpg", price: 699.99 },
  { id: "3", name: "Headphones", image: "/headphones.jpg", price: 199.99 },
  { id: "4", name: "Smartwatch", image: "/smartwatch.jpg", price: 299.99 },
  { id: "5", name: "Camera", image: "/camera.jpg", price: 499.99 },
];

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const goToCartPage = () => {
    router.push("/shoppingpage/cartpage");
  };

  const goToProductPage = (productId) => {
    router.push(`/shop/${productId}`);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <Input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md p-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        />
        <div className="relative cursor-pointer" onClick={goToCartPage}>
          <ShoppingCart className="w-8 h-8 text-gray-700 hover:text-blue-600 transition-colors" />
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
              {cart.length}
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="cursor-pointer hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
              onClick={() => goToProductPage(product.id)}
            >
              <CardHeader>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="flex flex-col items-center p-4">
                <CardTitle className="text-xl font-semibold mb-2">
                  {product.name}
                </CardTitle>
                <p className="text-gray-600 font-medium mb-4">
                  ${product.price.toFixed(2)}
                </p>
                <Button
                  className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                  }}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
}
