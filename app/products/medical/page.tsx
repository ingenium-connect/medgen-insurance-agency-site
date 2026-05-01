import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Heart,
  Users,
  Building2,
  CheckCircle2,
  XCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Medical Insurance — Health Coverage in Kenya",
  description:
    "Comprehensive medical insurance plans for individuals, families, and groups in Kenya. Inpatient, outpatient, maternity, dental, and optical coverage. Access quality healthcare with our wide network of hospitals and clinics.",
  keywords: [
    "medical insurance Kenya",
    "health insurance Kenya",
    "individual medical cover",
    "family medical insurance",
    "group medical insurance",
    "inpatient cover Kenya",
    "outpatient cover Kenya",
    "maternity insurance Kenya",
    "dental insurance Kenya",
    "optical cover Kenya",
    "hospital network Kenya",
    "medical cover Nairobi",
    "affordable health insurance Kenya",
  ],
  openGraph: {
    title: "Medical Insurance — Comprehensive Health Coverage in Kenya",
    description:
      "Get quality medical insurance for you and your family. Inpatient, outpatient, maternity, and specialist care covered.",
    url: "/products/medical",
    images: [
      {
        url: "/og-medical.png",
        width: 1200,
        height: 630,
        alt: "Med-Gen Medical Insurance",
      },
    ],
  },
  alternates: { canonical: "/products/medical" },
};

const plans = [
  {
    icon: Users,
    title: "Individual & Family Plans",
    description:
      "Tailored coverage for you and your loved ones with flexible benefits.",
  },
  {
    icon: Building2,
    title: "Group Medical Cover",
    description:
      "Comprehensive employee health benefits for businesses of all sizes.",
  },
];

const features = [
  "Inpatient services (hospitalization)",
  "Outpatient services (consultations, tests)",
  "Maternity and newborn care",
  "Dental and optical benefits",
  "Chronic disease management",
  "Preventive care and wellness programs",
  "Emergency medical evacuation",
  "Specialist consultations",
  "Diagnostic tests and imaging",
  "Pharmacy benefits",
];

const exclusions = [
  "Pre-existing conditions (subject to waiting period)",
  "Cosmetic surgery (unless medically necessary)",
  "Experimental treatments",
  "Self-inflicted injuries",
  "Treatment outside Kenya (unless emergency)",
];

export default function MedicalInsurancePage() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#397397] text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-16 text-center">
          <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Medical Insurance
          </h1>
          <p className="text-lg text-white/90">
            Comprehensive health coverage for peace of mind
          </p>
        </div>
      </section>

      {/* Plans Overview */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6 md:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Medical Insurance Plans
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the plan that best fits your healthcare needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <plan.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{plan.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 md:px-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Key Features & Benefits
          </h2>
          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Exclusions */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6 md:px-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Standard Exclusions
          </h2>
          <Card className="border-amber-200 bg-amber-50/50">
            <CardContent className="pt-6">
              <div className="space-y-3">
                {exclusions.map((exclusion, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                    <span className="text-foreground">{exclusion}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                * Terms and conditions apply. Please refer to your policy
                document for complete details.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#1e3a5f] to-[#397397] text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Covered?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Request a personalized medical insurance quote today
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-[#1e3a5f] hover:bg-white/90"
          >
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
