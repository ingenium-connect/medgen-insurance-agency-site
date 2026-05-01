import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import ProductsOverview from "@/components/home/ProductsOverview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Medical & General Insurance in Kenya",
  description:
    "Med-Gen Insurance Agency provides comprehensive medical and general insurance solutions in Kenya. Get quality coverage with excellent customer service. Request a quote today.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Med-Gen Insurance Agency — Medical & General Insurance in Kenya",
    description:
      "Comprehensive medical and general insurance solutions. Quality coverage backed by excellent customer service.",
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <ProductsOverview />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
