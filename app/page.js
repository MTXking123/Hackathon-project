"use client";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/world-map.png')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-green-400 mb-6">
          Find breaches, technologies, and vulnerabilities within seconds.
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="text"
            placeholder="Enter domain or IP..."
            className="px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 w-80"
          />
          <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-black font-bold rounded-lg transition">
            Scan
          </button>
        </div>
      </div>
    </div>
  );
}


