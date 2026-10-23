import {
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  RESUME_URL,
  WHATSAPP_URL,
} from "../lib/constants";

const links: { label: string; href: string; solid?: boolean }[] = [
  { label: "GitHub ↗", href: GITHUB_URL },
  { label: "LinkedIn ↗", href: LINKEDIN_URL },
  { label: "WhatsApp ↗", href: WHATSAPP_URL },
  { label: "Download résumé", href: RESUME_URL, solid: true },
];

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="cta-card reveal">
          <span className="eyebrow">
            <span className="n">05</span> Contact
          </span>
          <h2>
            Have something worth <span className="hl">building?</span>
          </h2>
          <p className="sub">
            Freelance projects, remote roles, and startup collaborations — I
            reply to every serious message.
          </p>
          <a className="big-mail" href={`mailto:${EMAIL}`}>
            {EMAIL} →
          </a>
          <div className="cta-links" style={{ marginTop: 34 }}>
            {links.map((link) => (
              <a
                className={`btn ${link.solid ? "btn-solid" : "btn-ghost"}`}
                href={link.href}
                key={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
