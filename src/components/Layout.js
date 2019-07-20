import React, { useContext } from "react";

import { StoreContext } from "../context/Store";

import Header from "./header";
import Footer from "./footer";
import SideDrawer from "./sideDrawer";
import Backdrop from "./backdrop";

const Layout = ({ children }) => {
  const [state] = useContext(StoreContext);

  let backdrop;

  if (state.isDrawerToggled) {
    backdrop = <Backdrop />;
  }

  return (
    <div className="site-container">
      <div className="site-content">
        <Header />
        <SideDrawer />
        {backdrop}
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
