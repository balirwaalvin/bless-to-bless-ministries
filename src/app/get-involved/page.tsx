"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HeartHandshake, UserPlus, HandCoins } from "lucide-react";

export default function GetInvolvedPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#F8FAEE]">
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-serif text-[#202612] mb-6">
            Join the <span className="italic text-[#C5352F]">Movement</span>
          </h1>
          <p className="text-xl text-[#202612]/70 font-light leading-relaxed">
            There are many ways to make a difference. Whether through your time, your voice, or your financial support, every contribution creates a ripple effect of hope.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Donate */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#1F2C12] text-[#F8FAEE] p-10 rounded-[2rem] flex flex-col items-center text-center"
            id="donate"
          >
            <div className="w-20 h-20 rounded-full bg-[#32431B] flex items-center justify-center mb-8">
              <HandCoins size={36} className="text-[#CFE36E]" />
            </div>
            <h3 className="text-3xl font-serif mb-4">Donate</h3>
            <p className="font-light text-[#F8FAEE]/70 mb-8 flex-grow">
              Your financial support directly fuels our education and basic needs programs on the ground.
            </p>
            <Link href="/contact" className="w-full py-4 bg-[#C5352F] hover:bg-[#8F241F] rounded-xl font-medium transition-colors">
              Give Today
            </Link>
          </motion.div>

          {/* Volunteer */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#E7F0B8] text-[#202612] p-10 rounded-[2rem] flex flex-col items-center text-center"
            id="sponsor"
          >
            <div className="w-20 h-20 rounded-full bg-[#B7D74A] flex items-center justify-center mb-8">
              <UserPlus size={36} className="text-[#5B6E27]" />
            </div>
            <h3 className="text-3xl font-serif mb-4">Volunteer & Sponsor</h3>
            <p className="font-light text-[#202612]/70 mb-8 flex-grow">
              Join us on the ground or sponsor a focused initiative to expand our impact.
            </p>
            <Link href="/contact" className="w-full py-4 bg-[#202612] text-[#F8FAEE] hover:bg-[#32431B] rounded-xl font-medium transition-colors">
              Sponsor or Volunteer
            </Link>
          </motion.div>

          {/* Partner */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#CFE36E] text-[#202612] p-10 rounded-[2rem] flex flex-col items-center text-center"
            id="partner"
          >
            <div className="w-20 h-20 rounded-full bg-[#B8D75A] flex items-center justify-center mb-8">
              <HeartHandshake size={36} className="text-[#C5352F]" />
            </div>
            <h3 className="text-3xl font-serif mb-4">Partner</h3>
            <p className="font-light text-[#202612]/70 mb-8 flex-grow">
              Are you a church, corporation, or community group? Let&apos;s amplify our impact together.
            </p>
            <Link href="/contact" className="w-full py-4 border border-[#202612] hover:bg-[#202612] hover:text-[#F8FAEE] rounded-xl font-medium transition-colors">
              Become a Partner
            </Link>
          </motion.div>

        </div>
      </section>
    </main>
  );
}
