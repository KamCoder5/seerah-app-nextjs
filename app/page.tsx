import BuySection from "@/components/ui/buy-section/BuySection";
import Features from "@/components/ui/features/Features";
import FeaturesBlocks from "@/components/ui/features/FeaturesBlocks";
import Footer from "@/components/ui/footer/Footer";
import Hero from "@/components/ui/hero/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesBlocks />
      <Features />
      <BuySection />
      <Footer />
    </>
  );
}
