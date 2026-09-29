import Link from "next/link";

export const metadata = {
  title: "About | Thesis Companion",
  description:
    "Learn about Thesis Companion and our approach to thesis and research support.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            About Thesis Companion
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
            Structured support for better research.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 opacity-80">
            Thesis Companion provides practical academic and research
            support to help students move from research ideas to
            well-structured final submissions.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Who We Are
            </p>

            <h2 className="mt-3 text-3xl font-bold text-foreground">
              Research support built around your requirements
            </h2>
          </div>

          <div className="space-y-5 text-muted-foreground">
            <p className="leading-7">
              Research projects can involve many stages, from selecting
              a topic and preparing a proposal to reviewing literature,
              developing methodology, analysing data, and preparing the
              final document.
            </p>

            <p className="leading-7">
              Thesis Companion brings these areas together through
              structured academic support designed around the needs of
              students and researchers.
            </p>

            <p className="leading-7">
              Our focus is on clarity, structure, research methodology,
              analysis, and academic presentation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our Approach
          </p>

          <h2 className="mt-3 text-3xl font-bold text-foreground">
            Support across the research journey
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Understand",
                text: "We first understand your research requirements, academic level, subject area, and project goals.",
              },
              {
                number: "02",
                title: "Structure",
                text: "We help organise your research into a clear and logical academic structure.",
              },
              {
                number: "03",
                title: "Develop",
                text: "We provide support across methodology, literature, analysis, writing, formatting, and related research needs.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-xl border border-border bg-background p-7"
              >
                <span className="text-sm font-bold text-accent">
                  {item.number}
                </span>

                <h3 className="mt-4 text-xl font-semibold text-foreground">
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

      <section className="bg-background py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-foreground">
            Have a research requirement?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted-foreground">
            Tell us about your project and we can discuss the type of
            support you need.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}