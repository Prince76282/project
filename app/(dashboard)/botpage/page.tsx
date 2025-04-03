"use client";

import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Send } from "lucide-react";

export default function ChatbotPage() {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages([...messages, userMessage]);
    setInput("");

    // Simulated AI response (Replace with actual API call)
    const botResponse = { role: "bot", text: "I'm thinking..." };
    setMessages((prev) => [...prev, botResponse]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { role: "bot", text: data.reply },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { role: "bot", text: "Error fetching response." },
      ]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4 md:p-6">
      <Card className="w-[90%] md:w-full max-w-lg bg-white shadow-xl rounded-2xl border border-gray-200">
        <CardContent className="p-4 space-y-4 h-[80vh] md:h-96 overflow-y-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 max-w-[75%] text-sm rounded-xl ${
                msg.role === "user"
                  ? "bg-blue-500 text-white ml-auto"
                  : "bg-gray-100 text-black"
              }`}
            >
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </CardContent>
        <div className="flex items-center p-3 border-t bg-white rounded-b-2xl shadow-md">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            className="flex-1 border-gray-300 rounded-l-full px-4 py-2 shadow-sm focus:outline-none"
          />
          <Button
            onClick={handleSendMessage}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-r-full px-4 py-2"
          >
            <Send size={18} />
          </Button>
        </div>
      </Card>
    </div>
  );
}
