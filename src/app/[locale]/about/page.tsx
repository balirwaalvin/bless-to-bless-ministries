"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#F8FAEE]">
      
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl"
        >
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-serif text-[#202612] mb-6">
            Our <span className="italic text-[#C5352F]">Story</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-[#202612]/70 font-light leading-relaxed">
            Founded on the principles of compassion and active faith, Blessed To Bless Rehabilitation Center began with a simple mission: to bridge the gap between those who want to help and those who desperately need it.
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
            className="bg-[#E7F0B8] p-12 rounded-[2rem]"
          >
            <h3 className="text-3xl font-serif text-[#202612] mb-4">Our Mission</h3>
            <p className="text-[#202612]/80 font-light leading-relaxed">
              To empower underprivileged communities through sustainable education, provide vital resources to families in need, and showcase God&apos;s love through actionable charity and outreach programs.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1F2C12] p-12 rounded-[2rem] text-[#F8FAEE]"
          >
            <h3 className="text-3xl font-serif text-[#CFE36E] mb-4">Our Vision</h3>
            <p className="text-[#F8FAEE]/80 font-light leading-relaxed">
              A world where every child has access to quality education, communities are self-sustaining, and hope is restored to the most vulnerable populations across the globe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-32">
        <div className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-[3rem] p-10 border border-[#E8E0CF] shadow-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 aspect-square md:aspect-[4/3] relative rounded-[2rem] overflow-hidden shadow-sm shrink-0"
          >
            <Image
              src="https://fra.cloud.appwrite.io/v1/storage/buckets/69fdc3ad0007e5b2e750/files/69fdc3c1003cebaaa896/view?project=69f8b24a003c5558181b&mode=admin"
              alt="Reiner and Hildegard Schowalter"
              fill
              className="object-cover"
              unoptimized
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex flex-col justify-center"
          >
            <h2 className="text-[#5B6E27] tracking-widest uppercase text-sm font-semibold mb-3">Our Founders</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-[#202612] mb-6 leading-tight">
              Reiner & Hildegard <span className="italic text-[#C5352F]">Schowalter</span>
            </h3>
            <p className="text-lg text-[#202612]/70 font-light leading-relaxed mb-6">
              Driven by a profound calling to serve the vulnerable, Reiner and Hildegard laid the foundational vision for Blessed To Bless Ministries. Their journey is marked by an unwavering commitment to bridging the gap between those who want to help and those who desperately need it.
            </p>
            <p className="text-lg text-[#202612]/70 font-light leading-relaxed">
              Through their dedicated global outreach and compassionate leadership, they have inspired countless individuals to join hands in transforming lives, providing sustainable education, and restoring hope to communities in Buyala and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Timeline placeholder */}
      <section className="bg-[#EDF3CD] py-24 mb-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-serif text-[#202612] mb-8">Our Journey</h2>
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
                <div className="font-serif text-2xl text-[#C5352F] w-24 shrink-0">{item.year}</div>
                <div className="text-lg text-[#202612]/80 font-light pt-1">{item.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#202612] mb-4">Leadership Team</h2>
          <p className="text-[#202612]/70 font-light">Guided by faith and driven by purpose.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              name: "Luutu Joseph",
              role: "Executive Director",
              desc: "Dedicated to expanding community outreach and securing sustainable partnerships.",
              image: "https://fra.cloud.appwrite.io/v1/storage/buckets/69e0ef48000b84bb12f1/files/69e49ca600396b022960/view?project=697cce240018e094963c&mode=admin"
            },
            {
              name: "Nalwoga Sarah",
              role: "Program Coordinator",
              desc: "Empowering the community through targeted skill-building programs."
            },
            {
              name: "Mugisha David",
              role: "Operations Manager",
              desc: "Ensuring our daily activities align with our faith-driven mission."
            }
          ].map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="aspect-square bg-[#D7E6A4] rounded-[2rem] mb-6 overflow-hidden relative">
                {member.image ? (
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover" 
                    unoptimized 
                  />
                ) : (
                  <div className="absolute inset-0 bg-[#202612]/5 mix-blend-multiply" />
                )}
              </div>
              <h4 className="text-2xl font-serif text-[#202612]">{member.name}</h4>
              <p className="text-[#C5352F] font-medium text-sm tracking-wide uppercase mb-2">{member.role}</p>
              <p className="text-[#202612]/70 font-light leading-relaxed">
                {member.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}
