import { FaCamera, FaBolt, FaLightbulb, FaMoon, FaImage } from "react-icons/fa";

const specifications = [
	{
		title: "Bite-sized Chapters",
		description: "Concise chapters designed for easy comprehension and busy schedules.",
		hadith:
			'"The most beloved deeds to Allah are those that are consistent, even if they are small." (Sahih al-Bukhari 6464, Sahih Muslim 782)',
		icon: FaBolt,
	},
	{
		title: "Simplified Language",
		description: "Written in clear and straightforward English, ensuring accessibility for everyone.",
		hadith: '"Speak to people according to their level of understanding." (Sahih al-Bukhari)',
		icon: FaCamera,
	},

	{
		title: "Clear Structure",
		description: "Organised content that flows, enhancing understanding and retention.",
		hadith:
			"Make things easy for the people, and do not make it difficult for them, and make them calm (with glad tidings) and do not repulse (them ). Sahih al-Bukhari 6125",
		icon: FaLightbulb,
	},
	{
		title: "Interactive Recall Strategies",
		description: "Tools that reinforce learning through repeated exposure, improving memory retention.",
		hadith: "Keep refreshing your knowledge of the sacred books... (Sahih Muslim 790b",
		icon: FaMoon,
	},
	{
		title: "A Beautiful App",
		description: "A clear and beautiful app that enhances the learning experience.",
		hadith: '"Allah is Beautiful and loves beauty." (Sahih Muslim 91)',
		icon: FaImage,
	},
];

const SpecificationsHoverGrid = () => {
	return (
		<section className="py-10 lg:py-14">
			<div className="container mx-auto text-center px-5 lg:px-20">
				<div className="mb-12">
					<h2 className="text-4xl font-bold sm:text-5xl">Intentions</h2>
					<p className="mx-auto text-lg text-gray-600 sm:w-3/4 lg:w-2/4 xl:w-1/3 sm:text-xl mt-4">
						To build an app that makes learning about the Prophet ﷺ easier and memorable.
					</p>
				</div>

				<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 ">
					{specifications.map((feature, i) => (
						<div
							key={i}
							className="relative p-6 rounded-lg border bg-white border-gray-200 shadow-lg"
						>
							<div className="flex flex-col items-center">
								<feature.icon className="text-blue-800 h-14 w-14 mb-4" />
								<h5 className="text-2xl font-semibold">{feature.title}</h5>
								{/* <p className="text-lg text-gray-600 mt-4">{feature.description}</p> */}
								<p className="text-sm text-gray-500 mt-2 italic">{feature.hadith}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default SpecificationsHoverGrid;
