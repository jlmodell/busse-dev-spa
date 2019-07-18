import React, { useState, useEffect, useContext, useLayoutEffect } from "react";
import axios from "axios";
import Switch from "react-switch";

import { StoreContext } from "../context/Store";

const CardSummary = props => {
  const [state] = useContext(StoreContext);

  const [summary, setSummary] = useState([]);

  useEffect(() => {
    FetchData();
  }, []);

  useLockBodyScroll();

  const FetchData = async () => {
    try {
      await axios
        .get(
          `${process.env.REACT_APP_summaryApiUrl}?customer=${
            props.name.split("|")[1]
          }&start=${state.start}&end=${state.end}`
        )
        .then(res => setSummary(res.data));
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="cards-modal">
      <span onClick={props.onClick}>&times;</span>
      <div className="card-title">{props.name.split("|")[0]} - Summary</div>
      <div className="card-toggle">
        <label>
          <Switch onChange={props.setType} checked={props.type} />
        </label>
      </div>
      <div className="card-container">
        <div className="card-summary">
          <table className="card-table">
            <tbody>
              <tr>
                <th>Key</th>
                <th>Value</th>
              </tr>
              {summary.map((s, i) => [
                <tr key={i + 1}>
                  <td>Quantity:</td>
                  <td>
                    {parseFloat(Math.round(s.totalQty * 100) / 100)
                      .toFixed(0)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                  </td>
                </tr>,
                <tr key={i + 2}>
                  <td>Sales:</td>
                  <td>
                    $
                    {parseFloat(Math.round(s.totalSales * 100) / 100)
                      .toFixed(2)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                  </td>
                </tr>,
                <tr key={i + 3}>
                  <td>Costs:</td>
                  <td>
                    $
                    {parseFloat(Math.round(s.totalCosts * 100) / 100)
                      .toFixed(2)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                  </td>
                </tr>,
                <tr key={i + 4}>
                  <td>Gross Profit:</td>
                  <td>
                    $
                    {parseFloat(
                      Math.round((s.totalSales - s.totalCosts) * 100) / 100
                    )
                      .toFixed(2)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                  </td>
                </tr>,
                <tr key={i + 5}>
                  <td>Gross Profit Margin:</td>
                  <td>
                    {parseFloat(
                      Math.round(
                        ((s.totalSales - s.totalCosts) / s.totalSales) *
                          100 *
                          100
                      ) / 100
                    )
                      .toFixed(2)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                    %
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

export default CardSummary;

const useLockBodyScroll = () => {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = originalStyle);
  }, []);
};
