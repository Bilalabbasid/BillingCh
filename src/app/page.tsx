import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { Services } from "@/components/home/Services";
import { WhyUs } from "@/components/home/WhyUs";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Specialties } from "@/components/home/Specialties";
import { Testimonials } from "@/components/home/Testimonials";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "BillingAlign — Aligned Billing. Accelerated Revenue.",
  description:
    "BillingAlign provides full-service medical billing, revenue cycle management, and practice management solutions for 50+ healthcare specialties. HIPAA compliant. AAPC certified.",
  keywords: [
    "medical billing company",
    "revenue cycle management",
    "healthcare billing services",
    "RCM outsourcing",
    "HIPAA compliant billing",
    "AAPC certified coders",
    "denial management",
    "physician credentialing",
  ],
  openGraph: {
    title: "BillingAlign — Aligned Billing. Accelerated Revenue.",
    description:
      "Full-service medical billing and RCM for 50+ healthcare specialties. 94% first-pass rate. HIPAA compliant.",
    url: "https://billingalign.com",
  },
  alternates: { canonical: "https://billingalign.com" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <div className="section-divider" />
      <TrustBar />
      <div className="section-divider" />
      <Services />
      <div className="section-divider" />
      <WhyUs />
      <div className="section-divider" />
      <HowItWorks />
      <div className="section-divider" />
      <Specialties />
      <div className="section-divider" />
      <Testimonials />
      <div className="section-divider" />
      <CTABanner />
    </>
  );
}
