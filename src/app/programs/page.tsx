"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Globe2, ArrowRight } from "lucide-react";
import Link from "next/link";

const programs = [
  {
    id: "education",
    title: "Education Programs",
    icon: BookOpen,
    color: "bg-[#E5DFCC]",
    textColor: "text-[#7A643E]",
    description: "We believe education is the most powerful weapon to change the world. Our educational initiatives provide scholarships, school supplies, and infrastructure development to schools in underprivileged areas.",
    stats: ["5,000+ Students Sponsored", "12 Schools Built", "50+ Teachers Trained"]
  },
  {
    id: "empowerment",
    title: "Community Empowerment",
    icon: Users,
    color: "bg-[#E3C8B7]",
    textColor: "text-[#944C42]",
    description: "Empowering adults translates to empowered families. We offer vocational training, micro-finance opportunities, and sustainable agricultural education to help communities become self-reliant.",
    stats: ["1,200 Businesses Funded", "3,000+ Vocationally Trained", "15 Co-ops Established"]
  },
  {
    id: "outreach",
    title: "Charity Outreach",
    icon: Globe2,
    color: "bg-[#D1D5CD]",
    textColor: "text-[#3C4A3E]",
    description: "During times of crisis, we are on the ground. Our charity outreach provides immediate relief, including food distribution, clean water access, and emergency medical camps.",
    stats: ["100k+ Meals Distributed", "25 Clean Water Wells", "40 Medical Camps"]
  }
];

export default function ProgramsPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#F5F2E9]">
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-serif text-[#2E2A25] mb-6">
            Our <span className="italic text-[#944C42]">Programs</span>
          </h1>
          <p className="text-xl text-[#2E2A25]/70 font-light leading-relaxed">
            Targeted initiatives designed to break the cycle of poverty and bring holistic transformation to communities in need.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 space-y-24">
        {programs.map((program, idx) => (
          <motion.div 
            key={program.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
          >
            {/* Visual Box */}
            <div className={`w-full md:w-1/2 aspect-square md:aspect-[4/3] rounded-[2rem] ${program.color} relative overflow-hidden flex items-center justify-center p-12`}>
               <program.icon className={`w-32 h-32 ${program.textColor} opacity-20 absolute`} />
               <div className="relative z-10 text-center">
                 <p className="text-[#2E2A25] font-serif text-2xl mb-4 italic">Spotlight</p>
                 <span className="text-[#2E2A25]/50 text-sm tracking-widest uppercase">Image Placeholder</span>
               </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-full ${program.color} flex items-center justify-center`}>
                  <program.icon className={program.textColor} size={24} />
                </div>
                <h2 className="text-4xl font-serif text-[#2E2A25]">{program.title}</h2>
              </div>
              
              <p className="text-lg text-[#2E2A25]/70 font-light leading-relaxed mb-8">
                {program.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {program.stats.map((stat, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-2 text-[#2E2A25]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#944C42]" />
                    <span className="font-light">{stat}</span>
                  </div>
                ))}
              </div>

              <Link 
                href="/donate" 
                className="inline-flex items-center gap-2 text-[#944C42] font-medium border-b border-[#944C42] pb-1 hover:text-[#7A3E35] hover:border-[#7A3E35] transition-colors"
              >
                Support this program <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
