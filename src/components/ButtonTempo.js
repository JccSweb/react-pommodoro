import React from "react";

const ButtonTempo = ({ tempo, setTempo }) => {
  function alterarValor(tempo, setTempo) {
    let tempoActual = new Date();
    tempoActual = tempoActual.getTime();
    setTempo({
      ...tempo,
      iniciado: !tempo.iniciado,
      objectivo: tempoActual + tempo.tempo,
    });
  }
  return (
    <>
      <button onClick={() => alterarValor(tempo, setTempo)}>
        {" "}
        {
          tempo.iniciado === false ? "Start" : "Stop"
        } {
          " "
        }
      </button>{" "}
    </>
  );
};

export default ButtonTempo;
