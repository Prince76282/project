"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FaMapMarkerAlt, FaRoute, FaTruckMoving } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: <FaMapMarkerAlt className="text-blue-600 text-5xl" />,
    title: "Nearby Fuel Station Locator",
    description:
      "Find fuel stations near you with real-time availability and directions.",
    path: "/pump/nearby",
  },
  {
    icon: <FaRoute className="text-purple-600 text-5xl" />,
    title: "Smart Navigation & Route Optimization",
    description:
      "Plan efficient routes considering fuel availability and cost savings.",
    path: "/pump/route",
  },
  {
    icon: <FaTruckMoving className="text-red-600 text-5xl" />,
    title: "Pre-Booking & Fuel Delivery Services",
    description: "Pre-book fuel or get it delivered to your location.",
    path: "/pump/fueldelivery",
  },
];

const FuelStationServices = () => {
  const router = useRouter();

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Fuel Station Services
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Enhancing convenience with real-time fuel availability, price
          comparisons, and more.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mt-10">
        {services.map((service, index) => (
          <Card
            key={index}
            className="p-8 flex flex-col items-center text-center cursor-pointer 
                       rounded-2xl shadow-md hover:shadow-xl bg-white transition-transform 
                       transform hover:-translate-y-2 hover:bg-blue-50"
            onClick={() => router.push(service.path)}
          >
            <CardContent className="flex flex-col items-center">
              <div className="p-4 bg-blue-100 rounded-full">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mt-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FuelStationServices;
