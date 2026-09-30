"use client";

import { useState } from "react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted] = useState(true);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${
        theme === "light" ? "dark" : "light"
      } mode`}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-muted"
    >
      {mounted ? (
        theme === "light" ? (
          <span aria-hidden="true">☾</span>
        ) : (
          <span aria-hidden="true">☀</span>
        )
      ) : (
        <span aria-hidden="true">◐</span>
      )}
    </button>
  );
}