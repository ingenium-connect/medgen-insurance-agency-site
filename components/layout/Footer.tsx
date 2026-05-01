"use client";

import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import Link from "next/link";
import { Phone, Mail, MapPin, Shield, ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#1e3a5f] text-white mt-auto">
      {/* Main content */}
      <div className="px-6 md:px-16 pt-12 pb-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 bg-white/10 rounded-lg">
                <Shield className="w-4 h-4 text-[#8bbfd8]" />
              </div>
              <span className="font-bold text-lg tracking-tight">
                Med-Gen Insurance
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Your trusted insurance partner in Kenya. Providing comprehensive
              medical and general insurance solutions.
            </p>
            <div className="flex gap-3">
              {[
                {
                  href: "https://facebook.com",
                  icon: <FaFacebookF size={15} />,
                  label: "Facebook",
                },
                {
                  href: "https://twitter.com",
                  icon: <FaXTwitter size={15} />,
                  label: "Twitter",
                },
                {
                  href: "https://instagram.com",
                  icon: <FaInstagram size={15} />,
                  label: "Instagram",
                },
                {
                  href: "https://linkedin.com",
                  icon: <FaLinkedinIn size={15} />,
                  label: "LinkedIn",
                },
              ].map(({ href, icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-[#397397] transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-semibold text-white/50 mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About Us", href: "/about" },
                { label: "Products", href: "/products" },
                { label: "Resources", href: "/resources" },
                { label: "Contact Us", href: "/contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products links */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-semibold text-white/50 mb-4">
              Products
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Medical Insurance", href: "/products/medical", external: false },
                { label: "General Insurance", href: "/products/general", external: false },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://motor.medgeninsurance.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8bbfd8] hover:text-white transition-colors font-medium flex items-center gap-1"
                >
                  Motor Insurance
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-semibold text-white/50 mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#8bbfd8] mt-0.5 shrink-0" />
                <span className="text-white/70">
                  Nairobi, Kenya
                  <br />
                  Business Hours: Mon-Fri 8AM-5PM
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#8bbfd8] shrink-0" />
                <a
                  href="tel:+254717227690"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  +254 717 227 690
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#8bbfd8] shrink-0" />
                <a
                  href="mailto:support@medgeninsurance.com"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  support@medgeninsurance.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Separator className="bg-white/10" />

      {/* Bottom bar */}
      <div className="px-6 md:px-16 py-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>
            © {currentYear} Med-Gen Insurance Agency. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">
              Disclaimer
            </Link>
            <Link href="/cookie-policy" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
