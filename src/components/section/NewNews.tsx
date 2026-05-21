import Link from "next/link";
import {
  LuArrowRight,
  LuClock3,
  LuBadgeAlert,
  LuTrendingUp,
} from "react-icons/lu";

const newsItems = [
  {
    category: "Politics",
    title:
      "Policy shifts reshape the national agenda as leaders outline next steps",
    excerpt:
      "A deeper look at the decisions driving the week’s most important political developments and what they mean going forward.",
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
];

const trendingItems = [
  "Election coverage continues to dominate public conversation",
  "New regulations prompt widespread reaction from business groups",
  "Tech sector leads the latest market optimism",
  "Local reporting gains traction across regional audiences",
];

const NewNews = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              <LuBadgeAlert className="h-4 w-4 text-red-500" />
              Latest Coverage
            </div>
            <h2 className="text-3xl font-title tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
              New News & Trending
            </h2>
            <p className="max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
              Curated stories and audience-driven topics presented with a clean,
              editorial-first layout that stays consistent with the hero and
              navbar.
            </p>
          </div>

          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 transition-colors hover:text-red-500"
          >
            View all news
            <LuArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {newsItems.map((item) => (
                <article
                  key={item.title}
                  className={`group rounded-3xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-900/5 ${
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
                    <h3
                      className={`font-semibold tracking-tight text-gray-950 transition-colors group-hover:text-red-500 ${
                        item.featured
                          ? "text-2xl sm:text-3xl"
                          : "text-lg sm:text-xl"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm leading-6 text-gray-600 sm:text-base">
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
          </div>

          <aside className="lg:col-span-4">
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-5 sm:p-6">
              <div className="flex items-center gap-2 border-b border-gray-200 pb-4">
                <LuTrendingUp className="h-5 w-5 text-red-500" />
                <h3 className="text-lg font-semibold text-gray-950">
                  Trending Now
                </h3>
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
                    <p className="text-sm leading-6 text-gray-700">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-gray-950 p-5 text-white">
                <p className="text-sm font-medium text-gray-300">Daily Brief</p>
                <h4 className="mt-2 text-xl font-semibold tracking-tight">
                  The most important stories, summarized clearly.
                </h4>
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
  );
};

export default NewNews;
