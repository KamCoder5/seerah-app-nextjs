import BuySection from "@/components/ui/buy-section/BuySection";
import Features from "@/components/ui/features/Features";
import FeaturesBlocks from "@/components/ui/features/FeaturesBlocks";
import Footer from "@/components/ui/footer/Footer";
import Hero from "@/components/ui/hero/Hero";
import NavBar from "@/components/ui/navBar/NavBar";

export default function Home() {
	return (
		<>
			<NavBar />
			<Hero />
			<FeaturesBlocks />
			<Features />
			<BuySection />
			<Footer />
		</>
	);
}
