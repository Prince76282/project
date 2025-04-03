"use client";

import DashboardCard from "@/components/DashBoardCard";
import {
  Home,
  Car,
  ShoppingBag,
  Calendar,
  Bot,
  Film,
  Building,
  Hospital,
  Mountain,
  Fuel,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <motion.div
      className="container mx-auto p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold text-center mb-6">
        Welcome to the Dashboard
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <DashboardCard
          title="Bot AI"
          icon={<Bot size={24} />}
          imageSrc="https://cdn-icons-png.flaticon.com/512/1698/1698535.png"
          href="/botpage"
        />
        <DashboardCard
          title="Events"
          icon={<Calendar size={24} />}
          imageSrc="https://cdn-icons-png.flaticon.com/512/780/780575.png"
          href="/eventpage"
        />
        <DashboardCard
          title="Food"
          icon={<Home size={24} />}
          imageSrc="https://cdn-icons-png.flaticon.com/512/2927/2927347.png"
          href="/food"
        />
        <DashboardCard
          title="Fuel station"
          icon={<Fuel size={24} />}
          imageSrc="https://cdn-icons-png.flaticon.com/512/5900/5900376.png"
          href="/pump"
        />
        <DashboardCard
          title="Hospital"
          icon={<Hospital size={24} />}
          imageSrc="https://cdn-icons-png.flaticon.com/512/1802/1802511.png"
          href="/hospital"
        />
        <DashboardCard
          title="Movies"
          icon={<Film size={24} />}
          imageSrc="https://cdn-icons-png.flaticon.com/512/2798/2798007.png"
          href="/moviespage"
        />
        <DashboardCard
          title="Ride"
          icon={<Car size={24} />}
          imageSrc="https://cdn-icons-png.freepik.com/256/4981/4981748.png"
          href="/ride"
        />
        <DashboardCard
          title="Room"
          icon={<Building size={24} />}
          imageSrc="https://cdn-icons-png.freepik.com/512/9617/9617366.png"
          href="/room"
        />
        <DashboardCard
          title="Shopping"
          icon={<ShoppingBag size={24} />}
          imageSrc="https://cdn-icons-png.flaticon.com/512/3225/3225194.png"
          href="/shoppingpage"
        />
        <DashboardCard
          title="Tourist Place"
          icon={<Mountain size={24} />}
          imageSrc="https://cdn-icons-png.freepik.com/256/5786/5786091.png?semt=ais_hybrid"
          href="/tourist"
        />
      </div>
    </motion.div>
  );
}
