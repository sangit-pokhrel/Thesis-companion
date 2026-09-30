"use client";

import dynamic from "next/dynamic";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

function ThemeToggleContent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${
        theme === "light" ? "dark" : "light"
      } mode`}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-muted"
    >
      {theme === "light" ? (
        <Moon size={18} strokeWidth={1.8} aria-hidden="true" />
      ) : (
        <Sun size={18} strokeWidth={1.8} aria-hidden="true" />
      )}
    </button>
  );
}

const ThemeToggle = dynamic(() => Promise.resolve(ThemeToggleContent), {
  ssr: false,
});

export default ThemeToggle;