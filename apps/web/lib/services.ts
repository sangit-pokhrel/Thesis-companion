import { images } from "@/lib/images";

export type Service = {
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  includes: string[];
  suitableFor: string[];
  process: {
    title: string;
    description: string;
  }[];
};

export const services: Service[] = [
  {
    slug: "research-proposal",
    number: "01",
    title: "Research Topic & Proposal",
    shortDescription:
      "Build a clear and structured research proposal with a strong academic direction.",
    description:
      "A strong research project begins with a clear direction. We help you structure your research idea into a focused proposal with a logical problem statement, objectives, research questions, and an appropriate research direction.",
    image: images.services.researchProposal,
    includes: [
      "Research topic development",
      "Problem statement",
      "Research objectives",
      "Research questions",
      "Research scope",
      "Proposal structure",
    ],
    suitableFor: [
      "Students starting a new research project",
      "Students developing a research proposal",
      "Researchers refining an existing research idea",
    ],
    process: [
      {
        title: "Understand the research idea",
        description:
          "We first understand your topic, academic requirements, and the direction you want your research to take.",
      },
      {
        title: "Structure the proposal",
        description:
          "Your research idea is organised into a logical academic structure with clear objectives and questions.",
      },
      {
        title: "Refine the direction",
        description:
          "The proposal is reviewed for clarity, consistency, scope, and alignment between its major sections.",
      },
    ],
  },

  {
    slug: "literature-review",
    number: "02",
    title: "Literature Review",
    shortDescription:
      "Organise academic literature into a structured review that connects existing research with your study.",
    description:
      "A literature review should do more than summarise papers. It should show what is already known, identify important themes, highlight gaps, and establish how your research fits within existing academic work.",
    image: images.services.literatureReview,
    includes: [
      "Literature organisation",
      "Theme identification",
      "Source synthesis",
      "Research gap development",
      "Critical discussion",
      "Academic structure",
    ],
    suitableFor: [
      "Undergraduate research projects",
      "Postgraduate dissertations",
      "Students struggling to structure literature",
    ],
    process: [
      {
        title: "Organise the literature",
        description:
          "Relevant academic sources are organised around the main themes and concepts of your research.",
      },
      {
        title: "Identify relationships",
        description:
          "Existing findings are connected to show similarities, differences, and important research themes.",
      },
      {
        title: "Develop the research gap",
        description:
          "The literature is connected to your study so that the research gap and justification become clearer.",
      },
    ],
  },

  {
    slug: "methodology",
    number: "03",
    title: "Research Methodology",
    shortDescription:
      "Develop a methodology that aligns your research question, study design, data collection, and analysis.",
    description:
      "A well-structured methodology explains how your research will be conducted and why the selected methods are appropriate. We help organise the methodology around the requirements of your research.",
    image: images.services.methodology,
    includes: [
      "Research design",
      "Research approach",
      "Sampling approach",
      "Data collection methods",
      "Variables and measures",
      "Data analysis methods",
    ],
    suitableFor: [
      "Students designing a research study",
      "Proposal development",
      "Dissertation methodology chapters",
    ],
    process: [
      {
        title: "Define the research design",
        description:
          "The research question and objectives are considered when establishing an appropriate research design.",
      },
      {
        title: "Plan data collection",
        description:
          "The methodology is structured around the participants, data sources, instruments, and collection procedures.",
      },
      {
        title: "Connect methods with analysis",
        description:
          "The selected methods are aligned with how the collected data will be analysed and interpreted.",
      },
    ],
  },

  {
    slug: "data-analysis",
    number: "04",
    title: "Data Analysis",
    shortDescription:
      "Prepare, analyse, interpret, and present research data in a clear academic format.",
    description:
      "Research data needs to be handled carefully so that the results can be presented clearly and meaningfully. Support can cover data preparation, analysis, visualisation, and interpretation.",
    image: images.services.dataAnalysis,
    includes: [
      "Data preparation",
      "Data cleaning",
      "Statistical analysis",
      "Tables and visualisation",
      "Result interpretation",
      "Academic presentation",
    ],
    suitableFor: [
      "Quantitative research projects",
      "Survey-based studies",
      "Students working with research datasets",
    ],
    process: [
      {
        title: "Prepare the data",
        description:
          "The dataset is reviewed and prepared so that it is suitable for the intended analysis.",
      },
      {
        title: "Perform the analysis",
        description:
          "Appropriate analytical methods are applied according to the research questions and study design.",
      },
      {
        title: "Present the findings",
        description:
          "Results are organised into clear tables, visualisations, and academic explanations.",
      },
    ],
  },

  {
    slug: "academic-writing",
    number: "05",
    title: "Academic Writing & Editing",
    shortDescription:
      "Improve the clarity, consistency, structure, and academic presentation of your research document.",
    description:
      "Academic writing requires clarity, consistency, logical structure, and appropriate presentation. We help refine academic documents while maintaining the intended meaning and research direction.",
    image: images.services.academicWriting,
    includes: [
      "Academic editing",
      "Proofreading",
      "Grammar and clarity",
      "Structure improvement",
      "Referencing support",
      "Document formatting",
    ],
    suitableFor: [
      "Thesis and dissertation writers",
      "Research paper authors",
      "Students preparing final submissions",
    ],
    process: [
      {
        title: "Review the document",
        description:
          "The document is reviewed for structure, clarity, consistency, language, and academic presentation.",
      },
      {
        title: "Improve the writing",
        description:
          "Areas that affect readability and academic clarity are refined while preserving the intended meaning.",
      },
      {
        title: "Final quality review",
        description:
          "The document is checked for consistency, formatting, referencing, and overall presentation.",
      },
    ],
  },

  {
    slug: "thesis-dissertation",
    number: "06",
    title: "Thesis & Dissertation Support",
    shortDescription:
      "Structured support across the major stages of undergraduate, postgraduate, and dissertation research.",
    description:
      "Thesis and dissertation projects involve multiple connected stages. We provide structured support across research planning, chapter organisation, analysis, academic writing, formatting, and final review.",
    image: images.services.thesisSupport,
    includes: [
      "Research structure",
      "Chapter organisation",
      "Academic writing support",
      "Methodology guidance",
      "Data analysis support",
      "Formatting and final review",
    ],
    suitableFor: [
      "Undergraduate thesis students",
      "Postgraduate dissertation students",
      "Students completing major research projects",
    ],
    process: [
      {
        title: "Plan the research",
        description:
          "The project is organised around its research objectives, chapters, methodology, and expected outcomes.",
      },
      {
        title: "Develop the chapters",
        description:
          "Support is provided across the major sections of the thesis or dissertation.",
      },
      {
        title: "Prepare the final document",
        description:
          "The completed research is reviewed for academic structure, consistency, formatting, and presentation.",
      },
    ],
  },
];

