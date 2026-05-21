// app/advertise/page.tsx
"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { LucideBarChart3, LucideCheckCircle } from "lucide-react";
import Link from "next/link";
import {
  LuArrowRight,
  LuTarget,
  LuUsers,
  LuMail,
  LuTrendingUp,
  LuEye,
  LuGlobe,
} from "react-icons/lu";

export default function AdvertisePage() {
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
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
              </span>
              Partner with Nebula News
            </div>

            <h1 className="text-4xl font-title tracking-tight text-gray-950 sm:text-5xl md:text-6xl">
              Reach decision‑makers
            </h1>
            <p className="mt-6 text-lg leading-7 text-gray-600 sm:text-xl sm:leading-8 max-w-2xl">
              Advertise on Nebula News and connect with a professional, engaged
              audience that values clarity, context, and credible journalism.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-red-500/30 to-transparent" />
      </section>

      {/* Audience stats – trust indicators */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-950 sm:text-4xl">
              Why advertise with us?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Your message deserves a premium environment. Here’s who you’ll
              reach.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <LuUsers className="h-6 w-6 text-red-500" />,
                stat: "2.1M",
                label: "Monthly unique readers",
                description: "Global audience across web & mobile",
              },
              {
                icon: <LuTrendingUp className="h-6 w-6 text-red-500" />,
                stat: "+142%",
                label: "YoY readership growth",
                description: "Fastest‑growing premium news brand",
              },
              {
                icon: <LuEye className="h-6 w-6 text-red-500" />,
                stat: "8.4 min",
                label: "Average time on site",
                description: "Highly engaged, attentive readers",
              },
              {
                icon: <LuGlobe className="h-6 w-6 text-red-500" />,
                stat: "12+",
                label: "Global bureaus",
                description: "NYC · London · Singapore · more",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all hover:shadow-md"
              >
                <div className="rounded-full bg-red-50 w-12 h-12 flex items-center justify-center mx-auto">
                  {item.icon}
                </div>
                <p className="mt-4 text-3xl font-bold text-gray-950">
                  {item.stat}
                </p>
                <p className="mt-1 text-sm font-medium text-gray-900">
                  {item.label}
                </p>
                <p className="mt-1 text-xs text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad formats */}
      <section className="border-t border-gray-200 bg-gray-50/50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-950 sm:text-4xl">
              Flexible ad solutions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Choose the format that fits your campaign goals.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Display Ads",
                description:
                  "Standard banners, high-impact units, and native placements across our network.",
                features: [
                  "Desktop & mobile",
                  "Targeting by section",
                  "Viewability reporting",
                ],
              },
              {
                title: "Sponsored Content",
                description:
                  "Custom editorial-style content developed with our award‑winning team.",
                features: [
                  "Fully transparent labeling",
                  "Audience engagement metrics",
                  "Social amplification",
                ],
              },
              {
                title: "Newsletter Sponsorships",
                description:
                  "Reach our 500k+ daily subscribers directly in their inbox.",
                features: [
                  "Dedicated send",
                  "High open rates (45%+)",
                  "Click‑through analytics",
                ],
              },
            ].map((format, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <h3 className="text-xl font-semibold text-gray-950">
                  {format.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">
                  {format.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {format.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <LucideCheckCircle className="h-4 w-4 text-red-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Targeting capabilities */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-3xl bg-gray-50 border border-gray-200 p-8 sm:p-10">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold text-gray-950">
                Precision targeting
              </h2>
              <p className="mt-2 text-gray-600">
                Reach the right audience at the right moment.
              </p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <LuTarget />,
                  label: "Section / topic",
                  desc: "Finance, tech, politics, culture",
                },
                {
                  icon: <LuUsers />,
                  label: "Geography",
                  desc: "Country, DMA, or global",
                },
                {
                  icon: <LucideBarChart3 />,
                  label: "Behavioral",
                  desc: "Engagement & recency",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="rounded-full bg-red-50 p-2 text-red-500">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-950">{item.label}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact form / CTA */}
      <section className="border-t border-gray-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-950 sm:text-4xl">
              Ready to start?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Fill out the form below and our advertising team will reach out
              within 24 hours.
            </p>
          </div>

          <form
            action="#"
            method="POST"
            className="mt-10 space-y-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full name *
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all focus:border-red-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-red-500"
                  placeholder="John Carter"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company *
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  required
                  className="mt-1 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all focus:border-red-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-red-500"
                  placeholder="Agency or brand"
                />
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Work email *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all focus:border-red-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-red-500"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium text-gray-700"
                >
                  Estimated monthly budget *
                </label>
                <select
                  id="budget"
                  name="budget"
                  required
                  className="mt-1 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition-all focus:border-red-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-red-500"
                >
                  <option value="">Select a range</option>
                  <option>$5k – $10k</option>
                  <option>$10k – $25k</option>
                  <option>$25k – $50k</option>
                  <option>$50k+</option>
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message / campaign goals *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all focus:border-red-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-red-500"
                placeholder="Tell us about your target audience, KPIs, and any specific requests…"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gray-950 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-950/20 sm:w-auto"
            >
              Send inquiry
              <LuMail size={16} />
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
