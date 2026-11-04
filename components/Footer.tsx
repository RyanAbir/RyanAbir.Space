import Link from "next/link";
import Logo from "./Logo";
import { SITE_NAME } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <Link className="brand" href="/" aria-label={`${SITE_NAME} — home`}>
          <Logo />
          <b>{SITE_NAME}</b>
        </Link>
        <div className="fmeta">
          {`© ${new Date().getFullYear()} — Built & shipped in Dhaka`}
        </div>
        <div className="flinks">
          <Link href="/#work">Work</Link>
          <Link href="/#agents">How I build agents</Link>
          <Link href="/#contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
