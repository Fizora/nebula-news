import Link from "next/link";
import {
  LuArrowRight,
  LuSearch,
  LuTrendingUp,
  LuShieldCheck,
  LuZap,
} from "react-icons/lu";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Background gradients – Tailwind v4 compatible */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-white via-gray-50 to-gray-100/50" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_rgba(239,68,68,0.06),_transparent_50%)]" />

      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-4 py-20 sm:py-24 lg:py-28">
        <div className="grid w-full gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left column – content */}
          <div className="space-y-8 lg:col-span-7">
            {/* Tagline with metaphor */}
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-gray-600 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
              </span>
              Signal in the noise — since 2019
            </div>

            <div className="space-y-5">
              <h1 className="max-w-3xl text-5xl font-title leading-[1.1] tracking-tight text-gray-950 sm:text-6xl md:text-7xl lg:text-7xl">
                Cut through the clutter.
                <span className="block text-red-500 mt-2">
                  Understand what matters.
                </span>
              </h1>

              <p className="max-w-2xl text-base leading-7 text-gray-600 sm:text-lg md:text-xl md:leading-8">
                Nebula News delivers decision‑grade journalism: verified facts,
                sharp analysis, and zero noise. For professionals who need to
                navigate complexity — not add to it.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/news"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-950 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-950/20"
              >
                Read the briefing
                <LuArrowRight size={18} />
              </Link>

              <Link
                href="/journalism"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50 hover:text-gray-950"
              >
                Our principles
                <LuShieldCheck size={18} />
              </Link>
            </div>

            {/* Trust indicators – improved stats */}
            <div className="grid max-w-xl grid-cols-3 gap-4 pt-2">
              <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md">
                <div className="flex items-center gap-2">
                  <LuZap className="h-5 w-5 text-red-500" />
                  <span className="text-2xl font-bold text-gray-950">
                    Real‑time
                  </span>
                </div>
                <div className="mt-1 text-sm text-gray-500">
                  Live updates from 12 bureaus
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md">
                <div className="flex items-center gap-2">
                  <LuTrendingUp className="h-5 w-5 text-red-500" />
                  <span className="text-2xl font-bold text-gray-950">
                    +142%
                  </span>
                </div>
                <div className="mt-1 text-sm text-gray-500">
                  YoY institutional readership
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md">
                <div className="flex items-center gap-2">
                  <LuShieldCheck className="h-5 w-5 text-red-500" />
                  <span className="text-2xl font-bold text-gray-950">
                    4‑layer
                  </span>
                </div>
                <div className="mt-1 text-sm text-gray-500">
                  verification every story
                </div>
              </div>
            </div>
          </div>

          {/* Right column – preview card (more informative) */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white/70 backdrop-blur-sm shadow-2xl shadow-gray-900/5 transition-all hover:shadow-xl">
              <div className="absolute inset-0 bg-linear-to-br from-red-500/5 to-transparent" />
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Nebula Lens
                    </p>
                    <h2 className="mt-1 text-xl font-bold text-gray-950">
                      Today’s essential reads
                    </h2>
                  </div>
                  <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-700">
                    4 min digest
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="group rounded-xl bg-gray-50 p-4 transition-all hover:bg-gray-100">
                    <div className="flex items-start justify-between">
                      <p className="text-xs font-semibold text-red-500">
                        Monetary Policy
                      </p>
                      <span className="text-xs text-gray-400">2h ago</span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-gray-900 group-hover:text-red-500">
                      Fed signals two rate cuts in 2025 — market reprices
                      aggressively
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                      <LuTrendingUp className="h-3 w-3 text-red-500" />
                      <span>94% probability priced for September move</span>
                    </div>
                  </div>
                  <div className="group rounded-xl bg-gray-50 p-4 transition-all hover:bg-gray-100">
                    <div className="flex items-start justify-between">
                      <p className="text-xs font-semibold text-red-500">
                        Geopolitics
                      </p>
                      <span className="text-xs text-gray-400">4h ago</span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-gray-900 group-hover:text-red-500">
                      EU approves €4.7B defense package amid eastern flank
                      tensions
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                      <LuZap className="h-3 w-3 text-red-500" />
                      <span>Fastest-growing story this week</span>
                    </div>
                  </div>
                  <div className="group rounded-xl bg-gray-50 p-4 transition-all hover:bg-gray-100">
                    <div className="flex items-start justify-between">
                      <p className="text-xs font-semibold text-red-500">
                        Energy
                      </p>
                      <span className="text-xs text-gray-400">6h ago</span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-gray-900 group-hover:text-red-500">
                      OPEC+ extends output cuts through Q3 — crude jumps to $91
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                      <LuTrendingUp className="h-3 w-3 text-red-500" />
                      <span>+5.2% WTI intraday</span>
                    </div>
                  </div>
                </div>

                <Link
                  href="/trending"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50"
                >
                  View full briefing
                  <LuArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-red-500/30 to-transparent" />
    </section>
  );
};

export default Hero;
