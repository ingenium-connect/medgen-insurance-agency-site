import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Target, Users, Award, Heart, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Your Trusted Insurance Partner Since 2014",
  description:
    "Learn about Med-Gen Insurance Agency - our history, mission, values, and commitment to providing quality insurance solutions in Kenya. IRA licensed insurance intermediary serving individuals and businesses.",
  keywords: [
    "Med-Gen Insurance",
    "insurance agency Kenya",
    "IRA licensed insurance",
    "insurance intermediary Kenya",
    "about Med-Gen Insurance",
    "insurance company Nairobi",
    "trusted insurance Kenya",
  ],
  openGraph: {
    title: "About Med-Gen Insurance Agency — Trusted Partner Since 2014",
    description:
      "Your trusted insurance partner in Kenya. Learn about our mission, values, and commitment to excellence.",
    url: "/about",
    images: [
      {
        url: "/og-about.png",
        width: 1200,
        height: 630,
        alt: "About Med-Gen Insurance Agency",
      },
    ],
  },
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We uphold the highest standards of honesty and transparency in all our dealings.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description:
      "Your needs and satisfaction are at the heart of everything we do.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for excellence in service delivery and product offerings.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description:
      "We continuously evolve to meet the changing needs of our clients.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#397397] text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-white/90">
            Your trusted insurance partner in Kenya since 2014
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6 md:px-16">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Our Story
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Med-Gen Insurance Agency was founded with a simple yet powerful
              vision: to make quality insurance accessible to every Kenyan. What
              started as a small team of passionate insurance professionals has
              grown into one of Kenya's trusted insurance intermediaries.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Over the years, we have built strong partnerships with leading
              insurance underwriters, enabling us to offer comprehensive medical
              and general insurance products that meet the diverse needs of
              individuals, families, and businesses across Kenya.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we serve thousands of satisfied clients, processing claims
              efficiently and providing expert guidance every step of the way.
              Our commitment to excellence and customer satisfaction remains
              unwavering as we continue to grow and evolve.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 md:py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-6 md:px-16">
          <Card className="border-primary/20 bg-white shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To provide accessible, comprehensive, and reliable insurance
                solutions that protect what matters most to our clients. We are
                committed to delivering exceptional service, building lasting
                relationships, and making a positive impact in the communities
                we serve.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6 md:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our Core Values
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide us in serving you better every day
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{value.title}</CardTitle>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 md:px-16">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Our Commitment to You
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Med-Gen Insurance Agency, we understand that insurance is more
                than just a policy — it's about peace of mind, security, and
                trust. That's why we go above and beyond to ensure that every
                interaction you have with us is positive, professional, and
                productive.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our team of experienced insurance professionals is dedicated to
                understanding your unique needs and recommending the best
                coverage options for you. We believe in building long-term
                relationships based on trust, transparency, and mutual respect.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're looking for medical insurance for your family,
                motor insurance for your vehicle, or comprehensive coverage for
                your business, we're here to help you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
