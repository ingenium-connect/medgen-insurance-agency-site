"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Heart,
  Car,
  Home,
  Plane,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const products = [
  {
    icon: Heart,
    title: "Medical Insurance",
    description:
      "Comprehensive health coverage for individuals, families, and groups. Access to quality healthcare when you need it.",
    features: [
      "Inpatient & outpatient cover",
      "Maternity benefits",
      "Dental & optical care",
      "Wide hospital network",
    ],
    href: "/products/medical",
    color: "text-teal-600",
    bgColor: "bg-teal-50",
  },
  {
    icon: Car,
    title: "General Insurance",
    description:
      "Protect your assets and business with our range of general insurance products including motor, property, and liability.",
    features: [
      "Motor insurance",
      "Home & property cover",
      "Travel insurance",
      "Business insurance",
    ],
    href: "/products/general",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

export default function ProductsOverview() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Our <span className="text-primary">Insurance Products</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tailored insurance solutions to protect what matters most to you
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 border-border group hover:border-primary/30 hover:scale-[1.02]">
                <CardHeader>
                  <div
                    className={`w-14 h-14 rounded-xl ${product.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <product.icon className={`w-7 h-7 ${product.color}`} />
                  </div>
                  <CardTitle className="text-2xl mb-2">
                    {product.title}
                  </CardTitle>
                  <p className="text-muted-foreground">{product.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                        <span className="text-sm text-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                  >
                    <Link href={product.href}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          {/* Motor Insurance CTA Banner */}
          <Card className="max-w-4xl mx-auto mb-8 border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                  <Car className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">
                    Need Motor Insurance?
                  </h3>
                  <p className="text-muted-foreground">
                    Get instant quotes and buy comprehensive or third-party motor
                    insurance online in just 2 minutes. All vehicle types covered.
                  </p>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="shrink-0 shadow-md hover:shadow-lg transition-all"
                >
                  <a
                    href="https://motor.medgeninsurance.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy Motor Insurance
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Other specialized coverage */}
          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              We also offer specialized coverage for:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: Home, label: "Property" },
                { icon: Plane, label: "Travel" },
                { icon: Briefcase, label: "Business" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-border hover:border-primary hover:shadow-md transition-all duration-300 cursor-default"
                >
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
