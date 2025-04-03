"use client";

import { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1234567890",
    photo: "https://via.placeholder.com/150",
  });

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const storedUser = JSON.parse(localStorage.getItem("user")) || user;
      setUser(storedUser);
    };

    fetchUserData();
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-300 ${darkMode ? "bg-gray-900" : "bg-white"}`}>
      {/* Toggle Dark Mode Button */}
      <button
        onClick={toggleDarkMode}
        className="absolute top-5 right-5 px-4 py-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded-md shadow-md transition-all"
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      {/* Profile Card */}
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 w-96 text-center border dark:border-gray-600 transition-all">
        {/* Profile Photo */}
        <div className="relative w-28 h-28 mx-auto mb-4">
          <img
            src={user.photo}
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-gray-300 dark:border-gray-600 shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* User Details */}
        <div className="text-left space-y-4">
          {/* Name */}
          <div>
            <label className="text-sm text-gray-500 dark:text-gray-300 uppercase">Name</label>
            <p className="text-lg font-semibold text-gray-800 dark:text-white">{user.name}</p>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-500 dark:text-gray-300 uppercase">Email</label>
            <p className="text-lg text-gray-600 dark:text-gray-300">{user.email}</p>
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm text-gray-500 dark:text-gray-300 uppercase">Phone</label>
            <p className="text-lg text-gray-600 dark:text-gray-300">{user.phone}</p>
          </div>
        </div>

        {/* Edit Profile Button */}
        <button className="mt-6 px-6 py-2 bg-gray-800 dark:bg-white text-white dark:text-gray-800 font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-gray-600 dark:hover:bg-gray-300">
          Edit Profile
        </button>
      </div>
    </div>
  );
}
