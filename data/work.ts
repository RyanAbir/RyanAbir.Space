// Everything the work cards and case-study pages show. Facts only: no invented clients, revenue or
// traffic. Client and employer details follow what each one agreed to share.

export type Tone = "acc" | "ok" | "blue" | "grey";

export type Metric = { value: string; label: string };

export type Box = { title: string; body: string; gate?: boolean; dashed?: boolean };

export type CaseStudy = {
  slug: string;
  title: string;
  tags: { label: string; tone: Tone }[];
  /** One or two sentences for the card on the home page. */
  summary: string;
  /** The case study's opening line. */
  intro: string;
  facts: { label: string; value: string }[];
  metrics: Metric[];
  stack: string[];
  links?: { label: string; href: string }[];
  problem: { title: string; body: string[] };
  does: { title: string; steps: { title: string; body: string }[] };
  architecture: { title: string; rows: Box[][]; caption: string };
  decisions: { title: string; body: string }[];
  standing: { title: string; metrics: Metric[]; note: string };
  /** What the page may show in place of screenshots. */
  visuals: string;
  /** Large card (first two) or compact card on the home page. */
  featured: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "career-sales-agent",
    title: "Career & Sales Agent",
    tags: [
      { label: "AI agent", tone: "acc" },
      { label: "Own tool · in daily use", tone: "grey" },
    ],
    summary:
      "An autonomous agent that finds jobs and clients, writes only from verified facts, and runs the conversation on WhatsApp, Messenger and email, with every send checked in code and a human in the loop.",
    intro:
      "An autonomous agent that finds remote jobs and client leads, writes only from facts I've verified, and runs sales conversations on WhatsApp, Messenger and email, while every message passes a guardrail written in code and I stay one tap away.",
    facts: [
      { label: "Role", value: "Solo: design, build, deploy, run" },
      { label: "Status", value: "Running 24/7 on a Linux server" },
      { label: "Tests", value: "144 automated" },
      { label: "Timeline", value: "October 2026 – now" },
    ],
    metrics: [
      { value: "144", label: "automated tests" },
      { value: "10", label: "scheduled missions" },
      { value: "24/7", label: "on its own Linux server" },
    ],
    stack: [
      "Python 3.12",
      "Claude Agent SDK",
      "FastAPI",
      "SQLite",
      "Playwright",
      "WhatsApp Cloud API",
      "Telegram Bot API",
      "React + Vite PWA",
      "systemd · Tailscale",
    ],
    problem: {
      title: "Job hunting and client hunting are two full-time jobs.",
      body: [
        "Every day means reading hundreds of job posts and group posts, checking who can actually hire from Bangladesh, tailoring a CV, and following up with people who asked for exactly what I build. Most automation tools solve this by spamming, which burns accounts and reputation.",
        "I wanted the opposite: an agent that does the work at volume but never sends anything I wouldn't, and never puts my accounts at risk.",
      ],
    },
    does: {
      title: "Find. Write. Talk. Close.",
      steps: [
        {
          title: "Find jobs and clients",
          body: "Job boards and employers' own Greenhouse, Lever and Ashby boards; Facebook groups, Google Maps and web search for people asking for software.",
        },
        {
          title: "Write only from verified facts",
          body: "CVs and cover letters drawn from a master CV, with a citation check that drops any line it can't trace back to a fact.",
        },
        {
          title: "Talk like a sales partner",
          body: "Contacts people where their post asked, qualifies need, budget and timeline in the conversation, and spots fakes.",
        },
        {
          title: "Close, with my price",
          body: "Proposals wait for my price on Telegram; every deal ends as won or lost with the reason, so the agent learns.",
        },
      ],
    },
    architecture: {
      title: "Every action goes through one gate.",
      rows: [
        [
          { title: "Missions", body: "10 scheduled jobs: scout, inbox, social scan, lead hunt, nurture, reports" },
          { title: "Claude Agent SDK", body: "Opus for writing and judgement, Haiku for bulk scoring" },
          { title: "Knowledge base", body: "Master CV, playbooks and lessons learned, as Markdown" },
        ],
        [
          {
            title: "Guardrail gate",
            body: "Autonomy level per action · daily limits · do-not-contact · blocked placeholders · link rules · 30-minute stop window · platform pause on any security check · audit log",
            gate: true,
          },
        ],
        [
          { title: "Email", body: "Gmail API and the outreach mailbox" },
          { title: "WhatsApp", body: "Official Cloud API, approved templates" },
          { title: "Messenger · Instagram", body: "The Page API and the agent's own browser" },
          { title: "Job forms", body: "Playwright fills them; the first three wait for me" },
        ],
        [
          { title: "Control", body: "Telegram bot with Approve, Stop and /price · an installable dashboard on a private network", dashed: true },
          { title: "Runs on", body: "Ubuntu on a home server: systemd services, a virtual screen for the browser", dashed: true },
        ],
      ],
      caption:
        "Missions call Claude, every outward action passes the guardrail gate, then reaches the channels. I control it from Telegram and the dashboard.",
    },
    decisions: [
      {
        title: "Guardrails live in code, not in the prompt",
        body: "A prompt can be talked around. One function decides every send: level, limit, recipient, attachments, placeholders. The model never sees a way past it.",
      },
      {
        title: "Strangers' text is data, never instructions",
        body: "Every job post, email and group post is fenced before it reaches Claude, so a hidden \"ignore your rules\" can't steer the agent.",
      },
      {
        title: "Never send twice",
        body: "If a message was typed but its arrival couldn't be confirmed, it counts as sent and I'm asked to check, instead of retrying into a duplicate.",
      },
      {
        title: "Moving conversations to official APIs",
        body: "Automating my personal Facebook hit encryption PINs, message requests and security checks. I moved conversations to the WhatsApp Cloud API and the Page inbox, where an agent may talk on its own.",
      },
    ],
    standing: {
      title: "Running, tested, honest about limits.",
      metrics: [
        { value: "144", label: "automated tests, run before every deploy" },
        { value: "10", label: "missions running unattended on a server" },
        { value: "1", label: "gate every outgoing message passes" },
      ],
      note: "Results are measured in my own pipeline, not a client's: no revenue or conversion figures are claimed.",
    },
    visuals: "Dashboard, deal board and Telegram approvals, shown with sample data on request.",
    featured: true,
  },
  {
    slug: "vworker",
    title: "vWorker",
    tags: [
      { label: "AI agent · SaaS", tone: "acc" },
      { label: "Own product · private beta", tone: "grey" },
    ],
    summary:
      "One inbox for Messenger, Instagram, WhatsApp and web chat, with an AI sales agent that answers in Bangla and English, quotes prices computed on the server, and takes orders.",
    intro:
      "A multi-tenant SaaS that puts every customer channel of an online seller in one inbox, and adds an AI sales agent that replies in Bangla, English and Banglish: finding products, quoting prices the server computes, and taking orders and bookings.",
    facts: [
      { label: "Role", value: "Solo: product, architecture, build" },
      { label: "Status", value: "Private beta with a pilot shop" },
      { label: "Tests", value: "~420 integration tests" },
      { label: "Evals", value: "36/36 on real models" },
    ],
    metrics: [
      { value: "~420", label: "integration tests" },
      { value: "1–7 paisa", label: "per AI reply" },
      { value: "1st", label: "real order taken by the agent" },
    ],
    stack: [
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
    problem: {
      title: "Sellers answer every customer by hand, in five places.",
      body: [
        "Online sellers in Bangladesh sell through Messenger, Instagram, WhatsApp and their website. Questions, orders and courier bookings get lost between chats and spreadsheets, and nobody can answer at 2 a.m.",
      ],
    },
    does: {
      title: "One inbox, one agent, real orders.",
      steps: [
        { title: "One inbox", body: "Every channel in one place, for the whole team, with handoff from the agent to a person." },
        { title: "An AI sales agent", body: "Answers in Bangla, English and Banglish, finds products and quotes prices the server computes." },
        { title: "Orders and couriers", body: "Takes orders and bookings, with Pathao, Steadfast and RedX courier adapters." },
        { title: "A platform", body: "A public REST API with signed webhooks for each seller's own systems." },
      ],
    },
    architecture: {
      title: "Built to keep every seller's data apart.",
      rows: [
        [
          { title: "Channels", body: "Messenger, Instagram, WhatsApp and web chat through the Meta Graph API" },
          { title: "Queue", body: "BullMQ on Redis: every incoming message is a job" },
        ],
        [
          { title: "Sales agent", body: "LLM tool use: product search over pgvector, server-side prices, order and booking tools", gate: true },
        ],
        [
          { title: "PostgreSQL + RLS", body: "Row-level security isolates every tenant in the database itself" },
          { title: "Dashboard", body: "Next.js 16 inbox, orders and settings" },
          { title: "Public API", body: "REST with signed webhooks" },
        ],
      ],
      caption: "Messages arrive as queued jobs; the agent acts only through tools; the database enforces tenant isolation.",
    },
    decisions: [
      { title: "The model never sets a price", body: "Prices come from the server. The agent quotes what a tool returns, so it can't invent a discount." },
      { title: "Tenant isolation in the database", body: "Postgres row-level security, not just application checks, keeps one seller's customers away from another's." },
      { title: "Evals against real models", body: "36 real-model evals cover the conversations that matter before a change ships." },
    ],
    standing: {
      title: "In private beta.",
      metrics: [
        { value: "36/36", label: "real-model evals passing" },
        { value: "1–7 paisa", label: "cost per AI reply" },
        { value: "Live", label: "orders taken end-to-end on a real Facebook page" },
      ],
      note: "Pre-launch: no revenue or customer counts are claimed.",
    },
    visuals: "Screenshots of the demo business only. A product demo is available on request.",
    featured: true,
  },
  {
    slug: "first-global-visa-consultancy",
    title: "First Global Visa Consultancy",
    tags: [
      { label: "Platform + AI", tone: "acc" },
      { label: "Employer · in production", tone: "grey" },
    ],
    summary:
      "The all-in-one system the company runs on: accounts, HR, sales, marketing and operations, with AI reports over its own data, an AI support assistant, VoIP calling and a staff Android app. Built as its sole developer.",
    intro:
      "As the company's sole developer, I designed and built the one system it runs on, replacing separate tools for accounts, HR, sales, marketing and operations, and put AI into every part of it.",
    facts: [
      { label: "Role", value: "Sole developer" },
      { label: "Status", value: "In daily production use" },
      { label: "Since", value: "June 2026" },
      { label: "Users", value: "The company's own staff" },
    ],
    metrics: [
      { value: "5", label: "departments in one system" },
      { value: "AI", label: "support assistant in production" },
      { value: "Android", label: "staff app with push notifications" },
    ],
    stack: ["React", "Node.js", "Express", "Firebase / Firestore", "Redis", "BullMQ", "OpenAI", "Gemini", "RBAC"],
    problem: {
      title: "A growing company on scattered tools.",
      body: [
        "Sales, HR, accounts and operations each had their own process and tools, with no single view and a lot of updates chased by hand.",
      ],
    },
    does: {
      title: "One system, AI throughout.",
      steps: [
        { title: "Every department", body: "Accounts, HR, sales, marketing and operations in one platform with role-based access." },
        { title: "AI over company data", body: "Analyses the company's own data and writes reports for management." },
        { title: "AI support assistant", body: "Handles customer support in production." },
        { title: "Calls and a staff app", body: "VoIP calling, internal audio and video meetings, and an Android app with custom notifications." },
      ],
    },
    architecture: {
      title: "One platform, many roles.",
      rows: [
        [
          { title: "Web app", body: "React for every department" },
          { title: "Staff Android app", body: "Custom push notifications" },
        ],
        [{ title: "API and permissions", body: "Node.js and Express with role-based access control", gate: true }],
        [
          { title: "AI", body: "OpenAI and Gemini: reports, support assistant, task automation" },
          { title: "Background jobs", body: "Redis and BullMQ" },
          { title: "Calling", body: "VoIP and internal audio and video meetings" },
        ],
      ],
      caption: "One API with role-based access serves the web app and the staff app; AI and calling are built in.",
    },
    decisions: [
      { title: "Replace, don't integrate", body: "One system for every department instead of syncing several tools, so there's one source of truth." },
      { title: "Permissions first", body: "Role-based access across departments, because accounts and HR data can't be visible to everyone." },
      { title: "AI where the work is", body: "AI inside each module, from reports to support, rather than a separate chatbot on the side." },
    ],
    standing: {
      title: "In daily use at the company.",
      metrics: [
        { value: "Daily", label: "production use" },
        { value: "Sole", label: "developer, design to deploy" },
        { value: "5", label: "departments on one system" },
      ],
      note: "No efficiency percentages are claimed; results are described in words.",
    },
    visuals: "Screenshots and internal details aren't shareable. I'm happy to walk through the design on a call.",
    featured: false,
  },
  {
    slug: "shishu-mela",
    title: "Shishu Mela",
    tags: [
      { label: "Live", tone: "ok" },
      { label: "Client · e-commerce", tone: "grey" },
    ],
    summary:
      "A kids' store on Cloudflare Workers: cash-on-delivery checkout that never double-orders, an operations admin, and Meta and TikTok server-side ad tracking. Live since August 2026, about 221 tests.",
    intro:
      "A storefront and operations admin for a children's products shop that sells through Facebook and TikTok ads, built on Cloudflare Workers for a paying client.",
    facts: [
      { label: "Role", value: "Solo, for a paying client" },
      { label: "Status", value: "Live since August 2026" },
      { label: "Tests", value: "~221 automated, in CI" },
      { label: "Hosting", value: "Cloudflare Workers" },
    ],
    metrics: [
      { value: "Live", label: "since August 2026" },
      { value: "~221", label: "automated tests in CI" },
      { value: "1", label: "order per checkout, always" },
    ],
    stack: ["Next.js 15", "React 19", "TypeScript", "PostgreSQL", "Drizzle ORM", "Cloudflare Workers", "Meta Conversions API", "Vitest / Playwright"],
    links: [{ label: "Visit the live store", href: "https://shishumela.site" }],
    problem: {
      title: "Ads bring the buyers; the store has to keep up.",
      body: [
        "The shop needed a fast mobile store, cash-on-delivery checkout, an admin that keeps up with order volume, and ad tracking it could trust.",
      ],
    },
    does: {
      title: "Store, admin and growth tools.",
      steps: [
        { title: "Checkout", body: "Server-priced cash-on-delivery checkout with idempotency keys and row-locked stock." },
        { title: "Operations", body: "Risk flags, courier assignment, refunds, invoices and an audit log." },
        { title: "Growth", body: "A landing-page builder for ad campaigns and first-party funnel analytics." },
        { title: "Tracking", body: "Meta and TikTok server-side conversion tracking." },
      ],
    },
    architecture: {
      title: "Correct under double clicks.",
      rows: [
        [
          { title: "Storefront", body: "Next.js on Cloudflare Workers" },
          { title: "Admin", body: "Order operations and campaign tools" },
        ],
        [{ title: "Checkout", body: "Idempotency keys, row-locked stock, prices computed on the server", gate: true }],
        [
          { title: "PostgreSQL", body: "Drizzle ORM" },
          { title: "Outbox", body: "A transactional outbox processed by cron" },
          { title: "Ad platforms", body: "Meta and TikTok server-side events" },
        ],
      ],
      caption: "Checkout is idempotent and stock is locked per row; side effects leave through an outbox.",
    },
    decisions: [
      { title: "Idempotent checkout", body: "A double-click plus a refresh still creates exactly one order." },
      { title: "A transactional outbox", body: "Ad events and notifications are written with the order and sent by cron, so none are lost or doubled." },
      { title: "Tests before features", body: "About 221 automated tests run in CI on every change." },
    ],
    standing: {
      title: "In production.",
      metrics: [
        { value: "Aug 2026", label: "live since" },
        { value: "~221", label: "automated tests" },
        { value: "CI", label: "every change tested before it ships" },
      ],
      note: "No sales, revenue or traffic figures are claimed.",
    },
    visuals: "The store is public: shishumela.site.",
    featured: false,
  },
];

