import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { images } from "@/lib/images";

type Service = {
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  includes: string[];
  suitableFor: string[];
  process: {
    title: string;
    description: string;
  }[];
};

const services: Service[] = [
  {
    slug: "research-proposal",
    number: "01",
    title: "Research Topic & Proposal",
    shortDescription:
      "Build a clear and structured research proposal with a strong academic direction.",
    description:
      "A strong research project begins with a clear direction. We help you structure your research idea into a focused proposal with a logical problem statement, objectives, research questions, and an appropriate research direction.",
    image: images.services.researchProposal,
    includes: [
      "Research topic development",
      "Problem statement",
      "Research objectives",
      "Research questions",
      "Research scope",
      "Proposal structure",
    ],
    suitableFor: [
      "Students starting a new research project",
      "Students developing a research proposal",
      "Researchers refining an existing research idea",
    ],
    process: [
      {
        title: "Understand the research idea",
        description:
          "We first understand your topic, academic requirements, and the direction you want your research to take.",
      },
      {
        title: "Structure the proposal",
        description:
          "Your research idea is organised into a logical academic structure with clear objectives and questions.",
      },
      {
        title: "Refine the direction",
        description:
          "The proposal is reviewed for clarity, consistency, scope, and alignment between its major sections.",
      },
    ],
  },

  {
    slug: "literature-review",
    number: "02",
    title: "Literature Review",
    shortDescription:
      "Organise academic literature into a structured review that connects existing research with your study.",
    description:
      "A literature review should do more than summarise papers. It should show what is already known, identify important themes, highlight gaps, and establish how your research fits within existing academic work.",
    image: images.services.literatureReview,
    includes: [
      "Literature organisation",
      "Theme identification",
      "Source synthesis",
      "Research gap development",
      "Critical discussion",
      "Academic structure",
    ],
    suitableFor: [
      "Undergraduate research projects",
      "Postgraduate dissertations",
      "Students struggling to structure literature",
    ],
    process: [
      {
        title: "Organise the literature",
        description:
          "Relevant academic sources are organised around the main themes and concepts of your research.",
      },
      {
        title: "Identify relationships",
        description:
          "Existing findings are connected to show similarities, differences, and important research themes.",
      },
      {
        title: "Develop the research gap",
        description:
          "The literature is connected to your study so that the research gap and justification become clearer.",
      },
    ],
  },

  {
    slug: "methodology",
    number: "03",
    title: "Research Methodology",
    shortDescription:
      "Develop a methodology that aligns your research question, study design, data collection, and analysis.",
    description:
      "A well-structured methodology explains how your research will be conducted and why the selected methods are appropriate. We help organise the methodology around the requirements of your research.",
    image: images.services.methodology,
    includes: [
      "Research design",
      "Research approach",
      "Sampling approach",
      "Data collection methods",
      "Variables and measures",
      "Data analysis methods",
    ],
    suitableFor: [
      "Students designing a research study",
      "Proposal development",
      "Dissertation methodology chapters",
    ],
    process: [
      {
        title: "Define the research design",
        description:
          "The research question and objectives are considered when establishing an appropriate research design.",
      },
      {
        title: "Plan data collection",
        description:
          "The methodology is structured around the participants, data sources, instruments, and collection procedures.",
      },
      {
        title: "Connect methods with analysis",
        description:
          "The selected methods are aligned with how the collected data will be analysed and interpreted.",
      },
    ],
  },

  {
    slug: "data-analysis",
    number: "04",
    title: "Data Analysis",
    shortDescription:
      "Prepare, analyse, interpret, and present research data in a clear academic format.",
    description:
      "Research data needs to be handled carefully so that the results can be presented clearly and meaningfully. Support can cover data preparation, analysis, visualisation, and interpretation.",
    image: images.services.dataAnalysis,
    includes: [
      "Data preparation",
      "Data cleaning",
      "Statistical analysis",
      "Tables and visualisation",
      "Result interpretation",
      "Academic presentation",
    ],
    suitableFor: [
      "Quantitative research projects",
      "Survey-based studies",
      "Students working with research datasets",
    ],
    process: [
      {
        title: "Prepare the data",
        description:
          "The dataset is reviewed and prepared so that it is suitable for the intended analysis.",
      },
      {
        title: "Perform the analysis",
        description:
          "Appropriate analytical methods are applied according to the research questions and study design.",
      },
      {
        title: "Present the findings",
        description:
          "Results are organised into clear tables, visualisations, and academic explanations.",
      },
    ],
  },

  {
    slug: "academic-writing",
    number: "05",
    title: "Academic Writing & Editing",
    shortDescription:
      "Improve the clarity, consistency, structure, and academic presentation of your research document.",
    description:
      "Academic writing requires clarity, consistency, logical structure, and appropriate presentation. We help refine academic documents while maintaining the intended meaning and research direction.",
    image: images.services.academicWriting,
    includes: [
      "Academic editing",
      "Proofreading",
      "Grammar and clarity",
      "Structure improvement",
      "Referencing support",
      "Document formatting",
    ],
    suitableFor: [
      "Thesis and dissertation writers",
      "Research paper authors",
      "Students preparing final submissions",
    ],
    process: [
      {
        title: "Review the document",
        description:
          "The document is reviewed for structure, clarity, consistency, language, and academic presentation.",
      },
      {
        title: "Improve the writing",
        description:
          "Areas that affect readability and academic clarity are refined while preserving the intended meaning.",
      },
      {
        title: "Final quality review",
        description:
          "The document is checked for consistency, formatting, referencing, and overall presentation.",
      },
    ],
  },

  {
    slug: "thesis-dissertation",
    number: "06",
    title: "Thesis & Dissertation Support",
    shortDescription:
      "Structured support across the major stages of undergraduate, postgraduate, and dissertation research.",
    description:
      "Thesis and dissertation projects involve multiple connected stages. We provide structured support across research planning, chapter organisation, analysis, academic writing, formatting, and final review.",
    image: images.services.thesisSupport,
    includes: [
      "Research structure",
      "Chapter organisation",
      "Academic writing support",
      "Methodology guidance",
      "Data analysis support",
      "Formatting and final review",
    ],
    suitableFor: [
      "Undergraduate thesis students",
      "Postgraduate dissertation students",
      "Students completing major research projects",
    ],
    process: [
      {
        title: "Plan the research",
        description:
          "The project is organised around its research objectives, chapters, methodology, and expected outcomes.",
      },
      {
        title: "Develop the chapters",
        description:
          "Support is provided across the major sections of the thesis or dissertation.",
      },
      {
        title: "Prepare the final document",
        description:
          "The completed research is reviewed for academic structure, consistency, formatting, and presentation.",
      },
    ],
  },
];

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | Thesis Companion",
    };
  }

  return {
    title: `${service.title} | Thesis Companion`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services.filter((item) => item.slug !== service.slug);

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[560px] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/35" />

        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-7xl items-center px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mb-7 flex flex-wrap items-center gap-2 text-sm"
            >
              <Link
                href="/"
                className="text-white/65 transition-colors hover:text-accent"
              >
                Home
              </Link>

              <span className="text-white/40">/</span>

              <Link
                href="/services"
                className="text-white/65 transition-colors hover:text-accent"
              >
                Services
              </Link>

              <span className="text-white/40">/</span>

              <span className="text-white/90">{service.title}</span>
            </nav>

            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-sm font-bold text-accent backdrop-blur-sm">
                {service.number}
              </span>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Research Support
              </p>
            </div>

            <h1 className="mt-7 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
              {service.shortDescription}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform duration-200 hover:-translate-y-0.5"
              >
                Discuss Your Requirement
                <span className="ml-2">→</span>
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/20"
              >
                All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-background py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary dark:text-accent">
              Service Overview
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Structured support for your research.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
              {service.description}
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-muted/40 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary dark:text-accent">
              This service includes
            </p>

            <div className="mt-6 space-y-4">
              {service.includes.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground dark:bg-accent dark:text-accent-foreground">
                    ✓
                  </span>

                  <span className="text-sm font-medium text-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="bg-muted/40 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary dark:text-accent">
              Who This Is For
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Support designed around your research stage.
            </h2>

            <p className="mt-5 leading-8 text-muted-foreground">
              This service can be useful for students and researchers at
              different stages of their academic work.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {service.suitableFor.map((item, index) => (
              <article
                key={item}
                className="rounded-2xl border border-border bg-background p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-muted/20"
              >
                <span className="text-sm font-bold text-accent">
                  0{index + 1}
                </span>

                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {item}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-background py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary dark:text-accent">
              How We Support You
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A clear process from planning to completion.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {service.process.map((step, index) => (
              <article
                key={step.title}
                className="rounded-2xl border border-border bg-background p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl dark:bg-muted/20 dark:hover:border-accent/30"
              >
                <span className="text-4xl font-bold text-accent">
                  0{index + 1}
                </span>

                <h3 className="mt-6 text-xl font-semibold text-foreground">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-muted/40 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary dark:text-accent">
                Explore More
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Related research support.
              </h2>
            </div>

            <Link
              href="/services"
              className="text-sm font-semibold text-foreground transition-colors hover:text-accent"
            >
              View all services →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedServices.slice(0, 3).map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="group overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-muted/20"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-6">
                  <span className="text-xs font-bold tracking-widest text-accent">
                    {item.number}
                  </span>

                  <h3 className="mt-3 text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
                    {item.title}
                  </h3>

                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground">
                    {item.shortDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-10">
          <Image
            src={service.image}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/20" />

        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Start Your Research Journey
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Have a question about this service?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/75">
            Tell us about your research requirements and we can discuss the type
            of support that fits your project.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-transform duration-200 hover:-translate-y-0.5"
          >
            Contact Us
            <span className="ml-2">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
