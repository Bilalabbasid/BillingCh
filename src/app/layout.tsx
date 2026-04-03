import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://billingalign.com"),
  title: {
    template: "%s | BillingAlign",
    default: "BillingAlign — Aligned Billing. Accelerated Revenue.",
  },
  description:
    "BillingAlign provides full-service medical billing, revenue cycle management, and practice management solutions for 50+ healthcare specialties. HIPAA compliant. AAPC certified.",
  keywords: [
    "medical billing",
    "revenue cycle management",
    "RCM",
    "healthcare billing",
    "medical coding",
    "HIPAA compliant billing",
    "practice management",
    "denial management",
    "physician credentialing",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://billingalign.com",
    siteName: "BillingAlign",
    title: "BillingAlign — Aligned Billing. Accelerated Revenue.",
    description:
      "Full-service medical billing and RCM for 50+ healthcare specialties.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BillingAlign — Aligned Billing. Accelerated Revenue.",
    description:
      "Full-service medical billing and RCM for 50+ healthcare specialties.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "BillingAlign",
      url: "https://billingalign.com",
      logo: "https://billingalign.com/favicon.svg",
      description:
        "Full-service medical billing, revenue cycle management, and practice management solutions for 50+ healthcare specialties.",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "1-800-BILALIGN",
        contactType: "sales",
        email: "hello@billingalign.com",
        availableLanguage: "English",
      },
      sameAs: [
        "https://linkedin.com/company/billingalign",
        "https://twitter.com/billingalign",
        "https://facebook.com/billingalign",
      ],
    },
    {
      "@type": "WebSite",
      name: "BillingAlign",
      url: "https://billingalign.com",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://billingalign.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bricolage.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
