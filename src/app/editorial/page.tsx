// app/editorial/page.tsx
"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import {
  LuFileCheck,
  LuShield,
  LuScale,
  LuEye,
  LuBookOpen,
  LuUsers,
  LuHeart,
  LuMail,
  LuBadgeCheck,
} from "react-icons/lu";

export default function EditorialGuidelinesPage() {
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
              <LuFileCheck className="h-3.5 w-3.5 text-red-500" />
              Our editorial compass
            </div>

            <h1 className="text-4xl font-title tracking-tight text-gray-950 sm:text-5xl md:text-6xl">
              Editorial Guidelines
            </h1>
            <p className="mt-6 text-lg leading-7 text-gray-600 sm:text-xl sm:leading-8 max-w-2xl">
              Nebula News is built on a foundation of accuracy, fairness, and
              independence. These guidelines govern every piece of journalism we
              publish.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-red-500/30 to-transparent" />
      </section>

      {/* Core principles */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-950 sm:text-4xl">
              Our core commitments
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Every story must meet these non‑negotiable standards.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <LuShield className="h-6 w-6 text-red-500" />,
                title: "Independence",
                description:
                  "No advertiser, government, or external funder influences our coverage. Editorial decisions are made solely by our journalists.",
              },
              {
                icon: <LuScale className="h-6 w-6 text-red-500" />,
                title: "Fairness",
                description:
                  "We present competing viewpoints where relevant. Subjects of criticism are given a meaningful opportunity to respond.",
              },
              {
                icon: <LuEye className="h-6 w-6 text-red-500" />,
                title: "Transparency",
                description:
                  "Corrections, conflicts of interest, and anonymous source usage are disclosed clearly to readers.",
              },
              {
                icon: <LuBookOpen className="h-6 w-6 text-red-500" />,
                title: "Accountability",
                description:
                  "We correct errors promptly and prominently. Our independent ombudsman reviews reader appeals.",
              },
              {
                icon: <LuHeart className="h-6 w-6 text-red-500" />,
                title: "Respect for sources",
                description:
                  "We protect confidential sources rigorously and never pay for interviews or leaked documents.",
              },
              {
                icon: <LuBadgeCheck className="h-6 w-6 text-red-500" />,
                title: "Verification",
                description:
                  "Every claim is cross‑checked with primary sources. Unverified information is clearly labelled as such.",
              },
            ].map((principle, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="rounded-full bg-red-50 w-12 h-12 flex items-center justify-center">
                  {principle.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-950">
                  {principle.title}
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed standards */}
      <section className="border-t border-gray-200 bg-gray-50/50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-semibold text-gray-950 flex items-center gap-2">
                <LuFileCheck className="h-5 w-5 text-red-500" />
                Sourcing & attribution
              </h2>
              <div className="mt-4 space-y-3 text-gray-600">
                <p>
                  <strong>On‑the‑record sources</strong> are always preferred.
                  Their name and title are included unless a clear risk exists.
                </p>
                <p>
                  <strong>Anonymous sources</strong> are used only when:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    They face credible danger (legal, physical, professional)
                  </li>
                  <li>
                    The information is vital and cannot be obtained elsewhere
                  </li>
                  <li>
                    At least two independent sources corroborate the claim
                  </li>
                  <li>Our legal team reviews the risk assessment</li>
                </ul>
                <p>
                  <strong>Attribution:</strong> We clearly distinguish between
                  facts, analysis, and opinion. Wire services (AP, Reuters) are
                  credited. User‑generated content is verified before use.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-950 flex items-center gap-2">
                <LuShield className="h-5 w-5 text-red-500" />
                Corrections & updates
              </h2>
              <div className="mt-4 space-y-3 text-gray-600">
                <p>
                  When we make an error, we correct it transparently. The
                  original text remains visible with a strikethrough or a note
                  explaining the change, along with the date and reason.
                </p>
                <p>
                  Significant corrections are noted at the top of the article.
                  Readers can report errors via{" "}
                  <a
                    href="mailto:corrections@nebulanews.com"
                    className="text-red-500 hover:underline"
                  >
                    corrections@nebulanews.com
                  </a>
                  .
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-950 flex items-center gap-2">
                <LuUsers className="h-5 w-5 text-red-500" />
                Diversity & inclusion
              </h2>
              <div className="mt-4 text-gray-600">
                <p>
                  We strive to represent the full diversity of our global
                  audience. Our newsroom actively seeks sources of different
                  backgrounds, avoids stereotypes, and uses inclusive language.
                  We do not tolerate harassment or discrimination.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-950 flex items-center gap-2">
                <LuScale className="h-5 w-5 text-red-500" />
                Conflicts of interest
              </h2>
              <div className="mt-4 space-y-3 text-gray-600">
                <p>
                  Staff and contributors must disclose any financial, political,
                  or personal relationships that could influence coverage. They
                  may not cover topics where they have a direct stake. All
                  conflicts are disclosed to readers.
                </p>
                <p>
                  Journalists are prohibited from accepting gifts, free travel,
                  or paid speaking engagements from entities they cover.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-950 flex items-center gap-2">
                <LuBookOpen className="h-5 w-5 text-red-500" />
                Opinion & analysis
              </h2>
              <div className="mt-4 text-gray-600">
                <p>
                  Opinion pieces and columns are clearly labelled and separated
                  from news reporting. They reflect the author's views, not
                  those of Nebula News. Factual claims in opinion pieces are
                  still subject to verification.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-950 flex items-center gap-2">
                <LuEye className="h-5 w-5 text-red-500" />
                Privacy & harm minimisation
              </h2>
              <div className="mt-4 text-gray-600">
                <p>
                  We balance the public’s right to know against potential harm.
                  We do not publish gratuitous graphic content, identify victims
                  of sexual assault without consent, or intrude on grief without
                  justification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enforcement & accountability */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 sm:p-10">
            <div className="text-center max-w-2xl mx-auto">
              <LuUsers className="mx-auto h-8 w-8 text-red-500" />
              <h2 className="mt-3 text-2xl font-semibold text-gray-950">
                Holding us accountable
              </h2>
              <p className="mt-2 text-gray-600">
                If you believe Nebula News has violated these guidelines, you
                may appeal to our independent readers’ representative
                (ombudsman). The ombudsman investigates complaints and publishes
                findings quarterly.
              </p>
              <Link
                href="/ombudsman"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-50"
              >
                Contact ombudsman
                <LuArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer note */}
      <section className="border-t border-gray-100 py-8">
        <div className="mx-auto max-w-7xl px-4 text-center text-xs text-gray-400">
          Nebula News — founded 2019. Member of the Global Investigative
          Journalism Network (GIJN) and the International Press Institute (IPI).
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Add missing imports
import { LuArrowRight } from "react-icons/lu";
