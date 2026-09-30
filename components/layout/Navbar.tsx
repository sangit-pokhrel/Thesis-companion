"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import LanguageSwitcher from "@/components/language/LanguageSwitcher";
import { useLanguage } from "@/components/language/LanguageProvider";
import ThemeToggle from "@/components/theme/ThemeToggle";
import { images } from "@/lib/images";
import { getAcademicUnits } from "@/lib/academicUnits";

const navigation = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "resources", href: "/resources" },
  { key: "contact", href: "/contact" },
] as const;

const universities = [
  {
    shortName: "TU",
    name: "Tribhuvan University",
    nameNe: "त्रिभुवन विश्वविद्यालय",
    href: "/guidelines/tribhuvan-university",
  },
  {
    shortName: "PU",
    name: "Pokhara University",
    nameNe: "पोखरा विश्वविद्यालय",
    href: "/guidelines/pokhara-university",
  },
  {
    shortName: "KU",
    name: "Kathmandu University",
    nameNe: "काठमाडौं विश्वविद्यालय",
    href: "/guidelines/kathmandu-university",
  },
  {
    shortName: "PU",
    name: "Purbanchal University",
    nameNe: "पूर्वाञ्चल विश्वविद्यालय",
    href: "/guidelines/purbanchal-university",
  },
  {
    shortName: "MWU",
    name: "Mid-Western University",
    nameNe: "मध्यपश्चिम विश्वविद्यालय",
    href: "/guidelines/mid-western-university",
  },
  {
    shortName: "FWU",
    name: "Far-Western University",
    nameNe: "सुदूरपश्चिम विश्वविद्यालय",
    href: "/guidelines/far-western-university",
  },
  {
    shortName: "AFU",
    name: "Agriculture and Forestry University",
    nameNe: "कृषि तथा वन विज्ञान विश्वविद्यालय",
    href: "/guidelines/agriculture-and-forestry-university",
  },
  {
    shortName: "NSU",
    name: "Nepal Sanskrit University",
    nameNe: "नेपाल संस्कृत विश्वविद्यालय",
    href: "/guidelines/nepal-sanskrit-university",
  },
  {
    shortName: "BPKIHS",
    name: "B.P. Koirala Institute of Health Sciences",
    nameNe: "बी.पी. कोइराला स्वास्थ्य विज्ञान प्रतिष्ठान",
    href: "/guidelines/bpkihs",
  },
] as const;

