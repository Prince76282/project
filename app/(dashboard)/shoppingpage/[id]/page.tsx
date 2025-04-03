"use client";

import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const products = [
  {
    id: "1",
    name: "Laptop",
    image: "/laptop.jpg",
    price: 1200,
    description:
      "A high-performance laptop equipped with the latest Intel i7 processor, 16GB RAM, 512GB SSD, and a stunning 15.6-inch Full HD display. Ideal for gaming, work, and multimedia editing.",
    specifications: {
      processor: "Intel Core i7-12700H",
      ram: "16GB DDR4",
      storage: "512GB NVMe SSD",
      display: "15.6-inch Full HD (1920x1080) IPS",
      graphics: "NVIDIA GeForce RTX 3060",
      battery: "Up to 10 hours",
      weight: "1.8 kg",
      connectivity: "WiFi 6, Bluetooth 5.2, USB-C, HDMI",
    },
  },
  {
    id: "2",
    name: "Headphones",
    image: "/headphones.jpg",
    price: 150,
    description:
      "Premium wireless noise-canceling headphones with deep bass, 40mm drivers, and 20 hours of battery life. Perfect for music lovers and professionals.",
    specifications: {
      type: "Over-ear, wireless",
      driver_size: "40mm",
      battery_life: "Up to 20 hours",
      noise_cancellation: "Active Noise Cancellation (ANC)",
      connectivity: "Bluetooth 5.0, 3.5mm jack, USB-C charging",
      weight: "250g",
    },
  },
  {
    id: "3",
    name: "Smartphone",
    image: "/smartphone.jpg",
    price: 999,
    description:
      "Flagship smartphone featuring a 6.7-inch AMOLED display, 128GB storage, and a powerful Snapdragon 8 Gen 1 processor. Capture stunning photos with a 50MP triple-camera setup.",
    specifications: {
      processor: "Snapdragon 8 Gen 1",
      ram: "8GB LPDDR5",
      storage: "128GB UFS 3.1",
      display: "6.7-inch AMOLED (2400x1080), 120Hz refresh rate",
      camera: "50MP (main) + 12MP (ultrawide) + 8MP (telephoto)",
      battery: "4500mAh, 65W fast charging",
      connectivity: "5G, WiFi 6, Bluetooth 5.3, USB-C",
    },
  },
  {
    id: "4",
    name: "Camera",
    image: "/camera.jpg",
    price: 850,
    description:
      "Professional DSLR camera with a 24.2MP sensor, 4K video recording, and advanced autofocus system. Ideal for photographers and videographers.",
    specifications: {
      sensor: "24.2MP APS-C CMOS",
      lens_mount: "Interchangeable (EF/EF-S)",
      iso_range: "100-25600",
      video: "4K UHD at 30fps",
      connectivity: "WiFi, Bluetooth, micro-HDMI",
      battery: "Up to 800 shots per charge",
      weight: "650g",
    },
  },
  {
    id: "5",
    name: "Watch",
    image: "/watch.jpg",
    price: 300,
    description:
      "Stylish smartwatch with a 1.4-inch AMOLED display, heart rate monitoring, GPS, and up to 7 days of battery life. Designed for fitness and daily use.",
    specifications: {
      display: "1.4-inch AMOLED, always-on",
      battery: "Up to 7 days",
      sensors: "Heart rate, SpO2, GPS, accelerometer",
      water_resistance: "5 ATM",
      connectivity: "Bluetooth 5.0, NFC, WiFi",
      weight: "45g",
    },
  },
];

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  return (
    <div className="container mx-auto p-6">
      {product ? (
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-cover rounded-lg"
            />
          </CardHeader>
          <CardContent className="text-center">
            <CardTitle className="text-xl font-bold">{product.name}</CardTitle>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <p className="text-lg font-semibold mt-2">${product.price}</p>
            <div className="mt-4 text-left">
              <h3 className="text-lg font-bold">Specifications:</h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li><strong>Processor:</strong> {product.specifications.processor}</li>
                <li><strong>RAM:</strong> {product.specifications.ram}</li>
                <li><strong>Storage:</strong> {product.specifications.storage}</li>
                <li><strong>Display:</strong> {product.specifications.display}</li>
                <li><strong>Graphics:</strong> {product.specifications.graphics}</li>
                <li><strong>Battery Life:</strong> {product.specifications.battery}</li>
                <li><strong>Weight:</strong> {product.specifications.weight}</li>
                <li><strong>Connectivity:</strong> {product.specifications.connectivity}</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      ) : (
        <p className="text-center text-gray-500 text-lg font-semibold">Product not found.</p>
      )}
    </div>
  );
}
