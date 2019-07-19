import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "../context/react-auth0-wrapper";

import logo from "../../static/images/logo.png";

const Header = props => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <header className="navbar">
      <nav className="navbar__navigation">
        <div className="toggle-button__display">
          <button className="toggle-button" onClick={props.click}>
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

            {!isAuthenticated && (
              <li>
                <p onClick={() => loginWithRedirect({})}>Log in</p>
              </li>
            )}

            {isAuthenticated && (
              <>
                <li>
                  <Link to="/customers">By Customers</Link>
                </li>
                <li>
                  <Link to="/items">By Item</Link>
                </li>
                <li>
                  <p onClick={() => logout()}>Log out</p>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
