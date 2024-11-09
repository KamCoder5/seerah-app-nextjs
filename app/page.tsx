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
							<svg
								width="30"
								height="30"
								viewBox="0 0 77 77"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									opacity="0.2"
									d="M74.25 38.5C74.25 42.8003 68.1244 46.0453 66.4538 50.0809C64.845 53.9722 66.9419 60.6169 63.7794 63.7794C60.6169 66.9419 53.9722 64.845 50.0809 66.4538C46.0625 68.1244 42.7969 74.25 38.5 74.25C34.2031 74.25 30.9375 68.1244 26.9191 66.4538C23.0278 64.845 16.3831 66.9419 13.2206 63.7794C10.0581 60.6169 12.155 53.9722 10.5463 50.0809C8.87563 46.0625 2.75 42.7969 2.75 38.5C2.75 34.2031 8.87563 30.9375 10.5463 26.9191C12.155 23.0312 10.0581 16.3831 13.2206 13.2206C16.3831 10.0581 23.0312 12.155 26.9191 10.5463C30.9547 8.87563 34.2031 2.75 38.5 2.75C42.7969 2.75 46.0625 8.87563 50.0809 10.5463C53.9722 12.155 60.6169 10.0581 63.7794 13.2206C66.9419 16.3831 64.845 23.0278 66.4538 26.9191C68.1244 30.9547 74.25 34.2031 74.25 38.5Z"
									fill="#814F0F"
								/>
								<path
									d="M72.1394 29.8444C70.8434 28.49 69.5028 27.0944 68.9975 25.8672C68.53 24.7431 68.5025 22.88 68.475 21.0753C68.4234 17.7203 68.3684 13.9184 65.725 11.275C63.0816 8.63156 59.2797 8.57656 55.9247 8.525C54.12 8.4975 52.2569 8.47 51.1328 8.0025C49.9091 7.49719 48.51 6.15656 47.1556 4.86062C44.7837 2.58156 42.0887 0 38.5 0C34.9113 0 32.2197 2.58156 29.8444 4.86062C28.49 6.15656 27.0944 7.49719 25.8672 8.0025C24.75 8.47 22.88 8.4975 21.0753 8.525C17.7203 8.57656 13.9184 8.63156 11.275 11.275C8.63156 13.9184 8.59375 17.7203 8.525 21.0753C8.4975 22.88 8.47 24.7431 8.0025 25.8672C7.49719 27.0909 6.15656 28.49 4.86062 29.8444C2.58156 32.2163 0 34.9113 0 38.5C0 42.0887 2.58156 44.7803 4.86062 47.1556C6.15656 48.51 7.49719 49.9056 8.0025 51.1328C8.47 52.2569 8.4975 54.12 8.525 55.9247C8.57656 59.2797 8.63156 63.0816 11.275 65.725C13.9184 68.3684 17.7203 68.4234 21.0753 68.475C22.88 68.5025 24.7431 68.53 25.8672 68.9975C27.0909 69.5028 28.49 70.8434 29.8444 72.1394C32.2163 74.4184 34.9113 77 38.5 77C42.0887 77 44.7803 74.4184 47.1556 72.1394C48.51 70.8434 49.9056 69.5028 51.1328 68.9975C52.2569 68.53 54.12 68.5025 55.9247 68.475C59.2797 68.4234 63.0816 68.3684 65.725 65.725C68.3684 63.0816 68.4234 59.2797 68.475 55.9247C68.5025 54.12 68.53 52.2569 68.9975 51.1328C69.5028 49.9091 70.8434 48.51 72.1394 47.1556C74.4184 44.7837 77 42.0887 77 38.5C77 34.9113 74.4184 32.2197 72.1394 29.8444ZM68.1691 43.3503C66.5225 45.0691 64.8175 46.8463 63.9134 49.0291C63.0472 51.1259 63.0094 53.5219 62.975 55.8422C62.9406 58.2484 62.9028 60.7681 61.8338 61.8338C60.7647 62.8994 58.2622 62.9406 55.8422 62.975C53.5219 63.0094 51.1259 63.0472 49.0291 63.9134C46.8463 64.8175 45.0691 66.5225 43.3503 68.1691C41.6316 69.8156 39.875 71.5 38.5 71.5C37.125 71.5 35.3547 69.8087 33.6497 68.1691C31.9447 66.5294 30.1538 64.8175 27.9709 63.9134C25.8741 63.0472 23.4781 63.0094 21.1578 62.975C18.7516 62.9406 16.2319 62.9028 15.1662 61.8338C14.1006 60.7647 14.0594 58.2622 14.025 55.8422C13.9906 53.5219 13.9528 51.1259 13.0866 49.0291C12.1825 46.8463 10.4775 45.0691 8.83094 43.3503C7.18437 41.6316 5.5 39.875 5.5 38.5C5.5 37.125 7.19125 35.3547 8.83094 33.6497C10.4706 31.9447 12.1825 30.1538 13.0866 27.9709C13.9528 25.8741 13.9906 23.4781 14.025 21.1578C14.0594 18.7516 14.0972 16.2319 15.1662 15.1662C16.2353 14.1006 18.7378 14.0594 21.1578 14.025C23.4781 13.9906 25.8741 13.9528 27.9709 13.0866C30.1538 12.1825 31.9309 10.4775 33.6497 8.83094C35.3684 7.18437 37.125 5.5 38.5 5.5C39.875 5.5 41.6453 7.19125 43.3503 8.83094C45.0553 10.4706 46.8463 12.1825 49.0291 13.0866C51.1259 13.9528 53.5219 13.9906 55.8422 14.025C58.2484 14.0594 60.7681 14.0972 61.8338 15.1662C62.8994 16.2353 62.9406 18.7378 62.975 21.1578C63.0094 23.4781 63.0472 25.8741 63.9134 27.9709C64.8175 30.1538 66.5225 31.9309 68.1691 33.6497C69.8156 35.3684 71.5 37.125 71.5 38.5C71.5 39.875 69.8087 41.6453 68.1691 43.3503Z"
									fill="#814F0F"
								/>
							</svg>
							<span className="font-bold text-xl text-brown-500">TheSeerahApp</span>
						</Link>
						<div className="flex space-x-3">
							<Button asChild>
								<Link href="/chapters">Try demo</Link>
							</Button>

							<Button
								asChild
								variant="outline"
								className="hidden md:block"
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
						An app that helps us learn and remember the life of Prophet Muhammad ﷺ through simple, bite-sized, and engaging chapters — knowledge you can apply in your everyday lives.
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
								{ icon: FaLanguage, text: "Language too complex " },
								{ icon: FaClock, text: "Too time-consuming" },
								{ icon: FaChartLine, text: "Too detailed or too simple" },
								{ icon: FaCompass, text: "Unclear starting point" },
								{ icon: FaUser, text: "Unclear how to progress" },
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
						className="container mx-auto px-4"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeInVariants}
					>
						<h2 className="text-3xl font-bold text-center mb-8">What's our solution?</h2>
						<p className="text-center mb-12">
						A Seerah App for the Everyday Muslim, to help us learn (and actually remember!) the Seerah.  
						</p>
						<div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
							{[
								{ icon: FaLanguage, text: "Simplified Language" },
								{ icon: FaClock, text: "Short, Bite-Sized Learning:" },
								{ icon: FaChartLine, text: "Clear Progression" },
								{ icon: FaCompass, text: "Structured Learning Path" },
								{ icon: FaUser, text: "Memorisation Tools" },
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

				<section className="bg-white py-16 md:py-32">
					<motion.div
						className="container mx-auto px-4 max-w-2xl"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeInVariants}
					>
						<div className="flex flex-col items-center gap-8">
							<div className="flex">
								<Avatar className="relative z-10">
									<AvatarImage src="/images/dp/kam-dp.jpg" />
									<AvatarFallback>Kamilah</AvatarFallback>
								</Avatar>
								<Avatar className="-ml-3 z-0">
									<AvatarImage src="/images/dp/tan-dp.jpg" />
									<AvatarFallback>Tanveer</AvatarFallback>
								</Avatar>
							</div>
							<h2 className="text-3xl font-bold mb-2">Salaam!</h2>
							<h2 className="text-3xl font-bold mb-2"> I'm Kamilah, the founder of The Seerah App.</h2>

							<p className="mb-2">
								We're making knowledge accessible by creating a beautifully designed and structured tool that makes learning about the life of our
								Prophet Muhammad ﷺ easy and memorable.
							</p>
							<p className="mb-2">
								In this journey, you are my co-founders. My aim is to build this for the Ummah, as an Ummah, and I want
								you to be a part of the build with me by sharing your ideas, feedback, and suggestions along the way.
							</p>
							<p>
								So let's earn some passive-sadaqah and spread the word. If you have ideas or feedback, we'd love to hear
								from you!
							</p>
						</div>
					</motion.div>
				</section>

				<section className="bg-brown-50 py-16 md:py-32">
					<motion.div
						className="container mx-auto px-4 text-center"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeInVariants}
					>
						<h2 className="text-3xl font-bold mb-8">Where can I get it?</h2>
						<p className="mb-8">You can try out the demo now and let us know what you think!</p>

						<Button
							asChild
							className="mb-8"
							size="xl"
						>
							<Link href="/chapters">Try demo</Link>
						</Button>
						<p className="text-xl font-semibold mb-4">Coming soon:</p>
						<div className="flex justify-center gap-8 mb-8">
						<Button disabled={true}>
								<FaApple className="text-xl mr-2" />
								<span>iPhone</span>
							</Button>
							<Button disabled={true}>
								<FaAndroid className="text-xl mr-2" />
								<span>Android</span>
							</Button>
							
						</div>
						<p className="mb-2">Follow me on X for live updates, or join the waitlist</p>
						<p className="mb-8">Be the first to know when it's launched!</p>

						<div className="flex justify-center items-center gap-8 mb-8">
							<Button asChild size="xl" className="flex items-center mb-8 bg-black text-white"
							    style={{ backgroundColor: "black", color: "white" }}>
								<Link href="https://x.com/KamCoder5" aria-label="Twitter">
								<FaXTwitter className="text-1xl" />
								</Link>

							</Button>
							<Button asChild size="xl" className="mb-8">
								<Link href="/chapters">Join Waitlist</Link>
							</Button>
						</div>

						
					</motion.div>
				</section>

				<footer className="bg-white text-black py-8">
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
									Developed by{" "}
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
									href="https://x.com/KamCoder5"
									aria-label="Twitter"
								>
									<FaXTwitter className="text-2xl" />
								</Link>
								{/* <Link
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
								</Link> */}
							</div>
						</div>
					</div>
				</footer>
			</div>
		</motion.div>
	);
}
