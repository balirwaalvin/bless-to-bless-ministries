"use client";

import { motion } from "framer-motion";
import { HeartHandshake, UserPlus, HandCoins } from "lucide-react";

export default function GetInvolvedPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#F5F2E9]">
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-serif text-[#2E2A25] mb-6">
            Join the <span className="italic text-[#944C42]">Movement</span>
          </h1>
          <p className="text-xl text-[#2E2A25]/70 font-light leading-relaxed">
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
            className="bg-[#2B362E] text-[#F5F2E9] p-10 rounded-[2rem] flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 rounded-full bg-[#3C4A3E] flex items-center justify-center mb-8">
              <HandCoins size={36} className="text-[#E3C8B7]" />
            </div>
            <h3 className="text-3xl font-serif mb-4">Donate</h3>
            <p className="font-light text-[#F5F2E9]/70 mb-8 flex-grow">
              Your financial support directly fuels our education and basic needs programs on the ground.
            </p>
            <button className="w-full py-4 bg-[#944C42] hover:bg-[#7A3E35] rounded-xl font-medium transition-colors">
              Give Today
            </button>
          </motion.div>

          {/* Volunteer */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#E5DFCC] text-[#2E2A25] p-10 rounded-[2rem] flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 rounded-full bg-[#D5CAA4] flex items-center justify-center mb-8">
              <UserPlus size={36} className="text-[#7A643E]" />
            </div>
            <h3 className="text-3xl font-serif mb-4">Volunteer</h3>
            <p className="font-light text-[#2E2A25]/70 mb-8 flex-grow">
              Join us on the ground or digitally. We are always looking for passionate individuals to serve.
            </p>
            <button className="w-full py-4 bg-[#2E2A25] text-[#F5F2E9] hover:bg-[#3C4A3E] rounded-xl font-medium transition-colors">
              Apply to Volunteer
            </button>
          </motion.div>

          {/* Partner */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#E3C8B7] text-[#2E2A25] p-10 rounded-[2rem] flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 rounded-full bg-[#D4A385] flex items-center justify-center mb-8">
              <HeartHandshake size={36} className="text-[#944C42]" />
            </div>
            <h3 className="text-3xl font-serif mb-4">Partner</h3>
            <p className="font-light text-[#2E2A25]/70 mb-8 flex-grow">
              Are you a church, corporation, or community group? Let&apos;s amplify our impact together.
            </p>
            <button className="w-full py-4 border border-[#2E2A25] hover:bg-[#2E2A25] hover:text-[#F5F2E9] rounded-xl font-medium transition-colors">
              Become a Partner
            </button>
          </motion.div>

        </div>
      </section>
    </main>
  );
}
