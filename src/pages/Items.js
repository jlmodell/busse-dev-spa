import React, { useContext, useEffect } from "react";
import axios from "axios";

import SetDates from "../components/SetDates";
import Item from "../components/item";

import { StoreContext } from "../context/Store";

export default function Items() {
  const [state, dispatch] = useContext(StoreContext);

  useEffect(() => {
    state.dates && FetchItems();
  }, [state.end]);

  const FetchItems = async () => {
    try {
      const items = await axios
        .get(
          `${process.env.REACT_APP_distinctItemsApiUrl}?start=${
            state.start
          }&end=${state.end}`
        )
        .then(response => response.data[0].uniqueItem);

      dispatch({
        type: "fetch_item",
        payload: items
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <SetDates />
      <div className="cards-container">
        {state.items.map((c, i) => (
          <Item key={i} name={c.name} />
        ))}
      </div>
    </>
  );
}
