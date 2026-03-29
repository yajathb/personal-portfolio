import "./globals.css";
import Navbar from "@/components/Navbar";
import { DarkModeProvider } from "@/components/DarkMode";
import ScrollRevealObserver from "@/components/ScrollRevealObserver";
import { Analytics } from "@vercel/analytics/next";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <title>Yajath&apos;s Portfolio</title>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrapScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <DarkModeProvider>
          {/* Observes section/card visibility and toggles in-view animation classes. */}
          <ScrollRevealObserver />
          <Navbar />
          {children}
        </DarkModeProvider>
        <Analytics />
      </body>
    </html>
  );
}
