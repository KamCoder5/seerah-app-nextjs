import BuySection from "@/components/ui/buy-section/BuySection";
import Features from "@/components/ui/features/Features";
import IntentionsBlock from "@/components/ui/Intentions/Intentions";
import Footer from "@/components/ui/footer/Footer";
import Hero from "@/components/ui/hero/Hero";
import NavBar from "@/components/ui/navBar/NavBar";
import Specifications from "@/components/ui/specifications/Specifications";
import Hadith from "@/components/ui/hadith/Hadith";

export default function Home() {
	return (
		<>
			<NavBar />
			<Hero />
			<Hadith />
			<Specifications />
			<Features />
			<IntentionsBlock />
			<BuySection />
			<Footer />
		</>
	);
}
