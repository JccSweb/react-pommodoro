import React from "react";
import ButtonTempo from "./ButtonTempo";
import Tempo from "./Tempo";
import "./styles/tempos.css";

const Tempos = ({
  temporizador,
  setTemporizador,
  descanso15min,
  setDescanso15Min,
  descanso5min,
  setDescanso5min,
}) => {
  return (
    <>
      {temporizador.isNext === true ? (
        <div className="tempo-div">
          <h2> Let 's get to work</h2>
          <Tempo tempo={temporizador.tempo} />
          <ButtonTempo tempo={temporizador} setTempo={setTemporizador} />
        </div>
      ) : descanso5min.isNext === true ? (
        <div className="tempo-div">
          <h2> Take 5 </h2>
          <Tempo tempo={descanso5min.tempo} />
          <ButtonTempo tempo={descanso5min} setTempo={setDescanso5min} />
        </div>
      ) : (
        <div className="tempo-div -15">
          <h2> Your well deserved rest!! </h2>
          <Tempo tempo={descanso15min.tempo} />
          <ButtonTempo tempo={descanso15min} setTempo={setDescanso15Min} />
        </div>
      )}
    </>
  );
};

export default Tempos;
