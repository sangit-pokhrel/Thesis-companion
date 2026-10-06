"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import Link from "next/link";

import { universities } from "@/lib/guidelines";
import { useLanguage } from "@/components/language/LanguageProvider";
import { localizeUniversity } from "@/lib/guidelineLanguage";
import { getAcademicUnits } from "@/lib/academicUnits";

export default function GuidelinesClient() {
  const { language } = useLanguage();
  const currentUniversities = universities.map((university) =>
    localizeUniversity(university, language),
  );
  const [search, setSearch] = useState("");
  const filteredUniversities = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return currentUniversities;
    return currentUniversities.filter((university) =>
      `${university.name} ${university.shortName} ${university.description}`
        .toLowerCase()
        .includes(query),
    );
  }, [currentUniversities, search]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/resources/hero.jpg"
            alt="Academic research and university guidelines"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-[#071a31]/85" />

        <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#071a31]/95 via-[#071a31]/80 to-[#071a31]/55" />

        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#f5c400]">
              {language === "en"
                ? "UNIVERSITY GUIDELINES"
                : "विश्वविद्यालयका निर्देशनहरू"}
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {language === "en"
                ? "Research guidelines for your university."
                : "तपाईंको विश्वविद्यालयका लागि अनुसन्धान निर्देशनहरू।"}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              {language === "en"
                ? "Find structured guidance for research proposals, thesis and dissertation work, academic writing, methodology, formatting, research procedures, and related academic requirements."
                : "अनुसन्धान प्रस्ताव, थेसिस तथा डिसर्टेसन, शैक्षिक लेखन, अनुसन्धान विधि, फर्म्याटिङ, अनुसन्धान प्रक्रिया तथा सम्बन्धित शैक्षिक आवश्यकताका लागि संरचित निर्देशनहरू खोज्नुहोस्।"}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#universities"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#071a31] ring-1 ring-white/30 transition hover:bg-white/90"
              >
                {language === "en"
                  ? "Explore Universities"
                  : "विश्वविद्यालयहरू हेर्नुहोस्"}
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                {language === "en"
                  ? "Need Research Support?"
                  : "अनुसन्धान सहयोग चाहिन्छ?"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                {language === "en"
                  ? "FIND YOUR GUIDELINE"
                  : "आफ्नो निर्देशन खोज्नुहोस्"}
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {language === "en"
                  ? "Academic requirements can vary by institution."
                  : "शैक्षिक आवश्यकताहरू संस्थाअनुसार फरक हुन सक्छन्।"}
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-muted-foreground">
              <p>
                {language === "en"
                  ? "Every university may have its own requirements for research proposals, thesis structure, formatting, methodology, submission, referencing, and approval procedures."
                  : "प्रत्येक विश्वविद्यालयका अनुसन्धान प्रस्ताव, थेसिस संरचना, फर्म्याटिङ, अनुसन्धान विधि, पेश, सन्दर्भ तथा स्वीकृति प्रक्रियाका आफ्नै आवश्यकताहरू हुन सक्छन्।"}
              </p>

              <p>
                {language === "en"
                  ? "Thesis Companion brings these requirements together in a structured format so that students can quickly identify the guidance relevant to their university."
                  : "Thesis Companion ले यी आवश्यकताहरूलाई संरचित ढाँचामा प्रस्तुत गर्छ ताकि विद्यार्थीहरूले आफ्नो विश्वविद्यालयसँग सम्बन्धित निर्देशनहरू सजिलै पहिचान गर्न सकून्।"}
              </p>

              <p className="text-sm">
                {language === "en"
                  ? "Guidelines are presented for reference and should be checked against the latest official documents and notices issued by the respective institution."
                  : "यी निर्देशनहरू सन्दर्भका लागि प्रस्तुत गरिएका हुन् र सम्बन्धित संस्थाले जारी गरेका नवीनतम आधिकारिक कागजात तथा सूचनासँग जाँच गर्नुपर्छ।"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          {language === "en" ? "UNIVERSITY DIRECTORY" : "विश्वविद्यालय सूची"}
      ========================================================= */}
      <section id="universities" className="scroll-mt-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              {language === "en"
                ? "UNIVERSITY DIRECTORY"
                : "विश्वविद्यालय सूची"}
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {language === "en"
                ? "Select your university"
                : "आफ्नो विश्वविद्यालय छनोट गर्नुहोस्"}
            </h2>

            <p className="mt-5 text-base leading-7 text-muted-foreground">
              {language === "en"
                ? "Choose an institution below to explore its research and academic guidelines."
                : "अनुसन्धान तथा शैक्षिक निर्देशनहरू हेर्न तलको संस्था छनोट गर्नुहोस्।"}
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            <div className="relative">
              <svg
                className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
              </svg>
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder={
                  language === "en"
                    ? "Search your university..."
                    : "आफ्नो विश्वविद्यालय खोज्नुहोस्..."
                }
                aria-label={
                  language === "en"
                    ? "Search universities"
                    : "विश्वविद्यालय खोज्नुहोस्"
                }
                className="h-13 w-full rounded-xl border border-border bg-background pl-12 pr-12 text-sm text-foreground outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10 dark:focus:border-accent dark:focus:ring-accent/10"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-xs font-semibold text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  {language === "en" ? "Clear" : "हटाउनुहोस्"}
                </button>
              )}
            </div>
          </div>

          <div className="mt-5 text-center text-xs font-medium text-muted-foreground">
            {filteredUniversities.length}{" "}
            {language === "en"
              ? "universities available"
              : "विश्वविद्यालय उपलब्ध छन्"}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredUniversities.map((university) => (
              <article
                key={university.slug}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Card Image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={university.image}
                    alt={university.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-[#071a31]/80 via-[#071a31]/20 to-transparent" />

                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-[#071a31]">
                      {university.shortName}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold tracking-tight text-foreground">
                    {university.name}
                  </h3>

                  <p className="mt-3 line-clamp-4 text-sm leading-7 text-muted-foreground">
                    {university.description}
                  </p>

                  <div className="mt-6 border-t border-border pt-5">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {getAcademicUnits(university.slug).length}{" "}
                        {language === "en" ? "academic units" : "शैक्षिक एकाइ"}
                      </span>

                      <Link
                        href={`/guidelines/${university.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3 dark:text-accent"
                      >
                        {language === "en"
                          ? "View Guidelines"
                          : "निर्देशनहरू हेर्नुहोस्"}
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          {language === "en" ? "WHAT YOU CAN FIND" : "तपाईंले के पाउन सक्नुहुन्छ"}
      ========================================================= */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                {language === "en"
                  ? "WHAT YOU CAN FIND"
                  : "तपाईंले के पाउन सक्नुहुन्छ"}
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {language === "en"
                  ? "More than just formatting."
                  : "फर्म्याटिङभन्दा धेरै।"}
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">
                {language === "en"
                  ? "Depending on the institution, the guideline pages cover different parts of the research journey and academic submission process."
                  : "संस्थाअनुसार निर्देशन पृष्ठहरूले अनुसन्धान यात्रा तथा शैक्षिक पेश प्रक्रियाका विभिन्न पक्षहरू समेट्छन्।"}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {(language === "en"
                ? [
                    {
                      title: "Research Proposal",
                      text: "Proposal structure, required sections, objectives, methodology and planning.",
                    },
                    {
                      title: "Thesis Structure",
                      text: "Guidance on chapters, organization, presentation and academic requirements.",
                    },
                    {
                      title: "Formatting",
                      text: "Page setup, typography, spacing, margins, headings and related requirements.",
                    },
                    {
                      title: "Methodology",
                      text: "Research design, methods, data collection and analysis-related guidance.",
                    },
                    {
                      title: "Referencing",
                      text: "Citation, referencing and academic writing requirements where specified.",
                    },
                    {
                      title: "Research Ethics",
                      text: "Ethical considerations, approvals, consent and research integrity where applicable.",
                    },
                    {
                      title: "Submission",
                      text: "Relevant submission, approval, documentation and procedural requirements.",
                    },
                    {
                      title: "Official Sources",
                      text: "Links to official university pages and documents for verification.",
                    },
                  ]
                : [
                    {
                      title: "अनुसन्धान प्रस्ताव",
                      text: "प्रस्ताव संरचना, आवश्यक भागहरू, उद्देश्य, अनुसन्धान विधि तथा योजना।",
                    },
                    {
                      title: "थेसिस संरचना",
                      text: "अध्याय, संगठन, प्रस्तुति तथा शैक्षिक आवश्यकतासम्बन्धी निर्देशन।",
                    },
                    {
                      title: "फर्म्याटिङ",
                      text: "पृष्ठ व्यवस्था, अक्षर शैली, स्पेसिङ, मार्जिन, शीर्षक तथा सम्बन्धित आवश्यकताहरू।",
                    },
                    {
                      title: "अनुसन्धान विधि",
                      text: "अनुसन्धान डिजाइन, विधि, डाटा संकलन तथा विश्लेषणसम्बन्धी निर्देशन।",
                    },
                    {
                      title: "सन्दर्भ व्यवस्थापन",
                      text: "उल्लेख, सन्दर्भ तथा शैक्षिक लेखनका निर्दिष्ट आवश्यकताहरू।",
                    },
                    {
                      title: "अनुसन्धान नैतिकता",
                      text: "नैतिक विचार, स्वीकृति, सहमति तथा अनुसन्धानको इमानदारीसम्बन्धी आवश्यकताहरू।",
                    },
                    {
                      title: "पेश प्रक्रिया",
                      text: "सम्बन्धित पेश, स्वीकृति, कागजात तथा प्रक्रियागत आवश्यकताहरू।",
                    },
                    {
                      title: "आधिकारिक स्रोतहरू",
                      text: "पुष्टिका लागि आधिकारिक विश्वविद्यालय पृष्ठ तथा कागजातका लिङ्कहरू।",
                    },
                  ]
              ).map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-muted/20 p-5 transition hover:border-accent/50"
                >
                  <div className="mb-3 h-1 w-10 rounded-full bg-accent" />

                  <h3 className="font-semibold text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          IMPORTANT NOTE
      ========================================================= */}
      <section className="bg-muted/30">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8">
          <div className="rounded-2xl border border-border bg-background p-7 shadow-sm sm:p-9">
            <div className="flex gap-5">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-[#071a31]">
                i
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground">
                  {language === "en"
                    ? "Important information"
                    : "महत्वपूर्ण जानकारी"}
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {language === "en"
                    ? "University policies, regulations, notices and research requirements may change over time. The information provided on Thesis Companion is intended to help students understand and navigate the research process. Always verify important submission, formatting, ethical, and procedural requirements against the latest official documents published by your institution."
                    : "विश्वविद्यालयका नीति, नियम, सूचना तथा अनुसन्धान आवश्यकताहरू समयसँगै परिवर्तन हुन सक्छन्। Thesis Companion मा दिइएको जानकारीले विद्यार्थीलाई अनुसन्धान प्रक्रिया बुझ्न र अघि बढ्न सहयोग गर्ने उद्देश्य राख्छ। पेश, फर्म्याटिङ, नैतिक तथा प्रक्रियागत महत्वपूर्ण आवश्यकताहरू आफ्नो संस्थाले प्रकाशित गरेका नवीनतम आधिकारिक कागजातसँग सधैं जाँच गर्नुहोस्।"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="bg-[#071a31]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f5c400]">
                {language === "en"
                  ? "NEED HELP WITH YOUR RESEARCH?"
                  : "अनुसन्धानमा सहयोग चाहिन्छ?"}
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {language === "en"
                  ? "Understanding the guidelines is only the first step."
                  : "निर्देशनहरू बुझ्नु पहिलो चरण मात्र हो।"}
              </h2>

              <p className="mt-4 text-base leading-7 text-white/70">
                {language === "en"
                  ? "Get structured support with your proposal, methodology, literature review, data analysis, academic writing, or thesis and dissertation work."
                  : "आफ्नो प्रस्ताव, अनुसन्धान विधि, साहित्य समीक्षा, डाटा विश्लेषण, शैक्षिक लेखन वा थेसिस तथा डिसर्टेसन कार्यमा संरचित सहयोग प्राप्त गर्नुहोस्।"}
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#f5c400] px-7 py-3.5 text-sm font-semibold text-[#071a31] transition hover:bg-[#ffd52e]"
              >
                {language === "en" ? "Talk to Us" : "हामीसँग कुरा गर्नुहोस्"}
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
