import { agentLayers, experience, moreWork, stackRows } from "../data/work";

export function AgentLayers() {
  return (
    <section className="block layers-band" id="agents">
      <div className="wrap">
        <div className="shead reveal">
          <div>
            <span className="eyebrow">02 · How I build agents</span>
            <h2>Autonomy you can trust is engineered, not prompted.</h2>
          </div>
          <p>The same five layers run through every agent I ship, from the career agent to vWorker&apos;s sales agent.</p>
        </div>
        <ol className="layers reveal">
          {agentLayers.map((l, i) => (
            <li key={l.title}>
              <span className="n">{String(i + 1).padStart(2, "0")}</span>
              <b>{l.title}</b>
              <p>{l.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function MoreWork() {
  return (
    <section className="block block-tight">
      <div className="wrap">
        <div className="shead reveal">
          <div>
            <span className="eyebrow">03 · More work</span>
            <h2 className="h-sm">Also built</h2>
          </div>
        </div>
        <div className="more-grid">
          {moreWork.map((m) => (
            <article className="card more-card reveal" key={m.title}>
              <span className="tag tag-grey">{m.tag}</span>
              <h3>{m.title}</h3>
              <p>
                {m.body}{" "}
                {m.link && (
                  <a href={m.link.href} target="_blank" rel="noopener noreferrer">
                    {m.link.label} ↗
                  </a>
                )}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section className="block block-tight rule-top" id="experience">
      <div className="wrap">
        <div className="shead reveal">
          <div>
            <span className="eyebrow">04 · Experience</span>
            <h2 className="h-sm">Where I&apos;ve shipped</h2>
          </div>
        </div>
        <ol className="jobs">
          {experience.map((e) => (
            <li className="job reveal" key={e.title}>
              <span className="when">{e.when}</span>
              <div>
                <h3>{e.title}</h3>
                <p>{e.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Stack() {
  return (
    <section className="stack-band rule-top" id="stack" aria-label="Stack">
      <div className="wrap stack-rows">
        {stackRows.map((r) => (
          <div key={r.label}>
            <span className="k">{r.label}</span>
            <p>{r.items}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
