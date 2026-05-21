"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LuCircleUserRound,
  LuMenu,
  LuUsers,
  LuX,
  LuArrowUpRight,
  LuKeyboard,
  LuSearch,
  LuClock3,
  LuTrendingUp,
} from "react-icons/lu";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  Transition,
} from "framer-motion";

type NavItem = {
  name: string;
  href: string;
  icon?: React.ReactNode;
};

const navItems: NavItem[] = [
  { name: "Home", href: "/", icon: <LuArrowUpRight size={15} /> },
  { name: "About Us", href: "/about-us", icon: <LuArrowUpRight size={15} /> },
  { name: "News", href: "/news", icon: <LuArrowUpRight size={15} /> },
  {
    name: "Categories",
    href: "/categories",
    icon: <LuArrowUpRight size={15} />,
  },
  { name: "Trending", href: "/trending", icon: <LuArrowUpRight size={15} /> },
  {
    name: "Journalism",
    href: "/journalism",
    icon: <LuArrowUpRight size={15} />,
  },
];

// Dummy search results – convincing, professional news stories
const searchSuggestions = [
  {
    id: 1,
    category: "Monetary Policy",
    title: "Fed signals two rate cuts in 2025 as inflation moderates",
    time: "15 min ago",
    metric: "94%",
    metricLabel: "probability",
    href: "/news/fed-signals-cuts",
  },
  {
    id: 2,
    category: "Geopolitics",
    title: "EU approves €4.7B defense package amid eastern flank tensions",
    time: "32 min ago",
    metric: "€4.7B",
    metricLabel: "total aid",
    href: "/news/eu-defense-package",
  },
  {
    id: 3,
    category: "Crypto",
    title: "Bitcoin reclaims $72k as ETF inflows hit 3‑month high",
    time: "1 hr ago",
    metric: "$2.1B",
    metricLabel: "weekly inflows",
    href: "/news/bitcoin-etf-inflows",
  },
  {
    id: 4,
    category: "Energy",
    title: "OPEC+ extends output cuts through Q3, sending crude to $91",
    time: "2 hr ago",
    metric: "+5.2%",
    metricLabel: "WTI intraday",
    href: "/news/opec-output-cuts",
  },
  {
    id: 5,
    category: "Technology",
    title: "Apple unveils generative AI features for iOS 19 at WWDC",
    time: "3 hr ago",
    metric: "+2.3%",
    metricLabel: "AAPL after hours",
    href: "/news/apple-ai-wwdc",
  },
  {
    id: 6,
    category: "Economy",
    title: "US jobless claims fall to 212k, beating estimates of 220k",
    time: "4 hr ago",
    metric: "212k",
    metricLabel: "initial claims",
    href: "/news/jobless-claims",
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showShortcutHint, setShowShortcutHint] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const prefersReducedMotion = useReducedMotion();

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const loginButtonRef = useRef<HTMLAnchorElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Show shortcut hint on first visit
  useEffect(() => {
    const hasSeenHint = localStorage.getItem("nebula-shortcut-hint");
    if (!hasSeenHint) {
      setShowShortcutHint(true);
      const timer = setTimeout(() => setShowShortcutHint(false), 5000);
      localStorage.setItem("nebula-shortcut-hint", "true");
      return () => clearTimeout(timer);
    }
  }, []);

  // Focus trap for mobile menu
  useEffect(() => {
    if (isMobileMenuOpen && mobileMenuRef.current) {
      const focusableElements = mobileMenuRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[
        focusableElements.length - 1
      ] as HTMLElement;

      const handleTab = (e: KeyboardEvent) => {
        if (e.key !== "Tab") return;
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      };

      document.addEventListener("keydown", handleTab);
      firstElement?.focus();
      return () => document.removeEventListener("keydown", handleTab);
    }
  }, [isMobileMenuOpen]);

  // Close search on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isSearchOpen &&
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
        setSearchQuery("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSearchOpen]);

  // Global keyboard shortcuts (only Ctrl+M and Ctrl+K)
  useEffect(() => {
    const handleGlobalShortcuts = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") return;

      // Ctrl+M (or Cmd+M) to toggle menu
      if ((event.ctrlKey || event.metaKey) && event.key === "m") {
        event.preventDefault();
        setIsMobileMenuOpen((prev) => !prev);
        return;
      }

      // Ctrl+K (or Cmd+K) to toggle search
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        event.preventDefault();
        if (isSearchOpen) {
          setIsSearchOpen(false);
          setSearchQuery("");
        } else {
          setIsSearchOpen(true);
          setTimeout(() => searchInputRef.current?.focus(), 100);
        }
        return;
      }

      // Escape closes both
      if (event.key === "Escape") {
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);
        if (isSearchOpen) {
          setIsSearchOpen(false);
          setSearchQuery("");
        }
      }
    };

    document.addEventListener("keydown", handleGlobalShortcuts);
    return () => document.removeEventListener("keydown", handleGlobalShortcuts);
  }, [isMobileMenuOpen, isSearchOpen]);

  const closeMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  const getTransition = (): Transition => ({
    type: "tween",
    ease: [0.25, 0.1, 0.25, 1],
    duration: prefersReducedMotion ? 0 : 0.25,
  });

  const sidebarVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
    exit: { x: "-100%" },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const filteredSuggestions = searchQuery
    ? searchSuggestions.filter((s) =>
        s.title.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : searchSuggestions;

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-16 items-center justify-between gap-2">
            {/* Mobile menu button with shortcut hint */}
            <div className="relative">
              <button
                ref={mobileMenuButtonRef}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-gray-100 hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                aria-label="Toggle menu (Ctrl+M)"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? <LuX size={20} /> : <LuMenu size={20} />}
              </button>
              {!isMobileMenuOpen && (
                <span className="absolute -bottom-1 -right-1 text-[10px] font-mono bg-gray-100 rounded px-1">
                  ⌃M
                </span>
              )}
            </div>

            <Link
              href="/"
              className="text-2xl sm:text-4xl font-title tracking-tight text-gray-900 transition-colors hover:text-black"
              onClick={closeMenu}
            >
              Nebula News.
            </Link>

            {/* Search Component (desktop) */}
            <div
              className="relative flex-1 max-w-md hidden sm:block"
              ref={searchContainerRef}
            >
              <div className="relative">
                <LuSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search news… (Ctrl+K)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchOpen(true)}
                  className="w-full rounded-full border border-gray-200 bg-gray-50 py-2 pl-9 pr-4 text-sm text-gray-900 placeholder-gray-400 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                  aria-label="Search news (Ctrl+K)"
                />
              </div>

              {/* Search dropdown */}
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={getTransition()}
                    className="absolute left-0 right-0 mt-2 rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden z-50"
                  >
                    <div className="max-h-96 overflow-y-auto">
                      <div className="border-b border-gray-100 px-4 py-2 bg-gray-50">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                            {searchQuery ? "Search results" : "Trending now"}
                          </span>
                          <span className="text-xs text-gray-400">
                            {filteredSuggestions.length} stories
                          </span>
                        </div>
                      </div>
                      {filteredSuggestions.length === 0 ? (
                        <div className="p-6 text-center text-gray-500">
                          <LuSearch className="mx-auto h-8 w-8 text-gray-300" />
                          <p className="mt-2 text-sm">
                            No results for "{searchQuery}"
                          </p>
                        </div>
                      ) : (
                        <div className="divide-y divide-gray-100">
                          {filteredSuggestions.map((story) => (
                            <Link
                              key={story.id}
                              href={story.href}
                              onClick={() => {
                                setIsSearchOpen(false);
                                setSearchQuery("");
                              }}
                              className="block px-4 py-3 hover:bg-gray-50 transition-colors group"
                            >
                              <div className="flex items-start justify-between">
                                <span className="rounded-full bg-red-50 px-2 py-0.5 text-xs font-semibold text-red-600">
                                  {story.category}
                                </span>
                                <span className="flex items-center gap-1 text-xs text-gray-400">
                                  <LuClock3 className="h-3 w-3" />
                                  {story.time}
                                </span>
                              </div>
                              <p className="mt-1 text-sm font-medium text-gray-900 group-hover:text-red-500">
                                {story.title}
                              </p>
                              <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                                <LuTrendingUp className="h-3 w-3 text-red-500" />
                                <span>
                                  {story.metricLabel}: {story.metric}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                      <div className="border-t border-gray-100 bg-gray-50 px-4 py-2 text-xs text-gray-400">
                        Press Ctrl+K to close · Esc to close
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile search icon */}
            <div className="relative sm:hidden">
              <button
                onClick={() => {
                  setIsSearchOpen(true);
                  setTimeout(() => searchInputRef.current?.focus(), 100);
                }}
                className="rounded-full p-2 text-gray-900 hover:bg-gray-100"
                aria-label="Search (Ctrl+K)"
              >
                <LuSearch size={20} />
              </button>
            </div>

            {/* Login button (no shortcut) */}
            <div className="relative">
              <Link
                ref={loginButtonRef}
                href="/auth/login"
                className="flex items-center justify-center rounded-full p-1 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                aria-label="Login"
              >
                <LuCircleUserRound size={28} className="text-gray-900" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile search overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white sm:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-2 border-b border-gray-200 p-4">
                <LuSearch className="h-5 w-5 text-gray-400" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search news…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 text-base outline-none placeholder:text-gray-400"
                  autoFocus
                />
                <button
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSearchQuery("");
                  }}
                  className="rounded-full p-2 text-gray-500 hover:bg-gray-100"
                >
                  <LuX size={20} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto">
                {filteredSuggestions.length === 0 ? (
                  <div className="p-6 text-center text-gray-500">
                    <LuSearch className="mx-auto h-8 w-8 text-gray-300" />
                    <p className="mt-2">No results for "{searchQuery}"</p>
                  </div>
                ) : (
                  <div className="divide-y divide-gray-100">
                    {filteredSuggestions.map((story) => (
                      <Link
                        key={story.id}
                        href={story.href}
                        onClick={() => {
                          setIsSearchOpen(false);
                          setSearchQuery("");
                        }}
                        className="block px-4 py-4 hover:bg-gray-50"
                      >
                        <div className="flex items-start justify-between">
                          <span className="rounded-full bg-red-50 px-2 py-0.5 text-xs font-semibold text-red-600">
                            {story.category}
                          </span>
                          <span className="text-xs text-gray-400">
                            {story.time}
                          </span>
                        </div>
                        <p className="mt-2 text-sm font-medium text-gray-900">
                          {story.title}
                        </p>
                        <div className="mt-1 text-xs text-gray-500">
                          {story.metricLabel}: {story.metric}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Shortcut hint notification (updated) */}
      <AnimatePresence>
        {showShortcutHint && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-full bg-gray-900 px-4 py-2 text-sm text-white shadow-lg flex items-center gap-2"
            role="status"
            aria-live="polite"
          >
            <LuKeyboard className="h-4 w-4" />
            <span>Keyboard shortcuts: Ctrl+M (menu) · Ctrl+K (search)</span>
            <button
              onClick={() => setShowShortcutHint(false)}
              className="ml-2 rounded-full p-1 hover:bg-gray-700"
              aria-label="Dismiss"
            >
              <LuX size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu drawer (no changes needed here) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50" aria-hidden="true">
            <motion.div
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={getTransition()}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm"
              onClick={closeMenu}
              style={{ willChange: "opacity" }}
            />
            <motion.div
              ref={mobileMenuRef}
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={getTransition()}
              className="fixed inset-y-0 left-0 w-full max-w-xs bg-white border-r border-gray-200 shadow-xl"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              style={{ willChange: "transform" }}
            >
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
                  <Link
                    href="/"
                    className="text-4xl font-title tracking-tight text-gray-900"
                    onClick={closeMenu}
                  >
                    Nebula News.
                  </Link>
                  <button
                    onClick={closeMenu}
                    className="rounded-md p-2 text-gray-900 cursor-pointer hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    aria-label="Close menu (Esc)"
                  >
                    <LuX size={20} />
                  </button>
                </div>
                <nav className="flex-1 space-y-1 px-2 py-4" role="navigation">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={closeMenu}
                        className={`flex items-center justify-between rounded-md px-3 py-2 text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 ${
                          isActive
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        }`}
                      >
                        <span>{item.name}</span>
                        {item.icon}
                      </Link>
                    );
                  })}
                </nav>
                <div className="p-4 border-t border-gray-200">
                  <div className="flex items-center gap-3">
                    <LuKeyboard size={20} className="text-gray-500" />
                    <span className="text-xs text-gray-500">
                      Shortcuts: Ctrl+M (menu) · Ctrl+K (search)
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <LuUsers size={20} className="text-gray-500" />
                    <span className="text-sm text-gray-500">v1.0.0</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
