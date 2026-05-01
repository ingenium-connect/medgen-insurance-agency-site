import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Heart, Car, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Insurance Products",
  description:
    "Explore our comprehensive range of medical and general insurance products. Quality coverage tailored for individuals, families, and businesses in Kenya.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#397397] text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Insurance Products
          </h1>
          <p className="text-lg text-white/90">
            Comprehensive coverage solutions for all your protection needs
          </p>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6 md:px-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Medical Insurance */}
            <Card className="hover:shadow-xl transition-all duration-300 border-border">
              <CardHeader>
                <div className="w-16 h-16 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-3xl mb-4">
                  Medical Insurance
                </CardTitle>
                <p className="text-muted-foreground text-lg">
                  Comprehensive health coverage for you and your loved ones.
                  Access quality healthcare when you need it most.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">
                    Coverage Includes:
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Inpatient & outpatient services",
                      "Maternity and newborn care",
                      "Dental and optical benefits",
                      "Emergency medical evacuation",
                      "Chronic disease management",
                      "Preventive care and wellness",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button asChild className="w-full">
                  <Link href="/products/medical">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* General Insurance */}
            <Card className="hover:shadow-xl transition-all duration-300 border-border">
              <CardHeader>
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Car className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-3xl mb-4">
                  General Insurance
                </CardTitle>
                <p className="text-muted-foreground text-lg">
                  Protect your assets and business with our comprehensive
                  general insurance solutions.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">
                    Products Include:
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Motor insurance (buy online instantly)",
                      "Home and property insurance",
                      "Travel insurance",
                      "Business insurance",
                      "Liability insurance",
                      "Personal accident cover",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3">
                  <Button asChild className="w-full">
                    <a
                      href="https://motor.medgeninsurance.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Buy Motor Insurance Online
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/products/general">
                      View All Products
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 md:px-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Help Choosing the Right Cover?
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            Our insurance experts are here to guide you
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
