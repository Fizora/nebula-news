"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  LuArrowRight,
  LuClock3,
  LuTrendingUp,
  LuFlame,
  LuGlobe,
  LuNewspaper,
} from "react-icons/lu";
import { LucideBarChart3 } from "lucide-react";

// Trending stories data – 12 items, ranked by current engagement
const trendingStories = [
  {
    rank: 1,
    category: "International",
    title: "G7 agrees to $50B loan for Ukraine using frozen Russian assets",
    excerpt:
      "Leaders finalise legal framework; funds to be disbursed by year‑end. IMF says move sets 'powerful precedent' for asset confiscation.",
    time: "35 min ago",
    reads: "142k",
    surge: "+312%",
    icon: LuGlobe,
  },
  {
    rank: 2,
    category: "Politics",
    title: "House GOP unveils budget blueprint with $4.5T in tax cuts",
    excerpt:
      "Plan extends TCJA provisions, adds work requirements for food stamps. Moderate Republicans signal opposition to deficit impact.",
    time: "1 hr ago",
    reads: "98k",
    surge: "+287%",
    icon: LuNewspaper,
  },
  {
    rank: 3,
    category: "Technology",
    title: "Nvidia announces next‑gen Rubin AI platform for 2026 delivery",
    excerpt:
      "CEO Huang reveals Vera CPU and Rubin GPU; 3x performance uplift over Blackwell. TSMC 3nm process confirmed.",
    time: "2 hr ago",
    reads: "211k",
    surge: "+456%",
    icon: LucideBarChart3,
  },
  {
    rank: 4,
    category: "Business",
    title:
      "Exxon warns of 12% drop in Q2 refining margins on weak diesel demand",
    excerpt:
      "Permian production remains strong but global oversupply hits downstream. Shares down 3.2% in after‑hours trading.",
    time: "3 hr ago",
    reads: "67k",
    surge: "+178%",
    icon: LuTrendingUp,
  },
  {
    rank: 5,
    category: "International",
    title: "India’s opposition alliance leads surprise election surge",
    excerpt:
      "Early leads show INDIA bloc ahead in 220 seats; markets tumble 4% on policy uncertainty. Modi’s BJP falls short of majority.",
    time: "4 hr ago",
    reads: "189k",
    surge: "+423%",
    icon: LuGlobe,
  },
  {
    rank: 6,
    category: "Climate",
    title: "June heatwave breaks records across three continents",
    excerpt:
      "Temperatures hit 48.9°C in Saudi Arabia, 43°C in Spain, 38°C in Japan. Power grids strained; crops damaged.",
    time: "5 hr ago",
    reads: "76k",
    surge: "+201%",
    icon: LuFlame,
  },
  {
    rank: 7,
    category: "Crypto",
    title: "Ethereum ETFs begin trading July 2, SEC gives final approval",
    excerpt:
      "Eight issuers including BlackRock and Fidelity to launch. Analysts predict $5B inflows in first month.",
    time: "6 hr ago",
    reads: "103k",
    surge: "+398%",
    icon: LucideBarChart3,
  },
  {
    rank: 8,
    category: "Sports",
    title: "Copa América final: Argentina vs Uruguay sets viewership record",
    excerpt:
      "Messi scores twice in 3‑1 win; match draws 45M US viewers, surpassing 2024 Super Bowl numbers.",
    time: "7 hr ago",
    reads: "82k",
    surge: "+164%",
    icon: LuTrendingUp,
  },
  {
    rank: 9,
    category: "Health",
    title:
      "Novo Nordisk’s weight loss drug approved for heart failure prevention",
    excerpt:
      "FDA expands Ozempic label based on SELECT trial showing 20% risk reduction. Stock jumps 8% pre‑market.",
    time: "8 hr ago",
    reads: "59k",
    surge: "+142%",
    icon: LuNewspaper,
  },
  {
    rank: 10,
    category: "Economy",
    title: "US job openings fall to 8.05M, lowest since February 2021",
    excerpt:
      "JOLTS report shows cooling labour market; Fed odds of September cut rise to 74%. Treasury yields drop 8bps.",
    time: "9 hr ago",
    reads: "114k",
    surge: "+233%",
    icon: LucideBarChart3,
  },
  {
    rank: 11,
    category: "Culture",
    title: "Taylor Swift's 'Eras' tour becomes first $2B grossing concert run",
    excerpt:
      "Pollstar data shows 4.5M tickets sold across 60 shows. Beats Elton John's previous record of $939M.",
    time: "10 hr ago",
    reads: "97k",
    surge: "+156%",
    icon: LuFlame,
  },
  {
    rank: 12,
    category: "Science",
    title:
      "NASA’s Webb telescope detects carbon dioxide on Jupiter’s moon Europa",
    excerpt:
      "Subsurface ocean likely contains CO2, raising prospects for habitability. Clipper mission launch set for October.",
    time: "12 hr ago",
    reads: "54k",
    surge: "+119%",
    icon: LuGlobe,
  },
];

