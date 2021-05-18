import React from "react";
import Dia from "./Dia";

import DivForTomatos from "./DivForTomatos";
import "./styles/HistoricoPorDia.css";

const HistoricoPorDia = ({ historico }) => {
  const list = [];
  historico.forEach((element) => {
    let number = Math.floor(Math.random() * 10000);
    list.unshift(<DivForTomatos tomates={element.total} key={number} />);
    list.unshift(
      <Dia
        dia={element.dia}
        mes={element.mes}
        ano={element.ano}
        key={number + 1}
      />
    );
  });
  return (
    <>
      <div className="historico">
        {!list.length ? (
          <h2 className="no-tomatos">
            Get to work! You still haven't earned your tomatos!
          </h2>
        ) : (
          list
        )}
      </div>
    </>
  );
};

export default HistoricoPorDia;
