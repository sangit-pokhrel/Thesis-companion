"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import { useLanguage } from "@/components/language/LanguageProvider";
import { images } from "@/lib/images";

export default function ContactPage() {
  const { language, t } = useLanguage();
  const contact = t("contact");

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const academicLevels = {
    en: ["Bachelor's", "Master's", "MPhil", "PhD", "Other"],
    ne: ["स्नातक", "स्नातकोत्तर", "एमफिल", "पीएचडी", "अन्य"],
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

  const copy =
    language === "en"
      ? {
          badge: "Let's talk about your research",
          heroTitle: "Get in touch with us.",
          heroText:
            "Tell us about your research, thesis, dissertation, or academic project. Share where you are in the process and what kind of support you need.",
          emailTitle: "Email us",
          emailText: "thesiscompanionnepal@gmail.com",
          phoneTitle: "WhatsApp / Phone",
          phoneText: "+977 970-5428105",
          responseTitle: "Response time",
          responseText: "We usually respond within 24 hours.",
          locationTitle: "Our location",
          locationText: "Chardobato, Nepal",
          formLabel: "Start a conversation",
          formTitle: "Tell us about your project",
          formText:
            "The more context you provide, the easier it is for us to understand your research requirements.",
          detailsTitle: "Before you submit",
          detailOne: "Tell us your academic level and current research stage.",
          detailTwo: "Choose the service that best matches your requirement.",
          detailThree:
            "Use the message field to explain your topic, deadline, or specific questions.",
          required: "Required fields are marked by your browser.",
          mapLabel: "Find us",
          mapTitle: "Based in Kathmandu",
          mapText:
            "We support students and researchers in Nepal and beyond through online consultation and academic support.",
          faqLabel: "Quick answers",
          faqTitle: "What happens after I contact you?",
          faqOneTitle: "We review your request",
          faqOneText:
            "We first review the information you provide and understand the type of support you are looking for.",
          faqTwoTitle: "We clarify the requirement",
          faqTwoText:
            "If more information is needed, we will follow up so the scope is clear before work begins.",
          faqThreeTitle: "We discuss the next step",
          faqThreeText:
            "You receive a clear response with the relevant next steps for your research requirement.",
          ctaTitle: "Not sure what support you need?",
          ctaText:
            "That is completely fine. Send us a short message and we can understand your situation together.",
          ctaButton: "Explore our services",
          whatsapp: "Chat on WhatsApp",
        }
      : {
          badge: "तपाईंको अनुसन्धानबारे कुरा गरौं",
          heroTitle: "हामीसँग सम्पर्क गर्नुहोस्।",
          heroText:
            "आफ्नो अनुसन्धान, थेसिस, डिसर्टेसन वा शैक्षिक प्रोजेक्टबारे जानकारी दिनुहोस्। तपाईं कुन चरणमा हुनुहुन्छ र कस्तो सहयोग चाहिन्छ भन्ने बताउनुहोस्।",
          emailTitle: "इमेल गर्नुहोस्",
          emailText: "thesiscompanionnepal@gmail.com",
          phoneTitle: "WhatsApp / फोन",
          phoneText: "+977 970-5428105",
          responseTitle: "प्रतिक्रिया समय",
          responseText: "हामी सामान्यतया २४ घण्टाभित्र प्रतिक्रिया दिन्छौं।",
          locationTitle: "हाम्रो स्थान",
          locationText: "चरदोबाटो, नेपाल",
          formLabel: "कुराकानी सुरु गर्नुहोस्",
          formTitle: "आफ्नो प्रोजेक्टबारे जानकारी दिनुहोस्",
          formText:
            "तपाईंले आवश्यक सन्दर्भ दिनुभयो भने तपाईंको अनुसन्धानसम्बन्धी आवश्यकता बुझ्न सजिलो हुन्छ।",
          detailsTitle: "पठाउनु अघि",
          detailOne: "आफ्नो शैक्षिक तह र अनुसन्धानको वर्तमान चरण बताउनुहोस्।",
          detailTwo: "तपाईंको आवश्यकतासँग मिल्ने सेवा छान्नुहोस्।",
          detailThree:
            "सन्देशमा आफ्नो विषय, समयसीमा वा विशेष प्रश्न उल्लेख गर्नुहोस्।",
          required: "आवश्यक विवरणहरू फारममा उल्लेख गरिएको छ।",
          mapLabel: "हामीलाई खोज्नुहोस्",
          mapTitle: "काठमाडौंमा आधारित",
          mapText:
            "हामी नेपाल तथा बाहिरका विद्यार्थी र अनुसन्धानकर्तालाई अनलाइन परामर्श तथा शैक्षिक सहयोग प्रदान गर्छौं।",
          faqLabel: "छोटो जानकारी",
          faqTitle: "सम्पर्क गरेपछि के हुन्छ?",
          faqOneTitle: "हामी तपाईंको अनुरोध हेर्छौं",
          faqOneText:
            "तपाईंले दिएको जानकारी हेरेर आवश्यक सहयोगको प्रकार बुझ्छौं।",
          faqTwoTitle: "आवश्यकता स्पष्ट गर्छौं",
          faqTwoText:
            "थप जानकारी आवश्यक भए काम सुरु गर्नुअघि आवश्यक विवरणबारे सम्पर्क गर्छौं।",
          faqThreeTitle: "अर्को चरणबारे छलफल गर्छौं",
          faqThreeText:
            "तपाईंको अनुसन्धान आवश्यकताअनुसार स्पष्ट प्रतिक्रिया र अर्को चरण प्राप्त गर्नुहुनेछ।",
          ctaTitle: "कस्तो सहयोग चाहिन्छ भन्ने निश्चित छैन?",
          ctaText:
            "चिन्ता लिनु पर्दैन। छोटो सन्देशबाट सुरु गर्नुहोस् र हामी तपाईंको आवश्यकता बुझ्न सहयोग गर्छौं।",
          ctaButton: "हाम्रा सेवाहरू हेर्नुहोस्",
          whatsapp: "WhatsApp मा कुरा गर्नुहोस्",
        };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (submitting) return;

    setSubmitting(true);

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

      if (!response.ok) return;

      setSubmitted(true);
      form.reset();
    } catch {
      // Keep the existing page state unchanged if the request fails.
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <main className="bg-background">
        <section className="mx-auto flex min-h-[70vh] max-w-4xl items-center px-6 py-24 lg:px-8">
          <div className="w-full rounded-3xl border border-border bg-muted/30 p-10 text-center shadow-sm sm:p-16">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-accent-foreground shadow-sm">
              <CheckCircle2 className="h-8 w-8" />
            </div>

            <h1 className="mt-7 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {contact.thankYou}
            </h1>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-muted-foreground">
              {contact.received}
            </p>

            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90"
            >
              {contact.another}
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.contact.hero}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
          <div className="absolute inset-0 bg-linear-to-r from-primary via-primary/90 to-primary/65" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-36 lg:px-8 lg:pb-28 lg:pt-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent backdrop-blur-sm">
              {copy.badge}
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {copy.heroTitle}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              {copy.heroText}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-bold text-accent-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:brightness-95"
              >
                {contact.submit}
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="https://wa.me/9779705428105"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/15"
              >
                <MessageCircle className="h-4 w-4" />
                {copy.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact overview */}
      <section className="relative z-10 -mt-10 px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          <a
            href="mailto:thesiscompanionnepal@gmail.com"
            className="group rounded-2xl border border-border bg-background p-5 shadow-lg shadow-primary/5 transition-all hover:-translate-y-0.5"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-primary dark:text-accent">
                <Mail className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h2 className="text-sm font-bold text-foreground">
                  {copy.emailTitle}
                </h2>
                <p className="mt-1 break-all text-sm leading-6 text-muted-foreground group-hover:text-primary dark:group-hover:text-accent">
                  {copy.emailText}
                </p>
              </div>
            </div>
          </a>

          <a
            href="https://wa.me/9779705428105"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-border bg-background p-5 shadow-lg shadow-primary/5 transition-all hover:-translate-y-0.5"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-primary dark:text-accent">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-foreground">
                  {copy.phoneTitle}
                </h2>
                <p className="mt-1 text-sm leading-6 text-muted-foreground group-hover:text-primary dark:group-hover:text-accent">
                  {copy.phoneText}
                </p>
              </div>
            </div>
          </a>

          <div className="rounded-2xl border border-border bg-background p-5 shadow-lg shadow-primary/5">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-primary dark:text-accent">
                <Clock3 className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-foreground">
                  {copy.responseTitle}
                </h2>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {copy.responseText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section
        id="contact-form"
        className="bg-muted/30 px-6 py-20 lg:px-8 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              {copy.formLabel}
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {copy.formTitle}
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              {copy.formText}
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
              <div className="border-b border-border px-5 py-4">
                <p className="text-sm font-bold text-foreground">
                  {copy.detailsTitle}
                </p>
              </div>

              <div className="divide-y divide-border">
                {[copy.detailOne, copy.detailTwo, copy.detailThree].map(
                  (item, index) => (
                    <div key={item} className="flex gap-3 px-5 py-4">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-primary dark:text-accent">
                        {index + 1}
                      </span>
                      <p className="text-sm leading-6 text-muted-foreground">
                        {item}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </div>

            <a
              href="mailto:thesiscompanionnepal@gmail.com"
              className="mt-5 flex items-center gap-3 rounded-2xl border border-border bg-background p-4 transition-colors hover:border-accent/50"
            >
              <Mail className="h-5 w-5 shrink-0 text-primary dark:text-accent" />
              <span className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {copy.emailTitle}
                </span>
                <span className="mt-1 block break-all text-sm font-semibold text-foreground">
                  {copy.emailText}
                </span>
              </span>
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-border bg-background p-6 shadow-xl shadow-primary/5 sm:p-8 lg:p-10"
          >
            <div className="mb-8 flex items-end justify-between gap-5 border-b border-border pb-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                  {contact.heading}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {copy.required}
                </p>
              </div>

              <div className="hidden h-10 w-10 items-center justify-center rounded-xl bg-primary text-white sm:flex">
                <MessageCircle className="h-5 w-5" />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-foreground"
                >
                  {contact.name}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder={contact.namePlaceholder}
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/5"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-foreground"
                >
                  {contact.email}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder={contact.emailPlaceholder}
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/5"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="text-sm font-semibold text-foreground"
                >
                  {contact.phone}
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder={contact.phonePlaceholder}
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/5"
                />
              </div>

              <div>
                <label
                  htmlFor="academicLevel"
                  className="text-sm font-semibold text-foreground"
                >
                  {contact.academicLevel}
                </label>
                <select
                  id="academicLevel"
                  name="academicLevel"
                  required
                  defaultValue=""
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/5"
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

              <div className="sm:col-span-2">
                <label
                  htmlFor="service"
                  className="text-sm font-semibold text-foreground"
                >
                  {contact.service}
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/5"
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

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-foreground"
                >
                  {contact.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={7}
                  placeholder={contact.messagePlaceholder}
                  className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm leading-6 text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/5"
                />
              </div>
            </div>

            <div className="mt-7 border-t border-border pt-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-md text-xs leading-5 text-muted-foreground">
                  {language === "en"
                    ? "By submitting this form, you are sharing your information for the purpose of discussing your research requirements."
                    : "यो फारम पठाउँदा तपाईंले आफ्नो अनुसन्धानसम्बन्धी आवश्यकता छलफल गर्ने उद्देश्यले आफ्नो जानकारी साझा गर्नुहुन्छ।"}
                </p>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting
                    ? language === "en"
                      ? "Sending..."
                      : "पठाउँदै..."
                    : contact.submit}
                  {!submitting && <ArrowRight className="h-4 w-4" />}
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Embedded map */}
      <section className="bg-background px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                {copy.mapLabel}
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {copy.mapTitle}
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                {copy.mapText}
              </p>

              <div className="mt-6 flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary dark:text-accent" />
                <div>
                  <p className="text-sm font-bold text-foreground">
                    Thesis Companion
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {copy.locationText}
                  </p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Kathmandu%2C%20Nepal"
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent dark:text-accent"
              >
                {language === "en"
                  ? "Open in Google Maps"
                  : "Google Maps मा खोल्नुहोस्"}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border bg-muted shadow-lg">
              <iframe
                title={
                  language === "en"
                    ? "Thesis Companion location in Kathmandu"
                    : "चरदोबाटोमा Thesis Companion को स्थान"
                }
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.7!2d85.39!3d27.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb10d4839f86b1%3A0x1e8d285c005f9c1e!2sArtova%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2snp!4v1710000000000"
                className="h-[360px] w-full border-0 sm:h-[430px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/30 px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              {copy.faqLabel}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {copy.faqTitle}
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { title: copy.faqOneTitle, text: copy.faqOneText },
              { title: copy.faqTwoTitle, text: copy.faqTwoText },
              { title: copy.faqThreeTitle, text: copy.faqThreeText },
            ].map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-border bg-background p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-sm font-bold text-primary dark:text-accent">
                  0{index + 1}
                </span>
                <h3 className="mt-5 text-base font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-border bg-primary px-6 py-16 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {copy.ctaTitle}
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
            {copy.ctaText}
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/9779705428105"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground transition-all hover:-translate-y-0.5 hover:brightness-95"
            >
              <MessageCircle className="h-4 w-4" />
              {copy.whatsapp}
            </a>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/15"
            >
              {copy.ctaButton}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
