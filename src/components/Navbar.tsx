"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HEAD_LINE } from "@/constants/styling";
import { BG } from "@/constants/styling";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const Logo = {
    label: "Sal Monineath",
    link: "/",
  };

  const NavItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Skills", href: "/skills" },
    { label: "Education", href: "/education" },
    { label: "Experience", href: "/experience" },
    { label: "Project", href: "/project" },
    { label: "Contact", href: "/contact" },
  ];

  const closeMenu = useCallback(() => {
    if (!isOpen) return;

    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 250); // Match animation duration
  }, [isOpen]);

  const toggleMenu = useCallback(() => {
    if (isOpen) {
      closeMenu();
    } else {
      setIsOpen(true);
    }
  }, [isOpen, closeMenu]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeMenu();
      }
    },
    [isOpen, closeMenu]
  );

  // Handle click outside
  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(target) &&
        !target.closest(".hamburger-btn")
      ) {
        closeMenu();
      }
    },
    [isOpen, closeMenu]
  );

  // Focus trap for mobile menu
  const handleFocusTrap = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen || !menuRef.current) return;

      const focusableElements = menuRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[
        focusableElements.length - 1
      ] as HTMLElement;

      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement?.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement?.focus();
            e.preventDefault();
          }
        }
      }
    },
    [isOpen]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("keydown", handleFocusTrap);
      document.addEventListener("click", handleClickOutside);
      document.body.style.overflow = "hidden";

      // Focus first element in menu
      setTimeout(() => {
        const firstFocusable = menuRef.current?.querySelector(
          "button, [href]"
        ) as HTMLElement;
        firstFocusable?.focus();
      }, 100);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keydown", handleFocusTrap);
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleKeyDown, handleFocusTrap, handleClickOutside]);

  // Close menu on route change
  useEffect(() => {
    if (isOpen) {
      closeMenu();
    }
  }, [pathname, closeMenu]);

  const isActiveLink = (href: string) => {
    return pathname === href;
  };

  return (
    <>
      <header className="bg-white dark:bg-gray-900 border-b shadow-sm w-full flex items-center justify-between sticky top-0 z-40 backdrop-blur-sm bg-opacity-95">
        <nav className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
          {/* Logo */}
          <div>
            <Link
              href={Logo.link}
              className={`${HEAD_LINE} hover:opacity-80 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-sm`}
              aria-label="Sal Monineath - Home"
            >
              {Logo.label}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {NavItems.map((item, index) => (
              <li key={index} className="relative group">
                <Link
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-sm overflow-hidden ${
                    isActiveLink(item.href)
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                  aria-current={isActiveLink(item.href) ? "page" : undefined}
                >
                  {item.label}
                  {/* Sliding underline bar */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 ease-out ${
                      isActiveLink(item.href)
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger Button */}
          <button
            className="hamburger-btn md:hidden relative w-10 h-10 flex flex-col justify-center items-center focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            onClick={toggleMenu}
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1"
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isOpen ? "bg-opacity-50" : "bg-opacity-0"
          }`}
          onClick={closeMenu}
          aria-hidden="true"
        />

        {/* Menu Panel */}
        <div
          ref={menuRef}
          id="mobile-menu"
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ease-out ${
            isOpen && !isClosing ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
        >
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <Link
              href={Logo.link}
              id="mobile-menu-title"
              className={`${HEAD_LINE} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-sm`}
              onClick={closeMenu}
            >
              {Logo.label}
            </Link>
            <button
              onClick={closeMenu}
              className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
              aria-label="Close navigation menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <nav className="p-6" aria-label="Mobile navigation">
            <ul className="space-y-2">
              {NavItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={`block w-full text-left py-3 px-4 text-base font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset ${
                      isActiveLink(item.href)
                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-100"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800 active:bg-gray-200 dark:active:bg-gray-700"
                    }`}
                    aria-current={isActiveLink(item.href) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
