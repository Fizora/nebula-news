// app/terms/page.tsx
"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { LucideAlertCircle } from "lucide-react";
import Link from "next/link";
import {
  LuFileText,
  LuShield,
  LuCopyright,
  LuMail,
  LuScale,
  LuLock,
  LuUsers,
} from "react-icons/lu";

export default function TermsOfServicePage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero section */}
      <section className="relative overflow-hidden bg-white pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="absolute inset-0 -z-10 bg-linear-to-br from-white via-gray-50 to-gray-100/50" />
        <div className="absolute inset-0 -z-10 bg-[radial-linear(ellipse_at_top_left,_rgba(239,68,68,0.04),_transparent_50%)]" />

        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-gray-600 shadow-sm mb-6">
              <LuFileText className="h-3.5 w-3.5 text-red-500" />
              Last updated: May 21, 2026
            </div>

            <h1 className="text-4xl font-title tracking-tight text-gray-950 sm:text-5xl md:text-6xl">
              Terms of Service
            </h1>
            <p className="mt-6 text-lg leading-7 text-gray-600 sm:text-xl sm:leading-8 max-w-2xl">
              By accessing Nebula News, you agree to these terms. Please read
              them carefully — they govern your use of our website, apps, and
              services.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-red-500/30 to-transparent" />
      </section>

      {/* Terms content */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="space-y-12">
            {/* 1. Acceptance */}
            <div className="border-l-4 border-red-500 pl-6">
              <h2 className="text-2xl font-semibold text-gray-950">
                1. Acceptance of Terms
              </h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                By using nebula.news or any associated applications, you confirm
                that you have read, understood, and agree to be bound by these
                Terms of Service. If you do not agree, you must not use our
                services.
              </p>
            </div>

            {/* 2. Use of Content */}
            <div>
              <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
                <LuCopyright className="h-5 w-5 text-red-500" />
                <h2 className="text-xl font-semibold text-gray-950">
                  2. Use of Our Content
                </h2>
              </div>
              <div className="mt-4 space-y-3 text-gray-600">
                <p>
                  All articles, analysis, graphics, videos, and other materials
                  published by Nebula News are protected by copyright and
                  intellectual property laws.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Personal use:</strong> You may read, share links,
                    and quote brief excerpts (up to 100 words) with attribution.
                  </li>
                  <li>
                    <strong>Prohibited:</strong> Republishing full articles,
                    scraping our site, using content for commercial training of
                    AI models, or redistributing via automated systems.
                  </li>
                  <li>
                    <strong>Syndication:</strong> Contact{" "}
                    <a
                      href="mailto:syndication@nebulanews.com"
                      className="text-red-500 hover:underline"
                    >
                      syndication@nebulanews.com
                    </a>{" "}
                    for licensing.
                  </li>
                </ul>
              </div>
            </div>

            {/* 3. User Accounts */}
            <div>
              <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
                <LuUsers className="h-5 w-5 text-red-500" />
                <h2 className="text-xl font-semibold text-gray-950">
                  3. User Accounts
                </h2>
              </div>
              <div className="mt-4 space-y-3 text-gray-600">
                <p>
                  Some features (e.g., newsletters, commenting) may require an
                  account. You are responsible for maintaining the
                  confidentiality of your login credentials.
                </p>
                <p>
                  You agree to provide accurate, current information. Nebula
                  News reserves the right to suspend or terminate accounts that
                  violate these terms or engage in abusive behavior.
                </p>
              </div>
            </div>

            {/* 4. User Conduct */}
            <div>
              <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
                <LuShield className="h-5 w-5 text-red-500" />
                <h2 className="text-xl font-semibold text-gray-950">
                  4. Prohibited Conduct
                </h2>
              </div>
              <div className="mt-4 space-y-3 text-gray-600">
                <p>You may not use Nebula News to:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Post illegal, defamatory, or harassing content</li>
                  <li>Impersonate any person or entity</li>
                  <li>
                    Attempt to bypass security measures or access restricted
                    areas
                  </li>
                  <li>
                    Distribute malware, spam, or any automated queries (crawling
                    without permission)
                  </li>
                  <li>
                    Violate any applicable local, state, national, or
                    international law
                  </li>
                </ul>
                <p>
                  We reserve the right to remove any user‑generated content and
                  block access for violations.
                </p>
              </div>
            </div>

            {/* 5. Third-Party Links */}
            <div>
              <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
                <LuLink className="h-5 w-5 text-red-500" />
                <h2 className="text-xl font-semibold text-gray-950">
                  5. Third‑Party Links
                </h2>
              </div>
              <div className="mt-4 text-gray-600">
                <p>
                  Our articles may contain links to external websites. Nebula
                  News does not endorse or assume responsibility for the
                  content, privacy policies, or practices of any third‑party
                  sites. Your interactions with those sites are governed by
                  their own terms.
                </p>
              </div>
            </div>

            {/* 6. Disclaimer of Warranties */}
            <div>
              <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
                <LucideAlertCircle className="h-5 w-5 text-red-500" />
                <h2 className="text-xl font-semibold text-gray-950">
                  6. No Warranties
                </h2>
              </div>
              <div className="mt-4 text-gray-600">
                <p>
                  Nebula News provides content on an “as is” and “as available”
                  basis. While we strive for accuracy, we do not warrant that
                  the information is complete, reliable, or error‑free. We
                  disclaim all implied warranties, including merchantability,
                  fitness for a particular purpose, and non‑infringement.
                </p>
              </div>
            </div>

            {/* 7. Limitation of Liability */}
            <div>
              <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
                <LuScale className="h-5 w-5 text-red-500" />
                <h2 className="text-xl font-semibold text-gray-950">
                  7. Limitation of Liability
                </h2>
              </div>
              <div className="mt-4 text-gray-600">
                <p>
                  To the fullest extent permitted by law, Nebula News shall not
                  be liable for any indirect, incidental, special,
                  consequential, or punitive damages, including loss of profits,
                  data, or goodwill, arising from your use of our services.
                </p>
              </div>
            </div>

            {/* 8. Indemnification */}
            <div>
              <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
                <LuLock className="h-5 w-5 text-red-500" />
                <h2 className="text-xl font-semibold text-gray-950">
                  8. Indemnification
                </h2>
              </div>
              <div className="mt-4 text-gray-600">
                <p>
                  You agree to indemnify and hold harmless Nebula News, its
                  affiliates, and employees from any claims, damages, or
                  expenses arising from your violation of these terms or
                  applicable laws.
                </p>
              </div>
            </div>

            {/* 9. Termination */}
            <div>
              <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
                <LucideAlertCircle className="h-5 w-5 text-red-500" />
                <h2 className="text-xl font-semibold text-gray-950">
                  9. Termination
                </h2>
              </div>
              <div className="mt-4 text-gray-600">
                <p>
                  We may suspend or terminate your access to Nebula News at any
                  time, with or without cause, with or without notice. Sections
                  governing content ownership, disclaimers, and liability shall
                  survive termination.
                </p>
              </div>
            </div>

            {/* 10. Governing Law */}
            <div>
              <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
                <LuScale className="h-5 w-5 text-red-500" />
                <h2 className="text-xl font-semibold text-gray-950">
                  10. Governing Law
                </h2>
              </div>
              <div className="mt-4 text-gray-600">
                <p>
                  These terms are governed by the laws of the State of New York,
                  without regard to conflict of law principles. Any disputes
                  shall be resolved exclusively in the state or federal courts
                  located in New York County, New York.
                </p>
              </div>
            </div>

            {/* 11. Changes to Terms */}
            <div>
              <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
                <LuFileText className="h-5 w-5 text-red-500" />
                <h2 className="text-xl font-semibold text-gray-950">
                  11. Updates to These Terms
                </h2>
              </div>
              <div className="mt-4 text-gray-600">
                <p>
                  We may revise these Terms of Service from time to time. The
                  “Last updated” date at the top indicates when changes were
                  made. Continued use of Nebula News after changes constitutes
                  acceptance of the revised terms.
                </p>
              </div>
            </div>

            {/* 12. Contact Information */}
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6">
              <div className="flex items-center gap-2">
                <LuMail className="h-5 w-5 text-red-500" />
                <h2 className="text-xl font-semibold text-gray-950">
                  Questions About These Terms?
                </h2>
              </div>
              <p className="mt-2 text-gray-600">
                If you have any questions regarding our Terms of Service, please
                contact our legal department:
              </p>
              <div className="mt-4 space-y-1 text-sm">
                <p className="font-mono text-gray-800">nebulanews@gmail.com</p>
                <p className="text-gray-600">
                  Nebula News Legal Department
                  <br />
                  350 Fifth Avenue, Suite 4800
                  <br />
                  New York, NY 10118, United States
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Add missing Link icon import at top
import { LuLink } from "react-icons/lu";
