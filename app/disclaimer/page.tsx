import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer — Med-Gen Insurance Agency",
  description:
    "Disclaimer for Med-Gen Insurance Agency. Please read this disclaimer carefully before using our platform.",
  keywords: [
    "disclaimer",
    "Med-Gen Insurance",
    "insurance disclaimer Kenya",
  ],
  openGraph: {
    title: "Disclaimer — Med-Gen Insurance Agency",
    description:
      "Please read this disclaimer carefully before using our platform.",
    url: "/disclaimer",
    images: [
      {
        url: "/og-disclaimer.png",
        width: 1200,
        height: 630,
        alt: "Disclaimer — Med-Gen Insurance Agency",
      },
    ],
  },
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#397397] text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Disclaimer</h1>
          <p className="text-lg text-white/90">Last Updated: 2026-04-21</p>
        </div>
      </section>

      {/* Disclaimer Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 md:px-16">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="lead text-xl mb-8">
              Med-Gen Insurance Agency, trading as Med-Gen, is a licensed
              insurance intermediary duly registered and operating in compliance
              with the Insurance Act (Cap. 487) and the regulations of the
              Insurance Regulatory Authority (IRA) of Kenya. We are committed
              to delivering professional, transparent, and client-centred
              insurance intermediation services on behalf of our underwriting
              partners.
            </p>

            {/* Section 1 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                1. Professional Insurance Advisory Role
              </h2>
              <p className="mb-4">
                Med-Gen Insurance Agency is a licensed insurance intermediary
                operating on behalf of, and in partnership with, regulated
                underwriters. The guidance, recommendations, and product
                information provided through this platform constitute professional
                insurance advisory services rendered in that capacity. Our team
                is committed to helping you find the right cover for your needs,
                backed by the expertise and authority of our underwriting partners.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                2. Coverage and Claims
              </h2>
              <p className="mb-4">
                While we work diligently to match you with the most suitable
                insurance products, the ultimate terms of coverage, claim
                determinations, and settlement decisions rest with the
                underwriting insurer in accordance with the policy contract and
                applicable Kenyan insurance law. We advocate on your behalf
                throughout the process and are here to support you at every step.
              </p>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                3. Accuracy of Information
              </h2>
              <p className="mb-4">
                The reliability of your policy depends on the accuracy of the
                information you provide. In line with the Insurance Act and the
                principle of utmost good faith (uberrimae fidei), users are
                required to disclose all material facts truthfully and completely.
                Med-Gen shall not be liable for any prejudice arising from
                inaccurate, incomplete, or misleading information submitted by
                a user.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                4. Third-Party Services
              </h2>
              <p className="mb-4">
                Our platform integrates with third-party systems including
                payment processors and insurer portals to deliver a seamless
                experience. While we carefully select our partners, Med-Gen
                cannot be held responsible for the independent acts, omissions,
                or service interruptions of third parties operating under their
                own regulatory frameworks.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                5. Regulatory Compliance
              </h2>
              <p className="mb-4">
                All insurance products facilitated through this platform are
                subject to the terms and conditions of the issuing insurer and
                the regulatory oversight of the Insurance Regulatory Authority
                of Kenya. Med-Gen operates strictly within the bounds of its
                intermediary licence and applicable Kenyan law, including but
                not limited to the Insurance Act, the Data Protection Act, 2019,
                and any relevant IRA guidelines in force.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                6. Limitation of Liability
              </h2>
              <p className="mb-4">
                To the extent permitted by law, Med-Gen's liability in connection
                with the use of this platform is limited to direct losses arising
                solely from our own negligence or wilful default in the
                performance of our intermediary obligations. We remain fully
                committed to resolving any concerns promptly and professionally.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
