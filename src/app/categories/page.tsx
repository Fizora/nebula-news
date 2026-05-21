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
  LuClock3,
  LuFlag,
  LuGlobe,
  LuGamepad2,
  LuPalette,
  LuHeartPulse,
  LuAtom,
  LuTrophy,
  LuMusic,
  LuSun,
  LuBookOpen,
  LuBuilding2,
} from "react-icons/lu";
import {
  LucideCheckCircle2,
  LucideGlobe2,
  LucideBarChart3,
} from "lucide-react";
import Footer from "@/components/Footer";

// ========== FREE ACCESS CATEGORIES (general news) ==========
const freeCategories = [
  {
    slug: "politics",
    name: "Politics",
    icon: LuFlag,
    description: "Legislative battles, executive orders, and campaign finance.",
    storyCount: 342,
    latestHeadline:
      "House passes $1.2T infrastructure bill with bipartisan backing",
    metric: "87-11",
    metricLabel: "Senate vote",
  },
  {
    slug: "world",
    name: "World News",
    icon: LuGlobe,
    description:
      "Geopolitical shifts, diplomatic summits, and conflict updates.",
    storyCount: 521,
    latestHeadline:
      "EU agrees on 50B euro aid package for Ukraine; Hungary lifts veto",
    metric: "€50B",
    metricLabel: "Committed aid",
  },
  {
    slug: "business",
    name: "Business",
    icon: LuBriefcase,
    description: "Earnings reports, CEO moves, and consumer trends.",
    storyCount: 415,
    latestHeadline: "Apple beats on services revenue; China sales drop 8%",
    metric: "+4.2%",
    metricLabel: "After‑hours move",
  },
  {
    slug: "technology",
    name: "Technology",
    icon: LuCpu,
    description: "Product launches, antitrust probes, and VC funding rounds.",
    storyCount: 298,
    latestHeadline: "Google announces AI search overhaul; shares jump 5%",
    metric: "$2.1B",
    metricLabel: "Q1 cloud revenue",
  },
  {
    slug: "health",
    name: "Health",
    icon: LuHeartPulse,
    description:
      "Drug approvals, pandemic preparedness, and insurance reforms.",
    storyCount: 187,
    latestHeadline:
      "Novo Nordisk’s oral obesity drug shows 15% weight loss in trial",
    metric: "+22%",
    metricLabel: "Stock pre‑market",
  },
  {
    slug: "science",
    name: "Science",
    icon: LuAtom,
    description:
      "Space exploration, climate research, and breakthrough discoveries.",
    storyCount: 112,
    latestHeadline:
      "NASA’s Mars rover finds organic molecules in ancient lake bed",
    metric: "3.7B years",
    metricLabel: "Estimated age",
  },
  {
    slug: "sports",
    name: "Sports",
    icon: LuTrophy,
    description: "League standings, trade deadlines, and athlete contracts.",
    storyCount: 256,
    latestHeadline: "NBA Finals: Celtics force Game 7 with 30‑point blowout",
    metric: "30 pts",
    metricLabel: "Margin of victory",
  },
  {
    slug: "culture",
    name: "Culture",
    icon: LuPalette,
    description: "Art exhibitions, film festivals, and literary awards.",
    storyCount: 98,
    latestHeadline: "Cannes Palme d’Or goes to Sean Baker’s ‘Anora’",
    metric: "95%",
    metricLabel: "Rotten Tomatoes",
  },
  {
    slug: "lifestyle",
    name: "Lifestyle",
    icon: LuSun,
    description: "Travel, food, wellness, and home trends.",
    storyCount: 134,
    latestHeadline: "Remote work stabilises at 28% of paid days – new normal",
    metric: "28%",
    metricLabel: "Work from home",
  },
  {
    slug: "education",
    name: "Education",
    icon: LuBookOpen,
    description: "Curriculum changes, student debt relief, and edtech funding.",
    storyCount: 76,
    latestHeadline:
      "Biden cancels $5.8B more in student loans for 78,000 borrowers",
    metric: "$5.8B",
    metricLabel: "Loan forgiveness",
  },
  {
    slug: "environment",
    name: "Environment",
    icon: LuGlobe, // reusing, but fine
    description: "Wildfires, emissions targets, and conservation efforts.",
    storyCount: 143,
    latestHeadline:
      "Amazon deforestation falls 30% under new monitoring system",
    metric: "-30%",
    metricLabel: "Year over year",
  },
  {
    slug: "local",
    name: "Local News",
    icon: LuBuilding2,
    description:
      "City council decisions, zoning changes, and community stories.",
    storyCount: 209,
    latestHeadline: "NYC congestion pricing starts June 30; $15 toll for cars",
    metric: "$15",
    metricLabel: "Peak toll",
  },
];

