import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

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
		<ClerkProvider>
			<html lang="en">
				<Providers>
					<body className={cn(lora.className, "container max-w-sm m-auto")}>{children}</body>
				</Providers>
			</html>
		</ClerkProvider>
	);
}
