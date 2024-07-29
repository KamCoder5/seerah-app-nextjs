import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "The Seerah App",
	description: "The Seerah App",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Providers>
				<body className={lora.className}>{children}</body>
			</Providers>
		</html>
	);
}
