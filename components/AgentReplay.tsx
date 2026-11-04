"use client";

import { useEffect, useState } from "react";

type Step = { t: string; text: React.ReactNode };

// An anonymised replay of a real run of my sales agent. Every step stays in the page (screen readers read them
// all); the animation only fades them in one by one, and is skipped when the viewer prefers less motion.
const STEPS: Step[] = [
  { t: "19:40", text: <>Found a post in a Facebook group: <b>&ldquo;Need a web POS for 2 warehouses&rdquo;</b></> },
  { t: "19:41", text: <>Wrote a first message: what they asked, one proof point, one question</> },
  {
    t: "19:41",
    text: (
      <>
        Guardrails: <span className="replay-ok">limit 6/10 ✓ · no placeholders ✓ · not blocked ✓</span>
      </>
    ),
  },
  {
    t: "19:42",
    text: (
      <>
        <b>Sending in 30 min</b> · I can tap <span className="tag tag-acc">Stop</span> on Telegram
      </>
    ),
  },
  { t: "+1 day", text: <>Reply: <b>&ldquo;Budget is flexible if it&rsquo;s live in 6 weeks&rdquo;</b></> },
  {
    t: "+1 day",
    text: (
      <>
        Qualified: need ✓ budget ✓ timeline ✓ → <span className="tag tag-blue">Price needed</span> only I set prices
      </>
    ),
  },
];

export default function AgentReplay() {
  const [shown, setShown] = useState(STEPS.length);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let n = 0;
    const start = window.setTimeout(() => setShown(0), 0); // the server renders every step; the replay starts empty
    const tick = window.setInterval(() => {
      n = n >= STEPS.length + 3 ? 0 : n + 1; // hold the finished run for a few beats, then replay
      setShown(Math.min(n, STEPS.length));
    }, 1300);
    return () => {
      window.clearTimeout(start);
      window.clearInterval(tick);
    };
  }, []);

  return (
    <aside className="replay reveal" aria-label="Replay of my sales agent at work">
      <div className="replay-head">
        <span className="k">Replay · my sales agent</span>
        <span className="tag tag-ok">● running</span>
      </div>
      <ol>
        {STEPS.map((s, i) => (
          <li key={i} className={i < shown ? "on" : ""}>
            <span className="t">{s.t}</span>
            <span className="x">{s.text}</span>
          </li>
        ))}
      </ol>
      <p className="replay-note">Anonymised replay of a real agent run. Nothing here is sent.</p>
    </aside>
  );
}
