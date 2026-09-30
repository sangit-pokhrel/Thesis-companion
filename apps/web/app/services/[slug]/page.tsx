import { notFound } from "next/navigation";

import { services } from "@/lib/services";
import ServiceDetailClient from "./ServiceDetailClient";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) return { title: "Service Not Found | Thesis Companion" };

  return {
    title: `${service.title} | Thesis Companion`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) notFound();

  return <ServiceDetailClient service={service} />;
}
