"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import TextReveal from "@/components/TextReveal";
import { Facebook, Instagram, Linkedin, Youtube, X } from "lucide-react";

function XIcon({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M18.9 2H21l-7.3 8.38L22 22h-6.7l-5.2-6.44L4.5 22H2.4l7.8-8.95L2 2h6.9l4.7 5.84L18.9 2zm-1.17 18h1.86L7.93 3.94H5.94L17.73 20z" />
    </svg>
  );
}

const galleryImages = [
  "https://fra.cloud.appwrite.io/v1/storage/buckets/69e0ef48000b84bb12f1/files/69e0fb8a000b1fcf7fd1/preview?project=697cce240018e094963c&output=webp",
  "https://fra.cloud.appwrite.io/v1/storage/buckets/69e0ef48000b84bb12f1/files/69e0fb8a000b15c25507/preview?project=697cce240018e094963c&output=webp",
  "https://fra.cloud.appwrite.io/v1/storage/buckets/69e0ef48000b84bb12f1/files/69e0fb8a000b14c11e96/preview?project=697cce240018e094963c&output=webp",
  "https://fra.cloud.appwrite.io/v1/storage/buckets/69e0ef48000b84bb12f1/files/69e0fb8a000b00d14b1f/preview?project=697cce240018e094963c&output=webp",
  "https://fra.cloud.appwrite.io/v1/storage/buckets/69e0ef48000b84bb12f1/files/69e0fb8a000b1d43ca22/preview?project=697cce240018e094963c&output=webp",
  "https://fra.cloud.appwrite.io/v1/storage/buckets/69e0ef48000b84bb12f1/files/69e0fb8a000b1995ce91/preview?project=697cce240018e094963c&output=webp",
  "https://fra.cloud.appwrite.io/v1/storage/buckets/69e0ef48000b84bb12f1/files/69e0fb8a000b1998ef5d/preview?project=697cce240018e094963c&output=webp",
  "https://fra.cloud.appwrite.io/v1/storage/buckets/69e0ef48000b84bb12f1/files/69e49a1b000c69db647c/preview?project=697cce240018e094963c&output=webp",
  "https://fra.cloud.appwrite.io/v1/storage/buckets/69e0ef48000b84bb12f1/files/69e49a1b000c697644d1/preview?project=697cce240018e094963c&output=webp",
  "https://fra.cloud.appwrite.io/v1/storage/buckets/69e0ef48000b84bb12f1/files/69e49a1b000c63c52cf9/preview?project=697cce240018e094963c&output=webp",
  "https://fra.cloud.appwrite.io/v1/storage/buckets/69e0ef48000b84bb12f1/files/69e49a1b000c67cd1301/preview?project=697cce240018e094963c&output=webp",
  "https://fra.cloud.appwrite.io/v1/storage/buckets/69e0ef48000b84bb12f1/files/69e49a1b000c67142854/preview?project=697cce240018e094963c&output=webp"
];

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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
          {galleryImages.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 4) * 0.1, duration: 0.5 }}
              className={`rounded-2xl overflow-hidden bg-[#D7E6A4] relative group shadow-sm ${idx % 7 === 0 ? 'col-span-2 row-span-2' : 'aspect-square'}`}
            >
              <Image 
                src={src} 
                alt={`Gallery image ${idx + 1}`} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                unoptimized
              />
              
              <div className="absolute inset-0 bg-[#202612]/20 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#1F2C12]/40 backdrop-blur-sm">
                <button 
                  onClick={() => setSelectedImage(src.replace('preview', 'view'))}
                  className="text-[#F8FAEE] font-medium tracking-wide uppercase text-sm border border-[#F8FAEE] px-4 py-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  View
                </button>
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

      {/* Lightbox / Modal for enlarged image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full h-full max-w-6xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent clicks inside image from closing
            >
              <Image
                src={selectedImage}
                alt="Enlarged gallery image"
                fill
                className="object-contain"
                unoptimized
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full backdrop-blur-md transition-colors"
                aria-label="Close image"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
