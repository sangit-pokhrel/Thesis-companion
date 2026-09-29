"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { useLanguage } from "@/components/language/LanguageProvider";
import { images } from "@/lib/images";

const heroSlides = {
  en: [
    {
      image: images.home.hero.carousel1,
      eyebrow: "Research starts with clarity.",
      title1: "Turn research",
      title2: "into direction.",
      description:
        "Build a clear research path with structured support from your first idea to your final submission.",
    },
    {
      image: images.home.hero.carousel2,
      eyebrow: "Build with confidence.",
      title1: "Structure your",
      title2: "research better.",
      description:
        "Develop your proposal, methodology, literature review, and research structure with greater clarity.",
    },
    {
      image: images.home.hero.carousel3,
      eyebrow: "Make complex research clearer.",
      title1: "From data to",
      title2: "clear results.",
      description:
        "Prepare, analyse, interpret, and present your research data in a clear academic format.",
    },
    {
      image: images.home.hero.carousel4,
      eyebrow: "Your research. Your journey.",
      title1: "Move your",
      title2: "thesis forward.",
      description:
        "Get structured support across writing, analysis, formatting, and the final stages of your research.",
    },
  ],

  ne: [
    {
      image: images.home.hero.carousel1,
      eyebrow: "अनुसन्धान स्पष्टताबाट सुरु हुन्छ।",
      title1: "तपाईंको अनुसन्धान",
      title2: "विचारलाई दिशा दिनुहोस्।",
      description:
        "पहिलो विचारदेखि अन्तिम पेशासम्म संरचित सहयोगसहित आफ्नो अनुसन्धानको स्पष्ट बाटो तयार गर्नुहोस्।",
    },
    {
      image: images.home.hero.carousel2,
      eyebrow: "आत्मविश्वासका साथ निर्माण गर्नुहोस्।",
      title1: "आफ्नो अनुसन्धानलाई",
      title2: "राम्रोसँग संरचना दिनुहोस्।",
      description:
        "प्रस्ताव, अनुसन्धान विधि, साहित्य समीक्षा तथा अनुसन्धान संरचना स्पष्ट रूपमा तयार गर्न सहयोग लिनुहोस्।",
    },
    {
      image: images.home.hero.carousel3,
      eyebrow: "जटिल अनुसन्धानलाई स्पष्ट बनाउनुहोस्।",
      title1: "डाटाबाट",
      title2: "अर्थपूर्ण नतिजातर्फ।",
      description:
        "अनुसन्धान डाटा तयार, विश्लेषण, व्याख्या तथा स्पष्ट शैक्षिक ढाँचामा प्रस्तुत गर्न सहयोग लिनुहोस्।",
    },
    {
      image: images.home.hero.carousel4,
      eyebrow: "तपाईंको अनुसन्धान। तपाईंको यात्रा।",
      title1: "आफ्नो थेसिसलाई",
      title2: "अगाडि बढाउनुहोस्।",
      description:
        "लेखन, डाटा विश्लेषण, फर्म्याटिङ तथा अनुसन्धानका अन्तिम चरणहरूमा संरचित सहयोग प्राप्त गर्नुहोस्।",
    },
  ],
};

