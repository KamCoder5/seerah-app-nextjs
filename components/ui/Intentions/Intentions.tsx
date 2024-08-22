import { cn } from "@/lib/utils";
import Image from "next/image";
import { FaCamera, FaBolt, FaLightbulb, FaMoon, FaImage, FaSlidersH } from "react-icons/fa";

const intentions = [
	{
		title: "Bridge the Gap",
		description:
			"My goal is to bridge the gap between us and the Prophet ﷺ, enabling everyone to learn more about his life and teachings.",
		icon: FaCamera,
	},
	{
		title: "Build with the Ummah",
		description:
			"This app is being developed transparently, inviting your thoughts, suggestions, and ideas, so we can create it together.",
		icon: FaBolt,
	},
	{
		title: "Build Step by Step",
		description:
			"I will be developing and releasing features incrementally,    your feedback at each stage to ensure it meets our shared vision and needs.",
		icon: FaBolt,
	},
];

const IntentionsBlock = () => {
	return (
		<section className="py-10 lg:py-14">
			<div className="container px-5 mx-auto">
				<div className="mb-8 space-y-5 lg:text-center lg:mb-16">
					<h2 className="text-4xl font-bold sm:text-5xl text-center">Intentions</h2>
					<div className="text-lg text-gray-600 sm:w-3/4 lg:w-2/4 xl:w-1/3 lg:mx-auto sm:text-xl">
						{/* <p>My intention is to help bridge the gap between us and the Prophet ﷺ by getting to know his life </p> */}
					</div>
					<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
						{intentions.map((item, i) => (
							<div
								key={i}
								className="space-y-6 text-center"
							>
								<item.icon className="mx-auto text-blue-800 h-7 w-14" />
								<div className="space-y-4">
									<h5 className="text-2xl font-semibold">{item.title}</h5>
									<p className="text-lg text-gray-600">{item.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default IntentionsBlock;
