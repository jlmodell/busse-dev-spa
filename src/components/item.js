import React, { useState } from "react";

import ItemSummary from "./itemSummary";
import ItemDetails from "./itemDetails";

export default function Item(props) {
  const [isClicked, setIsClicked] = useState(false);
  const [type, setType] = useState(true);

  const onClick = () => {
    setIsClicked(!isClicked);
  };

  if (isClicked && type) {
    return (
      <ItemSummary
        name={props.name}
        onClick={onClick}
        type={type}
        setType={() => setType(false)}
      />
    );
  } else if (isClicked && !type) {
    return (
      <ItemDetails
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
