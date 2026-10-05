"use client";

import Image from "next/image";
import Link from "next/link";

import { useLanguage } from "@/components/language/LanguageProvider";
import { services, type Service } from "@/lib/services";

const localizeService = (service: Service, language: "en" | "ne"): Service => {
  if (language === "en") return service;
  const map: Record<string, Partial<Service>> = {
    "research-proposal": { title: "अनुसन्धान विषय तथा प्रस्ताव", shortDescription: "स्पष्ट र संरचित अनुसन्धान प्रस्ताव तयार गर्दै बलियो शैक्षिक दिशा विकास गर्नुहोस्।", description: "बलियो अनुसन्धान स्पष्ट दिशाबाट सुरु हुन्छ। तार्किक समस्या विवरण, उद्देश्य, अनुसन्धान प्रश्न तथा उपयुक्त अनुसन्धान दिशासहित तपाईंको अनुसन्धान विचारलाई केन्द्रित प्रस्तावमा संरचना गर्न हामी सहयोग गर्छौं।", includes: ["अनुसन्धान विषय विकास", "समस्याको विवरण", "अनुसन्धान उद्देश्य", "अनुसन्धान प्रश्न", "अनुसन्धानको दायरा", "प्रस्ताव संरचना"], suitableFor: ["नयाँ अनुसन्धान परियोजना सुरु गर्ने विद्यार्थी", "अनुसन्धान प्रस्ताव तयार गर्ने विद्यार्थी", "विद्यमान अनुसन्धान विचारलाई परिष्कृत गर्ने अनुसन्धानकर्ता"], process: [{title:"अनुसन्धान विचार बुझ्ने",description:"तपाईंको विषय, शैक्षिक आवश्यकता तथा अनुसन्धानको दिशा बुझिन्छ।"},{title:"प्रस्ताव संरचना गर्ने",description:"स्पष्ट उद्देश्य तथा प्रश्नसहित अनुसन्धान विचारलाई तार्किक शैक्षिक संरचनामा व्यवस्थित गरिन्छ।"},{title:"दिशा परिष्कृत गर्ने",description:"प्रस्तावका प्रमुख भागहरूबीच स्पष्टता, एकरूपता, दायरा तथा सम्बन्धको समीक्षा गरिन्छ।"}] },
    "literature-review": { title: "साहित्य समीक्षा", shortDescription: "विद्यमान अनुसन्धानलाई आफ्नो अध्ययनसँग जोड्दै शैक्षिक साहित्यलाई संरचित समीक्षामा व्यवस्थित गर्नुहोस्।", description: "साहित्य समीक्षाले केवल शोधपत्रहरूको सारांश दिनु हुँदैन। यसले के थाहा भइसकेको छ, महत्वपूर्ण विषयहरू के हुन्, अनुसन्धानमा रहेका रिक्तता के हुन् र तपाईंको अनुसन्धान विद्यमान शैक्षिक काममा कहाँ पर्छ भन्ने देखाउनुपर्छ।", includes:["साहित्य व्यवस्थापन","विषयगत पक्ष पहिचान","स्रोत संश्लेषण","अनुसन्धान रिक्तता विकास","आलोचनात्मक छलफल","शैक्षिक संरचना"], suitableFor:["स्नातक अनुसन्धान परियोजना","स्नातकोत्तर डिसर्टेसन","साहित्य संरचना गर्न कठिनाइ भएका विद्यार्थी"], process:[{title:"साहित्य व्यवस्थित गर्ने",description:"सम्बन्धित शैक्षिक स्रोतहरू अनुसन्धानका मुख्य विषय तथा अवधारणाअनुसार व्यवस्थित गरिन्छ।"},{title:"सम्बन्ध पहिचान गर्ने",description:"विद्यमान निष्कर्षहरू जोडेर समानता, भिन्नता तथा महत्वपूर्ण अनुसन्धान विषयहरू देखाइन्छ।"},{title:"अनुसन्धान रिक्तता विकास गर्ने",description:"साहित्यलाई तपाईंको अध्ययनसँग जोडेर अनुसन्धान रिक्तता तथा अध्ययनको औचित्य स्पष्ट बनाइन्छ।"}] },
    methodology: { title:"अनुसन्धान विधि", shortDescription:"अनुसन्धान प्रश्न, अध्ययन डिजाइन, डाटा संकलन तथा विश्लेषणसँग मिल्ने अनुसन्धान विधि विकास गर्नुहोस्।", description:"राम्रोसँग संरचित अनुसन्धान विधिले अनुसन्धान कसरी सञ्चालन गरिनेछ र चयन गरिएका विधिहरू किन उपयुक्त छन् भन्ने स्पष्ट गर्छ। तपाईंको अनुसन्धानका आवश्यकताअनुसार विधि संरचना गर्न हामी सहयोग गर्छौं।", includes:["अनुसन्धान डिजाइन","अनुसन्धान दृष्टिकोण","नमुना छनोट विधि","डाटा संकलन विधि","चर तथा मापन","डाटा विश्लेषण विधि"], suitableFor:["अनुसन्धान अध्ययन डिजाइन गर्ने विद्यार्थी","प्रस्ताव विकास","डिसर्टेसनको अनुसन्धान विधि अध्याय"], process:[{title:"अनुसन्धान डिजाइन परिभाषित गर्ने",description:"उपयुक्त अनुसन्धान डिजाइन तय गर्दा अनुसन्धान प्रश्न तथा उद्देश्यलाई ध्यानमा राखिन्छ।"},{title:"डाटा संकलन योजना बनाउने",description:"सहभागी, डाटा स्रोत, उपकरण तथा संकलन प्रक्रियाअनुसार विधि संरचना गरिन्छ।"},{title:"विधिलाई विश्लेषणसँग जोड्ने",description:"चयन गरिएका विधिहरू संकलित डाटा कसरी विश्लेषण तथा व्याख्या गरिनेछ भन्ने कुरासँग मिलाइन्छ।"}] },
    "data-analysis": { title:"डाटा विश्लेषण", shortDescription:"अनुसन्धान डाटा स्पष्ट शैक्षिक ढाँचामा तयार, विश्लेषण, व्याख्या तथा प्रस्तुत गर्नुहोस्।", description:"अनुसन्धान डाटालाई सावधानीपूर्वक व्यवस्थापन गर्नुपर्छ ताकि नतिजा स्पष्ट र अर्थपूर्ण रूपमा प्रस्तुत गर्न सकियोस्। सहयोगमा डाटा तयारी, विश्लेषण, दृश्य प्रस्तुति तथा व्याख्या समावेश हुन सक्छ।", includes:["डाटा तयारी","डाटा सफाइ","सांख्यिकीय विश्लेषण","तालिका तथा दृश्य प्रस्तुति","नतिजा व्याख्या","शैक्षिक प्रस्तुति"], suitableFor:["परिमाणात्मक अनुसन्धान परियोजना","सर्वेक्षणमा आधारित अध्ययन","अनुसन्धान डाटासेटमा काम गर्ने विद्यार्थी"], process:[{title:"डाटा तयार गर्ने",description:"अपेक्षित विश्लेषणका लागि उपयुक्त बनाउन डाटासेटको समीक्षा तथा तयारी गरिन्छ।"},{title:"विश्लेषण गर्ने",description:"अनुसन्धान प्रश्न तथा अध्ययन डिजाइनअनुसार उपयुक्त विश्लेषण विधि प्रयोग गरिन्छ।"},{title:"नतिजा प्रस्तुत गर्ने",description:"नतिजालाई स्पष्ट तालिका, दृश्य प्रस्तुति तथा शैक्षिक व्याख्यामा व्यवस्थित गरिन्छ।"}] },
    "academic-writing": { title:"शैक्षिक लेखन तथा सम्पादन", shortDescription:"तपाईंको अनुसन्धान दस्तावेजको स्पष्टता, एकरूपता, संरचना तथा शैक्षिक प्रस्तुति सुधार गर्नुहोस्।", description:"शैक्षिक लेखनमा स्पष्टता, एकरूपता, तार्किक संरचना तथा उचित प्रस्तुति आवश्यक हुन्छ। अनुसन्धानको अभिप्रेत अर्थ तथा दिशालाई कायम राख्दै शैक्षिक दस्तावेज सुधार गर्न हामी सहयोग गर्छौं।", includes:["शैक्षिक सम्पादन","प्रूफरीडिङ","व्याकरण तथा स्पष्टता","संरचना सुधार","सन्दर्भ व्यवस्थापन सहयोग","दस्तावेज फर्म्याटिङ"], suitableFor:["थेसिस तथा डिसर्टेसन लेख्ने विद्यार्थी","अनुसन्धान लेखका लेखक","अन्तिम पेशाको तयारी गर्ने विद्यार्थी"], process:[{title:"दस्तावेज समीक्षा गर्ने",description:"संरचना, स्पष्टता, एकरूपता, भाषा तथा शैक्षिक प्रस्तुतीकरणका लागि दस्तावेज समीक्षा गरिन्छ।"},{title:"लेखन सुधार गर्ने",description:"अर्थ परिवर्तन नगरी पढ्न सजिलो तथा शैक्षिक स्पष्टतालाई असर गर्ने भागहरू परिष्कृत गरिन्छ।"},{title:"अन्तिम गुणस्तर समीक्षा",description:"एकरूपता, फर्म्याटिङ, सन्दर्भ तथा समग्र प्रस्तुतीकरण जाँच गरिन्छ।"}] },
    "thesis-dissertation": { title:"थेसिस तथा डिसर्टेसन सहयोग", shortDescription:"स्नातक, स्नातकोत्तर तथा डिसर्टेसन अनुसन्धानका प्रमुख चरणहरूमा संरचित सहयोग।", description:"थेसिस तथा डिसर्टेसन परियोजनामा धेरै आपसमा जोडिएका चरणहरू हुन्छन्। अनुसन्धान योजना, अध्याय व्यवस्थापन, विश्लेषण, शैक्षिक लेखन, फर्म्याटिङ तथा अन्तिम समीक्षामा संरचित सहयोग प्रदान गर्छौं।", includes:["अनुसन्धान संरचना","अध्याय व्यवस्थापन","शैक्षिक लेखन सहयोग","अनुसन्धान विधि मार्गदर्शन","डाटा विश्लेषण सहयोग","फर्म्याटिङ तथा अन्तिम समीक्षा"], suitableFor:["स्नातक थेसिस विद्यार्थी","स्नातकोत्तर डिसर्टेसन विद्यार्थी","ठूला अनुसन्धान परियोजना पूरा गर्ने विद्यार्थी"], process:[{title:"अनुसन्धान योजना बनाउने",description:"परियोजनालाई अनुसन्धान उद्देश्य, अध्याय, अनुसन्धान विधि तथा अपेक्षित नतिजाअनुसार व्यवस्थित गरिन्छ।"},{title:"अध्याय विकास गर्ने",description:"थेसिस वा डिसर्टेसनका प्रमुख भागहरूमा सहयोग प्रदान गरिन्छ।"},{title:"अन्तिम दस्तावेज तयार गर्ने",description:"सम्पूर्ण अनुसन्धानको शैक्षिक संरचना, एकरूपता, फर्म्याटिङ तथा प्रस्तुतीकरण समीक्षा गरिन्छ।"}] },
  };
  return { ...service, ...(map[service.slug] ?? {}) };
};

