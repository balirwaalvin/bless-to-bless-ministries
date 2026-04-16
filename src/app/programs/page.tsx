"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, GraduationCap, School, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";

const programs = [
  {
    id: "school-outreach",
    title: "School Outreach",
    icon: School,
    color: "bg-[#E7F0B8]",
    textColor: "text-[#5B6E27]",
    description: "We partner with schools to provide scholastic materials, mentorship visits, and life-skills sessions that keep learners motivated and in class.",
    stats: ["35 Partner Schools", "4,800+ Learners Reached", "120 School Visits"]
  },
  {
    id: "girls-ministry",
    title: "Girls' Ministry",
    icon: BookOpen,
    color: "bg-[#CFE36E]",
    textColor: "text-[#C5352F]",
    description: "A safe and faith-centered program that nurtures confidence, dignity, health awareness, and leadership in girls across different age groups.",
    stats: ["900+ Girls Mentored", "22 Mentorship Groups", "80 Care Kits Distributed"]
  },
  {
    id: "ex-prisoners-program",
    title: "Ex-Prisoners Program",
    icon: ShieldCheck,
    color: "bg-[#D7E6A4]",
    textColor: "text-[#32431B]",
    description: "We support reintegration through counseling, discipleship, employability training, and practical support as former prisoners rebuild their lives.",
    stats: ["260 Lives Restored", "140 Job Placements", "45 Small Businesses Started"]
  },
  {
    id: "leadership-development",
    title: "Leadership Development",
    icon: GraduationCap,
    color: "bg-[#D8D7E5]",
    textColor: "text-[#44436B]",
    description: "We equip youth and community leaders with communication, planning, and service-oriented leadership skills for long-term transformation.",
    stats: ["500+ Leaders Trained", "18 Leadership Cohorts", "60 Community Projects Led"]
  },
  {
    id: "community-empowerment",
    title: "Community Empowerment",
    icon: Users,
    color: "bg-[#DCE8DF]",
    textColor: "text-[#32431B]",
    description: "Families receive practical support through vocational training, savings groups, and economic empowerment pathways.",
    stats: ["1,200 Households Supported", "300 Start-up Grants", "15 Active Savings Groups"]
  }
];

export default function ProgramsPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#F8FAEE]">
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-serif text-[#202612] mb-6">
            Our <span className="italic text-[#C5352F]">Programs</span>
          </h1>
          <p className="text-xl text-[#202612]/70 font-light leading-relaxed">
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
                 <p className="text-[#202612] font-serif text-2xl mb-4 italic">Spotlight</p>
                 <span className="text-[#202612]/50 text-sm tracking-widest uppercase">Image Placeholder</span>
               </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-full ${program.color} flex items-center justify-center`}>
                  <program.icon className={program.textColor} size={24} />
                </div>
                <h2 className="text-4xl font-serif text-[#202612]">{program.title}</h2>
              </div>
              
              <p className="text-lg text-[#202612]/70 font-light leading-relaxed mb-8">
                {program.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {program.stats.map((stat, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-2 text-[#202612]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C5352F]" />
                    <span className="font-light">{stat}</span>
                  </div>
                ))}
              </div>

              <Link 
                href="/donate" 
                className="inline-flex items-center gap-2 text-[#C5352F] font-medium border-b border-[#C5352F] pb-1 hover:text-[#8F241F] hover:border-[#8F241F] transition-colors"
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
