"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { pageVariants, pageTransition } from "@/lib/animation";

const Hero: React.FC = () => {
	return (
		<motion.div
			initial="initial"
			animate="in"
			exit="out"
			variants={pageVariants}
			transition={pageTransition}
		>
			<section className="bg-white text-gray-800">
				<div className="container max-w-4xl flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
					<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
						<div className="mb-6 md:mb-12 space-y-4">
							<h4 className="text-xl font-semibold md:text-3xl">Building...</h4>
							<h1 className="text-3xl font-bold md:text-5xl xl:text-7xl">The Seerah App</h1>
							<p className="text-base mx-auto md:text-lg text-gray-600 md:w-2/4 xl:w-1/2 xl:text-xl">
								Helping everyday Muslims learn and remember the life of the Prophet Muhammad ﷺ
							</p>
						</div>
						<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
							<Link
								href="/chapters"
								className="mb-12 inline-block px-12 py-4 text-lg font-semibold text-white transition duration-300 ease-in-out transform bg-blue-800 rounded-full shadow hover:bg-blue-900 hover:shadow-lg hover:scale-110"
							>
								Try the demo!
							</Link>
						</div>
					</div>
					<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
						<div>
							<Image
								src="/images/template/chapter-cropped.png"
								alt="Seerah App"
								width={250}
								height={250}
								layout="responsive"
							/>
						</div>
					</div>
				</div>
			</section>
		</motion.div>
	);
};

export default Hero;
