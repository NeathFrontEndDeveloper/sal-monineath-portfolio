"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Profile from "@/assets/Profile.jpg";
import { Button } from "@/components/ui/button";
import {
  useTypingEffect,
  useViewWork,
  useConnect,
} from "@/constants/functions";
import SocialLinks from "@/components/socialLinks";
import { MoveRight } from "lucide-react";

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
    <section className="w-full min-h-screen text-white relative overflow-hidden">
      {/* Floating circles - adjusted for mobile */}
      <div className="absolute top-20 left-4 sm:top-1/4 sm:left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-green-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-4 sm:bottom-1/4 sm:right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 container mx-auto px-4 py-8 sm:py-12 lg:py-20 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center w-full">
          {/* Text Content */}
          <div
            className={`space-y-6 sm:space-y-8 text-center lg:text-left transition-all duration-1000 ${
              showContent
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            {/* Hello section */}
            <div className="space-y-3 sm:space-y-4">
              <p className="text-green-400 text-base sm:text-lg font-medium">
                👋 Hello there! I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Neath
              </h1>
            </div>

            {/* Typing effect - improved mobile spacing */}
            <div className="min-h-[4rem] sm:min-h-[5rem] flex items-center justify-center lg:justify-start">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-green-400 font-mono text-center lg:text-left">
                <span className="text-white">I'm a</span> {Texts}
                <span className="animate-pulse">|</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Passionate about creating innovative web solutions and user
              experiences. I specialize in modern web technologies and love
              turning ideas into reality.
            </p>

            {/* Buttons - improved mobile layout */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center">
              <Button
                type="button"
                onClick={connectBtn}
                variant="secondary"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 cursor-pointer text-sm sm:text-base"
              >
                Let's Connect
                <MoveRight className="inline-block ml-2" size={18} />
              </Button>

              <Button
                type="button"
                onClick={viewWork}
                variant="outline"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 cursor-pointer text-sm sm:text-base"
              >
                View My Work
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 pt-4">
              <SocialLinks />
            </div>
          </div>

          {/* Profile Image - significantly improved mobile responsiveness */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 mt-8 lg:mt-0 ${
              showContent
                ? "translate-x-0 opacity-100"
                : "translate-x-12 opacity-0"
            }`}
          >
            <div className="relative group">
              {/* Glowing border - responsive sizing */}
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>

              {/* Image container - responsive sizes */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gray-800">
                <Image
                  src={Profile}
                  alt="Profile picture of Sal Monineath"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Name overlay on hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 sm:pb-8">
                  <p className="text-white font-medium text-base sm:text-lg">
                    Sal Monineath
                  </p>
                </div>
              </div>

              {/* Status badge - responsive positioning and sizing */}
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-green-400 text-gray-900 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-semibold text-xs sm:text-sm shadow-lg rotate-12 hover:rotate-0 transition-transform duration-300">
                <span className="hidden sm:inline">Available for hire! 🚀</span>
                <span className="sm:hidden">Available! 🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
