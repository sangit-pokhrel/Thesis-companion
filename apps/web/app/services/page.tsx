import Image from "next/image";
import Link from "next/link";

import { images } from "@/lib/images";

const services = [
  {
    number: "01",
    title: "Thesis & Dissertation Support",
    description:
      "Structured support across the major stages of undergraduate, postgraduate, and dissertation research.",
    image: images.services.thesisSupport,
    includes: [
      "Research structure",
      "Chapter organisation",
      "Academic writing support",
      "Formatting and final review",
    ],
  },
  {
    number: "02",
    title: "Research Proposal",
    description:
      "Build a clear research proposal with a strong direction, logical structure, and defined research objectives.",
    image: images.services.researchProposal,
    includes: [
      "Topic development",
      "Problem statement",
      "Research objectives",
      "Research questions",
    ],
  },
  {
    number: "03",
    title: "Literature Review",
    description:
      "Organise academic literature into a structured review that connects existing research with your study.",
    image: images.services.literatureReview,
    includes: [
      "Literature organisation",
      "Theme identification",
      "Research gap development",
      "Academic structure",
    ],
  },
  {
    number: "04",
    title: "Research Methodology",
    description:
      "Develop and structure the methodology around the requirements of your research question and study design.",
    image: images.services.methodology,
    includes: [
      "Research design",
      "Sampling approach",
      "Data collection",
      "Variables and methods",
    ],
  },
  {
    number: "05",
    title: "Data Analysis",
    description:
      "Support with preparing, analysing, interpreting, and presenting research data in a clear academic format.",
    image: images.services.dataAnalysis,
    includes: [
      "Data preparation",
      "Statistical analysis",
      "Tables and visualisation",
      "Result interpretation",
    ],
  },
  {
    number: "06",
    title: "Academic Editing & Formatting",
    description:
      "Improve the clarity, consistency, structure, and presentation of your academic document.",
    image: images.services.academicWriting,
    includes: [
      "Academic editing",
      "Proofreading",
      "Referencing",
      "Document formatting",
    ],
  },
];

const stages = [
  {
    number: "01",
    title: "Planning",
    text: "Topic selection, research proposal, objectives, questions, and research direction.",
  },
  {
    number: "02",
    title: "Research",
    text: "Literature review, research methodology, data collection, and research design.",
  },
  {
    number: "03",
    title: "Analysis",
    text: "Data preparation, statistical analysis, interpretation, tables, and results.",
  },
  {
    number: "04",
    title: "Finalisation",
    text: "Writing, editing, formatting, referencing, review, and final preparation.",
  },
];

export const metadata = {
  title: "Thesis & Research Services | Thesis Companion",
  description:
    "Explore thesis, dissertation, research proposal, literature review, methodology, data analysis, and academic editing support.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[560px] overflow-hidden">
        <Image
          src={images.services.hero}
          alt="Thesis and research support services"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-primary/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/50 to-primary/30" />

        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-7xl items-center px-6 py-24 lg:px-8 lg:py-28">
          <div className="max-w-4xl text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Our Services
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Support for every major stage of your research.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80">
              From your first research idea to the final submission,
              explore support designed around the different requirements
              of academic research.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex bg-accent px-7 py-3.5 font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:opacity-90"
            >
              Discuss Your Requirement →
            </Link>
          </div>
        </div>
      </section>

      {/* Service overview */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              What We Offer
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Choose the support your research needs.
            </h2>

            <p className="mt-5 leading-8 text-muted-foreground">
              You can discuss a complete research project or request
              support for a specific stage of your work.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.number}
                className="group overflow-hidden border border-border bg-background transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Service image */}
                <div className="relative aspect-[16/8] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-primary/10 transition-colors group-hover:bg-primary/0" />

                  <div className="absolute left-6 top-6 flex h-11 w-11 items-center justify-center bg-accent text-sm font-bold text-accent-foreground shadow-md">
                    {service.number}
                  </div>
                </div>

                <div className="p-8">
                  <div className="h-1 w-10 bg-accent transition-all group-hover:w-16" />

                  <h2 className="mt-6 text-2xl font-semibold text-foreground">
                    {service.title}
                  </h2>

                  <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
                    {service.description}
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {service.includes.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-sm text-foreground"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center bg-muted text-xs font-bold text-primary">
                          ✓
                        </span>

                        {item}
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="mt-8 inline-flex text-sm font-semibold text-primary transition-transform group-hover:translate-x-1"
                  >
                    Discuss this service →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Research journey */}
      <section className="bg-muted py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Research Journey
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Support can begin wherever you are.
              </h2>

              <p className="mt-5 leading-8 text-muted-foreground">
                You do not need to start from the beginning. Tell us
                which stage you are currently working on and what you
                need help with.
              </p>
            </div>

            <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
              {stages.map((stage) => (
                <div
                  key={stage.number}
                  className="bg-background p-7"
                >
                  <span className="text-sm font-bold text-accent">
                    {stage.number}
                  </span>

                  <h3 className="mt-5 text-xl font-semibold text-foreground">
                    {stage.title}
                  </h3>

                  <p className="mt-3 leading-7 text-muted-foreground">
                    {stage.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why this approach */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Our Approach
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Support that stays focused on your research.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Understand",
                text: "We first understand your topic, requirements, academic level, and current stage.",
              },
              {
                title: "Structure",
                text: "The required work is organised into clear research stages and deliverables.",
              },
              {
                title: "Develop",
                text: "Support is provided around the specific research, analysis, writing, or formatting requirement.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="border border-border p-8 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-10 w-10 items-center justify-center bg-primary text-sm font-bold text-primary-foreground">
                  0{index + 1}
                </div>

                <h3 className="mt-7 text-xl font-semibold text-foreground">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground">
        <div className="absolute inset-0 opacity-10">
          <Image
            src={images.services.dataAnalysis}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Need Research Support?
          </p>

          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
            Not sure which service is right for your project?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 opacity-75">
            Tell us about your research topic, academic level, current
            stage, and requirements. We can discuss the type of support
            relevant to your project.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex bg-accent px-7 py-3.5 font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:opacity-90"
          >
            Talk About Your Research →
          </Link>
        </div>
      </section>
    </>
  );
}