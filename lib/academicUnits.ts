export type AcademicUnitType = "institute" | "faculty" | "school" | "department" | "unit" | "academic-unit";

export type AcademicUnit = {
  universitySlug: string;
  slug: string;
  name: string;
  nameNe: string;
  type: AcademicUnitType;
  parent?: string;
  officialUrl: string;
  verified: string;
  note?: string;
};


const unitNepali: Record<string, string> = {
  Education: "शिक्षा", Anthropology: "मानवशास्त्र", "Buddhist Studies": "बौद्ध अध्ययन", Economics: "अर्थशास्त्र", English: "अंग्रेजी", "Fine Arts": "ललित कला", Geography: "भूगोल", Hindi: "हिन्दी", History: "इतिहास", "Home Science": "गृह विज्ञान", "Journalism and Mass Communication": "पत्रकारिता तथा आमसञ्चार", "Library and Information Science": "पुस्तकालय तथा सूचना विज्ञान", Linguistics: "भाषाविज्ञान", Maithili: "मैथिली", "Nepal Bhasha": "नेपाल भाषा", Psychology: "मनोविज्ञान", Nepali: "नेपाली", "Nepali Culture, History and Archeology": "नेपाली संस्कृति, इतिहास तथा पुरातत्त्व", "Political Science": "राजनीतिशास्त्र", Population: "जनसंख्या", "Rural Development": "ग्रामीण विकास", Sanskrit: "संस्कृत", Sociology: "समाजशास्त्र", Law: "कानुन", Management: "व्यवस्थापन", "Public Administration": "सार्वजनिक प्रशासन", Botany: "वनस्पतिशास्त्र", Biotechnology: "जैवप्रविधि", Chemistry: "रसायनशास्त्र", "Computer Science and Information Technology": "कम्प्युटर विज्ञान तथा सूचना प्रविधि", "Environmental Science": "वातावरण विज्ञान", "Food Technology": "खाद्य प्रविधि", Geology: "भूविज्ञान", "Hydrology and Meteorology": "जलविज्ञान तथा मौसम विज्ञान", Microbiology: "सूक्ष्मजीवविज्ञान", Mathematics: "गणित", Physics: "भौतिकशास्त्र", Statistics: "तथ्याङ्कशास्त्र", Zoology: "प्राणीशास्त्र", "Public Health": "जनस्वास्थ्य",
  "Arts and Design": "कला तथा डिजाइन", "Development Studies": "विकास अध्ययन", "Languages and Mass Communication": "भाषा तथा आमसञ्चार", Music: "संगीत", "Development Education": "विकास शिक्षा", "Educational Leadership": "शैक्षिक नेतृत्व", "Language Education": "भाषा शिक्षा", "STEAM Education": "STEAM शिक्षा", Architecture: "वास्तुकला", "Artificial Intelligence": "कृत्रिम बुद्धिमत्ता", "Chemical Science and Engineering": "रासायनिक विज्ञान तथा इन्जिनियरिङ", "Civil Engineering": "सिभिल इन्जिनियरिङ", "Computer Science and Engineering": "कम्प्युटर विज्ञान तथा इन्जिनियरिङ", "Electrical and Electronics Engineering": "विद्युत तथा इलेक्ट्रोनिक्स इन्जिनियरिङ", "Environmental Engineering": "वातावरणीय इन्जिनियरिङ", "Geomatics Engineering": "जियोमेटिक्स इन्जिनियरिङ", "Health Informatics": "स्वास्थ्य सूचना विज्ञान", "Mechanical Engineering": "मेकानिकल इन्जिनियरिङ", "Finance, Economics and Accounting": "वित्त, अर्थशास्त्र तथा लेखा", "Human Resource and General Management": "मानव संसाधन तथा सामान्य व्यवस्थापन", "Management Informatics and Communication": "व्यवस्थापन सूचना विज्ञान तथा सञ्चार", "Management Science and Information": "व्यवस्थापन विज्ञान तथा सूचना", "Marketing and Entrepreneurship": "बजार व्यवस्थापन तथा उद्यमशीलता", "Public Policy and Management": "सार्वजनिक नीति तथा व्यवस्थापन", Agriculture: "कृषि", Pharmacy: "फार्मेसी",
  Agronomy: "कृषिविज्ञान", "Agricultural Economics and Agribusiness Management": "कृषि अर्थशास्त्र तथा कृषि व्यवसाय व्यवस्थापन", "Rural Sociology and Development Studies": "ग्रामीण समाजशास्त्र तथा विकास अध्ययन", Entomology: "कीटविज्ञान", "Plant Pathology": "वनस्पति रोगविज्ञान", Horticulture: "बागवानी", "Genetics and Plant Breeding": "आनुवंशिकी तथा बाली प्रजनन", "Veterinary Microbiology and Parasitology": "पशु चिकित्सा सूक्ष्मजीवविज्ञान तथा परजीवीविज्ञान", "Veterinary Pharmacology and Surgery": "पशु चिकित्सा औषधिविज्ञान तथा शल्यचिकित्सा", Theriogenology: "थेरियोजेनोलोजी", Aquaculture: "जलचर पालन", "Animal Breeding and Biotechnology": "पशु प्रजनन तथा जैवप्रविधि", "Animal Nutrition and Fodder Production": "पशु पोषण तथा घाँस उत्पादन", "Livestock Production and Management": "पशुपालन उत्पादन तथा व्यवस्थापन", Forestry: "वन विज्ञान",
};

