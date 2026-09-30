import { notFound } from "next/navigation";

import { getUniversityGuideline, universities } from "@/lib/guidelines";
import UniversityGuidelineClient from "./UniversityGuidelineClient";

export function generateStaticParams() {
  return universities.map((university) => ({ university: university.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ university: string }> }) {
  const { university: slug } = await params;
  const university = getUniversityGuideline(slug);

  if (!university) return { title: "Guidelines Not Found | Thesis Companion" };

  return {
    title: `${university.name} Research Guidelines | Thesis Companion`,
    description: university.description,
  };
}

export default async function UniversityGuidelinePage({ params }: { params: Promise<{ university: string }> }) {
  const { university: slug } = await params;
  const university = getUniversityGuideline(slug);

  if (!university) notFound();

  return <UniversityGuidelineClient university={university} />;
}
