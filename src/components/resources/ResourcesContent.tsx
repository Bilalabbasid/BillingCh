"use client";

import { useState } from "react";
import {
  Video, Download, Search,
  Calendar, ArrowRight, ExternalLink, Tag
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import Link from "next/link";

const blogPosts = [
  {
    date: "March 28, 2026",
    category: "Denial Management",
    title: "The Top 5 Reasons Claims Get Denied — And How to Fix Them",
    excerpt:
      "Denials cost the average practice 3–5% of potential revenue. Here's how to identify root causes and build a system that prevents denials before they happen.",
    readTime: "6 min read",
  },
  {
    date: "March 14, 2026",
    category: "Medical Coding",
    title: "ICD-10 Updates for 2026: What Every Practice Needs to Know",
    excerpt:
      "The 2026 ICD-10-CM update includes over 300 new codes, 25 revisions, and 13 deletions. We break down the specialty-specific changes that matter most.",
    readTime: "8 min read",
  },
  {
    date: "February 28, 2026",
    category: "Revenue Cycle",
    title: "How to Benchmark Your Practice's RCM Performance",
    excerpt:
      "Knowing your denial rate is just the start. Discover the 7 KPIs every practice manager should track to measure the true health of their revenue cycle.",
    readTime: "5 min read",
  },
  {
    date: "February 10, 2026",
    category: "Compliance",
    title: "HIPAA Compliance in 2026: A Practical Checklist for Practices",
    excerpt:
      "With increasing OCR enforcement activity, now is the time to audit your practice's HIPAA compliance posture. Here's the checklist our compliance team uses.",
    readTime: "7 min read",
  },
  {
    date: "January 22, 2026",
    category: "Credentialing",
    title: "Physician Credentialing: Why Delays Cost More Than You Think",
    excerpt:
      "A single payer credentialing delay can cost a practice $15,000–$30,000 per month in uncollected revenue. Learn how to avoid the most common bottlenecks.",
    readTime: "5 min read",
  },
  {
    date: "January 8, 2026",
    category: "Practice Management",
    title: "From Paper to Digital: Modernizing Your Front Desk Operations",
    excerpt:
      "Practices that modernize patient intake, scheduling, and eligibility verification see up to 40% fewer billing errors at the front end. Here's where to start.",
    readTime: "6 min read",
  },
];

const caseStudies = [
  {
    specialty: "Family Practice",
    location: "Austin, TX",
    challenge: "12% denial rate with $85K in aging AR over 90 days",
    result: "Denial rate reduced to 2.8% in 90 days. $72K AR recovered in first quarter.",
    improvement: "77% denial reduction",
    providers: "8 Providers",
  },
  {
    specialty: "Internal Medicine",
    location: "Chicago, IL",
    challenge: "$40K/month in billing errors and coding inaccuracies",
    result: "Revenue increased 34% within 60 days through corrected coding and clean claims.",
    improvement: "34% revenue increase",
    providers: "4 Providers",
  },
];

const webinars = [
  {
    title: "Denial Prevention Masterclass",
    date: "April 15, 2026",
    duration: "60 minutes",
    description:
      "Live deep-dive on root cause analysis, appeals automation, and payer-specific denial patterns.",
  },
  {
    title: "2026 Coding Updates: What Changed and Why It Matters",
    date: "April 2, 2026",
    duration: "45 minutes",
    description:
      "Our senior coders walk through the most impactful 2026 CPT and ICD-10 updates by specialty.",
  },
  {
    title: "Building a Revenue Cycle Dashboard That Works",
    date: "March 18, 2026",
    duration: "30 minutes",
    description:
      "How to set up and interpret your RCM KPI dashboard to catch problems before they compound.",
  },
];

const ebooks = [
  {
    title: "The Complete Guide to Medical Billing for New Practices",
    pages: "48 pages",
    description:
      "Everything a new or growing practice needs to know about setting up a compliant and efficient billing operation.",
  },
  {
    title: "Denial Management Playbook: 30-Day Turnaround",
    pages: "36 pages",
    description:
      "A step-by-step operational playbook for practices looking to cut their denial rate in half within 30 days.",
  },
  {
    title: "RCM KPI Benchmark Report 2026",
    pages: "24 pages",
    description:
      "Industry benchmarks across 50+ specialties — see how your practice compares on first-pass rate, denial rate, and days in AR.",
  },
];

const TABS = ["Blog", "Case Studies", "Webinars", "E-Books", "Code Lookup"] as const;
type Tab = (typeof TABS)[number];

export function ResourcesContent() {
  const [activeTab, setActiveTab] = useState<Tab>("Blog");
  const [codeQuery, setCodeQuery] = useState("");

  return (
    <>
      <AnimatedSection>
        <div className="flex flex-wrap gap-2 mb-10 p-1 bg-navy-mid/50 rounded-xl border border-white/5 w-fit mx-auto">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-5 py-2.5 rounded-lg text-sm font-medium transition-all",
                activeTab === tab
                  ? "bg-teal text-navy shadow-lg shadow-teal/20"
                  : "text-gray-400 hover:text-white"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </AnimatedSection>

      {/* Blog */}
      {activeTab === "Blog" && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <AnimatedSection key={post.title} delay={i * 0.07}>
              <Card hover={false} className="h-full flex flex-col group cursor-pointer">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="text-[10px]">
                    {post.category}
                  </Badge>
                  <span className="text-gray-400 text-xs">{post.readTime}</span>
                </div>
                <h3 className="font-display font-semibold text-white text-lg mb-3 group-hover:text-teal transition-colors flex-1">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-gray-400 text-xs flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="text-teal text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      )}

      {/* Case Studies */}
      {activeTab === "Case Studies" && (
        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((cs, i) => (
            <AnimatedSection key={cs.specialty} delay={i * 0.1}>
              <Card hover={false} className="h-full">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <Badge variant="solid">{cs.improvement}</Badge>
                  <Badge variant="outline" className="text-[10px]">
                    {cs.specialty}
                  </Badge>
                  <Badge variant="outline" className="text-[10px]">
                    {cs.providers}
                  </Badge>
                </div>
                <div className="flex items-center gap-1 text-gray-400 text-xs mb-4">
                  <Tag className="w-3 h-3" />
                  {cs.location}
                </div>
                <div className="space-y-4">
                  <div className="teal-border-accent">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                      Challenge
                    </p>
                    <p className="text-gray-400 text-sm">{cs.challenge}</p>
                  </div>
                  <div className="teal-border-accent">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                      Result
                    </p>
                    <p className="text-white text-sm font-medium">{cs.result}</p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-teal text-sm font-medium hover:text-teal-dark transition-colors group"
                  >
                    Get similar results for your practice
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      )}

      {/* Webinars */}
      {activeTab === "Webinars" && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {webinars.map((w, i) => (
            <AnimatedSection key={w.title} delay={i * 0.1}>
              <Card hover={false} className="h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-teal-muted flex items-center justify-center mb-4">
                  <Video className="w-6 h-6 text-teal" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-[10px]">
                    {w.duration}
                  </Badge>
                  <span className="text-gray-400 text-xs flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {w.date}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-white text-lg mb-3 flex-1">
                  {w.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{w.description}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-teal text-sm font-medium hover:text-teal-dark transition-colors group mt-auto"
                >
                  Register Free
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      )}

      {/* E-Books */}
      {activeTab === "E-Books" && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ebooks.map((book, i) => (
            <AnimatedSection key={book.title} delay={i * 0.1}>
              <Card hover={false} className="h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-teal-muted flex items-center justify-center mb-4">
                  <Download className="w-6 h-6 text-teal" />
                </div>
                <Badge variant="outline" className="text-[10px] w-fit mb-3">
                  {book.pages}
                </Badge>
                <h3 className="font-display font-semibold text-white text-lg mb-3 flex-1">
                  {book.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{book.description}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-teal text-sm font-medium hover:text-teal-dark transition-colors group mt-auto"
                >
                  Download Free
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      )}

      {/* Code Lookup */}
      {activeTab === "Code Lookup" && (
        <AnimatedSection className="max-w-2xl mx-auto">
          <Card hover={false}>
            <div className="text-center mb-8">
              <div className="w-14 h-14 rounded-xl bg-teal-muted flex items-center justify-center mx-auto mb-4">
                <Search className="w-7 h-7 text-teal" />
              </div>
              <h2 className="font-display font-bold text-2xl text-white mb-2">
                Medical Code Lookup
              </h2>
              <p className="text-gray-400 text-sm">
                Search CPT and ICD-10 codes using our integrated lookup tool.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-white font-medium mb-1.5">
                  Enter code or description
                </label>
                <input
                  type="text"
                  value={codeQuery}
                  onChange={(e) => setCodeQuery(e.target.value)}
                  placeholder="e.g. 99213 or 'office visit'"
                  className="w-full h-11 px-4 rounded-lg bg-navy border border-white/10 text-white text-sm placeholder:text-gray-400 focus:outline-none focus:border-teal transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`https://www.aapc.com/codes/cpt-codes-range/${codeQuery || "99213"}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 h-11 px-4 rounded-lg bg-teal text-navy font-semibold text-sm hover:bg-teal-dark transition-colors"
                >
                  Search CPT Codes
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={`https://www.icd10data.com/search?s=${codeQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 h-11 px-4 rounded-lg border border-white/20 text-white font-semibold text-sm hover:border-teal hover:text-teal transition-colors"
                >
                  Search ICD-10
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <p className="text-gray-400 text-xs text-center">
                Links open official coding databases. Contact us for specialty-specific coding guidance.
              </p>
            </div>
          </Card>

          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm mb-3">Need expert coding support for your specialty?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-teal text-sm font-medium hover:text-teal-dark transition-colors group"
            >
              Talk to a certified coder
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimatedSection>
      )}
    </>
  );
}