// ========== NEBULA TERMINAL CATEGORIES (professional / commercial) ==========
const terminalCategories = [
  {
    slug: "monetary-policy",
    name: "Monetary Policy",
    icon: LucideBarChart3,
    description:
      "Central bank decisions, rate forecasts, and liquidity signals.",
    storyCount: 142,
    latestHeadline:
      "Fed’s Waller: ‘No rush’ to cut as services inflation remains sticky",
    metric: "5.25%-5.50%",
    metricLabel: "Target rate",
  },
  {
    slug: "equities",
    name: "Equities",
    icon: LuTrendingUp,
    description:
      "Earnings surprises, sector rotations, institutional positioning.",
    storyCount: 287,
    latestHeadline:
      "Hedge funds add Tech at fastest pace since Nov; semis lead flows",
    metric: "+2.3%",
    metricLabel: "Nasdaq futures",
  },
  {
    slug: "fx-emerging",
    name: "FX & Emerging Markets",
    icon: LuDollarSign,
    description: "Currency intervention, carry trades, EM debt flows.",
    storyCount: 98,
    latestHeadline:
      "BI holds rate at 6.25%, signals additional FX intervention tools",
    metric: "15,380",
    metricLabel: "USD/IDR spot",
  },
  {
    slug: "crypto-assets",
    name: "Crypto Assets",
    icon: LuActivity,
    description: "On‑chain flows, ETF flows, derivatives open interest.",
    storyCount: 76,
    latestHeadline:
      "Bitcoin funding rate turns negative; potential short squeeze setup",
    metric: "$67,200",
    metricLabel: "BTC perpetual",
  },
  {
    slug: "commodities",
    name: "Commodities",
    icon: LucideGlobe2,
    description: "Supply shocks, inventory reports, shipping disruptions.",
    storyCount: 113,
    latestHeadline: "LME copper cash‑3m spread blows out to $125 backwardation",
    metric: "+4.7%",
    metricLabel: "Copper YTD",
  },
  {
    slug: "geopolitics",
    name: "Geopolitics & Trade",
    icon: LuTarget,
    description: "Sanctions, export controls, supply chain reconfigurations.",
    storyCount: 94,
    latestHeadline: "EU advances tariff on Chinese EVs; retaliation risks rise",
    metric: "22%",
    metricLabel: "Projected tariff",
  },
  {
    slug: "credit",
    name: "Credit & Fixed Income",
    icon: LuShieldCheck,
    description: "IG/HY spreads, covenant quality, central bank purchases.",
    storyCount: 65,
    latestHeadline:
      "Investment grade spreads tighten to 89bp – narrowest since 2022",
    metric: "4.32%",
    metricLabel: "10Y Treasury",
  },
  {
    slug: "derivatives",
    name: "Derivatives & Positioning",
    icon: LuZap,
    description: "Options flow, gamma exposure, volatility term structure.",
    storyCount: 52,
    latestHeadline:
      "VIX futures in steep contango; vol sellers reload positions",
    metric: "14.2",
    metricLabel: "VIX index",
  },
  {
    slug: "ma-deals",
    name: "M&A & Deal Flow",
    icon: LuBriefcase,
    description:
      "Pending mergers, antitrust reviews, private equity dry powder.",
    storyCount: 41,
    latestHeadline:
      "KKR eyes $5B take‑private of Southeast Asian data centre operator",
    metric: "$5.2B",
    metricLabel: "Deal size",
  },
  {
    slug: "ai-infra",
    name: "AI Infrastructure",
    icon: LuCpu,
    description: "GPU supply chains, data centre power, hyperscaler capex.",
    storyCount: 38,
    latestHeadline: "TSMC’s CoWoS capacity to double by Q4; NVDA demand intact",
    metric: "+34%",
    metricLabel: "2025 capex YoY",
  },
  {
    slug: "labor-markets",
    name: "Employment & Wages",
    icon: LuUsers,
    description: "JOLTS, non‑farm payrolls, wage growth, participation rate.",
    storyCount: 67,
    latestHeadline:
      "May jobs preview: 185K added, unemployment unchanged at 3.8%",
    metric: "185k",
    metricLabel: "Median forecast",
  },
  {
    slug: "energy-transition",
    name: "Energy Transition",
    icon: LuSun,
    description:
      "Carbon pricing, renewable auctions, physical risk disclosure.",
    storyCount: 44,
    latestHeadline:
      "SEC climate rule survives legal challenge; compliance due 2026",
    metric: "2,800+",
    metricLabel: "Affected firms",
  },
];