// Sidebar: most read topics (last 24h)
const topTopics = [
  { name: "AI regulation", volume: "14.2k mentions", trend: "+45%" },
  { name: "Fed rate path", volume: "11.8k mentions", trend: "+32%" },
  { name: "Oil prices", volume: "9.5k mentions", trend: "+28%" },
  { name: "Chinese EV tariffs", volume: "7.9k mentions", trend: "+67%" },
  { name: "Crypto ETFs", volume: "6.3k mentions", trend: "+112%" },
];

export default function Trending() {
  return (
    <main className="bg-white text-gray-950">
      <Navbar />

      {/* Hero section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                <LuFlame className="h-4 w-4 text-red-500" />
                Real‑time signals
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
                Trending now
              </h1>
              <p className="text-base leading-7 text-gray-600 sm:text-lg">
                What the world is reading — updated every 5 minutes. Ranked by
                velocity and engagement across 12,000+ sources.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <div className="flex h-2 w-2 animate-pulse rounded-full bg-red-500"></div>
              Live updates
            </div>
          </div>
        </div>
      </section>

      {/* Main grid: 12 trending cards + sidebar */}
      <section className="border-t border-gray-100 py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Left column: trending stories grid */}
            <div className="lg:col-span-8">
              <div className="space-y-4">
                {trendingStories.map((story) => (
                  <article
                    key={story.rank}
                    className="group flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:shadow-md sm:flex-row sm:items-start"
                  >
                    {/* Rank + icon */}
                    <div className="flex shrink-0 flex-row items-center gap-2 sm:flex-col sm:items-start">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-lg font-bold text-red-600 shadow-sm">
                        {story.rank}
                      </span>
                      <story.icon className="hidden h-5 w-5 text-gray-400 sm:block" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 text-xs">
                        <span className="rounded-full bg-red-50 px-2.5 py-0.5 font-semibold text-red-600">
                          {story.category}
                        </span>
                        <span className="flex items-center gap-1 text-gray-400">
                          <LuClock3 className="h-3 w-3" />
                          {story.time}
                        </span>
                      </div>
                      <h2 className="mt-2 text-lg font-semibold leading-tight text-gray-950 group-hover:text-red-500 sm:text-xl">
                        {story.title}
                      </h2>
                      <p className="mt-1 text-sm leading-6 text-gray-600 sm:text-base">
                        {story.excerpt}
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          📖 {story.reads} reads
                        </span>
                        <span className="flex items-center gap-1 text-red-500">
                          🔥 +{story.surge}
                        </span>
                        <Link
                          href={`/trending/${story.rank}`}
                          className="inline-flex items-center gap-1 text-sm font-medium text-red-500 hover:underline"
                        >
                          Read full story
                          <LuArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination or "load more" (optional) */}
              <div className="mt-8 flex justify-center">
                <button className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-50">
                  Load more trending
                  <LuArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Sidebar – trending topics and most read */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                {/* Trending topics card */}
                <div className="rounded-3xl border border-gray-200 bg-gray-50 p-5 sm:p-6">
                  <div className="flex items-center gap-2 border-b border-gray-200 pb-4">
                    <LuTrendingUp className="h-5 w-5 text-red-500" />
                    <h2 className="text-lg font-semibold text-gray-950">
                      Top topics (last 24h)
                    </h2>
                  </div>
                  <div className="mt-4 space-y-3">
                    {topTopics.map((topic) => (
                      <div
                        key={topic.name}
                        className="flex items-center justify-between rounded-2xl bg-white p-3 shadow-sm"
                      >
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {topic.name}
                          </p>
                          <p className="text-xs text-gray-400">
                            {topic.volume}
                          </p>
                        </div>
                        <span className="text-sm font-semibold text-red-500">
                          {topic.trend}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Most read articles (sidebar) */}
                <div className="rounded-3xl border border-gray-200 bg-gray-50 p-5 sm:p-6">
                  <h2 className="text-lg font-semibold text-gray-950">
                    Most read
                  </h2>
                  <div className="mt-4 space-y-3">
                    {trendingStories.slice(0, 4).map((story, idx) => (
                      <Link
                        key={idx}
                        href={`/trending/${story.rank}`}
                        className="group flex items-start gap-2 rounded-xl bg-white p-3 transition-colors hover:bg-red-50"
                      >
                        <span className="text-sm font-bold text-red-500">
                          {idx + 1}.
                        </span>
                        <p className="text-sm leading-tight text-gray-800 group-hover:text-red-600">
                          {story.title.slice(0, 70)}…
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Nebula Terminal promo */}
                <div className="rounded-3xl bg-linear-to-br from-gray-950 to-gray-800 p-5 text-white sm:p-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-gray-300">
                    Real‑time terminal
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">
                    Get trending before it trends
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-300">
                    Nebula Terminal users see velocity signals 15 minutes ahead.
                    Start your trial.
                  </p>
                  <Link
                    href="/terminal"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-600"
                  >
                    Try free
                    <LuArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="border-t border-gray-100 py-8">
        <div className="mx-auto max-w-7xl px-4 text-center text-xs text-gray-400">
          Trending ranks are based on proprietary velocity score (mentions ×
          engagement). Updated every 5 minutes. Source: Nebula News network.
        </div>
      </section>
    </main>
  );
}
