"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  LuArrowRight,
  LuNewspaper,
  LuShieldCheck,
  LuUsers,
  LuTarget,
  LuSparkles,
  LuZap,
  LuBriefcase,
  LuCrown,
  LuTrendingUp,
  LuDollarSign,
  LuActivity,
  LuCpu,
} from "react-icons/lu";
import {
  LucideCheckCircle2,
  LucideGlobe2,
  LucideBarChart3,
} from "lucide-react";

// Decision‑driven news stories – crafted for investors, analysts, economists
const decisionNews = [
  {
    category: "Rates & Policy",
    title:
      "Fed’s balance sheet runoff to slow in June; BofA sees terminal rate at 4.25%",
    summary:
      "Updated projections from five primary dealers suggest a shallower tightening cycle. Swap markets now price 62bp of cuts by Dec, down from 88bp pre‑NFP.",
    metric: "62bp",
    metricLabel: "Cuts priced by Dec",
    time: "27 min ago",
    source: "Nebula Terminal – FEDWATCH",
  },
  {
    category: "Equities",
    title:
      "Semiconductor supply chain data shows inventory drawdown accelerating",
    summary:
      "Lead times for analog chips fell to 18.2 weeks (lowest since 2021). Morgan Stanley upgrades sector to Overweight. Key beneficiaries: TSM, ASML, and ON.",
    metric: "+4.2%",
    metricLabel: "SOX futures post‑data",
    time: "1 hr ago",
    source: "Nebula Supply Chain Tracker",
  },
  {
    category: "FX & Macro",
    title: "USD/IDR volatility spikes as BI intervenes; carry trade unwinds",
    summary:
      "Onshore forwards point to 15,400‑15,800 range over next quarter. Exporters hedging at 12‑month highs. DXY weakness may provide relief if Fed pivots.",
    metric: "15,620",
    metricLabel: "USD/IDR 1M NDF",
    time: "2 hr ago",
    source: "Nebula FX Flow Monitor",
  },
  {
    category: "Crypto",
    title:
      "Bitcoin ETF outflows reverse as stablecoin supply hits 9‑month high",
    summary:
      "Total stablecoin market cap +$4.7B in May; Tether mints $2B on Tron. Open interest on CME BTC futures back above $10B. Institutional basis trade returning.",
    metric: "$67,200",
    metricLabel: "BTC bid support",
    time: "3 hr ago",
    source: "Nebula Crypto Lens",
  },
  {
    category: "Geopolitics",
    title:
      "Red Sea shipping disruptions force reroutes; oil freight rates jump 22%",
    summary:
      "Tanker operators avoiding Bab el‑Mandeb add 12‑14 days to voyages. Brent backwardation deepens. IEA warns of Q3 supply gap if tensions persist.",
    metric: "$89.40",
    metricLabel: "Brent (front month)",
    time: "5 hr ago",
    source: "Nebula Energy Desk",
  },
  {
    category: "Emerging Markets",
    title:
      "Indonesia’s downstream nickel policy attracts Chinese smelter investment",
    summary:
      "New HPAL plant permits issued for three sites in Morowali. Eximbank commits $1.2B facility. EV battery supply chain shifts from Korea to RI.",
    metric: "$2.8B",
    metricLabel: "Committed FDI (May)",
    time: "6 hr ago",
    source: "Nebula Commodities",
  },
];

// Nebula Terminal features – superior to Bloomberg, at a fraction of cost
const terminalFeatures = [
  {
    icon: LucideBarChart3,
    title: "Real‑time market data",
    description:
      "Equities, FX, commodities, bonds, and crypto – aggregated from 140+ exchanges with sub‑millisecond latency.",
  },
  {
    icon: LuActivity,
    title: "Flow & positioning",
    description:
      "Track institutional order flow, options open interest, and hedge fund positioning across asset classes.",
  },
  {
    icon: LuCpu,
    title: "AI news summariser",
    description:
      "Natural language generation that extracts trade ideas, risks, and consensus from 50,000+ sources daily.",
  },
  {
    icon: LuTrendingUp,
    title: "Custom alerts & screens",
    description:
      "Build multi‑factor screens (P/E, short interest, volume spikes). Get push alerts when conditions trigger.",
  },
];

