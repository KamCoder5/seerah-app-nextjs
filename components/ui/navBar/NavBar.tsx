import Link from "next/link";

const NavBar = () => {
	return (
		<nav className="bg-white shadow-sm sticky top-0 z-50">
			<div className="container mx-auto px-4 py-4 flex justify-between items-center">
				<div className="text-xl font-semibold">The Seerah App</div>

				<div className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
					Start learning
					{/* <Link href="#download-section">
						<a className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
							Download Now
						</a>
					</Link> */}
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
