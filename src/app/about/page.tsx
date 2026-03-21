"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#F5F2E9]">
      
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl"
        >
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-serif text-[#2E2A25] mb-6">
            Our <span className="italic text-[#944C42]">Story</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-[#2E2A25]/70 font-light leading-relaxed">
            Founded on the principles of compassion and active faith, Bless to Bless Ministries began with a simple mission: to bridge the gap between those who want to help and those who desperately need it.
          </motion.p>
        </motion.div>
      </section>

      {/* Mission & Vision Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-32">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#E5DFCC] p-12 rounded-[2rem]"
          >
            <h3 className="text-3xl font-serif text-[#2E2A25] mb-4">Our Mission</h3>
            <p className="text-[#2E2A25]/80 font-light leading-relaxed">
              To empower underprivileged communities through sustainable education, provide vital resources to families in need, and showcase God&apos;s love through actionable charity and outreach programs.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#2B362E] p-12 rounded-[2rem] text-[#F5F2E9]"
          >
            <h3 className="text-3xl font-serif text-[#E3C8B7] mb-4">Our Vision</h3>
            <p className="text-[#F5F2E9]/80 font-light leading-relaxed">
              A world where every child has access to quality education, communities are self-sustaining, and hope is restored to the most vulnerable populations across the globe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Timeline placeholder */}
      <section className="bg-[#EAE5D9] py-24 mb-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-serif text-[#2E2A25] mb-8">Our Journey</h2>
          <div className="space-y-12 text-left">
            {[
              { year: "2015", text: "Founded by a small group of volunteers distributing food." },
              { year: "2018", text: "Launched our first official Education Scholarship Program." },
              { year: "2022", text: "Expanded to multiple regions, impacting over 5,000 lives." },
              { year: "Today", text: "Continuing to grow our global footprint of compassion." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex gap-6 items-start"
              >
                <div className="font-serif text-2xl text-[#944C42] w-24 shrink-0">{item.year}</div>
                <div className="text-lg text-[#2E2A25]/80 font-light pt-1">{item.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2E2A25] mb-4">Leadership Team</h2>
          <p className="text-[#2E2A25]/70 font-light">Guided by faith and driven by purpose.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="aspect-square bg-[#D1D5CD] rounded-[2rem] mb-6 overflow-hidden relative">
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-[#2E2A25]/5 mix-blend-multiply" />
              </div>
              <h4 className="text-2xl font-serif text-[#2E2A25]">Jane Doe</h4>
              <p className="text-[#944C42] font-medium text-sm tracking-wide uppercase mb-2">Executive Director</p>
              <p className="text-[#2E2A25]/70 font-light leading-relaxed">
                Dedicated to expanding community outreach and securing sustainable partnerships.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}
