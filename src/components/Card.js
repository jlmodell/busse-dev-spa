import React, { useState } from "react";

import CardSummary from "./cardSummary";
import CardDetails from "./cardDetails";

export default function Card(props) {
  const [isClicked, setIsClicked] = useState(false);
  const [type, setType] = useState(true);

  const onClick = () => {
    setIsClicked(!isClicked);
  };

  if (isClicked && type) {
    return (
      <CardSummary
        name={props.name}
        onClick={onClick}
        type={type}
        setType={() => setType(false)}
      />
    );
  } else if (isClicked && !type) {
    return (
      <CardDetails
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
