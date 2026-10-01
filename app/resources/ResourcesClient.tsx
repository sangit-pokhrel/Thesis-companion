"use client";

import Image from "next/image";
import Link from "next/link";

import { useLanguage } from "@/components/language/LanguageProvider";
import { images } from "@/lib/images";
import { resourceGuides } from "@/lib/resources";

export default function ResourcesClient() {
  const { language, t } = useLanguage();

  const resources = t("resources");
  const common = t("common");

  const featured = resourceGuides.map((guide) => {
    const content = guide[language];

    return {
      number:
        language === "en"
          ? guide.number
          : guide.number.replace("01", "०१").replace("02", "०२").replace("03", "०३").replace("04", "०४").replace("05", "०५"),
      slug: guide.slug,
      title: content.title,
      description: content.description,
      category: guide.category[language],
      image: guide.image,
    };
  });

  const topics = [
    {
      slug: "how-to-choose-a-research-topic",
      en: "Research Planning",
      ne: "अनुसन्धान योजना",
    },
    {
      slug: "how-to-write-a-research-proposal",
      en: "Research Proposals",
      ne: "अनुसन्धान प्रस्ताव",
    },
    {
      slug: "how-to-write-a-literature-review",
      en: "Literature Review",
      ne: "साहित्य समीक्षा",
    },
    {
      slug: "research-methodology",
      en: "Research Methodology",
      ne: "अनुसन्धान विधि",
    },
    {
      slug: "data-analysis-for-research",
      en: "Data Analysis",
      ne: "डाटा विश्लेषण",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[520px] overflow-hidden">
        <Image
          src={images.resources.hero}
          alt={
            language === "en"
              ? "Research resources and academic support"
              : "अनुसन्धान स्रोतहरू र शैक्षिक सहयोग"
          }
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-primary/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/55" />

        <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-6 py-24 lg:px-8 lg:py-28">
          <div className="max-w-4xl text-white">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              {resources.label}
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {resources.title}
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80">
              {resources.description}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="bg-muted/40">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {resources.featured}
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {resources.featuredHeading}
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((resource) => (
              <Link
                key={resource.slug}
                href={`/resources/${resource.slug}`}
                className="group overflow-hidden rounded-2xl border border-border bg-background transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <article className="flex h-full flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={resource.image}
                      alt={resource.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-primary/10 transition-colors group-hover:bg-primary/0" />
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm font-semibold text-muted-foreground">
                        {resource.number}
                      </span>

                      <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                        {resource.category}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-foreground">
                      {resource.title}
                    </h3>

                    <p className="mt-4 flex-1 text-sm leading-6 text-muted-foreground">
                      {resource.description}
                    </p>

                    <div className="mt-7 border-t border-border pt-5">
                      <span className="inline-block text-sm font-semibold text-muted-foreground transition-transform group-hover:translate-x-1">
                        {common.readGuide} →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Topic */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {resources.browse}
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {resources.browseHeading}
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic, index) => (
              <Link
                key={topic.slug}
                href={`/resources/${topic.slug}`}
                className="group rounded-xl border border-border bg-muted/40 p-6 transition-all hover:-translate-y-1 hover:bg-muted hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-muted-foreground">
                    0{index + 1}
                  </span>

                  <span className="text-lg text-muted-foreground transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-semibold text-foreground">
                  {topic[language]}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Library */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-10">
          <Image
            src={images.resources.academicWriting}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              {resources.library}
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {language === "en"
                ? "A growing library of practical research guides."
                : "बढ्दो व्यावहारिक अनुसन्धान गाइडहरूको पुस्तकालय।"}
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-primary-foreground/70">
              {language === "en"
                ? "Explore practical guides that help you understand different stages of academic research, from choosing a topic and preparing a proposal to methodology, literature review, and data analysis."
                : "अनुसन्धान विषय छनोट र प्रस्ताव तयार गर्ने चरणदेखि अनुसन्धान विधि, साहित्य समीक्षा तथा डाटा विश्लेषणसम्म शैक्षिक अनुसन्धानका विभिन्न चरण बुझ्न सहयोग गर्ने व्यावहारिक गाइडहरू हेर्नुहोस्।"}
            </p>

            <span className="mt-8 inline-flex rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground">
              {language === "en" ? "5 guides available" : "५ वटा गाइड उपलब्ध"}
            </span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {resources.ctaLabel}
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {resources.ctaHeading}
          </h2>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:opacity-90"
          >
            {common.contactUs}
          </Link>
        </div>
      </section>
    </div>
  );
}
