import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Car,
  Home,
  Plane,
  Briefcase,
  Shield,
  Users,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "General Insurance — Motor, Property & Business Cover",
  description:
    "Comprehensive general insurance products including motor, home, travel, and business insurance in Kenya. Protect your assets with competitive premiums and fast claims processing.",
  keywords: [
    "general insurance Kenya",
    "motor insurance Kenya",
    "car insurance Kenya",
    "home insurance Kenya",
    "property insurance Kenya",
    "travel insurance Kenya",
    "business insurance Kenya",
    "liability insurance Kenya",
    "personal accident cover Kenya",
    "comprehensive motor insurance",
    "third party insurance Kenya",
    "insurance quotes Kenya",
  ],
  openGraph: {
    title: "General Insurance — Motor, Property & Business Cover in Kenya",
    description:
      "Protect your assets with our comprehensive general insurance products. Motor, property, travel, and business coverage.",
    url: "/products/general",
    images: [
      {
        url: "/og-general.png",
        width: 1200,
        height: 630,
        alt: "Med-Gen General Insurance",
      },
    ],
  },
  alternates: { canonical: "/products/general" },
};

const products = [
  {
    icon: Car,
    title: "Motor Insurance",
    description:
      "Get instant quotes and buy motor insurance online. Comprehensive and third-party cover for all vehicle types.",
    features: [
      "Instant online quotes & purchase",
      "Comprehensive & Third Party cover",
      "Private, Commercial & PSV vehicles",
      "Windscreen & personal accident benefits",
      "M-Pesa payment accepted",
      "Instant certificate issuance",
    ],
    link: "https://motor.medgeninsurance.com",
    external: true,
    cta: "Buy Motor Insurance Online",
    featured: true,
  },
  {
    icon: Home,
    title: "Home & Property Insurance",
    description:
      "Protect your home and belongings against fire, theft, and natural disasters.",
    features: [
      "Building structure cover",
      "Contents insurance",
      "Fire and lightning protection",
      "Theft and burglary cover",
      "Natural disasters (floods, storms)",
      "Alternative accommodation",
    ],
  },
  {
    icon: Plane,
    title: "Travel Insurance",
    description:
      "Comprehensive coverage for your domestic and international trips.",
    features: [
      "Medical expenses abroad",
      "Trip cancellation/interruption",
      "Lost or delayed baggage",
      "Flight delays and missed connections",
      "Emergency evacuation",
      "24/7 travel assistance",
    ],
  },
  {
    icon: Briefcase,
    title: "Business Insurance",
    description:
      "Protect your business assets, operations, and employees comprehensively.",
    features: [
      "Business property insurance",
      "Business interruption cover",
      "Public liability insurance",
      "Professional indemnity",
      "Workmen's compensation",
      "Fidelity guarantee",
    ],
  },
  {
    icon: Shield,
    title: "Liability Insurance",
    description:
      "Protection against legal liability claims for injury or property damage.",
    features: [
      "Public liability cover",
      "Product liability",
      "Employers liability",
      "Professional indemnity",
      "Directors & Officers liability",
      "Legal defense costs",
    ],
  },
  {
    icon: Users,
    title: "Personal Accident Cover",
    description:
      "Financial protection against accidental death, injury, or disability.",
    features: [
      "Accidental death benefit",
      "Permanent disability cover",
      "Temporary disability benefits",
      "Medical expenses",
      "Funeral expenses",
      "24/7 worldwide coverage",
    ],
  },
];

export default function GeneralInsurancePage() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#397397] text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-16 text-center">
          <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-6">
            <Car className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            General Insurance
          </h1>
          <p className="text-lg text-white/90">
            Comprehensive protection for your assets and business
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our General Insurance Products
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tailored solutions to protect what matters most to you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card
                key={index}
                className={`border-border hover:shadow-lg transition-all duration-300 flex flex-col ${
                  product.featured ? "ring-2 ring-primary/20 relative" : ""
                }`}
              >
                {product.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      Buy Online
                    </span>
                  </div>
                )}
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl ${product.featured ? "bg-primary/20" : "bg-primary/10"} flex items-center justify-center mb-4`}>
                    <product.icon className={`w-7 h-7 ${product.featured ? "text-primary" : "text-primary"}`} />
                  </div>
                  <CardTitle className="text-xl mb-2">
                    {product.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">
                    {product.description}
                  </p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="space-y-2 mb-4 flex-1">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                        <span className="text-sm text-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  {product.external ? (
                    <Button
                      asChild
                      className={product.featured ? "w-full" : "w-full"}
                      variant={product.featured ? "default" : "outline"}
                    >
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {product.cta || "Get Motor Insurance"}
                      </a>
                    </Button>
                  ) : (
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">Get a Quote</Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 md:px-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Choose Med-Gen General Insurance
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Competitive Premiums",
                description:
                  "Affordable rates without compromising on coverage quality.",
              },
              {
                title: "Fast Claims Processing",
                description:
                  "Quick and hassle-free claims settlement when you need it.",
              },
              {
                title: "Wide Coverage Options",
                description:
                  "Flexible policies tailored to your specific needs.",
              },
              {
                title: "Expert Support",
                description:
                  "Dedicated team to guide you through policy selection and claims.",
              },
            ].map((item, index) => (
              <Card key={index} className="border-border">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#1e3a5f] to-[#397397] text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need More Information?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Our insurance experts are ready to help you choose the right cover
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-[#1e3a5f] hover:bg-white/90"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/10 text-white hover:bg-white/20"
            >
              <a href="tel:+254717227690">Call +254 717 227 690</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
