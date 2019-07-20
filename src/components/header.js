import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./auth";
import { withAuth } from "@okta/okta-react";

import { StoreContext } from "../context/Store";

import logo from "../../static/images/logo.png";

const Header = withAuth(({ auth }) => {
  const [authenticated, user] = useAuth(auth);
  const [state, dispatch] = useContext(StoreContext);

  const drawerToggle = () => {
    dispatch({
      type: "drawer_toggler",
      value: !state.isDrawerToggled
    });
  };

  return (
    <header className="navbar">
      <nav className="navbar__navigation">
        <div className="toggle-button__display">
          <button className="toggle-button" onClick={drawerToggle}>
            <div className="toggle-button__line" />
            <div className="toggle-button__line" />
            <div className="toggle-button__line" />
          </button>
        </div>
        <div className="spacer" />
        <div className="navbar-navlink-logo">
          <img
            className="navbar-logo"
            src={logo}
            alt="Busse Hospital Disposables"
          />
        </div>
        <div className="spacer" />
        <div className="navbar__navlinks">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            {!authenticated && (
              <li>
                <p onClick={() => auth.login()}>Log in</p>
              </li>
            )}

            {authenticated && (
              <>
                <li>
                  <Link to="/customers">By Customers</Link>
                </li>
                <li>
                  <Link to="/items">By Item</Link>
                </li>
                <li>
                  <p onClick={() => auth.logout()}>Log out</p>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
});

export default Header;
