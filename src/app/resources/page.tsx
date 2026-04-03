import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CTABanner } from "@/components/home/CTABanner";
import { ResourcesContent } from "@/components/resources/ResourcesContent";

export const metadata: Metadata = {
  title: "RCM Resources — Blog, Case Studies & Code Lookup",
  description:
    "Explore BillingAlign's library of medical billing resources: blog articles, case studies, webinars, downloadable e-books, and a CPT/ICD-10 code lookup tool.",
  keywords: [
    "medical billing blog",
    "RCM case studies",
    "CPT code lookup",
    "ICD-10 lookup",
    "medical billing webinars",
    "revenue cycle resources",
  ],
  openGraph: {
    title: "RCM Resources | BillingAlign",
    description:
      "Blog articles, case studies, webinars, e-books, and code lookup tools for healthcare billing.",
    url: "https://billingalign.com/resources",
  },
  alternates: { canonical: "https://billingalign.com/resources" },
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        badge="Resources"
        title="RCM Knowledge Center"
        subtitle="Practical guides, case studies, webinars, and tools to help your practice optimize its revenue cycle."
      />

      <section className="pb-24">
        <div className="container mx-auto">
          <ResourcesContent />
        </div>
      </section>

      <div className="section-divider" />
      <CTABanner />
    </>
  );
}
