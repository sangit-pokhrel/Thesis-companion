"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

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

  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [testimonialVisible, setTestimonialVisible] = useState(3);
  const [testimonialPaused, setTestimonialPaused] = useState(false);

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
      {
        quote:
          "Breaking the research journey into clear steps helped me stay focused throughout my project.",
        name: "Master's Student",
        role: "Research Methodology",
      },
      {
        quote:
          "The guidance made it easier to organise my ideas and turn them into a clearer research structure.",
        name: "Researcher",
        role: "Academic Writing",
      },
      {
        quote:
          "Understanding each stage of the research process gave me more confidence to move forward.",
        name: "Graduate Student",
        role: "Thesis Development",
      },
      {
        quote:
          "The support helped me connect my research questions with a more appropriate methodology.",
        name: "Research Student",
        role: "Research Methodology",
      },
      {
        quote:
          "I found it much easier to organise my literature and understand the key themes in my topic.",
        name: "Postgraduate Researcher",
        role: "Literature Review",
      },
      {
        quote:
          "The explanations were clear and practical, which helped me approach my research with greater confidence.",
        name: "University Student",
        role: "Academic Support",
      },
      {
        quote:
          "Having a structured research plan helped me manage the different parts of my thesis more effectively.",
        name: "Master's Student",
        role: "Thesis Planning",
      },
      {
        quote:
          "The research guidance helped me turn a broad idea into a clearer and more focused research direction.",
        name: "Research Student",
        role: "Research Planning",
      },
      {
        quote:
          "The support made the writing process feel more organised and helped improve the overall flow of my work.",
        name: "Postgraduate Student",
        role: "Academic Writing",
      },
      {
        quote:
          "I appreciated having each stage explained clearly instead of trying to manage the whole research process at once.",
        name: "Graduate Student",
        role: "Research Support",
      },
      {
        quote:
          "The structured approach helped me understand how different parts of my research fit together.",
        name: "University Researcher",
        role: "Academic Research",
      },
      {
        quote:
          "Clear guidance throughout the research journey helped me stay organised and make steady progress.",
        name: "Master's Researcher",
        role: "Thesis Support",
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
      {
        quote:
          "अनुसन्धान यात्रालाई स्पष्ट चरणहरूमा विभाजन गर्दा आफ्नो काममा केन्द्रित रहन धेरै सजिलो भयो।",
        name: "स्नातकोत्तर विद्यार्थी",
        role: "अनुसन्धान विधि",
      },
      {
        quote:
          "मार्गदर्शनले आफ्ना विचारहरू व्यवस्थित गर्न र स्पष्ट अनुसन्धान संरचना तयार गर्न सहयोग गर्यो।",
        name: "अनुसन्धानकर्ता",
        role: "शैक्षिक लेखन",
      },
      {
        quote:
          "अनुसन्धान प्रक्रियाको प्रत्येक चरण बुझ्दा अगाडि बढ्न थप आत्मविश्वास प्राप्त भयो।",
        name: "स्नातक विद्यार्थी",
        role: "थेसिस विकास",
      },
      {
        quote:
          "अनुसन्धान प्रश्नहरूलाई उपयुक्त अनुसन्धान विधिसँग जोड्न सहयोगले धेरै स्पष्टता दियो।",
        name: "अनुसन्धान विद्यार्थी",
        role: "अनुसन्धान विधि",
      },
      {
        quote:
          "साहित्य समीक्षा व्यवस्थित गर्न र अनुसन्धान विषयका मुख्य पक्षहरू बुझ्न धेरै सहयोग भयो।",
        name: "स्नातकोत्तर अनुसन्धानकर्ता",
        role: "साहित्य समीक्षा",
      },
      {
        quote:
          "स्पष्ट र व्यावहारिक व्याख्याले अनुसन्धान कार्यलाई आत्मविश्वासका साथ अगाडि बढाउन सहयोग गर्यो।",
        name: "विश्वविद्यालय विद्यार्थी",
        role: "शैक्षिक सहयोग",
      },
      {
        quote:
          "संरचित अनुसन्धान योजनाले थेसिसका विभिन्न भागहरूलाई प्रभावकारी रूपमा व्यवस्थापन गर्न सहयोग गर्यो।",
        name: "स्नातकोत्तर विद्यार्थी",
        role: "थेसिस योजना",
      },
      {
        quote:
          "व्यापक अनुसन्धान विचारलाई स्पष्ट र केन्द्रित अनुसन्धान दिशामा परिवर्तन गर्न मार्गदर्शनले सहयोग गर्यो।",
        name: "अनुसन्धान विद्यार्थी",
        role: "अनुसन्धान योजना",
      },
      {
        quote:
          "संरचित सहयोगले लेखन प्रक्रियालाई व्यवस्थित बनाउन र अनुसन्धान कार्यको प्रवाह सुधार गर्न सहयोग गर्यो।",
        name: "स्नातकोत्तर विद्यार्थी",
        role: "शैक्षिक लेखन",
      },
      {
        quote:
          "पूरै अनुसन्धान प्रक्रिया एकैपटक व्यवस्थापन गर्नुभन्दा प्रत्येक चरणलाई स्पष्ट रूपमा बुझ्न धेरै सजिलो भयो।",
        name: "स्नातक विद्यार्थी",
        role: "अनुसन्धान सहयोग",
      },
      {
        quote:
          "अनुसन्धानका विभिन्न भागहरू एकअर्कासँग कसरी सम्बन्धित छन् भन्ने बुझ्न संरचित दृष्टिकोणले सहयोग गर्यो।",
        name: "विश्वविद्यालय अनुसन्धानकर्ता",
        role: "शैक्षिक अनुसन्धान",
      },
      {
        quote:
          "अनुसन्धान यात्राभरि स्पष्ट मार्गदर्शन पाउँदा आफ्नो काम व्यवस्थित राख्न र निरन्तर अगाडि बढ्न सहयोग भयो।",
        name: "स्नातकोत्तर अनुसन्धानकर्ता",
        role: "थेसिस सहयोग",
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

  useEffect(() => {
    const updateVisibleTestimonials = () => {
      if (window.innerWidth < 768) {
        setTestimonialVisible(1);
      } else if (window.innerWidth < 1024) {
        setTestimonialVisible(2);
      } else {
        setTestimonialVisible(3);
      }
    };

    updateVisibleTestimonials();

    window.addEventListener("resize", updateVisibleTestimonials);

    return () => {
      window.removeEventListener("resize", updateVisibleTestimonials);
    };
  }, []);

  useEffect(() => {
    if (testimonialPaused) return;

    const maxIndex = Math.max(
      0,
      currentTestimonials.length - testimonialVisible,
    );

    const interval = setInterval(() => {
      setTestimonialIndex((current) => (current >= maxIndex ? 0 : current + 1));
    }, 3500);

    return () => clearInterval(interval);
  }, [testimonialPaused, testimonialVisible, currentTestimonials.length]);

  const goToPreviousTestimonial = () => {
    const maxIndex = Math.max(
      0,
      currentTestimonials.length - testimonialVisible,
    );

    setTestimonialIndex((current) => (current <= 0 ? maxIndex : current - 1));
  };

  const goToNextTestimonial = () => {
    const maxIndex = Math.max(
      0,
      currentTestimonials.length - testimonialVisible,
    );

    setTestimonialIndex((current) => (current >= maxIndex ? 0 : current + 1));
  };
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

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-[#07111f]/55" />

              {/* LEFT GRADIENT */}
              <div className="absolute inset-0 bg-linear-to-r from-[#07111f]/95 via-[#07111f]/65 to-[#07111f]/15" />

              {/* BOTTOM GRADIENT */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-[#07111f]/80 to-transparent" />
            </div>
          ))}
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-20 mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 pt-28 pb-20 sm:px-10 sm:pt-32 sm:pb-16 lg:px-24 lg:pt-32 lg:pb-16 xl:px-28">
          <div
            key={`${language}-${activeSlide}`}
            className="w-full max-w-xl animate-[heroContent_700ms_ease-out] sm:ml-2 sm:max-w-2xl lg:ml-6"
          >
            {/* EYEBROW */}
            <div className="mb-5 inline-flex items-center gap-2 sm:mb-7 sm:gap-3">
              <span className="h-0.5 w-7 bg-accent sm:w-10 lg:w-14" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent sm:text-xs sm:tracking-[0.2em] lg:text-sm">
                {currentHeroSlides[activeSlide].eyebrow}
              </p>
            </div>

            {/* TITLE */}
            <h1 className="max-w-[340px] text-[2rem] font-bold leading-[1.08] tracking-[-0.03em] text-white sm:max-w-xl sm:text-5xl sm:leading-[1.02] lg:text-[4.25rem] xl:text-[4.75rem]">
              {currentHeroSlides[activeSlide].title1}

              <span className="mt-1 block text-accent sm:mt-2">
                {currentHeroSlides[activeSlide].title2}
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-4 max-w-[330px] text-[13px] leading-5.5 text-white/75 sm:mt-7 sm:max-w-lg sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
              {currentHeroSlides[activeSlide].description}
            </p>

            {/* BUTTONS */}
            <div className="mt-6 flex w-full max-w-[340px] flex-col gap-3 sm:mt-9 sm:max-w-none sm:flex-row">
              <Link
                href="/services"
                className="group inline-flex h-11 items-center justify-center rounded-lg bg-accent px-5 text-sm font-semibold text-accent-foreground shadow-[0_8px_30px_rgba(245,196,0,0.16)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(245,196,0,0.28)] sm:h-12 sm:px-7"
              >
                {home.exploreServices}

                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-lg border border-white/30 bg-white/8 px-5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/50 hover:bg-white/[0.14] sm:h-12 sm:px-7"
              >
                {common.discussResearch}
              </Link>
            </div>

            {/* FEATURES */}
            <div className="mt-6 flex max-w-[340px] flex-wrap gap-x-4 gap-y-2 sm:mt-9 sm:max-w-none sm:gap-x-7 sm:gap-y-3">
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

        {/* PREVIOUS — HIDDEN ON MOBILE */}
        <button
          type="button"
          onClick={goToPrevious}
          aria-label="Previous slide"
          className="group absolute left-5 top-1/2 z-30 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/8 text-white backdrop-blur-md transition-all duration-300 hover:border-accent/60 hover:bg-accent hover:text-accent-foreground sm:flex lg:left-8 lg:h-11 lg:w-11"
        >
          <span className="text-xl transition-transform duration-300 group-hover:-translate-x-0.5">
            ‹
          </span>
        </button>

        {/* NEXT — HIDDEN ON MOBILE */}
        <button
          type="button"
          onClick={goToNext}
          aria-label="Next slide"
          className="group absolute right-5 top-1/2 z-30 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/8 text-white backdrop-blur-md transition-all duration-300 hover:border-accent/60 hover:bg-accent hover:text-accent-foreground sm:flex lg:right-8 lg:h-11 lg:w-11"
        >
          <span className="text-xl transition-transform duration-300 group-hover:translate-x-0.5">
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
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
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
              className="group inline-flex shrink-0 items-center text-sm font-semibold text-foreground transition-colors duration-200 hover:text-foreground"
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
              <Link
                key={service.number}
                href={service.href}
                className="group block h-full"
              >
                <article className="h-full overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl">
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
                    <h3 className="text-xl font-bold tracking-tight text-foreground transition-transform duration-300 group-hover:translate-x-0.5">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {service.description}
                    </p>

                    {/* Learn More Button */}
                    <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background px-5 py-2.5 text-sm font-semibold text-muted-foreground shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-primary/40 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-md">
                      {common.learnMore}
                    </span>
                  </div>
                </article>
              </Link>
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

              {/* <div className="absolute -bottom-6 -right-4 max-w-55 rounded-xl border border-border bg-background p-5 shadow-xl sm:right-6">
                <p className="text-2xl font-bold text-primary">01</p>

                <p className="mt-1 text-sm font-medium text-foreground">
                  {language === "en"
                    ? "Clear research direction"
                    : "स्पष्ट अनुसन्धान दिशा"}
                </p>
              </div> */}
            </div>

            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
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
                className="group mt-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background px-5 py-2.5 text-sm font-semibold text-muted-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary hover:text-primary-foreground hover:shadow-md"
              >
                {language === "en"
                  ? "Learn about us"
                  : "हाम्रो बारेमा जान्नुहोस्"}

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
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
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-32">
          {/* TOP INTRO */}
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                {home.whyUs}
              </p>

              <div className="mt-5 h-px w-16 bg-accent" />
            </div>

            <div className="lg:col-span-8">
              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">
                {home.whyHeading}
              </h2>
            </div>
          </div>

          {/* MAIN VISUAL AREA */}
          <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* IMAGE STACK */}
            <div className="relative flex min-h-[420px] items-center justify-center lg:col-span-7">
              <div className="group relative h-[360px] w-[85%] max-w-[560px] sm:h-[400px]">
                {/* Back Image 3 */}
                <div className="absolute left-8 top-4 h-full w-full rotate-[-6deg] overflow-hidden rounded-[2rem] border border-border bg-muted shadow-lg transition-all duration-700 ease-out group-hover:-translate-x-8 group-hover:-rotate-[10deg] group-hover:scale-[0.96]">
                  <Image
                    src={images.home.whyUs1}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 80vw, 45vw"
                    className="object-cover opacity-50 blur-[2px] transition-all duration-700 group-hover:opacity-80 group-hover:blur-0"
                  />
                </div>

                {/* Back Image 2 */}
                <div className="absolute left-4 top-2 h-full w-full rotate-[4deg] overflow-hidden rounded-[2rem] border border-border bg-muted shadow-xl transition-all duration-700 ease-out group-hover:translate-x-6 group-hover:rotate-[8deg] group-hover:scale-[0.98]">
                  <Image
                    src={images.home.whyUs2}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 80vw, 45vw"
                    className="object-cover opacity-60 blur-[1.5px] transition-all duration-700 group-hover:opacity-90 group-hover:blur-0"
                  />
                </div>

                {/* Main Image */}
                <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-border bg-muted shadow-2xl transition-all duration-700 ease-out group-hover:-translate-y-2">
                  <Image
                    src={images.home.whyUs}
                    alt={
                      language === "en"
                        ? "Student working on academic research"
                        : "शैक्षिक अनुसन्धानमा काम गर्दै विद्यार्थी"
                    }
                    fill
                    sizes="(max-width: 1024px) 85vw, 50vw"
                    className="object-cover opacity-75 blur-[1px] transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:opacity-100 group-hover:blur-0"
                  />
                </div>
              </div>
            </div>

            {/* BENEFITS / TIMELINE */}
            <div className="flex flex-col justify-between lg:col-span-5">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute bottom-5 left-[19px] top-5 w-px bg-border" />

                {currentBenefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="group relative flex gap-6 pb-8 last:pb-0"
                  >
                    {/* Timeline Number */}
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-background text-xs font-semibold text-muted-foreground shadow-sm transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-md">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Timeline Content */}
                    <div className="flex-1 pb-2 pt-1">
                      <p className="text-lg font-medium leading-7 text-foreground transition-transform duration-300 group-hover:translate-x-1">
                        {benefit}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Supporting Copy */}
              <div className="mt-10 max-w-sm">
                <p className="text-sm leading-6 text-muted-foreground">
                  {language === "en"
                    ? "From the first research idea to the final outcome, every stage is approached with clarity and purpose."
                    : "पहिलो अनुसन्धान विचारदेखि अन्तिम नतिजासम्म हरेक चरणलाई स्पष्टता र उद्देश्यका साथ अघि बढाइन्छ।"}
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM STATEMENT */}
          <div className="mt-16 flex flex-col gap-4 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {language === "en"
                ? "A better way to approach research"
                : "अनुसन्धानलाई अघि बढाउने अझ राम्रो तरिका"}
            </p>

            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />

              <span className="text-xs text-muted-foreground">
                Thesis Companion
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH AREAS */}
      <section className="bg-muted/40">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            {/* LEFT */}
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  {home.researchAreas}
                </p>
              </div>

              <h2 className="mt-5 max-w-md text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-[2.8rem]">
                {home.researchAreasHeading}
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground">
                {language === "en"
                  ? "Explore the academic disciplines we support through structured research guidance, analysis, and academic development."
                  : "संरचित अनुसन्धान मार्गदर्शन, विश्लेषण र शैक्षिक विकासमार्फत हामीले सहयोग गर्ने विभिन्न शैक्षिक क्षेत्रहरू।"}
              </p>
            </div>

            {/* RIGHT */}
            <div className="relative mx-auto w-full max-w-3xl">
              {/* ================= DESKTOP ================= */}
              <div className="relative hidden min-h-[560px] items-center justify-center md:flex">
                {/* Outer Orbit */}
                <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/70 lg:h-[540px] lg:w-[540px]" />

                {/* Inner Orbit */}
                <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/50 lg:h-[470px] lg:w-[470px]" />

                {/* Central Image */}
                <div className="group relative z-20 h-[320px] w-[320px] overflow-hidden rounded-full border-[8px] border-background bg-muted shadow-2xl lg:h-[350px] lg:w-[350px]">
                  <Image
                    src={images.home.research}
                    alt={
                      language === "en"
                        ? "Research areas"
                        : "अनुसन्धान क्षेत्रहरू"
                    }
                    fill
                    sizes="350px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-primary/65 via-primary/5 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-8 text-center">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70">
                      Research Support
                    </p>

                    <p className="mt-2 text-lg font-semibold text-white">
                      Across disciplines
                    </p>
                  </div>
                </div>

                {/* TOP */}
                {currentAreas[0] && (
                  <div className="absolute left-1/2 top-0 -translate-x-1/2">
                    <div className="group whitespace-nowrap text-center">
                      <div className="rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/30 group-hover:shadow-md">
                        {currentAreas[0]}
                      </div>

                      <div className="mx-auto mt-2 h-5 w-px bg-border" />
                    </div>
                  </div>
                )}

                {/* UPPER RIGHT */}
                {currentAreas[1] && (
                  <div className="absolute right-0 top-[17%]">
                    <div className="group flex items-center gap-3">
                      <span className="h-px w-8 bg-border transition-all duration-300 group-hover:w-12 group-hover:bg-accent" />

                      <div className="whitespace-nowrap rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/30 group-hover:shadow-md">
                        {currentAreas[1]}
                      </div>
                    </div>
                  </div>
                )}

                {/* LOWER RIGHT */}
                {currentAreas[2] && (
                  <div className="absolute bottom-[17%] right-0">
                    <div className="group flex items-center gap-3">
                      <span className="h-px w-8 bg-border transition-all duration-300 group-hover:w-12 group-hover:bg-accent" />

                      <div className="whitespace-nowrap rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/30 group-hover:shadow-md">
                        {currentAreas[2]}
                      </div>
                    </div>
                  </div>
                )}

                {/* BOTTOM */}
                {currentAreas[3] && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                    <div className="group whitespace-nowrap text-center">
                      <div className="mx-auto mb-2 h-5 w-px bg-border" />

                      <div className="rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground shadow-sm transition-all duration-300 group-hover:translate-y-1 group-hover:border-primary/30 group-hover:shadow-md">
                        {currentAreas[3]}
                      </div>
                    </div>
                  </div>
                )}

                {/* LOWER LEFT */}
                {currentAreas[4] && (
                  <div className="absolute bottom-[17%] left-0">
                    <div className="group flex items-center gap-3">
                      <div className="whitespace-nowrap rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/30 group-hover:shadow-md">
                        {currentAreas[4]}
                      </div>

                      <span className="h-px w-8 bg-border transition-all duration-300 group-hover:w-12 group-hover:bg-accent" />
                    </div>
                  </div>
                )}

                {/* UPPER LEFT */}
                {currentAreas[5] && (
                  <div className="absolute left-0 top-[17%]">
                    <div className="group flex items-center gap-3">
                      <div className="whitespace-nowrap rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/30 group-hover:shadow-md">
                        {currentAreas[5]}
                      </div>

                      <span className="h-px w-8 bg-border transition-all duration-300 group-hover:w-12 group-hover:bg-accent" />
                    </div>
                  </div>
                )}
              </div>

              {/* ================= MOBILE ================= */}
              <div className="md:hidden">
                {/* Large Central Moon */}
                <div className="relative mx-auto flex h-[330px] w-full items-center justify-center">
                  {/* Decorative curved rings */}
                  <div className="absolute h-[300px] w-[300px] rounded-full border border-border/60" />

                  <div className="absolute h-[265px] w-[265px] rounded-full border border-border/40" />

                  {/* Image */}
                  <div className="group relative z-10 h-[220px] w-[220px] overflow-hidden rounded-full border-[7px] border-background bg-muted shadow-xl">
                    <Image
                      src={images.home.research}
                      alt={
                        language === "en"
                          ? "Research areas"
                          : "अनुसन्धान क्षेत्रहरू"
                      }
                      fill
                      sizes="220px"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 p-5 text-center">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/70">
                        Research Support
                      </p>

                      <p className="mt-1 text-sm font-semibold text-white">
                        Across disciplines
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mobile Research Areas */}
                <div className="mt-6 space-y-2.5">
                  {currentAreas.map((area, index) => (
                    <div
                      key={area}
                      className={`
                  flex items-center
                  ${index % 2 === 0 ? "justify-start pl-2" : "justify-end pr-2"}
                `}
                    >
                      <div
                        className={`
                    relative
                    rounded-full
                    border border-border
                    bg-background
                    px-5 py-3
                    text-sm
                    font-semibold
                    text-foreground
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-primary/30
                    hover:shadow-md
                    ${
                      index % 2 === 0
                        ? "w-[88%] text-left"
                        : "w-[88%] text-right"
                    }
                  `}
                      >
                        {/* Small curved accent */}
                        <span
                          className={`
                      absolute top-1/2 h-px w-5 -translate-y-1/2 bg-border
                      ${index % 2 === 0 ? "-right-5" : "-left-5"}
                    `}
                        />

                        {area}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="mx-auto mt-8 max-w-xl text-center">
                <p className="text-sm leading-6 text-muted-foreground">
                  {language === "en"
                    ? "Different disciplines require different perspectives. Our support adapts to the subject, methodology, and goals of each study."
                    : "विभिन्न अनुसन्धान क्षेत्रहरूलाई फरक दृष्टिकोण आवश्यक हुन्छ। हाम्रो सहयोग प्रत्येक अध्ययनको विषय, विधि र उद्देश्यअनुसार अनुकूल हुन्छ।"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* TESTIMONIALS */}

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          {/* HEADER */}
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  {home.experiences}
                </p>
              </div>

              <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {home.experiencesHeading}
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">
                {language === "en"
                  ? "Thoughts and experiences from people who have worked through their research journey with us."
                  : "हामीसँग आफ्नो अनुसन्धान यात्रामा काम गरेका व्यक्तिहरूका अनुभवहरू।"}
              </p>
            </div>

            {/* Desktop Counter */}
            <div className="hidden items-center gap-3 text-xs font-medium tracking-[0.15em] text-muted-foreground sm:flex">
              <span>{String(testimonialIndex + 1).padStart(2, "0")}</span>

              <span className="h-px w-8 bg-border" />

              <span>{String(currentTestimonials.length).padStart(2, "0")}</span>
            </div>
          </div>

          {/* CAROUSEL */}
          <div
            className="relative mt-12 overflow-hidden"
            onMouseEnter={() => setTestimonialPaused(true)}
            onMouseLeave={() => setTestimonialPaused(false)}
          >
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${
                  testimonialIndex * (100 / testimonialVisible)
                }%)`,
              }}
            >
              {currentTestimonials.map((testimonial, index) => {
                /*
                 * 15 testimonials:
                 * 3 → 3 stars
                 * 6 → 4 stars
                 * 6 → 5 stars
                 *
                 * The pattern is distributed rather than putting
                 * all 3-star reviews together.
                 */
                const ratingPattern = [
                  5, 4, 5, 4, 3, 5, 4, 5, 4, 3, 5, 4, 5, 4, 3,
                ];

                const rating = ratingPattern[index % ratingPattern.length];

                return (
                  <div
                    key={`${testimonial.name}-${index}`}
                    className="w-full shrink-0 basis-full px-2 md:basis-1/2 lg:basis-1/3"
                  >
                    <figure className="group relative flex h-full min-h-[350px] flex-col justify-between overflow-hidden rounded-[1.75rem] border border-border bg-muted/30 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/20 hover:bg-muted/50 hover:shadow-xl sm:p-9">
                      {/* Top Accent */}
                      <div className="absolute left-0 top-0 h-1 w-0 bg-accent transition-all duration-500 group-hover:w-full" />

                      {/* Large Quote */}
                      <div className="pointer-events-none absolute right-6 top-1 select-none font-serif text-[100px] leading-none text-accent/10 transition-colors duration-500 group-hover:text-accent/20">
                        “
                      </div>

                      {/* REVIEW */}
                      <div className="relative z-10">
                        {/* Stars */}
                        <div
                          className="flex items-center gap-1"
                          aria-label={`${rating} out of 5 stars`}
                        >
                          {[1, 2, 3, 4, 5].map((starNumber) => (
                            <Star
                              key={starNumber}
                              size={16}
                              strokeWidth={1.8}
                              className={
                                starNumber <= rating
                                  ? "fill-accent text-accent"
                                  : "text-border"
                              }
                            />
                          ))}
                        </div>

                        {/* Review Text */}
                        <blockquote className="mt-7 text-[17px] leading-8 text-foreground sm:text-lg">
                          “{testimonial.quote}”
                        </blockquote>
                      </div>

                      {/* AUTHOR */}
                      <figcaption className="relative z-10 mt-10 border-t border-border pt-6">
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <p className="text-sm font-semibold text-foreground">
                              {testimonial.name}
                            </p>

                            <p className="mt-1 text-xs leading-5 text-muted-foreground">
                              {testimonial.role}
                            </p>
                          </div>

                        
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CONTROLS */}
          <div className="mt-8 flex flex-col items-center gap-5 sm:flex-row sm:items-center sm:justify-between">
            {/* Moving Notifier / Progress */}
            <div className="order-2 flex items-center gap-2 sm:order-1">
              {currentTestimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to testimonial ${index + 1}`}
                  onClick={() => {
                    const maxIndex = Math.max(
                      0,
                      currentTestimonials.length - testimonialVisible,
                    );

                    setTestimonialIndex(Math.min(index, maxIndex));
                  }}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    index >= testimonialIndex &&
                    index < testimonialIndex + testimonialVisible
                      ? "w-8 bg-primary"
                      : "w-2 bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="order-1 flex items-center justify-center gap-2 sm:order-2">
              <button
                type="button"
                onClick={goToPreviousTestimonial}
                aria-label="Previous testimonials"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all duration-300 hover:-translate-x-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <ArrowLeft size={18} strokeWidth={1.8} />
              </button>

              <button
                type="button"
                onClick={goToNextTestimonial}
                aria-label="Next testimonials"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all duration-300 hover:translate-x-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <ArrowRight size={18} strokeWidth={1.8} />
              </button>
            </div>
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
