export type ProjectStatus =
  | "Featured"
  | "Live"
  | "Completed"
  | "In Progress"
  | "Confidential"
  | "Client Work";

export type Project = {
  title: string;
  type: string;
  status: ProjectStatus;
  problem: string;
  built: string;
  result: string;
  tech: string[];
  /** Confidential cards have no public links — they show a request line + a locked preview. */
  confidential?: boolean;
  /** Text for the "… on request" line (confidential cards only). */
  requestLabel?: string;
  /** Glyph shown in the locked preview (confidential cards only). */
  previewIcon?: string;
  /** Caption under the glyph (confidential cards only). */
  previewCaption?: string;
  links?: {
    liveDemo: string;
    github?: string;
  };
};

export const projects: Project[] = [
  // ── Professional / confidential work (anonymised — no client names, no URLs) ──
  {
    title: "AI-Automated Operations Platform",
    type: "Internal business platform · full-stack",
    status: "Confidential",
    problem:
      "A services company ran sales, HR, and accounts on manual, disconnected processes — no single operational view, and updates chased by hand.",
    built:
      "A React + Node/Express platform that unifies HR, accounts, and a fully automated sales section, with custom AI agents (OpenAI & Google Generative AI) driving agentic marketing and task automation, background job queues for async work, browser push and messaging notifications, and role-based access over a Firestore data store.",
    result:
      "Manual coordination replaced by automated workflows — staff act on what the system surfaces instead of tracking it down.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "Firebase / Firestore",
      "Redis",
      "BullMQ",
      "OpenAI",
      "Custom AI Agents",
      "RBAC",
    ],
    confidential: true,
    requestLabel: "Architecture available on request",
    previewIcon: "🔒",
    previewCaption: "Client & UI withheld under NDA — design shown on request",
  },
  {
    title: "Legacy Platform Modernization",
    type: "PHP → Python rebuild · re-architecture",
    status: "In Progress",
    problem:
      "An existing PHP platform had grown hard to maintain and extend, blocking new features.",
    built:
      "Re-architecting and migrating the system onto a modern Python/Flask stack with a lean, dependency-light design — a JSON API behind a vanilla-JS single-page frontend — preserving business logic and data integrity, and understanding the existing system before changing it rather than rewriting blindly.",
    result:
      "A maintainable codebase positioned for new development, migrated without disrupting the running operation.",
    tech: [
      "Python",
      "Flask",
      "SQLite",
      "Vanilla JS SPA",
      "JSON API",
      "Docker",
      "Legacy Migration",
    ],
    confidential: true,
    requestLabel: "Migration approach available on request",
    previewIcon: "⇄",
    previewCaption: "PHP → Python migration · details on request",
  },
  {
    title: "Financial & File-Handling Backend",
    type: "Backend engineering · money & documents",
    status: "Confidential",
    problem:
      "Systems that touch money and documents fail quietly — rounding errors, lost files, and unclear permissions.",
    built:
      "A backend that stores money as exact decimals (NUMERIC, never floats) for correct accounting, with hashed-password sessions, database migrations, and large-file handling via S3-compatible object storage (MinIO).",
    result:
      "Financial values that stay accurate to the cent, and reliable handling of original and deliverable files at scale.",
    tech: [
      "Flask",
      "PostgreSQL",
      "NUMERIC money",
      "Flask-Login",
      "Bcrypt",
      "MinIO / S3",
      "Gunicorn",
      "Traefik",
    ],
    confidential: true,
    requestLabel: "Architecture available on request",
    previewIcon: "🔒",
    previewCaption: "Handles money to the cent + large-file storage",
  },
  {
    title: "E-Commerce / Catalog Platform",
    type: "Online store · full-stack · Next.js / Cloudflare",
    status: "Client Work",
    problem:
      "A retail business needed a fast, modern online store built around a large, frequently-changing product catalog.",
    built:
      "A Next.js 15 / React 19 storefront in TypeScript with a type-safe PostgreSQL catalog (Drizzle ORM), JWT auth validated with Zod, S3-compatible image storage, automated catalog import scripts, and a unit + end-to-end test suite — deployed on Cloudflare Workers/Pages.",
    result:
      "A production e-commerce platform with a fully typed, maintainable codebase and catalog management that updates itself instead of by hand.",
    tech: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Drizzle ORM",
      "PostgreSQL",
      "JWT / Zod",
      "S3",
      "Cloudflare Workers",
      "Vitest / Playwright",
    ],
    links: {
      // TODO: replace with the live store URL *after* renaming the deployment
      // so the client's name is not in the URL. Add `github` here only if the repo is public.
      liveDemo: "https://REPLACE_WITH_LIVE_STORE_URL",
    },
  },

  // ── Self-made, live products (keep exact titles — Projects.tsx keys custom previews on them) ──
  {
    title: "JobFit Copilot",
    type: "AI SaaS · Full-stack web app",
    status: "Featured",
    problem:
      "Job seekers apply blindly and can't tell how well they actually fit a role.",
    built:
      "An AI assistant that scores a saved developer profile against any job post or link, flags matched and missing skills and red flags, suggests résumé keywords, and drafts a tailored application email — all tracked in a dashboard.",
    result:
      'Turns a vague "am I a fit?" into a clear score, a red-flag list, and a ready-to-send application.',
    tech: [
      "Next.js",
      "TypeScript",
      "Supabase Auth",
      "Gemini API",
      "Tailwind CSS",
      "Vercel",
    ],
    links: {
      liveDemo: "https://jobfit-copilot-sigma.vercel.app",
      github: "https://github.com/RyanAbir/jobfit-copilot",
    },
  },
  {
    title: "SaaS Billing Starter",
    type: "SaaS billing system",
    status: "Live",
    problem:
      "Subscription billing is where SaaS apps quietly leak revenue and break.",
    built:
      "A complete Stripe billing lifecycle — checkout, webhook-synced subscription state, customer portal, dunning, scheduled cancellation, duplicate-subscription prevention, and server-side plan-based feature gating.",
    result:
      "A drop-in billing layer that prevents duplicate charges and handles failed payments on its own.",
    tech: [
      "Next.js",
      "Stripe Billing",
      "Prisma",
      "Neon",
      "PostgreSQL",
      "Webhooks",
    ],
    links: {
      liveDemo: "https://saas-billing-starter-one.vercel.app",
      github: "https://github.com/RyanAbir/saas-billing-starter",
    },
  },
];
