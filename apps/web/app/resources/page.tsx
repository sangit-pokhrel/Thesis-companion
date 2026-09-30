"use client";

import Image from "next/image";
import Link from "next/link";

import { useLanguage } from "@/components/language/LanguageProvider";
import { images } from "@/lib/images";

export default function ResourcesPage() {
  const { language, t } = useLanguage();

  const resources = t("resources");
  const common = t("common");

  const featured = {
    en: [
      {
        number: "01",
        title: "How to Choose a Research Topic",
        description:
          "Understand how to narrow a broad area into a focused and manageable research topic.",
        category: "Research Planning",
        image: images.resources.researchPlanning,
      },
      {
        number: "02",
        title: "Understanding Research Methodology",
        description:
          "Learn the key components of research methodology and how they connect with your research questions.",
        category: "Methodology",
        image: images.resources.methodology,
      },
      {
        number: "03",
        title: "Writing a Literature Review",
        description:
          "Learn how to organise academic sources, identify themes, and develop a meaningful literature review.",
        category: "Literature Review",
        image: images.resources.literatureReview,
      },
    ],
    ne: [
      {
        number: "०१",
        title: "अनुसन्धान विषय कसरी छनोट गर्ने",
        description:
          "व्यापक विषयलाई केन्द्रित र व्यवस्थापन गर्न सकिने अनुसन्धान विषयमा कसरी परिवर्तन गर्ने भन्ने बुझ्नुहोस्।",
        category: "अनुसन्धान योजना",
        image: images.resources.researchPlanning,
      },
      {
        number: "०२",
        title: "अनुसन्धान विधि बुझ्नुहोस्",
        description:
          "अनुसन्धान विधिका प्रमुख भागहरू र ती अनुसन्धान प्रश्नसँग कसरी जोडिन्छन् भन्ने बुझ्नुहोस्।",
        category: "अनुसन्धान विधि",
        image: images.resources.methodology,
      },
      {
        number: "०३",
        title: "साहित्य समीक्षा लेख्ने तरिका",
        description:
          "शैक्षिक स्रोतहरू व्यवस्थित गर्ने, विषयगत पक्ष पहिचान गर्ने र अर्थपूर्ण साहित्य समीक्षा तयार गर्ने तरिका सिक्नुहोस्।",
        category: "साहित्य समीक्षा",
        image: images.resources.literatureReview,
      },
    ],
  };

  const topics = {
    en: [
      "Research Planning",
      "Research Proposals",
      "Literature Review",
      "Research Methodology",
      "Data Analysis",
      "Academic Writing",
    ],
    ne: [
      "अनुसन्धान योजना",
      "अनुसन्धान प्रस्ताव",
      "साहित्य समीक्षा",
      "अनुसन्धान विधि",
      "डाटा विश्लेषण",
      "शैक्षिक लेखन",
    ],
  };

  const currentFeatured = featured[language];
  const currentTopics = topics[language];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[520px] overflow-hidden">
        <Image
          src={images.resources.hero}
          alt="Research resources and academic support"
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              {resources.featured}
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {resources.featuredHeading}
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {currentFeatured.map((resource) => (
              <article
                key={resource.number}
                className="group overflow-hidden rounded-2xl border border-border bg-background transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Resource Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-primary/10 transition-colors group-hover:bg-primary/0" />
                </div>

                <div className="flex flex-col p-7">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-primary">
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
                    <span className="text-sm font-semibold text-primary transition-transform group-hover:translate-x-1 inline-block">
                      {common.readGuide} →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Topic */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              {resources.browse}
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {resources.browseHeading}
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {currentTopics.map((topic, index) => (
              <div
                key={topic}
                className="group rounded-xl border border-border bg-muted/40 p-6 transition-all hover:-translate-y-1 hover:bg-muted hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-primary">
                    0{index + 1}
                  </span>

                  <span className="text-lg text-muted-foreground transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-semibold text-foreground">
                  {topic}
                </h3>
              </div>
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
              {resources.libraryHeading}
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-primary-foreground/70">
              {language === "en"
                ? "We are building a growing collection of practical research guides to help students understand and navigate different stages of academic research."
                : "विद्यार्थी तथा अनुसन्धानकर्ताहरूलाई शैक्षिक अनुसन्धानका विभिन्न चरण बुझ्न र अगाडि बढ्न सहयोग गर्ने व्यावहारिक अनुसन्धान गाइडहरूको संग्रह तयार हुँदैछ।"}
            </p>

            <span className="mt-8 inline-flex rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground">
              {common.comingSoon}
            </span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
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