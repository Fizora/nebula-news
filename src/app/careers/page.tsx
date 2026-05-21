// app/careers/page.tsx
"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import {
  LuArrowRight,
  LuBriefcase,
  LuMapPin,
  LuClock,
  LuGraduationCap,
  LuHeart,
  LuUsers,
  LuGlobe,
  LuAward,
  LuCoffee,
  LuCalendar,
} from "react-icons/lu";

const openPositions = [
  {
    id: 1,
    title: "Senior Political Correspondent",
    department: "Editorial",
    location: "New York, NY",
    type: "Full-time",
    experience: "7+ years",
    description:
      "Cover national politics with deep analysis, breaking news, and investigative features. Must have strong sourcing and on-camera presence.",
    href: "/careers/senior-political-correspondent",
  },
  {
    id: 2,
    title: "Data Journalist",
    department: "Editorial",
    location: "London, UK",
    type: "Full-time",
    experience: "3+ years",
    description:
      "Transform complex datasets into compelling visual stories. Proficiency in Python, R, or D3.js required.",
    href: "/careers/data-journalist",
  },
  {
    id: 3,
    title: "Social Media Editor",
    department: "Audience",
    location: "Remote (US/UK/EU)",
    type: "Full-time",
    experience: "2+ years",
    description:
      "Lead our presence across X, LinkedIn, and Instagram. Create engaging threads, visuals, and real-time coverage strategies.",
    href: "/careers/social-media-editor",
  },
  {
    id: 4,
    title: "Product Designer",
    department: "Product",
    location: "New York, NY",
    type: "Full-time",
    experience: "4+ years",
    description:
      "Design intuitive reading experiences for web and mobile. Strong portfolio in editorial or media products required.",
    href: "/careers/product-designer",
  },
  {
    id: 5,
    title: "Video Journalist",
    department: "Visuals",
    location: "Singapore",
    type: "Full-time",
    experience: "3+ years",
    description:
      "Produce short-form explainers and documentary-style features for our digital platforms. Experience with Premiere Pro and After Effects.",
    href: "/careers/video-journalist",
  },
  {
    id: 6,
    title: "Audience Growth Intern",
    department: "Marketing",
    location: "Remote (US)",
    type: "Internship",
    experience: "Entry-level",
    description:
      "Support SEO, newsletter campaigns, and analytics. Great for recent graduates passionate about journalism.",
    href: "/careers/audience-growth-intern",
  },
];

export default function CareersPage() {
  return (
    <main className="bg-white">
      <Navbar></Navbar>
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
              Join our team — shape the future of journalism
            </div>

            <h1 className="text-4xl font-title tracking-tight text-gray-950 sm:text-5xl md:text-6xl">
              Work with purpose
            </h1>
            <p className="mt-6 text-lg leading-7 text-gray-600 sm:text-xl sm:leading-8 max-w-2xl">
              At Nebula News, we're building a newsroom for the modern era.
              We're looking for curious, driven individuals who want to inform,
              clarify, and inspire.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-red-500/30 to-transparent" />
      </section>

      {/* Why join us – culture/benefits section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-950 sm:text-4xl">
              Why Nebula?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We believe great journalism requires great people. Here’s what
              makes working here different.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <LuHeart className="h-6 w-6 text-red-500" />,
                title: "Purpose-driven work",
                description:
                  "Every story you touch reaches millions of readers who rely on clarity and truth.",
              },
              {
                icon: <LuUsers className="h-6 w-6 text-red-500" />,
                title: "Collaborative culture",
                description:
                  "Work alongside award-winning journalists, editors, and product thinkers in a flat hierarchy.",
              },
              {
                icon: <LuGraduationCap className="h-6 w-6 text-red-500" />,
                title: "Learning stipend",
                description:
                  "$2,000 annual budget for courses, conferences, or any resource that fuels your growth.",
              },
              {
                icon: <LuGlobe className="h-6 w-6 text-red-500" />,
                title: "Global bureaus",
                description:
                  "Opportunities to rotate through our NYC, London, and Singapore offices.",
              },
              {
                icon: <LuAward className="h-6 w-6 text-red-500" />,
                title: "Impact & recognition",
                description:
                  "We celebrate investigative wins and internal awards for excellence.",
              },
              {
                icon: <LuCoffee className="h-6 w-6 text-red-500" />,
                title: "Hybrid flexibility",
                description:
                  "Most roles are remote-friendly with optional in-office collaboration days.",
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="rounded-full bg-red-50 w-12 h-12 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-950">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="border-t border-gray-200 bg-gray-50/50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-950 sm:text-4xl">
              Open positions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Join a team that’s redefining news for a new generation.
            </p>
          </div>

          <div className="mt-12 grid gap-6">
            {openPositions.map((job) => (
              <div
                key={job.id}
                className="rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:shadow-md hover:border-gray-300"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-950">
                      {job.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-700">
                        <LuBriefcase className="h-3 w-3" />
                        {job.department}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                        <LuMapPin className="h-3 w-3" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                        <LuClock className="h-3 w-3" />
                        {job.type}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                        <LuGraduationCap className="h-3 w-3" />
                        {job.experience}
                      </span>
                    </div>
                    <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                      {job.description}
                    </p>
                  </div>
                  <div className="lg:shrink-0">
                    <Link
                      href={job.href}
                      className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50 hover:text-gray-950"
                    >
                      View details
                      <LuArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              Don't see the right role?{" "}
              <Link
                href="/contact"
                className="text-red-500 hover:underline font-medium"
              >
                Send us your resume
              </Link>{" "}
              and we'll keep you in mind.
            </p>
          </div>
        </div>
      </section>

      {/* Application process / timeline */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-3xl bg-gray-50 border border-gray-200 p-8 sm:p-10">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold text-gray-950">
                Our hiring process
              </h2>
              <p className="mt-2 text-gray-600">
                Simple, transparent, and designed to get to know you.
              </p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-4">
              {[
                {
                  step: "01",
                  title: "Application review",
                  days: "1–2 weeks",
                  icon: <LuCalendar className="h-5 w-5" />,
                },
                {
                  step: "02",
                  title: "Initial conversation",
                  days: "30 min",
                  icon: <LuUsers className="h-5 w-5" />,
                },
                {
                  step: "03",
                  title: "Skills assessment",
                  days: "Take-home task",
                  icon: <LuBriefcase className="h-5 w-5" />,
                },
                {
                  step: "04",
                  title: "Final interviews",
                  days: "Team & leadership",
                  icon: <LuHeart className="h-5 w-5" />,
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="text-3xl font-bold text-red-500">
                    {item.step}
                  </div>
                  <h3 className="mt-2 font-semibold text-gray-950">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{item.days}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center text-sm text-gray-500">
              We aim to provide updates within 5 business days of each stage.
            </div>
          </div>
        </div>
      </section>

      {/* Equal opportunity statement */}
      <section className="border-t border-gray-200 bg-white py-12">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-sm text-gray-500">
            Nebula News is an equal opportunity employer. We celebrate diversity
            and are committed to creating an inclusive environment for all
            employees. All qualified applicants will receive consideration
            without regard to race, color, religion, gender, sexual orientation,
            national origin, disability, or veteran status.
          </p>
        </div>
      </section>
      <Footer></Footer>
    </main>
  );
}
