"use client";

import { useEffect } from "react";

export default function ScrollRevealObserver() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Observe all elements that participate in the reveal animation system.
    const nodes = document.querySelectorAll<HTMLElement>(".section-reveal, .about-card, .timeline-item, .project-card, .skill-card, .wireframe-card");

    if (prefersReducedMotion) {
      // Keep content immediately visible when motion reduction is requested.
      nodes.forEach((node) => node.classList.add("is-inview"));
      return;
    }

    // Toggle visibility class as elements enter/leave the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-inview", entry.isIntersecting);
        });
      },
      {
        // Trigger as soon as an element starts entering viewport; this helps
        // bottom-of-page items animate in without needing extra scroll room.
        threshold: 0,
        rootMargin: "0px",
      },
    );

    nodes.forEach((node) => observer.observe(node));

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}

