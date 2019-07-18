import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Store from "./context/Store";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Customers from "./pages/Customers";
import Items from "./pages/Items";
import PrivateRoute from "./components/PrivateRoute";

import "../static/styles.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Store>
          <Layout />
        </Store>
      </BrowserRouter>
    </>
  );
}

export default App;
