"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, HeartHandshake, BookOpen, Users, Globe2, ChevronDown, HandCoins, Handshake, Mail, MessageSquareText, BriefcaseBusiness, Clapperboard } from "lucide-react";
import Link from "next/link";
import TextReveal from "@/components/TextReveal";

// Animation Variants
const fadeInUp: Variants = {
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
    <main className="min-h-screen pt-20 overflow-x-hidden selection:bg-[#C5352F]/20 selection:text-[#C5352F]">
      
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
            className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-[#E7F0B8]/60 mix-blend-multiply blur-[100px]" 
          />
          <motion.div 
            animate={{ 
              rotate: [0, -4, 4, 0],
              scale: [1, 0.95, 1.05, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#CFE36E]/60 mix-blend-multiply blur-[120px]" 
          />
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative block max-w-6xl mx-auto w-full z-10"
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="inline-block py-1 px-3 rounded-full border border-[#B7D74A] bg-[#F8FAEE]/80 text-[#5B6E27] text-sm font-medium tracking-wide uppercase kinetic-label">
              Bless to Bless Rehabilitation Center
            </span>
          </motion.div>

          <motion.div variants={fadeInUp} className="mb-8">
            <TextReveal
              as="h1"
              text="Empowering Lives."
              className="text-6xl sm:text-7xl lg:text-8xl xl:text-[7.5rem] font-serif tracking-tight leading-[0.95] text-[#202612]"
            />
            <TextReveal
              as="h1"
              text="Inspiring Hope."
              delay={0.2}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-[6rem] font-serif italic font-light tracking-tight leading-[1] text-[#C5352F] opacity-90"
            />
          </motion.div>

          <motion.div variants={fadeInUp} className="max-w-2xl">
            <p className="text-lg sm:text-xl text-[#202612]/70 font-light mb-10 leading-relaxed">
              Serving Buyala with compassion and purpose.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-5 items-start">
            <Link href="/donate" className="group relative px-8 py-4 bg-[#C5352F] text-[#F8FAEE] rounded-full overflow-hidden transition-all hover:shadow-xl hover:shadow-[#C5352F]/20 hover:-translate-y-1">
              <div className="absolute inset-0 bg-[#32431B] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-out" />
              <span className="relative flex items-center justify-center gap-2 font-medium tracking-wide">
                Donate Now <HeartHandshake size={18} className="group-hover:scale-110 transition-transform duration-300" />
              </span>
            </Link>
            
            <Link href="/programs" className="group flex items-center gap-3 px-8 py-4 text-[#202612] font-medium hover:text-[#C5352F] transition-colors">
              Discover Our Programs 
              <div className="w-8 h-8 rounded-full border border-[#B7D74A] flex items-center justify-center group-hover:border-[#C5352F] transition-colors">
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
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#202612]/40"
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

      {/* 2. PRIMARY ACTIONS SECTION */}
      <section className="py-24 bg-[#EFE8D8] relative z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-[#202612] mb-4 kinetic-label">Take Action Today</h2>
            <p className="text-[#202612]/70 max-w-3xl text-lg font-light leading-relaxed">
              Join our mission through giving, partnership, communication, and media engagement. Every action strengthens our impact in Buyala.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Donate Now",
                desc: "Give one-time or recurring support: daily, weekly, monthly, or yearly.",
                href: "/get-involved#donate",
                cta: "Start Giving",
                icon: HandCoins,
              },
              {
                title: "Become a Partner",
                desc: "Partner with us as an individual, church, NGO, or business.",
                href: "/get-involved#partner",
                cta: "Partner With Us",
                icon: Handshake,
              },
              {
                title: "Subscribe to Newsletter",
                desc: "Receive updates, stories, and progress from our ongoing work.",
                href: "/contact",
                cta: "Subscribe",
                icon: Mail,
              },
              {
                title: "Get in Contact",
                desc: "Reach out for collaboration, support questions, or ministry inquiries.",
                href: "/contact",
                cta: "Contact Us",
                icon: MessageSquareText,
              },
              {
                title: "Sponsor a Project",
                desc: "Engage directly in a project through sponsorship, volunteering, or donation.",
                href: "/get-involved#sponsor",
                cta: "View Opportunities",
                icon: BriefcaseBusiness,
              },
              {
                title: "See Media & Videos",
                desc: "Follow social updates and video clips to witness impact on the ground.",
                href: "/media",
                cta: "Explore Media",
                icon: Clapperboard,
              },
            ].map((action, idx) => {
              const Icon = action.icon;
              return (
                <motion.div
                  key={action.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: idx * 0.06, duration: 0.5 }}
                  className="bg-[#F8FAEE] rounded-3xl p-7 border border-[#DDE8B0] shadow-sm"
                >
                  <div className="w-12 h-12 rounded-full bg-[#E7F0B8] text-[#5B6E27] flex items-center justify-center mb-4">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-2xl font-serif text-[#202612] mb-2">{action.title}</h3>
                  <p className="text-[#202612]/70 font-light mb-5 leading-relaxed">{action.desc}</p>
                  <Link
                    href={action.href}
                    className="inline-flex items-center gap-2 text-[#C5352F] hover:text-[#8F241F] font-medium transition-colors"
                  >
                    {action.cta} <ArrowRight size={16} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. IMPACT STATISTICS SECTION */}
      <section className="py-24 bg-[#1F2C12] text-[#F8FAEE] relative z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#5B7330]/40"
          >
            {/* Stat 1 */}
            <motion.div variants={fadeInUp} className="py-10 md:py-0 md:pr-12 md:pl-0 flex flex-col items-start">
              <BookOpen className="w-10 h-10 text-[#B7D74A] mb-6 opacity-90" />
              <h3 className="text-5xl lg:text-6xl font-serif mb-3">5,000<span className="text-[#B7D74A]">+</span></h3>
              <p className="text-[#F8FAEE]/70 font-light tracking-wide text-lg">Students Educated</p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div variants={fadeInUp} className="py-10 md:py-0 md:px-12 flex flex-col items-start">
              <Users className="w-10 h-10 text-[#CFE36E] mb-6 opacity-90" />
              <h3 className="text-5xl lg:text-6xl font-serif mb-3">10k<span className="text-[#CFE36E]">+</span></h3>
              <p className="text-[#F8FAEE]/70 font-light tracking-wide text-lg">Lives Empowered</p>
            </motion.div>

            {/* Stat 3 */}
            <motion.div variants={fadeInUp} className="py-10 md:py-0 md:pl-12 flex flex-col items-start">
              <Globe2 className="w-10 h-10 text-[#E7F0B8] mb-6 opacity-90" />
              <h3 className="text-5xl lg:text-6xl font-serif mb-3">30<span className="text-[#E7F0B8]">+</span></h3>
              <p className="text-[#F8FAEE]/70 font-light tracking-wide text-lg">Outreach Programs</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. PROGRAMS HIGHLIGHT SECTION (Editorial Style) */}
      <section className="py-32 relative bg-[#F8FAEE]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
          >
            <div>
              <h2 className="text-4xl md:text-6xl font-serif tracking-tight text-[#202612] mb-4">
                Our Core Initiatives
              </h2>
              <p className="text-[#202612]/70 max-w-md text-lg font-light">
                Creating sustainable change through targeted programs designed to uplift and equip individuals.
              </p>
            </div>
            <Link href="/programs" className="text-[#C5352F] font-medium hover:text-[#8F241F] flex items-center gap-2 pb-2">
              View All Initiatives <ArrowRight size={18} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: "School Outreach",
                desc: "Providing scholastic materials, mentorship sessions, and practical support for learners and schools.",
                route: "/programs",
                color: "bg-[#E7F0B8]"
              },
              {
                title: "Girls' Ministry",
                desc: "Building confidence and purpose through mentorship, discipleship, and life-skills support.",
                route: "/programs",
                color: "bg-[#CFE36E]"
              },
              {
                title: "Ex-Prisoners Program",
                desc: "Helping former prisoners reintegrate through counseling, skills training, and practical support.",
                route: "/programs",
                color: "bg-[#D7E6A4]"
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
                  <div className="absolute inset-0 bg-[#202612]/5 group-hover:bg-transparent transition-colors duration-500" />
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="w-12 h-12 rounded-full bg-[#F8FAEE] flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 drop-shadow-xl">
                      <ArrowRight size={20} className="text-[#202612]" />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-serif text-[#202612] mb-3">{program.title}</h3>
                <p className="text-[#202612]/70 font-light leading-relaxed">{program.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DONATION CTA SECTION */}
      <section className="py-24 bg-[#CFE36E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif text-[#202612] mb-6">
              Your generosity <span className="italic text-[#C5352F]">creates miracles.</span>
            </h2>
            <p className="text-xl text-[#202612]/80 font-light mb-10 max-w-2xl mx-auto">
              Every donation goes directly towards putting a child in school, feeding a family, and providing essential crisis relief.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/donate" className="px-8 py-4 bg-[#202612] text-[#F8FAEE] rounded-full font-medium hover:bg-[#32431B] transition-colors shadow-lg">
                Make a Donation
              </Link>
              <Link href="/get-involved" className="px-8 py-4 bg-transparent border border-[#202612] text-[#202612] rounded-full font-medium hover:bg-[#202612] hover:text-[#F8FAEE] transition-colors">
                Become a Volunteer
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}

