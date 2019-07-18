import React, { createContext, useReducer } from "react";

export const StoreContext = createContext({});

const initialState = {
  customers: [],
  items: [],
  dates: false,
  start: "",
  end: ""
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
