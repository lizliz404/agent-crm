import type { Metadata } from "next";
import { Inter, Inter_Tight, Source_Serif_4 } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interDisplay = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-display",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
  style: ["normal", "italic"],
});

const siteUrl = "https://agent-crm.lizliz.xyz";
const title = "Agent CRM — CRM that runs deals while you sleep";
// Pain-first; keep 120–160 chars for SERP snippets.
const description =
  "Leads stall overnight and renewals slip while your CRM sits idle. Agent CRM runs pipeline, deals, and accounts around the clock with revenue agents.";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Agent CRM",
      url: siteUrl,
      logo: `${siteUrl}/icon-512.png`,
      description,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Agent CRM",
      url: siteUrl,
      description,
      inLanguage: "en",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#app`,
      name: "Agent CRM",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: siteUrl,
      description,
      inLanguage: "en",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s · Agent CRM",
  },
  description,
  applicationName: "Agent CRM",
  themeColor: "#fafafa",
  keywords: [
    "CRM",
    "agentic CRM",
    "revenue agents",
    "pipeline",
    "sales automation",
    "Agent CRM",
  ],
  authors: [{ name: "Agent CRM" }],
  creator: "Agent CRM",
  publisher: "Agent CRM",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  // Western OG: 1200×630. WeChat share cards compress to a square bubble —
  // keep a separate 500×500 asset (DESIGN.md §10.6) when shipping CN distribution.
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Agent CRM",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        secureUrl: `${siteUrl}/og-image.png`,
        type: "image/png",
        width: 1200,
        height: 630,
        alt: "Agent CRM — The CRM for agentic revenue",
      },
      // WeChat / square share variant — 500×500 (DESIGN.md §10.6). File optional until generated.
      // { url: "/og-wechat.png", width: 500, height: 500, alt: "Agent CRM" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interDisplay.variable} ${sourceSerif.variable}`}
    >
      <body className="antialiased">
        {/* GA4: shared property with lizliz.xyz (G-TXVLTJJ878); filter by hostname in GA */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TXVLTJJ878"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TXVLTJJ878');`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
