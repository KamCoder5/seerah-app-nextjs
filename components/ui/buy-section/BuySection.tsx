import Image from "next/image";

const BuySection = () => {
	return (
		<section className="py-20 bg-gray-100 lg:py-28">
			<div className="container px-5 mx-auto">
				<div className="grid items-center gap-10 text-center lg:grid-cols-2 lg:text-left">
					<div className="space-y-8">
						<div className="space-y-4">
							<h2 className="text-3xl font-bold sm:text-5xl">Try it out the first version now!</h2>
							<p className="text-xl text-gray-600">Share your ideas and suggestions - be apart of this build</p>
						</div>
						<div className="flex items-center justify-center space-x-4 lg:justify-start">
							<a
								href="/chapters"
								className="inline-block px-6 py-3 text-lg font-semibold text-blue-800 transition duration-300 bg-white rounded-full shadow hover:bg-blue-900 hover:text-white hover:shadow-lg"
							>
								Start learning
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BuySection;
