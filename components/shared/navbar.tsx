'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-black  px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo + Name */}
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={40} height={40} />
          <span className="font-bold text-xl tracking-wide">CodeArif</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/home" className="transition duration-300 hover:text-cyan-400">Home</Link>
          <Link href="/home" className="transition duration-300 hover:text-cyan-400">All Courses</Link>
          <Link href="/about" className="transition duration-300 hover:text-cyan-400">About</Link>
          <Link href="/support" className="transition duration-300 hover:text-cyan-400">Support</Link>
          <Link href="/" className="transition duration-300 hover:text-cyan-400"> Contest</Link>
          <Link href="/" className="transition duration-300 hover:text-cyan-400">Career</Link>
          <Link href="/" className="transition duration-300 hover:text-cyan-400">Login</Link>
          <Link href="/" className="transition duration-300 hover:text-cyan-400">Register</Link>
        </div>
        {/* authentication */}
       

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col items-start gap-4 px-4">
          <Link href="/home" className="transition duration-300 hover:text-cyan-400">Home</Link>
          <Link href="/about" className="transition duration-300 hover:text-cyan-400">About</Link>
          <Link href="/support" className="transition duration-300 hover:text-cyan-400">Support</Link>
          <Link href="/career" className="transition duration-300 hover:text-cyan-400">Career</Link>
        </div>
      )}
    </nav>
  );
}
