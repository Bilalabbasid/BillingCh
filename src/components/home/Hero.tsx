"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, TrendingUp, Shield, Zap } from "lucide-react";
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

const trustBadges = [
  { icon: Shield, label: "HIPAA Compliant" },
  { icon: TrendingUp, label: "94%+ First-Pass" },
  { icon: Zap, label: "Live in 48h" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Layered backgrounds */}
      <div className="absolute inset-0 dot-grid opacity-60" />
      <div className="absolute inset-0 bg-hero-mesh" />

      {/* Ambient glow blobs */}
      <div className="blob blob-teal w-[600px] h-[600px] -top-32 -left-32 animate-glow-pulse" />
      <div className="blob blob-indigo w-[500px] h-[500px] top-1/4 right-0 animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
      <div className="blob blob-purple w-[400px] h-[400px] bottom-0 left-1/3 animate-glow-pulse" style={{ animationDelay: "3s" }} />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-navy/80 pointer-events-none" />

      <div className="container mx-auto relative z-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal/25 bg-teal/[0.06] text-teal text-xs font-semibold tracking-wide uppercase mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              Trusted by 500+ Healthcare Practices
            </motion.div>

            <h1
              className="font-display font-extrabold leading-[1.04] mb-6"
              style={{
                fontSize: "clamp(3rem, 5.5vw, 4.75rem)",
                letterSpacing: "-0.04em",
              }}
            >
              Aligned Billing.
              <br />
              <span className="gradient-text">Accelerated Revenue.</span>
            </h1>

            <p className="text-[#94A3B8] text-[1.0625rem] leading-[1.75] mb-8 max-w-[440px]">
              BillingAlign handles your entire revenue cycle — from clean claim
              submission to AR follow-up — so your practice gets paid faster,
              with fewer denials and zero billing headaches.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mb-10">
              <Link href="/contact#contact-form">
                <Button variant="glow" size="lg">
                  Request a Demo
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg">
                  See How It Works
                </Button>
              </Link>
            </div>

            {/* Trust strip */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              {["No long-term contracts", "HIPAA compliant", "Live in 48 hours"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-teal/15 border border-teal/30 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-teal" />
                  </div>
                  <span className="text-sm text-[#94A3B8]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="hidden lg:block"
          >
            {/* Glow behind card */}
            <div className="absolute -inset-4 bg-teal/5 rounded-3xl blur-2xl" />

            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_32px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(0,201,177,0.08)]"
              style={{ background: "rgba(10,20,38,0.9)", backdropFilter: "blur(12px)" }}
            >
              {/* Top gradient border */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/40 to-transparent" />

              {/* Browser chrome bar */}
              <div className="bg-navy-dark/80 px-4 py-3 flex items-center justify-between border-b border-white/[0.06]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28CA41]" />
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.06]">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[#94A3B8] text-[11px] font-mono">Revenue Dashboard — Live</span>
                </div>
                <div className="w-16" />
              </div>

              {/* Dashboard content */}
              <div className="p-5">

                {/* 2×2 Metric grid */}
                <div className="grid grid-cols-2 gap-2.5 mb-4">
                  {metrics.map((m, i) => (
                    <motion.div
                      key={m.label}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.08 }}
                      className="rounded-xl p-3.5 border border-white/[0.06] relative overflow-hidden"
                      style={{ background: "rgba(7,14,26,0.7)" }}
                    >
                      {/* Subtle glow for up metrics */}
                      {m.up && <div className="absolute inset-0 bg-emerald-500/[0.03] pointer-events-none" />}
                      <p className="text-[10px] text-[#64748B] mb-2 uppercase tracking-wider">{m.label}</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-[22px] font-bold text-white leading-none font-display">
                          {m.value}
                        </span>
                        <span className={cn(
                          "text-[10px] font-semibold px-1.5 py-0.5 rounded-full",
                          m.up
                            ? "text-emerald-400 bg-emerald-400/10"
                            : "text-red-400 bg-red-400/10"
                        )}>
                          {m.up ? "?" : "?"} {m.delta}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent my-4" />

                {/* Mini claims table */}
                <div>
                  <div className="grid grid-cols-4 gap-2 pb-2.5">
                    {["Claim ID", "Patient", "Amount", "Status"].map((col) => (
                      <span key={col} className="text-[10px] text-[#64748B] uppercase tracking-wider font-medium">
                        {col}
                      </span>
                    ))}
                  </div>
                  {claims.map((c, i) => (
                    <motion.div
                      key={c.id}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.08 }}
                      className={cn(
                        "grid grid-cols-4 gap-2 py-2.5",
                        i < claims.length - 1 && "border-b border-white/[0.04]"
                      )}
                    >
                      <span className="text-[12px] text-white/80 font-mono">{c.id}</span>
                      <span className="text-[12px] text-[#94A3B8]">{c.patient}</span>
                      <span className="text-[12px] text-white font-medium">{c.amount}</span>
                      <span className={cn(
                        "text-[10px] px-2 py-0.5 rounded-full w-fit font-semibold",
                        c.approved
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                      )}>
                        {c.status}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

