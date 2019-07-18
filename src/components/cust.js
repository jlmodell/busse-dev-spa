import React, { useState } from "react";

import CustSummary from "./custSummary";
import CustDetails from "./custDetails";

export default function Cust(props) {
  const [isClicked, setIsClicked] = useState(false);
  const [type, setType] = useState(true);

  const onClick = () => {
    setIsClicked(!isClicked);
  };

  if (isClicked && type) {
    return (
      <CustSummary
        name={props.name}
        onClick={onClick}
        type={type}
        setType={() => setType(false)}
      />
    );
  } else if (isClicked && !type) {
    return (
      <CustDetails
        name={props.name}
        onClick={onClick}
        type={type}
        setType={() => setType(true)}
      />
    );
  } else {
    return (
      <div className="card-name" onClick={onClick}>
        {props.name}
      </div>
    );
  }
}
