"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import DarkModeToggle from "@/components/DarkMode";

// Single source of truth for header anchors used by section IDs on the home page.
const NAV_LINKS = [
	{ href: "/#home", label: "Home" },
	{ href: "/#about", label: "About" },
	{ href: "/#education", label: "Education" },
	{ href: "/#projects", label: "Projects" },
	{ href: "/#skills", label: "Skills" },
	{ href: "/#contact", label: "Contact" },
];

export default function Navbar() {
	const pathname = usePathname();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// The portfolio is a single-page route; non-root paths render the 404 view.
	if (pathname !== "/") {
		return null;
	}

	return (
		<header className="site-nav" aria-label="Primary">
			<div className="site-nav-inner">
				<Link href="/" className="site-nav-brand" aria-label="Yajath Portfolio Home">
					<span className="site-nav-brand-mark" aria-hidden="true">YB</span>
					<span className="site-nav-brand-text">Yajath Barve</span>
				</Link>
				<div className="site-nav-actions">
					<div className="site-nav-theme">
						<DarkModeToggle />
					</div>
					<button
						type="button"
						className="site-nav-toggle"
						onClick={() => setIsMenuOpen((prev) => !prev)}
						aria-expanded={isMenuOpen}
						aria-controls="site-nav-links"
						aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					>
						{isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
					</button>
				</div>
				<nav
					id="site-nav-links"
					className={`site-nav-links ${isMenuOpen ? "is-open" : ""}`.trim()}
				>
					<div className="site-nav-links-core">
						{NAV_LINKS.map(({ href, label }) => (
							<Link
								key={href}
								href={href}
								className="site-nav-link"
								onClick={() => setIsMenuOpen(false)}
							>
								{label}
							</Link>
						))}
					</div>
				</nav>
			</div>
		</header>
	);
}
