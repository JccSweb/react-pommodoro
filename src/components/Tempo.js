import React from "react";

const Tempo = ({ tempo }) => {
  return (
    <p className="center">
      {Math.floor(tempo / 60 / 1000)} :{" "}
      {Math.floor((tempo % (60 * 1000)) / 1000) > 9 ? (
        Math.floor((tempo % (60 * 1000)) / 1000)
      ) : (
        <> 0{Math.floor((tempo % (60 * 1000)) / 1000)}</>
      )}
    </p>
  );
};

export default Tempo;