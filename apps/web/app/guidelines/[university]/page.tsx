import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getUniversityGuideline,
  universities,
} from "@/lib/guidelines";

export function generateStaticParams() {
  return universities.map((university) => ({
    university: university.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ university: string }>;
}) {
  const { university: slug } = await params;

  const university = getUniversityGuideline(slug);

  if (!university) {
    return {
      title: "Guidelines Not Found | Thesis Companion",
    };
  }

  return {
    title: `${university.name} Research Guidelines | Thesis Companion`,
    description: university.description,
  };
}

export default async function UniversityGuidelinePage({
  params,
}: {
  params: Promise<{ university: string }>;
}) {
  const { university: slug } = await params;

  const university = getUniversityGuideline(slug);

  if (!university) {
    notFound();
  }

  const navigationItems = university.sections.map((section, index) => ({
    id: `section-${index + 1}`,
    number: String(index + 1).padStart(2, "0"),
    title: section.title.replace(/^\d+\.\s*/, ""),
  }));

  return (
    <main>
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative min-h-[500px] overflow-hidden">
        <Image
          src={university.image}
          alt={`${university.name} research guidelines`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-primary/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/75 to-primary/45" />

        <div className="relative z-10 mx-auto flex min-h-[500px] max-w-7xl items-center px-6 py-20 lg:px-8">
          <div className="max-w-4xl">
            <Link
              href="/guidelines"
              className="inline-flex items-center text-sm font-medium text-white/75 transition-colors hover:text-accent"
            >
              ← All Research Guidelines
            </Link>

            <div className="mt-8 flex items-center gap-4">
              <span className="flex h-14 min-w-14 items-center justify-center rounded-xl bg-accent px-3 text-sm font-bold text-accent-foreground shadow-lg">
                {university.shortName}
              </span>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                University Research Guide
              </p>
            </div>

            <h1 className="mt-7 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {university.name}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-white/85 sm:text-lg">
              {university.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-white/60">
              <span>
                Information checked: {university.lastVerified}
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:block" />

              <span>
                {university.sections.length} guideline sections
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
                Before You Begin
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Use the guide, then verify your programme.
              </h2>
            </div>

            <div>
              <p className="leading-8 text-muted-foreground">
                Research requirements can differ between universities,
                faculties, schools, departments, and academic
                programmes. This page organises the available
                requirements into a practical research guide.
              </p>

              <div className="mt-6 rounded-2xl border border-border bg-muted/40 p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                    !
                  </span>

                  <div>
                    <h3 className="font-semibold text-foreground">
                      Important
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      {university.verificationNote}
                    </p>

                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                      Last verified: {university.lastVerified}
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
              <div className="sticky top-[96px] py-12">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary dark:text-accent">
                  On this page
                </p>

                <nav
                  aria-label={`${university.name} guideline sections`}
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
                    Need help?
                  </p>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Need help applying these requirements to your
                    own research?
                  </p>

                  <Link
                    href="/contact"
                    className="mt-4 inline-flex text-sm font-semibold text-foreground transition-colors hover:text-accent"
                  >
                    Discuss your research →
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
                  Table of contents
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
                {university.sections.map((section, index) => (
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
                            Research Guideline
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
                              Quick Checklist
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
                    Official Sources
                  </p>

                  <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    Verify the latest requirements.
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">
                    This page is a structured summary for research
                    planning. The official university documents
                    remain the authoritative reference.
                  </p>
                </div>

                <div className="space-y-2 border-t border-white/10 p-4 sm:p-5">
                  {university.officialSources.map((source) => (
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
                Research Workflow
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                From research idea to final submission.
              </h2>

              <p className="mt-5 leading-8 text-muted-foreground">
                Use the university requirements together with a
                clear research workflow to keep your proposal,
                methodology, analysis, writing, and final submission
                connected.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Plan",
                  text: "Define your topic, problem, objectives, and research direction.",
                },
                {
                  number: "02",
                  title: "Research",
                  text: "Review literature and establish an appropriate methodology.",
                },
                {
                  number: "03",
                  title: "Analyse",
                  text: "Collect, prepare, analyse, and interpret your research data.",
                },
                {
                  number: "04",
                  title: "Finalise",
                  text: "Organise, edit, format, reference, and prepare the final document.",
                },
              ].map((step) => (
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
            Need Research Support?
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Work through your research with a clearer structure.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/75">
            Discuss your research topic, proposal, methodology,
            analysis, thesis, or dissertation requirements with the
            Thesis Companion team.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent/90"
            >
              Discuss Your Research
              <span className="ml-2">→</span>
            </Link>

            <Link
              href="/guidelines"
              className="inline-flex items-center justify-center rounded-lg border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:border-accent hover:text-accent"
            >
              View Other Guidelines
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}