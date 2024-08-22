import { FaCamera, FaBolt, FaLightbulb, FaMoon, FaImage, FaSlidersH } from "react-icons/fa";

const specifications = [
	{
		title: "Simplified Language",
		description: "Written in clear and straightforward English, ensuring accessibility for everyone.",
		icon: FaCamera,
	},
	{
		title: "Bite-sized Chapters",
		description: "Concise chapters designed for easy comprehension, perfect for busy schedules.",
		icon: FaBolt,
	},
	{
		title: "Clear Structure",
		description: "Organised content that flows logically, enhancing understanding and retention.",
		icon: FaLightbulb,
	},
	{
		title: "Iterative Recall Strategies",
		description: "Techniques that reinforce learning through repeated exposure, improving memory retention.",
		icon: FaMoon,
	},
	{
		title: "Getting to Know the Companions",
		description:
			"Learn about the companions of the Prophet (PBUH) as you explore the Seerah, deepening your understanding of their roles and contributions.",
		icon: FaImage,
	},
	{
		title: "Quranic Mapping",
		description:
			"Bridges the connection between Quranic revelation and the life of the Prophet (PBUH), showing how the Quran was revealed in the context of historical events.",
		icon: FaSlidersH,
	},
];

const Specifications = () => {
	return (
		<section className="py-10 pb-20 lg:py-14 lg:pb-28">
			<div className="container px-12 mx-auto sm:px-5">
				<div className="mb-8 space-y-5 text-center lg:mb-16">
					<h2 className="text-4xl font-bold sm:text-5xl">Specifications</h2>
					<p className="mx-auto text-lg text-gray-600 sm:w-3/4 lg:w-2/4 xl:w-1/3 sm:text-xl">
						There are a few key themes and features that I want introduce and maintain throughout the build stages:
					</p>
				</div>

				<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
					{specifications.map((feature, i) => (
						<div
							key={i}
							className="space-y-6 text-center"
						>
							<feature.icon className="mx-auto text-blue-800 h-14 w-14" />
							<div className="space-y-4">
								<h5 className="text-2xl font-semibold">{feature.title}</h5>
								<p className="text-lg text-gray-600">{feature.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Specifications;
