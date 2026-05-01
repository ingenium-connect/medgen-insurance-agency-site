import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Med-Gen Insurance Agency",
  description:
    "Privacy Policy for Med-Gen Insurance Agency. Learn how we collect, use, share, and protect your personal data in accordance with the Data Protection Act, 2019.",
  keywords: [
    "privacy policy",
    "data protection",
    "Med-Gen Insurance",
    "insurance privacy Kenya",
    "ODPC compliance",
  ],
  openGraph: {
    title: "Privacy Policy — Med-Gen Insurance Agency",
    description:
      "Learn how we collect, use, share, and protect your personal data.",
    url: "/privacy",
    images: [
      {
        url: "/og-privacy.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy — Med-Gen Insurance Agency",
      },
    ],
  },
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#397397] text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-white/90">Last Updated: 2026-04-21</p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 md:px-16">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="lead text-xl mb-8">
              At Med-Gen Insurance Agency ("Med-Gen", "we", "us"), your privacy
              is important to us. This Privacy Policy sets out how we collect,
              use, share, and protect your personal data in accordance with the
              Data Protection Act, 2019 (DPA) and the regulations of the Office
              of the Data Protection Commissioner (ODPC) of Kenya. By using our
              platform, you acknowledge that you have read and understood this
              policy.
            </p>

            {/* Section 1 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-foreground">1. Who We Are</h2>
              <p className="mb-4">
                Med-Gen Insurance Agency is a licensed insurance intermediary
                registered in Kenya and operating under the Insurance Act
                (Cap. 487). We act as both a data controller in respect of
                information you provide directly to us, and as a data processor
                when handling personal data on behalf of our underwriting
                partners. Insurers retain independent data controller status for
                the purposes of underwriting, policy administration, and claims
                management.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                2. Personal Data We Collect
              </h2>
              <p className="mb-4">
                To provide you with our services, we collect only what is
                necessary, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Identity and contact details (name, national ID, KRA PIN,
                  phone number, email address)
                </li>
                <li>
                  Vehicle and asset information relevant to your insurance cover
                </li>
                <li>
                  Policy and risk-related data required by underwriters
                </li>
                <li>
                  KYC and AML compliance documents as required by law
                </li>
                <li>Transaction and payment records</li>
                <li>
                  Technical and platform usage data for security and performance
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                3. How We Use Your Data
              </h2>
              <p className="mb-4">
                Your personal data is processed for clearly defined purposes,
                including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Issuing insurance quotations, policies, and cover certificates
                </li>
                <li>
                  Facilitating underwriting, endorsements, and claims handling
                </li>
                <li>
                  Fulfilling our obligations under Kenyan insurance and tax law
                </li>
                <li>
                  Conducting identity verification and KYC/AML compliance checks
                </li>
                <li>Preventing fraud, money laundering, and platform abuse</li>
                <li>Communicating with you about your policy and account</li>
                <li>
                  Improving the performance and security of our platform
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                4. Legal Basis for Processing
              </h2>
              <p className="mb-4">
                We process your personal data on one or more of the following
                lawful grounds under the Data Protection Act, 2019:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Your explicit consent, where required
                </li>
                <li>
                  Performance of a contract to which you are a party
                </li>
                <li>
                  Compliance with a legal or regulatory obligation
                </li>
                <li>
                  Legitimate interests pursued by Med-Gen or our underwriting
                  partners, where not overridden by your rights
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                5. Sharing Your Data
              </h2>
              <p className="mb-4">
                We share your personal data only where necessary and with
                appropriate safeguards in place. Recipients may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  Licensed insurers and reinsurers for underwriting and claims
                  purposes
                </li>
                <li>
                  Payment service providers for transaction processing
                </li>
                <li>
                  The Insurance Regulatory Authority (IRA) and other regulatory
                  bodies
                </li>
                <li>The Kenya Revenue Authority (KRA) where required by law</li>
                <li>
                  Law enforcement or government agencies pursuant to a lawful
                  order
                </li>
              </ul>
              <p className="mb-4">
                We do not sell your personal data to third parties. Where data
                is shared with processors, we ensure appropriate data processing
                agreements are in place in line with the DPA.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                6. Data Retention
              </h2>
              <p className="mb-4">
                We retain your personal data for as long as is necessary to
                fulfil the purposes for which it was collected, or as required
                by applicable Kenyan law, IRA regulations, and insurer
                obligations - whichever period is longer. Upon request, data is
                securely deleted or anonymised.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                7. Your Rights
              </h2>
              <p className="mb-4">
                Under the Data Protection Act, 2019, you have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  Access the personal data we hold about you
                </li>
                <li>
                  Request correction of inaccurate or incomplete data
                </li>
                <li>
                  Object to or request restriction of certain processing
                </li>
                <li>
                  Request deletion of your data, subject to legal retention
                  obligations
                </li>
                <li>
                  Lodge a complaint with the Office of the Data Protection
                  Commissioner
                </li>
              </ul>
              <p className="mb-4">
                To exercise any of these rights, please contact us at the
                details below. We will respond within the timeframes prescribed
                by the DPA.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                8. Data Security
              </h2>
              <p className="mb-4">
                We apply appropriate technical and organisational measures to
                protect your personal data against unauthorised access, loss,
                alteration, or disclosure. These include encrypted data
                transmission, access controls, and regular security assessments.
                While we take every reasonable precaution, we encourage you to
                keep your account credentials confidential.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                9. KYC Document Submission
              </h2>
              <p className="mb-4">
                In compliance with the Proceeds of Crime and Anti-Money
                Laundering Act (POCAMLA) and applicable KYC regulations, users
                are required to submit valid identity verification documents —
                including a government-issued National ID or Passport and a KRA
                PIN Certificate — within 48 hours of account registration or
                upon request by Med-Gen. Failure to comply within the stipulated
                timeframe may result in suspension of account access, cancellation
                of pending policy applications, or termination of active
                policies. Med-Gen reserves the right to reject documents that are
                illegible, expired, or inconsistent with registration details.
                Users bear sole responsibility for any loss or prejudice arising
                from the submission of inaccurate, fraudulent, or incomplete KYC
                documentation.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                10. Updates to This Policy
              </h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or applicable law. Where changes are
                material, we will notify you via the platform or by email.
                Continued use of our services following such notice constitutes
                your acceptance of the updated policy.
              </p>
            </div>

            {/* Section 11 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                11. Contact Us
              </h2>
              <p className="mb-4">
                If you have any questions about this policy or wish to exercise
                your data rights, please reach out to us:
              </p>
              <div className="bg-muted/30 p-6 rounded-lg border border-border">
                <p className="mb-2">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:support@medgeninsurance.com"
                    className="text-primary hover:underline"
                  >
                    support@medgeninsurance.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