function toNepaliUnitName(name: string) {
  let result = name;
  result = result.replace(/^Central Department of /, "केन्द्रीय विभाग: ");
  result = result.replace(/^Department of /, "विभाग: ");
  result = result.replace(/^Faculty of /, "संकाय: ");
  result = result.replace(/^School of /, "स्कुल: ");
  result = result.replace(/^Inclusive and Special Needs Education Unit$/, "समावेशी तथा विशेष आवश्यकता शिक्षा एकाइ");
  result = result.replace(/^School Counselling and Wellbeing Unit$/, "स्कुल परामर्श तथा कल्याण एकाइ");
  result = result.replace(/^([^:]+): (.+)$/, (_, prefix, subject) => `${prefix}: ${unitNepali[subject] ?? subject}`);
  if (unitNepali[result]) return unitNepali[result];
  if (!result.includes(": ") && !result.startsWith("संकाय") && !result.startsWith("स्कुल")) return `विभाग: ${result}`;
  return result;
}

const tu = (name: string, slug: string, officialUrl = "https://tu.edu.np/centralDepartments"): AcademicUnit => ({
  universitySlug: "tribhuvan-university", slug, name, nameNe: toNepaliUnitName(name), type: "department", officialUrl, verified: "September 2026",
});

const ku = (name: string, slug: string, parent: string): AcademicUnit => ({
  universitySlug: "kathmandu-university", slug, name, nameNe: toNepaliUnitName(name), type: "department", parent,
  officialUrl: "https://ku.edu.np/departments", verified: "September 2026",
});

