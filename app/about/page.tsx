"use client";

import Image from "next/image";
import Link from "next/link";

import { useLanguage } from "@/components/language/LanguageProvider";
import { images } from "@/lib/images";

export default function AboutPage() {
  const { language, t } = useLanguage();

  const about = t("about");
  const common = t("common");

  const principles = {
    en: [
      {
        number: "01",
        title: "Clarity",
        description:
          "We help break complex research requirements into clear and manageable steps.",
      },
      {
        number: "02",
        title: "Structure",
        description:
          "We follow a structured approach so each stage of your research connects logically.",
      },
      {
        number: "03",
        title: "Practical Support",
        description:
          "Our support focuses on practical guidance that you can understand and apply.",
      },
      {
        number: "04",
        title: "Research Focus",
        description:
          "Every recommendation is shaped around your research topic, requirements, and academic context.",
      },
    ],
    ne: [
      {
        number: "०१",
        title: "स्पष्टता",
        description:
          "जटिल अनुसन्धानसम्बन्धी आवश्यकतालाई स्पष्ट र व्यवस्थापन गर्न सकिने चरणहरूमा विभाजन गर्न सहयोग गर्छौं।",
      },
      {
        number: "०२",
        title: "संरचना",
        description:
          "अनुसन्धानको प्रत्येक चरण एकअर्कासँग तार्किक रूपमा जोडिने गरी संरचित प्रक्रियामा काम गर्छौं।",
      },
      {
        number: "०३",
        title: "व्यावहारिक सहयोग",
        description:
          "बुझ्न र प्रयोग गर्न सकिने व्यावहारिक मार्गदर्शनमा हाम्रो सहयोग केन्द्रित हुन्छ।",
      },
      {
        number: "०४",
        title: "अनुसन्धानमा केन्द्रित",
        description:
          "प्रत्येक सुझाव तपाईंको अनुसन्धान विषय, आवश्यकता र शैक्षिक सन्दर्भअनुसार तयार गरिन्छ।",
      },
    ],
  };

  const journey = {
    en: [
      {
        number: "01",
        title: "Research Idea",
        description:
          "Define your research topic, problem, objectives, and direction.",
      },
      {
        number: "02",
        title: "Proposal",
        description: "Develop a clear and structured research proposal.",
      },
      {
        number: "03",
        title: "Research & Analysis",
        description:
          "Work through literature, methodology, data, and analysis.",
      },
      {
        number: "04",
        title: "Writing & Submission",
        description:
          "Organise your findings and prepare the final academic document.",
      },
    ],
    ne: [
      {
        number: "०१",
        title: "अनुसन्धान विचार",
        description:
          "अनुसन्धान विषय, समस्या, उद्देश्य र अनुसन्धानको दिशालाई स्पष्ट बनाउनुहोस्।",
      },
      {
        number: "०२",
        title: "अनुसन्धान प्रस्ताव",
        description: "स्पष्ट र संरचित अनुसन्धान प्रस्ताव तयार गर्नुहोस्।",
      },
      {
        number: "०३",
        title: "अनुसन्धान तथा विश्लेषण",
        description:
          "साहित्य, अनुसन्धान विधि, डाटा तथा विश्लेषणका चरणहरू पूरा गर्नुहोस्।",
      },
      {
        number: "०४",
        title: "लेखन तथा पेशा",
        description:
          "नतिजाहरू व्यवस्थित गरी अन्तिम शैक्षिक दस्तावेज तयार गर्नुहोस्।",
      },
    ],
  };

  const support = {
    en: [
      "Research topic development",
      "Research proposals",
      "Literature reviews",
      "Research methodology",
      "Data analysis",
      "Academic writing",
    ],
    ne: [
      "अनुसन्धान विषय विकास",
      "अनुसन्धान प्रस्ताव",
      "साहित्य समीक्षा",
      "अनुसन्धान विधि",
      "डाटा विश्लेषण",
      "शैक्षिक लेखन",
    ],
  };

  const currentPrinciples = principles[language];
  const currentJourney = journey[language];
  const currentSupport = support[language];

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[560px] overflow-hidden">
        <Image
          src={images.about.hero}
          alt={
            language === "en"
              ? "Thesis Companion academic research support"
              : "Thesis Companion शैक्षिक अनुसन्धान सहयोग"
          }
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-primary/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/50 to-primary/30" />

        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-7xl items-center px-5 py-24 sm:px-6 lg:px-8">
          <div className="max-w-4xl text-white">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              {about.label}
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {about.title}
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80">
              {about.description}
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-muted/40">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-28">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem]">
            <Image
              src={images.about.team}
              alt={
                language === "en"
                  ? "Academic research support team"
                  : "शैक्षिक अनुसन्धान सहयोग टोली"
              }
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {about.whoWeAre}
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {about.heading}
            </h2>

            <div className="mt-7 space-y-5 text-base leading-7 text-muted-foreground">
              <p>
                {language === "en"
                  ? "Thesis Companion is designed to support students and researchers throughout the different stages of academic research."
                  : "Thesis Companion विद्यार्थी तथा अनुसन्धानकर्ताहरूलाई शैक्षिक अनुसन्धानका विभिन्न चरणमा सहयोग गर्न तयार गरिएको हो।"}
              </p>

              <p>
                {language === "en"
                  ? "Whether you are developing your first research idea, preparing a proposal, working through methodology, analysing data, or preparing your final document, our approach focuses on making the process clearer and more structured."
                  : "तपाईं पहिलो अनुसन्धान विचार विकास गर्दै हुनुहुन्छ, प्रस्ताव तयार गर्दै हुनुहुन्छ, अनुसन्धान विधिमा काम गर्दै हुनुहुन्छ, डाटा विश्लेषण गर्दै हुनुहुन्छ वा अन्तिम दस्तावेज तयार गर्दै हुनुहुन्छ भने हाम्रो दृष्टिकोण अनुसन्धान प्रक्रियालाई अझ स्पष्ट र व्यवस्थित बनाउनमा केन्द्रित हुन्छ।"}
              </p>

              <p>
                {language === "en"
                  ? "The goal is not simply to complete individual tasks, but to help you understand how the different parts of your research fit together."
                  : "हाम्रो उद्देश्य केवल छुट्टाछुट्टै कार्य पूरा गर्नु मात्र होइन, अनुसन्धानका विभिन्न भागहरू एकअर्कासँग कसरी जोडिन्छन् भन्ने बुझ्न सहयोग गर्नु पनि हो।"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {about.approach}
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {about.approachHeading}
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
                {language === "en"
                  ? "Our approach combines clarity, structure, practical guidance, and attention to your specific research context."
                  : "हाम्रो दृष्टिकोण स्पष्टता, संरचना, व्यावहारिक मार्गदर्शन तथा तपाईंको अनुसन्धान सन्दर्भमा केन्द्रित हुन्छ।"}
              </p>

              <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={images.about.workspace}
                  alt={
                    language === "en"
                      ? "Research workspace"
                      : "अनुसन्धान कार्यस्थल"
                  }
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
              {currentPrinciples.map((item) => (
                <div key={item.number} className="bg-background p-7 sm:p-8">
                  <span className="text-sm font-semibold text-muted-foreground">
                    {item.number}
                  </span>

                  <h3 className="mt-5 text-xl font-bold text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH JOURNEY */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                {about.journey}
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                {about.journeyHeading}
              </h2>
            </div>

            <div className="relative aspect-[16/7] overflow-hidden rounded-2xl">
              <Image
                src={images.about.research}
                alt={
                  language === "en"
                    ? "Academic research journey"
                    : "शैक्षिक अनुसन्धान यात्रा"
                }
                fill
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-primary/35" />
            </div>
          </div>

          <div className="mt-14 grid gap-0 md:grid-cols-4">
            {currentJourney.map((item, index) => (
              <div
                key={item.number}
                className={`relative border-t border-white/20 px-0 py-8 md:border-l md:border-t-0 md:px-7 ${
                  index === 0 ? "md:border-l-0 md:pl-0" : ""
                }`}
              >
                <span className="text-sm font-semibold text-accent">
                  {item.number}
                </span>

                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>

                <p className="mt-3 text-sm leading-6 text-primary-foreground/70">
                  {item.description}
                </p>

                {index < currentJourney.length - 1 && (
                  <span className="absolute right-5 top-8 hidden text-2xl text-accent/60 md:block">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE SUPPORT */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-28">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              {about.support}
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {about.supportHeading}
            </h2>

            <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-[1.5rem]">
              <Image
                src={images.about.research}
                alt={language === "en" ? "Research support" : "अनुसन्धान सहयोग"}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {currentSupport.map((item, index) => (
              <div
                key={item}
                className="rounded-xl border border-border bg-muted/40 p-5 transition-colors hover:bg-muted"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                    {index + 1}
                  </span>

                  <span className="text-sm font-medium text-foreground">
                    {item}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-5 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {about.ctaLabel}
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {about.ctaHeading}
          </h2>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            {common.contactUs}
          </Link>
        </div>
      </section>
    </div>
  );
}
