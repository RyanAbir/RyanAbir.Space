import type { Metadata } from "next";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ClientFX from "../components/ClientFX";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_ROLE,
  SITE_TITLE,
  SITE_URL,
} from "../lib/constants";
import { profile } from "../lib/profile";
import "./globals.css";

// Profile data search engines read (schema.org Person).
const PERSON = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  jobTitle: SITE_ROLE,
  url: SITE_URL,
  image: `${SITE_URL}/images/ryan-abir.jpg`,
  address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
  sameAs: [LINKEDIN_URL, GITHUB_URL],
  knowsAbout: ["AI agents", "LLM tool use", "Full-stack development", "TypeScript", "Python", "Next.js"],
};

const FONTS_HREF =
  "https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800;900&family=Hanken+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [...SITE_KEYWORDS],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  metadataBase: new URL(SITE_URL),
  // The career agent checks for this after a portfolio update, to tell Ryan when it's live.
  other: { "profile-version": profile.version },
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href={FONTS_HREF} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON) }}
        />
        {/* Gate reveal animations behind JS before paint to avoid a flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');",
          }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <ClientFX />
      </body>
    </html>
  );
}
