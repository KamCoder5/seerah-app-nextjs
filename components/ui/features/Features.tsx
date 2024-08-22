import { cn } from "@/lib/utils";
import Image from "next/image";

const features = [
	{
		title: "Guided Learning Through Structured Content",
		description:
			"Seamless learning journey with chapters thoughtfully organised to guide you through key historical periods. Starting with the pre-Islamic era in Arabia, the content flows through the life of the Prophet, the revelation of the Quran, and the transformative events of pre- and post-Hijrah, leading up to the Prophet’s ﷺ farewell.",
		imgUrl: "/images/template/all-chapters.png",
	},
	{
		title: "Concise and Accessible Chapters",
		description:
			"Each chapter is crafted to be brief yet impactful, offering bite-sized lessons that are easy to understand and absorb. This approach ensures that learning remains engaging and manageable.",
		imgUrl: "/images/template/chapter.png",
	},
	{
		title: "Enhanced Retention with Embedded Quizzes",
		description:
			"Strengthen your knowledge with strategically placed quizzes throughout each chapter, designed to boost memory retention and active recall. A comprehensive quiz at the end of each chapter consolidates your learning, encouraging a measured and thoughtful approach to mastering the material.",
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
