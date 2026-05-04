"use client";

import { motion, useReducedMotion } from "framer-motion";

type TextRevealProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
  stagger?: number;
};

export default function TextReveal({
  text,
  as = "p",
  className,
  delay = 0,
  stagger = 0.04,
}: TextRevealProps) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");

  const MotionTag = motion[as];

  if (reduceMotion) {
    return <MotionTag className={className}>{text}</MotionTag>;
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren: delay,
            staggerChildren: stagger,
          },
        },
      }}
    >
      {words.map((word, idx) => (
        <motion.span
          key={`${word}-${idx}`}
          variants={{
            hidden: { opacity: 0, y: 18 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "inline-block", marginRight: "0.35ch" }}
        >
          {word}
        </motion.span>
      ))}
    </MotionTag>
  );
}
