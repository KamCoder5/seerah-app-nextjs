import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaCamera, FaMicrophoneSlash, FaImage } from "react-icons/fa"; // Import the icons from react-icons

type Props = {};

const Hero: React.FC<Props> = (props) => {
	return (
		<section className="py-20 bg-gray-200 lg:py-28">
			<div className="container px-5 mx-auto text-center">
				<div className="mb-16">
					<div className="mb-12 space-y-4">
						<h1 className="text-5xl font-bold sm:text-7xl">The Seerah App</h1>
						<p className="mx-auto text-lg text-gray-600 sm:w-3/4 lg:w-2/4 xl:w-96 sm:text-xl">
							Helping everyday Muslims learn the life of the Prophet Muhammad (PBUH)
						</p>
					</div>

					<Link
						href="/chapters"
						className="inline-block px-12 py-4 text-lg font-semibold text-white transition duration-300 ease-in-out transform bg-blue-800 rounded-full shadow hover:bg-blue-900 hover:shadow-lg hover:scale-110"
					>
						Start reading!
					</Link>
				</div>
				<div className="mx-auto xl:max-w-screen-lg mb-28">
					<Image
						src="/images/template/hero-drone.png"
						alt="Drone"
						width={500}
						height={500}
						layout="responsive"
					/>
				</div>
				<div className="space-y-12">
					<p className="mx-auto text-xl font-semibold text-gray-600 lg:w-3/5 sm:text-3xl">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet obcaecati perferendis voluptas quasi
						quidem natus error voluptatibus.
					</p>
					<div className="flex flex-col justify-center space-y-5 sm:flex-row sm:space-y-0 sm:space-x-10 md:space-x-20">
						<div className="flex flex-col items-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 sm:text-left">
							<span className="flex items-center justify-center w-12 h-12 text-gray-600 bg-white rounded-full shadow">
								<FaCamera className="w-6 h-6" />
							</span>
							<span className="font-medium text-gray-600">
								Mechanical <br />
								Shutter
							</span>
						</div>
						<div className="flex flex-col items-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 sm:text-left">
							<span className="flex items-center justify-center w-12 h-12 text-gray-600 bg-white rounded-full shadow">
								<FaMicrophoneSlash className="w-6 h-6" />
							</span>
							<span className="font-medium text-gray-600">
								4dB Noise <br />
								Reduction
							</span>
						</div>
						<div className="flex flex-col items-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 sm:text-left">
							<span className="flex items-center justify-center w-12 h-12 text-gray-600 bg-white rounded-full shadow">
								<FaImage className="w-6 h-6" />
							</span>
							<span className="font-medium text-gray-600">
								1-inch <br />
								Image Sensor
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
