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

export const metadata: Metadata = {
  title: "Agent CRM — The CRM for agentic revenue",
  description:
    "Agent CRM builds pipeline, advances deals, and grows accounts around the clock.",
  openGraph: {
    title: "Agent CRM — The CRM for agentic revenue",
    description:
      "Agent CRM builds pipeline, advances deals, and grows accounts around the clock.",
    type: "website",
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
