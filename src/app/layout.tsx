import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
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

const siteUrl = "https://agent-crm.lizliz.xyz";
const title = "Agent CRM — The CRM for agentic revenue";
const description =
  "Agent CRM builds pipeline, advances deals, and grows accounts around the clock.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s · Agent CRM",
  },
  description,
  applicationName: "Agent CRM",
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
    <html lang="en" className={`${inter.variable} ${interDisplay.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
