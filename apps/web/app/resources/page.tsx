import Link from "next/link";

export const metadata = {
  title: "Research Resources | Thesis Companion",
  description:
    "Research guides and academic resources covering thesis writing, research proposals, literature reviews, methodology, and data analysis.",
};

const resources = [
  {
    category: "Research",
    title: "How to Choose a Research Topic",
    description:
      "Understand the key factors to consider when selecting a practical and researchable topic.",
  },
  {
    category: "Proposal",
    title: "Research Proposal Structure",
    description:
      "Learn about the common sections of a research proposal and how they connect together.",
  },
  {
    category: "Literature Review",
    title: "Understanding Literature Reviews",
    description:
      "Explore how academic literature can be organised, compared, and connected within a research project.",
  },
  {
    category: "Methodology",
    title: "Understanding Research Methodology",
    description:
      "A practical introduction to research design, data collection, sampling, and methodological decisions.",
  },
  {
    category: "Data Analysis",
    title: "Introduction to Research Data Analysis",
    description:
      "Understand the role of data preparation, statistical analysis, interpretation, and reporting.",
  },
  {
    category: "Academic Writing",
    title: "Academic Writing & Formatting",
    description:
      "Practical guidance for creating clear, structured, and consistently formatted academic documents.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Resources
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
            Practical resources for your research journey.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 opacity-80">
            Explore guides and educational resources covering common
            thesis, research, methodology, and academic writing topics.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <article
                key={resource.title}
                className="rounded-xl border border-border bg-background p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {resource.category}
                </p>

                <h2 className="mt-4 text-xl font-semibold text-foreground">
                  {resource.title}
                </h2>

                <p className="mt-3 leading-7 text-muted-foreground">
                  {resource.description}
                </p>

                <span className="mt-6 inline-flex text-sm font-semibold text-muted-foreground">
                  Coming soon
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-foreground">
            Need help with your own research?
          </h2>

          <p className="mt-4 leading-7 text-muted-foreground">
            Resources can help you understand the process. If you need
            support with your own project, you can contact us directly.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}