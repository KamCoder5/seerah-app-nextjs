import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { cn } from "@/lib/utils";
import { GoogleAnalytics } from "@next/third-parties/google";
const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "The Seerah App – Learn the Life of Prophet Muhammad ﷺ",
	description:
		"An app that helps Muslims learn and remember the Seerah through simple, engaging chapters. Join the waitlist to stay updated and try the demo!",
	keywords: [
		"The Seerah App",
		"Prophet Muhammad",
		"Seerah",
		"Islamic learning app",
		"Muslim app",
		"Seerah chapters",
		"Prophet's life",
		"SunnahApps",
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Providers>
				<body className={cn(lora.className)}>{children}</body>
			</Providers>
			<GoogleAnalytics gaId="G-8EF00F7XR9" />
		</html>
	);
}
