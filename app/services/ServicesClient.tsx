"use client";

import Image from "next/image";
import Link from "next/link";

import { useLanguage } from "@/components/language/LanguageProvider";

import { images } from "@/lib/images";

const servicesEn = [
  {
    number: "01",
    title: "Thesis & Dissertation Support",
    description:
      "Structured support across the major stages of undergraduate, postgraduate, and dissertation research.",
    image: images.services.thesisSupport,
    href: "/services/thesis-dissertation",
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
    href: "/services/research-proposal",
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
    href: "/services/literature-review",
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
    href: "/services/methodology",
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
    href: "/services/data-analysis",
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
    href: "/services/academic-writing",
    includes: [
      "Academic editing",
      "Proofreading",
      "Referencing",
      "Document formatting",
    ],
  },
];

const stagesEn = [
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

const servicesNe = [
  { number: "०१", title: "थेसिस तथा डिसर्टेसन सहयोग", description: "स्नातक, स्नातकोत्तर तथा डिसर्टेसन अनुसन्धानका प्रमुख चरणहरूमा संरचित सहयोग।", image: images.services.thesisSupport, href: "/services/thesis-dissertation", includes: ["अनुसन्धान संरचना", "अध्याय व्यवस्थापन", "शैक्षिक लेखन सहयोग", "फर्म्याटिङ तथा अन्तिम समीक्षा"] },
  { number: "०२", title: "अनुसन्धान प्रस्ताव", description: "स्पष्ट दिशा, तार्किक संरचना तथा परिभाषित अनुसन्धान उद्देश्यसहित अनुसन्धान प्रस्ताव तयार गर्न सहयोग।", image: images.services.researchProposal, href: "/services/research-proposal", includes: ["विषय विकास", "समस्याको विवरण", "अनुसन्धान उद्देश्य", "अनुसन्धान प्रश्न"] },
  { number: "०३", title: "साहित्य समीक्षा", description: "विद्यमान अनुसन्धानलाई आफ्नो अध्ययनसँग जोड्दै शैक्षिक साहित्यलाई व्यवस्थित समीक्षामा विकास गर्न सहयोग।", image: images.services.literatureReview, href: "/services/literature-review", includes: ["साहित्य व्यवस्थापन", "विषयगत पक्ष पहिचान", "अनुसन्धान रिक्तता विकास", "शैक्षिक संरचना"] },
  { number: "०४", title: "अनुसन्धान विधि", description: "अनुसन्धान प्रश्न तथा अध्ययन डिजाइनका आवश्यकताअनुसार अनुसन्धान विधि विकास तथा संरचना गर्न सहयोग।", image: images.services.methodology, href: "/services/methodology", includes: ["अनुसन्धान डिजाइन", "नमुना छनोट विधि", "डाटा संकलन", "चर तथा अनुसन्धान विधि"] },
  { number: "०५", title: "डाटा विश्लेषण", description: "अनुसन्धान डाटा तयार, विश्लेषण, व्याख्या तथा स्पष्ट शैक्षिक ढाँचामा प्रस्तुत गर्न सहयोग।", image: images.services.dataAnalysis, href: "/services/data-analysis", includes: ["डाटा तयारी", "सांख्यिकीय विश्लेषण", "तालिका तथा दृश्य प्रस्तुति", "नतिजा व्याख्या"] },
  { number: "०६", title: "शैक्षिक सम्पादन तथा फर्म्याटिङ", description: "तपाईंको शैक्षिक दस्तावेजको स्पष्टता, एकरूपता, संरचना तथा प्रस्तुति सुधार गर्न सहयोग।", image: images.services.academicWriting, href: "/services/academic-writing", includes: ["शैक्षिक सम्पादन", "प्रूफरीडिङ", "सन्दर्भ व्यवस्थापन", "दस्तावेज फर्म्याटिङ"] },
];

const stagesNe = [
  { number: "०१", title: "योजना", text: "विषय छनोट, अनुसन्धान प्रस्ताव, उद्देश्य, प्रश्न तथा अनुसन्धानको दिशा।" },
  { number: "०२", title: "अनुसन्धान", text: "साहित्य समीक्षा, अनुसन्धान विधि, डाटा संकलन तथा अनुसन्धान डिजाइन।" },
  { number: "०३", title: "विश्लेषण", text: "डाटा तयारी, सांख्यिकीय विश्लेषण, व्याख्या, तालिका तथा नतिजा।" },
  { number: "०४", title: "अन्तिम तयारी", text: "लेखन, सम्पादन, फर्म्याटिङ, सन्दर्भ व्यवस्थापन, समीक्षा तथा अन्तिम तयारी।" },
];

export default function ServicesClient() {
  const { language } = useLanguage();
  const currentServices = language === "en" ? servicesEn : servicesNe;
  const currentStages = language === "en" ? stagesEn : stagesNe;

  return (
    <div className="overflow-hidden">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative min-h-140 overflow-hidden">
        <Image
          src={images.services.hero}
          alt="Thesis and research support services"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-black/45 dark:bg-black/55" />

        <div className="absolute inset-0 bg-linear-to-r from-primary/80 via-primary/55 to-primary/20 dark:from-primary/90 dark:via-primary/65 dark:to-primary/35" />

        <div className="relative z-10 mx-auto flex min-h-140 max-w-7xl items-center px-6 py-24 lg:px-8 lg:py-28">
          <div className="max-w-4xl text-white">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              {language === "en" ? "Our Services" : "हाम्रा सेवाहरू"}
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {language === "en" ? "Support for every major stage of your research." : "तपाईंको अनुसन्धानका हरेक प्रमुख चरणमा सहयोग।"}
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/85">
              {language === "en" ? "From your first research idea to the final submission, explore support designed around the different requirements of academic research." : "पहिलो अनुसन्धान विचारदेखि अन्तिम पेशासम्म, शैक्षिक अनुसन्धानका विभिन्न आवश्यकताअनुसार तयार गरिएको सहयोग प्राप्त गर्नुहोस्।"}
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center bg-accent px-7 py-3.5 font-semibold text-accent-foreground shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:brightness-95"
            >
              {language === "en" ? "Discuss Your Requirement" : "आफ्नो आवश्यकता बारे छलफल गर्नुहोस्"}
              <span className="ml-2 transition-transform duration-300">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>


      {/* =====================================================
          SERVICE OVERVIEW
      ====================================================== */}
      <section className="bg-background py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Section heading */}
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary dark:text-accent">
              {language === "en" ? "What We Offer" : "हामी के प्रदान गर्छौं"}
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {language === "en" ? "Choose the support your research needs." : "तपाईंको अनुसन्धानलाई आवश्यक सहयोग छनोट गर्नुहोस्।"}
            </h2>

            <p className="mt-5 leading-8 text-muted-foreground">
              {language === "en" ? "You can discuss a complete research project or request support for a specific stage of your work." : "तपाईंले सम्पूर्ण अनुसन्धान परियोजनाका बारेमा छलफल गर्न वा आफ्नो कामको कुनै विशेष चरणका लागि सहयोग लिन सक्नुहुन्छ।"}
            </p>
          </div>


          {/* Service cards */}
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {currentServices.map((service) => (
              <article
                key={service.number}
                className="
                  group
                  flex
                  flex-col
                  overflow-hidden
                  rounded-2xl
                  border
                  border-border
                  bg-background
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary/20
                  hover:shadow-xl
                  dark:bg-muted/20
                  dark:hover:border-accent/30
                  dark:hover:shadow-black/20
                "
              >

                {/* Service image */}
                <div className="relative aspect-16/8 overflow-hidden bg-muted">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Service number */}
                  <div
                    className="
                      absolute
                      left-6
                      top-6
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-white/30
                      bg-white/95
                      text-sm
                      font-bold
                      text-primary
                      shadow-md
                      dark:border-accent/30
                      dark:bg-primary/90
                      dark:text-accent
                    "
                  >
                    {service.number}
                  </div>

                  {/* Hover accent */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-accent transition-all duration-500 group-hover:w-full" />
                </div>


                {/* Service content */}
                <div className="flex flex-1 flex-col p-8">

                  {/* Small accent */}
                  <div
                    className="
                      h-1
                      w-10
                      bg-primary/15
                      transition-all
                      duration-500
                      group-hover:w-14
                      dark:bg-accent/60
                    "
                  />

                  {/* Title */}
                  <h2
                    className="
                      mt-6
                      text-2xl
                      font-semibold
                      tracking-tight
                      text-foreground
                      transition-colors
                      duration-300
                      dark:group-hover:text-accent
                    "
                  >
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
                    {service.description}
                  </p>


                  {/* Includes */}
                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {service.includes.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-sm text-foreground"
                      >
                        <span
                          className="
                            flex
                            h-6
                            w-6
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-muted
                            text-xs
                            font-bold
                            text-primary
                            dark:border
                            dark:border-accent/30
                            dark:bg-accent/10
                            dark:text-accent
                          "
                        >
                          ✓
                        </span>

                        <span>{item}</span>
                      </div>
                    ))}
                  </div>


                  {/* Service actions */}
                  <div className="mt-auto grid grid-cols-2 gap-3 pt-8">
                    <Link
                      href={service.href}
                      className="
                        inline-flex
                        items-center
                        w-full
                        justify-center
                        rounded-lg
                        border
                        border-border
                        bg-background
                        px-5
                        py-2.5
                        text-sm
                        font-semibold
                        text-foreground
                        shadow-sm
                        transition-all
                        duration-200
                        hover:-translate-y-0.5
                        hover:border-primary/30
                        hover:bg-muted
                        dark:border-accent/30
                        dark:hover:border-accent
                        dark:hover:bg-accent/10
                        dark:hover:text-accent
                      "
                    >
                      {language === "en" ? "Learn More" : "थप जान्नुहोस्"}
                      <span className="ml-2 transition-transform duration-200">
                        →
                      </span>
                    </Link>

                    <Link
                      href="/contact"
                      className="
                        inline-flex
                        items-center
                        w-full
                        justify-center
                        rounded-lg
                        bg-primary
                        px-5
                        py-2.5
                        text-sm
                        font-semibold
                        text-primary-foreground
                        shadow-sm
                        transition-all
                        duration-200
                        hover:-translate-y-0.5
                        hover:bg-primary/90
                        hover:shadow-md
                        dark:bg-accent
                        dark:text-accent-foreground
                        dark:hover:bg-accent/90
                      "
                    >
                      {language === "en" ? "Discuss " : "छलफल "}
                      <span className="ml-2 transition-transform duration-200">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* =====================================================
          RESEARCH JOURNEY
      ====================================================== */}
      <section className="bg-muted/40 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            {/* Text */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary dark:text-accent">
                {language === "en" ? "Research Journey" : "अनुसन्धान यात्रा"}
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {language === "en" ? "Support can begin wherever you are." : "तपाईं जहाँ हुनुहुन्छ, त्यहीँबाट सहयोग सुरु गर्न सकिन्छ।"}
              </h2>

              <p className="mt-5 leading-8 text-muted-foreground">
                {language === "en" ? "You do not need to start from the beginning. Tell us which stage you are currently working on and what you need help with." : "तपाईंले सुरुदेखि नै सुरु गर्न आवश्यक छैन। तपाईं हाल अनुसन्धानको कुन चरणमा हुनुहुन्छ र कस्तो सहयोग चाहिन्छ भन्ने जानकारी दिनुहोस्।"}
              </p>
            </div>


            {/* Stages */}
            <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
              {currentStages.map((stage) => (
                <div
                  key={stage.number}
                  className="
                    bg-background
                    p-7
                    transition-colors
                    duration-300
                    hover:bg-muted/70
                    dark:bg-muted/30
                    dark:hover:bg-muted/60
                  "
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


      {/* =====================================================
          OUR APPROACH
      ====================================================== */}
      <section className="bg-background py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary dark:text-accent">
              {language === "en" ? "Our Approach" : "हाम्रो दृष्टिकोण"}
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {language === "en" ? "Support that stays focused on your research." : "तपाईंको अनुसन्धानमा केन्द्रित सहयोग।"}
            </h2>
          </div>


          {/* Approach cards */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {(language === "en"
              ? [
                  { title: "Understand", text: "We first understand your topic, requirements, academic level, and current stage." },
                  { title: "Structure", text: "The required work is organised into clear research stages and deliverables." },
                  { title: "Develop", text: "Support is provided around the specific research, analysis, writing, or formatting requirement." },
                ]
              : [
                  { title: "बुझ्ने", text: "सुरुमा तपाईंको विषय, आवश्यकता, शैक्षिक तह तथा हालको अनुसन्धान चरण बुझिन्छ।" },
                  { title: "संरचना गर्ने", text: "आवश्यक कामलाई स्पष्ट अनुसन्धान चरण तथा आवश्यक कार्यहरूमा व्यवस्थित गरिन्छ।" },
                  { title: "विकास गर्ने", text: "विशेष अनुसन्धान, विश्लेषण, लेखन वा फर्म्याटिङ आवश्यकताअनुसार सहयोग प्रदान गरिन्छ।" },
                ]
            ).map((item, index) => (
              <div
                key={item.title}
                className="
                  group
                  rounded-2xl
                  border
                  border-border
                  bg-background
                  p-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary/20
                  hover:shadow-lg
                  dark:bg-muted/20
                  dark:hover:border-accent/30
                "
              >

                {/* Number */}
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-lg
                    bg-primary
                    text-sm
                    font-bold
                    text-primary-foreground
                    transition-all
                    duration-300
                    group-hover:bg-accent
                    group-hover:text-accent-foreground
                    dark:bg-accent
                    dark:text-accent-foreground
                  "
                >
                  0{index + 1}
                </div>

                <h3 className="mt-7 text-xl font-semibold text-foreground transition-colors dark:group-hover:text-accent">
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


      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground">

        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={images.services.dataAnalysis}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-10"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 dark:bg-black/35" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {language === "en" ? "Need Research Support?" : "अनुसन्धान सहयोग चाहिन्छ?"}
          </p>

          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
            {language === "en" ? "Not sure which service is right for your project?" : "तपाईंको परियोजनाका लागि कुन सेवा उपयुक्त छ भन्ने निश्चित हुनुहुन्न?"}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-primary-foreground/75">
            {language === "en" ? "Tell us about your research topic, academic level, current stage, and requirements. We can discuss the type of support relevant to your project." : "आफ्नो अनुसन्धान विषय, शैक्षिक तह, हालको चरण तथा आवश्यकताका बारेमा जानकारी दिनुहोस्। तपाईंको परियोजनाका लागि उपयुक्त सहयोगका बारेमा छलफल गर्न सकिन्छ।"}
          </p>

          <Link
            href="/contact"
            className="
              mt-8
              inline-flex
              items-center
              bg-accent
              px-7
              py-3.5
              font-semibold
              text-accent-foreground
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-xl
              hover:brightness-95
            "
          >
            {language === "en" ? "Talk About Your Research" : "आफ्नो अनुसन्धानबारे छलफल गर्नुहोस्"}

            <span className="ml-2">
              →
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}