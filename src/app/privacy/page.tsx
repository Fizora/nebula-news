// app/privacy/page.tsx
"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import {
  LuLock,
  LuDatabase,
  LuCookie,
  LuMail,
  LuShield,
  LuTrash2,
  LuGlobe,
  LuFileText,
  LuClock,
  LuUserCheck,
} from "react-icons/lu";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white text-gray-950">
      <Navbar />

      {/* Hero section – no "Back to home" link */}
      <section className="relative overflow-hidden bg-white pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="absolute inset-0 -z-10 bg-linear-to-br from-white via-gray-50 to-gray-100/50" />
        <div className="absolute inset-0 -z-10 bg-[radial-linear(ellipse_at_top_left,_rgba(239,68,68,0.04),_transparent_50%)]" />

        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            {/* Tagline with last updated */}
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-gray-600 shadow-sm mb-6">
              <LuLock className="h-3.5 w-3.5 text-red-500" />
              Last updated: May 21, 2026
            </div>

            {/* Main heading – font-title only */}
            <h1 className="text-4xl font-title tracking-tight text-gray-950 sm:text-5xl md:text-6xl">
              Privacy Policy
            </h1>
            <p className="mt-6 text-lg leading-7 text-gray-600 sm:text-xl sm:leading-8 max-w-2xl">
              Nebula News is committed to protecting your data. This policy
              explains what we collect, why we collect it, and how we safeguard
              your privacy.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-red-500/30 to-transparent" />
      </section>

      {/* Policy content – mobile‑first, clear sections */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="space-y-12">
            {/* 1. Introduction */}
            <div className="border-l-4 border-red-500 pl-6">
              <h2 className="text-2xl font-semibold text-gray-950">
                1. Our commitment
              </h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Nebula News operates on a foundation of transparency and trust.
                We collect only the minimum data necessary to deliver a secure,
                personalized experience. We never sell your personal information
                or use it for undisclosed purposes.
              </p>
            </div>

            {/* 2. What we collect */}
            <div>
              <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
                <LuDatabase className="h-5 w-5 text-red-500" />
                <h2 className="text-xl font-semibold text-gray-950">
                  2. Information we collect
                </h2>
              </div>
              <div className="mt-4 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                  <h3 className="font-semibold text-gray-900">
                    Required (minimal)
                  </h3>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    <li>• Email address (for newsletters or account access)</li>
                    <li>
                      • Anonymous reading metrics (no IP storage after 24h)
                    </li>
                    <li>• Voluntary survey responses</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                  <h3 className="font-semibold text-gray-900">
                    Never collected
                  </h3>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    <li>
                      • Government IDs or real names (unless required for
                      payments)
                    </li>
                    <li>• Browsing history outside nebula.news</li>
                    <li>• GPS or Wi‑Fi location data</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. Cookies and tracking */}
            <div>
              <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
                <LuCookie className="h-5 w-5 text-red-500" />
                <h2 className="text-xl font-semibold text-gray-950">
                  3. Cookies and similar technologies
                </h2>
              </div>
              <div className="mt-4 space-y-3 text-gray-600">
                <p>
                  We use only strictly necessary cookies to enable basic site
                  functions (e.g., remembering your theme preference). No
                  analytics or advertising cookies are set without your explicit
                  consent via the cookie banner.
                </p>
                <p>
                  You can disable all cookies in your browser settings, but some
                  features (like persistent login) may break. We do not use
                  fingerprinting or any covert tracking.
                </p>
              </div>
            </div>

            {/* 4. How we use your data */}
            <div>
              <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
                <LuShield className="h-5 w-5 text-red-500" />
                <h2 className="text-xl font-semibold text-gray-950">
                  4. How we use your information
                </h2>
              </div>
              <div className="mt-4 space-y-3 text-gray-600">
                <ul className="list-disc pl-5 space-y-1">
                  <li>To deliver newsletters and product updates</li>
                  <li>
                    To improve article recommendations (aggregated, not
                    per‑user)
                  </li>
                  <li>To respond to support requests or legal inquiries</li>
                  <li>
                    To comply with court orders (only when legally valid and not
                    overly broad)
                  </li>
                </ul>
                <p className="mt-2">
                  We never use your data for automated profiling, targeted ads,
                  or resale to third‑party data brokers.
                </p>
              </div>
            </div>

            {/* 5. Data sharing and third parties */}
            <div>
              <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
                <LuGlobe className="h-5 w-5 text-red-500" />
                <h2 className="text-xl font-semibold text-gray-950">
                  5. Third‑party services
                </h2>
              </div>
              <div className="mt-4 space-y-3 text-gray-600">
                <p>We use the following limited, privacy‑focused processors:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Postmark</strong> – for email delivery
                    (GDPR‑compliant, data processed only in the EU)
                  </li>
                  <li>
                    <strong>Vercel</strong> – hosting (logs anonymised after
                    24h)
                  </li>
                  <li>
                    <strong>Plausible Analytics</strong> – privacy‑first
                    analytics, no cookies, no IP storage
                  </li>
                </ul>
                <p>
                  We do not share data with advertisers, social networks, or any
                  other third party beyond these essential processors.
                </p>
              </div>
            </div>

            {/* 6. Data retention and deletion */}
            <div>
              <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
                <LuClock className="h-5 w-5 text-red-500" />
                <h2 className="text-xl font-semibold text-gray-950">
                  6. Retention and deletion
                </h2>
              </div>
              <div className="mt-4 space-y-3 text-gray-600">
                <p>
                  Newsletter subscriber data is retained until you unsubscribe.
                  Anonymous reading metrics are aggregated and stored for 14
                  months, then permanently deleted. Raw logs (IP addresses) are
                  discarded after 24 hours.
                </p>
                <p>
                  You can request deletion of any personal data we hold by
                  emailing <strong>privacy@nebulanews.com</strong>. We will
                  respond within 30 days.
                </p>
              </div>
            </div>

            {/* 7. Your rights (GDPR, CCPA, etc.) */}
            <div>
              <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
                <LuUserCheck className="h-5 w-5 text-red-500" />
                <h2 className="text-xl font-semibold text-gray-950">
                  7. Your privacy rights
                </h2>
              </div>
              <div className="mt-4 space-y-3 text-gray-600">
                <p>Depending on your location, you may have the right to:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Access the personal data we hold about you</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your data (right to be forgotten)</li>
                  <li>Object to processing or request portability</li>
                  <li>
                    Lodge a complaint with your local data protection authority
                  </li>
                </ul>
                <p>
                  To exercise any of these rights, email{" "}
                  <a
                    href="mailto:privacy@nebulanews.com"
                    className="text-red-500 hover:underline"
                  >
                    privacy@nebulanews.com
                  </a>{" "}
                  with the subject “Privacy Request”. We may ask for
                  verification of identity.
                </p>
              </div>
            </div>

            {/* 8. Security measures */}
            <div>
              <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
                <LuLock className="h-5 w-5 text-red-500" />
                <h2 className="text-xl font-semibold text-gray-950">
                  8. Security and encryption
                </h2>
              </div>
              <div className="mt-4 space-y-3 text-gray-600">
                <p>
                  All data transmitted to and from nebula.news is encrypted via
                  TLS 1.3. Our servers are located in Iceland and Switzerland,
                  both with strong privacy protections. Access to personal data
                  is restricted to essential personnel only, and all access is
                  logged and audited.
                </p>
                <p>
                  For whistleblowers or sources requiring anonymity, we operate
                  an encrypted Signal hotline:{" "}
                  <strong>+1 (212) 555‑0933</strong>. We do not retain metadata
                  of such communications.
                </p>
              </div>
            </div>

            {/* 9. Children’s privacy */}
            <div>
              <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
                <LuTrash2 className="h-5 w-5 text-red-500" />
                <h2 className="text-xl font-semibold text-gray-950">
                  9. Children under 16
                </h2>
              </div>
              <div className="mt-4 text-gray-600">
                <p>
                  Nebula News is not directed at children under 16. We do not
                  knowingly collect personal information from minors. If you
                  believe a child has provided us with data, please contact us
                  immediately and we will delete it.
                </p>
              </div>
            </div>

            {/* 10. Changes to this policy */}
            <div>
              <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
                <LuFileText className="h-5 w-5 text-red-500" />
                <h2 className="text-xl font-semibold text-gray-950">
                  10. Policy updates
                </h2>
              </div>
              <div className="mt-4 text-gray-600">
                <p>
                  We may update this policy occasionally. Material changes will
                  be announced via email (if you subscribe) and by a banner on
                  our homepage. The “Last updated” date at the top of this page
                  will always reflect the most recent revision.
                </p>
              </div>
            </div>

            {/* 11. Contact information */}
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6">
              <div className="flex items-center gap-2">
                <LuMail className="h-5 w-5 text-red-500" />
                <h2 className="text-xl font-semibold text-gray-950">
                  Questions or concerns?
                </h2>
              </div>
              <p className="mt-2 text-gray-600">
                If you have any questions about this privacy policy, our data
                practices, or wish to file a complaint, please contact our Data
                Protection Officer:
              </p>
              <div className="mt-4 space-y-1 text-sm">
                <p className="font-mono text-gray-800">
                  privacy@nebulanews.com
                </p>
                <p className="text-gray-600">
                  Nebula News Legal Department
                  <br />
                  350 Fifth Avenue, Suite 4800
                  <br />
                  New York, NY 10118, United States
                </p>
                <p className="text-gray-600">
                  PGP fingerprint:{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    A1B2 C3D4 E5F6 7890 ABCD EF12 3456 7890
                  </code>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer note */}
      <section className="border-t border-gray-100 py-8">
        <div className="mx-auto max-w-7xl px-4 text-center text-xs text-gray-400">
          Nebula News — founded 2019. This privacy policy is legally binding and
          adheres to GDPR, CCPA, and Swiss Federal Data Protection Act.
        </div>
      </section>

      <Footer />
    </main>
  );
}
