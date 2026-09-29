"use client";

import Image from "next/image";
import Link from "next/link";

import { useLanguage } from "@/components/language/LanguageProvider";
import { images } from "@/lib/images";

export default function HomePage() {
  const { language, t } = useLanguage();

  const home = t("home");
  const common = t("common");

  const services = {
    en: [
      {
        number: "01",
        title: "Research Topic & Proposal",
        description:
          "Develop a clear research direction, proposal structure, objectives, and questions.",
        image: images.home.services.researchProposal,
      },
      {
        number: "02",
        title: "Literature Review",
        description:
          "Organise academic sources, identify themes, and develop a meaningful research gap.",
        image: images.home.services.literatureReview,
      },
      {
        number: "03",
        title: "Research Methodology",
        description:
          "Build a suitable methodology aligned with your research objectives and questions.",
        image: images.home.services.methodology,
      },
      {
        number: "04",
        title: "Data Analysis",
        description:
          "Prepare, analyse, interpret, and present your research data effectively.",
        image: images.home.services.dataAnalysis,
      },
      {
        number: "05",
        title: "Academic Writing",
        description:
          "Improve the structure, clarity, flow, and academic presentation of your work.",
        image: images.home.services.academicWriting,
      },
      {
        number: "06",
        title: "Thesis & Dissertation",
        description:
          "Get structured support throughout the major stages of your thesis or dissertation.",
        image: images.home.services.thesisSupport,
      },
    ],
    ne: [
      {
        number: "०१",
        title: "अनुसन्धान विषय तथा प्रस्ताव",
        description:
          "अनुसन्धानको दिशा, प्रस्ताव संरचना, उद्देश्य तथा प्रश्न विकास गर्न सहयोग।",
        image: images.home.services.researchProposal,
      },
      {
        number: "०२",
        title: "साहित्य समीक्षा",
        description:
          "शैक्षिक स्रोतहरू व्यवस्थित गर्दै विषयगत पक्ष तथा अनुसन्धान रिक्तता पहिचान गर्न सहयोग।",
        image: images.home.services.literatureReview,
      },
      {
        number: "०३",
        title: "अनुसन्धान विधि",
        description:
          "अनुसन्धान उद्देश्य तथा प्रश्नसँग मिल्ने उपयुक्त अनुसन्धान विधि विकास गर्न सहयोग।",
        image: images.home.services.methodology,
      },
      {
        number: "०४",
        title: "डाटा विश्लेषण",
        description:
          "अनुसन्धान डाटा तयार, विश्लेषण, व्याख्या तथा प्रभावकारी रूपमा प्रस्तुत गर्न सहयोग।",
        image: images.home.services.dataAnalysis,
      },
      {
        number: "०५",
        title: "शैक्षिक लेखन",
        description:
          "अनुसन्धान कार्यको संरचना, स्पष्टता, प्रवाह तथा शैक्षिक प्रस्तुति सुधार गर्न सहयोग।",
        image: images.home.services.academicWriting,
      },
      {
        number: "०६",
        title: "थेसिस तथा डिसर्टेसन",
        description:
          "थेसिस वा डिसर्टेसनका प्रमुख चरणहरूमा संरचित सहयोग।",
        image: images.home.services.thesisSupport,
      },
    ],
  };

  const journey = {
    en: [
      {
        number: "01",
        title: "Explore",
        text: "Clarify your topic, problem, objectives, and research direction.",
      },
      {
        number: "02",
        title: "Plan",
        text: "Build your proposal, methodology, and research structure.",
      },
      {
        number: "03",
        title: "Develop",
        text: "Work through literature, data, analysis, and academic writing.",
      },
      {
        number: "04",
        title: "Complete",
        text: "Prepare your final research work for review and submission.",
      },
    ],
    ne: [
      {
        number: "०१",
        title: "अन्वेषण",
        text: "विषय, समस्या, उद्देश्य तथा अनुसन्धानको दिशा स्पष्ट गर्नुहोस्।",
      },
      {
        number: "०२",
        title: "योजना",
        text: "प्रस्ताव, अनुसन्धान विधि तथा अनुसन्धान संरचना तयार गर्नुहोस्।",
      },
      {
        number: "०३",
        title: "विकास",
        text: "साहित्य, डाटा, विश्लेषण तथा शैक्षिक लेखनमा काम गर्नुहोस्।",
      },
      {
        number: "०४",
        title: "पूरा गर्नुहोस्",
        text: "अन्तिम अनुसन्धान कार्यलाई समीक्षा तथा पेशका लागि तयार गर्नुहोस्।",
      },
    ],
  };

  const benefits = {
    en: [
      "Clear and structured guidance",
      "Support across the research journey",
      "Practical and understandable explanations",
      "Research-focused approach",
    ],
    ne: [
      "स्पष्ट तथा संरचित मार्गदर्शन",
      "अनुसन्धान यात्राका विभिन्न चरणमा सहयोग",
      "व्यावहारिक तथा बुझ्न सजिलो व्याख्या",
      "अनुसन्धान केन्द्रित दृष्टिकोण",
    ],
  };

  const areas = {
    en: [
      "Business & Management",
      "Computing & Technology",
      "Education",
      "Social Sciences",
      "Health & Life Sciences",
      "Other Research Areas",
    ],
    ne: [
      "व्यवसाय तथा व्यवस्थापन",
      "कम्प्युटिङ तथा प्रविधि",
      "शिक्षा",
      "सामाजिक विज्ञान",
      "स्वास्थ्य तथा जीवन विज्ञान",
      "अन्य अनुसन्धान क्षेत्र",
    ],
  };

  const testimonials = {
    en: [
      {
        quote:
          "The research process became much easier to understand once the different stages were clearly structured.",
        name: "Research Student",
        role: "Thesis Support",
      },
      {
        quote:
          "Having clear guidance helped me understand what I needed to work on next.",
        name: "Postgraduate Student",
        role: "Research Support",
      },
      {
        quote:
          "The structured approach made a complex research project feel much more manageable.",
        name: "University Student",
        role: "Academic Research",
      },
    ],
    ne: [
      {
        quote:
          "अनुसन्धानका विभिन्न चरणहरू स्पष्ट रूपमा व्यवस्थित भएपछि अनुसन्धान प्रक्रिया बुझ्न धेरै सजिलो भयो।",
        name: "अनुसन्धान विद्यार्थी",
        role: "थेसिस सहयोग",
      },
      {
        quote:
          "स्पष्ट मार्गदर्शनले अब अर्को चरणमा के काम गर्नुपर्छ भन्ने बुझ्न सहयोग गर्यो।",
        name: "स्नातकोत्तर विद्यार्थी",
        role: "अनुसन्धान सहयोग",
      },
      {
        quote:
          "संरचित दृष्टिकोणले जटिल अनुसन्धान परियोजनालाई धेरै व्यवस्थित बनाउन सहयोग गर्यो।",
        name: "विश्वविद्यालय विद्यार्थी",
        role: "शैक्षिक अनुसन्धान",
      },
    ],
  };

  const faqs = {
    en: [
      {
        question: "What kind of research support do you provide?",
        answer:
          "We provide support across research planning, proposals, literature reviews, methodology, data analysis, academic writing, thesis, and dissertation work.",
      },
      {
        question: "Can I get support if I have already started my thesis?",
        answer:
          "Yes. Support can begin at different stages, whether you are developing your topic, analysing data, writing chapters, or preparing for submission.",
      },
      {
        question: "Do you support different academic disciplines?",
        answer:
          "Yes. The approach can be adapted to different research topics, academic levels, and disciplinary requirements.",
      },
      {
        question: "How do I get started?",
        answer:
          "Start by sharing your research topic, current stage, and the type of support you need through the contact page.",
      },
    ],
    ne: [
      {
        question: "तपाईंले कस्तो अनुसन्धान सहयोग प्रदान गर्नुहुन्छ?",
        answer:
          "हामी अनुसन्धान योजना, प्रस्ताव, साहित्य समीक्षा, अनुसन्धान विधि, डाटा विश्लेषण, शैक्षिक लेखन, थेसिस तथा डिसर्टेसनसम्बन्धी सहयोग प्रदान गर्छौं।",
      },
      {
        question: "मैले थेसिस सुरु गरिसकेको छु भने पनि सहयोग लिन सक्छु?",
        answer:
          "सक्नुहुन्छ। विषय विकास, डाटा विश्लेषण, अध्याय लेखन वा अन्तिम पेशाको तयारी जस्ता विभिन्न चरणबाट सहयोग सुरु गर्न सकिन्छ।",
      },
      {
        question: "के तपाईं विभिन्न शैक्षिक क्षेत्रमा सहयोग गर्नुहुन्छ?",
        answer:
          "हो। सहयोग विभिन्न अनुसन्धान विषय, शैक्षिक तह तथा विषयगत आवश्यकताअनुसार तयार गर्न सकिन्छ।",
      },
      {
        question: "सुरु कसरी गर्ने?",
        answer:
          "Contact पेजमार्फत आफ्नो अनुसन्धान विषय, हालको चरण तथा आवश्यक सहयोगको जानकारी साझा गरेर सुरु गर्न सक्नुहुन्छ।",
      },
    ],
  };

  const currentServices = services[language];
  const currentJourney = journey[language];
  const currentBenefits = benefits[language];
  const currentAreas = areas[language];
  const currentTestimonials = testimonials[language];
  const currentFaqs = faqs[language];

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-5 pb-20 pt-14 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div className="max-w-2xl">
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-border bg-muted/50 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {home.badge}
                </span>
              </div>

              <h1 className="text-4xl font-bold tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">
                {home.heroTitle1}
                <span className="block text-primary">
                  {home.heroTitle2}
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">
                {home.heroDescription}
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  {home.exploreServices}
                  <span className="ml-2">→</span>
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                >
                  {common.discussResearch}
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-6 text-sm text-muted-foreground">
                <span>
                  ✓{" "}
                  {language === "en"
                    ? "Research focused"
                    : "अनुसन्धान केन्द्रित"}
                </span>
                <span>
                  ✓{" "}
                  {language === "en"
                    ? "Structured support"
                    : "संरचित सहयोग"}
                </span>
                <span>
                  ✓{" "}
                  {language === "en"
                    ? "Academic guidance"
                    : "शैक्षिक मार्गदर्शन"}
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-muted shadow-2xl">
                <Image
                  src={images.home.hero.main}
                  alt={
                    language === "en"
                      ? "Research and academic work"
                      : "अनुसन्धान तथा शैक्षिक कार्य"
                  }
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-xl border border-white/20 bg-black/35 p-5 text-white backdrop-blur-md">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                      {language === "en"
                        ? "Research Journey"
                        : "अनुसन्धान यात्रा"}
                    </p>

                    <p className="mt-2 text-lg font-semibold">
                      {home.fromIdea}
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 hidden overflow-hidden rounded-xl border border-border bg-background shadow-xl sm:block">
                <div className="relative h-28 w-40">
                  <Image
                    src={images.home.hero.secondary}
                    alt={
                      language === "en"
                        ? "Research workspace"
                        : "अनुसन्धान कार्यस्थल"
                    }
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-5 lg:divide-x">
            {[
              language === "en" ? "Thesis Support" : "थेसिस सहयोग",
              language === "en"
                ? "Research Proposal"
                : "अनुसन्धान प्रस्ताव",
              language === "en"
                ? "Literature Review"
                : "साहित्य समीक्षा",
              language === "en" ? "Data Analysis" : "डाटा विश्लेषण",
              language === "en"
                ? "Academic Writing"
                : "शैक्षिक लेखन",
            ].map((item) => (
              <div
                key={item}
                className="px-5 py-5 text-center text-sm font-medium text-muted-foreground"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                {home.whatWeSupport}
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {home.servicesHeading}
              </h2>
            </div>

            <Link
              href="/services"
              className="shrink-0 text-sm font-semibold text-primary hover:underline"
            >
              {home.viewAllServices} →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {currentServices.map((service) => (
              <article
                key={service.number}
                className="group overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />

                  <span className="absolute bottom-4 left-4 rounded-full bg-background/90 px-3 py-1.5 text-xs font-bold text-primary backdrop-blur">
                    {service.number}
                  </span>
                </div>

                <div className="p-7">
                  <h3 className="text-xl font-bold text-foreground">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {service.description}
                  </p>

                  <Link
                    href="/services"
                    className="mt-6 inline-flex text-sm font-semibold text-primary"
                  >
                    {common.learnMore}
                    <span className="ml-2 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-muted/40">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem]">
                <Image
                  src={images.home.about}
                  alt={
                    language === "en"
                      ? "Academic research workspace"
                      : "शैक्षिक अनुसन्धान कार्यस्थल"
                  }
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -right-4 max-w-[220px] rounded-xl border border-border bg-background p-5 shadow-xl sm:right-6">
                <p className="text-2xl font-bold text-primary">01</p>

                <p className="mt-1 text-sm font-medium text-foreground">
                  {language === "en"
                    ? "Clear research direction"
                    : "स्पष्ट अनुसन्धान दिशा"}
                </p>
              </div>
            </div>

            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                {language === "en"
                  ? "About Thesis Companion"
                  : "Thesis Companion को बारेमा"}
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {language === "en"
                  ? "Research support built around your requirements."
                  : "तपाईंका आवश्यकतामा आधारित अनुसन्धान सहयोग।"}
              </h2>

              <p className="mt-6 text-base leading-7 text-muted-foreground">
                {language === "en"
                  ? "Thesis Companion provides structured academic and research support for students and researchers working through different stages of a research project."
                  : "Thesis Companion ले अनुसन्धान परियोजनाका विभिन्न चरणमा रहेका विद्यार्थी तथा अनुसन्धानकर्ताहरूलाई संरचित शैक्षिक तथा अनुसन्धान सहयोग प्रदान गर्दछ।"}
              </p>

              <p className="mt-4 text-base leading-7 text-muted-foreground">
                {language === "en"
                  ? "From research ideas and proposals to methodology, analysis, writing, and final preparation, our approach focuses on making the process clearer and more manageable."
                  : "अनुसन्धान विचार तथा प्रस्तावदेखि अनुसन्धान विधि, डाटा विश्लेषण, लेखन तथा अन्तिम तयारीसम्म हाम्रो दृष्टिकोण अनुसन्धान प्रक्रियालाई स्पष्ट र व्यवस्थापन गर्न सजिलो बनाउनमा केन्द्रित हुन्छ।"}
              </p>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center text-sm font-semibold text-primary"
              >
                {language === "en"
                  ? "Learn about us"
                  : "हाम्रो बारेमा जान्नुहोस्"}
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH JOURNEY */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              {home.researchJourney}
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {home.processHeading}
            </h2>
          </div>

          <div className="mt-14 grid gap-0 md:grid-cols-4">
            {currentJourney.map((item, index) => (
              <div
                key={item.number}
                className={`relative border-t border-white/20 px-0 py-8 md:border-l md:border-t-0 md:px-7 ${
                  index === 0 ? "md:border-l-0 md:pl-0" : ""
                }`}
              >
                <span className="text-sm font-bold text-accent">
                  {item.number}
                </span>

                <h3 className="mt-5 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-xs text-sm leading-6 text-primary-foreground/70">
                  {item.text}
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

      {/* WHY US */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                {home.whyUs}
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {home.whyHeading}
              </h2>

              <div className="mt-9 space-y-5">
                {currentBenefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-4 border-b border-border pb-5 last:border-0"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                      {index + 1}
                    </span>

                    <p className="pt-1 text-base font-medium text-foreground">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-muted">
                <Image
                  src={images.home.whyUs}
                  alt={
                    language === "en"
                      ? "Student working on academic research"
                      : "शैक्षिक अनुसन्धानमा काम गर्दै विद्यार्थी"
                  }
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-5 rounded-xl bg-accent p-5 shadow-xl sm:left-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent-foreground/70">
                  {language === "en" ? "Our focus" : "हाम्रो केन्द्रबिन्दु"}
                </p>

                <p className="mt-1 text-lg font-bold text-accent-foreground">
                  {language === "en"
                    ? "Your research"
                    : "तपाईंको अनुसन्धान"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH AREAS */}
      <section className="bg-muted/40">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                {home.researchAreas}
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {home.researchAreasHeading}
              </h2>

              <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-2xl">
                <Image
                  src={images.home.research}
                  alt={
                    language === "en"
                      ? "Research areas"
                      : "अनुसन्धान क्षेत्रहरू"
                  }
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {currentAreas.map((area, index) => (
                <div
                  key={area}
                  className="group rounded-2xl border border-border bg-background p-7 transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-primary">
                      0{index + 1}
                    </span>

                    <span className="text-xl text-muted-foreground transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>

                  <h3 className="mt-12 text-lg font-semibold text-foreground">
                    {area}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              {home.experiences}
            </p>

            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {home.experiencesHeading}
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {currentTestimonials.map((testimonial, index) => (
              <figure
                key={testimonial.name}
                className="overflow-hidden rounded-2xl border border-border bg-muted/40"
              >
                {index === 0 && (
                  <div className="relative aspect-[16/8]">
                    <Image
                      src={images.home.testimonials}
                      alt="Research student experience"
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                )}

                <div className="p-8">
                  <div className="text-3xl text-accent">“</div>

                  <blockquote className="mt-3 text-base leading-7 text-foreground">
                    {testimonial.quote}
                  </blockquote>

                  <figcaption className="mt-8 border-t border-border pt-5">
                    <p className="text-sm font-semibold text-foreground">
                      {testimonial.name}
                    </p>

                    <p className="mt-1 text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/40">
        <div className="mx-auto max-w-4xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              {home.faq}
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {home.faqHeading}
            </h2>
          </div>

          <div className="mt-12 divide-y divide-border rounded-2xl border border-border bg-background">
            {currentFaqs.map((faq) => (
              <details key={faq.question} className="group p-6 sm:p-7">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-semibold text-foreground">
                  <span>{faq.question}</span>

                  <span className="shrink-0 text-xl text-muted-foreground transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 max-w-3xl pr-8 text-sm leading-7 text-muted-foreground">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-5 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            {home.finalCtaLabel}
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {home.finalCtaHeading}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            {home.finalCtaText}
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            {common.contactUs}
            <span className="ml-2">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}