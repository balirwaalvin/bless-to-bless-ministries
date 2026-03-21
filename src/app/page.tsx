"use client";

import { motion } from "framer-motion";
import { ArrowRight, HeartHandshake, BookOpen, Users, Globe2, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <main className="min-h-screen pt-20 overflow-x-hidden selection:bg-[#944C42]/20 selection:text-[#944C42]">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 lg:px-12 overflow-hidden">
        {/* Subtle animated background shapes to avoid 'AI look' */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div 
            animate={{ 
              rotate: [0, 4, -4, 0],
              scale: [1, 1.05, 0.95, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-[#E5DFCC]/60 mix-blend-multiply blur-[100px]" 
          />
          <motion.div 
            animate={{ 
              rotate: [0, -4, 4, 0],
              scale: [1, 0.95, 1.05, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#E3C8B7]/60 mix-blend-multiply blur-[120px]" 
          />
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative block max-w-6xl mx-auto w-full z-10"
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="inline-block py-1 px-3 rounded-full border border-[#D5CAA4] bg-[#F5F2E9]/80 text-[#7A643E] text-sm font-medium tracking-wide uppercase">
              Bless to Bless Ministries
            </span>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-6xl sm:text-7xl lg:text-8xl xl:text-[7.5rem] font-serif tracking-tight leading-[0.95] text-[#2E2A25] mb-8"
          >
            Empowering Lives. <br />
            <span className="text-[#944C42] italic font-light opacity-90">Inspiring Hope.</span>
          </motion.h1>

          <motion.div variants={fadeInUp} className="max-w-2xl">
            <p className="text-lg sm:text-xl text-[#2E2A25]/70 font-light mb-10 leading-relaxed">
              We are dedicated to education, community empowerment, and charitable outreach—transforming communities through faith, action, and love.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-5 items-start">
            <Link href="/donate" className="group relative px-8 py-4 bg-[#944C42] text-[#F5F2E9] rounded-full overflow-hidden transition-all hover:shadow-xl hover:shadow-[#944C42]/20 hover:-translate-y-1">
              <div className="absolute inset-0 bg-[#3C4A3E] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-out" />
              <span className="relative flex items-center justify-center gap-2 font-medium tracking-wide">
                Donate Now <HeartHandshake size={18} className="group-hover:scale-110 transition-transform duration-300" />
              </span>
            </Link>
            
            <Link href="/programs" className="group flex items-center gap-3 px-8 py-4 text-[#2E2A25] font-medium hover:text-[#944C42] transition-colors">
              Discover Our Programs 
              <div className="w-8 h-8 rounded-full border border-[#D5CAA4] flex items-center justify-center group-hover:border-[#944C42] transition-colors">
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#2E2A25]/40"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div 
            animate={{ y: [0, 5, 0] }} 
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>
      </section>

      {/* 2. IMPACT STATISTICS SECTION */}
      <section className="py-24 bg-[#2B362E] text-[#F5F2E9] relative z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#4A5D4E]/40"
          >
            {/* Stat 1 */}
            <motion.div variants={fadeInUp} className="py-10 md:py-0 md:pr-12 md:pl-0 flex flex-col items-start">
              <BookOpen className="w-10 h-10 text-[#D5CAA4] mb-6 opacity-90" />
              <h3 className="text-5xl lg:text-6xl font-serif mb-3">5,000<span className="text-[#D5CAA4]">+</span></h3>
              <p className="text-[#F5F2E9]/70 font-light tracking-wide text-lg">Students Educated</p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div variants={fadeInUp} className="py-10 md:py-0 md:px-12 flex flex-col items-start">
              <Users className="w-10 h-10 text-[#E3C8B7] mb-6 opacity-90" />
              <h3 className="text-5xl lg:text-6xl font-serif mb-3">10k<span className="text-[#E3C8B7]">+</span></h3>
              <p className="text-[#F5F2E9]/70 font-light tracking-wide text-lg">Lives Empowered</p>
            </motion.div>

            {/* Stat 3 */}
            <motion.div variants={fadeInUp} className="py-10 md:py-0 md:pl-12 flex flex-col items-start">
              <Globe2 className="w-10 h-10 text-[#E5DFCC] mb-6 opacity-90" />
              <h3 className="text-5xl lg:text-6xl font-serif mb-3">30<span className="text-[#E5DFCC]">+</span></h3>
              <p className="text-[#F5F2E9]/70 font-light tracking-wide text-lg">Outreach Programs</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. PROGRAMS HIGHLIGHT SECTION (Editorial Style) */}
      <section className="py-32 relative bg-[#F5F2E9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
          >
            <div>
              <h2 className="text-4xl md:text-6xl font-serif tracking-tight text-[#2E2A25] mb-4">
                Our Core Initiatives
              </h2>
              <p className="text-[#2E2A25]/70 max-w-md text-lg font-light">
                Creating sustainable change through targeted programs designed to uplift and equip individuals.
              </p>
            </div>
            <Link href="/programs" className="text-[#944C42] font-medium hover:text-[#7A3E35] flex items-center gap-2 pb-2">
              View All Initiatives <ArrowRight size={18} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: "Education Programs",
                desc: "Providing scholarships, schooling materials, and modern learning facilities for underprivileged children.",
                route: "/programs/education",
                color: "bg-[#E5DFCC]"
              },
              {
                title: "Community Empowerment",
                desc: "Skill training and micro-finance initiatives helping families build sustainable livelihoods.",
                route: "/programs/empowerment",
                color: "bg-[#E3C8B7]"
              },
              {
                title: "Charity Outreach",
                desc: "Direct aid, food distribution, and medical assistance for those in urgent need.",
                route: "/programs/outreach",
                color: "bg-[#D1D5CD]"
              }
            ].map((program, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className="group cursor-pointer"
              >
                <div className={`aspect-[4/5] w-full rounded-[2rem] ${program.color} mb-6 overflow-hidden relative shadow-sm`}>
                  {/* Placeholder for real images. Using solid colors as fallback for now to avoid generic AI imagery */}
                  <div className="absolute inset-0 bg-[#2E2A25]/5 group-hover:bg-transparent transition-colors duration-500" />
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="w-12 h-12 rounded-full bg-[#F5F2E9] flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 drop-shadow-xl">
                      <ArrowRight size={20} className="text-[#2E2A25]" />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-serif text-[#2E2A25] mb-3">{program.title}</h3>
                <p className="text-[#2E2A25]/70 font-light leading-relaxed">{program.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DONATION CTA SECTION */}
      <section className="py-24 bg-[#E3C8B7] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif text-[#2E2A25] mb-6">
              Your generosity <span className="italic text-[#944C42]">creates miracles.</span>
            </h2>
            <p className="text-xl text-[#2E2A25]/80 font-light mb-10 max-w-2xl mx-auto">
              Every donation goes directly towards putting a child in school, feeding a family, and providing essential crisis relief.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/donate" className="px-8 py-4 bg-[#2E2A25] text-[#F5F2E9] rounded-full font-medium hover:bg-[#3C4A3E] transition-colors shadow-lg">
                Make a Donation
              </Link>
              <Link href="/get-involved" className="px-8 py-4 bg-transparent border border-[#2E2A25] text-[#2E2A25] rounded-full font-medium hover:bg-[#2E2A25] hover:text-[#F5F2E9] transition-colors">
                Become a Volunteer
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}

