export const theme = {
  colors: {
    light: {
      background: "#FFFFFF",
      foreground: "#0F172A",
      primary: "#0B1F3A",
      primaryForeground: "#FFFFFF",
      accent: "#F5C400",
      accentForeground: "#0F172A",
      muted: "#F1F5F9",
      mutedForeground: "#64748B",
      border: "#E2E8F0",
    },

    dark: {
      background: "#07111F",
      foreground: "#F8FAFC",
      primary: "#0F2A4A",
      primaryForeground: "#FFFFFF",
      accent: "#F5C400",
      accentForeground: "#07111F",
      muted: "#111D2D",
      mutedForeground: "#94A3B8",
      border: "#26364A",
    },
  },

  radius: {
    small: "0.375rem",
    medium: "0.625rem",
    large: "1rem",
    full: "9999px",
  },
} as const;