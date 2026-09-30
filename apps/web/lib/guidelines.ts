import { images } from "@/lib/images";

export type GuidelineDetail = {
  title: string;
  description?: string;
  bullets?: string[];
};

export type GuidelineSection = {
  title: string;
  description: string;
  items?: string[];
  details?: GuidelineDetail[];
};

export type OfficialSource = {
  title: string;
  url: string;
};

export type UniversityGuideline = {
  slug: string;
  shortName: string;
  name: string;
  description: string;
  image: string;
  lastVerified: string;
  verificationNote: string;
  sections: GuidelineSection[];
  officialSources: OfficialSource[];
};

export const universities: UniversityGuideline[] = [
  // ============================================================
  // TRIBHUVAN UNIVERSITY
  // ============================================================
  {
    slug: "tribhuvan-university",
    shortName: "TU",
    name: "Tribhuvan University",
    description:
      "A comprehensive research and thesis guide based on the published Tribhuvan University Institute of Science and Technology Research Regulation, 2025.",
    image: images.about.research,
    lastVerified: "September 2026",

    verificationNote:
      "This guide is based primarily on the Tribhuvan University Institute of Science and Technology Research Regulation, 2025. Requirements may differ across TU institutes, faculties, departments, campuses, and programmes. Students should always confirm the requirements applicable to their programme.",

    sections: [
      {
        title: "1. Research Proposal",
        description:
          "The research proposal establishes the research problem, objectives, literature foundation, methodology, and planned direction of the study.",

        details: [
          {
            title: "Research Title",
            description:
              "The title should clearly and concisely communicate the proposed research. The TU regulation indicates that the title should generally contain up to 20 words where possible.",
          },

          {
            title: "Introduction and Background",
            description:
              "The introduction should establish the context of the research and explain why the study is being proposed.",
            bullets: [
              "Background of the research topic",
              "Research context",
              "Research problem",
              "Research rationale",
              "Research objectives",
              "Research questions or hypothesis where applicable",
            ],
          },

          {
            title: "Literature Review",
            description:
              "The literature review should establish what is already known and identify the gap that the proposed research intends to address.",
            bullets: [
              "Relevant academic literature",
              "Previous research",
              "Recent research where relevant",
              "Relevant theories or concepts",
              "Research gap",
              "Proper citation of sources",
            ],
          },

          {
            title: "Methodology",
            description:
              "The methodology should clearly explain how the research will be conducted.",
            bullets: [
              "Research design",
              "Study setting",
              "Research population",
              "Sampling approach",
              "Data sources",
              "Data collection procedures",
              "Experimental or laboratory procedures where applicable",
              "Data analysis methods",
            ],
          },

          {
            title: "Proposal Approval",
            description:
              "The proposal is prepared under the applicable academic and supervisory process and may be presented or defended according to departmental requirements.",
            bullets: [
              "Prepare the proposal using the prescribed structure",
              "Work with the assigned supervisor",
              "Present or defend the proposal where required",
              "Address required revisions",
              "Obtain the necessary approval before proceeding",
            ],
          },
        ],

        items: [
          "Research title",
          "Introduction and background",
          "Research problem",
          "Objectives",
          "Rationale",
          "Research questions or hypothesis",
          "Literature review",
          "Methodology",
          "References",
          "Appendices where applicable",
        ],
      },

      {
        title: "2. Proposal Formatting",
        description:
          "The TU IoST Research Regulation, 2025 specifies technical formatting requirements for thesis research proposals.",

        details: [
          {
            title: "Paper",
            bullets: [
              "A4 size white bond paper",
            ],
          },

          {
            title: "Font",
            bullets: [
              "Times New Roman",
              "Body text: 12 point",
              "Main headings: 14 point bold",
              "Sub-headings: 12 point bold",
              "Scientific names and terms in another language: 12 point italic",
            ],
          },

          {
            title: "Spacing and Alignment",
            bullets: [
              "1.5 line spacing",
              "Text justified from both sides",
            ],
          },

          {
            title: "Margins",
            bullets: [
              "Top: 1 inch",
              "Right: 1 inch",
              "Bottom: 1 inch",
              "Left: 1.5 inches",
            ],
          },

          {
            title: "Page Number",
            bullets: [
              "Centered at the bottom of the page",
              "At least 0.5 inch from the lower edge",
            ],
          },

          {
            title: "Proposal Length",
            description:
              "The body of the thesis research proposal should generally not exceed 10 pages, excluding the title page, research summary and appendix. The regulation states that this page restriction is not compulsory.",
          },
        ],
      },

      {
        title: "3. Proposal Title Page",
        description:
          "The TU regulation provides a specific proposal title-page structure.",

        details: [
          {
            title: "Title Page Information",
            bullets: [
              "Clear and concise research title",
              "Department or Central Department",
              "Campus name",
              "Tribhuvan University identification",
              "Student name",
              "Exam roll number",
              "Batch",
              "Place of submission",
              "Date of submission",
            ],
          },
        ],
      },

      {
        title: "4. Supervisor and Research Process",
        description:
          "Research is conducted through the applicable supervisory and departmental process.",

        details: [
          {
            title: "Supervisor",
            bullets: [
              "A supervisor is assigned through the relevant academic authority.",
              "Supervisor expertise should be relevant to the research topic.",
              "A co-supervisor may be used where applicable.",
              "Students should maintain regular communication with the supervisor.",
            ],
          },

          {
            title: "Approved Research",
            bullets: [
              "Research should follow the approved proposal.",
              "Major changes should be discussed with the supervisor.",
              "Required institutional approval should be obtained for changes.",
            ],
          },
        ],
      },

      {
        title: "5. Research Ethics",
        description:
          "Research involving people, animals, communities, fieldwork, or other regulated activities may require appropriate permission and ethical approval.",

        details: [
          {
            title: "Before Research Begins",
            bullets: [
              "Obtain required institutional permission.",
              "Obtain ethical approval where applicable.",
              "Obtain fieldwork permissions where required.",
              "Follow relevant laboratory and research safety procedures.",
              "Maintain research documentation.",
            ],
          },

          {
            title: "Human and Animal Research",
            bullets: [
              "Follow the applicable ethical-review process.",
              "Obtain participant consent where required.",
              "Protect participant confidentiality.",
              "Keep ethical approval and permission documents.",
            ],
          },
        ],
      },

      {
        title: "6. Research Progress",
        description:
          "The TU regulation includes a research-progress monitoring process.",

        details: [
          {
            title: "Progress Reporting",
            bullets: [
              "Research progress should be documented.",
              "Students submit progress information through the applicable supervisory process.",
              "Departments may organise seminars or progress reviews.",
              "Recommendations from progress reviews should be addressed.",
            ],
          },
        ],
      },

      {
        title: "7. Plagiarism and Originality",
        description:
          "The research proposal and thesis should represent original academic work.",

        details: [
          {
            title: "Original Work",
            bullets: [
              "The proposal should represent original research.",
              "Previously published or submitted research should not be duplicated.",
              "Sources must be properly acknowledged.",
              "Students should maintain academic integrity throughout the research process.",
            ],
          },

          {
            title: "Plagiarism Clearance",
            description:
              "The applicable TU research process includes plagiarism clearance before final thesis submission.",
          },
        ],
      },

      {
        title: "8. Thesis Structure",
        description:
          "The TU regulation provides a structured thesis format including preliminary material, main research chapters, and supporting material.",

        details: [
          {
            title: "Front Matter",
            bullets: [
              "Title / cover page",
              "Declaration",
              "Supervisor recommendation",
              "Approval",
              "Acknowledgements",
              "Abstract",
              "Additional abstract where applicable",
              "Abbreviations",
              "Symbols",
              "List of tables",
              "List of figures",
              "Table of contents",
            ],
          },

          {
            title: "Main Research Content",
            bullets: [
              "Introduction / background",
              "Literature review",
              "Materials and methods / methodology",
              "Results",
              "Discussion",
              "Summary",
              "Conclusions",
              "Recommendations or future prospects where applicable",
            ],
          },

          {
            title: "End Matter",
            bullets: [
              "References / literature cited",
              "Appendices",
              "Supporting research documents where required",
            ],
          },
        ],
      },

      {
        title: "9. Thesis Submission",
        description:
          "Final submission follows the applicable departmental process and includes research and academic documentation.",

        details: [
          {
            title: "Before Submission",
            bullets: [
              "Complete required research work.",
              "Complete required corrections.",
              "Obtain supervisor approval.",
              "Complete plagiarism requirements.",
              "Complete required ethical documentation.",
              "Confirm departmental submission requirements.",
            ],
          },

          {
            title: "Final Materials",
            bullets: [
              "Final thesis",
              "Required hard copies",
              "PDF / electronic copy where required",
              "Research data where required",
              "Supporting documentation",
            ],
          },
        ],
      },

      {
        title: "10. Evaluation and Viva",
        description:
          "The thesis may be evaluated through internal and external examination followed by viva-voce according to the applicable TU process.",

        details: [
          {
            title: "Evaluation",
            bullets: [
              "Internal evaluation",
              "External evaluation",
              "Supervisor involvement",
              "Examination according to programme requirements",
            ],
          },

          {
            title: "Viva Voce",
            bullets: [
              "Presentation of the research",
              "Questions from examiners",
              "Explanation of methodology",
              "Explanation of findings",
              "Discussion of research contribution",
            ],
          },
        ],
      },

      {
        title: "11. Corrections and Final Version",
        description:
          "Required corrections should be completed after evaluation and viva before final approval.",

        details: [
          {
            title: "Correction Process",
            bullets: [
              "Review examiner comments.",
              "Discuss corrections with the supervisor.",
              "Make required revisions.",
              "Complete final formatting.",
              "Submit the approved final version.",
            ],
          },
        ],
      },

      {
        title: "12. Programme-Specific Differences",
        description:
          "The TU regulation notes that thesis structures can differ according to the academic subject.",

        details: [
          {
            title: "Subjects That May Require Different Structures",
            bullets: [
              "Computer Science",
              "Information Technology",
              "Data Science",
              "Statistics",
              "Mathematics",
              "Physics",
              "Chemistry",
              "Other specialised disciplines",
            ],
          },

          {
            title: "Before You Submit",
            bullets: [
              "Check your institute.",
              "Check your department.",
              "Check your programme.",
              "Check the latest departmental notice.",
              "Confirm formatting requirements.",
              "Confirm submission dates.",
              "Confirm ethical requirements.",
              "Confirm plagiarism requirements.",
            ],
          },
        ],
      },
    ],

    officialSources: [
      {
        title: "TU IoST Research Regulation, 2025",
        url:
          "https://portal.tu.edu.np/downloads/2025_12_03_09_45_551_2026_01_21_13_30_17.pdf",
      },
    ],
  },

  // ============================================================
  // POKHARA UNIVERSITY
  // ============================================================
  {
    slug: "pokhara-university",
    shortName: "PU",
    name: "Pokhara University",
    description:
      "Research proposal, research process, and academic research resources published by Pokhara University and its Research Centre.",
    image: images.services.researchProposal,
    lastVerified: "September 2026",

    verificationNote:
      "Pokhara University maintains university-level research resources and programme/school-level requirements. Exact thesis and research requirements can differ according to the school and programme.",

    sections: [
      {
        title: "1. Research Proposal",
        description:
          "Pokhara University provides research proposal and research-related documents through its official research resources.",

        details: [
          {
            title: "Core Proposal Areas",
            bullets: [
              "Research title",
              "Introduction / background",
              "Research problem",
              "Objectives",
              "Literature review",
              "Research methodology",
              "Expected outcomes where applicable",
              "References",
            ],
          },
        ],
      },

      {
        title: "2. Research Grant Proposal Format",
        description:
          "Pokhara University Research Centre publishes a proposal format for research grant applications.",

        details: [
          {
            title: "Proposal Components",
            bullets: [
              "Cover page",
              "Abstract",
              "Keywords",
              "Table of contents",
              "List of figures",
              "List of tables",
              "Introduction",
              "Literature review",
              "Research gap / problem statement",
              "Objectives",
              "Hypothesis where applicable",
              "Rationale",
              "Methodology",
            ],
          },

          {
            title: "Supporting Material",
            bullets: [
              "Work plan",
              "Budget where applicable",
              "References",
              "Annexes where applicable",
            ],
          },
        ],
      },

      {
        title: "3. Research Process",
        description:
          "Research proposals and projects may pass through institutional review, approval, monitoring, and reporting processes.",

        details: [
          {
            title: "Research Workflow",
            bullets: [
              "Develop research idea",
              "Prepare proposal",
              "Submit through applicable process",
              "Research review / approval",
              "Conduct research",
              "Submit progress or reports where required",
              "Complete final research output",
            ],
          },
        ],
      },

      {
        title: "4. Doctoral Research",
        description:
          "Pokhara University maintains a Council for Doctoral Studies and publishes doctoral research information.",

        details: [
          {
            title: "Doctoral Application",
            bullets: [
              "Academic eligibility",
              "Research proposal / preliminary proposal where required",
              "Supporting academic documents",
              "Application evaluation",
              "Interview or other selection process where applicable",
            ],
          },
        ],
      },

      {
        title: "5. Research Integrity",
        description:
          "Research proposals should represent genuine academic work and follow the applicable institutional research procedures.",

        details: [
          {
            title: "Good Research Practice",
            bullets: [
              "Use reliable academic sources.",
              "Cite sources properly.",
              "Maintain research records.",
              "Follow applicable ethical requirements.",
              "Follow school and programme requirements.",
            ],
          },
        ],
      },

      {
        title: "6. Programme-Specific Requirements",
        description:
          "Students should not assume that one university-level format applies to every PU programme.",

        details: [
          {
            title: "Before Submission",
            bullets: [
              "Check your school.",
              "Check your programme.",
              "Check current research notices.",
              "Use the latest applicable proposal or thesis format.",
              "Confirm submission requirements.",
            ],
          },
        ],
      },
    ],

    officialSources: [
      {
        title: "PU Research Guidelines & Application Forms",
        url: "https://pu.edu.np/research-guidelines/",
      },
      {
        title: "PU Documents for Research Proposal & Format",
        url:
          "https://pu.edu.np/notice/documents-for-research-proposal-format/",
      },
      {
        title: "PU Application Documents",
        url: "https://pu.edu.np/application-documents/",
      },
    ],
  },

  // ============================================================
  // KATHMANDU UNIVERSITY
  // ============================================================
  {
    slug: "kathmandu-university",
    shortName: "KU",
    name: "Kathmandu University",
    description:
      "Research and thesis guidance based on Kathmandu University's Research Rules and school-specific research and thesis resources.",
    image: images.about.workspace,
    lastVerified: "September 2026",

    verificationNote:
      "Kathmandu University has university-level Research Rules as well as school-specific research and thesis guidelines. Requirements should therefore be checked against the relevant KU school and programme.",

    sections: [
      {
        title: "1. University Research Rules",
        description:
          "Kathmandu University publishes Research Rules as part of its official policy and rules collection.",

        details: [
          {
            title: "Research Governance",
            bullets: [
              "University research rules",
              "Institutional research procedures",
              "Research administration",
              "Research-related academic processes",
            ],
          },
        ],
      },

      {
        title: "2. School-Specific Research Guidelines",
        description:
          "KU schools publish additional research and thesis guidelines for particular academic programmes.",

        details: [
          {
            title: "Examples of School-Level Documents",
            bullets: [
              "PhD research guidelines",
              "MPhil research guidelines",
              "MS by Research guidelines",
              "Programme-specific thesis guidance",
              "Research forms and application documents",
            ],
          },
        ],
      },

      {
        title: "3. Research Proposal",
        description:
          "The exact proposal structure depends on the relevant KU school and programme.",

        details: [
          {
            title: "Common Research Proposal Areas",
            bullets: [
              "Research title",
              "Background",
              "Research problem",
              "Research objectives",
              "Literature review",
              "Research methodology",
              "Expected outcomes where applicable",
              "References",
            ],
          },
        ],
      },

      {
        title: "4. Thesis and Research Work",
        description:
          "Students should follow the research and thesis document issued by their particular school.",

        details: [
          {
            title: "Research Workflow",
            bullets: [
              "Research topic development",
              "Proposal preparation",
              "Supervisor guidance",
              "Research approval",
              "Research work",
              "Thesis preparation",
              "Thesis submission",
              "Evaluation according to programme rules",
            ],
          },
        ],
      },

      {
        title: "5. Academic Integrity",
        description:
          "KU publishes academic-integrity related policies and research resources.",

        details: [
          {
            title: "Academic Practice",
            bullets: [
              "Proper source attribution",
              "Academic honesty",
              "Responsible research practice",
              "Research documentation",
              "Compliance with applicable research rules",
            ],
          },
        ],
      },

      {
        title: "6. Programme-Specific Verification",
        description:
          "A university-wide page should not be treated as a replacement for a school-specific KU document.",

        details: [
          {
            title: "Before Submission",
            bullets: [
              "Identify your KU school.",
              "Identify your programme.",
              "Check the relevant research guideline.",
              "Check current school notices.",
              "Confirm thesis submission requirements.",
            ],
          },
        ],
      },
    ],

    officialSources: [
      {
        title: "Kathmandu University – Policy & Guidelines",
        url: "https://ku.edu.np/policy-guidelines",
      },
      {
        title: "KU School of Science – Downloads",
        url: "https://sos.ku.edu.np/downloads-628",
      },
      {
        title: "Kathmandu University Research Rules",
        url:
          "https://rdi.ku.edu.np/wp-content/uploads/2025/12/Ph.D.-Index-Vol.2.pdf",
      },
    ],
  },

  // ============================================================
  // PURBANCHAL UNIVERSITY
  // ============================================================
  {
    slug: "purbanchal-university",
    shortName: "PU",
    name: "Purbanchal University",
    description:
      "Research proposal and academic research guidance based on Purbanchal University's Research Centre resources and published research notices.",
    image: images.services.literatureReview,
    lastVerified: "September 2026",

    verificationNote:
      "Purbanchal University has a Research Centre and publishes research proposal notices. Requirements may differ by faculty, school, programme, and type of research.",

    sections: [
      {
        title: "1. Research Proposal",
        description:
          "A published Purbanchal University Research Centre proposal notice identifies core components for research proposals.",

        details: [
          {
            title: "Core Proposal Structure",
            bullets: [
              "Cover page",
              "Research title",
              "Introduction / background",
              "Objectives",
              "Hypothesis or research question where required",
              "Methodology",
              "Expected result",
              "Budget where applicable",
              "Time schedule / work plan",
            ],
          },
        ],
      },

      {
        title: "2. Research Background",
        description:
          "The proposal should establish the context and reason for conducting the research.",

        details: [
          {
            title: "Include",
            bullets: [
              "Research context",
              "Problem being investigated",
              "Reason for conducting the study",
              "Research objectives",
              "Relevant academic background",
            ],
          },
        ],
      },

      {
        title: "3. Methodology",
        description:
          "The methodology should explain how the proposed research will be carried out.",

        details: [
          {
            title: "Methodology Areas",
            bullets: [
              "Research design",
              "Data sources",
              "Sampling where applicable",
              "Data collection",
              "Data analysis",
              "Research schedule",
            ],
          },
        ],
      },

      {
        title: "4. Expected Results",
        description:
          "The proposal should identify the expected result or contribution of the research.",

        details: [
          {
            title: "Expected Research Contribution",
            bullets: [
              "Expected findings",
              "Academic contribution",
              "Practical relevance where applicable",
              "Expected outputs",
            ],
          },
        ],
      },

      {
        title: "5. Research Centre",
        description:
          "Purbanchal University maintains a dedicated Research Centre responsible for university research activities.",

        details: [
          {
            title: "Research Centre",
            bullets: [
              "Research proposal activities",
              "Research support",
              "Research coordination",
              "Research-related university processes",
            ],
          },
        ],
      },

      {
        title: "6. Programme-Specific Requirements",
        description:
          "The proposal notice used as a source here concerns a particular university research-grant process, so students should verify the requirements applicable to their own programme.",

        details: [
          {
            title: "Before Submission",
            bullets: [
              "Check your faculty.",
              "Check your school.",
              "Check your programme.",
              "Check current research notices.",
              "Confirm the applicable proposal format.",
            ],
          },
        ],
      },
    ],

    officialSources: [
      {
        title: "Purbanchal University – Research Centre",
        url:
          "https://purbanchaluniversity.edu.np/central-office/centres",
      },
      {
        title: "Purbanchal University – Research Proposal Notice",
        url:
          "https://purbanchaluniversity.edu.np/documents/information/2a3dad8009023dfc964477b777b3f01b.pdf",
      },
      {
        title: "Purbanchal University Official Website",
        url: "https://purbanchaluniversity.edu.np/",
      },
    ],
  },

  // ============================================================
  // MID-WESTERN UNIVERSITY
  // ============================================================
  {
    slug: "mid-western-university",
    shortName: "MWU",
    name: "Mid-Western University",
    description:
      "Research procedures and institutional research resources published by Mid-Western University.",
    image: images.services.methodology,
    lastVerified: "September 2026",

    verificationNote:
      "Mid-Western University currently publishes its research procedures and research-development documents through its official resources. Programme-level requirements should be checked separately.",

    sections: [
      {
        title: "1. Research Procedures",
        description:
          "The official MWU downloads currently include the Research Procedures 2081.",

        details: [
          {
            title: "Research Administration",
            bullets: [
              "Institutional research procedures",
              "Research-related academic activities",
              "Research administration",
              "Research documentation",
              "Research monitoring processes",
            ],
          },
        ],
      },

      {
        title: "2. Research Planning",
        description:
          "A sound research plan should establish the topic, problem, objectives, literature foundation, and methodology.",

        details: [
          {
            title: "Planning Areas",
            bullets: [
              "Research topic",
              "Research problem",
              "Research objectives",
              "Research questions",
              "Literature review",
              "Methodology",
              "Research work plan",
            ],
          },
        ],
      },

      {
        title: "3. Research Proposal",
        description:
          "Students and researchers should use the proposal structure applicable to their programme and the current university research procedures.",

        details: [
          {
            title: "Common Proposal Areas",
            bullets: [
              "Title",
              "Background",
              "Problem statement",
              "Objectives",
              "Literature review",
              "Methodology",
              "Expected outputs",
              "References",
            ],
          },
        ],
      },

      {
        title: "4. Research & Development",
        description:
          "MWU's official resources also include research, extension, and development project guidelines.",

        details: [
          {
            title: "Research Project Areas",
            bullets: [
              "Research projects",
              "Extension activities",
              "Development projects",
              "Project implementation",
              "Project reporting",
            ],
          },
        ],
      },

      {
        title: "5. Research Reporting",
        description:
          "Research should be documented according to the applicable institutional and programme requirements.",

        details: [
          {
            title: "Research Documentation",
            bullets: [
              "Research records",
              "Progress documentation",
              "Research findings",
              "Final report",
              "Supporting documents",
            ],
          },
        ],
      },

      {
        title: "6. Programme-Specific Requirements",
        description:
          "The university research procedures should be used together with the applicable faculty, school, department, and programme requirements.",

        details: [
          {
            title: "Before Submission",
            bullets: [
              "Check your programme.",
              "Check your faculty or school.",
              "Check current university notices.",
              "Use the latest research procedure.",
              "Confirm submission requirements.",
            ],
          },
        ],
      },
    ],

    officialSources: [
      {
        title: "Mid-West University – Official Downloads",
        url: "https://gsoe.mwu.edu.np/downloads",
      },
    ],
  },

  // ============================================================
  // FAR-WESTERN UNIVERSITY
  // ============================================================
  {
    slug: "far-western-university",
    shortName: "FWU",
    name: "Far-Western University",
    description:
      "Research proposal, thesis, research documentation, and academic research guidance based on Far-Western University's published research resources.",
    image: images.services.dataAnalysis,
    lastVerified: "September 2026",

    verificationNote:
      "FWU publishes university-level research resources through its Research, Innovation and Development Center as well as programme/faculty-specific academic documents. Requirements can differ by programme.",

    sections: [
      {
        title: "1. Research Proposal",
        description:
          "An FWU Faculty of Education guideline describes the proposal as the first major step toward completing a thesis.",

        details: [
          {
            title: "Qualitative Proposal Areas",
            bullets: [
              "Title",
              "Introduction / background",
              "Statement of the problem",
              "Significance / rationale",
              "Purpose of the study",
              "Research questions",
              "Literature review and theoretical framework",
              "Research method and design",
              "Participants and tools",
              "Data collection",
              "Data analysis and interpretation",
              "Ethical consideration",
              "Work plan",
              "References",
              "Appendix",
            ],
          },

          {
            title: "Quantitative Proposal Areas",
            bullets: [
              "Title",
              "Introduction / background",
              "Statement of the problem",
              "Significance / rationale",
              "Objectives",
              "Research questions or hypothesis",
              "Literature review",
              "Methods and procedures",
              "Population, sampling and tools",
              "Data collection",
              "Data analysis and interpretation",
              "Ethical consideration",
              "Work plan",
              "References",
              "Appendix",
            ],
          },
        ],

        items: [
          "Proposal generally should not exceed 10 pages in the cited FWU faculty guideline, excluding title page and appendix",
          "APA 7th edition is specified in the cited guideline",
        ],
      },

      {
        title: "2. Thesis Structure",
        description:
          "FWU programme documents provide thesis formatting and organisation guidance, with programme-specific documents taking precedence.",

        details: [
          {
            title: "Academic Structure",
            bullets: [
              "Introduction",
              "Literature review",
              "Methodology",
              "Results / findings",
              "Discussion",
              "Conclusion",
              "References",
              "Appendices where applicable",
            ],
          },
        ],
      },

      {
        title: "3. Referencing",
        description:
          "The cited FWU Faculty of Education thesis guideline specifies APA 7th edition for citation and referencing.",

        details: [
          {
            title: "APA 7",
            bullets: [
              "Use consistent in-text citations.",
              "Maintain a matching reference list.",
              "Cite academic sources appropriately.",
              "Follow the programme's current manual where one is provided.",
            ],
          },
        ],
      },

      {
        title: "4. Research Documentation",
        description:
          "FWU's Research, Innovation and Development Center currently publishes research documentation and report-writing resources.",

        details: [
          {
            title: "Current Research Resources",
            bullets: [
              "Research activities",
              "Research proposal notices",
              "Research documentation format",
              "Format for report writing",
              "Research, innovation and development procedures",
            ],
          },
        ],
      },

      {
        title: "5. Research Process",
        description:
          "The applicable research process depends on the programme and institutional research procedures.",

        details: [
          {
            title: "Typical Workflow",
            bullets: [
              "Develop research topic",
              "Prepare proposal",
              "Proposal presentation / approval where applicable",
              "Conduct research",
              "Analyse data",
              "Prepare thesis",
              "Submit thesis",
              "Complete evaluation requirements",
            ],
          },
        ],
      },

      {
        title: "6. Programme-Specific Verification",
        description:
          "FWU has multiple faculties and academic programmes, so the applicable programme manual should always be checked.",

        details: [
          {
            title: "Before Submission",
            bullets: [
              "Check your faculty.",
              "Check your programme.",
              "Check the latest thesis manual.",
              "Confirm referencing style.",
              "Confirm formatting.",
              "Confirm submission process.",
            ],
          },
        ],
      },
    ],

    officialSources: [
      {
        title: "FWU Research, Innovation and Development Center",
        url: "https://research.fwu.edu.np/",
      },
      {
        title: "FWU Faculty of Education – Thesis Guideline",
        url:
          "https://facultyeducation.fwu.edu.np/assets/uploads/syllabus/syllabus-1724317963_dean_office.pdf",
      },
      {
        title: "FWU Faculty of Humanities – Academic Documents",
        url:
          "https://facultyhumanities.fwu.edu.np/academic/syllabuses.html",
      },
    ],
  },

  // ============================================================
  // AGRICULTURE AND FORESTRY UNIVERSITY
  // ============================================================
  {
    slug: "agriculture-and-forestry-university",
    shortName: "AFU",
    name: "Agriculture and Forestry University",
    description:
      "Research proposal, research ethics, thesis, and institutional research guidance based on AFU Directorate of Research and Extension resources.",
    image: images.services.thesisSupport,
    lastVerified: "September 2026",

    verificationNote:
      "AFU's Directorate of Research and Extension publishes separate research proposal formats for students and faculty. Research involving human or animal subjects may also require the applicable IRB process.",

    sections: [
      {
        title: "1. Research Proposal Formats",
        description:
          "AFU's Directorate of Research and Extension publishes specific research proposal formats.",

        details: [
          {
            title: "Official Proposal Resources",
            bullets: [
              "Research Proposal Format for Students",
              "Research Proposal Format for Faculty",
              "Thesis Research Proposal Notice",
              "Faculty research proposal notices",
            ],
          },
        ],
      },

      {
        title: "2. Research Areas",
        description:
          "AFU's research and extension system covers its major academic and applied areas.",

        details: [
          {
            title: "Research Fields",
            bullets: [
              "Agriculture",
              "Animal sciences",
              "Forestry",
              "Aquaculture",
              "Socio-economics",
              "Research and extension",
            ],
          },
        ],
      },

      {
        title: "3. Research Proposal Development",
        description:
          "Students should use the official AFU proposal format applicable to their research category.",

        details: [
          {
            title: "Proposal Planning",
            bullets: [
              "Research title",
              "Research background",
              "Research objectives",
              "Literature review",
              "Materials and methods",
              "Expected outputs where applicable",
              "Work plan",
              "References",
            ],
          },
        ],
      },

      {
        title: "4. Research Ethics and IRB",
        description:
          "AFU maintains an Institutional Review Board and publishes research-ethics documents.",

        details: [
          {
            title: "IRB Resources",
            bullets: [
              "Human subjects research application",
              "Animal subjects research application",
              "IRB evaluation form",
              "Standard operating procedure for non-medical human and animal research",
            ],
          },

          {
            title: "When Ethics Review May Matter",
            bullets: [
              "Research involving human participants",
              "Research involving animals",
              "Research involving sensitive participant information",
              "Research requiring institutional ethical approval",
            ],
          },
        ],
      },

      {
        title: "5. Research and Extension",
        description:
          "AFU's Directorate of Research and Extension supports research and extension as core university functions.",

        details: [
          {
            title: "Research Administration",
            bullets: [
              "Research coordination",
              "Research proposals",
              "Research projects",
              "Research documentation",
              "Research and extension activities",
            ],
          },
        ],
      },

      {
        title: "6. Programme-Specific Verification",
        description:
          "AFU students should combine university research resources with the requirements of their faculty and postgraduate programme.",

        details: [
          {
            title: "Before Submission",
            bullets: [
              "Check your faculty.",
              "Check your programme.",
              "Use the latest student proposal format.",
              "Check research ethics requirements.",
              "Confirm thesis submission requirements.",
            ],
          },
        ],
      },
    ],

    officialSources: [
      {
        title: "AFU DoREX – Formats and Guidelines",
        url:
          "https://entrance.afu.edu.np/directorates/dorex/formats-and-guidelines",
      },
      {
        title: "AFU Institutional Review Board",
        url:
          "https://entrance.afu.edu.np/directorates/dorex/institutional-review-board",
      },
      {
        title: "AFU Directorate of Research and Extension",
        url: "https://entrance.afu.edu.np/directorates/dorex",
      },
    ],
  },

  // ============================================================
  // NEPAL SANSKRIT UNIVERSITY
  // ============================================================
  {
    slug: "nepal-sanskrit-university",
    shortName: "NSU",
    name: "Nepal Sanskrit University",
    description:
      "Research and academic guidance based on Nepal Sanskrit University's Research Centre resources and published research materials.",
    image: images.resources.academicWriting,
    lastVerified: "September 2026",

    verificationNote:
      "NSU operates a Research Centre that manages degree and non-degree research programmes. Exact research and thesis requirements can depend on the relevant research programme.",

    sections: [
      {
        title: "1. Research Centre",
        description:
          "Nepal Sanskrit University's Research Centre manages research-related programmes and activities.",

        details: [
          {
            title: "Research Programmes",
            bullets: [
              "PhD degree research programme",
              "Special research",
              "Small research",
              "Text editing",
              "Translation programmes",
            ],
          },
        ],
      },

      {
        title: "2. Research Proposal",
        description:
          "NSU research materials identify research-proposal development as an important component of academic research.",

        details: [
          {
            title: "Proposal Areas",
            bullets: [
              "Research topic",
              "Statement of the problem",
              "Research objectives",
              "Literature review",
              "Research methodology",
              "Expected contribution",
              "References",
            ],
          },
        ],
      },

      {
        title: "3. Literature Review",
        description:
          "NSU Research Centre material explicitly connects literature review with identification of research gaps and the researcher's point of departure.",

        details: [
          {
            title: "Literature Review Tasks",
            bullets: [
              "Identify relevant research",
              "Evaluate sources",
              "Compare previous studies",
              "Identify research gaps",
              "Establish the basis for the proposed study",
            ],
          },
        ],
      },

      {
        title: "4. Academic Writing",
        description:
          "NSU research methodology materials emphasise clear and factual academic communication.",

        details: [
          {
            title: "Academic Writing",
            bullets: [
              "Clear academic communication",
              "Use reliable sources",
              "Evaluate source authenticity",
              "Use appropriate academic language",
              "Cite sources properly",
            ],
          },
        ],
      },

      {
        title: "5. Research Integrity",
        description:
          "NSU research materials explicitly address plagiarism and responsible academic research.",

        details: [
          {
            title: "Important Areas",
            bullets: [
              "Plagiarism",
              "Proper citation",
              "Research ethics",
              "Theoretical framework",
              "Research methodology",
              "Academic integrity",
            ],
          },
        ],
      },

      {
        title: "6. Doctoral Research",
        description:
          "NSU currently conducts PhD admission and research activities through its Research Centre.",

        details: [
          {
            title: "Doctoral Research",
            bullets: [
              "PhD entrance process",
              "Research concept / proposal",
              "Research article evaluation where applicable",
              "Research Centre procedures",
              "Programme-specific requirements",
            ],
          },
        ],
      },
    ],

    officialSources: [
      {
        title: "Nepal Sanskrit University – Research Centre",
        url: "https://nsu.edu.np/council",
      },
      {
        title: "NSU Research Methodology / Academic Writing Material",
        url:
          "https://nsu.edu.np/uploads/docs/Ph.D.%20entrance%20Exam%20Model%20Questions%20%281%29.pdf",
      },
      {
        title: "Nepal Sanskrit University Official Website",
        url: "https://nsu.edu.np/",
      },
    ],
  },

  // ============================================================
  // BPKIHS
  // ============================================================
  {
    slug: "bpkihs",
    shortName: "BPKIHS",
    name: "B.P. Koirala Institute of Health Sciences",
    description:
      "Health-science research protocol, ethics, participant documentation, data management, statistical analysis, and referencing guidance based on BPKIHS's thesis protocol guideline.",
    image: images.services.dataAnalysis,
    lastVerified: "September 2026",

    verificationNote:
      "BPKIHS research involving human participants can require institutional and ethical documentation. The thesis protocol guideline applies to specified postgraduate and research programmes and should be checked alongside current institutional requirements.",

    sections: [
      {
        title: "1. Thesis Protocol",
        description:
          "BPKIHS publishes a thesis-protocol guideline covering postgraduate research programmes.",

        details: [
          {
            title: "Protocol Preparation",
            bullets: [
              "Research title",
              "Candidate information",
              "Supervisor / co-supervisor information where applicable",
              "Research background",
              "Research objectives",
              "Study design",
              "Methods",
              "Outcome measures",
              "Data management",
              "Statistical analysis",
              "References",
              "Annexures",
            ],
          },
        ],
      },

      {
        title: "2. Methods and Procedures",
        description:
          "The BPKIHS guideline provides detailed areas for describing research methods and procedures.",

        details: [
          {
            title: "Method Areas",
            bullets: [
              "Instruments / questionnaire",
              "Frequency and duration of intervention or follow-up where relevant",
              "Procedures and schedules",
              "Drug treatment details where relevant",
              "Surgical technique where relevant",
              "Withdrawal reasons",
              "Stopping rules",
              "Adverse responses / side effects",
              "Conditions for breaking codes where relevant",
            ],
          },
        ],
      },

      {
        title: "3. Outcome Measures",
        description:
          "The protocol should clearly identify how research outcomes will be measured.",

        details: [
          {
            title: "Outcome Documentation",
            bullets: [
              "Primary outcome measures",
              "Secondary outcome measures",
              "Flow diagram where applicable",
            ],
          },
        ],
      },

      {
        title: "4. Data Management and Statistical Analysis",
        description:
          "BPKIHS requires the protocol to describe how research data will be handled and analysed.",

        details: [
          {
            title: "Data Management",
            bullets: [
              "Data handling",
              "Coding",
              "Monitoring",
              "Data management procedures",
            ],
          },

          {
            title: "Statistical Analysis",
            bullets: [
              "Proposed statistical methods",
              "Sample-size calculation",
              "Analysis plan",
            ],
          },
        ],
      },

      {
        title: "5. Participant Information",
        description:
          "The BPKIHS protocol guideline requires participant information to be prepared in accessible language and in English and Nepali where applicable.",

        details: [
          {
            title: "Participant Information Sheet",
            bullets: [
              "Research title",
              "Candidate and guide information",
              "Importance of research",
              "Purpose of research",
              "Participant selection",
              "Voluntary participation",
              "Expected duration",
              "Expected benefits",
              "Potential risks",
              "Research procedures",
              "Confidentiality",
              "Right to withdraw",
              "Costs where applicable",
              "Sharing of results",
              "Contact information",
            ],
          },
        ],
      },

      {
        title: "6. Informed Consent",
        description:
          "Research involving participants requires appropriate informed-consent documentation according to the applicable BPKIHS process.",

        details: [
          {
            title: "Consent Documentation",
            bullets: [
              "Participant informed consent form",
              "Participant information sheet",
              "English version where required",
              "Nepali version where required",
              "Researcher and participant signatures",
              "Witness documentation where applicable",
            ],
          },
        ],
      },

      {
        title: "7. References",
        description:
          "The published BPKIHS thesis-protocol guideline specifically requests Vancouver-style references.",

        details: [
          {
            title: "Referencing",
            bullets: [
              "Use Vancouver style.",
              "Maintain a consistent reference list.",
              "Cite research sources appropriately.",
              "Check the latest institutional requirements.",
            ],
          },
        ],
      },

      {
        title: "8. Annexures",
        description:
          "The protocol guideline identifies supporting research documents that should accompany the protocol.",

        details: [
          {
            title: "Common Annexures",
            bullets: [
              "Participant record form",
              "Participant information sheet – English",
              "Participant information sheet – Nepali",
              "Participant informed consent form – English",
              "Participant informed consent form – Nepali",
              "Questionnaire where applicable",
              "Research instruments",
              "Other required supporting documents",
            ],
          },
        ],
      },

      {
        title: "9. Ethics and Confidentiality",
        description:
          "Health research requires particular attention to participant rights, confidentiality, risks, and voluntary participation.",

        details: [
          {
            title: "Participant Protection",
            bullets: [
              "Participation should be voluntary.",
              "Participants should receive understandable information.",
              "Participants should be informed of risks and benefits.",
              "Participants should be able to withdraw according to the applicable process.",
              "Participant information should be kept confidential.",
            ],
          },
        ],
      },
    ],

    officialSources: [
      {
        title: "BPKIHS – Thesis Protocol Guideline",
        url:
          "https://bpkihs.edu/uploads/guideline4thesisprotocol.pdf",
      },
      {
        title: "BPKIHS – Downloads and Resources",
        url: "https://bpkihs.edu/download",
      },
      {
        title: "BPKIHS Official Website",
        url: "https://bpkihs.edu/",
      },
    ],
  },
];

export function getUniversityGuideline(slug: string) {
  return universities.find(
    (university) => university.slug === slug
  );
}