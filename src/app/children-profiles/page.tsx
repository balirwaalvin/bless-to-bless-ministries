"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HeartHandshake } from "lucide-react";

const children = [
  { name: "Amina N.", className: "Primary 3", age: 9, initials: "AN" },
  { name: "Paul K.", className: "Primary 5", age: 11, initials: "PK" },
  { name: "Brenda M.", className: "Primary 2", age: 8, initials: "BM" },
  { name: "Isaac T.", className: "Primary 6", age: 12, initials: "IT" },
  { name: "Sharon L.", className: "Primary 4", age: 10, initials: "SL" },
  { name: "Moses W.", className: "Primary 1", age: 7, initials: "MW" },
  { name: "Mercy A.", className: "Secondary 1", age: 13, initials: "MA" },
  { name: "Jonah B.", className: "Primary 7", age: 12, initials: "JB" },
];

export default function ChildrenProfilesPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#F8FAEE]">
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-serif text-[#202612] mb-5">
            Children <span className="italic text-[#C5352F]">Profiles</span>
          </h1>
          <p className="text-xl text-[#202612]/70 font-light leading-relaxed">
            Meet children currently looking for sponsors. You can support school fees, supplies, and mentorship.
          </p>
          <p className="text-sm text-[#5B6E27] tracking-wide uppercase mt-6">
            Temporary profile photos shown as placeholders
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {children.map((child, idx) => (
            <motion.article
              key={child.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="bg-white rounded-[1.75rem] border border-[#E8E0CF] p-6 shadow-sm"
            >
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-[#D7E6A4] via-[#E7F0B8] to-[#CFE36E] flex items-center justify-center mb-5">
                <span className="text-[#202612] text-3xl font-serif">{child.initials}</span>
              </div>

              <h2 className="text-2xl font-serif text-[#202612]">{child.name}</h2>
              <p className="text-[#C5352F] font-medium tracking-wide uppercase text-xs mt-1 mb-3">
                {child.className}
              </p>

              <p className="text-[#202612]/70 font-light text-sm mb-4">Age: {child.age}</p>

              <Link
                href="/donate"
                className="inline-flex items-center gap-2 text-[#C5352F] hover:text-[#8F241F] transition-colors font-medium"
              >
                Sponsor Child <HeartHandshake size={16} />
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
