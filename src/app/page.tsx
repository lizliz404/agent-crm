import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoCloud } from "@/components/LogoCloud";
import { PlatformTabs } from "@/components/PlatformTabs";
import { DarkFeature } from "@/components/DarkFeature";
import { FeatureCards } from "@/components/FeatureCards";
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
      <FeatureCards />
      <BuildToScale />
      <CustomerStories />
      <Changelog />
      <FinalCTA />
      <Footer />
    </main>
  );
}