export default function HomePage() {
  const { language, t } = useLanguage();

  const home = t("home");
  const common = t("common");

  const [activeSlide, setActiveSlide] = useState(0);

  const currentHeroSlides = heroSlides[language];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) =>
        current === currentHeroSlides.length - 1 ? 0 : current + 1,
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [currentHeroSlides.length]);

  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  const goToPrevious = () => {
    setActiveSlide((current) =>
      current === 0 ? currentHeroSlides.length - 1 : current - 1,
    );
  };

  const goToNext = () => {
    setActiveSlide((current) =>
      current === currentHeroSlides.length - 1 ? 0 : current + 1,
    );
  };

  const services = {
    en: [
      {
        number: "01",
        title: "Research Topic & Proposal",
        description:
          "Develop a clear research direction, proposal structure, objectives, and questions.",
        image: images.home.services.researchProposal,
        href: "/services/research-proposal",
      },
      {
        number: "02",
        title: "Literature Review",
        description:
          "Organise academic sources, identify themes, and develop a meaningful research gap.",
        image: images.home.services.literatureReview,
        href: "/services/literature-review",
      },
      {
        number: "03",
        title: "Research Methodology",
        description:
          "Build a suitable methodology aligned with your research objectives and questions.",
        image: images.home.services.methodology,
        href: "/services/methodology",
      },
      {
        number: "04",
        title: "Data Analysis",
        description:
          "Prepare, analyse, interpret, and present your research data effectively.",
        image: images.home.services.dataAnalysis,
        href: "/services/data-analysis",
      },
      {
        number: "05",
        title: "Academic Writing",
        description:
          "Improve the structure, clarity, flow, and academic presentation of your work.",
        image: images.home.services.academicWriting,
        href: "/services/academic-writing",
      },
      {
        number: "06",
        title: "Thesis & Dissertation",
        description:
          "Get structured support throughout the major stages of your thesis or dissertation.",
        image: images.home.services.thesisSupport,
        href: "/services/thesis-dissertation",
      },
    ],
    ne: [
      {
        number: "०१",
        title: "अनुसन्धान विषय तथा प्रस्ताव",
        description:
          "अनुसन्धानको दिशा, प्रस्ताव संरचना, उद्देश्य तथा प्रश्न विकास गर्न सहयोग।",
        image: images.home.services.researchProposal,
        href: "/services/research-proposal",
      },
      {
        number: "०२",
        title: "साहित्य समीक्षा",
        description:
          "शैक्षिक स्रोतहरू व्यवस्थित गर्दै विषयगत पक्ष तथा अनुसन्धान रिक्तता पहिचान गर्न सहयोग।",
        image: images.home.services.literatureReview,
        href: "/services/literature-review",
      },
      {
        number: "०३",
        title: "अनुसन्धान विधि",
        description:
          "अनुसन्धान उद्देश्य तथा प्रश्नसँग मिल्ने उपयुक्त अनुसन्धान विधि विकास गर्न सहयोग।",
        image: images.home.services.methodology,
        href: "/services/methodology",
      },
      {
        number: "०४",
        title: "डाटा विश्लेषण",
        description:
          "अनुसन्धान डाटा तयार, विश्लेषण, व्याख्या तथा प्रभावकारी रूपमा प्रस्तुत गर्न सहयोग।",
        image: images.home.services.dataAnalysis,
        href: "/services/data-analysis",
      },
      {
        number: "०५",
        title: "शैक्षिक लेखन",
        description:
          "अनुसन्धान कार्यको संरचना, स्पष्टता, प्रवाह तथा शैक्षिक प्रस्तुति सुधार गर्न सहयोग।",
        image: images.home.services.academicWriting,
        href: "/services/academic-writing",
      },
      {
        number: "०६",
        title: "थेसिस तथा डिसर्टेसन",
        description: "थेसिस वा डिसर्टेसनका प्रमुख चरणहरूमा संरचित सहयोग।",
        image: images.home.services.thesisSupport,
        href: "/services/thesis-dissertation",
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
      {/* HERO CAROUSEL */}
      {/* <section className="relative min-h-[calc(100vh-88px)] overflow-hidden bg-[#07111f]"> */}
      <section className="relative min-h-screen overflow-hidden bg-[#07111f]">
        {/* BACKGROUND SLIDES */}
        <div className="absolute inset-0">
          {currentHeroSlides.map((slide, index) => (
            <div
              key={slide.image}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                activeSlide === index ? "z-10 opacity-100" : "z-0 opacity-0"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title1}
                fill
                priority={index === 0}
                sizes="100vw"
                className={`object-cover transition-transform duration-7000 ease-out ${
                  activeSlide === index ? "scale-105" : "scale-100"
                }`}
              />

              <div className="absolute inset-0 bg-[#07111f]/55" />

              <div className="absolute inset-0 bg-linear-to-r from-[#07111f]/95 via-[#07111f]/65 to-[#07111f]/15" />

              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-[#07111f]/80 to-transparent" />
            </div>
          ))}
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-20 mx-auto flex min-h-screen w-full max-w-7xl items-center px-16 pt-32 pb-16 sm:px-20 sm:pt-36 sm:pb-16 lg:px-24 lg:pt-32 lg:pb-16 xl:px-28">
          <div
            key={`${language}-${activeSlide}`}
            className="ml-3 w-full max-w-xl animate-[heroContent_700ms_ease-out] sm:ml-4 sm:max-w-2xl lg:ml-6"
          >
            {/* EYEBROW */}
            <div className="mb-5 inline-flex items-center gap-2 sm:mb-7 sm:gap-3">
              <span className="h-0.5 w-7 bg-accent sm:w-10 lg:w-14" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent sm:text-xs sm:tracking-[0.2em] lg:text-sm">
                {currentHeroSlides[activeSlide].eyebrow}
              </p>
            </div>

            {/* TITLE */}
            <h1 className="max-w-xl text-[2.25rem] font-bold leading-[1.04] tracking-[-0.035em] text-white sm:text-5xl sm:leading-[1.02] lg:text-[4.25rem] xl:text-[4.75rem]">
              {currentHeroSlides[activeSlide].title1}

              <span className="mt-1 block text-accent sm:mt-2">
                {currentHeroSlides[activeSlide].title2}
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-5 max-w-lg text-sm leading-6 text-white/75 sm:mt-7 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
              {currentHeroSlides[activeSlide].description}
            </p>

            {/* BUTTONS */}
            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              <Link
                href="/services"
                className="group inline-flex h-11 items-center justify-center rounded-lg bg-accent px-6 text-sm font-semibold text-accent-foreground shadow-[0_8px_30px_rgba(245,196,0,0.16)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(245,196,0,0.28)] sm:h-12 sm:px-7"
              >
                {home.exploreServices}

                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-lg border border-white/30 bg-white/8 px-6 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/50 hover:bg-white/[0.14] sm:h-12 sm:px-7"
              >
                {common.discussResearch}
              </Link>
            </div>

            {/* FEATURES */}
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2.5 sm:mt-9 sm:gap-x-7 sm:gap-y-3">
              <span className="inline-flex items-center gap-2 text-[11px] text-white/70 sm:text-sm">
                <span className="text-accent">✓</span>
                {language === "en" ? "Research focused" : "अनुसन्धान केन्द्रित"}
              </span>

              <span className="inline-flex items-center gap-2 text-[11px] text-white/70 sm:text-sm">
                <span className="text-accent">✓</span>
                {language === "en" ? "Structured support" : "संरचित सहयोग"}
              </span>

              <span className="inline-flex items-center gap-2 text-[11px] text-white/70 sm:text-sm">
                <span className="text-accent">✓</span>
                {language === "en" ? "Academic guidance" : "शैक्षिक मार्गदर्शन"}
              </span>
            </div>
          </div>
        </div>

        {/* PREVIOUS */}
        <button
          type="button"
          onClick={goToPrevious}
          aria-label="Previous slide"
          className="group absolute left-3 top-1/2 z-30 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/8 text-white backdrop-blur-md transition-all duration-300 hover:border-accent/60 hover:bg-accent hover:text-accent-foreground sm:left-5 sm:h-10 sm:w-10 lg:left-8 lg:h-11 lg:w-11"
        >
          <span className="text-lg transition-transform duration-300 group-hover:-translate-x-0.5 sm:text-xl">
            ‹
          </span>
        </button>

        {/* NEXT */}
        <button
          type="button"
          onClick={goToNext}
          aria-label="Next slide"
          className="group absolute right-3 top-1/2 z-30 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/8 text-white backdrop-blur-md transition-all duration-300 hover:border-accent/60 hover:bg-accent hover:text-accent-foreground sm:right-5 sm:h-10 sm:w-10 lg:right-8 lg:h-11 lg:w-11"
        >
          <span className="text-lg transition-transform duration-300 group-hover:translate-x-0.5 sm:text-xl">
            ›
          </span>
        </button>

        {/* DOTS */}
        <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 sm:bottom-7">
          {currentHeroSlides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                activeSlide === index
                  ? "w-8 bg-accent sm:w-10"
                  : "w-1.5 bg-white/45 hover:bg-white/80 sm:w-2"
              }`}
            />
          ))}
        </div>

        {/* SLIDE NUMBER */}
        <div className="absolute bottom-5 right-4 z-30 hidden items-center gap-3 text-white/60 sm:flex lg:right-10">
          <span className="text-xs font-medium tracking-[0.15em]">
            {String(activeSlide + 1).padStart(2, "0")}
          </span>

          <span className="h-px w-8 bg-white/30" />

          <span className="text-xs font-medium tracking-[0.15em]">
            {String(currentHeroSlides.length).padStart(2, "0")}
          </span>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-5 lg:divide-x">
            {[
              language === "en" ? "Thesis Support" : "थेसिस सहयोग",
              language === "en" ? "Research Proposal" : "अनुसन्धान प्रस्ताव",
              language === "en" ? "Literature Review" : "साहित्य समीक्षा",
              language === "en" ? "Data Analysis" : "डाटा विश्लेषण",
              language === "en" ? "Academic Writing" : "शैक्षिक लेखन",
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
          {/* Section Header */}
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                {home.whatWeSupport}
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {home.servicesHeading}
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
                {language === "en"
                  ? "Structured support for every stage of your research journey."
                  : "तपाईंको अनुसन्धान यात्राको हरेक चरणका लागि संरचित सहयोग।"}
              </p>
            </div>

            {/* View All Services */}
            <Link
              href="/services"
              className="group inline-flex shrink-0 items-center text-sm font-semibold text-foreground transition-colors duration-200 hover:text-accent"
            >
              {home.viewAllServices}

              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* Services Grid */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {currentServices.map((service) => (
              <article
                key={service.number}
                className="group overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative aspect-16/10 overflow-hidden bg-muted">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-primary/70 via-primary/10 to-transparent" />

                  {/* Service Number */}
                  <span className="absolute left-5 top-5 flex h-9 min-w-9 items-center justify-center rounded-full border border-white/30 bg-primary/80 px-3 text-xs font-bold text-white shadow-lg backdrop-blur-md">
                    {service.number}
                  </span>

                  {/* Yellow Hover Line */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-accent transition-all duration-500 group-hover:w-full" />
                </div>

                {/* Card Content */}
                <div className="p-7">
                  {/* Title */}
                  <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {service.description}
                  </p>

                  {/* Learn More */}
                  <Link
                    href={service.href}
                    className="group/link mt-6 inline-flex items-center text-sm font-semibold text-foreground transition-colors duration-200 hover:text-accent"
                  >
                    {common.learnMore}

                    <span className="ml-2 transition-transform duration-300 group-hover/link:translate-x-1">
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
              <div className="relative aspect-4/3 overflow-hidden rounded-[1.75rem]">
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

              <div className="absolute -bottom-6 -right-4 max-w-55 rounded-xl border border-border bg-background p-5 shadow-xl sm:right-6">
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

                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>

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
              <div className="relative aspect-4/5 overflow-hidden rounded-4xl bg-muted">
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
                  {language === "en" ? "Your research" : "तपाईंको अनुसन्धान"}
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

              <div className="relative mt-8 aspect-16/10 overflow-hidden rounded-2xl">
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
                  <div className="relative aspect-16/8">
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

      <style jsx>{`
        @keyframes heroContent {
          0% {
            opacity: 0;
            transform: translateY(24px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
