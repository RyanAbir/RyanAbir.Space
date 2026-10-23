import { projects, type Project, type ProjectStatus } from "../data/projects";

const pillClass: Record<ProjectStatus, string> = {
  Featured: "pill featured",
  Live: "pill live",
  Beta: "pill featured",
  "Pre-launch": "pill done",
  "Internal Tool": "pill done",
  Completed: "pill done",
  "In Progress": "pill done",
  Confidential: "pill nda",
  "Client Work": "pill nda",
};

function hostOf(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

function Preview({ project }: { project: Project }) {
  // Confidential work: no live URL — show a locked frame instead.
  if (project.confidential) {
    return (
      <div className="frame">
        <div className="bar">
          <i />
          <i />
          <i />
          <span className="url">
            {`// ${project.status === "Client Work" ? "client work" : "under NDA"}`}
          </span>
        </div>
        <div className="fbody pv-conf">
          <div className="lock">{project.previewIcon ?? "🔒"}</div>
          <div className="cap">
            {project.previewCaption ??
              "Client & UI withheld — design shown on request"}
          </div>
        </div>
      </div>
    );
  }

  const url = project.links
    ? hostOf(project.links.liveDemo)
    : `// ${project.status.toLowerCase()}`;

  let body: React.ReactNode;
  switch (project.title) {
    case "vWorker":
      body = (
        <>
          <div className="pv-list">
            {["#0084FF", "#25D366", "#E1306C"].map((color) => (
              <div className="pv-item" key={color}>
                <span className="sw" style={{ background: color }} />
                <div className="tx">
                  <div className="a" />
                  <div className="b" />
                </div>
                <span className="pv-badge">AI</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
            <span className="pv-badge">order taken</span>
            <span className="pv-badge">courier booked</span>
            <span className="pv-badge">handoff</span>
          </div>
        </>
      );
      break;
    case "Shishu Mela":
      body = (
        <>
          <div className="pv-row">
            <div className="pv-kpi">
              <div className="l">Checkout</div>
              <div className="v a">COD</div>
            </div>
            <div className="pv-kpi">
              <div className="l">Couriers</div>
              <div className="v">3</div>
            </div>
          </div>
          <div className="pv-bars">
            <b style={{ height: "42%" }} />
            <b style={{ height: "56%" }} />
            <b style={{ height: "48%" }} />
            <b style={{ height: "70%" }} />
            <b className="a" style={{ height: "94%" }} />
            <b style={{ height: "76%" }} />
          </div>
          <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
            <span className="pv-badge">Meta CAPI</span>
            <span className="pv-badge">TikTok</span>
            <span className="pv-badge">funnel</span>
          </div>
        </>
      );
      break;
    case "Modern Service":
      body = (
        <>
          <div className="pv-row">
            <div className="pv-kpi">
              <div className="l">Offer window</div>
              <div className="v a">60s</div>
            </div>
            <div className="pv-kpi">
              <div className="l">Accepted</div>
              <div className="v">1×</div>
            </div>
          </div>
          <div className="pv-list" style={{ marginTop: 14 }}>
            {["var(--accent)", "var(--muted-2)"].map((color) => (
              <div className="pv-item" key={color}>
                <span className="sw" style={{ background: color }} />
                <div className="tx">
                  <div className="a" />
                  <div className="b" />
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
            <span className="pv-badge">support agent</span>
            <span className="pv-badge">ops agent</span>
            <span className="pv-badge">admin agent</span>
          </div>
        </>
      );
      break;
    case "Distributed Agentic Workspace":
      body = (
        <>
          <div className="pv-row">
            <div className="pv-kpi">
              <div className="l">Nodes online</div>
              <div className="v a">4</div>
            </div>
            <div className="pv-kpi">
              <div className="l">Approvals</div>
              <div className="v">Gated</div>
            </div>
          </div>
          <div className="pv-list" style={{ marginTop: 14 }}>
            {["win", "win", "mac"].map((node, i) => (
              <div className="pv-item" key={i}>
                <span className="sw" style={{ background: "var(--ok)" }} />
                <div className="tx">
                  <div className="a" />
                  <div className="b" />
                </div>
                <span className="pv-badge">{node}</span>
              </div>
            ))}
          </div>
        </>
      );
      break;
    default:
      // Generic "live app" preview for any future card without a custom one.
      body = (
        <>
          <div className="pv-row">
            <div className="pv-kpi">
              <div className="l">Catalog</div>
              <div className="v a">Live</div>
            </div>
            <div className="pv-kpi">
              <div className="l">Type-safe</div>
              <div className="v">100%</div>
            </div>
          </div>
          <div className="pv-bars">
            <b style={{ height: "46%" }} />
            <b style={{ height: "62%" }} />
            <b style={{ height: "54%" }} />
            <b className="a" style={{ height: "90%" }} />
            <b style={{ height: "70%" }} />
            <b style={{ height: "58%" }} />
          </div>
        </>
      );
  }

  return (
    <div className="frame">
      <div className="bar">
        <i />
        <i />
        <i />
        <span className="url">{url}</span>
      </div>
      <div className="fbody">{body}</div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="block" id="work">
      <div className="wrap">
        <div className="shead reveal">
          <div>
            <span className="eyebrow">
              <span className="n">03</span> Selected work
            </span>
            <h2>Systems, not demos.</h2>
          </div>
          <p>
            Products I&apos;ve designed and shipped — from a live e-commerce store
            to AI-driven SaaS — plus platforms built under NDA. 2024–2026.
          </p>
        </div>

        <p className="nda-note reveal">
          <b>A note on the NDA work further down:</b>{" "}
          my strongest systems are
          internal business platforms built under NDA, so they&apos;re described
          by capability and architecture — not by client or data. Happy to walk
          through the design and engineering in a call.
        </p>

        {projects.map((project, i) => (
          <article className="work-row reveal" key={project.title}>
            <div className="work-idx">{String(i + 1).padStart(2, "0")}</div>
            <div className="work-main">
              <h3>
                {project.title}{" "}
                <span className={pillClass[project.status]}>
                  {project.status}
                </span>
              </h3>
              <div className="meta">{project.type}</div>

              <div className="pbr">
                <span className="lab">PROBLEM</span>
                <span className="txt">{project.problem}</span>
                <span className="lab">BUILT</span>
                <span className="txt">{project.built}</span>
                <span className="lab res">RESULT</span>
                <span className="txt res">{project.result}</span>
              </div>

              <div className="stack">
                {project.tech.map((tech) => (
                  <span className="chip" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="work-links">
                {project.confidential || !project.links ? (
                  <span className="req">
                    {project.requestLabel ?? "Architecture available on request"}{" "}
                    <span className="arw">→</span>
                  </span>
                ) : (
                  <>
                    <a
                      href={project.links.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live demo <span className="arw">→</span>
                    </a>
                    {project.links.github && (
                      <>
                        <span className="sep">·</span>
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
                        </a>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
            <Preview project={project} />
          </article>
        ))}
      </div>
    </section>
  );
}
