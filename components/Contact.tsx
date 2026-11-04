import { ATS_RESUME_URL, EMAIL, GITHUB_URL, LINKEDIN_URL, RESUME_URL, WHATSAPP_URL } from "../lib/constants";

const links: { label: string; href: string }[] = [
  { label: "LinkedIn ↗", href: LINKEDIN_URL },
  { label: "GitHub ↗", href: GITHUB_URL },
  { label: "WhatsApp ↗", href: WHATSAPP_URL },
  { label: "ATS résumé", href: ATS_RESUME_URL },
];

export default function Contact() {
  return (
    <section className="contact rule-top" id="contact">
      <div className="wrap">
        <div className="cta-card reveal">
          <span className="eyebrow">05 · Contact</span>
          <h2>
            Hiring for an AI agent or <span className="hl">full-stack</span> role?
          </h2>
          <p className="sub">
            Remote, full-time or long-term contract. I overlap with US and UK working hours (15:00–22:00 UTC) and
            reply to every serious message.
          </p>
          <a className="big-mail" href={`mailto:${EMAIL}`}>
            {EMAIL} →
          </a>
          <div className="cta-links">
            <a className="btn btn-solid" href={RESUME_URL} target="_blank" rel="noopener noreferrer">
              Download résumé
            </a>
            {links.map((link) => (
              <a className="btn btn-ghost" href={link.href} key={link.label} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
