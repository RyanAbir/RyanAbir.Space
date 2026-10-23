import Logo from "./Logo";
import { SITE_NAME } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <a className="brand" href="#top" aria-label={`${SITE_NAME} — home`}>
          <Logo />
          <b>{SITE_NAME}</b>
        </a>
        <div className="fmeta">
          {`© ${new Date().getFullYear()} — Built & shipped in Dhaka`}
        </div>
        <div className="flinks">
          <a href="#work">Work</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
