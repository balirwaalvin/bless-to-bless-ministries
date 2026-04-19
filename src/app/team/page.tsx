"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    name: "Luutu Joseph",
    role: "Executive Director",
    initials: "LJ",
    bio: "Provides strategic leadership, partnerships, and overall program oversight.",
    image: "https://fra.cloud.appwrite.io/v1/storage/buckets/69e0ef48000b84bb12f1/files/69e49ca600396b022960/view?project=697cce240018e094963c&mode=admin"
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

export default function TeamPage() {
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
            Meet Our <span className="italic text-[#C5352F]">Team</span>
          </h1>
          <p className="text-xl text-[#202612]/70 font-light leading-relaxed">
            The staff serving through Blessed To Bless Rehabilitation Center with compassion, accountability, and purpose.
          </p>
          <p className="text-sm text-[#5B6E27] tracking-wide uppercase mt-6">
            Temporary profile photos shown as placeholders
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.article
              key={member.name}
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
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#B7D74A] to-[#CFE36E] flex items-center justify-center text-[#202612] font-serif text-2xl mb-5">
                  {member.initials}
                </div>
              )}
              <h2 className="text-2xl font-serif text-[#202612]">{member.name}</h2>
              <p className="text-[#C5352F] text-sm uppercase tracking-wide font-medium mt-1 mb-3">{member.role}</p>
              <p className="text-[#202612]/70 font-light leading-relaxed">{member.bio}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
