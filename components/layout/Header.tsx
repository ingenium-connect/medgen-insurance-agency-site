"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const HELPLINE_DISPLAY = "+254 717 227 690";
const HELPLINE_TEL = "+254717227690";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1e3a5f]/10 bg-[#1e3a5f] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="shrink-0 flex items-center gap-2">
          <div className="relative w-8 h-8">
            <Image
              src="/medgen.png"
              alt="Med-Gen Insurance"
              width={32}
              height={32}
              className="object-contain"
              priority
              onError={(e) => {
                // Fallback if logo image doesn't exist yet
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <div className="text-white font-bold text-xl">
            Med-Gen <span className="text-[#8bbfd8]">Insurance</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="px-4 py-2 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${HELPLINE_TEL}`}
            aria-label={`Call helpline ${HELPLINE_DISPLAY}`}
            className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden lg:inline">{HELPLINE_DISPLAY}</span>
          </a>

          <Button
            asChild
            variant="outline"
            size="sm"
            className="hidden md:inline-flex bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <Link href="/contact">Get a Quote</Link>
          </Button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#1e3a5f]">
          <nav className="flex flex-col px-4 py-2">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 px-4 py-3 rounded-lg text-sm font-medium text-center bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
