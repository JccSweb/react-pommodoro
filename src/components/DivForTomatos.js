import React from "react";
import Tomato from "./Tomato";

const DivForTomatos = ({ tomates }) => {
  let list = [];
  for (let x = 0; x < tomates; x++) {
    list.push(<Tomato key={x} />);
  }

  return <div className="dailyTomatos">{list}</div>;
};

export default DivForTomatos;
