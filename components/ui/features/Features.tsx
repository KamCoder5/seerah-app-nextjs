import { cn } from "@/lib/utils";
import Image from "next/image";
import { FaCamera, FaBolt, FaLightbulb, FaMoon, FaImage, FaSlidersH } from "react-icons/fa";

const features = [
	{
		title: "Chapters List",
		description: "Guided learning of major life events from before he was born, why do we need Islam",
		imgUrl: "/images/template/all-chapters.png",
	},
	{
		title: "A Guided Journey",
		description:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, doloribus. Ipsum saepe dicta excepturi vero sint dolorum quo ullam qui possimus inventore nesciunt incidunt, cum vel modi nostrum tempore. Commodi consectetur reiciendis veniam possimus corporis, distinctio officiis eos iste totam fuga, eum magnam adipisci accusantium.",
		imgUrl: "/images/template/chapter.png",
	},
	{
		title: "Intelligent Flight Battery",
		description:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, doloribus. Ipsum saepe dicta excepturi vero sint dolorum quo ullam qui possimus inventore nesciunt incidunt, cum vel modi nostrum tempore. Commodi consectetur reiciendis veniam possimus corporis, distinctio officiis eos iste totam fuga, eum magnam adipisci accusantium.",
		imgUrl: "/images/template/quiz.png",
	},
];

const Features = () => {
	return (
		<section className="py-10 lg:py-14">
			<div className="container px-5 mx-auto">
				<h2 className="text-4xl font-bold sm:text-5xl text-center mb-10">Features</h2>
				<p className="text-lg text-gray-600 text-center mb-10">
					The first stage of this build will focus on the following three core features
				</p>

				<div className="grid gap-y-10 lg:gap-y-0">
					{features.map((feature, i) => (
						<div
							key={i}
							className="grid items-center gap-5 lg:grid-cols-2 lg:gap-0 mb-10"
						>
							<div className={cn(i % 2 === 0 ? "lg:pr-20" : "lg:pl-20", "space-y-4")}>
								<h3 className="text-2xl font-semibold sm:text-4xl">{feature.title}</h3>
								<p className="text-lg text-gray-600">{feature.description}</p>
							</div>
							<div className={cn(i % 2 === 0 ? "lg:order-last" : "", "bg-gray-100 p-20 order-first")}>
								<Image
									src={feature.imgUrl}
									alt={feature.title}
									width={500}
									height={500}
									className="w-full h-auto"
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
