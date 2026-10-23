export type ProjectStatus =
  | "Featured"
  | "Live"
  | "Beta"
  | "Pre-launch"
  | "Internal Tool"
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
  // ── Products I designed and built solo (keep exact titles — Projects.tsx keys custom previews on them) ──
  {
    title: "vWorker",
    type: "Own product · multi-tenant SaaS · built solo, AI-assisted",
    status: "Beta",
    problem:
      "Online sellers in Bangladesh answer customers by hand across Messenger, Instagram, WhatsApp and their website — orders get lost between chats, couriers, and spreadsheets.",
    built:
      "A multi-tenant SaaS that puts every channel in one inbox and adds an AI sales agent that replies in Bangla, English, and Banglish — finding products, quoting server-computed prices, and taking orders and bookings — with order management, Pathao / Steadfast / RedX courier adapters, a public REST API with signed webhooks, and Postgres row-level security isolating every tenant.",
    result:
      "In private beta with a pilot shop: the agent has taken orders end-to-end on a live Facebook page, passes 36/36 real-model evals, and costs about 1–7 paisa per reply.",
    tech: [
      "TypeScript",
      "Fastify",
      "Next.js 16",
      "PostgreSQL + RLS",
      "Drizzle ORM",
      "BullMQ / Redis",
      "pgvector",
      "LLM tool use",
      "Meta Graph API",
    ],
    requestLabel: "Product demo on request",
  },
  {
    title: "Shishu Mela",
    type: "Client e-commerce · full-stack · Next.js on Cloudflare",
    status: "Live",
    problem:
      "A kids' products shop selling through Facebook and TikTok ads needed a fast mobile store, cash-on-delivery checkout, an admin that keeps up with order volume, and ad tracking it could trust.",
    built:
      "A storefront and operations admin on Cloudflare Workers: server-priced COD checkout with idempotency keys and row-locked stock, order operations (risk flags, courier assignment, refunds, invoices, audit log), a landing-page builder for ad campaigns, Meta and TikTok server-side conversion tracking, first-party funnel analytics, and a transactional outbox processed by cron.",
    result:
      "In production since August 2026, backed by ~220 automated tests and CI — a double-click plus refresh still creates exactly one order.",
    tech: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "Cloudflare Workers",
      "Meta Conversions API",
      "Vitest / Playwright",
    ],
    links: {
      liveDemo: "https://shishumela.site",
    },
  },
  {
    title: "Modern Service",
    type: "Own product · service marketplace + mobile app · built solo, AI-assisted",
    status: "Pre-launch",
    problem:
      "Appliance-repair bookings run on phone calls and chat — jobs get double-booked, technicians miss offers, and nobody owns the follow-up.",
    built:
      "A repair marketplace with guest booking, a dispatch engine that sends timed job offers to ranked providers, a Flutter app for providers and technicians, a unified staff inbox for web chat, Messenger, Instagram and WhatsApp, and three AI agents (support, operations, admin) that act only through permission-checked tools and human approvals.",
    result:
      "Pilot-ready, with 900+ domain and integration tests on real PostgreSQL; under load every booking was accepted exactly once and the next offer went out in under a second.",
    tech: [
      "Next.js 16",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Flutter",
      "Supabase Auth",
      "AI agents",
      "Meta Graph API",
      "Playwright",
    ],
    requestLabel: "Walkthrough available on request",
  },
  {
    title: "Distributed Agentic Workspace",
    type: "Own tool · distributed systems · Go + TypeScript · built solo, AI-assisted",
    status: "Internal Tool",
    problem:
      "Running coding agents and local AI models across several machines meant juggling terminals and hand-offs, with no record of what ran where or who approved it.",
    built:
      "A self-hosted control plane that turns Windows and macOS machines into a private worker cluster: a Go agent with Ed25519-signed requests, a Postgres job queue with fenced leases and idempotent submission, single-use approval gates, Claude Code / Codex pipelines with plan and review stages, and an OpenAI-compatible gateway to a local LLM — reachable only over a private network.",
    result:
      "In daily use across 4 machines: 75 of 85 acceptance criteria passing, and 4 of 5 multi-agent team tasks delivered working, tested code.",
    tech: [
      "TypeScript",
      "Go",
      "Fastify",
      "Next.js",
      "PostgreSQL",
      "Ed25519",
      "Tailscale",
      "Ollama",
      "Claude Code / Codex",
    ],
    requestLabel: "Architecture available on request",
  },

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
];
