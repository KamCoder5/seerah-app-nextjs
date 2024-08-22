import { cn } from "@/lib/utils";
import Image from "next/image";
import { FaCamera, FaBolt, FaLightbulb, FaMoon, FaImage, FaSlidersH } from "react-icons/fa";

const intentions = [
	{
		title: "Bridge The gap",
		description:
			"My intention is to help bridge the gap between us and the Prophet ﷺ to learn about him, no matter who or where we are",
		icon: FaCamera,
	},
	{
		title: "Build With The Ummah",
		description:
			"I'm building this app in public so I can get your thoughts, suggestions and ideas and build with you ",
		icon: FaBolt,
	},
	{
		title: "Build In Stages",
		description: "I'm going to be building a feature at a time, releasing it and getting your throughtseeeee",
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
