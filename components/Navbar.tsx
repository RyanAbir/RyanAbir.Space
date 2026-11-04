"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { NAV_LINKS, RESUME_URL, SITE_NAME } from "../lib/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav className={`nav${open ? " open" : ""}`}>
      <div className="wrap">
        <Link className="brand" href="/" aria-label={`${SITE_NAME} — home`}>
          <Logo />
          <b>{SITE_NAME}</b>
        </Link>
        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
          <a
            className="btn btn-ghost"
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Résumé ↗
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
      <div className="mobile-menu" id="mobile-menu" hidden={!open}>
        <div className="wrap">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
