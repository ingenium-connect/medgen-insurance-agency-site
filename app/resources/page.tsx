"use client";

import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

const glossaryTerms = [
  {
    term: "Premium",
    definition:
      "The amount you pay regularly (monthly, quarterly, or annually) to maintain your insurance coverage.",
  },
  {
    term: "Deductible/Excess",
    definition:
      "The amount you must pay out-of-pocket before your insurance coverage kicks in for a claim.",
  },
  {
    term: "Underwriter",
    definition:
      "The insurance company that assumes the risk and provides the insurance coverage.",
  },
  {
    term: "Beneficiary",
    definition:
      "The person or entity designated to receive the benefits from an insurance policy.",
  },
  {
    term: "Claim",
    definition:
      "A formal request to your insurance company asking for payment based on the terms of your policy.",
  },
  {
    term: "Co-payment",
    definition:
      "A fixed amount you pay for a covered healthcare service, usually when you receive the service.",
  },
  {
    term: "Pre-existing Condition",
    definition:
      "A health condition or illness that existed before you purchased your insurance policy.",
  },
  {
    term: "Waiting Period",
    definition:
      "The time you must wait after purchasing a policy before certain benefits become available.",
  },
  {
    term: "Sum Insured",
    definition:
      "The maximum amount the insurance company will pay for a covered loss or claim.",
  },
  {
    term: "Cashless Treatment",
    definition:
      "A facility where you can receive medical treatment without paying upfront; the hospital bills the insurer directly.",
  },
];

const links = [
  {
    title: "Insurance Regulatory Authority (IRA)",
    description: "Kenya's insurance industry regulator",
    url: "https://www.ira.go.ke",
  },
  {
    title: "Association of Kenya Insurers (AKI)",
    description: "Industry association representing insurance companies",
    url: "https://www.akinsure.com",
  },
  {
    title: "Social Health Authority (SHA)",
    description: "Kenya's national health insurance provider",
    url: "https://sha.go.ke/",
  },
  {
    title: "Kenya Revenue Authority (KRA)",
    description: "For tax-related insurance matters",
    url: "https://www.kra.go.ke",
  },
];

function GlossaryTerm({ term, definition }: { term: string; definition: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left hover:bg-muted/50 px-4 rounded transition-colors"
      >
        <span className="font-semibold text-foreground">{term}</span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-4 pb-4 text-muted-foreground">{definition}</div>
      )}
    </div>
  );
}

export default function ResourcesPage() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#397397] text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-16 text-center">
          <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources</h1>
          <p className="text-lg text-white/90">
            Helpful information, forms, and links to guide you
          </p>
        </div>
      </section>

      {/* Glossary */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6 md:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Insurance Glossary</h2>
            <p className="text-muted-foreground text-lg">
              Common insurance terms explained in simple language
            </p>
          </div>

          <Card>
            <CardContent className="p-0">
              {glossaryTerms.map((item, index) => (
                <GlossaryTerm
                  key={index}
                  term={item.term}
                  definition={item.definition}
                />
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Useful Links */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6 md:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Useful Links</h2>
            <p className="text-muted-foreground text-lg">
              Important government agencies and industry associations
            </p>
          </div>

          <div className="space-y-4">
            {links.map((link, index) => (
              <Card key={index} className="border-border hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-4 group"
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {link.description}
                      </p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 md:px-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-muted-foreground text-lg mb-6">
            Our team is here to help you understand your insurance options
          </p>
          <Button asChild size="lg">
            <a href="/contact">Get in Touch</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
