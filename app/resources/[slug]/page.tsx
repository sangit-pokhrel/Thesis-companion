import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getResourceGuide, resourceGuides } from "@/lib/resources";
import ResourceGuideClient from "./ResourceGuideClient";

export function generateStaticParams() {
  return resourceGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getResourceGuide(slug);

  if (!guide) {
    return {
      title: "Resource Guide Not Found | Thesis Companion",
    };
  }

  return {
    title: `${guide.en.title} | Thesis Companion`,
    description: guide.en.description,
    alternates: {
      canonical: `/resources/${guide.slug}`,
    },
    openGraph: {
      title: `${guide.en.title} | Thesis Companion`,
      description: guide.en.description,
      type: "article",
      images: [guide.image],
    },
  };
}

export default async function ResourceGuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getResourceGuide(slug);

  if (!guide) {
    notFound();
  }

  return <ResourceGuideClient guide={guide} />;
}
