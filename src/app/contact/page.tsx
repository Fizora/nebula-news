// app/contact/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LuMail,
  LuPhone,
  LuMapPin,
  LuClock,
  LuSend,
  LuArrowLeft,
} from "react-icons/lu";
import { LucideCheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", formState);
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <main className="bg-white">
      <Navbar></Navbar>
      {/* Hero section – consistent with homepage hero style */}
      <section className="relative overflow-hidden bg-white pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="absolute inset-0 -z-10 bg-linear-to-br from-white via-gray-50 to-gray-100/50" />
        <div className="absolute inset-0 -z-10 bg-[radial-linear(ellipse_at_top_left,_rgba(239,68,68,0.04),_transparent_50%)]" />

        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-gray-600 shadow-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
              </span>
              Get in touch — we reply within 24h
            </div>

            <h1 className="text-4xl font-title tracking-tight text-gray-950 sm:text-5xl md:text-6xl">
              Contact Nebula News
            </h1>
            <p className="mt-6 text-lg leading-7 text-gray-600 sm:text-xl sm:leading-8 max-w-2xl">
              Have a question, tip, or partnership idea? Our team is ready to
              hear from you. Fill out the form or reach us directly using the
              details below.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-red-500/30 to-transparent" />
      </section>

      {/* Main contact content (unchanged) */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Left column – contact form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-2xl font-semibold text-gray-950">
                  Send us a message
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  We'll get back to you as soon as possible.
                </p>

                {isSubmitted ? (
                  <div className="mt-8 rounded-2xl bg-green-50 p-6 text-center border border-green-200">
                    <LucideCheckCircle className="mx-auto h-12 w-12 text-green-600" />
                    <h3 className="mt-3 text-lg font-semibold text-green-800">
                      Message sent!
                    </h3>
                    <p className="mt-1 text-sm text-green-700">
                      Thank you for reaching out. Our team will respond within
                      24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    {/* Form fields unchanged */}
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
                          value={formState.name}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all focus:border-red-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-red-500"
                          placeholder="Jane Smith"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          className="mt-1 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all focus:border-red-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-red-500"
                          placeholder="jane@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        required
                        value={formState.subject}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all focus:border-red-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-red-500"
                        placeholder="Press inquiry, partnership, general question…"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Message *
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows={5}
                        required
                        value={formState.message}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all focus:border-red-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-red-500"
                        placeholder="Tell us what you'd like to discuss…"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gray-950 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-950/20 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send message
                          <LuSend size={16} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right column – contact info & office */}
            <div className="lg:col-span-5 space-y-8">
              {/* Quick contact cards */}
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-950">
                  Direct contacts
                </h3>
                <div className="mt-6 space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-red-50 p-2">
                      <LuMail className="h-5 w-5 text-red-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-950">Email</p>
                      <a
                        href="mailto:contact@nebulanews.com"
                        className="text-sm text-gray-600 transition-colors hover:text-red-500"
                      >
                        contact@nebulanews.com
                      </a>
                      <p className="mt-1 text-xs text-gray-400">
                        For general inquiries
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-red-50 p-2">
                      <LuMail className="h-5 w-5 text-red-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-950">
                        Press & media
                      </p>
                      <a
                        href="mailto:press@nebulanews.com"
                        className="text-sm text-gray-600 transition-colors hover:text-red-500"
                      >
                        press@nebulanews.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-red-50 p-2">
                      <LuPhone className="h-5 w-5 text-red-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-950">Phone</p>
                      <a
                        href="tel:+12125550123"
                        className="text-sm text-gray-600 transition-colors hover:text-red-500"
                      >
                        +1 (212) 555-0123
                      </a>
                      <p className="mt-1 text-xs text-gray-400">
                        Mon–Fri, 9am–6pm ET
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office details */}
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-950">
                  Visit our HQ
                </h3>
                <div className="mt-6 space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-red-50 p-2">
                      <LuMapPin className="h-5 w-5 text-red-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-950">
                        New York
                      </p>
                      <p className="text-sm text-gray-600">
                        350 Fifth Avenue, Suite 4800
                        <br />
                        New York, NY 10118
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-red-50 p-2">
                      <LuClock className="h-5 w-5 text-red-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-950">
                        Office hours
                      </p>
                      <p className="text-sm text-gray-600">
                        Monday – Friday, 9:00 AM – 6:00 PM (ET)
                        <br />
                        Closed on weekends and public holidays
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 shadow-sm">
                <div className="aspect-[4/3] w-full bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
                    <div className="text-center">
                      <LuMapPin className="mx-auto h-8 w-8" />
                      <p className="mt-2 text-sm">Map: 350 Fifth Ave, NYC</p>
                      <p className="text-xs">(Interactive map placeholder)</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <a
                    href="https://maps.google.com/?q=350+Fifth+Avenue+New+York+NY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-red-500 hover:underline"
                  >
                    Get directions →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional trust section */}
      <section className="border-t border-gray-200 bg-gray-50/50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl  font-semibold text-gray-950">
              We’re here to help
            </h2>
            <p className="mt-4 text-gray-600">
              Whether you're a reader with a question, a source with a tip, or
              an organization exploring partnership — our team is dedicated to
              clear, timely communication.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 text-center">
              <div className="rounded-full bg-red-50 w-12 h-12 flex items-center justify-center mx-auto">
                <LuMail className="h-6 w-6 text-red-500" />
              </div>
              <p className="mt-3 font-semibold text-gray-950">Response time</p>
              <p className="text-sm text-gray-500">Within 24 hours</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5 text-center">
              <div className="rounded-full bg-red-50 w-12 h-12 flex items-center justify-center mx-auto">
                <LuPhone className="h-6 w-6 text-red-500" />
              </div>
              <p className="mt-3 font-semibold text-gray-950">Phone support</p>
              <p className="text-sm text-gray-500">Mon–Fri, 9am–6pm ET</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5 text-center">
              <div className="rounded-full bg-red-50 w-12 h-12 flex items-center justify-center mx-auto">
                <LuMapPin className="h-6 w-6 text-red-500" />
              </div>
              <p className="mt-3 font-semibold text-gray-950">Global bureau</p>
              <p className="text-sm text-gray-500">NYC · London · Singapore</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5 text-center">
              <div className="rounded-full bg-red-50 w-12 h-12 flex items-center justify-center mx-auto">
                <LuClock className="h-6 w-6 text-red-500" />
              </div>
              <p className="mt-3 font-semibold text-gray-950">24/7 newsroom</p>
              <p className="text-sm text-gray-500">Always covering the story</p>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </main>
  );
}
