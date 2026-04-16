"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function ImpactPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#F8FAEE]">
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-[#C5352F] tracking-widest uppercase text-sm font-medium mb-4">Real Stories, Real Change</p>
          <h1 className="text-5xl md:text-7xl font-serif text-[#202612] mb-6">
            Stories of <span className="italic text-[#C5352F]">Impact</span>
          </h1>
          <p className="text-xl text-[#202612]/70 font-light leading-relaxed">
            Behind every number is a name, a face, and a transformed life. Here are some of the incredible stories from the communities we serve.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Namagembe S.",
              program: "Education Scholarship",
              color: "bg-[#E7F0B8]",
              quote: "The scholarship didn’t just pay for my books; it gave me the confidence to dream bigger. I am now the first in my family to attend Makerere University."
            },
            {
              name: "Kato's Family",
              program: "Community Empowerment",
              color: "bg-[#CFE36E]",
              quote: "With the micro-loan and agricultural training, our farm yield in Luweero doubled. We can now comfortably feed our children and save for their future."
            },
            {
              name: "Kasese Community",
              program: "Charity Outreach",
              color: "bg-[#D7E6A4]",
              quote: "When the heavy rains took our homes, Bless to Bless was there the next day. The emergency relief provided us with food and medical care when we needed it most."
            },
            {
              name: "Nakato E.",
              program: "Vocational Training",
              color: "bg-[#1F2C12]",
              textDark: true,
              quote: "Learning tailoring gave me independence. I now run my own small business from home in Kampala and am teaching other women in my neighborhood."
            },
            {
              name: "Pastor Mukisa",
              program: "Community Partner",
              color: "bg-[#EDF3CD]",
              quote: "Partnering with this ministry has transformed our local outreach. We are reaching more families in Wakiso than we ever thought possible."
            },
            {
              name: "Mugisha T.",
              program: "Education Program",
              color: "bg-[#E7F0B8]",
              quote: "The new school facilities provided a safe environment for our students. Attendance has gone up by 40% since the renovation."
            }
          ].map((story, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`${story.color} p-10 rounded-[2rem] relative shadow-sm hover:-translate-y-1 transition-transform`}
            >
              <Quote className={`w-10 h-10 mb-6 opacity-20 ${story.textDark ? 'text-[#F8FAEE]' : 'text-[#202612]'}`} />
              <p className={`text-lg font-serif italic mb-8 leading-relaxed ${story.textDark ? 'text-[#F8FAEE]' : 'text-[#202612]'}`}>
                &quot;{story.quote}&quot;
              </p>
              <div className="mt-auto">
                <h4 className={`font-medium ${story.textDark ? 'text-[#F8FAEE]' : 'text-[#202612]'}`}>{story.name}</h4>
                <p className={`text-sm ${story.textDark ? 'text-[#CFE36E]' : 'text-[#C5352F]'}`}>{story.program}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
