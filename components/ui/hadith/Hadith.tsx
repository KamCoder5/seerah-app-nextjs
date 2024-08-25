import Link from "next/link";
import React from "react";
import { FaCamera, FaMicrophoneSlash, FaImage, FaArrowDown } from "react-icons/fa"; // Import the icons from react-icons

type Props = {};

const Hadith: React.FC<Props> = (props) => {
	return (
		<section className="h-screen py-20 bg-white lg:py-28 flex items-center">
			<div className="container px-5 mx-auto text-center">
				<div className="mb-16">
					<div className="mb-12 space-y-6">
						<p className="mx-auto text-lg sm:w-3/4 lg:w-3/5 xl:w-2/4 sm:text-xl">
							<span className="text-gray-400">
								"A man asked the Prophet (ﷺ) about the Hour (i.e. Day of Judgment) saying,
							</span>
						</p>
						<p className="mx-auto text-lg sm:w-3/4 lg:w-3/5 xl:w-2/4 sm:text-xl text-brown-500">
							'When will the Hour be?'
						</p>
						<p className="mx-auto text-lg sm:w-3/4 lg:w-3/5 xl:w-2/4 sm:text-xl">
							<span className="text-gray-400">The Prophet (ﷺ) said,</span>
						</p>
						<p className="mx-auto text-lg sm:w-3/4 lg:w-3/5 xl:w-2/4 sm:text-xl text-brown-500">
							'What have you prepared for it?'
						</p>
						<p className="mx-auto text-lg sm:w-3/4 lg:w-3/5 xl:w-2/4 sm:text-xl">
							<span className="text-gray-400">The man said,</span>
						</p>
						<p className="mx-auto text-lg sm:w-3/4 lg:w-3/5 xl:w-2/4 sm:text-xl text-brown-500">
							'Nothing, except that I love Allah and His Apostle.'
						</p>
						<p className="mx-auto text-lg sm:w-3/4 lg:w-3/5 xl:w-2/4 sm:text-xl">
							<span className="text-gray-400">The Prophet (ﷺ) said,</span>
						</p>
						<p className="mx-auto text-lg sm:w-3/4 lg:w-3/5 xl:w-2/4 sm:text-xl text-brown-500 font-bold">
							'You will be with those whom you love'.
						</p>
					</div>
					<p className="text-sm text-gray-500"> Sahih al-Bukhari </p>
					<p className="text-sm text-gray-500"> 3688</p>
				</div>
			</div>
		</section>
	);
};

export default Hadith;
