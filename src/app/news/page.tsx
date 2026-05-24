"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import {
  LuArrowRight,
  LuClock3,
  LuBadgeAlert,
  LuTrendingUp,
} from "react-icons/lu";
import Footer from "@/components/Footer";

type NewsItem = {
  category: string;
  title: string;
  excerpt: string;
  time: string;
  featured?: boolean;
};

const newsItems: NewsItem[] = [
  // Page 1 (cards 1–12)
  {
    category: "Politics",
    title:
      "Policy shifts reshape the national agenda as leaders outline next steps",
    excerpt:
      "A deeper look at the decisions driving the week's most important political developments and what they mean going forward.",
    time: "2 hours ago",
    featured: true,
  },
  {
    category: "Business",
    title:
      "Markets steady as investors watch inflation signals and earnings outlook",
    excerpt:
      "Analysts are closely tracking the data, with sentiment improving across several key sectors.",
    time: "4 hours ago",
  },
  {
    category: "World",
    title:
      "Global talks continue as stakeholders push for broader regional cooperation",
    excerpt:
      "Negotiations remain active, with diplomats emphasizing stability, trade, and long-term alignment.",
    time: "6 hours ago",
  },
  {
    category: "Technology",
    title:
      "AI adoption accelerates as companies rethink products, workflow, and scale",
    excerpt:
      "Industry leaders are shifting from experiments to measurable deployment across core operations.",
    time: "8 hours ago",
  },
  {
    category: "Health",
    title:
      "Public health teams push stronger prevention strategies across major cities",
    excerpt:
      "Officials say early intervention and consistent awareness remain essential in lowering long-term risks.",
    time: "9 hours ago",
  },
  {
    category: "Environment",
    title:
      "Climate resilience plans expand as regions prepare for seasonal pressure",
    excerpt:
      "Local governments are increasing investments in infrastructure, mitigation, and emergency readiness.",
    time: "10 hours ago",
  },
  {
    category: "Education",
    title:
      "Schools modernize learning systems to support hybrid academic delivery",
    excerpt:
      "Institutions are balancing flexibility, access, and performance through updated digital workflows.",
    time: "12 hours ago",
  },
  {
    category: "Lifestyle",
    title:
      "Creative communities gain momentum through collaborative media projects",
    excerpt:
      "New independent formats are helping audiences discover stronger storytelling and fresh voices.",
    time: "14 hours ago",
  },
  {
    category: "Sports",
    title:
      "Major teams intensify preparation as season pressure begins to rise",
    excerpt:
      "Training schedules, team rotations, and tactical adjustments are shaping the latest outlook.",
    time: "15 hours ago",
  },
  {
    category: "Culture",
    title:
      "Independent creators gain wider attention through editorial features",
    excerpt:
      "Audience interest continues to grow as more stories highlight art, identity, and community.",
    time: "16 hours ago",
  },
  {
    category: "Economy",
    title:
      "Consumer confidence shifts as households balance spending priorities",
    excerpt:
      "New reports show changing behavior across essential goods, services, and digital purchases.",
    time: "17 hours ago",
  },
  {
    category: "Science",
    title:
      "Researchers release new findings on sustainable development strategies",
    excerpt:
      "The latest work focuses on practical methods for improving long-term resilience and efficiency.",
    time: "18 hours ago",
  },

  // Page 2 (cards 13–24)
  {
    category: "Local",
    title:
      "Regional communities respond to infrastructure upgrades and public planning",
    excerpt:
      "Local leaders are emphasizing access, mobility, and service improvement across neighborhoods.",
    time: "19 hours ago",
  },
  {
    category: "Opinion",
    title:
      "Editorial perspectives examine the future of media trust and public literacy",
    excerpt:
      "Writers are calling for stronger context, transparency, and audience-first reporting standards.",
    time: "20 hours ago",
  },
  {
    category: "Security",
    title:
      "Digital security awareness rises as organizations strengthen internal systems",
    excerpt:
      "Companies are adopting new policies to protect operations, data, and user trust at scale.",
    time: "21 hours ago",
  },
  {
    category: "Travel",
    title:
      "Tourism regions prepare for stronger demand as travel patterns recover",
    excerpt:
      "Operators are refining services and logistics to support a more reliable visitor experience.",
    time: "22 hours ago",
  },
  {
    category: "Politics",
    title:
      "New legislative session opens with focus on economic resilience and reform",
    excerpt:
      "Lawmakers are preparing to debate key bills that could reshape fiscal policy over the next decade.",
    time: "1 day ago",
  },
  {
    category: "Business",
    title:
      "Retail giants pivot to omnichannel strategies as consumer habits evolve",
    excerpt:
      "Traditional stores are integrating digital tools to maintain relevance and drive loyalty.",
    time: "1 day ago",
  },
  {
    category: "Technology",
    title:
      "Quantum computing breakthroughs hint at commercial applications by 2026",
    excerpt:
      "Researchers have achieved a new milestone in error correction, bringing stable qubits closer to reality.",
    time: "1 day ago",
  },
  {
    category: "Health",
    title:
      "New vaccine trials show promise against seasonal respiratory viruses",
    excerpt:
      "Early data suggests broad protection and fewer side effects compared to existing options.",
    time: "1 day ago",
  },
  {
    category: "Environment",
    title:
      "Reforestation projects expand across three continents with public-private backing",
    excerpt:
      "Millions of trees are being planted as part of a coordinated effort to restore biodiversity.",
    time: "1 day ago",
  },
  {
    category: "Education",
    title:
      "Universities adopt competency-based degrees to meet workforce demands",
    excerpt:
      "Employers are partnering with institutions to design curricula that emphasize practical skills.",
    time: "1 day ago",
  },
  {
    category: "Lifestyle",
    title:
      "Minimalist living trends inspire new architecture and interior design movements",
    excerpt:
      "More homeowners are choosing functional spaces that reduce clutter and lower stress.",
    time: "1 day ago",
  },
  {
    category: "Sports",
    title:
      "International tournament draws record viewership as underdogs advance",
    excerpt:
      "Upsets and dramatic finishes have captivated audiences across global time zones.",
    time: "1 day ago",
  },

  // Page 3 (cards 25–36)
  {
    category: "Culture",
    title:
      "Museum retrospectives celebrate overlooked artists from the 20th century",
    excerpt:
      "Curators are re-examining archives to bring forgotten masterpieces to new audiences.",
    time: "1 day ago",
  },
  {
    category: "Economy",
    title:
      "Interest rate decisions loom as central banks balance growth and inflation",
    excerpt:
      "Markets are pricing in a cautious approach, with employment data under close scrutiny.",
    time: "1 day ago",
  },
  {
    category: "Science",
    title: "Astronomers detect unusual signals from a nearby star system",
    excerpt:
      "The phenomena do not match known natural sources, prompting further observation campaigns.",
    time: "1 day ago",
  },
  {
    category: "Local",
    title:
      "City launches universal basic mobility pilot with subsidized transit passes",
    excerpt:
      "Residents in participating districts can access buses and bikeshares at reduced rates.",
    time: "1 day ago",
  },
  {
    category: "Opinion",
    title: "Why civic engagement matters more than ever in a polarized era",
    excerpt:
      "Community organizers share strategies for bridging divides and rebuilding trust.",
    time: "1 day ago",
  },
  {
    category: "Security",
    title: "Ransomware attacks shift focus to critical infrastructure sectors",
    excerpt:
      "Agencies urge utilities and hospitals to harden defenses after a spike in incidents.",
    time: "2 days ago",
  },
  {
    category: "Travel",
    title:
      "Slow travel movement gains traction as tourists seek authentic experiences",
    excerpt:
      "Longer stays and local homestays are replacing whirlwind itineraries in popular destinations.",
    time: "2 days ago",
  },
  {
    category: "Politics",
    title:
      "Cross‑party coalition forms to address housing affordability crisis",
    excerpt:
      "The agreement includes tax incentives for builders and rental assistance for low‑income families.",
    time: "2 days ago",
  },
  {
    category: "Business",
    title:
      "Supply chain innovations reduce delivery times while cutting emissions",
    excerpt:
      "Route optimization and electric fleets are reshaping logistics for major retailers.",
    time: "2 days ago",
  },
  {
    category: "Technology",
    title: "Augmented reality glasses enter mainstream consumer market",
    excerpt:
      "Lightweight designs and improved battery life are winning over early adopters.",
    time: "2 days ago",
  },
  {
    category: "Health",
    title: "Mental health apps see surge in usage as employers expand benefits",
    excerpt:
      "Digital therapy and wellness tracking are becoming standard workplace perks.",
    time: "2 days ago",
  },
  {
    category: "Environment",
    title:
      "Plastic waste treaty negotiations enter final round with high stakes",
    excerpt:
      "Delegates must resolve disagreements over production caps and recycling standards.",
    time: "2 days ago",
  },

  // Page 4 (cards 37–48)
  {
    category: "Education",
    title: "Micro‑schools and learning pods redefine the classroom experience",
    excerpt:
      "Small group settings allow for personalized instruction and flexible schedules.",
    time: "2 days ago",
  },
  {
    category: "Lifestyle",
    title: "Plant‑based diets evolve with new fermentation‑derived ingredients",
    excerpt:
      "Chefs are incorporating innovative proteins that mimic traditional textures and flavors.",
    time: "2 days ago",
  },
  {
    category: "Sports",
    title:
      "Esports organizations invest in player wellness and long‑term careers",
    excerpt:
      "Teams are hiring sports psychologists and nutritionists to support competitors.",
    time: "2 days ago",
  },
  {
    category: "Culture",
    title:
      "Independent bookstores thrive through community events and curated selections",
    excerpt:
      "Sales have rebounded as readers seek discovery beyond algorithm recommendations.",
    time: "2 days ago",
  },
  {
    category: "Economy",
    title: "Gig economy workers push for portable benefits and job security",
    excerpt:
      "Legislators are considering bills that would mandate contributions from platforms.",
    time: "2 days ago",
  },
  {
    category: "Science",
    title:
      "Marine biologists discover new coral species in unexplored deep‑sea reefs",
    excerpt:
      "The findings highlight the need for expanded ocean conservation zones.",
    time: "2 days ago",
  },
  {
    category: "Local",
    title:
      "Neighborhood solar co‑ops make renewable energy accessible to renters",
    excerpt:
      "Shared subscription models are lowering entry barriers for clean power adoption.",
    time: "2 days ago",
  },
  {
    category: "Opinion",
    title: "The case for four‑day work weeks backed by productivity data",
    excerpt:
      "Pilot programs show improved output and employee satisfaction across sectors.",
    time: "2 days ago",
  },
  {
    category: "Security",
    title:
      "Biometric authentication evolves beyond fingerprints and face scans",
    excerpt:
      "Behavioral patterns such as typing rhythm offer continuous identity verification.",
    time: "3 days ago",
  },
  {
    category: "Travel",
    title: "Heritage railways experience revival as nostalgic travel options",
    excerpt:
      "Scenic routes and vintage carriages attract families and rail enthusiasts alike.",
    time: "3 days ago",
  },
  {
    category: "Politics",
    title: "Digital services tax proposal sparks debate among trading partners",
    excerpt:
      "Supporters say it levels the playing field, while critics warn of trade retaliation.",
    time: "3 days ago",
  },
  {
    category: "Business",
    title:
      "Co‑working spaces pivot to hybrid membership models after pandemic lows",
    excerpt:
      "Flexible terms and suburban locations are driving a steady occupancy recovery.",
    time: "3 days ago",
  },
];

