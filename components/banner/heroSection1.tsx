"use client";
import React from "react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { Button } from "../ui/button";

export default function HeroSection1() {
  return (
    <section className="relative w-full min-h-[60vh] bg-black text-white flex flex-col justify-center items-center px-6">
      {/* Background Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6, 182, 212, 0.25), transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center">
        <h1 className="text-3xl sm:text-5xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
          <span className="block mb-2">Code. <span className="text-yellow-300">Learn</span>. Succeed.</span>
          <TypeAnimation
            sequence={[
              "Practice Coding Challenges",
              2000,
              "Master DSA For You",
              2000,
              "Ace Your Coding Interviews",
              2000,
              "Compete with Global Coders",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-green-400"
          />
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 mb-8 mt-4">
          Build your skills from beginner to pro — all in one platform.
        </p>

      <Button >  <Link
          href="/editor"
          className=""
        >
          Start Coding
        </Link></Button>
      </div>
    </section>
  );
}
