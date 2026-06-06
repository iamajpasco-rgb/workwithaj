import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefers;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="relative grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground transition-all duration-300 hover:scale-110 hover:shadow-soft active:scale-95"
    >
      <Sun className={`h-4 w-4 absolute transition-all duration-500 ${dark ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"}`} />
      <Moon className={`h-4 w-4 absolute transition-all duration-500 ${dark ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"}`} />
    </button>
  );
}
