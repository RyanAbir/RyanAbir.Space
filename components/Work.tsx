import Link from "next/link";
import { caseStudies, type CaseStudy } from "../data/work";
import Tags from "./Tags";

// Schematic previews (not screenshots): real screenshots replace them once they're cleared for sharing.
function Preview({ slug }: { slug: string }) {
  if (slug === "career-sales-agent") {
    return (
      <div className="pv" aria-hidden="true">
        <span className="k k-acc">Needs you · 3</span>
        <div className="pv-card">
          <div className="pv-row">
            <span className="tag tag-blue">Price</span>
            <span className="pv-line" />
          </div>
          <span className="pv-line w70" />
          <span className="tag tag-acc pv-self">Approve &amp; send</span>
        </div>
        <div className="pv-card">
          <div className="pv-row">
            <span className="tag tag-ok">Sending · 23 min</span>
            <span className="pv-line" />
          </div>
          <span className="pv-line w55" />
        </div>
        <div className="pv-row pv-wrap">
          {["New 23", "Talking 14", "Qualified 4", "Won 1"].map((c) => (
            <span className="chip" key={c}>
              {c}
            </span>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="pv" aria-hidden="true">
      <div className="pv-card">
        {[
          ["#3B82F6", "AI"],
          ["#22C55E", "AI"],
          ["#EC4899", "You"],
        ].map(([color, who], i) => (
          <div className="pv-row" key={i}>
            <span className="pv-dot" style={{ background: color }} />
            <span className="pv-line" />
            <span className={`tag ${who === "AI" ? "tag-acc" : "tag-grey"}`}>{who}</span>
          </div>
        ))}
      </div>
      <div className="pv-row pv-wrap">
        {["order taken", "courier booked", "handed to a person"].map((c) => (
          <span className="chip" key={c}>
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

function Big({ c }: { c: CaseStudy }) {
  return (
    <article className="card proj reveal">
      <div className="proj-body">
        <Tags tags={c.tags} />
        <h3>{c.title}</h3>
        <p>{c.summary}</p>
        <dl className="mini-metrics">
          {c.metrics.map((m) => (
            <div key={m.label}>
              <dt>{m.label}</dt>
              <dd>{m.value}</dd>
            </div>
          ))}
        </dl>
        <div className="stack">
          {c.stack.slice(0, 6).map((s) => (
            <span className="chip" key={s}>
              {s}
            </span>
          ))}
        </div>
        <Link className="more-link" href={`/work/${c.slug}`}>
          Read the case study <span aria-hidden="true">→</span>
        </Link>
      </div>
      <Preview slug={c.slug} />
    </article>
  );
}

function Small({ c }: { c: CaseStudy }) {
  return (
    <article className="card proj-small reveal">
      <Tags tags={c.tags} />
      <h3>{c.title}</h3>
      <p>{c.summary}</p>
      <div className="stack">
        {c.stack.slice(0, 5).map((s) => (
          <span className="chip" key={s}>
            {s}
          </span>
        ))}
      </div>
      <div className="link-row">
        <Link className="more-link" href={`/work/${c.slug}`}>
          Case study <span aria-hidden="true">→</span>
        </Link>
        {c.links?.map((l) => (
          <a className="more-link" href={l.href} key={l.href} target="_blank" rel="noopener noreferrer">
            {l.label} <span aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </article>
  );
}

export default function Work() {
  const big = caseStudies.filter((c) => c.featured);
  const small = caseStudies.filter((c) => !c.featured);
  return (
    <section className="block" id="work">
      <div className="wrap">
        <div className="shead reveal">
          <div>
            <span className="eyebrow">01 · Selected work</span>
            <h2>Four systems, each in real use.</h2>
          </div>
          <p>Each one has a case study: the problem, my role, the architecture, the hard decisions and what&apos;s true today.</p>
        </div>
        <div className="work-list">
          {big.map((c) => (
            <Big c={c} key={c.slug} />
          ))}
          <div className="work-pair">
            {small.map((c) => (
              <Small c={c} key={c.slug} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
