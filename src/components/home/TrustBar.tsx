"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const stats = [
  { value: "94%+", label: "First-Pass Claim Rate", color: "text-teal" },
  { value: "<3%", label: "Average Denial Rate", color: "text-emerald-400" },
  { value: "50+", label: "Medical Specialties", color: "text-teal" },
  { value: "500+", label: "Practices Nationwide", color: "text-indigo-400" },
];

export function TrustBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="relative border-y border-white/[0.06] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#070E1A]" />
      <div className="absolute inset-0 bg-gradient-to-r from-teal/[0.03] via-transparent to-indigo-500/[0.04]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="container mx-auto relative z-10 py-12" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/[0.06]">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex flex-col items-center text-center px-6 py-2 group"
            >
              <span className={cn(
                "font-display font-extrabold leading-none mb-2 tabular-nums",
                stat.color,
                "drop-shadow-[0_0_8px_rgba(0,201,177,0.3)]"
              )}
                style={{ fontSize: "clamp(2.25rem, 4vw, 3rem)" }}
              >
                {stat.value}
              </span>
              <span className="text-[#64748B] text-sm font-medium text-center leading-snug">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

