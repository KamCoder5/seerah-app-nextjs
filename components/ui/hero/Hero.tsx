import Link from "next/link";
import React from "react";
import Image from "next/image";
type Props = {};

const Hero: React.FC<Props> = (props) => {
	return (
		<section className="h-svh bg-white flex items-center align-center">
			<div className="container px-5 mx-auto text-center">
				<div className="mb-6 md:mb-12 space-y-4">
					<h4 className="text-xl font-semibold md:text-3xl">Building...</h4>
					<h1 className="text-3xl font-bold md:text-5xl xl:text-7xl">The Seerah App</h1>
					<p className="text-base mx-auto md:text-lg text-gray-600 md:w-2/4 xl:w-1/2 xl:text-xl">
						Helping everyday Muslims learn and remember the life of the Prophet Muhammad ﷺ
					</p>
				</div>

				<Link
					href="/chapters"
					className="mb-12 inline-block px-12 py-4 text-lg font-semibold text-white transition duration-300 ease-in-out transform bg-blue-800 rounded-full shadow hover:bg-blue-900 hover:shadow-lg hover:scale-110"
				>
					Try the demo!
				</Link>

				<div className="mx-auto max-w-52 xl:max-w-72">
					<Image
						src="/images/template/chapter-cropped.png"
						alt="Seerah App"
						width={250}
						height={250}
						layout="responsive"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
