"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import LanguageSwitcher from "@/components/language/LanguageSwitcher";
import { useLanguage } from "@/components/language/LanguageProvider";
import ThemeToggle from "@/components/theme/ThemeToggle";
import { images } from "@/lib/images";

const navigation = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "resources", href: "/resources" },
  { key: "contact", href: "/contact" },
] as const;

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const nav = t("nav");

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          onClick={() => setMobileMenuOpen(false)}
          className="group flex items-center gap-3"
        >
          <div className="relative h-11 w-11 overflow-hidden rounded-xl border border-border bg-white">
            <Image
              src={images.brand.logo}
              alt="Thesis Companion"
              fill
              priority
              sizes="44px"
              className="object-cover"
            />
          </div>

          <div className="hidden sm:block">
            <span className="block text-base font-bold tracking-tight text-primary">
              Thesis Companion
            </span>

            <span className="block text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Research Support
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative py-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {nav[item.key]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <LanguageSwitcher />
          <ThemeToggle />

          <Link
            href="/contact"
            className="ml-2 inline-flex items-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            {nav.getStarted}
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={
              mobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-muted"
          >
            {mobileMenuOpen ? (
              <span className="text-xl leading-none">×</span>
            ) : (
              <span className="text-lg leading-none">☰</span>
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto max-w-7xl px-5 py-4 sm:px-6">
            <div className="flex flex-col">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="border-b border-border py-4 text-sm font-medium text-foreground transition-colors last:border-b-0 hover:text-primary"
                >
                  {nav[item.key]}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 inline-flex items-center justify-center rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground"
              >
                {nav.getStarted}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}