import { Theme } from "../types";

export const theme: Theme = {
  colors: {
    primary: "#2563eb",
    primaryDark: "#1d4ed8",
    secondary: "#64748b",
    background: "#ffffff",
    surface: "#f8fafc",
    text: "#0f172a",
    textLight: "#64748b",
    accent: "#f59e0b",
    success: "#10b981",
    error: "#ef4444",
    border: "#e2e8f0",
  },
  breakpoints: {
    mobile: "768px",
    tablet: "1024px",
    desktop: "1280px",
  },
  spacing: {
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "3rem",
    xxl: "4rem",
    xxxl: "10rem",
  },
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    lg: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
  },
};
