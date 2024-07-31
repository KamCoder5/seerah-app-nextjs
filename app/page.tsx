import Link from "next/link";

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center w-full">
			<h1 className="text-5xl text-brown-500 font-bold mb-8 animate-pulse">Coming Soon</h1>
			<p className="text-brown-500 text-lg mb-8">We are working hard to bring you something amazing. Stay tuned!</p>
			<Link
				href="/chapters"
				className="bg-blue-500 p-2 text-white rounded-lg"
			>
				Start reading!
			</Link>
		</div>
	);
}
