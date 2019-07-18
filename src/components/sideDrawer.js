import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "../context/react-auth0-wrapper";

const SideDrawer = props => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  let drawer = "side-drawer";

  if (props.display) {
    drawer = "side-drawer open";
  }

  return (
    <nav className={drawer}>
      <div className="side-drawer__links">
        <ul>
          <li onClick={props.click}>
            <Link to="/">Home</Link>
          </li>

          {!isAuthenticated && (
            <li onClick={props.click}>
              <p onClick={() => loginWithRedirect({})}>Log in</p>
            </li>
          )}

          {isAuthenticated && (
            <>
              <li onClick={props.click}>
                <Link to="/customers">By Customers</Link>
              </li>
              <li onClick={props.click}>
                <Link to="/items">By Item</Link>
              </li>
              <li onClick={props.click}>
                <p onClick={() => logout()}>Log out</p>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default SideDrawer;