export default function AboutUs() {
  return (
    <main className="bg-white text-gray-950">
      {/* Hero – unchanged, but kept for consistency */}
      <section className="py-18 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="space-y-8 lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                <LuSparkles className="h-4 w-4 text-red-500" />
                Since 2019
              </div>
              <div className="space-y-5">
                <h1 className="max-w-3xl text-4xl font-title leading-[0.95] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  Journalism built for clarity,
                  <span className="block text-red-500">
                    context, and trust.
                  </span>
                </h1>
                <p className="max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
                  Nebula News is an independent editorial platform that combines
                  investigative depth with relentless fact‑checking. We don’t
                  chase clicks—we deliver stories that survive scrutiny.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/news"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-950 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-950/10"
                >
                  Explore News
                  <LuArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/categories"
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3.5 text-sm font-semibold text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50 hover:text-gray-950"
                >
                  Browse Categories
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
                  <LuNewspaper className="h-6 w-6 text-red-500" />
                  <h3 className="mt-4 text-lg font-semibold text-gray-950">
                    Editorial First
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Every story is pitched, sourced, and edited by a team that
                    worked at Reuters, the BBC, and the WSJ.
                  </p>
                </div>
                <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
                  <LuShieldCheck className="h-6 w-6 text-red-500" />
                  <h3 className="mt-4 text-lg font-semibold text-gray-950">
                    Triple‑verified
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    We cross‑reference primary sources, internal documents, and
                    on‑record interviews before publication.
                  </p>
                </div>
                <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
                  <LucideGlobe2 className="h-6 w-6 text-red-500" />
                  <h3 className="mt-4 text-lg font-semibold text-gray-950">
                    12 bureaus
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    From Jakarta to São Paulo, our correspondents are embedded
                    where decisions are made.
                  </p>
                </div>
                <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
                  <LuUsers className="h-6 w-6 text-red-500" />
                  <h3 className="mt-4 text-lg font-semibold text-gray-950">
                    40+ journalists
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Data analysts, photojournalists, and editors — all working
                    toward one standard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Decision‑Intelligence News Grid – pain point addressed: information lag */}
      <section className="border-t border-gray-100 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                <LuDollarSign className="h-4 w-4 text-red-500" />
                Decision Intelligence
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
                News that moves markets
              </h2>
              <p className="mt-2 max-w-2xl text-base text-gray-600">
                Actionable insights for investors, political analysts, and
                economists. No noise. No fluff. Just the signal.
              </p>
            </div>
            <Link
              href="/decision"
              className="inline-flex items-center gap-2 text-sm font-semibold text-red-500 hover:text-red-600"
            >
              All coverage <LuArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {decisionNews.map((item) => (
              <article
                key={item.title}
                className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <span className="rounded-full bg-red-50 px-2.5 py-0.5 text-xs font-semibold text-red-600">
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-400">{item.time}</span>
                </div>
                <h3 className="mt-3 text-base font-semibold leading-tight text-gray-950 group-hover:text-red-500">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {item.summary}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-400">
                      {item.metricLabel}
                    </p>
                    <p className="text-lg font-bold text-gray-950">
                      {item.metric}
                    </p>
                  </div>
                  <p className="text-xs text-gray-400">{item.source}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Nebula Terminal Section – Bloomberg competitor, far superior & cheaper */}
      <section className="bg-gradient-to-br from-gray-950 to-gray-900 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-300">
                <LuCpu className="h-4 w-4 text-red-400" />
                Nebula Terminal
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Professional grade.
                <span className="block text-red-400">Not the price tag.</span>
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-300">
                Real‑time financial data, news, analytics, and execution tools.
                The Bloomberg terminal costs $30,000 per user per year. Nebula
                Terminal delivers 95% of the functionality at{" "}
                <strong className="text-white">$2,880/year</strong>.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/terminal"
                  className="inline-flex items-center gap-2 rounded-full bg-red-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-600"
                >
                  Start 14‑day trial <LuArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/compare"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-600 px-5 py-2.5 text-sm font-semibold text-gray-300 transition-colors hover:border-gray-400 hover:text-white"
                >
                  Compare to Bloomberg
                </Link>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {terminalFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-gray-800 bg-gray-800/30 p-4 backdrop-blur-sm"
                >
                  <feature.icon className="h-7 w-7 text-red-400" />
                  <h3 className="mt-3 text-base font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
              <div className="sm:col-span-2 mt-2 rounded-2xl border border-gray-800 bg-gray-800/20 p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-400">
                      All‑in price (annual)
                    </p>
                    <p className="text-2xl font-bold text-white">$2,880</p>
                    <p className="text-sm text-gray-400">
                      vs Bloomberg ~$30,000 – save 90%
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium text-green-400">
                      Crypto data
                    </span>
                    <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium text-green-400">
                      API included
                    </span>
                    <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium text-green-400">
                      Unlimited alerts
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & approach – unchanged, kept for completeness */}
      <section className="border-t border-gray-100 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 transition-all hover:shadow-md">
              <LuTarget className="h-6 w-6 text-red-500" />
              <h2 className="mt-4 text-xl font-semibold text-gray-950">
                Our mission
              </h2>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                To restore trust in journalism by delivering reporting that is
                verifiable, empathetic, and actionable. We hold power
                accountable without performative outrage.
              </p>
              <div className="mt-4 text-xs font-medium uppercase tracking-wider text-red-500">
                Since founding
              </div>
              <p className="mt-1 text-sm text-gray-700">
                In 2019, we started with a single investigation into dark money
                flows in Southeast Asian supply chains. That series led to three
                legislative hearings and two anti‑corruption task forces.
              </p>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 transition-all hover:shadow-md">
              <LuSparkles className="h-6 w-6 text-red-500" />
              <h2 className="mt-4 text-xl font-semibold text-gray-950">
                Our method
              </h2>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Every article goes through a four‑layer edit: factual,
                contextual, legal, and stylistic. We publish corrections
                transparently when new evidence emerges.
              </p>
              <div className="mt-4 text-xs font-medium uppercase tracking-wider text-red-500">
                2024 impact
              </div>
              <p className="mt-1 text-sm text-gray-700">
                Our “Fractured Grid” investigation into aging energy
                infrastructure triggered a $2.1 billion federal modernization
                plan.
              </p>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 transition-all hover:shadow-md">
              <LuUsers className="h-6 w-6 text-red-500" />
              <h2 className="mt-4 text-xl font-semibold text-gray-950">
                Our community
              </h2>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Subscribers include policy directors at NATO, sovereign wealth
                funds, and journalists from 30+ countries. We host private
                briefings for members twice a month.
              </p>
              <div className="mt-4 text-xs font-medium uppercase tracking-wider text-red-500">
                Reader retention
              </div>
              <p className="mt-1 text-sm text-gray-700">
                83% of annual subscribers renew — more than double the industry
                average.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing section – four tiers (unchanged from original) */}
      <section className="border-t border-gray-100 bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              <LuCrown className="h-4 w-4 text-red-500" />
              Exclusive Access
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
              Plans for institutions & professionals
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-gray-600">
              Each tier includes full access to our archive, daily newsletters,
              and real‑time alerts. The higher tiers add analyst briefings, API
              access, and dedicated account teams.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Tier 1 – Essential $5,000/year */}
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                  Essential
                </span>
                <LuBriefcase className="h-5 w-5 text-gray-400" />
              </div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-gray-950">$5,000</span>
                <span className="text-sm text-gray-500">/ year</span>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                For solo analysts and small policy teams.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-2 text-sm">
                  <LucideCheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                  <span className="text-gray-700">
                    Full article archive (2019–present)
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <LucideCheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                  <span className="text-gray-700">
                    Daily policy brief (email & dashboard)
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <LucideCheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                  <span className="text-gray-700">Mobile‑optimised app</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-400">
                  <LucideCheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gray-300" />
                  <span>No analyst briefings</span>
                </li>
              </ul>
              <Link
                href="/subscribe/essential"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-gray-300 bg-white px-4 py-2.5 text-center text-sm font-semibold text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-50"
              >
                Get Essential
              </Link>
            </div>

            {/* Tier 2 – Professional $15,000/year */}
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">
                  Most popular
                </span>
                <LuZap className="h-5 w-5 text-red-400" />
              </div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-gray-950">
                  $15,000
                </span>
                <span className="text-sm text-gray-500">/ year</span>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                For research desks and corporate strategy units.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-2 text-sm">
                  <LucideCheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                  <span className="text-gray-700">Everything in Essential</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <LucideCheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                  <span className="text-gray-700">
                    Monthly 90‑min analyst webinar with Q&A
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <LucideCheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                  <span className="text-gray-700">
                    PDF export of investigations
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <LucideCheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                  <span className="text-gray-700">
                    5 user accounts (shared team dashboard)
                  </span>
                </li>
              </ul>
              <Link
                href="/subscribe/professional"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-gray-950 px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-gray-800"
              >
                Choose Professional
              </Link>
            </div>

            {/* Tier 3 – Executive $25,000/year */}
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                  Executive
                </span>
                <LuTarget className="h-5 w-5 text-gray-400" />
              </div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-gray-950">
                  $25,000
                </span>
                <span className="text-sm text-gray-500">/ year</span>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                For C‑suites, investment firms, and government agencies.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-2 text-sm">
                  <LucideCheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                  <span className="text-gray-700">
                    Everything in Professional
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <LucideCheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                  <span className="text-gray-700">
                    Bi‑weekly private briefings (virtual or in‑person)
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <LucideCheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                  <span className="text-gray-700">
                    Raw data appendices for major investigations
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <LucideCheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                  <span className="text-gray-700">15 user accounts + SSO</span>
                </li>
              </ul>
              <Link
                href="/subscribe/executive"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-gray-300 bg-white px-4 py-2.5 text-center text-sm font-semibold text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-50"
              >
                Contact Executive team
              </Link>
            </div>

            {/* Tier 4 – Ultimate $32,500/year (exact 500M IDR equivalent) */}
            <div className="relative rounded-3xl border-2 border-red-200 bg-gradient-to-br from-white to-red-50/30 p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl">
              <div className="absolute -top-3 left-6 rounded-full bg-red-500 px-3 py-0.5 text-xs font-bold uppercase tracking-wide text-white shadow-md">
                Ultimate
              </div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
                  500M IDR value
                </span>
                <LuCrown className="h-5 w-5 text-red-500" />
              </div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-gray-950">
                  $32,500
                </span>
                <span className="text-sm text-gray-500">/ year</span>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Exactly the annual equivalent of 500 million rupiah.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-2 text-sm">
                  <LucideCheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                  <span className="text-gray-700">Everything in Executive</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <LucideCheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                  <span className="text-gray-700">
                    Direct 24/7 analyst hotline (SLA 2 hours)
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <LucideCheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                  <span className="text-gray-700">
                    Full REST API for custom integrations
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <LucideCheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                  <span className="text-gray-700">
                    Unlimited user seats + legal indemnification
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <LucideCheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                  <span className="text-gray-700">
                    Annual on‑site strategy day with our senior editors
                  </span>
                </li>
              </ul>
              <Link
                href="/subscribe/ultimate"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-red-500 px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-red-600"
              >
                Claim Ultimate access
              </Link>
            </div>
          </div>

          <p className="mt-10 text-center text-xs text-gray-500">
            All prices in USD. Multi‑year agreements receive a 7% discount.
            Enterprise SLA and custom data feeds available upon request.
          </p>
        </div>
      </section>

      {/* Footer credibility note – unchanged */}
      <section className="border-t border-gray-100 py-10">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="text-xs text-gray-400">
            Nebula News is a registered independent news organisation.
            Investigations are protected by the Global Press Freedom Act.
            Corrections policy and ethics code available at /transparency.
          </p>
        </div>
      </section>
    </main>
  );
}
