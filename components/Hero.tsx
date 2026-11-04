import Image from "next/image";
import AgentReplay from "./AgentReplay";
import { RESUME_URL } from "../lib/constants";
import { m } from "../lib/profile";

// Proof a hiring team can check in the case studies: test counts add up vWorker, Shishu Mela, the repair
// marketplace, DAW and the career agent (worked out by the career agent from the master CV).
const proof = [
  { value: m("tests_total"), label: "automated tests across my systems" },
  { value: "4", label: "AI agent systems running today" },
  { value: "Sole dev", label: "of a company's all-in-one platform" },
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-glow" aria-hidden="true" />
      <div className="wrap">
        <div className="hero-main">
          <div className="hero-id reveal">
            <Image
              src="/images/ryan-abir.jpg"
              alt="Ryan Abir"
              width={56}
              height={56}
              className="avatar"
              priority
            />
            <div>
              <span className="eyebrow">AI Agent Engineer · Full-Stack</span>
              <span className="hero-where">Dhaka, Bangladesh · working remotely worldwide</span>
            </div>
          </div>
          <h1 className="reveal">
            I build AI agents that do real work, <span className="hl">safely.</span>
          </h1>
          <p className="lede reveal">
            And the full-stack systems around them: from a sales agent that takes orders in Bangla to the
            operations platform a company runs on every day.
          </p>
          <div className="hero-cta reveal">
            <a className="btn btn-solid" href="#work">
              See the work
            </a>
            <a className="btn btn-ghost" href={RESUME_URL} target="_blank" rel="noopener noreferrer">
              Résumé (PDF)
            </a>
            <a className="btn btn-ghost" href="#contact">
              Get in touch
            </a>
          </div>
          <dl className="proof reveal">
            {proof.map((p) => (
              <div key={p.label}>
                <dt>{p.label}</dt>
                <dd>{p.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <AgentReplay />
      </div>
    </section>
  );
}
