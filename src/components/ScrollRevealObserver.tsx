"use client";

import { useEffect } from "react";

export default function ScrollRevealObserver() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const root = document.documentElement;
    // Observe all elements that participate in the reveal animation system.
    const nodes = document.querySelectorAll<HTMLElement>(".section-reveal, .about-card, .timeline-item, .project-card, .skill-card, .wireframe-card");

    let pointerRaf = 0;

    const updatePointerGlow = (clientX: number, clientY: number) => {
      if (pointerRaf) return;
      pointerRaf = window.requestAnimationFrame(() => {
        root.style.setProperty("--cursor-x", `${clientX}px`);
        root.style.setProperty("--cursor-y", `${clientY}px`);
        root.style.setProperty("--cursor-glow-opacity", "0.2");
        pointerRaf = 0;
      });
    };

    const onPointerMove = (event: PointerEvent) => {
      updatePointerGlow(event.clientX, event.clientY);
    };

    const onPointerLeave = () => {
      root.style.setProperty("--cursor-glow-opacity", "0");
    };

    if (prefersReducedMotion) {
      // Keep content immediately visible when motion reduction is requested.
      nodes.forEach((node) => node.classList.add("is-inview"));
      root.style.setProperty("--cursor-glow-opacity", "0");
      return;
    }

    if (hasFinePointer) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      window.addEventListener("pointerleave", onPointerLeave);
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
      if (pointerRaf) {
        window.cancelAnimationFrame(pointerRaf);
      }
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return null;
}

