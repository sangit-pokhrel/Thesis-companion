"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import Link from "next/link";

import { useLanguage } from "@/components/language/LanguageProvider";
import { images } from "@/lib/images";

export default function ContactPage() {
  const { language, t } = useLanguage();

  const contact = t("contact");
  const common = t("common");

  const [submitted, setSubmitted] = useState(false);

  const academicLevels = {
    en: [
      "Bachelor's",
      "Master's",
      "MPhil",
      "PhD",
      "Other",
    ],
    ne: [
      "स्नातक",
      "स्नातकोत्तर",
      "एमफिल",
      "पीएचडी",
      "अन्य",
    ],
  };

  const services = {
    en: [
      "Research Topic & Proposal",
      "Literature Review",
      "Research Methodology",
      "Data Analysis",
      "Academic Writing",
      "Thesis & Dissertation Support",
    ],
    ne: [
      "अनुसन्धान विषय तथा प्रस्ताव",
      "साहित्य समीक्षा",
      "अनुसन्धान विधि",
      "डाटा विश्लेषण",
      "शैक्षिक लेखन",
      "थेसिस तथा डिसर्टेसन सहयोग",
    ],
  };

  const currentLevels = academicLevels[language];
  const currentServices = services[language];

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });

      if (!response.ok) {
        return;
      }

      setSubmitted(true);
    } catch {
      // Keep the existing page state unchanged if the request fails.
    }
  };

  if (submitted) {
    return (
      <section className="min-h-[70vh] bg-background">
        <div className="mx-auto flex min-h-[70vh] max-w-3xl items-center justify-center px-6 py-20 lg:px-8">
          <div className="w-full rounded-2xl border border-border bg-muted/40 p-10 text-center sm:p-14">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent text-2xl font-bold text-accent-foreground">
              ✓
            </div>

            <h1 className="mt-7 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {contact.thankYou}
            </h1>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-muted-foreground">
              {contact.received}
            </p>

            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-8 inline-flex rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              {contact.another}
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[520px] overflow-hidden">
        <Image
          src={images.contact.hero}
          alt={
            language === "en"
              ? "Contact Thesis Companion for research support"
              : "अनुसन्धान सहयोगका लागि Thesis Companion मा सम्पर्क गर्नुहोस्"
          }
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-primary/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/50 to-primary/30" />

        <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-6 py-24 lg:px-8 lg:py-28">
          <div className="max-w-4xl text-white">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              {contact.label}
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {contact.title}
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80">
              {contact.description}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-muted/40">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[0.75fr_1.25fr] lg:px-8 lg:py-28">
          {/* Intro */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              {contact.start}
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {contact.heading}
            </h2>

            <p className="mt-6 leading-7 text-muted-foreground">
              {language === "en"
                ? "Tell us about your research and where you currently are in the process. The more context you provide, the easier it is to understand the support you need."
                : "आफ्नो अनुसन्धान र तपाईं हाल कुन चरणमा हुनुहुन्छ भन्नेबारे जानकारी दिनुहोस्। तपाईंले जति धेरै जानकारी दिनुहुन्छ, आवश्यक सहयोग बुझ्न त्यति नै सजिलो हुन्छ।"}
            </p>

            <div className="mt-10 space-y-5 border-t border-border pt-8">
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {language === "en"
                    ? "Research-focused support"
                    : "अनुसन्धान केन्द्रित सहयोग"}
                </p>

                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {language === "en"
                    ? "Support across proposals, methodology, analysis, writing, and thesis work."
                    : "प्रस्ताव, अनुसन्धान विधि, डाटा विश्लेषण, लेखन तथा थेसिससम्बन्धी सहयोग।"}
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-foreground">
                  {language === "en"
                    ? "Clear communication"
                    : "स्पष्ट सञ्चार"}
                </p>

                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {language === "en"
                    ? "Share your requirements clearly so we can understand your research needs."
                    : "तपाईंको अनुसन्धानसम्बन्धी आवश्यकता बुझ्न आफ्नो आवश्यकता स्पष्ट रूपमा साझा गर्नुहोस्।"}
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-background p-7 shadow-sm sm:p-9"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-foreground"
                >
                  {contact.name}
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder={contact.namePlaceholder}
                  className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground"
                >
                  {contact.email}
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder={contact.emailPlaceholder}
                  className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-foreground"
                >
                  {contact.phone}
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder={contact.phonePlaceholder}
                  className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                />
              </div>

              {/* Academic Level */}
              <div>
                <label
                  htmlFor="academicLevel"
                  className="text-sm font-medium text-foreground"
                >
                  {contact.academicLevel}
                </label>

                <select
                  id="academicLevel"
                  name="academicLevel"
                  required
                  defaultValue=""
                  className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                >
                  <option value="" disabled>
                    {contact.levelPlaceholder}
                  </option>

                  {currentLevels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>

              {/* Service */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="service"
                  className="text-sm font-medium text-foreground"
                >
                  {contact.service}
                </label>

                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                >
                  <option value="" disabled>
                    {contact.servicePlaceholder}
                  </option>

                  {currentServices.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  {contact.message}
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder={contact.messagePlaceholder}
                  className="mt-2 w-full resize-none rounded-md border border-border bg-background px-4 py-3 text-sm leading-6 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                />
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-4 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-5 text-muted-foreground">
                {language === "en"
                  ? "By submitting this form, you are sharing your information for the purpose of discussing your research requirements."
                  : "यो फारम पठाउँदा तपाईंले आफ्नो अनुसन्धानसम्बन्धी आवश्यकता छलफल गर्ने उद्देश्यले आफ्नो जानकारी साझा गर्नुहुन्छ।"}
              </p>

              <button
                type="submit"
                className="inline-flex shrink-0 justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:opacity-90"
              >
                {contact.submit}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
          <p className="text-sm text-muted-foreground">
            {language === "en"
              ? "Not ready to submit an enquiry?"
              : "अहिले नै अनुरोध पठाउन तयार हुनुहुन्न?"}
          </p>

          <Link
            href="/services"
            className="mt-3 inline-flex text-sm font-semibold text-primary hover:underline"
          >
            {language === "en"
              ? "Explore our services →"
              : "हाम्रा सेवाहरू हेर्नुहोस् →"}
          </Link>
        </div>
      </section>
    </div>
  );
}