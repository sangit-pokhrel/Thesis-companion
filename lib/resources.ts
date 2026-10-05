export type ResourceSection = {
  heading: string;
  content: string;
};

export type ResourceGuide = {
  slug: string;
  image: string;
  number: string;
  category: {
    en: string;
    ne: string;
  };
  readTime: {
    en: string;
    ne: string;
  };
  en: {
    title: string;
    description: string;
    sections: ResourceSection[];
    checklist: string[];
  };
  ne: {
    title: string;
    description: string;
    sections: ResourceSection[];
    checklist: string[];
  };
};

export const resourceGuides: ResourceGuide[] = [
  {
    slug: "how-to-choose-a-research-topic",
    image: "/images/resources/research.jpg",
    number: "01",
    category: {
      en: "Research Planning",
      ne: "अनुसन्धान योजना",
    },
    readTime: {
      en: "8 min read",
      ne: "८ मिनेट पढ्ने समय",
    },
    en: {
      title: "How to Choose a Research Topic",
      description:
        "Learn how to identify, narrow, and develop a focused research topic that is relevant, manageable, and suitable for academic research.",
      sections: [
        {
          heading: "Start With a Broad Research Area",
          content:
            "Begin with an academic area that interests you or connects with your course, discipline, professional experience, or previous study. At this stage, the goal is to identify a general area rather than immediately choosing a final title.",
        },
        {
          heading: "Explore Existing Research",
          content:
            "Read recent journal articles, theses, dissertations, reports, and other reliable academic sources. Look for recurring problems, unanswered questions, conflicting findings, and areas where researchers suggest further study.",
        },
        {
          heading: "Narrow the Topic",
          content:
            "A useful research topic should be specific enough to study within your available time and resources. You can narrow a broad area by considering a population, location, variable, organisation, time period, or particular research problem.",
        },
        {
          heading: "Check Research Feasibility",
          content:
            "Before finalising a topic, consider access to participants or data, available literature, ethical requirements, research skills, software or equipment, budget, and the time available for completing the study.",
        },
        {
          heading: "Turn the Topic Into a Research Problem",
          content:
            "A topic is not the same as a research problem. A strong research problem explains what needs to be understood, investigated, compared, evaluated, or improved. It should provide a clear direction for your research objectives and questions.",
        },
      ],
      checklist: [
        "The topic is focused rather than too broad.",
        "The topic is relevant to your academic discipline.",
        "Recent and credible literature is available.",
        "The required data or participants can be accessed.",
        "The study can be completed within your available time and resources.",
        "The topic can lead to clear research objectives and questions.",
      ],
    },
    ne: {
      title: "अनुसन्धान विषय कसरी छनोट गर्ने",
      description:
        "सान्दर्भिक, व्यवस्थापन गर्न सकिने र शैक्षिक अनुसन्धानका लागि उपयुक्त अनुसन्धान विषय कसरी पहिचान, सीमित र विकास गर्ने भन्ने जान्नुहोस्।",
      sections: [
        {
          heading: "व्यापक अनुसन्धान क्षेत्रबाट सुरु गर्नुहोस्",
          content:
            "तपाईंलाई रुचि भएको वा तपाईंको विषय, अध्ययन, पेशागत अनुभव वा शैक्षिक पृष्ठभूमिसँग सम्बन्धित अनुसन्धान क्षेत्रबाट सुरु गर्नुहोस्। यस चरणमा तुरुन्तै अन्तिम शीर्षक छनोट गर्नुको सट्टा सामान्य अनुसन्धान क्षेत्र पहिचान गर्ने उद्देश्य राख्नुहोस्।",
        },
        {
          heading: "पहिले भएका अनुसन्धानहरू अध्ययन गर्नुहोस्",
          content:
            "हालका जर्नल लेख, थेसिस, डिसर्टेसन, प्रतिवेदन तथा अन्य विश्वसनीय शैक्षिक स्रोतहरू अध्ययन गर्नुहोस्। बारम्बार देखिने समस्या, अनुत्तरित प्रश्न, फरक नतिजा तथा थप अनुसन्धान आवश्यक रहेको उल्लेख भएका क्षेत्रहरू पहिचान गर्नुहोस्।",
        },
        {
          heading: "अनुसन्धान विषयलाई सीमित गर्नुहोस्",
          content:
            "राम्रो अनुसन्धान विषय तपाईंको उपलब्ध समय र स्रोतभित्र अध्ययन गर्न सकिने गरी स्पष्ट र केन्द्रित हुनुपर्छ। जनसंख्या, स्थान, चर, संस्था, समयावधि वा विशेष अनुसन्धान समस्याका आधारमा व्यापक विषयलाई सीमित गर्न सकिन्छ।",
        },
        {
          heading: "अनुसन्धानको सम्भाव्यता जाँच गर्नुहोस्",
          content:
            "विषय अन्तिम गर्नुअघि सहभागी वा डाटामा पहुँच, उपलब्ध साहित्य, नैतिक आवश्यकता, अनुसन्धान सीप, सफ्टवेयर वा उपकरण, बजेट तथा अध्ययन पूरा गर्न उपलब्ध समय विचार गर्नुहोस्।",
        },
        {
          heading: "विषयलाई अनुसन्धान समस्यामा विकास गर्नुहोस्",
          content:
            "अनुसन्धान विषय र अनुसन्धान समस्या एउटै कुरा होइनन्। राम्रो अनुसन्धान समस्याले के बुझ्न, अध्ययन गर्न, तुलना गर्न, मूल्याङ्कन गर्न वा सुधार गर्न आवश्यक छ भन्ने स्पष्ट गर्छ। यसले अनुसन्धानका उद्देश्य र प्रश्नका लागि स्पष्ट दिशा दिनुपर्छ।",
        },
      ],
      checklist: [
        "विषय अत्यधिक व्यापक नभई केन्द्रित छ।",
        "विषय तपाईंको शैक्षिक क्षेत्रसँग सान्दर्भिक छ।",
        "विश्वसनीय र हालका साहित्यिक स्रोतहरू उपलब्ध छन्।",
        "आवश्यक डाटा वा सहभागीमा पहुँच प्राप्त गर्न सकिन्छ।",
        "उपलब्ध समय र स्रोतभित्र अध्ययन पूरा गर्न सकिन्छ।",
        "विषयबाट स्पष्ट अनुसन्धान उद्देश्य र प्रश्न बनाउन सकिन्छ।",
      ],
    },
  },
  {
    slug: "how-to-write-a-research-proposal",
    image: "/images/resources/proposal.jpg",
    number: "02",
    category: {
      en: "Research Proposals",
      ne: "अनुसन्धान प्रस्ताव",
    },
    readTime: {
      en: "10 min read",
      ne: "१० मिनेट पढ्ने समय",
    },
    en: {
      title: "How to Write a Research Proposal",
      description:
        "Understand the main components of a research proposal and learn how to present your research problem, objectives, methodology, and expected contribution clearly.",
      sections: [
        {
          heading: "Understand the Purpose of a Proposal",
          content:
            "A research proposal explains what you plan to study, why the study matters, and how you intend to conduct it. University requirements differ, so always use your department or programme guidelines alongside general academic principles.",
        },
        {
          heading: "Develop a Clear Problem Statement",
          content:
            "The problem statement should establish the context of the study and clearly explain the issue or gap that requires investigation. Support important claims with appropriate academic sources rather than relying only on general statements.",
        },
        {
          heading: "Write Objectives and Research Questions",
          content:
            "Research objectives describe what the study intends to achieve. Research questions translate those objectives into questions that the study can answer. The objectives, questions, methods, and analysis should remain logically connected.",
        },
        {
          heading: "Plan the Methodology",
          content:
            "Explain the research approach, design, population or data source, sampling strategy where relevant, data collection methods, analysis plan, and ethical considerations. The methodology should be appropriate for answering your research questions.",
        },
        {
          heading: "Build a Coherent Proposal",
          content:
            "Review the proposal as one connected argument. The background should lead to the problem, the problem should support the objectives and questions, and the methodology should show how those questions will be answered.",
        },
      ],
      checklist: [
        "The research problem is clearly explained.",
        "The proposal follows the required university structure.",
        "Objectives and research questions are aligned.",
        "The methodology can answer the research questions.",
        "Ethical and practical issues have been considered.",
        "References and formatting follow the required academic style.",
      ],
    },
    ne: {
      title: "अनुसन्धान प्रस्ताव कसरी लेख्ने",
      description:
        "अनुसन्धान समस्यादेखि उद्देश्य, अनुसन्धान विधि र अपेक्षित योगदानसम्म अनुसन्धान प्रस्तावका प्रमुख भागहरू स्पष्ट रूपमा प्रस्तुत गर्ने तरिका बुझ्नुहोस्।",
      sections: [
        {
          heading: "अनुसन्धान प्रस्तावको उद्देश्य बुझ्नुहोस्",
          content:
            "अनुसन्धान प्रस्तावले तपाईंले के अध्ययन गर्न चाहनुहुन्छ, अध्ययन किन महत्त्वपूर्ण छ र अध्ययन कसरी सञ्चालन गर्ने योजना छ भन्ने स्पष्ट गर्छ। विश्वविद्यालय तथा विभागअनुसार आवश्यकताहरू फरक हुन सक्छन्, त्यसैले सामान्य शैक्षिक सिद्धान्तसँगै सम्बन्धित निर्देशन पनि हेर्नुहोस्।",
        },
        {
          heading: "स्पष्ट समस्या कथन विकास गर्नुहोस्",
          content:
            "समस्या कथनले अध्ययनको सन्दर्भ स्थापना गर्दै अनुसन्धान गर्नुपर्ने समस्या वा ज्ञानको खाली ठाउँ स्पष्ट गर्नुपर्छ। महत्त्वपूर्ण दाबीहरूलाई उपयुक्त शैक्षिक स्रोतबाट समर्थन गर्नुहोस्।",
        },
        {
          heading: "उद्देश्य र अनुसन्धान प्रश्न लेख्नुहोस्",
          content:
            "अनुसन्धान उद्देश्यले अध्ययनले हासिल गर्न खोजेको कुरा बताउँछ। अनुसन्धान प्रश्नले ती उद्देश्यलाई अध्ययनले उत्तर दिन सक्ने प्रश्नमा रूपान्तरण गर्छ। उद्देश्य, प्रश्न, अनुसन्धान विधि र विश्लेषणबीच तार्किक सम्बन्ध हुनुपर्छ।",
        },
        {
          heading: "अनुसन्धान विधिको योजना बनाउनुहोस्",
          content:
            "अनुसन्धानको दृष्टिकोण, डिजाइन, जनसंख्या वा डाटाको स्रोत, आवश्यक भएमा नमुना छनोट, डाटा सङ्कलन विधि, विश्लेषण योजना र नैतिक पक्ष स्पष्ट गर्नुहोस्। अनुसन्धान विधि अनुसन्धान प्रश्नको उत्तर दिन उपयुक्त हुनुपर्छ।",
        },
        {
          heading: "समग्र र सुसंगत प्रस्ताव तयार गर्नुहोस्",
          content:
            "सम्पूर्ण प्रस्तावलाई एउटै तार्किक संरचनाका रूपमा समीक्षा गर्नुहोस्। पृष्ठभूमिबाट समस्या, समस्याबाट उद्देश्य र प्रश्न, तथा प्रश्नबाट अनुसन्धान विधितर्फ स्पष्ट सम्बन्ध देखिनुपर्छ।",
        },
      ],
      checklist: [
        "अनुसन्धान समस्या स्पष्ट रूपमा व्याख्या गरिएको छ।",
        "विश्वविद्यालयले तोकेको संरचना पालना गरिएको छ।",
        "उद्देश्य र अनुसन्धान प्रश्नबीच सम्बन्ध छ।",
        "अनुसन्धान विधिले अनुसन्धान प्रश्नको उत्तर दिन सक्छ।",
        "नैतिक तथा व्यावहारिक पक्ष विचार गरिएको छ।",
        "सन्दर्भ र फर्म्याटिङ आवश्यक शैक्षिक शैलीअनुसार छन्।",
      ],
    },
  },
  {
    slug: "research-methodology",
    image: "/images/resources/method.jpg",
    number: "03",
    category: {
      en: "Methodology",
      ne: "अनुसन्धान विधि",
    },
    readTime: {
      en: "9 min read",
      ne: "९ मिनेट पढ्ने समय",
    },
    en: {
      title: "Understanding Research Methodology",
      description:
        "Learn how research approach, design, data collection, sampling, analysis, and ethics fit together in a research study.",
      sections: [
        {
          heading: "What Is Research Methodology?",
          content:
            "Research methodology explains the overall logic and methods used to answer research questions. It is broader than simply naming a statistical test or data collection technique; it explains why particular methods are appropriate for the study.",
        },
        {
          heading: "Choose an Appropriate Research Approach",
          content:
            "Common approaches include quantitative, qualitative, and mixed-method research. The choice should follow the research problem and questions rather than being selected only because a method is familiar or convenient.",
        },
        {
          heading: "Select the Research Design",
          content:
            "Research design provides the structure for conducting the study. Depending on the research purpose, designs may involve descriptive, exploratory, experimental, case study, survey, phenomenological, or other approaches.",
        },
        {
          heading: "Plan Data Collection and Sampling",
          content:
            "Explain what data are needed, where they will come from, how participants or cases will be selected, and how information will be collected. Sampling decisions should be consistent with the research design and study population.",
        },
        {
          heading: "Connect Methodology With Analysis",
          content:
            "Your analysis plan should follow from the research questions and the type of data collected. Explain how the data will be prepared, analysed, and interpreted, and make sure the planned analysis can address the study objectives.",
        },
      ],
      checklist: [
        "The research approach matches the research questions.",
        "The research design is clearly justified.",
        "The population, sample, or data source is defined.",
        "Data collection procedures are explained.",
        "The analysis plan matches the type of data.",
        "Ethical considerations and limitations are addressed.",
      ],
    },
    ne: {
      title: "अनुसन्धान विधि बुझ्नुहोस्",
      description:
        "अनुसन्धान दृष्टिकोण, डिजाइन, डाटा सङ्कलन, नमुना छनोट, विश्लेषण र नैतिक पक्षहरू अनुसन्धानमा कसरी जोडिन्छन् भन्ने बुझ्नुहोस्।",
      sections: [
        {
          heading: "अनुसन्धान विधि भनेको के हो?",
          content:
            "अनुसन्धान विधिले अनुसन्धान प्रश्नको उत्तर दिन प्रयोग गरिने समग्र तर्क र विधिहरू स्पष्ट गर्छ। यो केवल कुनै तथ्याङ्कीय परीक्षण वा डाटा सङ्कलन प्रविधिको नाम होइन; विशेष विधि अध्ययनका लागि किन उपयुक्त छ भन्ने पनि यसले देखाउँछ।",
        },
        {
          heading: "उपयुक्त अनुसन्धान दृष्टिकोण छनोट गर्नुहोस्",
          content:
            "सामान्य अनुसन्धान दृष्टिकोणमा परिमाणात्मक, गुणात्मक र मिश्रित विधि पर्छन्। दृष्टिकोण अनुसन्धान समस्या र प्रश्नअनुसार छनोट गर्नुपर्छ, केवल परिचित वा सजिलो भएको कारणले होइन।",
        },
        {
          heading: "अनुसन्धान डिजाइन छनोट गर्नुहोस्",
          content:
            "अनुसन्धान डिजाइनले अध्ययन कसरी सञ्चालन गर्ने भन्ने संरचना दिन्छ। अनुसन्धानको उद्देश्यअनुसार वर्णनात्मक, अन्वेषणात्मक, प्रयोगात्मक, केस स्टडी, सर्वेक्षण, फेनोमेनोलोजिकल वा अन्य डिजाइन प्रयोग हुन सक्छन्।",
        },
        {
          heading: "डाटा सङ्कलन र नमुना छनोटको योजना बनाउनुहोस्",
          content:
            "कस्तो डाटा आवश्यक छ, डाटा कहाँबाट प्राप्त हुन्छ, सहभागी वा केस कसरी छनोट हुन्छन् र जानकारी कसरी सङ्कलन गरिन्छ भन्ने स्पष्ट गर्नुहोस्। नमुना छनोट अनुसन्धान डिजाइन र अध्ययन जनसंख्यासँग मिल्दो हुनुपर्छ।",
        },
        {
          heading: "अनुसन्धान विधिलाई डाटा विश्लेषणसँग जोड्नुहोस्",
          content:
            "डाटा विश्लेषण योजना अनुसन्धान प्रश्न र सङ्कलित डाटाको प्रकारमा आधारित हुनुपर्छ। डाटा कसरी तयार, विश्लेषण र व्याख्या गरिन्छ भन्ने स्पष्ट गर्नुहोस् र विश्लेषणले अनुसन्धान उद्देश्य पूरा गर्न सक्ने सुनिश्चित गर्नुहोस्।",
        },
      ],
      checklist: [
        "अनुसन्धान दृष्टिकोण अनुसन्धान प्रश्नसँग मिल्छ।",
        "अनुसन्धान डिजाइनको स्पष्ट आधार दिइएको छ।",
        "जनसंख्या, नमुना वा डाटाको स्रोत स्पष्ट छ।",
        "डाटा सङ्कलन प्रक्रिया व्याख्या गरिएको छ।",
        "डाटा विश्लेषण योजना डाटाको प्रकारसँग मिल्छ।",
        "नैतिक पक्ष र सीमितताहरू उल्लेख गरिएको छ।",
      ],
    },
  },
  {
    slug: "how-to-write-a-literature-review",
    image: "/images/resources/literature-review.jpg",
    number: "04",
    category: {
      en: "Literature Review",
      ne: "साहित्य समीक्षा",
    },
    readTime: {
      en: "10 min read",
      ne: "१० मिनेट पढ्ने समय",
    },
    en: {
      title: "How to Write a Literature Review",
      description:
        "Learn how to find, organise, compare, and synthesise academic literature to build a strong foundation for your research.",
      sections: [
        {
          heading: "Understand the Purpose of a Literature Review",
          content:
            "A literature review does more than list previous studies. It shows what is already known, how researchers have approached the topic, where findings agree or differ, and what gaps remain relevant to your study.",
        },
        {
          heading: "Search for Relevant Academic Sources",
          content:
            "Use appropriate academic databases, journals, books, theses, dissertations, and reliable institutional sources. Start with keywords connected to your research problem and refine the search as you learn more about the field.",
        },
        {
          heading: "Organise the Literature",
          content:
            "You can organise sources by themes, concepts, chronology, methodology, theoretical perspective, or another structure that supports your research question. Keep accurate notes about each source while reading.",
        },
        {
          heading: "Compare and Synthesise",
          content:
            "Move beyond summarising one source at a time. Compare studies, identify patterns and differences, discuss methodological strengths or limitations, and explain how the literature relates to your research problem.",
        },
        {
          heading: "Identify the Research Gap",
          content:
            "The review should lead toward a clear explanation of what remains unknown, underexplored, inconsistent, or contextually important. That gap should connect directly to the purpose of your research.",
        },
      ],
      checklist: [
        "Sources are relevant to the research problem.",
        "Recent and foundational literature are considered where appropriate.",
        "Sources are organised around clear themes or concepts.",
        "Studies are compared and synthesised rather than only summarised.",
        "The research gap is clearly explained.",
        "All sources are cited and referenced consistently.",
      ],
    },
    ne: {
      title: "साहित्य समीक्षा कसरी लेख्ने",
      description:
        "आफ्नो अनुसन्धानका लागि बलियो आधार बनाउन शैक्षिक साहित्य खोज्ने, व्यवस्थित गर्ने, तुलना गर्ने र समन्वय गर्ने तरिका सिक्नुहोस्।",
      sections: [
        {
          heading: "साहित्य समीक्षाको उद्देश्य बुझ्नुहोस्",
          content:
            "साहित्य समीक्षा अघिल्ला अध्ययनहरूको सूची मात्र होइन। यसले के थाहा भइसकेको छ, अनुसन्धानकर्ताहरूले विषयलाई कसरी अध्ययन गरेका छन्, कुन नतिजा मिल्छ वा फरक छन् र तपाईंको अध्ययनसँग सम्बन्धित कुन अनुसन्धान खाली ठाउँ बाँकी छ भन्ने देखाउँछ।",
        },
        {
          heading: "सान्दर्भिक शैक्षिक स्रोतहरू खोज्नुहोस्",
          content:
            "उपयुक्त शैक्षिक डाटाबेस, जर्नल, पुस्तक, थेसिस, डिसर्टेसन तथा विश्वसनीय संस्थागत स्रोतहरू प्रयोग गर्नुहोस्। अनुसन्धान समस्यासँग सम्बन्धित मुख्य शब्दबाट खोजी सुरु गरी विषयबारे थप जानकारी प्राप्त हुँदै जाँदा खोजी सुधार गर्नुहोस्।",
        },
        {
          heading: "साहित्यलाई व्यवस्थित गर्नुहोस्",
          content:
            "स्रोतहरूलाई विषय, अवधारणा, समयक्रम, अनुसन्धान विधि, सैद्धान्तिक दृष्टिकोण वा अनुसन्धान प्रश्नलाई सहयोग गर्ने अन्य संरचनाअनुसार व्यवस्थित गर्न सकिन्छ। अध्ययन गर्दा प्रत्येक स्रोतको सही विवरण र मुख्य विचार टिपोट गर्नुहोस्।",
        },
        {
          heading: "तुलना र समन्वय गर्नुहोस्",
          content:
            "एकपटकमा एउटा स्रोतको सारांश मात्र नलेख्नुहोस्। अध्ययनहरू तुलना गर्नुहोस्, समानता र भिन्नता पहिचान गर्नुहोस्, अनुसन्धान विधिका बलिया र कमजोर पक्ष छलफल गर्नुहोस् र साहित्यलाई आफ्नो अनुसन्धान समस्यासँग जोड्नुहोस्।",
        },
        {
          heading: "अनुसन्धानको खाली ठाउँ पहिचान गर्नुहोस्",
          content:
            "साहित्य समीक्षाले के अझै थाहा नभएको, पर्याप्त अध्ययन नभएको, असंगत रहेको वा विशेष सन्दर्भमा महत्त्वपूर्ण रहेको छ भन्ने स्पष्टतर्फ लैजानुपर्छ। उक्त अनुसन्धान खाली ठाउँ तपाईंको अध्ययनको उद्देश्यसँग प्रत्यक्ष रूपमा जोडिनुपर्छ।",
        },
      ],
      checklist: [
        "स्रोतहरू अनुसन्धान समस्यासँग सान्दर्भिक छन्।",
        "आवश्यकताअनुसार हालका र आधारभूत साहित्य समेटिएका छन्।",
        "स्रोतहरू स्पष्ट विषय वा अवधारणाअनुसार व्यवस्थित छन्।",
        "अध्ययनहरू केवल सारांश नभई तुलना र समन्वय गरिएको छ।",
        "अनुसन्धानको खाली ठाउँ स्पष्ट रूपमा व्याख्या गरिएको छ।",
        "सबै स्रोतको उद्धरण र सन्दर्भ एकरूप रूपमा गरिएको छ।",
      ],
    },
  },
  {
    slug: "data-analysis-for-research",
    image: "/images/resources/data-analysis.jpg",
    number: "05",
    category: {
      en: "Data Analysis",
      ne: "डाटा विश्लेषण",
    },
    readTime: {
      en: "9 min read",
      ne: "९ मिनेट पढ्ने समय",
    },
    en: {
      title: "Introduction to Data Analysis for Research",
      description:
        "Understand the basic process of preparing, analysing, interpreting, and presenting research data in a clear academic way.",
      sections: [
        {
          heading: "Start With Your Research Questions",
          content:
            "Data analysis should not begin with a statistical test chosen at random. Start by reviewing what your research questions and objectives require you to understand, compare, explain, or evaluate.",
        },
        {
          heading: "Prepare and Clean the Data",
          content:
            "Before analysis, check the structure and quality of the dataset. Identify missing values, duplicate records, inconsistent entries, coding issues, and obvious errors. Keep a clear record of important data preparation decisions.",
        },
        {
          heading: "Choose an Appropriate Analysis",
          content:
            "The appropriate analysis depends on your research design, variables, data type, assumptions, and research questions. Descriptive analysis may summarise patterns, while inferential methods can help examine relationships or differences when appropriate.",
        },
        {
          heading: "Interpret the Results Carefully",
          content:
            "Statistical output is not automatically the conclusion of your study. Interpret findings in relation to the research questions, study context, assumptions, limitations, and existing literature. Avoid making claims that go beyond the evidence.",
        },
        {
          heading: "Present Findings Clearly",
          content:
            "Use tables, charts, figures, and concise written explanations where they improve understanding. Every table or figure should have a clear purpose and should be connected to the research question or finding being discussed.",
        },
      ],
      checklist: [
        "The analysis is linked to the research questions.",
        "The dataset has been checked and prepared appropriately.",
        "The selected methods are suitable for the data.",
        "Assumptions and limitations are considered.",
        "Results are interpreted rather than simply reported.",
        "Tables and figures are clear and relevant.",
      ],
    },
    ne: {
      title: "अनुसन्धानमा डाटा विश्लेषणको परिचय",
      description:
        "अनुसन्धान डाटालाई तयार गर्ने, विश्लेषण गर्ने, व्याख्या गर्ने र स्पष्ट शैक्षिक तरिकाले प्रस्तुत गर्ने आधारभूत प्रक्रिया बुझ्नुहोस्।",
      sections: [
        {
          heading: "अनुसन्धान प्रश्नबाट सुरु गर्नुहोस्",
          content:
            "डाटा विश्लेषण कुनै पनि तथ्याङ्कीय परीक्षण छानेर सुरु गर्नु हुँदैन। पहिले अनुसन्धान प्रश्न र उद्देश्यले के बुझ्न, तुलना गर्न, व्याख्या गर्न वा मूल्याङ्कन गर्न आवश्यक बनाएको छ भन्ने हेर्नुहोस्।",
        },
        {
          heading: "डाटा तयार र सफा गर्नुहोस्",
          content:
            "विश्लेषणअघि डाटासेटको संरचना र गुणस्तर जाँच गर्नुहोस्। हराएका मान, दोहोरिएका रेकर्ड, असंगत प्रविष्टि, कोडिङ समस्या र स्पष्ट त्रुटिहरू पहिचान गर्नुहोस्। महत्त्वपूर्ण डाटा तयारी निर्णयहरूको स्पष्ट अभिलेख राख्नुहोस्।",
        },
        {
          heading: "उपयुक्त विश्लेषण विधि छनोट गर्नुहोस्",
          content:
            "उपयुक्त विश्लेषण अनुसन्धान डिजाइन, चर, डाटाको प्रकार, आवश्यक मान्यता र अनुसन्धान प्रश्नमा निर्भर हुन्छ। वर्णनात्मक विश्लेषणले डाटाको ढाँचा देखाउन सक्छ भने उपयुक्त अवस्थामा अनुमानात्मक विधिले सम्बन्ध वा भिन्नता अध्ययन गर्न सहयोग गर्न सक्छ।",
        },
        {
          heading: "नतिजालाई सावधानीपूर्वक व्याख्या गर्नुहोस्",
          content:
            "तथ्याङ्कीय आउटपुट मात्र अनुसन्धानको निष्कर्ष होइन। नतिजालाई अनुसन्धान प्रश्न, अध्ययनको सन्दर्भ, मान्यता, सीमितता र पहिलेको साहित्यसँग सम्बन्धित गरेर व्याख्या गर्नुहोस्। प्रमाणले समर्थन नगर्ने दाबी नगर्नुहोस्।",
        },
        {
          heading: "नतिजालाई स्पष्ट रूपमा प्रस्तुत गर्नुहोस्",
          content:
            "बुझ्न सजिलो बनाउन आवश्यक ठाउँमा तालिका, चार्ट, चित्र तथा छोटो लिखित व्याख्या प्रयोग गर्नुहोस्। प्रत्येक तालिका वा चित्रको स्पष्ट उद्देश्य हुनुपर्छ र छलफल गरिएको अनुसन्धान प्रश्न वा नतिजासँग जोडिनुपर्छ।",
        },
      ],
      checklist: [
        "विश्लेषण अनुसन्धान प्रश्नसँग जोडिएको छ।",
        "डाटासेट उचित रूपमा जाँच र तयार गरिएको छ।",
        "छानिएको विश्लेषण विधि डाटाका लागि उपयुक्त छ।",
        "मान्यता र सीमितताहरू विचार गरिएको छ।",
        "नतिजा केवल रिपोर्ट नभई व्याख्या गरिएको छ।",
        "तालिका र चित्रहरू स्पष्ट र सान्दर्भिक छन्।",
      ],
    },
  },
];

export function getResourceGuide(slug: string) {
  return resourceGuides.find((guide) => guide.slug === slug);
}
