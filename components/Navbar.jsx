'use client';
import React from 'react';


export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-800/80 p-4 
    border-b border-blue-400/30 shadow-lg backdrop-blur-sm z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">SportsHub</div>
        <ul className="flex space-x-6">
          <li><a href="/" className="text-white p-2 hover:shadow-lg shadow-blue-400/30 transition-shadow duration-300 text-xl rounded-lg">Home</a></li>
          <li><a href="/about" className="text-white p-2 hover:shadow-lg shadow-blue-400/30 transition-shadow duration-300 text-xl rounded-lg">About</a></li>
          <li><a href="/players" className="text-white p-2 hover:shadow-lg shadow-blue-400/30 transition-shadow duration-300 text-xl rounded-lg">Players</a></li>
          <li><a href="/sports" className="text-white p-2 hover:shadow-lg shadow-blue-400/30 transition-shadow duration-300 text-xl rounded-lg">Sports</a></li>
          <li><a href="/join-us" className="text-white p-2 hover:shadow-lg shadow-blue-400/30 transition-shadow duration-300 text-xl rounded-lg">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}