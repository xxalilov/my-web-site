import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Header />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
