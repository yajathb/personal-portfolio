"use client";

import { Moon, Sun } from "lucide-react";
import {
  createContext,
  useContext,
  useEffect,
  useCallback,
  useMemo,
  useSyncExternalStore,
  useState,
  type ReactNode,
} from "react";

interface DarkModeContextType {
  isDark: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

function getInitialDarkMode() {
  // During SSR there is no window/localStorage, so default to light and hydrate later.
  if (typeof window === "undefined") return false;

  // Saved preference wins; fallback to OS theme when no preference exists.
  const stored = window.localStorage.getItem("darkMode");
  if (stored !== null) return stored === "true";

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function DarkModeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState<boolean>(getInitialDarkMode);

  useEffect(() => {
    // Keep DOM class and persisted preference in sync with React state.
    const html = document.documentElement;
    html.classList.toggle("dark", isDark);
    window.localStorage.setItem("darkMode", String(isDark));
  }, [isDark]);

  const toggleDarkMode = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  const value = useMemo(
    () => ({ isDark, toggleDarkMode }),
    [isDark, toggleDarkMode],
  );

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (!context) {
    // Fail fast if a consumer is rendered outside provider scope.
    throw new Error("useDarkMode must be used within DarkModeProvider");
  }
  return context;
}

export default function DarkModeToggle() {
  const { isDark, toggleDarkMode } = useDarkMode();

  // Ensures the first client render matches the server markup to avoid hydration mismatch.
  const isHydrated = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const showDarkState = isHydrated && isDark;

  return (
    <button
      onClick={toggleDarkMode}
      aria-label={showDarkState ? "Switch to light mode" : "Switch to dark mode"}
      className="p-2 rounded-lg transition-colors duration-200 hover-scale ml-8"
      style={{
        backgroundColor: "var(--toggle-bg)",
        color: showDarkState ? "var(--toggle-icon-active)" : "var(--toggle-icon)",
      }}
    >
      {showDarkState ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
}