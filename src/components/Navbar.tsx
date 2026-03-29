import Link from "next/link";
import DarkModeToggle from "@/components/DarkMode";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <div className="w-full h-16 flex items-center justify-center">
      {NAV_LINKS.map(({ href, label }, index) => (
        <Link
          key={href}
          href={href}
          className={
            index === 0
              ? "text-xl font-bold text-foreground hover:text-(--muted-foreground)"
              : "ml-10 text-xl font-bold text-foreground hover:text-(--muted-foreground)"
          }
        >
          {label}
        </Link>
      ))}
      <DarkModeToggle />
    </div>
  );
}
