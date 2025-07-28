import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BG } from "@/constants/styling";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your App Name",
  description: "Your app description here",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className={`antialiased ${BG} min-h-screen flex flex-col`}>
        {/* Header with fixed navbar */}
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
          <Navbar />
        </header>

        {/* Main content area with flex-grow to push footer down */}
        <main className="flex mt-28 sm:pt-20 md:pt-24 lg:pt-28 relative">
          <div className="container mx-auto">{children}</div>
        </main>

        {/* Footer at bottom */}
        <Footer />
      </body>
    </html>
  );
}
