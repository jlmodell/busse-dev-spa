import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./auth";
import { withAuth } from "@okta/okta-react";

import { StoreContext } from "../context/Store";

const SideDrawer = withAuth(({ auth }) => {
  const [authenticated, user] = useAuth(auth);
  const [state, dispatch] = useContext(StoreContext);

  const drawerToggle = () => {
    dispatch({
      type: "drawer_toggler",
      value: !state.isDrawerToggled
    });
  };

  let drawer = "side-drawer";

  if (state.isDrawerToggled) {
    drawer = "side-drawer open";
  }

  return (
    <nav className={drawer}>
      <div className="side-drawer__links">
        <ul>
          <div className="spacer" />
          <li onClick={drawerToggle}>
            <Link to="/">Home</Link>
          </li>

          {!authenticated && (
            <li onClick={drawerToggle}>
              <p onClick={() => auth.login()}>Log in</p>
            </li>
          )}

          {authenticated && (
            <>
              <li onClick={drawerToggle}>
                <Link to="/customers">By Customers</Link>
              </li>
              <li onClick={drawerToggle}>
                <Link to="/items">By Item</Link>
              </li>
              <li onClick={drawerToggle}>
                <p onClick={() => auth.logout()}>Log out</p>
              </li>
            </>
          )}
          <div className="spacer" />
        </ul>
      </div>
    </nav>
  );
});

export default SideDrawer;
