import React, { useState } from "react";

import Header from "./header";
import Footer from "./footer";
import SideDrawer from "./sideDrawer";
import Backdrop from "./backdrop";
import Main from "./Main";

const Layout = ({ children }) => {
  const [isDrawerToggled, setIsDrawerToggled] = useState(false);

  let backdrop;

  if (isDrawerToggled) {
    backdrop = <Backdrop click={() => setIsDrawerToggled(false)} />;
  }

  return (
    <div className="site-container">
      <div className="site-content">
        <Header click={() => setIsDrawerToggled(!isDrawerToggled)} />
        <SideDrawer
          display={isDrawerToggled}
          click={() => setIsDrawerToggled(!isDrawerToggled)}
        />
        {backdrop}
        <Main />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
