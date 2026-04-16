"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#F8FAEE]">
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Column: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif text-[#202612] mb-6">
              Get in <span className="italic text-[#C5352F]">Touch</span>
            </h1>
            <p className="text-xl text-[#202612]/70 font-light leading-relaxed mb-12">
              We would love to hear from you. Whether you have a question about our programs, want to partner with us, or just want to say hello.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#CFE36E] flex items-center justify-center shrink-0">
                  <MapPin className="text-[#C5352F]" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-serif text-[#202612] mb-1">Our Location</h4>
                  <p className="text-[#202612]/70 font-light">Kampala, Uganda<br/>P.O. Box 12345</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E7F0B8] flex items-center justify-center shrink-0">
                  <Phone className="text-[#5B6E27]" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-serif text-[#202612] mb-1">Phone Number</h4>
                  <p className="text-[#202612]/70 font-light">+256 700 000 000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#D7E6A4] flex items-center justify-center shrink-0">
                  <Mail className="text-[#32431B]" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-serif text-[#202612] mb-1">Email Address</h4>
                  <p className="text-[#202612]/70 font-light">hello@blesstobless.org</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-10 md:p-12 rounded-[2rem] shadow-sm border border-[#EDF3CD]"
          >
            <h3 className="text-2xl font-serif text-[#202612] mb-8">Send us a Message</h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#202612]/80">First Name</label>
                  <input type="text" className="w-full bg-[#F8FAEE] border-transparent focus:border-[#C5352F] focus:bg-white focus:ring-0 rounded-lg px-4 py-3 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#202612]/80">Last Name</label>
                  <input type="text" className="w-full bg-[#F8FAEE] border-transparent focus:border-[#C5352F] focus:bg-white focus:ring-0 rounded-lg px-4 py-3 outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#202612]/80">Email Address</label>
                <input type="email" className="w-full bg-[#F8FAEE] border-transparent focus:border-[#C5352F] focus:bg-white focus:ring-0 rounded-lg px-4 py-3 outline-none transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#202612]/80">Message</label>
                <textarea rows={5} className="w-full bg-[#F8FAEE] border-transparent focus:border-[#C5352F] focus:bg-white focus:ring-0 rounded-lg px-4 py-3 outline-none transition-all resize-none"></textarea>
              </div>

              <button className="w-full bg-[#202612] hover:bg-[#C5352F] text-[#F8FAEE] py-4 rounded-xl font-medium transition-colors flex justify-center items-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </section>
    </main>
  );
}
