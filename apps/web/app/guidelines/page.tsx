import Image from "next/image";
import Link from "next/link";

import { universities } from "@/lib/guidelines";

export const metadata = {
  title: "University Research Guidelines | Thesis Companion",
  description:
    "Explore research, proposal, thesis, dissertation, and academic guidelines for major universities and academic institutions in Nepal.",
};

export default function GuidelinesPage() {
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
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-[#071a31]/85" />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071a31]/95 via-[#071a31]/80 to-[#071a31]/55" />

        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#f5c400]">
              UNIVERSITY GUIDELINES
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Research guidelines for your university.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              Find structured guidance for research proposals, thesis and
              dissertation work, academic writing, methodology, formatting,
              research procedures, and related academic requirements.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#universities"
                className="inline-flex items-center justify-center rounded-lg bg-[#f5c400] px-6 py-3 text-sm font-semibold text-[#071a31] transition hover:bg-[#ffd52e]"
              >
                Explore Universities
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Need Research Support?
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
                FIND YOUR GUIDELINE
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Academic requirements can vary by institution.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-muted-foreground">
              <p>
                Every university may have its own requirements for research
                proposals, thesis structure, formatting, methodology,
                submission, referencing, and approval procedures.
              </p>

              <p>
                Thesis Companion brings these requirements together in a
                structured format so that students can quickly identify the
                guidance relevant to their university.
              </p>

              <p className="text-sm">
                Guidelines are presented for reference and should be checked
                against the latest official documents and notices issued by
                the respective institution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          UNIVERSITY DIRECTORY
      ========================================================= */}
      <section
        id="universities"
        className="scroll-mt-24 bg-muted/30"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              UNIVERSITY DIRECTORY
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Select your university
            </h2>

            <p className="mt-5 text-base leading-7 text-muted-foreground">
              Choose an institution below to explore its research and academic
              guidelines.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {universities.map((university) => (
              <article
                key={university.slug}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Card Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={university.image}
                    alt={university.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071a31]/80 via-[#071a31]/20 to-transparent" />

                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex rounded-full bg-[#f5c400] px-3 py-1 text-xs font-bold text-[#071a31]">
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

                  <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                    <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Research Guidelines
                    </span>

                    <Link
                      href={`/guidelines/${university.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:gap-3"
                    >
                      View Guidelines
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT YOU CAN FIND
      ========================================================= */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                WHAT YOU CAN FIND
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                More than just formatting.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">
                Depending on the institution, the guideline pages cover
                different parts of the research journey and academic
                submission process.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
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
              ].map((item) => (
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
                  Important information
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  University policies, regulations, notices and research
                  requirements may change over time. The information provided
                  on Thesis Companion is intended to help students understand
                  and navigate the research process. Always verify important
                  submission, formatting, ethical, and procedural requirements
                  against the latest official documents published by your
                  institution.
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
                NEED HELP WITH YOUR RESEARCH?
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Understanding the guidelines is only the first step.
              </h2>

              <p className="mt-4 text-base leading-7 text-white/70">
                Get structured support with your proposal, methodology,
                literature review, data analysis, academic writing, or thesis
                and dissertation work.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#f5c400] px-7 py-3.5 text-sm font-semibold text-[#071a31] transition hover:bg-[#ffd52e]"
              >
                Talk to Us
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