import React from "react";
import Footer from "./Footer";
import PageHead from "./Head";
import Header from "./Header";
import SignIn from "./SignIn";

interface LayoutProps {}
const Layouts: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <PageHead />
      <Header />
      <SignIn />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layouts;
