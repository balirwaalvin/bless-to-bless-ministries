"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface TeamMember {
  name: string;
  role: string;
  initials: string;
  bio: string;
  image?: string;
}

const ugandanTeam: TeamMember[] = [
  {
    name: "Luutu Joseph",
    role: "Executive Director",
    initials: "LJ",
    bio: "Provides strategic leadership, partnerships, and overall program oversight.",
    image:
      "https://fra.cloud.appwrite.io/v1/storage/buckets/69e0ef48000b84bb12f1/files/69e49ca600396b022960/view?project=697cce240018e094963c&mode=admin",
  },
  {
    name: "Nalwoga Sarah",
    role: "Girls' Ministry Lead",
    initials: "NS",
    bio: "Coordinates mentorship sessions, safeguarding, and life-skills support for girls.",
  },
  {
    name: "Mugisha David",
    role: "School Outreach Coordinator",
    initials: "MD",
    bio: "Leads school visits, resource distribution, and learner support activities.",
  },
  {
    name: "Achen Mary",
    role: "Ex-Prisoners Program Officer",
    initials: "AM",
    bio: "Supports reintegration pathways, counseling follow-ups, and skills referrals.",
  },
  {
    name: "Kato Brian",
    role: "Leadership Development Trainer",
    initials: "KB",
    bio: "Facilitates leadership cohorts for youth, volunteers, and community champions.",
  },
  {
    name: "Nabwire Ruth",
    role: "Child Sponsorship Liaison",
    initials: "NR",
    bio: "Connects sponsors with children and tracks progress for accountability.",
  },
];

const globalTeam: TeamMember[] = [
  {
    name: "Paris Parie",
    role: "International Coordinator",
    initials: "JD",
    bio: "Manages international partnerships and global outreach strategies.",
  },
  {
    name: "Kisakye Desire",
    role: "Global Ambassador",
    initials: "JS",
    bio: "Advocates for the ministry's mission on a global scale.",
  },
];

function TeamMemberCard({ member, idx, isGlobal = false }: { member: TeamMember; idx: number; isGlobal?: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: idx * 0.06 }}
      className="bg-white rounded-[2rem] border border-[#E8E0CF] p-7 shadow-sm"
    >
      {member.image ? (
        <div className="w-24 h-24 rounded-full overflow-hidden relative mb-5 border-4 border-[#F8FAEE] shadow-sm">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      ) : (
        <div
          className={`w-24 h-24 rounded-full flex items-center justify-center text-[#202612] font-serif text-2xl mb-5 bg-gradient-to-br ${
            isGlobal ? "from-[#D8D7E5] to-[#E8E0CF]" : "from-[#B7D74A] to-[#CFE36E]"
          }`}
        >
          {member.initials}
        </div>
      )}
      <h2 className="text-2xl font-serif text-[#202612]">{member.name}</h2>
      <p className="text-[#C5352F] text-sm uppercase tracking-wide font-medium mt-1 mb-3">
        {member.role}
      </p>
      <p className="text-[#202612]/70 font-light leading-relaxed">{member.bio}</p>
    </motion.article>
  );
}

export default function TeamPage() {
  const t = useTranslations("Team");

  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#F8FAEE]">
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-serif text-[#202612] mb-5">
            {t("titleStart")} <span className="italic text-[#C5352F]">{t("titleEnd")}</span>
          </h1>
          <p className="text-xl text-[#202612]/70 font-light leading-relaxed">
            {t("description")}
          </p>
          <p className="text-sm text-[#5B6E27] tracking-wide uppercase mt-6">
            {t("placeholderNote")}
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <h2 className="text-4xl font-serif text-[#202612] mb-10 text-center">Ugandan <span className="italic text-[#C5352F]">Team</span></h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ugandanTeam.map((member, idx) => (
            <TeamMemberCard key={member.name} member={member} idx={idx} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-serif text-[#202612] mb-10 text-center">Global <span className="italic text-[#C5352F]">Team</span></h2>
        {globalTeam.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {globalTeam.map((member, idx) => (
              <TeamMemberCard key={member.name} member={member} idx={idx} isGlobal />
            ))}
          </div>
        ) : (
          <div className="text-center text-[#202612]/50 italic">
            {t("comingSoon")}
          </div>
        )}
      </section>
    </main>
  );
}
