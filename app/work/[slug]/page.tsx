import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Tags from "../../../components/Tags";
import { caseStudies, caseStudy } from "../../../data/work";
import { SITE_NAME } from "../../../lib/constants";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const c = caseStudy((await params).slug);
  if (!c) return {};
  const title = `${c.title} · case study | ${SITE_NAME}`;
  return {
    title,
    description: c.intro,
    alternates: { canonical: `/work/${c.slug}` },
    openGraph: { title, description: c.intro, url: `/work/${c.slug}`, type: "article" },
    twitter: { card: "summary_large_image", title, description: c.intro },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = caseStudy(slug);
  if (!c) notFound();
  const i = caseStudies.indexOf(c);
  const next = caseStudies[(i + 1) % caseStudies.length];

  return (
    <article className="cs">
      <div className="wrap cs-wrap">
        <div className="cs-top">
          <Link href="/#work" className="back">
            ← All work
          </Link>
          <span className="k">
            Case study {i + 1} of {caseStudies.length}
          </span>
        </div>

        <header className="cs-head">
          <Tags tags={c.tags} />
          <h1>{c.title}</h1>
          <p className="cs-intro">{c.intro}</p>
          <dl className="facts">
            {c.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
          {c.links && (
            <div className="link-row">
              {c.links.map((l) => (
                <a className="btn btn-solid" href={l.href} key={l.href} target="_blank" rel="noopener noreferrer">
                  {l.label} ↗
                </a>
              ))}
            </div>
          )}
        </header>

        <section className="cs-sec">
          <span className="eyebrow">The problem</span>
          <h2>{c.problem.title}</h2>
          {c.problem.body.map((p) => (
            <p className="cs-p" key={p.slice(0, 24)}>
              {p}
            </p>
          ))}
        </section>

        <section className="cs-sec">
          <span className="eyebrow">What it does</span>
          <h2>{c.does.title}</h2>
          <ol className="does">
            {c.does.steps.map((s, n) => (
              <li className="card" key={s.title}>
                <span className="n">{String(n + 1).padStart(2, "0")}</span>
                <b>{s.title}</b>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="cs-sec">
          <span className="eyebrow">Architecture</span>
          <h2>{c.architecture.title}</h2>
          <figure className="arch">
            {c.architecture.rows.map((row, r) => (
              <div key={r} className="arch-step">
                {r > 0 && !row.every((b) => b.dashed) && (
                  <span className="arch-arrow" aria-hidden="true">
                    ↓
                  </span>
                )}
                <div className="arch-row">
                  {row.map((b) => (
                    <div key={b.title} className={`box${b.gate ? " gate" : ""}${b.dashed ? " dashed" : ""}`}>
                      <b>{b.title}</b>
                      <span>{b.body}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <figcaption>{c.architecture.caption}</figcaption>
          </figure>
        </section>

        <section className="cs-sec">
          <span className="eyebrow">Key decisions</span>
          <h2>Where the engineering went.</h2>
          <ol className="decisions">
            {c.decisions.map((d, n) => (
              <li key={d.title}>
                <span className="n">{String(n + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{d.title}</h3>
                  <p>{d.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="cs-sec">
          <span className="eyebrow">Where it stands</span>
          <h2>{c.standing.title}</h2>
          <dl className="standing">
            {c.standing.metrics.map((m) => (
              <div className="card" key={m.label}>
                <dt>{m.label}</dt>
                <dd>{m.value}</dd>
              </div>
            ))}
          </dl>
          <p className="cs-note">{c.standing.note}</p>
          <div className="card visuals">
            <span className="k">Screenshots</span>
            <p>{c.visuals}</p>
          </div>
          <div className="stack">
            {c.stack.map((s) => (
              <span className="chip" key={s}>
                {s}
              </span>
            ))}
          </div>
        </section>

        <nav className="cs-next" aria-label="Next case study">
          <div>
            <span className="k">Next case study</span>
            <p>{next.title}</p>
          </div>
          <Link className="btn btn-solid" href={`/work/${next.slug}`}>
            Read it →
          </Link>
        </nav>
      </div>
    </article>
  );
}