const trendingItems = [
  "Election coverage continues to dominate public conversation",
  "New regulations prompt widespread reaction from business groups",
  "Tech sector leads the latest market optimism",
  "Local reporting gains traction across regional audiences",
];

const PAGE_SIZE = 12;

export default function NewsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(newsItems.length / PAGE_SIZE);

  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return newsItems.slice(start, start + PAGE_SIZE);
  }, [currentPage]);

  const goToPage = (page: number) => {
    const safePage = Math.max(1, Math.min(page, totalPages));
    setCurrentPage(safePage);
  };

  return (
    <main className="overflow-x-hidden bg-white text-gray-950">
      <Navbar></Navbar>
      <section className="py-18 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-4">
          <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                <LuBadgeAlert className="h-4 w-4 text-red-500" />
                Latest Coverage
              </div>
              <h1 className="text-4xl font-title tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
                News
              </h1>
              <p className="max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
                Refined editorial coverage with a clear structure, professional
                tone, and stories organized for quick reading.
              </p>
            </div>

            <Link
              href="/trending"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 transition-colors hover:text-red-500"
            >
              View trending
              <LuArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {currentItems.map((item) => (
                  <article
                    key={item.title}
                    className={`group overflow-hidden rounded-3xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-900/5 ${
                      item.featured ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">
                        {item.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <LuClock3 className="h-3.5 w-3.5" />
                        {item.time}
                      </span>
                    </div>

                    <div className="mt-4 space-y-3">
                      <h2
                        className={`wrap-break-words font-semibold tracking-tight text-gray-950 transition-colors group-hover:text-red-500 ${
                          item.featured
                            ? "text-2xl sm:text-3xl"
                            : "text-lg sm:text-xl"
                        }`}
                      >
                        {item.title}
                      </h2>
                      <p className="wrap-break-words text-sm leading-6 text-gray-600 sm:text-base">
                        {item.excerpt}
                      </p>
                    </div>

                    <div className="mt-5">
                      <Link
                        href="/news"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 transition-colors hover:text-red-500"
                      >
                        Read story
                        <LuArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-3xl border border-gray-200 bg-gray-50 px-4 py-4 sm:flex-row">
                <p className="text-sm text-gray-600">
                  Showing{" "}
                  <span className="font-semibold text-gray-950">
                    {(currentPage - 1) * PAGE_SIZE + 1}
                  </span>{" "}
                  to{" "}
                  <span className="font-semibold text-gray-950">
                    {Math.min(currentPage * PAGE_SIZE, newsItems.length)}
                  </span>{" "}
                  of{" "}
                  <span className="font-semibold text-gray-950">
                    {newsItems.length}
                  </span>{" "}
                  stories
                </p>

                <div className="flex flex-wrap items-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors disabled:pointer-events-none disabled:border-gray-200 disabled:text-gray-300 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-white hover:text-gray-950"
                  >
                    Previous
                  </button>

                  <div className="flex flex-wrap items-center justify-center gap-2">
                    {Array.from({ length: totalPages }).map((_, index) => {
                      const page = index + 1;
                      const active = page === currentPage;

                      return (
                        <button
                          key={page}
                          type="button"
                          onClick={() => goToPage(page)}
                          className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                            active
                              ? "bg-gray-950 text-white"
                              : "border border-gray-300 text-gray-700 hover:bg-white hover:text-gray-950"
                          }`}
                          aria-current={active ? "page" : undefined}
                        >
                          {page}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    type="button"
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors disabled:pointer-events-none disabled:border-gray-200 disabled:text-gray-300 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-white hover:text-gray-950"
                  >
                    Next
                    <LuArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-5 sm:p-6">
                <div className="flex items-center gap-2 border-b border-gray-200 pb-4">
                  <LuTrendingUp className="h-5 w-5 text-red-500" />
                  <h2 className="text-lg font-semibold text-gray-950">
                    Trending Now
                  </h2>
                </div>

                <div className="mt-4 space-y-3">
                  {trendingItems.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-50 text-sm font-semibold text-red-600">
                        {index + 1}
                      </div>
                      <p className="wrap-break-words text-sm leading-6 text-gray-700">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-gray-950 p-5 text-white">
                  <p className="text-sm font-medium text-gray-300">
                    Daily Brief
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight">
                    The most important stories, summarized clearly.
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-300">
                    A compact roundup designed for readers who want relevance,
                    speed, and a polished editorial experience.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </main>
  );
}
