"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";

type LayoutProps = {
	children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const pathname = usePathname();
	const isChaptersPage = pathname === "/chapters";
	return (
		<>
			<div className="max-w-3xl m-auto mb-6">
				{!isChaptersPage && (
					<>
						<header className="flex items-center text-brown-500 my-3 md:mt-12">
							<IoIosArrowBack className="text-xl" />
							<Link href="/chapters">Chapters</Link>
						</header>
						<div className="border-b border-brown-500"></div>
					</>
				)}
				<main>{children}</main>
			</div>
		</>
	);
};

export default Layout;
