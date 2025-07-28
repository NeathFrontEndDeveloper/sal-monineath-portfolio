"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Profile from "@/assets/Profile.jpg";
import { socialLinks } from "@/constants/dataConsts";
import { Button } from "@/components/ui/button";
import { MapPinned } from "lucide-react";
import Link from "next/link";
import {
  useTypingEffect,
  useViewWork,
  useConnect,
} from "@/constants/functions";

const Home = () => {
  const [showContent, setShowContent] = useState(false);

  // Show content on page load
  useEffect(() => {
    setTimeout(() => setShowContent(true), 100);
  }, []);

  // Function
  const Texts = useTypingEffect();
  const viewWork = useViewWork();
  const connectBtn = useConnect();

  return (
    <>
      {/* Floating circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />

      <div className="relative  z-10 container mx-auto px-4 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Text Content */}
          <div
            className={`space-y-8 text-center lg:text-left transition-all duration-1000 ${
              showContent
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            {/* Hello section */}
            <div className="space-y-4">
              <p className="text-green-400 text-lg font-medium">
                👋 Hello there! I'm
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold text-white">
                Neath
              </h1>
            </div>

            {/* Typing effect */}
            <div className="h-16 flex items-center justify-center lg:justify-start">
              <h2 className="text-3xl lg:text-4xl font-semibold text-green-400 font-mono">
                <span className="text-white">I'm a</span> {Texts}
                <span className="animate-pulse">|</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              Passionate about creating innovative web solutions and user
              experiences. I specialize in modern web technologies and love
              turning ideas into reality.
            </p>

            {/* Location */}
            {/* <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-400">
              <MapPinned className="w-5 h-5" />
              <span>Phnom Penh, Cambodia</span>
            </div> */}

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                type="button"
                onClick={connectBtn}
                variant="secondary"
                className="px-8 py-4 cursor-pointer"
              >
                Let's Connect
              </Button>

              <Button
                type="button"
                onClick={viewWork}
                variant="outline"
                className="px-8 py-4 cursor-pointer"
              >
                View My Work
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 pt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.url}
                    target={social.name !== "Email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-800/50 text-gray-400 hover:text-green-400 hover:bg-green-400/10 transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Profile Image */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
              showContent
                ? "translate-x-0 opacity-100"
                : "translate-x-12 opacity-0"
            }`}
          >
            <div className="relative group">
              {/* Glowing border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>

              {/* Image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gray-800">
                <Image
                  src={Profile}
                  alt="Profile picture of Sal Monineath"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />

                {/* Name overlay on hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <p className="text-white font-medium text-lg">
                    Sal Monineath
                  </p>
                </div>
              </div>

              {/* Status badge */}
              <div className="absolute -bottom-4 -right-4 bg-green-400 text-gray-900 px-4 py-2 rounded-full font-semibold text-sm shadow-lg rotate-12 hover:rotate-0 transition-transform duration-300">
                Available for hire! 🚀
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