// Trending (mix of free + terminal)
const trendingCategories = [
  { name: "Politics", delta: "+214%", slug: "politics" },
  { name: "Crypto Assets", delta: "+187%", slug: "crypto-assets" },
  { name: "AI Infrastructure", delta: "+92%", slug: "ai-infra" },
];

export default function Categories() {
  return (
    <main className="bg-white text-gray-950">
      <Navbar></Navbar>
      {/* Hero section */}
      <section className="py-18 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              <LucideBarChart3 className="h-4 w-4 text-red-500" />
              Browse by topic
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
              Free access. Deep dives.
            </h1>
            <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
              All general news categories are completely free. For
              decision‑intelligence tools and premium economic data, explore the
              Nebula Terminal sections below.
            </p>
          </div>

          {/* Trending bar */}
          <div className="mt-8 flex flex-wrap items-center gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              🔥 Trending now
            </span>
            {trendingCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm font-medium text-gray-900 shadow-sm transition hover:bg-red-50 hover:text-red-600"
              >
                {cat.name}
                <span className="text-xs text-red-500">{cat.delta}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FREE ACCESS CATEGORIES GRID */}
      <section className="border-t border-gray-100 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-8 flex items-center gap-2">
            <LuNewspaper className="h-6 w-6 text-red-500" />
            <h2 className="text-2xl font-bold text-gray-950 sm:text-3xl">
              General news – free for everyone
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {freeCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-900/5"
              >
                <div className="flex items-start justify-between">
                  <category.icon className="h-7 w-7 text-red-500" />
                  <span className="text-xs text-gray-400">
                    {category.storyCount} stories
                  </span>
                </div>
                <h2 className="mt-4 text-xl font-semibold text-gray-950 group-hover:text-red-500">
                  {category.name}
                </h2>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {category.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
                  <LuClock3 className="h-3.5 w-3.5" />
                  Latest
                </div>
                <p className="mt-1 text-sm font-medium text-gray-900">
                  {category.latestHeadline}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-400">
                      {category.metricLabel}
                    </p>
                    <p className="text-lg font-bold text-gray-950">
                      {category.metric}
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-red-500 group-hover:underline">
                    Read →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEBULA TERMINAL PROFESSIONAL CATEGORIES */}
      <section className="bg-linear-to-br from-gray-50 to-white border-t border-gray-100 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <LucideBarChart3 className="h-6 w-6 text-red-500" />
              <h2 className="text-2xl font-bold text-gray-950 sm:text-3xl">
                Nebula Terminal – Professional intelligence
              </h2>
            </div>
            <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
              Commercial product
            </span>
          </div>
          <p className="mb-6 max-w-2xl text-sm text-gray-600">
            Real‑time data, institutional flows, and actionable insights for
            investors, analysts, and economists.{" "}
            <strong>Not included in free tier.</strong>
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {terminalCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/terminal/${category.slug}`}
                className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-900/5"
              >
                <div className="flex items-start justify-between">
                  <category.icon className="h-7 w-7 text-red-500" />
                  <span className="text-xs text-gray-400">
                    {category.storyCount} signals
                  </span>
                </div>
                <h2 className="mt-4 text-xl font-semibold text-gray-950 group-hover:text-red-500">
                  {category.name}
                </h2>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {category.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
                  <LuClock3 className="h-3.5 w-3.5" />
                  Latest signal
                </div>
                <p className="mt-1 text-sm font-medium text-gray-900">
                  {category.latestHeadline}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-400">
                      {category.metricLabel}
                    </p>
                    <p className="text-lg font-bold text-gray-950">
                      {category.metric}
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-red-500 group-hover:underline">
                    Terminal →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA for terminal */}
      <section className="border-t border-gray-100 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 text-center sm:p-8">
            <h3 className="text-xl font-semibold text-gray-950">
              Get the full Nebula Terminal experience
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-sm text-gray-600">
              Unlimited access to all professional categories, real‑time alerts,
              API, and analyst briefings.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/terminal/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-950 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-gray-800"
              >
                View pricing
                <LuArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/terminal/demo"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50"
              >
                Request demo
              </Link>
            </div>
            <p className="mt-3 text-xs text-gray-400">
              Used by 240+ institutional clients, including sovereign funds and
              central banks.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="border-t border-gray-100 py-10">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="text-xs text-gray-400">
            Nebula News – free, independent journalism. Nebula Terminal –
            premium decision intelligence for global markets.
          </p>
        </div>
      </section>
      <Footer></Footer>
    </main>
  );
}
