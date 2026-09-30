"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language/LanguageProvider";
import type { UniversityGuideline } from "@/lib/guidelines";
import type { AcademicUnit } from "@/lib/academicUnits";
import { getAcademicUnits } from "@/lib/academicUnits";
import { localizeUniversity } from "@/lib/guidelineLanguage";

export default function AcademicUnitGuidelineClient({ university, unit }: { university: UniversityGuideline; unit: AcademicUnit }) {
  const { language } = useLanguage();
  const localizedUniversity = localizeUniversity(university, language);
  const units = getAcademicUnits(university.slug);
  const unitName = language === "en" ? unit.name : unit.nameNe;
  const unitType = language === "en" ? unit.type.replace("academic-unit", "academic unit") : ({ department: "विभाग", faculty: "संकाय", school: "स्कुल", unit: "एकाइ", institute: "संस्थान", "academic-unit": "शैक्षिक एकाइ" } as Record<string, string>)[unit.type];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-32 sm:px-8 lg:px-10">
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <Link href="/guidelines" className="hover:text-accent">{language === "en" ? "Guidelines" : "निर्देशनहरू"}</Link><span>/</span>
            <Link href={`/guidelines/${university.slug}`} className="hover:text-accent">{localizedUniversity.name}</Link><span>/</span>
            <span className="text-foreground">{unitName}</span>
          </div>
          <div className="mt-8 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{unitType}</p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">{unitName}</h1>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              {language === "en" ? `Research and thesis guidance for ${unitName} under ${localizedUniversity.name}.` : `${localizedUniversity.name} अन्तर्गत ${unitName} का लागि अनुसन्धान तथा थेसिस निर्देशनहरू।`}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:px-8 lg:grid-cols-[280px_1fr] lg:px-10">
        <aside className="h-fit rounded-2xl border border-border bg-muted/20 p-5 lg:sticky lg:top-28">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">{language === "en" ? "Academic units" : "शैक्षिक एकाइहरू"}</p>
          <div className="mt-4 max-h-[65vh] space-y-1 overflow-y-auto pr-1">
            {units.map((item) => (
              <Link key={item.slug} href={`/guidelines/${university.slug}/${item.slug}`} className={`block rounded-lg px-3 py-2 text-sm transition ${item.slug === unit.slug ? "bg-accent/15 font-semibold text-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}>
                {language === "en" ? item.name : item.nameNe}
              </Link>
            ))}
          </div>
        </aside>

        <div className="space-y-8">
          <section className="rounded-2xl border border-accent/30 bg-accent/5 p-6 sm:p-8">
            <p className="text-sm font-bold text-accent">{language === "en" ? "Important" : "महत्त्वपूर्ण"}</p>
            <h2 className="mt-2 text-xl font-bold">{language === "en" ? "University-level baseline" : "विश्वविद्यालय-स्तरीय आधारभूत निर्देशन"}</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              {language === "en" ? `This page carries the verified university-level research framework for ${localizedUniversity.name}. A separate unit-specific regulation is shown only where an official source is identified. Do not treat general university requirements as a department-specific rule.` : `${localizedUniversity.name} का प्रमाणित विश्वविद्यालय-स्तरीय अनुसन्धान आवश्यकताहरू यस पृष्ठमा आधारका रूपमा प्रयोग गरिएका छन्। आधिकारिक स्रोत भेटिएमा मात्र एकाइ-विशिष्ट नियम अलग रूपमा देखाइन्छ। सामान्य विश्वविद्यालयीय आवश्यकतालाई विभाग-विशिष्ट नियमको रूपमा नबुझ्नुहोस्।`}
            </p>
          </section>

          {localizedUniversity.sections.map((section) => (
            <section key={section.title} className="rounded-2xl border border-border bg-background p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold">{section.title}</h2>
              <p className="mt-3 leading-7 text-muted-foreground">{section.description}</p>
              {section.items?.length ? <ul className="mt-5 space-y-2 pl-5 text-sm leading-7 text-muted-foreground">{section.items.map((item) => <li key={item} className="list-disc">{item}</li>)}</ul> : null}
              {section.details?.length ? <div className="mt-6 grid gap-4 md:grid-cols-2">{section.details.map((detail) => <div key={detail.title} className="rounded-xl border border-border bg-muted/20 p-5"><h3 className="font-semibold">{detail.title}</h3>{detail.description ? <p className="mt-2 text-sm leading-6 text-muted-foreground">{detail.description}</p> : null}{detail.bullets?.length ? <ul className="mt-3 space-y-1 pl-4 text-sm leading-6 text-muted-foreground">{detail.bullets.map((b) => <li key={b} className="list-disc">{b}</li>)}</ul> : null}</div>)}</div> : null}
            </section>
          ))}

          <section className="rounded-2xl border border-border bg-muted/20 p-6 sm:p-8">
            <h2 className="text-xl font-bold">{language === "en" ? "Official unit source" : "आधिकारिक एकाइ स्रोत"}</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{unit.note ?? (language === "en" ? "Use the official academic-unit website for the latest programme, department and submission notices." : "नवीनतम कार्यक्रम, विभाग तथा पेशसम्बन्धी सूचनाका लागि आधिकारिक शैक्षिक एकाइको वेबसाइट प्रयोग गर्नुहोस्।")}</p>
            <a href={unit.officialUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 font-semibold text-accent hover:underline">{language === "en" ? "Open official source" : "आधिकारिक स्रोत खोल्नुहोस्"} →</a>
          </section>
        </div>
      </section>
    </main>
  );
}
