"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 18, scale: 0.992, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -14, scale: 1.005, filter: "blur(8px)" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="route-transition route-shell"
      >
        <motion.div
          aria-hidden="true"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "100%", opacity: [0, 0.55, 0] }}
          transition={{ duration: 0.9, ease: [0.17, 0.67, 0.3, 1], delay: 0.06 }}
          className="route-sweep"
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
