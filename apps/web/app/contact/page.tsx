"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Contact
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
            Tell us about your research.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 opacity-80">
            Share your requirements and we will use the information to
            understand how we can support your research project.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Start a Conversation
            </p>

            <h2 className="mt-3 text-3xl font-bold text-foreground">
              Let&apos;s discuss your project
            </h2>

            <p className="mt-5 leading-7 text-muted-foreground">
              Whether you need help with a proposal, methodology,
              literature review, data analysis, thesis, or academic
              formatting, tell us what you are working on.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Research Support
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  Discuss your project requirements and research stage.
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-foreground">
                  Service Enquiry
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  Ask about a specific thesis or research service.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-background p-6 shadow-sm sm:p-8">
            {submitted ? (
              <div className="py-16 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-muted text-xl font-bold text-primary">
                  ✓
                </div>

                <h2 className="mt-6 text-2xl font-bold text-foreground">
                  Thank you
                </h2>

                <p className="mx-auto mt-3 max-w-md leading-7 text-muted-foreground">
                  Your enquiry has been received. We will review your
                  requirements and get back to you.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-semibold text-primary hover:underline"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-foreground"
                    >
                      Full Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-foreground"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="academicLevel"
                      className="text-sm font-medium text-foreground"
                    >
                      Academic Level
                    </label>

                    <select
                      id="academicLevel"
                      name="academicLevel"
                      className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select level
                      </option>
                      <option value="undergraduate">
                        Undergraduate
                      </option>
                      <option value="postgraduate">
                        Postgraduate
                      </option>
                      <option value="masters">Master&apos;s</option>
                      <option value="phd">PhD</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="text-sm font-medium text-foreground"
                  >
                    Service Required
                  </label>

                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="thesis">
                      Thesis & Dissertation Support
                    </option>
                    <option value="proposal">
                      Research Proposal
                    </option>
                    <option value="methodology">
                      Research Methodology
                    </option>
                    <option value="literature">
                      Literature Review
                    </option>
                    <option value="data-analysis">
                      Data Analysis
                    </option>
                    <option value="editing">
                      Academic Editing & Formatting
                    </option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
                    Tell us about your requirement
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="mt-2 w-full resize-none rounded-md border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary"
                    placeholder="Briefly describe your research topic, current stage, and what support you need."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-accent px-6 py-3.5 font-semibold text-accent-foreground transition-opacity hover:opacity-90"
                >
                  Submit Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}