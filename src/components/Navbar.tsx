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
    { name: "Team", href: "/team" },
    { name: "Children Profiles", href: "/children-profiles" },
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
          ? "bg-[#F8FAEE]/95 backdrop-blur-md border-[#32431B]/15 shadow-sm py-3"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group z-50 -translate-y-1 md:-translate-y-2 transition-transform">
          <Image
            src="/brand/logo.png"
            alt="Blessed to Bless Rehabilitation Centre Uganda logo"
            width={420}
            height={120}
            priority
            className="h-16 md:h-20 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="text-sm font-medium text-[#202612]/80 hover:text-[#C5352F] transition-colors tracking-wide"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4 z-50">
          <Link
            href="/get-involved"
            className="hidden md:flex items-center gap-2 bg-[#C5352F] hover:bg-[#8F241F] text-[#F8FAEE] px-6 py-2.5 rounded-full text-sm font-medium transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Get Involved <HeartHandshake size={16} />
          </Link>
          
          <button 
            className="md:hidden p-2 text-[#202612]"
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
        className="md:hidden absolute top-0 left-0 w-full bg-[#F8FAEE] overflow-hidden z-40 flex flex-col items-center justify-center"
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-serif text-[#202612] hover:text-[#C5352F] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/get-involved"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 bg-[#C5352F] text-[#F8FAEE] px-8 py-3 rounded-full text-lg mt-4"
          >
            Get Involved <HeartHandshake size={20} />
          </Link>
        </nav>
      </motion.div>
    </motion.header>
  );
}