export type MoreItem = { title: string; tag: string; body: string; link?: { label: string; href: string } };

export const moreWork: MoreItem[] = [
  {
    title: "Distributed Agentic Workspace",
    tag: "Own tool",
    body: "Runs AI coding agents across several machines, with signed workers, a job queue with recovery and approval gates. 372 tests.",
  },
  {
    title: "Repair marketplace with AI agents",
    tag: "Client · pre-launch",
    body: "Booking, a dispatch engine with timed accept-once offers, a Flutter app and three AI agents behind human approval. 900+ tests.",
  },
  {
    title: "JobFit Copilot",
    tag: "Demo · live",
    body: "AI job-match SaaS: fit scores, missing skills and tailored applications.",
    link: { label: "Open the demo", href: "https://jobfit-copilot-sigma.vercel.app" },
  },
  {
    title: "Reach · Salluo Board",
    tag: "Team projects",
    body: "AI-agent email outreach and a self-hosted control panel for AI agents, built as part of a team.",
  },
];

export const experience = [
  {
    when: "Jun 2026 – now",
    title: "Full Stack Software Developer · First Global Visa Consultancy, Dhaka",
    body: "Sole developer of the company's all-in-one system, with AI in every part of it: management reports over company data, a customer-support assistant in production, VoIP and video calling, and a staff Android app.",
  },
  {
    when: "2024 – now",
    title: "Freelance Full-Stack Developer · remote",
    body: "End-to-end builds for paying clients, a live e-commerce store and a repair marketplace with AI agents, plus my own products: vWorker and the career and sales agent.",
  },
];

export const agentLayers = [
  { title: "Narrow tools", body: "The agent acts only through tools I wrote and permission-check. It can't reach an account directly." },
  { title: "Guardrails in code", body: "Daily limits, a do-not-contact list, blocked placeholders and link rules sit in one gate the model can't argue with." },
  { title: "A human in the loop", body: "Approvals, a 30-minute stop window and prices only a person sets: one tap on a phone." },
  { title: "Untrusted input fenced", body: "Posts, emails and web pages reach the model as quoted data, so a hidden instruction can't steer it." },
  { title: "Tested and logged", body: "Evals and automated tests on every path, an audit log of every action, and one kill switch." },
];

export const stackRows = [
  { label: "Languages", items: "TypeScript · Python · Go" },
  { label: "AI", items: "Claude Agent SDK · OpenAI · Gemini · tool use · pgvector · evals" },
  { label: "Backend", items: "Node · Fastify · Express · FastAPI · Flask · PostgreSQL · Redis" },
  { label: "Frontend & infra", items: "Next.js · React · Docker · Cloudflare · Linux · Tailscale" },
];

export function caseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
