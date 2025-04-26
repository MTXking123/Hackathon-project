"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-center space-x-8">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/About" className="hover:underline">About</Link>
        <Link href="/Contact" className="hover:underline">Contact</Link>
      </nav>
    </header>
  );
}
