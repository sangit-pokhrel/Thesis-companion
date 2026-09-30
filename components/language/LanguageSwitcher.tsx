"use client";

import { useLanguage } from "./LanguageProvider";

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={`Switch to ${
        language === "en" ? "Nepali" : "English"
      }`}
      className="inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-border bg-background px-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
    >
      {language === "en" ? "ने" : "EN"}
    </button>
  );
}