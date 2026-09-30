"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

import { useLanguage } from "@/components/language/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  const nav = t("nav");
  const footer = t("footer");

  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-xl font-bold tracking-tight"
            >
              Thesis Companion
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 opacity-75">
              {footer.description}
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              {nav.getStarted}
            </Link>

            {/* Social Links */}
            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61567854154156"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/75 transition-all duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground"
              >
                <FaFacebookF size={17} />
              </a>

              <a
                href="https://www.instagram.com/thesiscompanion/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/75 transition-all duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider">
              {footer.quickLinks}
            </h2>

            <nav className="mt-5 flex flex-col gap-3 text-sm opacity-75">
              <Link
                href="/"
                className="transition-opacity hover:opacity-100"
              >
                {nav.home}
              </Link>

              <Link
                href="/about"
                className="transition-opacity hover:opacity-100"
              >
                {nav.about}
              </Link>

              <Link
                href="/services"
                className="transition-opacity hover:opacity-100"
              >
                {nav.services}
              </Link>

              <Link
                href="/resources"
                className="transition-opacity hover:opacity-100"
              >
                {nav.resources}
              </Link>

              <Link
                href="/contact"
                className="transition-opacity hover:opacity-100"
              >
                {nav.contact}
              </Link>
            </nav>
          </div>

          {/* Get In Touch */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider">
              {footer.getInTouch}
            </h2>

            <p className="mt-5 text-sm leading-7 opacity-75">
              {footer.contactText}
              <br />
              {footer.discuss}
            </p>

            <div className="mt-5 text-sm opacity-75">
              Thesis Companion
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-5 text-center text-xs opacity-60 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Thesis Companion.{" "}
          {footer.allRights}
        </div>
      </div>
    </footer>
  );
}