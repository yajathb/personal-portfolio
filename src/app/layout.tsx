import "./globals.css";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import { DarkModeProvider } from "@/components/DarkMode";
import ScrollRevealObserver from "@/components/ScrollRevealObserver";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import React from "react";

// Runs before hydration to prevent a light/dark flash on first paint.
const themeBootstrapScript = `(() => {
  try {
    const stored = localStorage.getItem("darkMode");
    const isDark = stored !== null
      ? stored === "true"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", isDark);
  } catch {
    // Ignore storage or media query access errors.
  }
})();`;

export const metadata: Metadata = {
  title: {
    default: "Yajath's Portfolio",
    template: "%s | Yajath's Portfolio",
  },
  description:
    "Personal portfolio of Yajath featuring projects, education, skills, and contact information.",
    verification: {
      google: "ctERC2mP_Ux5UniOV-1U2W51VgswZUdUUYkpxSpIIXo"
    },
  openGraph: {
    title: "Yajath's Portfolio",
    description:
      "Personal portfolio of Yajath featuring projects, education, skills, and contact information.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Yajath's Portfolio",
    description:
      "Personal portfolio of Yajath featuring projects, education, skills, and contact information.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <title>Yajath&apos;s Portfolio</title>
      </head>
      <body className="min-h-full flex flex-col">
        <Script
          id="theme-bootstrap"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeBootstrapScript }}
        />
        <DarkModeProvider>
          {/* Observes section/card visibility and toggles in-view animation classes. */}
          <ScrollRevealObserver />
          <Navbar />
          {children}
        </DarkModeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
