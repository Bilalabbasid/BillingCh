"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, ChevronDown,
  TrendingUp, FileText, Code2, LayoutDashboard,
  Monitor, Users, Video, BadgeCheck, Phone
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const solutionsDropdown = [
  { label: "Revenue Cycle Management", href: "/services", icon: TrendingUp },
  { label: "Medical Billing", href: "/services", icon: FileText },
  { label: "Medical Coding", href: "/services", icon: Code2 },
  { label: "Practice Management", href: "/services", icon: LayoutDashboard },
  { label: "EHR", href: "/services", icon: Monitor },
  { label: "Patient Experience", href: "/services", icon: Users },
  { label: "Telehealth", href: "/services", icon: Video },
  { label: "Credentialing", href: "/services", icon: BadgeCheck },
  { label: "FrontDesk Assist", href: "/services", icon: Phone },
];

const navLinks = [
  { label: "Solutions", href: "/services", hasDropdown: true },
  { label: "Who We Serve", href: "/who-we-serve" },
  { label: "Resources", href: "/resources" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300",
          scrolled
            ? "bg-[rgba(7,14,26,0.92)] backdrop-blur-[12px] border-b border-white/[0.06]"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto h-full flex items-center justify-between">
          {/* Logo wordmark */}
          <Link href="/" className="font-display font-bold text-xl">
            <span className="text-white">Billing</span><span className="text-teal">Align</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setDropdownOpen(true)}
                onMouseLeave={() => link.hasDropdown && setDropdownOpen(false)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-[0.875rem] font-medium text-[#94A3B8] hover:text-white transition-colors"
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown className={cn(
                      "w-3.5 h-3.5 transition-transform",
                      dropdownOpen && "rotate-180"
                    )} />
                  )}
                </Link>

                {/* Mega Dropdown */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.1 }}
                        className="absolute top-full left-0 mt-2 w-[320px] p-6 rounded-xl bg-[#0F1E35] border border-[#1E3A5F] shadow-[0_24px_64px_rgba(0,0,0,0.6)]"
                      >
                        <div className="grid gap-0.5">
                          {solutionsDropdown.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-[#94A3B8] hover:text-white hover:bg-white/[0.04] transition-colors"
                            >
                              <item.icon className="w-4 h-4 text-[#94A3B8]" />
                              {item.label}
                            </Link>
                          ))}
                        </div>
                        <div className="mt-3 pt-3 border-t border-[#1E3A5F]">
                          <Link
                            href="/services"
                            className="text-sm text-[#94A3B8] hover:text-white transition-colors"
                          >
                            View all 21 services →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Link href="/contact">
              <Button variant="primary" size="sm">
                Get a Free Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 text-[#94A3B8] hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] bg-[#0F1E35] border-l border-[#1E3A5F] z-50 p-6 flex flex-col lg:hidden overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="font-display font-bold text-lg">
                  <span className="text-white">Billing</span><span className="text-teal">Align</span>
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-[#94A3B8] hover:text-white"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-3 text-sm text-[#94A3B8] hover:text-white hover:bg-white/[0.04] rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-auto pt-6 flex flex-col gap-3">
                <Button variant="ghost" size="md" className="w-full justify-center">
                  Sign In
                </Button>
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  <Button variant="primary" size="md" className="w-full justify-center">
                    Get a Free Demo
                  </Button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
