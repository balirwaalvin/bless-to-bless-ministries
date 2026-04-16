"use client";

import Link from "next/link";
import Image from "next/image";
import { HeartHandshake, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(165deg,#1F2C12_0%,#243513_40%,#1A2610_100%)] text-[#F8FAEE] pt-20 pb-10 border-t border-[#5B7330]/30 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand & Mission */}
        <div className="md:col-span-1">
          <Link href="/" className="mb-6 inline-block group">
            <Image
              src="/brand/logo.png"
              alt="Blessed to Bless Rehabilitation Centre Uganda logo"
              width={420}
              height={120}
              className="h-16 w-auto object-contain rounded-md"
            />
          </Link>
          <p className="text-[#F8FAEE]/70 font-light leading-relaxed mb-6">
            Empowering lives and inspiring hope through education, community building, and charitable outreach.
          </p>
          <Link href="/donate" className="inline-flex items-center gap-2 text-[#CFE36E] hover:text-[#F8FAEE] font-medium transition-colors">
            Support Our Mission <HeartHandshake size={18} />
          </Link>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-xl text-[#CFE36E] mb-6">Navigation</h4>
          <ul className="flex flex-col gap-4 font-light text-[#F8FAEE]/80">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/programs" className="hover:text-white transition-colors">Our Programs</Link></li>
            <li><Link href="/team" className="hover:text-white transition-colors">Meet Our Team</Link></li>
            <li><Link href="/children-profiles" className="hover:text-white transition-colors">Children Profiles</Link></li>
            <li><Link href="/impact" className="hover:text-white transition-colors">Impact Stories</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-serif text-xl text-[#CFE36E] mb-6">Contact Us</h4>
          <ul className="flex flex-col gap-4 font-light text-[#F8FAEE]/80">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-[#C5352F] mt-1 shrink-0" />
              <span>Kampala, Uganda<br/>P.O. Box 12345</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-[#C5352F] shrink-0" />
              <span>+256 700 000 000</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-[#C5352F] shrink-0" />
              <span>hello@blesstobless.org</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-serif text-xl text-[#CFE36E] mb-6">Newsletter</h4>
          <p className="text-[#F8FAEE]/70 font-light mb-4">
            Subscribe to receive updates on our programs and impact.
          </p>
          <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-3 rounded-md bg-[#5B7330]/30 border border-[#5B7330] focus:outline-none focus:border-[#CFE36E] text-[#F8FAEE] placeholder-[#F8FAEE]/40 transition-colors"
            />
            <button className="px-4 py-3 bg-[#C5352F] hover:bg-[#8F241F] text-white rounded-md font-medium transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 border-t border-[#5B7330]/30 flex flex-col md:flex-row justify-between items-center text-[#F8FAEE]/50 text-sm font-light">
        <p>&copy; {new Date().getFullYear()} Bless to Bless Rehabilitation Center. All rights reserved.</p>
        <div className="flex items-center gap-6 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
