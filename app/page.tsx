/* eslint-disable react/no-unescaped-entities */
"use client";

import { Button } from "@/components/ui/button/Button";
import Image from "next/image";
import { pageVariants, pageTransition } from "@/lib/animation";
import { motion } from "framer-motion";
import Link from "next/link";
import {
	FaBook,
	FaLightbulb,
	FaBrain,
	FaHandsHelping,
	FaLanguage,
	FaClock,
	FaChartLine,
	FaCompass,
	FaUser,
	FaAndroid,
	FaApple,
} from "react-icons/fa";
import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar/Avatar";
import { PopupButton } from "@typeform/embed-react";

const fadeInVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { duration: 0.8 } },
};

export default function Home() {
	return (
		<motion.div
			initial="initial"
			animate="in"
			exit="out"
			variants={pageVariants}
			transition={pageTransition}
		>
			<div>
				<header className="sticky bg-white top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
					<div className="container flex h-14 items-center justify-between">
						<Link
							href="/chapters"
							className="flex items-center space-x-2"
						>
							<span className="font-bold text-xl text-brown-500">TheSeerahApp</span>
						</Link>
						<div className="flex space-x-3">
							<Button asChild>
								<Link href="/chapters">Try demo</Link>
							</Button>

							<Button
								asChild
								variant="outline"
							>
								<PopupButton id="jK5VfgK6">Give Feedback</PopupButton>
							</Button>
						</div>
					</div>
				</header>

				<section
					id="hero"
					className="bg-white text-gray-800"
				>
					<motion.div
						className="container max-w-5xl flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeInVariants}
					>
						<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
							<div className="mb-6 md:mb-12 space-y-4">
								<p className="text-xl md:text-3xl text-gray-600">Building...</p>
								<h1 className="text-3xl font-bold md:text-5xl xl:text-6xl">The Seerah App</h1>
								<p className="text-md text-gray-600">
									Helping everyday Muslims learn and remember the life of the Prophet Muhammad ﷺ
								</p>
							</div>
							<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
								<Button
									asChild
									size="xl"
								>
									<Link href="/chapters">Try demo</Link>
								</Button>
							</div>
						</div>
						<div className="flex items-center justify-center">
							<div>
								<Image
									src="/images/template/chapter-cropped.png"
									alt="Seerah App"
									width={250}
									height={250}
								/>
							</div>
						</div>
					</motion.div>
				</section>

				<section className="bg-brown-50 py-16 md:py-32">
					<motion.div
						className="container mx-auto px-4"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeInVariants}
					>
						<h2 className="text-3xl font-bold text-center mb-8">What is The Seerah App?</h2>
						<p className="text-center mb-12 max-w-2xl mx-auto">
							An App that helps us learn and remember the life of Prophet Muhammad ﷺ through simplified, structured,
							bite-sized, and engaging chapters - knowledge we can use in our everyday lives.
						</p>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
							{[
								{ icon: FaBook, text: "Read" },
								{ icon: FaLightbulb, text: "Learn" },
								{ icon: FaBrain, text: "Remember" },
								{ icon: FaHandsHelping, text: "Use" },
							].map((item, index) => (
								<div
									key={index}
									className="flex flex-col items-center"
								>
									<div className="w-16 h-16 flex items-center justify-center bg-brown-500 rounded-full mb-4">
										<item.icon className="text-4xl text-white" />
									</div>
									<p className="text-lg font-semibold font-sans">{item.text}</p>
								</div>
							))}
						</div>
					</motion.div>
				</section>

				<section className="bg-white py-16 md:py-32">
					<motion.div
						className="container mx-auto px-4"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeInVariants}
					>
						<h2 className="text-3xl font-bold text-center mb-8">What problem are we trying to solve?</h2>
						<p className="text-center mb-12">
							The current resources, books, videos, podcasts, etc, can pose the following challenges:
						</p>
						<div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
							{[
								{ icon: FaLanguage, text: "Complex language" },
								{ icon: FaClock, text: "Time" },
								{ icon: FaChartLine, text: "Varying depths" },
								{ icon: FaCompass, text: "Unclear starting point" },
								{ icon: FaUser, text: "Self-orientation" },
							].map((item, index) => (
								<div
									key={index}
									className="flex flex-col items-center"
								>
									<div className="w-16 h-16 flex items-center justify-center bg-brown-500 rounded-full mb-4">
										<item.icon className="text-4xl text-white" />
									</div>
									<p className="text-lg font-semibold text-center font-sans">{item.text}</p>
								</div>
							))}
						</div>
					</motion.div>
				</section>

				<section className="bg-brown-50 py-16 md:py-32">
					<motion.div
						className="container mx-auto px-4 max-w-2xl"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeInVariants}
					>
						<div className="flex flex-col items-center gap-8">
							<div className="flex">
								<Avatar>
									<AvatarImage src="/images/dp/kam-dp.jpg" />
									<AvatarFallback>Kamilah</AvatarFallback>
								</Avatar>
								<Avatar className="-ml-3">
									<AvatarImage src="/images/dp/tan-dp.jpg" />
									<AvatarFallback>Tanveer</AvatarFallback>
								</Avatar>
							</div>
							<h2 className="text-3xl font-bold mb-4">Salaam! I'm Kamilah, the founder of The Seerah App 😊</h2>
							<p className="mb-4">
								We're creating a beautifully designed and structured tool that makes learning about the life of our
								Prophet ﷺ memorable and accessible. Existing resources can feel overwhelming or time-consuming
								sometimes, so we're making knowledge accessible - building The Seerah App for everyday Muslims who want
								to strengthen their connection to the Prophet ﷺ.
							</p>
							<p className="mb-4">
								In this journey, you are my co-founders. My aim is to build this for the Ummah, as an Ummah, and I want
								you to be a part of the build with me—by sharing your ideas, feedback, and suggestions along the way.
							</p>
							<p>
								So let's earn some passive-sadaqah and spread the word. If you have ideas or feedback, we'd love to hear
								from you!
							</p>
						</div>
					</motion.div>
				</section>

				<section className="bg-white py-16 md:py-32">
					<motion.div
						className="container mx-auto px-4 text-center"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeInVariants}
					>
						<h2 className="text-3xl font-bold mb-8">Where can I get it?</h2>
						<p className="mb-8">You can try out the demo now</p>
						<Button
							size="xl"
							className="mb-8"
						>
							Try Demo
						</Button>
						<p className="text-xl font-semibold mb-4">Coming soon:</p>
						<div className="flex justify-center gap-8">
							<Button disabled={true}>
								<FaAndroid className="text-4xl mr-2" />
								<span>Android</span>
							</Button>
							<Button disabled={true}>
								<FaApple className="text-4xl mr-2" />
								<span>iPhone</span>
							</Button>
						</div>
					</motion.div>
				</section>

				<footer className="bg-brown-50 text-black py-8">
					<div className="container mx-auto px-4">
						<div className="flex flex-col md:flex-row justify-between items-center">
							<div className="mb-4 md:mb-0">
								<p>
									&copy; 2024{" "}
									<a
										href="https://seerahapp.com"
										rel="noopener noreferrer"
										className="underline text-brown-600"
									>
										TheSeerahApp
									</a>
									. All rights reserved.
								</p>
								<p>
									Built by{" "}
									<a
										href="https://sunnahapps.com"
										target="_blank"
										rel="noopener noreferrer"
										className="underline text-brown-600"
									>
										SunnahApps.com
									</a>
								</p>
							</div>
							<div className="flex gap-4">
								<Link
									href="https://x.com/theseerahapp"
									aria-label="Twitter"
								>
									<FaXTwitter className="text-2xl" />
								</Link>
								<Link
									href="https://instagram.com/theseerahapp"
									aria-label="Instagram"
								>
									<FaInstagram className="text-2xl" />
								</Link>
								<Link
									href="https://uk.linkedin.com/company/theseerahapp"
									aria-label="LinkedIn"
								>
									<FaLinkedin className="text-2xl" />
								</Link>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</motion.div>
	);
}
