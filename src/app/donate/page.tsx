"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, HeartHandshake } from "lucide-react";

const frequencies = ["daily", "weekly", "monthly", "yearly"] as const;
const amountPresets = [10, 25, 50, 100, 250];

type Frequency = (typeof frequencies)[number];

export default function DonatePage() {
  const [frequency, setFrequency] = useState<Frequency>("monthly");
  const [selectedAmount, setSelectedAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [submitted, setSubmitted] = useState(false);

  const finalAmount = useMemo(() => {
    const parsed = Number(customAmount);
    if (!Number.isNaN(parsed) && parsed > 0) {
      return parsed;
    }
    return selectedAmount;
  }, [customAmount, selectedAmount]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!fullName.trim() || !email.trim() || finalAmount <= 0) {
      return;
    }

    setSubmitted(true);
  };

  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#F5F2E9]">
      <section className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-[2rem] border border-[#E8E0CF] p-8 md:p-10 shadow-sm"
        >
          <span className="inline-block py-1 px-3 rounded-full border border-[#D5CAA4] bg-[#F5F2E9] text-[#7A643E] text-sm font-medium tracking-wide uppercase mb-4">
            Support Bless to Bless Ministries
          </span>

          <h1 className="text-4xl md:text-5xl font-serif text-[#2E2A25] mb-4">
            Give With Purpose
          </h1>

          <p className="text-[#2E2A25]/70 text-lg font-light leading-relaxed mb-8">
            Your donation powers education, outreach, and community care in Buyala. Choose how often you want to give and make your impact consistent.
          </p>

          {submitted ? (
            <div className="rounded-2xl border border-[#C7D8C8] bg-[#EAF4EA] p-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-[#3C7A43] mt-0.5" size={22} />
                <div>
                  <h2 className="text-xl font-serif text-[#2E2A25] mb-2">Thank you for your commitment.</h2>
                  <p className="text-[#2E2A25]/75 font-light mb-4">
                    We have recorded your pledge of ${finalAmount} {frequency}. Our team will contact you at {email} with next steps for payment confirmation.
                  </p>
                  <Link
                    href="/impact"
                    className="inline-flex items-center gap-2 text-[#944C42] font-medium hover:text-[#7A3E35] transition-colors"
                  >
                    See Your Impact <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <form className="space-y-7" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-[#2E2A25]/80 mb-3">Donation Frequency</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {frequencies.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setFrequency(option)}
                      className={`py-2.5 rounded-lg border text-sm font-medium capitalize transition-colors ${
                        frequency === option
                          ? "bg-[#2E2A25] text-[#F5F2E9] border-[#2E2A25]"
                          : "bg-white text-[#2E2A25] border-[#D8CDB5] hover:border-[#944C42]"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2E2A25]/80 mb-3">Choose Amount (USD)</label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-3">
                  {amountPresets.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount("");
                      }}
                      className={`py-2.5 rounded-lg border text-sm font-semibold transition-colors ${
                        selectedAmount === amount && !customAmount
                          ? "bg-[#944C42] text-white border-[#944C42]"
                          : "bg-white text-[#2E2A25] border-[#D8CDB5] hover:border-[#944C42]"
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  min="1"
                  placeholder="Or enter custom amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="w-full rounded-lg border border-[#D8CDB5] bg-[#FDFBF6] px-4 py-3 outline-none focus:border-[#944C42]"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#2E2A25]/80 mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full rounded-lg border border-[#D8CDB5] bg-[#FDFBF6] px-4 py-3 outline-none focus:border-[#944C42]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2E2A25]/80 mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-[#D8CDB5] bg-[#FDFBF6] px-4 py-3 outline-none focus:border-[#944C42]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2E2A25]/80 mb-3">Preferred Payment Method</label>
                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    { id: "card", label: "Card" },
                    { id: "mobile-money", label: "Mobile Money" },
                    { id: "bank", label: "Bank Transfer" },
                  ].map((method) => (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setPaymentMethod(method.id)}
                      className={`py-2.5 rounded-lg border text-sm font-medium transition-colors ${
                        paymentMethod === method.id
                          ? "bg-[#3C4A3E] text-[#F5F2E9] border-[#3C4A3E]"
                          : "bg-white text-[#2E2A25] border-[#D8CDB5] hover:border-[#3C4A3E]"
                      }`}
                    >
                      {method.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#944C42] hover:bg-[#7A3E35] text-[#F5F2E9] rounded-xl font-medium transition-colors"
              >
                Donate ${finalAmount} {frequency}
              </button>
            </form>
          )}
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-[#2B362E] text-[#F5F2E9] rounded-[2rem] p-8 md:p-10"
        >
          <h2 className="text-3xl font-serif mb-6">Why Your Giving Matters</h2>

          <ul className="space-y-5">
            <li className="flex gap-3">
              <HeartHandshake size={20} className="text-[#E3C8B7] mt-1" />
              <p className="text-[#F5F2E9]/80 font-light">
                Recurring support helps us plan sustainable school support and outreach across the year.
              </p>
            </li>
            <li className="flex gap-3">
              <HeartHandshake size={20} className="text-[#E3C8B7] mt-1" />
              <p className="text-[#F5F2E9]/80 font-light">
                Donations are used for education access, food and essentials, and rapid response needs.
              </p>
            </li>
            <li className="flex gap-3">
              <HeartHandshake size={20} className="text-[#E3C8B7] mt-1" />
              <p className="text-[#F5F2E9]/80 font-light">
                For accountability, you can follow stories and progress updates on our media and impact pages.
              </p>
            </li>
          </ul>

          <div className="mt-10 rounded-2xl bg-[#3C4A3E] p-5 border border-[#4A5D4E]">
            <h3 className="font-serif text-2xl mb-2">Need Other Giving Options?</h3>
            <p className="text-[#F5F2E9]/75 font-light mb-4">
              If you would like to sponsor a specific project, partner as an organization, or give in-kind support, contact our team.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[#E3C8B7] hover:text-[#F5F2E9] font-medium transition-colors"
            >
              Talk to Us <ArrowRight size={16} />
            </Link>
          </div>
        </motion.aside>
      </section>
    </main>
  );
}
