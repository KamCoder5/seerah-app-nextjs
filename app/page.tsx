import Link from "next/link";

export default function Home() {
	return (
		<main>
			<h1>The Seerah app landing page here</h1>
			<Link href="/chapters">Start reading!</Link>
		</main>
	);
}
