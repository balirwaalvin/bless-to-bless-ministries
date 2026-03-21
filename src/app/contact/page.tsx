"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#F5F2E9]">
      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Column: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif text-[#2E2A25] mb-6">
              Get in <span className="italic text-[#944C42]">Touch</span>
            </h1>
            <p className="text-xl text-[#2E2A25]/70 font-light leading-relaxed mb-12">
              We would love to hear from you. Whether you have a question about our programs, want to partner with us, or just want to say hello.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E3C8B7] flex items-center justify-center shrink-0">
                  <MapPin className="text-[#944C42]" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-serif text-[#2E2A25] mb-1">Our Location</h4>
                  <p className="text-[#2E2A25]/70 font-light">123 Ministry Road<br/>Hopeville, Faith State 45678</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E5DFCC] flex items-center justify-center shrink-0">
                  <Phone className="text-[#7A643E]" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-serif text-[#2E2A25] mb-1">Phone Number</h4>
                  <p className="text-[#2E2A25]/70 font-light">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#D1D5CD] flex items-center justify-center shrink-0">
                  <Mail className="text-[#3C4A3E]" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-serif text-[#2E2A25] mb-1">Email Address</h4>
                  <p className="text-[#2E2A25]/70 font-light">hello@blesstobless.org</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-10 md:p-12 rounded-[2rem] shadow-sm border border-[#EAE5D9]"
          >
            <h3 className="text-2xl font-serif text-[#2E2A25] mb-8">Send us a Message</h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#2E2A25]/80">First Name</label>
                  <input type="text" className="w-full bg-[#F5F2E9] border-transparent focus:border-[#944C42] focus:bg-white focus:ring-0 rounded-lg px-4 py-3 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#2E2A25]/80">Last Name</label>
                  <input type="text" className="w-full bg-[#F5F2E9] border-transparent focus:border-[#944C42] focus:bg-white focus:ring-0 rounded-lg px-4 py-3 outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#2E2A25]/80">Email Address</label>
                <input type="email" className="w-full bg-[#F5F2E9] border-transparent focus:border-[#944C42] focus:bg-white focus:ring-0 rounded-lg px-4 py-3 outline-none transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-[#2E2A25]/80">Message</label>
                <textarea rows={5} className="w-full bg-[#F5F2E9] border-transparent focus:border-[#944C42] focus:bg-white focus:ring-0 rounded-lg px-4 py-3 outline-none transition-all resize-none"></textarea>
              </div>

              <button className="w-full bg-[#2E2A25] hover:bg-[#944C42] text-[#F5F2E9] py-4 rounded-xl font-medium transition-colors flex justify-center items-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </section>
    </main>
  );
}
