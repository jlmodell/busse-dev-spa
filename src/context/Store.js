import React, { createContext, useReducer } from "react";

export const StoreContext = createContext({});

const initialState = {
  customers: [],
  items: [],
  dates: false,
  datePicker: true,
  start: "",
  end: "",
  isDrawerToggled: false
};

const StoreReducer = (state, action) => {
  switch (action.type) {
    case "fetch_cust":
      return {
        ...state,
        customers: action.payload
      };
    case "fetch_item":
      return {
        ...state,
        items: action.payload
      };
    case "set_dates":
      return {
        ...state,
        [action.field]: action.value,
        dates: true
      };
    case "date_picker":
      return {
        ...state,
        datePicker: action.value
      };
    case "drawer_toggler":
      return {
        ...state,
        isDrawerToggled: action.value
      };
    default:
      throw new Error("You must include a type and payload");
  }
};

export default function Store({ children }) {
  const [state, dispatch] = useReducer(StoreReducer, initialState);

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
}