export default function ServiceDetailClient({ service }: { service: Service }) {
  const { language } = useLanguage();
  const localizedService = localizeService(service, language);
  const relatedServices = services.filter((item) => item.slug !== service.slug).map((item) => localizeService(item, language));

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-140 overflow-hidden">
        <Image
          src={localizedService.image}
          alt={localizedService.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 bg-linear-to-r from-primary/90 via-primary/70 to-primary/35" />

        <div className="relative z-10 mx-auto flex min-h-140 max-w-7xl items-center px-6 py-20 lg:px-8">
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
                {language === "en" ? "Home" : "गृहपृष्ठ"}
              </Link>

              <span className="text-white/40">/</span>

              <Link
                href="/services"
                className="text-white/65 transition-colors hover:text-accent"
              >
                {language === "en" ? "Services" : "सेवाहरू"}
              </Link>

              <span className="text-white/40">/</span>

              <span className="text-white/90">{localizedService.title}</span>
            </nav>

            <div className="flex items-center gap-4">
              {/* <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-sm font-bold text-accent backdrop-blur-sm">
                {localizedService.number}
              </span> */}

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                {language === "en" ? "Research Support" : "अनुसन्धान सहयोग"}
              </p>
            </div>

            <h1 className="mt-7 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {localizedService.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
              {localizedService.shortDescription}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform duration-200 hover:-translate-y-0.5"
              >
                {language === "en" ? "Discuss Your Requirement" : "आफ्नो आवश्यकता बारे छलफल गर्नुहोस्"}
                <span className="ml-2">→</span>
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/20"
              >
                {language === "en" ? "All Services" : "सबै सेवाहरू"}
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
              {language === "en" ? "Service Overview" : "सेवा अवलोकन"}
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {language === "en" ? "Structured support for your research." : "तपाईंको अनुसन्धानका लागि संरचित सहयोग।"}
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
              {localizedService.description}
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-muted/40 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary dark:text-accent">
              {language === "en" ? "This service includes" : "यस सेवामा समावेश छन्"}
            </p>

            <div className="mt-6 space-y-4">
              {localizedService.includes.map((item) => (
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
              {language === "en" ? "Who This Is For" : "यो कसका लागि हो"}
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {language === "en" ? "Support designed around your research stage." : "तपाईंको अनुसन्धान चरणअनुसार तयार गरिएको सहयोग।"}
            </h2>

            <p className="mt-5 leading-8 text-muted-foreground">
              {language === "en" ? "This service can be useful for students and researchers at different stages of their academic work." : "यो सेवा आफ्नो शैक्षिक कार्यका विभिन्न चरणमा रहेका विद्यार्थी तथा अनुसन्धानकर्ताहरूका लागि उपयोगी हुन सक्छ।"}
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {localizedService.suitableFor.map((item, index) => (
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
              {language === "en" ? "How We Support You" : "हामी कसरी सहयोग गर्छौं"}
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {language === "en" ? "A clear process from planning to completion." : "योजनादेखि पूरा गर्नेसम्मको स्पष्ट प्रक्रिया।"}
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {localizedService.process.map((step, index) => (
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
                {language === "en" ? "Explore More" : "थप हेर्नुहोस्"}
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {language === "en" ? "Related research support." : "सम्बन्धित अनुसन्धान सहयोग।"}
              </h2>
            </div>

            <Link
              href="/services"
              className="text-sm font-semibold text-foreground transition-colors hover:text-accent"
            >
              {language === "en" ? "View all services →" : "सबै सेवाहरू हेर्नुहोस् →"}
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedServices.slice(0, 3).map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="group overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-muted/20"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
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
            src={localizedService.image}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/20" />

        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {language === "en" ? "Start Your Research Journey" : "आफ्नो अनुसन्धान यात्रा सुरु गर्नुहोस्"}
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {language === "en" ? "Have a question about this service?" : "यस सेवाबारे प्रश्न छ?"}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/75">
            {language === "en" ? "Tell us about your research requirements and we can discuss the type of support that fits your project." : "आफ्नो अनुसन्धान आवश्यकताका बारेमा जानकारी दिनुहोस् र तपाईंको परियोजनाका लागि उपयुक्त सहयोगबारे छलफल गरौं।"}
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-transform duration-200 hover:-translate-y-0.5"
          >
            {language === "en" ? "Contact Us" : "सम्पर्क गर्नुहोस्"}
            <span className="ml-2">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
