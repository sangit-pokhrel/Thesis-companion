import Link from "next/link";

export const metadata = {
  title: "Research & Thesis Services | Thesis Companion",
  description:
    "Explore thesis, dissertation, research proposal, methodology, literature review, data analysis, editing, and academic support services.",
};

const services = [
  {
    title: "Thesis & Dissertation Support",
    description:
      "Structured support for undergraduate, postgraduate, and dissertation projects across different research stages.",
  },
  {
    title: "Research Proposal",
    description:
      "Support with research topics, problem statements, objectives, research questions, hypotheses, and proposal structure.",
  },
  {
    title: "Research Methodology",
    description:
      "Guidance and support with research design, approaches, sampling, data collection, variables, and methodology structure.",
  },
  {
    title: "Literature Review",
    description:
      "Support with organising academic literature, identifying themes, developing a logical review structure, and connecting relevant studies.",
  },
  {
    title: "Data Analysis",
    description:
      "Support with research data preparation, statistical analysis, interpretation, tables, charts, and reporting.",
  },
  {
    title: "Academic Editing & Formatting",
    description:
      "Support with academic writing quality, document structure, referencing, formatting, proofreading, and presentation.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Our Services
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
            Research support for every major stage of your project.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 opacity-80">
            From research proposals and literature reviews to
            methodology, data analysis, and final formatting, get
            structured support based on your requirements.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              What We Support
            </p>

            <h2 className="mt-3 text-3xl font-bold text-foreground">
              Academic and research services
            </h2>

            <p className="mt-4 leading-7 text-muted-foreground">
              Choose the area where you need support or contact us to
              discuss a requirement that is not listed here.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="group rounded-xl border border-border bg-background p-7 transition-shadow hover:shadow-lg"
              >
                <span className="text-sm font-bold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 text-xl font-semibold text-foreground">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  {service.description}
                </p>

                <Link
                  href="/contact"
                  className="mt-6 inline-flex text-sm font-semibold text-primary hover:underline"
                >
                  Discuss this service →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-foreground">
            Not sure which service you need?
          </h2>

          <p className="mt-4 leading-7 text-muted-foreground">
            Share your research topic, academic level, and current
            requirements. We can help identify the type of support
            relevant to your project.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Talk About Your Research
          </Link>
        </div>
      </section>
    </>
  );
}