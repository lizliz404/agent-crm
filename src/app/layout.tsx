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
  title: "Attio Replica — The CRM for agentic revenue",
  description: "A replica of attio.com landing page for skill extraction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${interDisplay.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
