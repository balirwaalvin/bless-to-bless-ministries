"use client";

import { motion } from "framer-motion";
import TextReveal from "@/components/TextReveal";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

function XIcon({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M18.9 2H21l-7.3 8.38L22 22h-6.7l-5.2-6.44L4.5 22H2.4l7.8-8.95L2 2h6.9l4.7 5.84L18.9 2zm-1.17 18h1.86L7.93 3.94H5.94L17.73 20z" />
    </svg>
  );
}

const socialPlatforms = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61569218362710",
    icon: Facebook,
    bg: "bg-[#E7F0B8]",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@blessedtoblessuganda?si=2AHa05UZoGMqvDip",
    icon: Youtube,
    bg: "bg-[#D7E6A4]",
  },
  {
    name: "X",
    href: "https://x.com/B2BRehab",
    icon: XIcon,
    bg: "bg-[#CFE36E]",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/blessedto-blessug-a83631403",
    icon: Linkedin,
    bg: "bg-[#E7F0B8]",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/blessedtoblessug/",
    icon: Instagram,
    bg: "bg-[#D7E6A4]",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#F8FAEE]">
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <TextReveal
            as="h1"
            text="Our Gallery"
            className="text-5xl md:text-7xl font-serif text-[#202612] mb-4"
          />
          <TextReveal
            as="p"
            text="Glimpses of hope, progress, and joy from our missions around the world."
            delay={0.25}
            className="text-xl text-[#202612]/70 font-light max-w-2xl mx-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 text-[#5B6E27] text-sm uppercase tracking-[0.2em] orbital-float"
        >
          Stories In Motion
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {[...Array(12)].map((_, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 4) * 0.1, duration: 0.5 }}
              className={`rounded-2xl overflow-hidden bg-[#D7E6A4] relative group ${idx % 7 === 0 ? 'col-span-2 row-span-2' : 'aspect-square'}`}
            >
              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-[#202612]/10 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#1F2C12]/40 backdrop-blur-sm">
                <span className="text-[#F8FAEE] font-medium tracking-wide uppercase text-sm border border-[#F8FAEE] px-4 py-2 rounded-full">View</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] bg-white border border-[#DDE8B0] p-8 md:p-10"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-[#202612] mb-3">Follow Our Social Presence</h2>
          <p className="text-[#202612]/70 font-light mb-8 max-w-3xl">
            Stay connected for real-time updates, impact stories, videos, and ministry highlights.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {socialPlatforms.map((social, idx) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06, duration: 0.4 }}
                  aria-label={`Visit our ${social.name} page`}
                  className={`rounded-2xl ${social.bg} border border-[#B7D74A] p-5 hover:border-[#C5352F] transition-colors group flex items-center justify-center aspect-square`}
                >
                  <div className="w-12 h-12 rounded-full bg-white/70 flex items-center justify-center text-[#32431B] group-hover:text-[#C5352F] transition-colors">
                    <Icon size={20} />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
