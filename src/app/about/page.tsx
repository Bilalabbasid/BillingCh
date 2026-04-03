import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTABanner } from "@/components/home/CTABanner";
import { AboutContent } from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About BillingAlign — Our Story & Mission",
  description:
    "Learn about BillingAlign's mission to align healthcare billing with practice success. Meet our AAPC-certified team, our values, and our commitment to transparency and HIPAA compliance.",
  keywords: [
    "about BillingAlign",
    "medical billing company",
    "AAPC certified billing",
    "HIPAA compliant billing",
    "healthcare RCM company",
  ],
  openGraph: {
    title: "About BillingAlign | Our Story & Mission",
    description:
      "Trusted by 500+ practices. AAPC-certified team. Built on transparency, accuracy, and results.",
    url: "https://billingalign.com/about",
  },
  alternates: { canonical: "https://billingalign.com/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="Our Story"
        title="The BillingAlign Story"
        subtitle="We built BillingAlign because we saw too many great healthcare practices losing revenue to billing complexity, denial backlogs, and opaque billing partners. We decided to build something better."
      />
      <AboutContent />
      <div className="section-divider" />
      <CTABanner />
    </>
  );
}
