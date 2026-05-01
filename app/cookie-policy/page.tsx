import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy — Med-Gen Insurance Agency",
  description:
    "Cookie Policy for Med-Gen Insurance Agency. Learn how we use cookies and similar technologies to enhance your experience on our platform.",
  keywords: [
    "cookie policy",
    "cookies",
    "Med-Gen Insurance",
    "privacy cookies Kenya",
  ],
  openGraph: {
    title: "Cookie Policy — Med-Gen Insurance Agency",
    description:
      "Learn how we use cookies and similar technologies to enhance your experience.",
    url: "/cookie-policy",
    images: [
      {
        url: "/og-cookie-policy.png",
        width: 1200,
        height: 630,
        alt: "Cookie Policy — Med-Gen Insurance Agency",
      },
    ],
  },
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#397397] text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-lg text-white/90">Last Updated: 2026-04-21</p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 md:px-16">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="lead text-xl mb-8">
              This Cookie Policy explains how Med-Gen Insurance Agency ("Med-Gen",
              "we", "us") uses cookies and similar tracking technologies on our
              website. We use these technologies to enhance your browsing
              experience, analyze platform performance, and provide personalized
              services.
            </p>

            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                1. What Are Cookies?
              </h2>
              <p className="mb-4">
                Cookies are small text files that are stored on your device when
                you visit our website. They are widely used to make websites work
                more efficiently and provide information to the site owners. We
                use both session cookies (which expire when you close your
                browser) and persistent cookies (which remain on your device
                until they expire or are deleted).
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                2. Types of Cookies We Use
              </h2>
              <p className="mb-4">
                We use the following categories of cookies on our platform:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Essential Cookies
                  </h3>
                  <p className="text-sm">
                    These cookies are necessary for the website to function
                    properly. They enable core functionality such as security,
                    authentication, and navigation. You can set your browser to
                    block these cookies, but some parts of the website may not
                    work without them.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Performance Cookies
                  </h3>
                  <p className="text-sm">
                    These cookies collect information about how visitors use our
                    website, such as which pages are visited most frequently and
                    whether users receive error messages. All information
                    collected by these cookies is aggregated and therefore
                    anonymous. We use this information to improve how our
                    website functions.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Functional Cookies
                  </h3>
                  <p className="text-sm">
                    These cookies enable the website to provide enhanced
                    functionality and personalization. They may be set by us or
                    by third-party providers whose services we have added to our
                    pages. If you do not allow these cookies, some or all of
                    these services may not function properly.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Marketing Cookies
                  </h3>
                  <p className="text-sm">
                    These cookies may be set through our site by our advertising
                    partners. They may be used to build a profile of your
                    interests and show you relevant adverts on other sites. They
                    do not store directly personal information but are based on
                    uniquely identifying your browser and internet device.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                3. Third-Party Cookies
              </h2>
              <p className="mb-4">
                In addition to our own cookies, we may also use various
                third-party cookies to report usage statistics of the service,
                deliver advertisements on and through the service, and provide
                certain services available through the service. These third
                parties include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Google Analytics for website traffic analysis</li>
                <li>Facebook Pixel for advertising and analytics</li>
                <li>Payment processors for transaction handling</li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                4. Managing Cookies
              </h2>
              <p className="mb-4">
                Most web browsers allow you to control cookies through their
                settings. You can:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Accept or reject all cookies</li>
                <li>Accept or reject cookies from specific sites</li>
                <li>Accept only cookies that have been set by you</li>
                <li>Be notified each time a cookie is set</li>
              </ul>
              <p className="mt-4">
                Please note that if you configure your browser to reject
                cookies, some features of our website may not function
                properly. For information about how to manage cookies in your
                browser, please refer to your browser's help documentation.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                5. Updates to This Policy
              </h2>
              <p className="mb-4">
                We may update this Cookie Policy from time to time to reflect
                changes in our practices or applicable law. We will notify you
                of any material changes by posting the new policy on this page
                with an updated effective date. Your continued use of our
                website after such changes constitutes your acceptance of the
                updated policy.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                6. Contact Us
              </h2>
              <p className="mb-4">
                If you have any questions about this Cookie Policy or would like
                to exercise your rights regarding the use of cookies, please
                contact us:
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
