"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, HeartHandshake, BookOpen, Users, Globe2, ChevronDown, HandCoins, Handshake, Mail, MessageSquareText, BriefcaseBusiness, Clapperboard } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import TextReveal from "@/components/TextReveal";
import { useTranslations } from "next-intl";

const heroImages = [
  "https://fra.cloud.appwrite.io/v1/storage/buckets/69e0ef48000b84bb12f1/files/69e0fb8a000b1fcf7fd1/preview?project=697cce240018e094963c&output=webp",
  "https://fra.cloud.appwrite.io/v1/storage/buckets/69e0ef48000b84bb12f1/files/69e0fb8a000b15c25507/preview?project=697cce240018e094963c&output=webp",
  "https://fra.cloud.appwrite.io/v1/storage/buckets/69e0ef48000b84bb12f1/files/69e0fb8a000b14c11e96/preview?project=697cce240018e094963c&output=webp",
  "https://fra.cloud.appwrite.io/v1/storage/buckets/69e0ef48000b84bb12f1/files/69e0fb8a000b00d14b1f/preview?project=697cce240018e094963c&output=webp",
  "https://fra.cloud.appwrite.io/v1/storage/buckets/69e0ef48000b84bb12f1/files/69e0fb8a000b1d43ca22/preview?project=697cce240018e094963c&output=webp",
  "https://fra.cloud.appwrite.io/v1/storage/buckets/69e0ef48000b84bb12f1/files/69e0fb8a000b1995ce91/preview?project=697cce240018e094963c&output=webp",
  "https://fra.cloud.appwrite.io/v1/storage/buckets/69e0ef48000b84bb12f1/files/69e0fb8a000b1998ef5d/preview?project=697cce240018e094963c&output=webp",
];

