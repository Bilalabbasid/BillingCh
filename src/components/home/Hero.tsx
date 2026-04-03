"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle, TrendingUp, BarChart3, Target } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const barHeights = [40, 65, 50, 80, 70, 90, 75];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-grid" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal/3 rounded-full blur-[100px]" />

      <div className="container mx-auto relative z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <Badge className="mb-6">
                <CheckCircle className="w-3.5 h-3.5" />
                HIPAA Compliant &amp; Trusted by 500+ Practices
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] mb-6"
            >
              Aligned Billing.
              <br />
              <span className="gradient-text">Accelerated Revenue.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-lg lg:text-xl leading-relaxed mb-8 max-w-lg"
            >
              BillingAlign handles your entire revenue cycle — from clean claim
              submission to AR follow-up — so your practice gets paid faster,
              with fewer denials and zero billing headaches.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-6">
              <Link href="/contact">
                <Button variant="primary" size="lg" pulse>
                  Get a Free Demo
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg">
                  <Play className="w-4 h-4" />
                  See How It Works
                </Button>
              </Link>
            </motion.div>

            <motion.p variants={itemVariants} className="text-sm text-gray-400">
              No contracts &bull; HIPAA compliant &bull; Setup in 48 hours
            </motion.p>
          </motion.div>

          {/* Right — Dashboard Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Teal glow */}
            <div className="absolute inset-0 bg-teal/10 rounded-3xl blur-[60px] scale-90" />

            {/* Main dashboard card */}
            <div className="relative glass-card p-6 rounded-2xl hover:transform-none">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Revenue Dashboard</p>
                  <p className="font-display font-bold text-3xl text-white">$2.4M</p>
                  <p className="text-teal text-sm">collected this month</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-teal-muted flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-teal" />
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: "Claims Submitted", value: "1,284" },
                  { label: "Denial Rate", value: "2.8%" },
                  { label: "First-Pass", value: "94%" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-navy/40 rounded-lg p-3">
                    <p className="text-xs text-gray-400 mb-1">{stat.label}</p>
                    <p className="font-display font-bold text-white">{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* Mini bar chart */}
              <div className="bg-navy/40 rounded-lg p-4">
                <p className="text-xs text-gray-400 mb-3">Weekly Collections</p>
                <div className="flex items-end gap-2 h-20">
                  {barHeights.map((height, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-teal/60 to-teal rounded-sm"
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-[10px] text-gray-400">Mon</span>
                  <span className="text-[10px] text-gray-400">Sun</span>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              className="absolute -top-4 -right-4 glass-card px-4 py-2.5 rounded-xl hover:transform-none flex items-center gap-2"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm text-white font-medium">Claim Approved</span>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 glass-card px-4 py-2.5 rounded-xl hover:transform-none flex items-center gap-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <BarChart3 className="w-4 h-4 text-teal" />
              <span className="text-sm text-white font-medium">33% faster payments</span>
            </motion.div>

            <motion.div
              className="absolute top-1/2 -left-8 glass-card px-3 py-2 rounded-lg hover:transform-none"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-teal" />
                <span className="text-xs text-gray-400">Denial rate</span>
                <span className="text-xs font-bold text-teal">2.8%</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
