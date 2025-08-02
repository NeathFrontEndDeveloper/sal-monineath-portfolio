"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Profile from "@/assets/Profile.jpg";
import { Button } from "@/components/ui/button";
import { useTypingEffect, useSkills, useAboutMe } from "@/constants/functions";
import SocialLinks from "@/components/socialLinks";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

const Home = () => {
  // Functions
  const Texts = useTypingEffect();
  const viewTechStack = useSkills();
  const aboutMe = useAboutMe();

  return (
    <section className="w-full min-h-screen text-white relative overflow-hidden">
      {/* Floating circles - adjusted for mobile */}
      <div className="absolute top-20 left-4 sm:top-1/4 sm:left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-green-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-4 sm:bottom-1/4 sm:right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 container mx-auto px-4 py-8 sm:py-12 lg:py-20 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center w-full">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            {/* Hello section */}
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3 sm:space-y-4"
            >
              <p className="text-green-400 text-base sm:text-lg font-medium">
                👋 Hello there! I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Neath
              </h1>
            </motion.div>

            {/* Typing effect - improved mobile spacing */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="min-h-[4rem] sm:min-h-[5rem] flex items-center justify-center lg:justify-start"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-green-400 font-mono text-center lg:text-left">
                <span className="text-white">I'm a</span> {Texts}
                <span className="animate-pulse">|</span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Passionate about creating innovative web solutions and user
              experiences. I specialize in modern web technologies and love
              turning ideas into reality.
            </motion.p>

            {/* Buttons - improved mobile layout */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row space-x-2 sm:space-x-4 justify-center lg:justify-start items-center"
            >
              <Button
                type="button"
                onClick={aboutMe}
                variant="secondary"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 cursor-pointer text-sm sm:text-base"
              >
                About me
                <MoveRight className="inline-block ml-2" size={18} />
              </Button>

              <Button
                type="button"
                onClick={viewTechStack}
                variant="outline"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 cursor-pointer text-sm sm:text-base"
              >
                View Tech Stack
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex items-center justify-center lg:justify-start space-x-6 pt-4"
            >
              <SocialLinks />
            </motion.div>
          </motion.div>

          {/* Profile Image - significantly improved mobile responsiveness */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex justify-center lg:justify-end mt-8 lg:mt-0"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