function HeroBackground() {
  // Repeat the images enough times so there's plenty of content to scroll seamlessly
  const repeatedPattern = [...heroImages, ...heroImages];
  const loopedImages = [...repeatedPattern, ...repeatedPattern];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#F8FAEE]">
      <motion.div
        aria-hidden="true"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-5%] flex h-[55%] w-max gap-4 opacity-90"
      >
        {loopedImages.map((src, index) => (
          <div key={`row1-${index}`} className="relative h-full w-[280px] sm:w-[350px] lg:w-[450px]">
            <Image
              src={src}
              alt=""
              fill
              sizes="(max-width: 640px) 280px, (max-width: 1024px) 350px, 450px"
              className="object-cover rounded-3xl"
              unoptimized
            />
          </div>
        ))}
      </motion.div>

      <motion.div
        aria-hidden="true"
        animate={{ x: ["-50%", "0%"] }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-5%] flex h-[55%] w-max gap-4 opacity-90"
      >
        {[...loopedImages].reverse().map((src, index) => (
          <div key={`row2-${index}`} className="relative h-full w-[280px] sm:w-[350px] lg:w-[450px]">
            <Image
              src={src}
              alt=""
              fill
              sizes="(max-width: 640px) 280px, (max-width: 1024px) 350px, 450px"
              className="object-cover rounded-3xl"
              unoptimized
            />
          </div>
        ))}
      </motion.div>

      {/* Much lighter Overlays without blur to ensure images are extremely clear */}
      <div className="absolute inset-0 bg-[#F8FAEE]/25 bg-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAEE]/10 via-[#F8FAEE]/40 to-[#F8FAEE] opacity-50" />
    </div>
  );
}

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
  const t = useTranslations("Home");
  return (
    <main className="min-h-screen pt-20 overflow-x-hidden selection:bg-[#C5352F]/20 selection:text-[#C5352F]">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center px-6 lg:px-12 overflow-hidden">
        {/* Subtle animated background shapes to avoid 'AI look' */}
        <HeroBackground />
        
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <motion.div 
            animate={{ 
              rotate: [0, 4, -4, 0],
              scale: [1, 1.05, 0.95, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-[#E7F0B8]/40 mix-blend-multiply blur-[100px]" 
          />
          <motion.div 
            animate={{ 
              rotate: [0, -4, 4, 0],
              scale: [1, 0.95, 1.05, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#CFE36E]/40 mix-blend-multiply blur-[120px]" 
          />
        </div>

        {/* Logo positioned at the very top edge with a blurred backdrop */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="absolute top-4 sm:top-8 left-1/2 -translate-x-1/2 z-20 rounded-full bg-white/15 backdrop-blur-xl border border-white/30 p-2.5 sm:p-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
        >
          <Image 
            src="/favicon.png" 
            alt="Blessed To Bless Logo" 
            width={120} 
            height={120} 
            className="w-20 h-20 sm:w-24 sm:h-24 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
            priority
          />
        </motion.div>

        <div className="relative z-10 w-full mx-auto flex flex-col items-center justify-center text-center pt-32 pb-20 lg:pt-40 lg:pb-32">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative flex flex-col items-center max-w-5xl"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <TextReveal
                as="h1"
                text={t('heroTitle1')}
                className="text-6xl sm:text-7xl lg:text-8xl xl:text-[8rem] font-serif tracking-tight leading-[0.95] text-[#202612] [text-shadow:0_0_30px_rgba(255,255,255,1),_0_0_60px_rgba(255,255,255,0.8)] max-w-full"
              />
              <TextReveal
                as="h1"
                text={t('heroTitle2')}
                delay={0.2}
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-[6.5rem] font-serif italic font-light tracking-tight leading-[1] text-[#C5352F] mt-2 [text-shadow:0_0_30px_rgba(255,255,255,1),_0_0_60px_rgba(255,255,255,0.8)]"
              />
            </motion.div>

            <motion.div variants={fadeInUp} className="max-w-2xl text-center">
              <p className="text-xl sm:text-2xl text-[#202612]/80 font-light mb-12 leading-relaxed">
                {t('heroSubtitle')}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-5 items-center justify-center auto-cols-auto">
              <Link href="/donate" className="group relative px-10 py-5 bg-[#C5352F] text-[#F8FAEE] rounded-full overflow-hidden transition-all hover:shadow-2xl hover:shadow-[#C5352F]/20 hover:-translate-y-1">
                <div className="absolute inset-0 bg-[#32431B] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-out" />
                <span className="relative flex items-center justify-center gap-3 text-lg font-medium tracking-wide">
                  {t('donateNow')} <HeartHandshake size={20} className="group-hover:scale-110 transition-transform duration-300" />
                </span>
              </Link>
              
              <Link href="/programs" className="group flex items-center gap-3 px-8 py-5 text-[#202612] font-semibold text-lg hover:text-[#C5352F] transition-colors bg-[#F8FAEE]/70 backdrop-blur-md rounded-full border border-white/60 hover:bg-[#F8FAEE] transition-all shadow-sm">
                {t('discoverOurPrograms')}
                <div className="w-8 h-8 rounded-full border border-[#B7D74A] flex items-center justify-center group-hover:border-[#C5352F] transition-colors bg-white">
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#202612]/40 z-10"
        >
          <span className="text-xs uppercase tracking-widest">{t('scroll')}</span>
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
            <h2 className="text-4xl md:text-5xl font-serif text-[#202612] mb-4 kinetic-label">{t('takeActionToday')}</h2>
            <p className="text-[#202612]/70 max-w-3xl text-lg font-light leading-relaxed">
              {t('takeActionDesc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: t('actionDonateTitle'),
                desc: t('actionDonateDesc'),
                href: "/get-involved#donate",
                cta: t('actionDonateCta'),
                icon: HandCoins,
              },
              {
                title: t('actionPartnerTitle'),
                desc: t('actionPartnerDesc'),
                href: "/get-involved#partner",
                cta: t('actionPartnerCta'),
                icon: Handshake,
              },
              {
                title: t('actionSubscribeTitle'),
                desc: t('actionSubscribeDesc'),
                href: "/contact",
                cta: t('actionSubscribeCta'),
                icon: Mail,
              },
              {
                title: t('actionContactTitle'),
                desc: t('actionContactDesc'),
                href: "/contact",
                cta: t('actionContactCta'),
                icon: MessageSquareText,
              },
              {
                title: t('actionSponsorTitle'),
                desc: t('actionSponsorDesc'),
                href: "/get-involved#sponsor",
                cta: t('actionSponsorCta'),
                icon: BriefcaseBusiness,
              },
              {
                title: t('actionMediaTitle'),
                desc: t('actionMediaDesc'),
                href: "/media",
                cta: t('actionMediaCta'),
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
              <p className="text-[#F8FAEE]/70 font-light tracking-wide text-lg">{t('statStudents')}</p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div variants={fadeInUp} className="py-10 md:py-0 md:px-12 flex flex-col items-start">
              <Users className="w-10 h-10 text-[#CFE36E] mb-6 opacity-90" />
              <h3 className="text-5xl lg:text-6xl font-serif mb-3">10k<span className="text-[#CFE36E]">+</span></h3>
              <p className="text-[#F8FAEE]/70 font-light tracking-wide text-lg">{t('statLives')}</p>
            </motion.div>

            {/* Stat 3 */}
            <motion.div variants={fadeInUp} className="py-10 md:py-0 md:pl-12 flex flex-col items-start">
              <Globe2 className="w-10 h-10 text-[#E7F0B8] mb-6 opacity-90" />
              <h3 className="text-5xl lg:text-6xl font-serif mb-3">30<span className="text-[#E7F0B8]">+</span></h3>
              <p className="text-[#F8FAEE]/70 font-light tracking-wide text-lg">{t('statPrograms')}</p>
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
                {t('coreInitiativesTitle')}
              </h2>
              <p className="text-[#202612]/70 max-w-md text-lg font-light">
                {t('coreInitiativesDesc')}
              </p>
            </div>
            <Link href="/programs" className="text-[#C5352F] font-medium hover:text-[#8F241F] flex items-center gap-2 pb-2">
              {t('viewAllInitiatives')} <ArrowRight size={18} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: t('programSchoolTitle'),
                desc: t('programSchoolDesc'),
                route: "/programs",
                color: "bg-[#E7F0B8]",
                image: "https://fra.cloud.appwrite.io/v1/storage/buckets/69e0ef48000b84bb12f1/files/69e49a1b000c69db647c/preview?project=697cce240018e094963c&output=webp"
              },
              {
                title: t('programGirlsTitle'),
                desc: t('programGirlsDesc'),
                route: "/programs",
                color: "bg-[#CFE36E]",
                image: "https://fra.cloud.appwrite.io/v1/storage/buckets/69e0ef48000b84bb12f1/files/69e49a1b000c697644d1/preview?project=697cce240018e094963c&output=webp"
              },
              {
                title: t('programPrisonsTitle'),
                desc: t('programPrisonsDesc'),
                route: "/programs",
                color: "bg-[#D7E6A4]",
                image: "https://fra.cloud.appwrite.io/v1/storage/buckets/69e0ef48000b84bb12f1/files/69e49a1b000c63c52cf9/preview?project=697cce240018e094963c&output=webp"
              }
            ].map((program, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className="group cursor-pointer flex flex-col h-full"
              >
                <Link href={program.route} className="block relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 shadow-sm group-hover:shadow-md transition-shadow">
                  {program.image ? (
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      unoptimized
                    />
                  ) : (
                    <div className={`absolute inset-0 ${program.color}`} />
                  )}
                  
                  <div className="absolute inset-0 bg-[#202612]/20 group-hover:bg-black/10 transition-colors duration-500" />
                  
                  <div className="absolute bottom-6 left-6 right-6 z-10 pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-[#F8FAEE] flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 drop-shadow-xl">
                      <ArrowRight size={20} className="text-[#202612]" />
                    </div>
                  </div>
                </Link>
                
                <Link href={program.route}>
                  <h3 className="text-2xl font-serif text-[#202612] mb-3 group-hover:text-[#C5352F] transition-colors">{program.title}</h3>
                </Link>
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
              {t('donationCtaTitle1')} <span className="italic text-[#C5352F]">{t('donationCtaTitleMiracles')}</span>
            </h2>
            <p className="text-xl text-[#202612]/80 font-light mb-10 max-w-2xl mx-auto">
              {t('donationCtaDesc')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/donate" className="px-8 py-4 bg-[#202612] text-[#F8FAEE] rounded-full font-medium hover:bg-[#32431B] transition-colors shadow-lg">
                {t('makeDonation')}
              </Link>
              <Link href="/get-involved" className="px-8 py-4 bg-transparent border border-[#202612] text-[#202612] rounded-full font-medium hover:bg-[#202612] hover:text-[#F8FAEE] transition-colors">
                {t('becomeVolunteer')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}

