"use client";

import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";

interface DashboardCardProps {
  title: string;
  icon: React.ReactNode;
  href: string;
  imageSrc: string;
}

export default function DashboardCard({
  title,
  icon,
  href,
  imageSrc,
}: DashboardCardProps) {
  const router = useRouter(); // Initialize router

  return (
    <Card
      className="p-6 flex items-center justify-center gap-4 hover:bg-gray-400 transition-all cursor-pointer"
      onClick={() => router.push(href)} // Navigate on click
    >
      {icon}
      <h2 className="text-lg font-semibold">{title}</h2>
      <div
        className="w-12 h-12 bg-cover bg-center rounded-md"
        style={{ backgroundImage: `url(${imageSrc})` }}
      ></div>
    </Card>
  );
}
