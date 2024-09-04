import React from "react";

type LayoutProps = {
	children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return <main className="container max-w-3xl m-auto overflow-hidden">{children}</main>;
};

export default Layout;
