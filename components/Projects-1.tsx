import { projects, type Project, type ProjectStatus } from "../data/projects";

const pillClass: Record<ProjectStatus, string> = {
  Featured: "pill featured",
  Live: "pill live",
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
            // {project.status === "Client Work" ? "client work" : "under NDA"}
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

  const url = hostOf(project.links?.liveDemo ?? "");

  let body: React.ReactNode;
  switch (project.title) {
    case "JobFit Copilot":
      body = (
        <>
          <div className="pv-row">
            <div className="pv-kpi">
              <div className="l">Fit score</div>
              <div className="v a">87%</div>
            </div>
            <div className="pv-kpi">
              <div className="l">Matched</div>
              <div className="v">12</div>
            </div>
            <div className="pv-kpi">
              <div className="l">Missing</div>
              <div className="v">3</div>
            </div>
          </div>
          <div className="pv-line m" />
          <div className="pv-line s" />
          <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
            <span className="pv-badge">resume keyword</span>
            <span className="pv-badge">red flag</span>
            <span className="pv-badge">email draft</span>
          </div>
        </>
      );
      break;
    case "SaaS Billing Starter":
      body = (
        <>
          <div className="pv-row">
            <div className="pv-kpi">
              <div className="l">Plan</div>
              <div className="v a">Pro</div>
            </div>
            <div className="pv-kpi">
              <div className="l">MRR</div>
              <div className="v">$4.9k</div>
            </div>
          </div>
          <div className="pv-bars">
            <b style={{ height: "40%" }} />
            <b style={{ height: "58%" }} />
            <b style={{ height: "50%" }} />
            <b style={{ height: "72%" }} />
            <b className="a" style={{ height: "96%" }} />
            <b style={{ height: "80%" }} />
          </div>
        </>
      );
      break;
    default:
      // Generic "live app" preview (used by the E-Commerce / Catalog Platform card).
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
            Real production platforms I&apos;ve engineered, plus live builds you
            can open and inspect. 2024–2026.
          </p>
        </div>

        <p className="nda-note reveal">
          <b>A note on the confidential work below:</b> my strongest systems are
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
