"use client";

import { motion } from "framer-motion";

export default function GalleryPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#F5F2E9]">
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-serif text-[#2E2A25] mb-4">
            Our <span className="italic text-[#944C42]">Gallery</span>
          </h1>
          <p className="text-xl text-[#2E2A25]/70 font-light max-w-2xl mx-auto">
            Glimpses of hope, progress, and joy from our missions around the world.
          </p>
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
              className={`rounded-2xl overflow-hidden bg-[#D1D5CD] relative group ${idx % 7 === 0 ? 'col-span-2 row-span-2' : 'aspect-square'}`}
            >
              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-[#2E2A25]/10 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#2B362E]/40 backdrop-blur-sm">
                <span className="text-[#F5F2E9] font-medium tracking-wide uppercase text-sm border border-[#F5F2E9] px-4 py-2 rounded-full">View</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
