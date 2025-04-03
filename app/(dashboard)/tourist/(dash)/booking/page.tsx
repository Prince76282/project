"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function BookingPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    packageType: "Basic",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking details:", formData);
    router.push("/confirmation");
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 text-gray-900 flex justify-center items-center p-8">
      <Card className="w-full max-w-lg p-6 bg-white shadow-lg rounded-lg">
        <CardContent>
          <h2 className="text-3xl font-bold text-center mb-6">
            Book Your Experience
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-lg font-medium">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium">
                Select Package
              </label>
              <select
                name="packageType"
                value={formData.packageType}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              >
                <option value="Basic">Basic - $50</option>
                <option value="Standard">Standard - $100</option>
                <option value="Premium">Premium - $200</option>
              </select>
            </div>
            <Button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg"
            >
              Confirm Booking
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
