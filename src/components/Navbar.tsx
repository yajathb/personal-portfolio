"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import DarkModeToggle from "@/components/DarkMode";

// Single source of truth for header anchors used by section IDs on the home page.
const NAV_LINKS = [
	{ href: "/", label: "Home" },
	{ href: "/#about", label: "About" },
	{ href: "/#education", label: "Education" },
	{ href: "/#projects", label: "Projects" },
	{ href: "/#skills", label: "Skills" },
	{ href: "/#contact", label: "Contact" },
];

export default function Navbar() {
	const pathname = usePathname();

	// The portfolio is a single-page route; non-root paths render the 404 view.
	if (pathname !== "/") {
		return null;
	}

	return (
		<div className="w-full h-16 flex items-center justify-center">
			{NAV_LINKS.map(({ href, label }, index) => (
				<Link
					key={href}
					href={href}
					className={
						// Keep the first link aligned without left margin; others get spacing.
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
