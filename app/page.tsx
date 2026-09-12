import Navbar from "@/components/Navbar";
import CursorGlow from "@/components/CursorGlow";
import ClickEffect from "@/components/ClickEffect";
import MarqueeStrip from "@/components/MarqueeStrip";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Architecture from "@/components/Architecture";
import Outputs from "@/components/Outputs";
import Demo from "@/components/Demo";
import Work from "@/components/Work";
import Workflow from "@/components/Workflow";
import TimeValue from "@/components/TimeValue";
import Compare from "@/components/Compare";
import Pricing from "@/components/Pricing";
import Partnership from "@/components/Partnership";
import Expansion from "@/components/Expansion";
import FAQ from "@/components/FAQ";
import Apply from "@/components/Apply";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <main>
      <CursorGlow />
      <ClickEffect />
      <Navbar />
      <Hero />
      <MarqueeStrip />
      <Problem />
      <TimeValue />
      <Architecture />
      <Outputs />
      <Demo />
      <Work />
      <Workflow />
      <Compare />
      <Pricing />
      <Partnership />
      <Expansion />
      <FAQ />
      <Apply />
      <Footer />
      <StickyCTA />
    </main>
  );
}
