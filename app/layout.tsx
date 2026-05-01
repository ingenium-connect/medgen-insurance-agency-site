import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "sonner";
import {
  OrganizationSchema,
  WebSiteSchema,
  InsuranceAgencySchema,
} from "@/components/seo/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://medgeninsurance.com",
  ),
  title: {
    template: "%s | Med-Gen Insurance Agency",
    default: "Med-Gen Insurance Agency — Medical & General Insurance in Kenya",
  },
  description:
    "Med-Gen Insurance Agency provides comprehensive medical and general insurance solutions in Kenya. Trusted by individuals and businesses for quality coverage and excellent customer service.",
  keywords: [
    "medical insurance Kenya",
    "health insurance Kenya",
    "general insurance Kenya",
    "car insurance Kenya",
    "motor insurance Kenya",
    "home insurance Kenya",
    "travel insurance Kenya",
    "business insurance Kenya",
    "insurance agency Kenya",
    "Med-Gen Insurance",
    "comprehensive insurance coverage",
    "insurance quotes Kenya",
    "IRA licensed insurance",
    "medical cover Kenya",
    "group medical insurance",
    "individual medical insurance",
    "family medical insurance",
    "property insurance Kenya",
    "liability insurance Kenya",
    "Nairobi insurance",
    "Kenya insurance broker",
    "affordable insurance Kenya",
  ],
  authors: [{ name: "Med-Gen Insurance Agency" }],
  creator: "Med-Gen Insurance Agency",
  publisher: "Med-Gen Insurance Agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    siteName: "Med-Gen Insurance Agency",
    title: "Med-Gen Insurance Agency — Medical & General Insurance in Kenya",
    description:
      "Comprehensive medical and general insurance solutions in Kenya. Trusted insurance partner for individuals and businesses.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Med-Gen Insurance Agency — Your Trusted Insurance Partner",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Med-Gen Insurance Agency — Medical & General Insurance in Kenya",
    description:
      "Comprehensive medical and general insurance solutions. Quality coverage and excellent customer service.",
    images: ["/og-image.png"],
    creator: "@medgeninsurance",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "/",
  },
  category: "finance",
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <OrganizationSchema />
        <WebSiteSchema />
        <InsuranceAgencySchema />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <main className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-1 flex flex-col">{children}</div>
          <Footer />
        </main>
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
