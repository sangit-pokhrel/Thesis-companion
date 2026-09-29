import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-background">
        <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Thesis & Research Support
            </p>

            <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
              Your Research.
              <br />
              <span className="text-primary">
                Our Expertise.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              Get professional support for your thesis, dissertation,
              proposal, research methodology, literature review, and
              data analysis.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                Get Started
              </Link>

              <Link
                href="/services"
                className="rounded-md border border-border px-6 py-3 font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rounded-2xl bg-primary p-10 text-primary-foreground">
              <p className="text-sm uppercase tracking-widest opacity-70">
                Research Support
              </p>

              <h2 className="mt-5 text-3xl font-bold">
                From research idea to final submission.
              </h2>

              <p className="mt-5 leading-7 opacity-80">
                Structured academic support designed around your
                research requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            What We Support
          </p>

          <h2 className="mt-3 text-3xl font-bold text-foreground">
            Research support that covers the journey
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Thesis & Dissertation",
                text: "Structured support for undergraduate, postgraduate, and dissertation projects.",
              },
              {
                title: "Research & Proposal",
                text: "Support with research topics, proposals, methodology, and literature reviews.",
              },
              {
                title: "Data Analysis",
                text: "Support with statistical analysis, interpretation, visualization, and research data.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-border bg-background p-7"
              >
                <h3 className="text-xl font-semibold text-foreground">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}