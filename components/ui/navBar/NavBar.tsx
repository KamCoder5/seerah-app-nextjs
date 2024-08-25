import Link from "next/link";

const NavBar = () => {
	return (
		<nav className=" bg-[#f1ede8] shadow-sm sticky top-0 z-50">
			<div className="container  px-4 py-4 flex justify-between items-center">
				<div className="text-xl font-semibold">The Seerah App</div>
				<div className="ml-auto">
					<Link
						href="/chapters"
						className="text-m font-semibold text-blue-800 hover:text-blue-900 transition duration-300 ease-in-out"
					>
						Start learning
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
