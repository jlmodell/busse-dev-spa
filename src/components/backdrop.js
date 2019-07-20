import React, { useContext } from "react";

import StoreContext from "../context/Store";

const Backdrop = () => {
  const [state, dispatch] = useContext(StoreContext);

  const handleBackdrop = () => {
    dispatch({
      type: "drawer_toggler",
      value: false
    });
  };

  return (
    <>
      <div className="backdrop" onClick={handleBackdrop} />
    </>
  );
};

export default Backdrop;
