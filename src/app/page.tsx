import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoCloud } from "@/components/LogoCloud";
import { PlatformTabs } from "@/components/PlatformTabs";
import { DarkFeature } from "@/components/DarkFeature";
import { Signals } from "@/components/Signals";
import { Connectivity } from "@/components/Connectivity";
import { Developer } from "@/components/Developer";
import { BuildToScale } from "@/components/BuildToScale";
import { CustomerStories } from "@/components/CustomerStories";
import { Changelog } from "@/components/Changelog";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <LogoCloud />
      <PlatformTabs />
      <DarkFeature />
      <Signals />
      <Connectivity />
      <Developer />
      <BuildToScale />
      <CustomerStories />
      <Changelog />
      <FinalCTA />
      <Footer />
    </main>
  );
}
