export type Language = "en" | "ne";

export const languages = {
  en: {
    label: "English",
    shortLabel: "EN",
  },
  ne: {
    label: "नेपाली",
    shortLabel: "ने",
  },
} as const;

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      resources: "Resources",
      contact: "Contact",
      getStarted: "Get Started",
    },

    common: {
      learnMore: "Learn more",
      readGuide: "Read guide",
      contactUs: "Contact Us",
      getStarted: "Get Started",
      discussResearch: "Talk About Your Research",
      comingSoon: "Coming soon",
    },

    footer: {
      description:
        "Professional thesis and research support for students and researchers.",
      quickLinks: "Quick Links",
      getInTouch: "Get in touch",
      contactText:
        "Have a research project or thesis requirement?",
      discuss: "Let's discuss it.",
      allRights:
        "All rights reserved.",
    },

    home: {
      badge: "Thesis & Research Support",
      heroTitle1: "Your Research.",
      heroTitle2: "Our Expertise.",
      heroDescription:
        "Professional support for your thesis, dissertation, research proposal, methodology, literature review, data analysis, and academic writing.",
      exploreServices: "Explore Services",

      researchJourney: "Research Journey",
      fromIdea: "From idea to submission",

      whatWeSupport: "What We Support",
      servicesHeading:
        "Everything you need to move your research forward.",
      viewAllServices: "View all services",

      howItWorks: "How It Works",
      processHeading:
        "A clear process from research idea to final submission.",

      whyUs: "Why Thesis Companion",
      whyHeading:
        "Research support designed around clarity and structure.",

      researchAreas: "Research Areas",
      researchAreasHeading:
        "Support across different academic disciplines.",

      experiences: "Student Experiences",
      experiencesHeading:
        "Support that makes the research process clearer.",

      faq: "FAQ",
      faqHeading: "Frequently asked questions",

      finalCtaLabel: "Start Your Research Journey",
      finalCtaHeading:
        "Have a thesis, dissertation, or research project in mind?",
      finalCtaText:
        "Tell us where you are in your research journey and what kind of support you need.",
    },

    about: {
      label: "About Thesis Companion",
      title: "Helping make the research journey clearer.",
      description:
        "Thesis Companion provides structured academic and research support for students and researchers working through the different stages of a research project.",

      whoWeAre: "Who We Are",
      heading:
        "Research support built around your requirements.",

      approach: "Our Approach",
      approachHeading:
        "Four principles behind our support.",

      journey: "The Research Journey",
      journeyHeading:
        "From an initial idea to a completed research project.",

      support: "What We Support",
      supportHeading:
        "Support across the major stages of research.",

      ctaLabel: "Have a Research Requirement?",
      ctaHeading:
        "Let's talk about your research project.",
    },

    services: {
      label: "Our Services",
      title: "Support for every major stage of your research.",
      description:
        "From your first research idea to the final submission, explore support designed around the different requirements of academic research.",

      offer: "What We Offer",
      offerHeading:
        "Choose the support your research needs.",

      journey: "Research Journey",
      journeyHeading:
        "Support can begin wherever you are.",

      approach: "Our Approach",
      approachHeading:
        "Support that stays focused on your research.",

      ctaLabel: "Need Research Support?",
      ctaHeading:
        "Not sure which service is right for your project?",
    },

    resources: {
      label: "Research Resources",
      title: "Practical resources for your research journey.",
      description:
        "Explore practical guides and educational resources covering research planning, proposals, literature reviews, methodology, data analysis, and academic writing.",

      featured: "Featured Resources",
      featuredHeading: "Start with the fundamentals.",
      browse: "Browse by Topic",
      browseHeading:
        "Find resources for each stage of research.",

      library: "Resource Library",
      libraryHeading:
        "More research guides are on the way.",

      ctaLabel: "Need More Than a Guide?",
      ctaHeading:
        "Get support for your own research project.",
    },

    contact: {
      label: "Contact",
      title: "Tell us about your research.",
      description:
        "Share your requirements and we will use the information to understand how we can support your research project.",

      start: "Start a Conversation",
      heading: "Let's discuss your project",

      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      academicLevel: "Academic Level",
      service: "Service Required",
      message: "Tell us about your requirement",

      namePlaceholder: "Your name",
      emailPlaceholder: "you@example.com",
      phonePlaceholder: "Your phone number",
      levelPlaceholder: "Select level",
      servicePlaceholder: "Select a service",
      messagePlaceholder:
        "Briefly describe your research topic, current stage, and what support you need.",

      submit: "Submit Enquiry",
      thankYou: "Thank you",
      received:
        "Your enquiry has been received. We will review your requirements and get back to you.",
      another: "Submit another enquiry",
    },
  },

  ne: {
    nav: {
      home: "गृहपृष्ठ",
      about: "हाम्रो बारेमा",
      services: "सेवाहरू",
      resources: "स्रोतहरू",
      contact: "सम्पर्क",
      getStarted: "सुरु गर्नुहोस्",
    },

    common: {
      learnMore: "थप जान्नुहोस्",
      readGuide: "गाइड पढ्नुहोस्",
      contactUs: "सम्पर्क गर्नुहोस्",
      getStarted: "सुरु गर्नुहोस्",
      discussResearch: "आफ्नो अनुसन्धानबारे कुरा गर्नुहोस्",
      comingSoon: "चाँडै उपलब्ध हुँदैछ",
    },

    footer: {
      description:
        "विद्यार्थी तथा अनुसन्धानकर्ताहरूका लागि व्यावसायिक थेसिस तथा अनुसन्धान सहयोग।",
      quickLinks: "द्रुत लिङ्कहरू",
      getInTouch: "सम्पर्क गर्नुहोस्",
      contactText:
        "तपाईंको अनुसन्धान परियोजना वा थेसिससम्बन्धी आवश्यकता छ?",
      discuss: "हामीसँग छलफल गर्नुहोस्।",
      allRights: "सर्वाधिकार सुरक्षित।",
    },

    home: {
      badge: "थेसिस तथा अनुसन्धान सहयोग",
      heroTitle1: "तपाईंको अनुसन्धान।",
      heroTitle2: "हाम्रो विशेषज्ञता।",
      heroDescription:
        "थेसिस, डिसर्टेसन, अनुसन्धान प्रस्ताव, अनुसन्धान विधि, साहित्य समीक्षा, डाटा विश्लेषण तथा शैक्षिक लेखनका लागि व्यावसायिक सहयोग।",
      exploreServices: "सेवाहरू हेर्नुहोस्",

      researchJourney: "अनुसन्धान यात्रा",
      fromIdea: "विचारदेखि अन्तिम पेशासम्म",

      whatWeSupport: "हामी केमा सहयोग गर्छौं",
      servicesHeading:
        "तपाईंको अनुसन्धानलाई अगाडि बढाउन आवश्यक सहयोग।",
      viewAllServices: "सबै सेवाहरू हेर्नुहोस्",

      howItWorks: "कसरी काम गर्छ",
      processHeading:
        "अनुसन्धानको विचारदेखि अन्तिम पेशासम्म स्पष्ट प्रक्रिया।",

      whyUs: "Thesis Companion किन?",
      whyHeading:
        "स्पष्टता र संरचनामा आधारित अनुसन्धान सहयोग।",

      researchAreas: "अनुसन्धानका क्षेत्रहरू",
      researchAreasHeading:
        "विभिन्न शैक्षिक क्षेत्रमा अनुसन्धान सहयोग।",

      experiences: "विद्यार्थी अनुभव",
      experiencesHeading:
        "अनुसन्धान प्रक्रियालाई अझ स्पष्ट बनाउने सहयोग।",

      faq: "सोधिने प्रश्नहरू",
      faqHeading: "बारम्बार सोधिने प्रश्नहरू",

      finalCtaLabel: "आफ्नो अनुसन्धान यात्रा सुरु गर्नुहोस्",
      finalCtaHeading:
        "तपाईंको थेसिस, डिसर्टेसन वा अनुसन्धान परियोजना छ?",
      finalCtaText:
        "तपाईं अनुसन्धानको कुन चरणमा हुनुहुन्छ र कस्तो सहयोग चाहिन्छ भन्ने जानकारी दिनुहोस्।",
    },

    about: {
      label: "Thesis Companion को बारेमा",
      title: "अनुसन्धान यात्रालाई अझ स्पष्ट बनाउन सहयोग।",
      description:
        "Thesis Companion ले अनुसन्धान परियोजनाका विभिन्न चरणमा रहेका विद्यार्थी तथा अनुसन्धानकर्ताहरूलाई संरचित शैक्षिक तथा अनुसन्धान सहयोग प्रदान गर्दछ।",

      whoWeAre: "हामी को हौं",
      heading:
        "तपाईंको आवश्यकतामा आधारित अनुसन्धान सहयोग।",

      approach: "हाम्रो दृष्टिकोण",
      approachHeading:
        "हाम्रो सहयोगका चार मुख्य आधार।",

      journey: "अनुसन्धान यात्रा",
      journeyHeading:
        "प्रारम्भिक विचारदेखि पूर्ण अनुसन्धान परियोजनासम्म।",

      support: "हामी केमा सहयोग गर्छौं",
      supportHeading:
        "अनुसन्धानका प्रमुख चरणहरूमा सहयोग।",

      ctaLabel: "अनुसन्धानसम्बन्धी आवश्यकता छ?",
      ctaHeading:
        "तपाईंको अनुसन्धान परियोजनाबारे छलफल गरौं।",
    },

    services: {
      label: "हाम्रा सेवाहरू",
      title: "अनुसन्धानका प्रमुख चरणहरूमा सहयोग।",
      description:
        "अनुसन्धानको प्रारम्भिक विचारदेखि अन्तिम पेशासम्म शैक्षिक अनुसन्धानका विभिन्न आवश्यकताअनुसार सहयोग।",

      offer: "हामीले प्रदान गर्ने सेवाहरू",
      offerHeading:
        "तपाईंको अनुसन्धानलाई आवश्यक पर्ने सहयोग छनोट गर्नुहोस्।",

      journey: "अनुसन्धान यात्रा",
      journeyHeading:
        "तपाईं जहाँ हुनुहुन्छ, त्यहीँबाट सहयोग सुरु गर्न सकिन्छ।",

      approach: "हाम्रो दृष्टिकोण",
      approachHeading:
        "तपाईंको अनुसन्धानमा केन्द्रित सहयोग।",

      ctaLabel: "अनुसन्धान सहयोग चाहिन्छ?",
      ctaHeading:
        "तपाईंको परियोजनाका लागि कुन सेवा आवश्यक छ भन्ने निश्चित छैन?",
    },

    resources: {
      label: "अनुसन्धान स्रोतहरू",
      title: "तपाईंको अनुसन्धान यात्राका लागि उपयोगी स्रोतहरू।",
      description:
        "अनुसन्धान योजना, प्रस्ताव, साहित्य समीक्षा, अनुसन्धान विधि, डाटा विश्लेषण तथा शैक्षिक लेखनसम्बन्धी व्यावहारिक गाइडहरू।",

      featured: "विशेष स्रोतहरू",
      featuredHeading: "आधारभूत विषयहरूबाट सुरु गर्नुहोस्।",

      browse: "विषयअनुसार हेर्नुहोस्",
      browseHeading:
        "अनुसन्धानका प्रत्येक चरणका लागि स्रोतहरू खोज्नुहोस्।",

      library: "स्रोत पुस्तकालय",
      libraryHeading:
        "थप अनुसन्धान गाइडहरू चाँडै उपलब्ध हुँदैछन्।",

      ctaLabel: "गाइडभन्दा बढी सहयोग चाहिन्छ?",
      ctaHeading:
        "आफ्नो अनुसन्धान परियोजनाका लागि सहयोग प्राप्त गर्नुहोस्।",
    },

    contact: {
      label: "सम्पर्क",
      title: "आफ्नो अनुसन्धानबारे हामीलाई बताउनुहोस्।",
      description:
        "आफ्नो आवश्यकता साझा गर्नुहोस् ताकि तपाईंको अनुसन्धान परियोजनाका लागि आवश्यक सहयोग बुझ्न सकियोस्।",

      start: "कुराकानी सुरु गर्नुहोस्",
      heading: "तपाईंको परियोजनाबारे छलफल गरौं",

      name: "पूरा नाम",
      email: "इमेल ठेगाना",
      phone: "फोन नम्बर",
      academicLevel: "शैक्षिक तह",
      service: "आवश्यक सेवा",
      message: "आफ्नो आवश्यकताबारे बताउनुहोस्",

      namePlaceholder: "तपाईंको नाम",
      emailPlaceholder: "you@example.com",
      phonePlaceholder: "तपाईंको फोन नम्बर",
      levelPlaceholder: "तह छान्नुहोस्",
      servicePlaceholder: "सेवा छान्नुहोस्",
      messagePlaceholder:
        "आफ्नो अनुसन्धान विषय, हालको चरण र आवश्यक सहयोगबारे छोटकरीमा लेख्नुहोस्।",

      submit: "अनुरोध पठाउनुहोस्",
      thankYou: "धन्यवाद",
      received:
        "तपाईंको अनुरोध प्राप्त भएको छ। हामी तपाईंको आवश्यकताको समीक्षा गरेर सम्पर्क गर्नेछौं।",
      another: "अर्को अनुरोध पठाउनुहोस्",
    },
  },
} as const;