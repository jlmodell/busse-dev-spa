import React, { useState, useEffect, useContext, useLayoutEffect } from "react";
import axios from "axios";
import Switch from "react-switch";

import { StoreContext } from "../context/Store";

const CardDetails = props => {
  const [state] = useContext(StoreContext);

  const [details, setDetails] = useState([]);

  useEffect(() => {
    FetchData();
  }, []);

  useLockBodyScroll();

  const FetchData = async () => {
    try {
      await axios
        .get(
          `${process.env.REACT_APP_detailsApiUrl}?customer=${
            props.name.split("|")[1]
          }&start=${state.start}&end=${state.end}`
        )
        .then(res => setDetails(res.data));
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="cards-modal">
      <span onClick={props.onClick}>&times;</span>
      <div className="card-title">{props.name.split("|")[0]} - Details</div>
      <div className="card-toggle">
        <label>
          <Switch onChange={props.setType} checked={props.type} />
        </label>
      </div>
      <div className="card-container">
        <div className="card-details">
          <table className="card-table">
            <tbody>
              <tr>
                <th>Key</th>
                <th>Value</th>
              </tr>
              {details.map((d, i) => [
                <tr key={i + 1}>
                  <td>Item:</td>{" "}
                  <td>
                    <bold>
                      ({d._id.ITEMID}) - {d._id.ITEM}
                    </bold>
                  </td>
                </tr>,
                <tr key={i + 2}>
                  <td>Quantity:</td>
                  <td>
                    {parseFloat(Math.round(d.totalQ * 100) / 100)
                      .toFixed(0)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                  </td>
                </tr>,
                <tr key={i + 3}>
                  <td>Sales: </td>
                  <td>
                    $
                    {parseFloat(Math.round(d.totalS * 100) / 100)
                      .toFixed(2)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                  </td>
                </tr>,
                <tr key={i + 4}>
                  <td>Average Sale Per Qty: </td>
                  <td>
                    $
                    {parseFloat((d.avgS * 100) / 100)
                      .toFixed(2)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                  </td>
                </tr>,
                <tr key={i + 5}>
                  <td>Costs:</td>
                  <td>
                    $
                    {parseFloat(Math.round(d.totalC * 100) / 100)
                      .toFixed(2)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                  </td>
                </tr>,
                <tr key={i + 6}>
                  <td>Average Cost Per Qty:</td>
                  <td>
                    $
                    {parseFloat((d.avgC * 100) / 100)
                      .toFixed(2)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                  </td>
                </tr>,
                <tr key={i + 7}>
                  <td>Transaction Fees (Credit Card):</td>
                  <td>
                    $
                    {parseFloat(Math.round(d.totalCCF * 100) / 100)
                      .toFixed(2)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                  </td>
                </tr>,
                <tr key={i + 8}>
                  <td>Admin Fees/Cash Discounts:</td>
                  <td>
                    $
                    {parseFloat(Math.round(d.totalTF * 100) / 100)
                      .toFixed(2)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                  </td>
                </tr>,
                <tr key={i + 9} className="card-table-last-child">
                  <td>
                    <center>~~~</center>
                  </td>
                  <td>
                    <center>~~~</center>
                  </td>
                </tr>
              ])}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;

const useLockBodyScroll = () => {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = originalStyle);
  }, []);
};
