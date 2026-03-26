"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HeartHandshake, Menu, X } from "lucide-react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const navLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Programs", href: "/programs" },
    { name: "Impact", href: "/impact" },
    { name: "Media", href: "/media" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-[#F5F2E9]/90 backdrop-blur-md border-[#3C4A3E]/10 shadow-sm py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group z-50">
          <Image
            src="/bless to bless logo.png"
            alt="Bless to Bless Ministries logo"
            width={260}
            height={80}
            priority
            className="h-12 w-auto md:h-14"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="text-sm font-medium text-[#2E2A25]/80 hover:text-[#944C42] transition-colors tracking-wide"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4 z-50">
          <Link
            href="/get-involved"
            className="hidden md:flex items-center gap-2 bg-[#944C42] hover:bg-[#7A3E35] text-[#F5F2E9] px-6 py-2.5 rounded-full text-sm font-medium transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Get Involved <HeartHandshake size={16} />
          </Link>
          
          <button 
            className="md:hidden p-2 text-[#2E2A25]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        initial={false}
        animate={mobileMenuOpen ? { height: "100vh", opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden absolute top-0 left-0 w-full bg-[#F5F2E9] overflow-hidden z-40 flex flex-col items-center justify-center"
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-serif text-[#2E2A25] hover:text-[#944C42] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/get-involved"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 bg-[#944C42] text-[#F5F2E9] px-8 py-3 rounded-full text-lg mt-4"
          >
            Get Involved <HeartHandshake size={20} />
          </Link>
        </nav>
      </motion.div>
    </motion.header>
  );
}
