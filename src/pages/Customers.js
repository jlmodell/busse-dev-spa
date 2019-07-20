import React, { useContext, useEffect } from "react";
import axios from "axios";

import SetDates from "../components/SetDates";
import Cust from "../components/cust";

import { StoreContext } from "../context/Store";

const Customers = () => {
  const [state, dispatch] = useContext(StoreContext);

  useEffect(() => {
    state.dates && FetchCustomers();
  }, [state.end]);

  const FetchCustomers = async () => {
    try {
      const customers = await axios
        .get(
          `${process.env.REACT_APP_distinctCustomersApiUrl}?start=${
            state.start
          }&end=${state.end}`
        )
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
          <Cust key={i} name={c.name} />
        ))}
      </div>
    </>
  );
};

export default Customers;
