import { features } from "@/data/content";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileBar } from "@/components/layout/StickyMobileBar";
import { Hero } from "@/components/sections/Hero";
import { IconRow } from "@/components/sections/FeatureStrip";
import { Marquee } from "@/components/sections/Marquee";
import { Services } from "@/components/sections/Services";
import { Brands } from "@/components/sections/Brands";
import { Process } from "@/components/sections/Process";
import { Problems } from "@/components/sections/Problems";
import { WhyUs } from "@/components/sections/WhyUs";
import { Pricing } from "@/components/sections/Pricing";
import { Areas } from "@/components/sections/Areas";
import { Faq, Reviews } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { SiteJsonLd } from "@/components/seo/JsonLd";

export default function Home() {
  return (
    <>
      <SiteJsonLd />
      <TopBar />
      <Header />
      <main id="main">
        <Hero />
        <IconRow items={features} label="Our promise" className="pb-6 sm:pb-8" />
        <Marquee />
        <Services />
        <Brands />
        <Process />
        <Problems />
        <WhyUs />
        <Pricing />
        <Areas />
        <Reviews />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyMobileBar />
    </>
  );
}
