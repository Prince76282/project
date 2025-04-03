"use client";

import { useState, useEffect } from "react";

const ContactNumbers = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API fetch (replace with actual API call)
    setTimeout(() => {
      setContacts([
        {
          id: 1,
          name: "City Transport Helpline",
          number: "+1 800 123 4567",
          department: "General Inquiry",
        },
        {
          id: 2,
          name: "Emergency Roadside Assistance",
          number: "+1 800 987 6543",
          department: "Emergency Services",
        },
        {
          id: 3,
          name: "Lost & Found",
          number: "+1 800 555 6789",
          department: "Lost Items Department",
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8 drop-shadow-lg">
        ☎️ Contact Numbers
      </h1>
      {loading ? (
        <p className="text-center text-gray-600 text-lg animate-pulse">
          Loading contact numbers...
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="bg-gray-100 shadow-md rounded-2xl p-6 border-l-8 border-gray-400 hover:shadow-lg transition transform hover:scale-105"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {contact.name}
              </h2>
              <p className="text-gray-700">📞 {contact.number}</p>
              <p className="text-gray-700">🏢 {contact.department}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactNumbers;
