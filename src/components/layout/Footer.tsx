"use client";

import Link from "next/link";
import { Globe, X, Mail } from "lucide-react";

const footerLinks = {
  solutions: {
    title: "Solutions",
    links: [
      { label: "Revenue Cycle Management", href: "/services" },
      { label: "Medical Billing", href: "/services" },
      { label: "Medical Coding", href: "/services" },
      { label: "Credentialing", href: "/services" },
      { label: "Practice Management", href: "/services" },
      { label: "EHR", href: "/services" },
      { label: "Telehealth", href: "/services" },
      { label: "FrontDesk Assist", href: "/services" },
    ],
  },
  whoWeServe: {
    title: "Who We Serve",
    links: [
      { label: "Small Practices", href: "/who-we-serve" },
      { label: "Large Groups", href: "/who-we-serve" },
      { label: "Health Systems", href: "/who-we-serve" },
      { label: "Billing Companies", href: "/who-we-serve" },
      { label: "Academic Institutions", href: "/who-we-serve" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Blog", href: "/resources" },
      { label: "Case Studies", href: "/resources" },
      { label: "Webinars", href: "/resources" },
      { label: "E-Books", href: "/resources" },
      { label: "CPT Codes", href: "/resources" },
      { label: "ICD-10 Codes", href: "/resources" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Pricing", href: "/pricing" },
      { label: "Careers", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/about" },
      { label: "Terms of Service", href: "/about" },
    ],
  },
};

const socialLinks = [
  { icon: Globe, href: "https://linkedin.com/company/billingalign", label: "LinkedIn" },
  { icon: X, href: "https://twitter.com/billingalign", label: "Twitter / X" },
  { icon: Mail, href: "mailto:hello@billingalign.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="bg-[#070E1A] border-t border-[#1E3A5F]">
      {/* Main footer */}
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="font-display font-bold text-xl mb-4 inline-block">
              <span className="text-white">Billing</span><span className="text-teal">Align</span>
            </Link>
            <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
              Full-service medical billing and revenue cycle management for 50+ healthcare specialties.
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-8 h-8 rounded-md border border-[#1E3A5F] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-white transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="text-[11px] font-semibold tracking-[0.12em] uppercase text-teal mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#94A3B8] hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1E3A5F]">
        <div className="container mx-auto py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#94A3B8]">
            Â© 2026 BillingAlign, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 px-3 py-1.5 border border-[#1E3A5F] rounded-md">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-[12px] text-[#94A3B8]">HIPAA Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}


