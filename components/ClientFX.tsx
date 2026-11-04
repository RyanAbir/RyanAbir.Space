"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Client-only progressive enhancement: reveal `.reveal` elements as they scroll into view, again on every
// page (the case studies are client-side navigations). Content is never permanently hidden: a safety timeout
// and a no-observer fallback both force-reveal, and the `.js` gate means it's fully visible without JS.
export default function ClientFX() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.in)"));
    let io: IntersectionObserver | null = null;

    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              io?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
      );
      els.forEach((el) => io?.observe(el));
    } else {
      els.forEach((el) => el.classList.add("in"));
    }

    const safety = window.setTimeout(() => {
      els.forEach((el) => el.classList.add("in"));
    }, 1600);

    return () => {
      window.clearTimeout(safety);
      io?.disconnect();
    };
  }, [pathname]);

  return null;
}
