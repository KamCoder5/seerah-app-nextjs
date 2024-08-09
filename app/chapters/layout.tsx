import React from "react";

type LayoutProps = {
	children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<div className="container max-w-3xl m-auto mt-3 md:mb-12">
				<main>{children}</main>
			</div>
		</>
	);
};

export default Layout;
