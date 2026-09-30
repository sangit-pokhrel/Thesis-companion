"use client";

import Image from "next/image";
import Link from "next/link";

import { useLanguage } from "@/components/language/LanguageProvider";
import { localizeUniversity } from "@/lib/guidelineLanguage";

export default function UniversityGuidelineClient({ university }: { university: import("@/lib/guidelines").UniversityGuideline }) {
  const { language } = useLanguage();
  const currentUniversity = localizeUniversity(university, language);
  const universityData = currentUniversity;

  const navigationItems = universityData.sections.map((section, index) => ({
    id: `section-${index + 1}`,
    number: String(index + 1).padStart(2, "0"),
    title: section.title.replace(/^\d+\.\s*/, ""),
  }));

  return (
    <main>
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative min-h-125 overflow-hidden">
        <Image
          src={universityData.image}
          alt={`${universityData.name} research guidelines`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-primary/75" />

        <div className="absolute inset-0 bg-linear-to-r from-primary/95 via-primary/75 to-primary/45" />

        <div className="relative z-10 mx-auto flex min-h-125 max-w-7xl items-center px-6 py-20 lg:px-8">
          <div className="max-w-4xl">
            <Link
              href="/guidelines"
              className="inline-flex items-center text-sm font-medium text-white/75 transition-colors hover:text-accent"
            >
              {language === "en" ? "← All Research Guidelines" : "← सबै अनुसन्धान निर्देशनहरू"}
            </Link>

            <div className="mt-8 flex items-center gap-4">
              <span className="flex h-14 min-w-14 items-center justify-center rounded-xl bg-accent px-3 text-sm font-bold text-accent-foreground shadow-lg">
                {universityData.shortName}
              </span>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                {language === "en" ? "University Research Guide" : "विश्वविद्यालय अनुसन्धान गाइड"}
              </p>
            </div>

            <h1 className="mt-7 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {universityData.name}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-white/85 sm:text-lg">
              {universityData.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-white/60">
              <span>
                {language === "en" ? "Information checked:" : "जानकारी जाँच गरिएको:"} {universityData.lastVerified}
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:block" />

              <span>
                {universityData.sections.length} {language === "en" ? "guideline sections" : "निर्देशन खण्डहरू"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary dark:text-accent">
                {language === "en" ? "Before You Begin" : "सुरु गर्नुअघि"}
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {language === "en" ? "Use the guide, then verify your programme." : "गाइड प्रयोग गर्नुहोस्, त्यसपछि आफ्नो कार्यक्रमको आवश्यकताहरू पुष्टि गर्नुहोस्।"}
              </h2>
            </div>

            <div>
              <p className="leading-8 text-muted-foreground">
                {language === "en" ? "Research requirements can differ between universities, faculties, schools, departments, and academic programmes. This page organises the available requirements into a practical research guide." : "अनुसन्धान आवश्यकताहरू विश्वविद्यालय, संकाय, विद्यालय, विभाग तथा शैक्षिक कार्यक्रमअनुसार फरक हुन सक्छन्। यस पृष्ठले उपलब्ध आवश्यकताहरूलाई व्यावहारिक अनुसन्धान गाइडमा व्यवस्थित गर्छ।"}
              </p>

              <div className="mt-6 rounded-2xl border border-border bg-muted/40 p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                    !
                  </span>

                  <div>
                    <h3 className="font-semibold text-foreground">
                      {language === "en" ? "Important" : "महत्वपूर्ण"}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      {universityData.verificationNote}
                    </p>

                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                      {language === "en" ? "Last verified:" : "अन्तिम पटक जाँच गरिएको:"} {universityData.lastVerified}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          GUIDELINE CONTENT
      ====================================================== */}
      <section className="border-t border-border bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[240px_minmax(0,1fr)]">
            {/* =================================================
                SIDEBAR
            ================================================== */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 py-12">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary dark:text-accent">
                  {language === "en" ? "On this page" : "यस पृष्ठमा"}
                </p>

                <nav
                  aria-label={`${universityData.name} ${language === "en" ? "guideline sections" : "निर्देशन खण्डहरू"}`}
                  className="mt-5 border-l border-border"
                >
                  {navigationItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="group flex gap-3 border-l-2 border-transparent px-4 py-2.5 text-sm text-muted-foreground transition-all duration-200 hover:border-accent hover:bg-background hover:text-foreground"
                    >
                      <span className="shrink-0 text-[10px] font-bold text-accent">
                        {item.number}
                      </span>

                      <span className="leading-5">
                        {item.title}
                      </span>
                    </a>
                  ))}
                </nav>

                <div className="mt-8 rounded-xl border border-border bg-background p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary dark:text-accent">
                    {language === "en" ? "Need help?" : "सहयोग चाहिन्छ?"}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {language === "en" ? "Need help applying these requirements to your own research?" : "यी आवश्यकताहरू आफ्नो अनुसन्धानमा लागू गर्न सहयोग चाहिन्छ?"}
                  </p>

                  <Link
                    href="/contact"
                    className="mt-4 inline-flex text-sm font-semibold text-foreground transition-colors hover:text-accent"
                  >
                    {language === "en" ? "Discuss your research →" : "आफ्नो अनुसन्धानबारे छलफल गर्नुहोस् →"}
                  </Link>
                </div>
              </div>
            </aside>

            {/* =================================================
                MAIN CONTENT
            ================================================== */}
            <div className="min-w-0 py-12 sm:py-16">
              {/* Mobile table of contents */}
              <details className="mb-10 rounded-xl border border-border bg-background lg:hidden">
                <summary className="cursor-pointer px-5 py-4 text-sm font-semibold text-foreground">
                  {language === "en" ? "Table of contents" : "विषयसूची"}
                </summary>

                <div className="border-t border-border p-3">
                  {navigationItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      <span className="text-[10px] font-bold text-accent">
                        {item.number}
                      </span>

                      <span>{item.title}</span>
                    </a>
                  ))}
                </div>
              </details>

              {/* =================================================
                  SECTIONS
              ================================================== */}
              <div className="space-y-8">
                {universityData.sections.map((section, index) => (
                  <article
                    key={section.title}
                    id={`section-${index + 1}`}
                    className="scroll-mt-28 overflow-hidden rounded-2xl border border-border bg-background shadow-sm"
                  >
                    {/* Section header */}
                    <div className="border-b border-border px-6 py-7 sm:px-8">
                      <div className="flex items-start gap-5">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground dark:bg-accent dark:text-accent-foreground">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                            {language === "en" ? "Research Guideline" : "अनुसन्धान निर्देशन"}
                          </p>

                          <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                            {section.title.replace(/^\d+\.\s*/, "")}
                          </h2>

                          <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">
                            {section.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Section body */}
                    <div className="px-6 py-7 sm:px-8 sm:py-9">
                      {/* Detailed subsections */}
                      {section.details &&
                        section.details.length > 0 && (
                          <div className="space-y-9">
                            {section.details.map((detail) => (
                              <div key={detail.title}>
                                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                                  {detail.title}
                                </h3>

                                {detail.description && (
                                  <p className="mt-2 max-w-3xl leading-7 text-muted-foreground">
                                    {detail.description}
                                  </p>
                                )}

                                {detail.bullets &&
                                  detail.bullets.length > 0 && (
                                    <ul className="mt-4 grid gap-x-8 gap-y-2.5 md:grid-cols-2">
                                      {detail.bullets.map(
                                        (bullet) => (
                                          <li
                                            key={bullet}
                                            className="flex items-start gap-3 text-sm leading-6 text-foreground"
                                          >
                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />

                                            <span>{bullet}</span>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  )}
                              </div>
                            ))}
                          </div>
                        )}

                      {/* Quick checklist */}
                      {section.items &&
                        section.items.length > 0 && (
                          <div
                            className={`${
                              section.details &&
                              section.details.length > 0
                                ? "mt-10 border-t border-border pt-8"
                                : ""
                            }`}
                          >
                            <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary dark:text-accent">
                              {language === "en" ? "Quick Checklist" : "छोटो जाँचसूची"}
                            </p>

                            <div className="mt-4 grid gap-3 sm:grid-cols-2">
                              {section.items.map((item) => (
                                <div
                                  key={item}
                                  className="flex items-start gap-3 rounded-lg bg-muted/50 px-4 py-3"
                                >
                                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
                                    ✓
                                  </span>

                                  <span className="text-sm leading-6 text-foreground">
                                    {item}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                    </div>
                  </article>
                ))}
              </div>

              {/* =================================================
                  SOURCES
              ================================================== */}
              <section
                id="official-sources"
                className="scroll-mt-28 mt-12 overflow-hidden rounded-2xl border border-border bg-primary"
              >
                <div className="px-6 py-8 sm:px-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    {language === "en" ? "Official Sources" : "आधिकारिक स्रोतहरू"}
                  </p>

                  <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {language === "en" ? "Verify the latest requirements." : "नवीनतम आवश्यकताहरू पुष्टि गर्नुहोस्।"}
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">
                    {language === "en" ? "This page is a structured summary for research planning. The official university documents remain the authoritative reference." : "यो पृष्ठ अनुसन्धान योजनाका लागि संरचित सारांश हो। आधिकारिक विश्वविद्यालयका कागजातहरू नै आधिकारिक सन्दर्भका रूपमा मान्य रहन्छन्।"}
                  </p>
                </div>

                <div className="space-y-2 border-t border-white/10 p-4 sm:p-5">
                  {universityData.officialSources.map((source) => (
                    <a
                      key={source.url}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-5 rounded-xl border border-white/10 bg-white/5 px-5 py-4 transition-colors duration-200 hover:bg-white/10"
                    >
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-white transition-colors group-hover:text-accent">
                          {source.title}
                        </p>

                        <p className="mt-1 break-all text-xs leading-5 text-white/45">
                          {source.url}
                        </p>
                      </div>

                      <span className="shrink-0 text-lg text-white/50 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent">
                        ↗
                      </span>
                    </a>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          RESEARCH WORKFLOW
      ====================================================== */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary dark:text-accent">
                {language === "en" ? "Research Workflow" : "अनुसन्धान कार्यप्रवाह"}
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {language === "en" ? "From research idea to final submission." : "अनुसन्धान विचारदेखि अन्तिम पेशासम्म।"}
              </h2>

              <p className="mt-5 leading-8 text-muted-foreground">
                {language === "en" ? "Use the university requirements together with a clear research workflow to keep your proposal, methodology, analysis, writing, and final submission connected." : "प्रस्ताव, अनुसन्धान विधि, विश्लेषण, लेखन तथा अन्तिम पेशालाई जोडेर राख्न विश्वविद्यालयका आवश्यकतासँग स्पष्ट अनुसन्धान कार्यप्रवाह प्रयोग गर्नुहोस्।"}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {(language === "en"
                ? [
                    { number: "01", title: "Plan", text: "Define your topic, problem, objectives, and research direction." },
                    { number: "02", title: "Research", text: "Review literature and establish an appropriate methodology." },
                    { number: "03", title: "Analyse", text: "Collect, prepare, analyse, and interpret your research data." },
                    { number: "04", title: "Finalise", text: "Organise, edit, format, reference, and prepare the final document." },
                  ]
                : [
                    { number: "०१", title: "योजना", text: "आफ्नो विषय, समस्या, उद्देश्य तथा अनुसन्धानको दिशा स्पष्ट गर्नुहोस्।" },
                    { number: "०२", title: "अनुसन्धान", text: "साहित्य समीक्षा गरी उपयुक्त अनुसन्धान विधि तय गर्नुहोस्।" },
                    { number: "०३", title: "विश्लेषण", text: "अनुसन्धान डाटा संकलन, तयारी, विश्लेषण तथा व्याख्या गर्नुहोस्।" },
                    { number: "०४", title: "अन्तिम तयारी", text: "अन्तिम दस्तावेजलाई व्यवस्थित, सम्पादन, फर्म्याट, सन्दर्भ व्यवस्थापन तथा पेशका लागि तयार गर्नुहोस्।" },
                  ]
              ).map((step) => (
                <div
                  key={step.number}
                  className="rounded-2xl border border-border bg-muted/30 p-6"
                >
                  <span className="text-xs font-bold tracking-[0.15em] text-accent">
                    {step.number}
                  </span>

                  <h3 className="mt-3 text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="bg-primary py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {language === "en" ? "Need Research Support?" : "अनुसन्धान सहयोग चाहिन्छ?"}
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {language === "en" ? "Work through your research with a clearer structure." : "अझ स्पष्ट संरचनाका साथ आफ्नो अनुसन्धान अघि बढाउनुहोस्।"}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/75">
            {language === "en" ? "Discuss your research topic, proposal, methodology, analysis, thesis, or dissertation requirements with the Thesis Companion team." : "आफ्नो अनुसन्धान विषय, प्रस्ताव, अनुसन्धान विधि, विश्लेषण, थेसिस वा डिसर्टेसनका आवश्यकताबारे Thesis Companion टोलीसँग छलफल गर्नुहोस्।"}
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent/90"
            >
              {language === "en" ? "Discuss Your Research" : "आफ्नो अनुसन्धानबारे छलफल गर्नुहोस्"}
              <span className="ml-2">→</span>
            </Link>

            <Link
              href="/guidelines"
              className="inline-flex items-center justify-center rounded-lg border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:border-accent hover:text-accent"
            >
              {language === "en" ? "View Other Guidelines" : "अन्य निर्देशनहरू हेर्नुहोस्"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}