"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { useLanguage } from "@/components/language/LanguageProvider";
import { resourceGuides, type ResourceGuide } from "@/lib/resources";

interface ResourceGuideClientProps {
  guide: ResourceGuide;
}

export default function ResourceGuideClient({
  guide,
}: ResourceGuideClientProps) {
  const { language } = useLanguage();
  const content = guide[language];

  const [activeSection, setActiveSection] = useState("section-1");

  const relatedGuides = resourceGuides
    .filter((item) => item.slug !== guide.slug)
    .slice(0, 3);

  const ui =
    language === "en"
      ? {
          back: "← All Research Resources",
          guide: "Research Guide",
          tableOfContents: "Table of Contents",
          quickChecklist: "Quick Checklist",
          related: "Related Research Guides",
          needHelp: "Need help with your research?",
          needHelpText:
            "If you need support beyond the guide, we can help you work through your research requirement.",
          exploreServices: "Explore Research Services",
          contact: "Contact Us",
        }
      : {
          back: "← सबै अनुसन्धान स्रोतहरू",
          guide: "अनुसन्धान गाइड",
          tableOfContents: "विषयसूची",
          quickChecklist: "छोटो जाँचसूची",
          related: "सम्बन्धित अनुसन्धान गाइडहरू",
          needHelp: "तपाईंको अनुसन्धानमा सहयोग चाहिन्छ?",
          needHelpText:
            "यो गाइडभन्दा थप सहयोग आवश्यक छ भने तपाईंको अनुसन्धानसम्बन्धी आवश्यकतामा हामी सहयोग गर्न सक्छौं।",
          exploreServices: "अनुसन्धान सेवाहरू हेर्नुहोस्",
          contact: "सम्पर्क गर्नुहोस्",
        };

  /*
   * Detect the section currently visible in the article
   * and highlight it inside the Table of Contents.
   */
  useEffect(() => {
    const sections = content.sections.map(
      (_, index) => `section-${index + 1}`
    );

    const sectionElements = sections
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (!sectionElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top)
          );

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-18% 0px -65% 0px",
        threshold: 0,
      }
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [content.sections]);

  return (
    <div>
      {/* Header */}
      <section className="border-b border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <Link
            href="/resources"
            className="text-sm font-semibold text-primary transition-opacity hover:opacity-70"
          >
            {ui.back}
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="relative min-h-[520px] overflow-hidden">
        <Image
          src={guide.image}
          alt={content.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-primary/55" />

        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/55" />

        <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-6 py-24 lg:px-8 lg:py-28">
          <div className="max-w-4xl text-white">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-accent-foreground">
                {ui.guide}
              </span>

              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/85 backdrop-blur-sm">
                {guide.category[language]}
              </span>
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {content.title}
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80">
              {content.description}
            </p>

            <div className="mt-7 flex items-center gap-3 text-sm font-medium text-white/70">
              <span>{guide.number}</span>
              <span aria-hidden="true">•</span>
              <span>{guide.readTime[language]}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Content */}
      <section className="border-t border-border bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[260px_minmax(0,720px)] lg:items-start lg:gap-16">
            {/* Table of contents */}
            <aside className="lg:sticky lg:top-24">
              <div className="rounded-2xl border border-border bg-background p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {ui.tableOfContents}
                </p>

                <nav className="mt-5 space-y-2">
                  {content.sections.map((section, index) => {
                    const sectionId = `section-${index + 1}`;
                    const isActive = activeSection === sectionId;

                    return (
                      <a
                        key={section.heading}
                        href={`#${sectionId}`}
                        onClick={() => setActiveSection(sectionId)}
                        className={`block rounded-lg border-l-2 px-3 py-2 text-sm leading-6 transition-all ${
                          isActive
                            ? "border-accent bg-accent/10 font-semibold text-primary"
                            : "border-transparent text-muted-foreground hover:border-primary/30 hover:bg-muted/60 hover:text-primary"
                        }`}
                      >
                        {index + 1}. {section.heading}
                      </a>
                    );
                  })}

                  <a
                    href="#quick-checklist"
                    className="block rounded-lg border-l-2 border-transparent px-3 py-2 text-sm font-semibold leading-6 text-muted-foreground transition-colors hover:border-primary/30 hover:bg-muted/60 hover:text-primary"
                  >
                    {content.sections.length + 1}. {ui.quickChecklist}
                  </a>
                </nav>
              </div>
            </aside>

            {/* Article */}
            <article className="min-w-0">
              <div className="space-y-12">
                {content.sections.map((section, index) => (
                  <section
                    key={section.heading}
                    id={`section-${index + 1}`}
                    className="scroll-mt-24"
                  >
                    <p className="text-sm font-semibold text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                      {section.heading}
                    </h2>

                    <p className="mt-5 text-base leading-8 text-muted-foreground">
                      {section.content}
                    </p>
                  </section>
                ))}
              </div>

              {/* Checklist */}
              <section
                id="quick-checklist"
                className="mt-14 scroll-mt-24 rounded-2xl border border-border bg-background p-7 sm:p-8"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {ui.quickChecklist}
                </p>

                <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground">
                  {language === "en"
                    ? "Use this checklist before moving to the next stage."
                    : "अर्को चरणमा जानुअघि यो जाँचसूची प्रयोग गर्नुहोस्।"}
                </h2>

                <ul className="mt-6 space-y-4">
                  {content.checklist.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-muted-foreground"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </article>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {ui.related}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {relatedGuides.map((item) => (
              <Link
                key={item.slug}
                href={`/resources/${item.slug}`}
                className="group overflow-hidden rounded-2xl border border-border bg-background transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item[language].title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    {item.category[language]}
                  </span>

                  <h3 className="mt-3 text-lg font-bold text-foreground">
                    {item[language].title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
                    {item[language].description}
                  </p>

                  <span className="mt-5 inline-block text-sm font-semibold text-muted-foreground transition-transform group-hover:translate-x-1">
                    {language === "en"
                      ? "Read guide →"
                      : "गाइड पढ्नुहोस् →"}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            {ui.needHelp}
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {language === "en"
              ? "Turn research guidance into practical progress."
              : "अनुसन्धान मार्गदर्शनलाई व्यावहारिक प्रगतिमा बदल्नुहोस्।"}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
            {ui.needHelpText}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/services"
              className="inline-flex rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:opacity-90"
            >
              {ui.exploreServices}
            </Link>

            <Link
              href="/contact"
              className="inline-flex rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:shadow-sm"
            >
              {ui.contact}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}