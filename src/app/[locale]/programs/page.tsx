"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, GraduationCap, School, ShieldCheck, Users, HandCoins, Sprout, Building, HeartHandshake, Cross, BriefcaseBusiness, Stethoscope } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

const programKeys = [
  { key: "sponsorship", icon: HandCoins, color: "bg-[#E7F0B8]", textColor: "text-[#5B6E27]" },
  { key: "luminaSchool", icon: School, color: "bg-[#CFE36E]", textColor: "text-[#C5352F]" },
  { key: "agriculture", icon: Sprout, color: "bg-[#D7E6A4]", textColor: "text-[#32431B]" },
  { key: "exPrisoners", icon: ShieldCheck, color: "bg-[#D8D7E5]", textColor: "text-[#44436B]", image: "https://fra.cloud.appwrite.io/v1/storage/buckets/69e0ef48000b84bb12f1/files/69e49a1b000c63c52cf9/preview?project=697cce240018e094963c&output=webp" },
  { key: "teenageGirls", icon: BookOpen, color: "bg-[#DCE8DF]", textColor: "text-[#32431B]", image: "https://fra.cloud.appwrite.io/v1/storage/buckets/69e0ef48000b84bb12f1/files/69e49a1b000c697644d1/preview?project=697cce240018e094963c&output=webp" },
  { key: "leadership", icon: GraduationCap, color: "bg-[#E7F0B8]", textColor: "text-[#5B6E27]", image: "https://fra.cloud.appwrite.io/v1/storage/buckets/69e0ef48000b84bb12f1/files/69e49a1b000c67cd1301/preview?project=697cce240018e094963c&output=webp" },
  { key: "communityOutreaches", icon: Users, color: "bg-[#CFE36E]", textColor: "text-[#C5352F]", image: "https://fra.cloud.appwrite.io/v1/storage/buckets/69e0ef48000b84bb12f1/files/69e49a1b000c67142854/preview?project=697cce240018e094963c&output=webp" },
  { key: "schoolOutreaches", icon: School, color: "bg-[#D7E6A4]", textColor: "text-[#32431B]", image: "https://fra.cloud.appwrite.io/v1/storage/buckets/69e0ef48000b84bb12f1/files/69e49a1b000c69db647c/preview?project=697cce240018e094963c&output=webp" },
  { key: "discipleship", icon: Users, color: "bg-[#D8D7E5]", textColor: "text-[#44436B]" },
  { key: "elderlyFood", icon: HeartHandshake, color: "bg-[#DCE8DF]", textColor: "text-[#32431B]" },
  { key: "parentsLivelihood", icon: BriefcaseBusiness, color: "bg-[#E7F0B8]", textColor: "text-[#5B6E27]" },
  { key: "workspaces", icon: Building, color: "bg-[#CFE36E]", textColor: "text-[#C5352F]" },
  { key: "medical", icon: Stethoscope, color: "bg-[#D7E6A4]", textColor: "text-[#32431B]" },
];

export default function ProgramsPage() {
  const t = useTranslations("ProgramsPage");
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
            {t('title1')} <span className="italic text-[#C5352F]">{t('title2')}</span>
          </h1>
          <p className="text-xl text-[#202612]/70 font-light leading-relaxed">
            {t('subtitle')}
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 space-y-24">
        {programKeys.map((program, idx) => {
          const title = t(`programs.${program.key}.title`);
          const desc = t(`programs.${program.key}.description`);
          const rawStats = t.raw(`programs.${program.key}.stats`) as string[];

          return (
            <motion.div 
              key={program.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
            >
              {/* Visual Box */}
              <div className={`w-full md:w-1/2 aspect-square md:aspect-[4/3] rounded-[2rem] ${program.color} relative overflow-hidden flex items-center justify-center p-12`}>
                {program.image ? (
                  <Image
                    src={program.image}
                    alt={title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                ) : (
                  <>
                    <program.icon className={`w-32 h-32 ${program.textColor} opacity-20 absolute`} />
                    <div className="relative z-10 text-center">
                      <p className="text-[#202612] font-serif text-2xl mb-4 italic">{t('spotlight')}</p>
                      <span className="text-[#202612]/50 text-sm tracking-widest uppercase">{t('placeholder')}</span>
                    </div>
                  </>
                )}
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-full ${program.color} flex items-center justify-center`}>
                    <program.icon className={program.textColor} size={24} />
                  </div>
                  <h2 className="text-4xl font-serif text-[#202612]">{title}</h2>
                </div>
                
                <p className="text-lg text-[#202612]/70 font-light leading-relaxed mb-8">
                  {desc}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-4 mb-10">
                  {rawStats.map((stat, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white/50 px-4 py-2 rounded-full text-sm text-[#202612]/80 border border-[#32431B]/10">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C5352F]" />
                      {stat}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>
    </main>
  );
}