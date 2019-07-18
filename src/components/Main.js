import React from "react";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";

import Home from "../pages/Home";
import Customers from "../pages/Customers";
import Items from "../pages/Items";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <PrivateRoute exact path="/customers" component={Customers} />
      <PrivateRoute exact path="/items" component={Items} />
    </Switch>
  </main>
);

export default Main;
