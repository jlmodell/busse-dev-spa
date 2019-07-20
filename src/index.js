import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Security, ImplicitCallback } from "@okta/okta-react";

import App from "./App";
import Customers from "./pages/Customers";
import Items from "./pages/Items";

import Store from "./context/Store";
import Layout from "./components/Layout";

const config = {
  issuer: process.env.REACT_APP_domain,
  redirect_uri: window.location.origin + "/implicit/callback",
  client_id: process.env.REACT_APP_clientid
};

ReactDOM.render(
  <Router>
    <Store>
      <Security
        issuer={config.issuer}
        client_id={config.client_id}
        redirect_uri={config.redirect_uri}
      >
        <Layout>
          <Route path="/" exact component={App} />
          <Route path="/implicit/callback" component={ImplicitCallback} />
          <Route path="/customers" exact component={Customers} />
          <Route path="/items" exact component={Items} />
        </Layout>
      </Security>
    </Store>
  </Router>,
  document.getElementById("root")
);
