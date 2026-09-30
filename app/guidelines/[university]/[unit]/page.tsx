import { notFound } from "next/navigation";
import { getUniversityGuideline, universities } from "@/lib/guidelines";
import { getAcademicUnit, getAcademicUnits } from "@/lib/academicUnits";
import AcademicUnitGuidelineClient from "./AcademicUnitGuidelineClient";

export function generateStaticParams() {
  return universities.flatMap((university) =>
    getAcademicUnits(university.slug).map((unit) => ({ university: university.slug, unit: unit.slug })),
  );
}

export async function generateMetadata({ params }: { params: Promise<{ university: string; unit: string }> }) {
  const { university: universitySlug, unit: unitSlug } = await params;
  const university = getUniversityGuideline(universitySlug);
  const unit = getAcademicUnit(universitySlug, unitSlug);
  if (!university || !unit) return { title: "Guideline Not Found | Thesis Companion" };
  return { title: `${unit.name} Guidelines | ${university.name} | Thesis Companion`, description: `${unit.name} research and thesis guidance for ${university.name}.` };
}

export default async function AcademicUnitGuidelinePage({ params }: { params: Promise<{ university: string; unit: string }> }) {
  const { university: universitySlug, unit: unitSlug } = await params;
  const university = getUniversityGuideline(universitySlug);
  const unit = getAcademicUnit(universitySlug, unitSlug);
  if (!university || !unit) notFound();
  return <AcademicUnitGuidelineClient university={university} unit={unit} />;
}
