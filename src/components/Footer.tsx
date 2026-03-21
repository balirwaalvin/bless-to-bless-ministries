"use client";

import Link from "next/link";
import { HeartHandshake, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2B362E] text-[#F5F2E9] pt-20 pb-10 border-t border-[#4A5D4E]/30 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand & Mission */}
        <div className="md:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-6 group">
            <div className="w-10 h-10 rounded-full bg-[#944C42] flex items-center justify-center text-[#F5F2E9] transition-colors">
              <span className="font-serif text-xl italic leading-none">B</span>
            </div>
            <span className="font-serif text-xl tracking-tight font-medium">
              Bless <span className="italic text-[#E3C8B7]">to Bless</span>
            </span>
          </Link>
          <p className="text-[#F5F2E9]/70 font-light leading-relaxed mb-6">
            Empowering lives and inspiring hope through education, community building, and charitable outreach.
          </p>
          <Link href="/donate" className="inline-flex items-center gap-2 text-[#E3C8B7] hover:text-[#F5F2E9] font-medium transition-colors">
            Support Our Mission <HeartHandshake size={18} />
          </Link>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-xl text-[#E3C8B7] mb-6">Navigation</h4>
          <ul className="flex flex-col gap-4 font-light text-[#F5F2E9]/80">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/programs" className="hover:text-white transition-colors">Our Programs</Link></li>
            <li><Link href="/impact" className="hover:text-white transition-colors">Impact Stories</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-serif text-xl text-[#E3C8B7] mb-6">Contact Us</h4>
          <ul className="flex flex-col gap-4 font-light text-[#F5F2E9]/80">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-[#944C42] mt-1 shrink-0" />
              <span>Kampala, Uganda<br/>P.O. Box 12345</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-[#944C42] shrink-0" />
              <span>+256 700 000 000</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-[#944C42] shrink-0" />
              <span>hello@blesstobless.org</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-serif text-xl text-[#E3C8B7] mb-6">Newsletter</h4>
          <p className="text-[#F5F2E9]/70 font-light mb-4">
            Subscribe to receive updates on our programs and impact.
          </p>
          <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-3 rounded-md bg-[#4A5D4E]/30 border border-[#4A5D4E] focus:outline-none focus:border-[#E3C8B7] text-[#F5F2E9] placeholder-[#F5F2E9]/40 transition-colors"
            />
            <button className="px-4 py-3 bg-[#944C42] hover:bg-[#7A3E35] text-white rounded-md font-medium transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 border-t border-[#4A5D4E]/30 flex flex-col md:flex-row justify-between items-center text-[#F5F2E9]/50 text-sm font-light">
        <p>&copy; {new Date().getFullYear()} Bless to Bless Ministries. All rights reserved.</p>
        <div className="flex items-center gap-6 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
