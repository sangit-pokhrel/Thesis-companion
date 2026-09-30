import type { Metadata } from "next";

import ResourcesClient from "./ResourcesClient";

export const metadata: Metadata = {
  title: "Research Resources | Thesis Companion",
  description:
    "Practical research guides covering research topics, proposals, methodology, literature reviews, and data analysis for students and researchers.",
};

export default function ResourcesPage() {
  return <ResourcesClient />;
}
