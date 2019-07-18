import React, { useContext, useEffect } from "react";
import axios from "axios";

import SetDates from "../components/SetDates";
import Card from "../components/Card";

import { StoreContext } from "../context/Store";

const BASE_URL = "http://busseinc.access.ly:9000/api/distinct/cust/";

export default function Customers() {
  const [state, dispatch] = useContext(StoreContext);

  useEffect(() => {
    state.dates && FetchCustomers();
  }, [state.end]);

  const FetchCustomers = async () => {
    try {
      const customers = await axios
        .get(`${BASE_URL}?start=${state.start}&end=${state.end}`)
        .then(response => response.data[0].uniqueCust);

      dispatch({
        type: "fetch_cust",
        payload: customers
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <SetDates />
      <div className="cards-container">
        {state.customers.map((c, i) => (
          <Card key={i} name={c.name} />
        ))}
      </div>
    </>
  );
}