export default function Navbar() {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [guidelinesOpen, setGuidelinesOpen] = useState(false);

  const { language, t } = useLanguage();

  const nav = t("nav");

  const guidelinesText =
    language === "en"
      ? {
          label: "Guidelines",
          title: "Research Guidelines",
          description: "University-specific research and thesis resources",
          viewAll: "View All Guidelines",
          all: "All Guidelines",
        }
      : {
          label: "निर्देशनहरू",
          title: "अनुसन्धान निर्देशनहरू",
          description: "विश्वविद्यालयअनुसार अनुसन्धान तथा थेसिस स्रोतहरू",
          viewAll: "सबै निर्देशनहरू हेर्नुहोस्",
          all: "सबै निर्देशनहरू",
        };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  const guidelinesActive = pathname.startsWith("/guidelines");

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setGuidelinesOpen(false);
  };

  /*
   * -------------------------------------------------------------
   * MOBILE SCROLL LOCK
   *
   * When the hamburger menu is open:
   * - Prevent the page behind the menu from scrolling.
   * - Allow scrolling inside the mobile menu itself.
   * -------------------------------------------------------------
   */
  useEffect(() => {
    if (!mobileMenuOpen) {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      return;
    }

    const originalOverflow = document.body.style.overflow;
    const originalTouchAction = document.body.style.touchAction;

    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.touchAction = originalTouchAction;
    };
  }, [mobileMenuOpen]);

  /*
   * Close the mobile menu automatically when switching
   * to desktop width.
   */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
        setGuidelinesOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /*
   * Close mobile menu when the route changes.
   */
  useEffect(() => {
    if (!mobileMenuOpen) {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      return;
    }

    const originalOverflow = document.body.style.overflow;
    const originalTouchAction = document.body.style.touchAction;

    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.touchAction = originalTouchAction;
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
        setGuidelinesOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-4 lg:px-6">
      {/* Subtle ambient accent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-20 bg-linear-to-b from-accent/5 to-transparent dark:from-accent/6" />

      <div className="mx-auto max-w-7xl">
        {/* =====================================================
            MAIN NAVBAR
        ====================================================== */}
        <div
          className="
            relative flex h-17.5 items-center justify-between
            rounded-2xl
            border border-border/70
            bg-background/90
            px-3
            shadow-sm
            backdrop-blur-xl
            transition-colors duration-300
            dark:bg-background/90
            dark:shadow-none
          "
        >
          {/* Subtle top accent */}
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-linear-to-r from-transparent via-accent/50 to-transparent" />

          {/* =====================================================
              LOGO
          ====================================================== */}
          <Link
            href="/"
            onClick={closeMenus}
            className="group relative flex items-center gap-3 rounded-xl px-2 py-1.5"
          >
            <div className="absolute -inset-1 rounded-xl bg-accent/10 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />

            <div
              className="
                relative h-10 w-10 shrink-0 overflow-hidden rounded-xl
                border border-border
                bg-white
                ring-1 ring-black/3
                transition-all duration-300
                group-hover:border-accent/40
                group-hover:ring-accent/10
                dark:ring-white/5
              "
            >
              <Image
                src={images.brand.logo}
                alt="Thesis Companion"
                fill
                priority
                sizes="40px"
                unoptimized
                className="object-cover"
              />
            </div>

            <div className="relative hidden sm:block">
              <span
                className="
                  block text-[15px] font-bold tracking-[-0.01em]
                  text-foreground
                  transition-colors duration-200
                "
              >
                Thesis Companion
              </span>

              <span
                className="
                  mt-0.5 block text-[9px] font-semibold uppercase
                  tracking-[0.2em]
                  text-muted-foreground
                "
              >
                Research Support
              </span>
            </div>
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION
          ====================================================== */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    group relative flex h-10 items-center
                    rounded-xl px-3.5
                    text-[13px] font-semibold
                    transition-all duration-200
                    ${
                      active
                        ? "bg-accent/11 dark:bg-accent/[0.14]"
                        : "text-muted-foreground hover:bg-muted/70 hover:text-foreground dark:hover:bg-white/5"
                    }
                  `}
                >
                  <span
                    className={`
                      relative z-10
                      ${active ? "text-[#0b1f3a] dark:text-[#f5c400]" : ""}
                    `}
                  >
                    {nav[item.key]}
                  </span>

                  <span
                    className={`
                      absolute bottom-1.5 left-1/2 h-0.5
                      -translate-x-1/2 rounded-full
                      bg-accent
                      transition-all duration-300
                      ${
                        active
                          ? "w-5 opacity-100"
                          : "w-0 opacity-0 group-hover:w-5 group-hover:opacity-70"
                      }
                    `}
                  />

                  <span className="absolute inset-0 rounded-xl bg-accent/[0.035] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                </Link>
              );
            })}

            {/* =================================================
                DESKTOP GUIDELINES DROPDOWN
            ================================================== */}
            <div
              className="relative"
              onMouseEnter={() => setGuidelinesOpen(true)}
              onMouseLeave={() => setGuidelinesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setGuidelinesOpen((open) => !open)}
                aria-expanded={guidelinesOpen}
                aria-haspopup="menu"
                className={`
                  group relative flex h-10 items-center gap-1.5
                  rounded-xl px-3.5
                  text-[13px] font-semibold
                  transition-all duration-200
                  ${
                    guidelinesActive
                      ? "bg-accent/11 dark:bg-accent/[0.14]"
                      : "text-muted-foreground hover:bg-muted/70 hover:text-foreground dark:hover:bg-white/5"
                  }
                `}
              >
                <span
                  className={`
                    relative z-10
                    ${
                      guidelinesActive
                        ? "text-[#0b1f3a] dark:text-[#f5c400]"
                        : ""
                    }
                  `}
                >
                  {guidelinesText.label}
                </span>

                <svg
                  className={`
                    relative z-10 h-3.5 w-3.5
                    transition-transform duration-300
                    ${guidelinesOpen ? "rotate-180" : ""}
                  `}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>

                <span
                  className={`
                    absolute bottom-1.5 left-1/2 h-0.5
                    -translate-x-1/2 rounded-full
                    bg-accent
                    transition-all duration-300
                    ${
                      guidelinesActive
                        ? "w-5 opacity-100"
                        : "w-0 opacity-0 group-hover:w-5 group-hover:opacity-70"
                    }
                  `}
                />
              </button>

              {guidelinesOpen && (
                <div className="absolute left-1/2 top-full z-50 w-97.5 -translate-x-1/2 pt-3">
                  <div
                    className="
                      overflow-hidden rounded-2xl
                      border border-border/80
                      bg-background/95
                      shadow-lg
                      backdrop-blur-2xl
                      dark:shadow-none
                    "
                  >
                    <div className="h-0.5 bg-linear-to-r from-transparent via-accent to-transparent" />

                    <div className="border-b border-border/70 px-5 py-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
                            {guidelinesText.title}
                          </p>

                          <p className="mt-1.5 text-xs leading-5 text-muted-foreground">
                            {guidelinesText.description}
                          </p>
                        </div>

                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-accent/10 dark:text-accent">
                          <svg
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6v12m-6-6h12"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="max-h-107.5 overflow-y-auto overscroll-contain p-2.5">
                      {universities.map((university) => {
                        const active = pathname.startsWith(university.href);

                        return (
                          <Link
                            key={university.href}
                            href={university.href}
                            onClick={() => setGuidelinesOpen(false)}
                            className={`
                              group flex items-center gap-3
                              rounded-xl px-3 py-2.5
                              transition-all duration-200
                              ${
                                active
                                  ? "bg-primary/5 text-primary dark:bg-accent/10 dark:text-accent"
                                  : "text-foreground hover:bg-muted/70 hover:text-primary dark:hover:bg-white/5"
                              }
                            `}
                          >
                            <span
                              className={`
                                flex h-9 w-9 shrink-0 items-center justify-center
                                rounded-lg text-[9px] font-bold
                                transition-all duration-200
                                ${
                                  active
                                    ? "bg-primary text-primary-foreground dark:bg-accent dark:text-accent-foreground"
                                    : "bg-primary text-primary-foreground group-hover:bg-primary/90 dark:bg-primary"
                                }
                              `}
                            >
                              {university.shortName}
                            </span>

                            <span className="flex-1 text-[13px] font-medium">
                              {language === "en"
                                ? university.name
                                : university.nameNe}
                            </span>

                            <span
                              className={`
                                text-sm transition-all duration-200
                                group-hover:translate-x-1
                                ${
                                  active
                                    ? "text-primary dark:text-accent"
                                    : "text-muted-foreground"
                                }
                              `}
                            >
                              →
                            </span>
                          </Link>
                        );
                      })}
                    </div>

                    <div className="border-t border-border/70 p-3">
                      <Link
                        href="/guidelines"
                        onClick={() => setGuidelinesOpen(false)}
                        className="
                          group flex h-10 items-center justify-center
                          rounded-xl
                          bg-primary
                          px-4
                          text-[13px] font-semibold
                          text-primary-foreground
                          shadow-sm
                          transition-all duration-200
                          hover:-translate-y-0.5
                          hover:bg-primary/90
                          hover:shadow-md
                          dark:shadow-none
                        "
                      >
                        {guidelinesText.viewAll}

                        <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* =====================================================
              DESKTOP ACTIONS
          ====================================================== */}
          <div className="hidden items-center gap-2 lg:flex">
            <div
              className="
                flex items-center gap-1
                rounded-xl
                border border-border/60
                bg-muted/30
                p-1
                dark:bg-white/3
              "
            >
              <LanguageSwitcher />
              <ThemeToggle />
            </div>

            <Link
              href="/contact"
              className="
                group relative ml-2 inline-flex h-10
                items-center justify-center
                overflow-hidden rounded-xl
                bg-primary
                px-5
                text-[13px] font-bold
                text-primary-foreground
                shadow-sm
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-primary/90
                hover:shadow-md
                dark:shadow-none
              "
            >
              <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative z-10">{nav.getStarted}</span>

              <span className="relative z-10 ml-2 transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* =====================================================
              MOBILE ACTIONS
          ====================================================== */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <div
              className="
                flex items-center gap-1
                rounded-xl
                border border-border/60
                bg-muted/30
                p-1
                dark:bg-white/3
              "
            >
              <LanguageSwitcher />
              <ThemeToggle />
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileMenuOpen}
              className="
                relative inline-flex h-10 w-10
                items-center justify-center
                overflow-hidden rounded-xl
                border border-border/70
                bg-background
                text-foreground
                transition-all duration-200
                hover:border-accent/40
                hover:bg-accent/5
              "
            >
              <span
                className={`
                  absolute h-px w-4 bg-current
                  transition-all duration-300
                  ${mobileMenuOpen ? "rotate-45" : "-translate-y-1.5"}
                `}
              />

              <span
                className={`
                  absolute h-px w-4 bg-current
                  transition-all duration-300
                  ${mobileMenuOpen ? "-rotate-45" : "translate-y-1.5"}
                `}
              />
            </button>
          </div>
        </div>

        {/* =====================================================
            MOBILE NAVIGATION
        ====================================================== */}
        {mobileMenuOpen && (
          <div
            className="
              mt-2 overflow-hidden rounded-2xl
              border border-border/70
              bg-background/98
              shadow-lg
              backdrop-blur-xl
              dark:shadow-none
              lg:hidden
            "
          >
            {/* 
              This is the ONLY scrolling region of the mobile menu.
              The body is locked while the menu is open.
            */}
            <div
              className="
                max-h-[calc(100dvh-6rem)]
                overflow-y-auto
                overscroll-contain
                touch-pan-y
                overscroll-y-contain
                px-3
                py-3
                sm:px-4
              "
              style={{
                WebkitOverflowScrolling: "touch",
              }}
            >
              <nav aria-label="Mobile navigation" className="mx-auto max-w-7xl">
                {navigation.map((item) => {
                  const active = isActive(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenus}
                      className={`
                        group flex items-center justify-between
                        rounded-xl px-4 py-3.5
                        text-sm font-semibold
                        transition-all duration-200
                        ${
                          active
                            ? "bg-primary/5 text-primary dark:bg-accent/12 dark:text-accent"
                            : "text-foreground hover:bg-muted/70 hover:text-primary dark:hover:bg-white/5"
                        }
                      `}
                    >
                      <span>{nav[item.key]}</span>

                      <span
                        className={`
                          transition-all duration-200
                          ${
                            active
                              ? "text-primary dark:text-accent"
                              : "-translate-x-1 text-muted-foreground opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                          }
                        `}
                      >
                        →
                      </span>
                    </Link>
                  );
                })}

                {/* =================================================
                    MOBILE GUIDELINES
                ================================================== */}
                <div className="mt-1">
                  <button
                    type="button"
                    onClick={() => setGuidelinesOpen((open) => !open)}
                    aria-expanded={guidelinesOpen}
                    className={`
                      flex w-full items-center justify-between
                      rounded-xl px-4 py-3.5
                      text-sm font-semibold
                      transition-all duration-200
                      ${
                        guidelinesActive
                          ? "bg-primary/5 text-primary dark:bg-accent/12 dark:text-accent"
                          : "text-foreground hover:bg-muted/70 hover:text-primary dark:hover:bg-white/5"
                      }
                    `}
                  >
                    <span>{guidelinesText.label}</span>

                    <svg
                      className={`
                        h-4 w-4 shrink-0
                        transition-transform duration-300
                        ${guidelinesOpen ? "rotate-180" : ""}
                      `}
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M6 8l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {guidelinesOpen && (
                    <div className="mx-2 mb-2 mt-1 rounded-xl border border-border/60 bg-muted/20 p-2 dark:bg-white/2">
                      {/* All Guidelines */}
                      <Link
                        href="/guidelines"
                        onClick={closeMenus}
                        className={`
                          flex items-center justify-between
                          rounded-lg px-3 py-3
                          text-sm font-semibold
                          transition-colors
                          ${
                            pathname === "/guidelines"
                              ? "bg-primary/5 text-primary dark:bg-accent/10 dark:text-accent"
                              : "bg-muted/40 text-foreground hover:text-primary dark:bg-white/4 dark:hover:text-accent"
                          }
                        `}
                      >
                        <span>{guidelinesText.all}</span>
                        <span>→</span>
                      </Link>

                      {/* 
                        IMPORTANT:
                        This list gets its own touch-scroll behavior.
                      */}
                      <div
                        className="
                          mt-1.5
                          max-h-[45dvh]
                          overflow-y-auto
                          overscroll-contain
                          touch-pan-y
                          overscroll-y-contain
                          pr-1
                        "
                        style={{
                          WebkitOverflowScrolling: "touch",
                        }}
                      >
                        <div className="space-y-0.5">
                          {universities.map((university) => {
                            const active = pathname.startsWith(university.href);

                            const unitCount = getAcademicUnits(
                              university.href.split("/").pop() ?? "",
                            ).length;

                            return (
                              <Link
                                key={university.href}
                                href={university.href}
                                onClick={closeMenus}
                                className={`
                                  group flex items-center gap-3
                                  rounded-lg px-3 py-2.5
                                  text-sm transition-colors
                                  ${
                                    active
                                      ? "bg-primary/5 text-primary dark:bg-accent/10 dark:text-accent"
                                      : "text-muted-foreground hover:bg-muted hover:text-primary dark:hover:bg-white/4 dark:hover:text-accent"
                                  }
                                `}
                              >
                                <span
                                  className={`
                                    flex h-8 w-8 shrink-0 items-center justify-center
                                    rounded-md text-[9px] font-bold
                                    ${
                                      active
                                        ? "bg-primary text-primary-foreground dark:bg-accent dark:text-accent-foreground"
                                        : "bg-primary text-primary-foreground"
                                    }
                                  `}
                                >
                                  {university.shortName}
                                </span>

                                <span className="min-w-0 flex-1">
                                  <span className="block truncate">
                                    {language === "en"
                                      ? university.name
                                      : university.nameNe}
                                  </span>

                                  <span className="mt-0.5 block text-[10px] text-muted-foreground">
                                    {unitCount}{" "}
                                    {language === "en"
                                      ? "academic units"
                                      : "शैक्षिक एकाइ"}
                                  </span>
                                </span>

                                <span
                                  className={`
                                    shrink-0 text-sm
                                    transition-transform duration-200
                                    group-hover:translate-x-0.5
                                    ${
                                      active
                                        ? "text-primary dark:text-accent"
                                        : "text-muted-foreground"
                                    }
                                  `}
                                >
                                  →
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* =================================================
                    MOBILE GET STARTED
                ================================================== */}
                <div className="px-1 pb-1 pt-3">
                  <Link
                    href="/contact"
                    onClick={closeMenus}
                    className="
                      group flex h-11 w-full
                      items-center justify-center
                      rounded-xl
                      bg-primary
                      text-sm font-bold
                      text-primary-foreground
                      shadow-sm
                      transition-all duration-200
                      hover:-translate-y-0.5
                      hover:bg-primary/90
                      hover:shadow-md
                      dark:shadow-none
                    "
                  >
                    {nav.getStarted}

                    <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
