import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="container max-w-3xl m-auto">
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