export const academicUnits: AcademicUnit[] = [
  // TU — current central department directory / published institutional structure
  ...[
    ["Central Department of Education", "central-department-of-education"],
    ["Central Department of Anthropology", "central-department-of-anthropology"],
    ["Central Department of Buddhist Studies", "central-department-of-buddhist-studies"],
    ["Central Department of Economics", "central-department-of-economics"],
    ["Central Department of English", "central-department-of-english"],
    ["Central Department of Fine Arts", "central-department-of-fine-arts"],
    ["Central Department of Geography", "central-department-of-geography"],
    ["Central Department of Hindi", "central-department-of-hindi"],
    ["Central Department of History", "central-department-of-history"],
    ["Central Department of Home Science", "central-department-of-home-science"],
    ["Central Department of Journalism and Mass Communication", "central-department-of-journalism-and-mass-communication"],
    ["Central Department of Library and Information Science", "central-department-of-library-and-information-science"],
    ["Central Department of Linguistics", "central-department-of-linguistics"],
    ["Central Department of Maithili", "central-department-of-maithili"],
    ["Central Department of Nepal Bhasha", "central-department-of-nepal-bhasha"],
    ["Central Department of Psychology", "central-department-of-psychology"],
    ["Central Department of Nepali", "central-department-of-nepali"],
    ["Central Department of Nepali Culture, History and Archeology", "central-department-of-nepali-culture-history-and-archeology"],
    ["Central Department of Political Science", "central-department-of-political-science"],
    ["Central Department of Population", "central-department-of-population"],
    ["Central Department of Rural Development", "central-department-of-rural-development"],
    ["Central Department of Sanskrit", "central-department-of-sanskrit"],
    ["Central Department of Sociology", "central-department-of-sociology"],
    ["Central Department of Law", "central-department-of-law"],
    ["Central Department of Management", "central-department-of-management"],
    ["Central Department of Public Administration", "central-department-of-public-administration"],
    ["Central Department of Botany", "central-department-of-botany"],
    ["Central Department of Biotechnology", "central-department-of-biotechnology"],
    ["Central Department of Chemistry", "central-department-of-chemistry"],
    ["Central Department of Computer Science and Information Technology", "central-department-of-computer-science-and-information-technology"],
    ["Central Department of Environmental Science", "central-department-of-environmental-science"],
    ["Central Department of Food Technology", "central-department-of-food-technology"],
    ["Central Department of Geology", "central-department-of-geology"],
    ["Central Department of Hydrology and Meteorology", "central-department-of-hydrology-and-meteorology"],
    ["Central Department of Microbiology", "central-department-of-microbiology"],
    ["Central Department of Mathematics", "central-department-of-mathematics"],
    ["Central Department of Physics", "central-department-of-physics"],
    ["Central Department of Statistics", "central-department-of-statistics"],
    ["Central Department of Zoology", "central-department-of-zoology"],
    ["Central Department of Public Health", "central-department-of-public-health"],
  ].map(([name, slug]) => tu(name, slug)),

  // KU — official current department directory
  ...[
    ["Department of Arts and Design", "department-of-arts-and-design", "School of Arts"],
    ["Department of Development Studies", "department-of-development-studies", "School of Arts"],
    ["Department of Economics", "department-of-economics", "School of Arts"],
    ["Department of Languages and Mass Communication", "department-of-languages-and-mass-communication", "School of Arts"],
    ["Department of Music", "department-of-music", "School of Arts"],
    ["Department of Development Education", "department-of-development-education", "School of Education"],
    ["Department of Educational Leadership", "department-of-educational-leadership", "School of Education"],
    ["Department of Inclusive Education, Early Childhood Development and Professional Studies", "department-of-inclusive-education-early-childhood-development-and-professional-studies", "School of Education"],
    ["Department of Language Education", "department-of-language-education", "School of Education"],
    ["Department of STEAM Education", "department-of-steam-education", "School of Education"],
    ["Inclusive and Special Needs Education Unit", "inclusive-and-special-needs-education-unit", "School of Education"],
    ["School Counselling and Wellbeing Unit", "school-counselling-and-wellbeing-unit", "School of Education"],
    ["Department of Architecture", "department-of-architecture", "School of Engineering"],
    ["Department of Artificial Intelligence", "department-of-artificial-intelligence", "School of Engineering"],
    ["Department of Chemical Science and Engineering", "department-of-chemical-science-and-engineering", "School of Engineering"],
    ["Department of Civil Engineering", "department-of-civil-engineering", "School of Engineering"],
    ["Department of Computer Science and Engineering", "department-of-computer-science-and-engineering", "School of Engineering"],
    ["Department of Electrical and Electronics Engineering", "department-of-electrical-and-electronics-engineering", "School of Engineering"],
    ["Department of Environmental Engineering", "department-of-environmental-engineering", "School of Engineering"],
    ["Department of Geomatics Engineering", "department-of-geomatics-engineering", "School of Engineering"],
    ["Department of Health Informatics", "department-of-health-informatics", "School of Engineering"],
    ["Department of Mechanical Engineering", "department-of-mechanical-engineering", "School of Engineering"],
    ["Department of Finance, Economics and Accounting", "department-of-finance-economics-and-accounting", "School of Management"],
    ["Department of Human Resource and General Management", "department-of-human-resource-and-general-management", "School of Management"],
    ["Department of Management Informatics and Communication", "department-of-management-informatics-and-communication", "School of Management"],
    ["Department of Management Science and Information", "department-of-management-science-and-information", "School of Management"],
    ["Department of Marketing and Entrepreneurship", "department-of-marketing-and-entrepreneurship", "School of Management"],
    ["Department of Public Policy and Management", "department-of-public-policy-and-management", "School of Management"],
    ["Department of Agriculture", "department-of-agriculture", "School of Science"],
    ["Department of Biotechnology", "department-of-biotechnology", "School of Science"],
    ["Department of Environmental Science", "department-of-environmental-science", "School of Science"],
    ["Department of Mathematics", "department-of-mathematics", "School of Science"],
    ["Department of Pharmacy", "department-of-pharmacy", "School of Science"],
    ["Department of Physics", "department-of-physics", "School of Science"],
  ].map(([name, slug, parent]) => ku(name, slug, parent)),

  // Pokhara University — official current constituent academic schools
  ...[
    ["School of Business", "school-of-business"],
    ["School of Health and Allied Sciences", "school-of-health-and-allied-sciences"],
    ["School of Engineering", "school-of-engineering"],
    ["School of Development and Social Engineering", "school-of-development-and-social-engineering"],
  ].map(([name, slug]) => ({ universitySlug: "pokhara-university", slug, name, nameNe: toNepaliUnitName(name), type: "school" as const, officialUrl: "https://pu.edu.np/faculties/", verified: "September 2026", note: "Pokhara University currently publishes these constituent schools rather than a single university-wide department directory." })),

  // AFU — faculties are official; department names below are verified through AFU pages/notices and published doctoral material.
  ...[
    ["Department of Agronomy", "department-of-agronomy", "Faculty of Agriculture"],
    ["Department of Agricultural Economics and Agribusiness Management", "department-of-agricultural-economics-and-agribusiness-management", "Faculty of Agriculture"],
    ["Department of Rural Sociology and Development Studies", "department-of-rural-sociology-and-development-studies", "Faculty of Agriculture"],
    ["Department of Entomology", "department-of-entomology", "Faculty of Agriculture"],
    ["Department of Plant Pathology", "department-of-plant-pathology", "Faculty of Agriculture"],
    ["Department of Horticulture", "department-of-horticulture", "Faculty of Agriculture"],
    ["Department of Genetics and Plant Breeding", "department-of-genetics-and-plant-breeding", "Faculty of Agriculture"],
    ["Department of Veterinary Microbiology and Parasitology", "department-of-veterinary-microbiology-and-parasitology", "Faculty of Animal Science, Veterinary Science and Fisheries"],
    ["Department of Veterinary Pharmacology and Surgery", "department-of-veterinary-pharmacology-and-surgery", "Faculty of Animal Science, Veterinary Science and Fisheries"],
    ["Department of Theriogenology", "department-of-theriogenology", "Faculty of Animal Science, Veterinary Science and Fisheries"],
    ["Department of Aquaculture", "department-of-aquaculture", "Faculty of Animal Science, Veterinary Science and Fisheries"],
    ["Department of Animal Breeding and Biotechnology", "department-of-animal-breeding-and-biotechnology", "Faculty of Animal Science, Veterinary Science and Fisheries"],
    ["Department of Animal Nutrition and Fodder Production", "department-of-animal-nutrition-and-fodder-production", "Faculty of Animal Science, Veterinary Science and Fisheries"],
    ["Department of Livestock Production and Management", "department-of-livestock-production-and-management", "Faculty of Animal Science, Veterinary Science and Fisheries"],
    ["Faculty of Forestry", "faculty-of-forestry", "Faculty of Forestry"],
  ].map(([name, slug, parent]) => ({ universitySlug: "agriculture-and-forestry-university", slug, name, nameNe: toNepaliUnitName(name), type: name === "Faculty of Forestry" ? "faculty" as const : "department" as const, parent, officialUrl: "https://www.afu.edu.np/", verified: "September 2026" })),

  // BPKIHS — official departments & speciality units
  ...[
    ["Anaesthesiology & Critical Care", "anaesthesiology-critical-care", "Medical"], ["Anatomy", "anatomy", "Medical"], ["Basic & Clinical Physiology", "basic-clinical-physiology", "Medical"], ["Biochemistry", "biochemistry", "Medical"], ["Cardio Thoracic & Vascular Surgery", "cardio-thoracic-vascular-surgery", "Medical"], ["Cardiology", "cardiology", "Medical"], ["Clinical Pharmacology & Therapeutics", "clinical-pharmacology-therapeutics", "Medical"], ["Dermatology & Venereology", "dermatology-venereology", "Medical"], ["Forensic Medicine & Toxicology", "forensic-medicine-toxicology", "Medical"], ["Gastro Enterology & Hepatology", "gastro-enterology-hepatology", "Medical"], ["Gastrointestinal Surgery", "gastrointestinal-surgery", "Medical"], ["General Practice & Emergency Medicine", "general-practice-emergency-medicine", "Medical"], ["Health Professions Education", "health-professions-education", "Medical"], ["Internal Medicine", "internal-medicine", "Medical"], ["Microbiology", "microbiology", "Medical"], ["Obstetrics & Gynaecology", "obstetrics-gynaecology", "Medical"], ["Ophthalmology", "ophthalmology", "Medical"], ["Orthopedics", "orthopedics", "Medical"], ["Otolaryngology & HNS", "otolaryngology-hns", "Medical"], ["Pathology", "pathology", "Medical"], ["Pediatrics & Adolescents Medicine", "pediatrics-adolescents-medicine", "Medical"], ["Psychiatry", "psychiatry", "Medical"], ["Pulmonary, Critical Care and Sleep Medicine", "pulmonary-critical-care-and-sleep-medicine", "Medical"], ["Radiodiagnosis & Imaging", "radiodiagnosis-imaging", "Medical"], ["School of Public Health & Community Medicine", "school-public-health-community-medicine", "Medical"], ["Surgery", "surgery", "Medical"],
    ["Child Health Nursing", "child-health-nursing", "Nursing"], ["Community Health Nursing", "community-health-nursing", "Nursing"], ["Maternal Health Nursing", "maternal-health-nursing", "Nursing"], ["Medical Surgical Nursing", "medical-surgical-nursing", "Nursing"], ["Psychiatric Nursing", "psychiatric-nursing", "Nursing"],
    ["Conservative Dentistry", "conservative-dentistry", "Dental"], ["Oral and Maxillofacial Surgery", "oral-and-maxillofacial-surgery", "Dental"], ["Oral Medicine and Radiology", "oral-medicine-and-radiology", "Dental"], ["Oral Pathology", "oral-pathology", "Dental"], ["Orthodontics", "orthodontics", "Dental"], ["Pedodontics and Preventive Dentistry", "pedodontics-and-preventive-dentistry", "Dental"], ["Periodontology and Oral Implantology", "periodontology-and-oral-implantology", "Dental"], ["Prosthodontics", "prosthodontics", "Dental"], ["Public Health Dentistry", "public-health-dentistry", "Dental"],
  ].map(([name, slug, parent]) => ({ universitySlug: "bpkihs", slug, name, nameNe: toNepaliUnitName(name), type: "department" as const, parent, officialUrl: "https://bpkihs.edu/department", verified: "September 2026" })),

  // FWU — current official faculties; department-level directory is not consistently exposed on the central site.
  ...[
    ["Faculty of Humanities and Social Sciences", "faculty-of-humanities-and-social-sciences"], ["Faculty of Education", "faculty-of-education"], ["Faculty of Management", "faculty-of-management"], ["Faculty of Science and Technology", "faculty-of-science-and-technology"], ["Faculty of Engineering", "faculty-of-engineering"], ["Faculty of Agriculture", "faculty-of-agriculture"], ["Faculty of Law", "faculty-of-law"], ["Faculty of Natural Resource Management", "faculty-of-natural-resource-management"], ["Faculty of Health Sciences", "faculty-of-health-sciences"],
  ].map(([name, slug]) => ({ universitySlug: "far-western-university", slug, name, nameNe: toNepaliUnitName(name), type: "faculty" as const, officialUrl: "https://www.fwu.edu.np/faculties.html", verified: "September 2026", note: "The current central FWU site publishes the nine faculties; a single complete current department directory was not found on the central site." })),

  // MWU — official academic areas currently published by the Graduate School of Engineering downloads.
  ...[
    ["Education", "education"], ["Engineering", "engineering"], ["Humanities and Social Sciences", "humanities-and-social-sciences"], ["Management", "management"], ["Science & Technology", "science-and-technology"], ["Law", "law"], ["Agriculture & Forestry", "agriculture-and-forestry"], ["MICD", "micd"],
  ].map(([name, slug]) => ({ universitySlug: "mid-western-university", slug, name, nameNe: toNepaliUnitName(name), type: "academic-unit" as const, officialUrl: "https://gsoe.mwu.edu.np/downloads", verified: "September 2026", note: "Published as academic areas in the university's current research/download structure; not presented as a single department directory." })),

  // Purbanchal University — keep official faculty-level navigation until a complete current department directory is published.
  ...[
    ["Faculty of Management", "faculty-of-management"], ["Faculty of Science and Technology", "faculty-of-science-and-technology"], ["Faculty of Engineering", "faculty-of-engineering"], ["Faculty of Law", "faculty-of-law"], ["Faculty of Education", "faculty-of-education"], ["Faculty of Arts", "faculty-of-arts"], ["Faculty of Medical and Allied Sciences", "faculty-of-medical-and-allied-sciences"],
  ].map(([name, slug]) => ({ universitySlug: "purbanchal-university", slug, name, nameNe: toNepaliUnitName(name), type: "faculty" as const, officialUrl: "https://purbuniv.edu.np/", verified: "September 2026", note: "Faculty-level entry retained because the central current site does not expose a complete department directory in one authoritative page." })),

  // NSU — official college/academic structure is available, but a single complete department directory is not exposed centrally.
  ...[
    ["Central Ayurveda College", "central-ayurveda-college"], ["Pindeshwor College", "pindeshwor-college"], ["Vishwa Vidhyala College", "vishwa-vidhyala-college"], ["B.P. Koirala Sanskrit College", "bp-koirala-sanskrit-college"], ["Janak Hajari College", "janak-hajari-college"], ["Ya.La.Na. Sanskrit College", "ya-la-na-sanskrit-college"], ["Sharada College", "sharada-college"], ["Kalika Sanskrit College", "kalika-sanskrit-college"], ["B.Ed, Ranipokhari", "bed-ranipokhari"],
  ].map(([name, slug]) => ({ universitySlug: "nepal-sanskrit-university", slug, name, nameNe: toNepaliUnitName(name), type: "school" as const, officialUrl: "https://www.nsu.edu.np/contact-us", verified: "September 2026", note: "These are institutions/colleges published on the current NSU contact page; a complete department directory was not found." })),
];

export function getAcademicUnits(universitySlug: string) {
  return academicUnits.filter((unit) => unit.universitySlug === universitySlug);
}

export function getAcademicUnit(universitySlug: string, unitSlug: string) {
  return academicUnits.find((unit) => unit.universitySlug === universitySlug && unit.slug === unitSlug);
}
