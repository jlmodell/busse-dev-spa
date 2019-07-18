import React, { useContext } from "react";

import { StoreContext } from "../context/Store";

import Formol, { Field } from "formol";

export default function SetDates() {
  const [state, dispatch] = useContext(StoreContext);

  const onSubmit = async ({ start, end }) => {
    await dispatch({
      type: "set_dates",
      field: "start",
      value: start
    });
    await dispatch({
      type: "set_dates",
      field: "end",
      value: end
    });
    await dispatch({
      type: "date_picker",
      value: false
    });
  };

  const datePickerClick = () => {
    dispatch({
      type: "date_picker",
      value: !state.datePicker
    });
  };

  return (
    <>
      {state.datePicker && (
        <div className="formol-container">
          <Formol onSubmit={onSubmit}>
            <Field type="date">Start</Field>
            <Field type="date">End</Field>
          </Formol>
        </div>
      )}
      {state.start && state.end && (
        <div className="dates-set">
          <table>
            <tbody>
              <tr>
                <th>Start</th>
                <th>End</th>
              </tr>
              <tr>
                <td>{state.start}</td>
                <td>{state.end}</td>
              </tr>
            </tbody>
          </table>
          <button onClick={datePickerClick}>Change Dates</button>
        </div>
      )}
    </>
  );
}
