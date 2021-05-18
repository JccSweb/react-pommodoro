import React from "react";
import Tomato from "./Tomato";

import "./styles/Allhistory.css";

const AllHistory = ({ historico }) => {
  let list = [];
  if (!historico.length) {
    console.log("false");
  } else {
    let initial = 0;
    const reducer = (acumulator, item) => {
      return acumulator + item.total;
    };

    let result = historico.reduce(reducer, initial);
    for (let x = 0; x < result; x++) {
      list.push(<Tomato key={x} />);
    }
  }
  return (
    <div className="all-history">
      {" "}
      {!list.length ? (
        <h2>Get to work! You still haven't earned your tomatos!</h2>
      ) : (
        list
      )}{" "}
    </div>
  );
};

export default AllHistory;
