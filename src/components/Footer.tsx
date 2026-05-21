import Link from "next/link";
import {
  LuArrowRight,
  LuFacebook,
  LuGlobe,
  LuInstagram,
  LuLinkedin,
  LuMail,
  LuMapPin,
  LuNewspaper,
  LuPhone,
  LuYoutube,
} from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white text-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2">
              <LuNewspaper className="h-7 w-7 text-red-500" />
              <span className="text-2xl font-title tracking-tight">
                Nebula News.
              </span>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-gray-600">
              Nebula News delivers thoughtful reporting, clear editorial
              structure, and trusted coverage designed for readers who value
              context, accuracy, and a refined news experience.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/news"
                className="inline-flex items-center gap-2 rounded-full bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-gray-800"
              >
                Explore News
                <LuArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/about-us"
                className="inline-flex items-center justify-center rounded-full border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50 hover:text-gray-950"
              >
                About Us
              </Link>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                Sections
              </h3>
              <ul className="mt-5 space-y-3">
                {[
                  ["Home", "/"],
                  ["About Us", "/about-us"],
                  ["News", "/news"],
                  ["Categories", "/categories"],
                  ["Trending", "/trending"],
                  ["Journalism", "/journalism"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-gray-600 transition-colors hover:text-red-500"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                Company
              </h3>
              <ul className="mt-5 space-y-3">
                {[
                  ["Contact", "/contact"],
                  ["Advertise", "/advertise"],
                  ["Careers", "/careers"],
                  ["Privacy Policy", "/privacy"],
                  ["Terms of Service", "/terms"],
                  ["Editorial Guidelines", "/editorial"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-gray-600 transition-colors hover:text-red-500"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Contact
            </h3>

            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3">
                <LuMail className="mt-0.5 h-5 w-5 text-red-500" />
                <div>
                  <p className="text-sm font-medium text-gray-950">Email</p>
                  <a
                    href="mailto:contact@nebulanews.com"
                    className="text-sm text-gray-600 transition-colors hover:text-red-500"
                  >
                    nebulanews@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <LuPhone className="mt-0.5 h-5 w-5 text-red-500" />
                <div>
                  <p className="text-sm font-medium text-gray-950">Phone</p>
                  <a
                    href="tel:+12125550123"
                    className="text-sm text-gray-600 transition-colors hover:text-red-500"
                  >
                    +1 (212) 555-0123
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <LuMapPin className="mt-0.5 h-5 w-5 text-red-500" />
                <div>
                  <p className="text-sm font-medium text-gray-950">Office</p>
                  <p className="text-sm text-gray-600">
                    350 Fifth Avenue, Suite 4800
                    <br />
                    New York, NY 10118
                    <br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-gray-200 bg-gray-50 p-5">
              <p className="text-sm font-semibold text-gray-950">
                Stay connected
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Follow our updates across social channels for the latest
                stories, editorial highlights, and platform announcements.
              </p>

              <div className="mt-4 flex items-center gap-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-all hover:border-gray-300 hover:text-red-500"
                >
                  <LuFacebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-all hover:border-gray-300 hover:text-red-500"
                >
                  <LuInstagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-all hover:border-gray-300 hover:text-red-500"
                >
                  <LuLinkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-all hover:border-gray-300 hover:text-red-500"
                >
                  <LuYoutube className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  aria-label="RSS Feed"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition-all hover:border-gray-300 hover:text-red-500"
                >
                  <LuGlobe className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-gray-200 pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-500">
              © 2026 Nebula News. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Built with clarity, credibility, and editorial precision.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
