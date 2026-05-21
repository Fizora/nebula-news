"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  LuArrowRight,
  LuShieldCheck,
  LuTarget,
  LuSparkles,
  LuUsers,
  LuBookOpen,
  LuGlobe,
  LuEye,
  LuFileCheck,
  LuScale,
  LuLock,
  LuBadgeCheck,
} from "react-icons/lu";
import Footer from "@/components/Footer";

export default function Journalism() {
  return (
    <main className="bg-white text-gray-950">
      <Navbar />

      {/* Hero – mission statement */}
      <section className="py-18 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              <LuShieldCheck className="h-4 w-4 text-red-500" />
              Our foundation
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
              Journalism that answers
              <span className="block text-red-500">only to the truth.</span>
            </h1>
            <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
              Nebula Journalism operates independently of any government,
              corporation, or political party. We do not accept propaganda,
              suppress facts, or bend to pressure — even when laws are used to
              intimidate.
            </p>
          </div>
        </div>
      </section>

      {/* Core principles grid – 6 cards */}
      <section className="border-t border-gray-100 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-gray-950 sm:text-3xl">
              Six pillars of editorial integrity
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-gray-600">
              Every story — from a local zoning dispute to a cross‑border
              investigation — is held to the same unbreakable standards.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <LuTarget className="h-8 w-8 text-red-500" />
              <h3 className="mt-4 text-lg font-semibold">Independence first</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                No funder, advertiser, or official has veto power over our
                coverage. Our only allegiance is to verified fact.
              </p>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <LuScale className="h-8 w-8 text-red-500" />
              <h3 className="mt-4 text-lg font-semibold">Anti‑propaganda</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                We reject all forms of state or commercial disinformation. Any
                story that originates from a known propaganda outlet is
                automatically flagged and excluded.
              </p>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <LuFileCheck className="h-8 w-8 text-red-500" />
              <h3 className="mt-4 text-lg font-semibold">
                Four‑layer verification
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Factual check, source cross‑reference, legal review, and
                stylistic edit. No article moves to publication without all four
                sign‑offs.
              </p>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <LuGlobe className="h-8 w-8 text-red-500" />
              <h3 className="mt-4 text-lg font-semibold">
                Global law & press freedom
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                We respect local laws unless they are used to silence, coerce,
                or punish journalists. In those cases, we report the coercion
                itself as news.
              </p>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <LuEye className="h-8 w-8 text-red-500" />
              <h3 className="mt-4 text-lg font-semibold">
                Transparency of corrections
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                If new evidence emerges, we issue a correction with full
                visibility — original text, date, and reason for change. No
                silent edits.
              </p>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <LuBadgeCheck className="h-8 w-8 text-red-500" />
              <h3 className="mt-4 text-lg font-semibold">
                Anonymous source policy
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                We use unnamed sources only when they face credible danger. At
                least two independent sources must corroborate, and our legal
                team verifies the risk assessment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pre‑publication process – detailed, step‑by-step */}
      <section className="bg-linear-to-br from-gray-50 to-white border-t border-gray-100 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                <LuBookOpen className="h-4 w-4 text-red-500" />
                Operational procedure
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950">
                How a story earns its publication
              </h2>
              <p className="mt-2 text-base text-gray-600">
                Every Nebula News article passes through a mandatory,
                time‑stamped workflow. No shortcuts.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">
                  1
                </div>
                <div>
                  <h3 className="font-semibold">Pitch & assignment</h3>
                  <p className="text-sm text-gray-600">
                    Story idea must include primary sources or raw data. Opinion
                    pieces are clearly labelled and separated from news.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">
                  2
                </div>
                <div>
                  <h3 className="font-semibold">Field reporting & recording</h3>
                  <p className="text-sm text-gray-600">
                    All interviews are recorded (with consent) or
                    contemporaneously documented. At least two independent
                    confirmations for any disputed claim.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">
                  3
                </div>
                <div>
                  <h3 className="font-semibold">Factual verification desk</h3>
                  <p className="text-sm text-gray-600">
                    Dedicated team cross‑references every number, quote, and
                    date against primary documents, public records, or
                    on‑the‑record sources.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">
                  4
                </div>
                <div>
                  <h3 className="font-semibold">Legal & risk review</h3>
                  <p className="text-sm text-gray-600">
                    Internal counsel assesses defamation, national security
                    overreach, and potential retaliation against sources. If a
                    government threatens legal action to suppress the story, we
                    publish the threat alongside the article.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">
                  5
                </div>
                <div>
                  <h3 className="font-semibold">Final editorial sign‑off</h3>
                  <p className="text-sm text-gray-600">
                    Editor‑in‑chief or deputy approves for publication. The
                    approval logs are stored immutably for internal audit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal compliance & press freedom caveat – explicit language */}
      <section className="border-t border-gray-100 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-3xl border border-red-100 bg-red-50/30 p-6 text-center sm:p-8">
            <LuGlobe className="mx-auto h-10 w-10 text-red-500" />
            <h2 className="mt-3 text-2xl font-bold text-gray-950">
              We obey laws — unless they are weapons
            </h2>
            <p className="mx-auto mt-2 max-w-3xl text-base text-gray-700">
              Nebula Journalism complies with all legal requirements of the
              countries where we operate. <strong>However</strong>, if a
              government uses laws — including national security, defamation, or
              licensing statutes — to coerce, intimidate, or obstruct our
              reporting, we will (a) report the coercion as a news story, (b)
              seek international legal support, and (c) continue publishing the
              underlying facts from a jurisdiction that upholds press freedom.
            </p>
            <div className="mt-4 text-sm font-semibold text-red-600">
              This is not a political stance. It is a professional necessity.
            </div>
          </div>
        </div>
      </section>

      {/* Privacy policy summary – clear, readable */}
      <section className="border-t border-gray-100 bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center gap-2 border-b border-gray-200 pb-4">
            <LuLock className="h-5 w-5 text-red-500" />
            <h2 className="text-xl font-semibold text-gray-950">
              Privacy & data protection
            </h2>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="font-semibold text-gray-900">
                What we collect (minimal)
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-gray-600">
                <li>• Email address (for newsletters or terminal access)</li>
                <li>• Anonymous reading metrics (no IP storage after 24h)</li>
                <li>• Voluntary survey responses</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">
                What we never collect
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-gray-600">
                <li>
                  • Government IDs or real names (unless legally required for
                  payments)
                </li>
                <li>• Browsing history outside nebula.news</li>
                <li>• Location data (GPS or Wi‑Fi triangulation)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">
                Data sharing & third parties
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                We do not sell or rent personal data. We use a single,
                privacy‑compliant email processor (Postmark). No analytics
                cookies are set without explicit consent.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">
                Source confidentiality
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                We use encrypted communication (Signal, ProtonMail) for
                whistleblowers. Our servers are located in Iceland and
                Switzerland, protected by strong shield laws.
              </p>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-gray-400">
            Full privacy policy and data request form available at /privacy. For
            urgent takedown or correction requests, email legal@nebula.news (PGP
            key on contact page).
          </p>
        </div>
      </section>

      {/* Ombudsman & accountability */}
      <section className="border-t border-gray-100 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <LuUsers className="mx-auto h-8 w-8 text-red-500" />
          <h2 className="mt-3 text-2xl font-bold text-gray-950">
            Independent readers’ representative
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-base text-gray-600">
            Nebula News maintains a paid, independent ombudsman who is not an
            employee. You can appeal any editorial decision or report a breach
            of these guidelines. The ombudsman’s findings are published
            quarterly, unredacted.
          </p>
          <Link
            href="/ombudsman"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-50"
          >
            Contact ombudsman
            <LuArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Footer note */}
      <section className="border-t border-gray-100 py-8">
        <div className="mx-auto max-w-7xl px-4 text-center text-xs text-gray-400">
          Nebula Journalism — founded 2019. Member of the Global Investigative
          Journalism Network (GIJN) and the International Press Institute (IPI).
        </div>
      </section>
      <Footer></Footer>
    </main>
  );
}
