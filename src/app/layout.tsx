import "./globals.css";
import Navbar from "@/components/Navbar";
import { DarkModeProvider } from "@/components/DarkMode";

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
          <Navbar />
          {children}
        </DarkModeProvider>
      </body>
    </html>
  );
}
