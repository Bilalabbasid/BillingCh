"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const metrics = [
  { label: "First-Pass Rate", value: "94.2%", delta: "2.1%", up: true },
  { label: "Denial Rate", value: "2.8%", delta: "0.4%", up: false },
  { label: "Avg. Days in AR", value: "18.3", delta: "3.1", up: false },
  { label: "Clean Claims", value: "1,284", delta: "97", up: true },
];

const claims = [
  { id: "#BA-8821", patient: "J. Martinez", amount: "$340", status: "Approved", approved: true },
  { id: "#BA-8820", patient: "R. Thompson", amount: "$820", status: "Processing", approved: false },
  { id: "#BA-8819", patient: "S. Williams", amount: "$215", status: "Approved", approved: true },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background dot grid */}
      <div className="absolute inset-0 dot-grid" />

      <div className="container mx-auto relative z-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left â€” Text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <p className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-teal mb-5">
              Trusted by 500+ Healthcare Practices
            </p>

            <h1
              className="font-display font-extrabold leading-[1.05] mb-6"
              style={{
                fontSize: "clamp(3rem, 5.5vw, 4.5rem)",
                letterSpacing: "-0.035em",
              }}
            >
              Aligned Billing.
              <br />
              <span className="gradient-text">Accelerated Revenue.</span>
            </h1>

            <p className="text-[#94A3B8] text-base leading-[1.7] mb-8 max-w-md">
              BillingAlign handles your entire revenue cycle â€” from clean claim
              submission to AR follow-up â€” so your practice gets paid faster,
              with fewer denials and zero billing headaches.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Get a Free Demo
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg">
                  See How It Works
                </Button>
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              {["No long-term contracts", "HIPAA compliant", "Live in 48 hours"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal shrink-0" />
                  <span className="text-sm text-[#94A3B8]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right â€” Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="bg-[#0F1E35] border border-[#1E3A5F] rounded-2xl overflow-hidden">

              {/* Browser chrome bar */}
              <div className="bg-[#0B1628] px-4 py-3 flex items-center justify-between border-b border-[#1E3A5F]">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
                </div>
                <span className="text-[#94A3B8] text-[11px]">Revenue Dashboard â€” Live</span>
                <div className="w-16" />
              </div>

              {/* Dashboard content */}
              <div className="p-5">

                {/* 2Ã—2 Metric grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {metrics.map((m) => (
                    <div key={m.label} className="bg-[#0B1628] rounded-lg p-3">
                      <p className="text-[11px] text-[#94A3B8] mb-1.5">{m.label}</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-[22px] font-bold text-white leading-none">
                          {m.value}
                        </span>
                        <span
                          className={cn(
                            "text-[11px] font-medium",
                            m.up ? "text-emerald-400" : "text-red-400"
                          )}
                        >
                          {m.up ? "â†‘" : "â†“"} {m.delta}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-[#1E3A5F] my-4" />

                {/* Mini claims table */}
                <div>
                  <div className="grid grid-cols-4 gap-2 pb-2">
                    {["Claim ID", "Patient", "Amount", "Status"].map((col) => (
                      <span
                        key={col}
                        className="text-[10px] text-[#94A3B8] uppercase tracking-wide"
                      >
                        {col}
                      </span>
                    ))}
                  </div>
                  {claims.map((c, i) => (
                    <div
                      key={c.id}
                      className={cn(
                        "grid grid-cols-4 gap-2 py-2",
                        i < claims.length - 1 && "border-b border-[#1E3A5F]/60"
                      )}
                    >
                      <span className="text-[12px] text-white font-mono">{c.id}</span>
                      <span className="text-[12px] text-[#94A3B8]">{c.patient}</span>
                      <span className="text-[12px] text-white">{c.amount}</span>
                      <span
                        className={cn(
                          "text-[10px] px-1.5 py-0.5 rounded w-fit border",
                          c.approved
                            ? "bg-[#052E16] border-[#166534] text-[#4ADE80]"
                            : "bg-[#1C1400] border-[#854D0E] text-[#FBBF24]"
                        )}
                      >
                        {c.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

