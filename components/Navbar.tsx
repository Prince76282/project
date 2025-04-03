"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import img from "../public/image/photo_2025-03-25_11-33-15.jpg";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const handleToggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleProfileClick = () => {
    router.push("/Profile");
  };

  return (
    <nav className="w-full p-6 bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800 dark:text-white flex items-center">
          <Image
            src={img}
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
        
        </div>

        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={handleToggleDarkMode}
            className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md text-gray-800 dark:text-white"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Profile Button */}
          <button
            onClick={handleProfileClick}
            className="flex items-center space-x-2 focus:outline-none"
          >
            <Avatar>
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </button>
        </div>
      </div>
    </nav>
  );
}
