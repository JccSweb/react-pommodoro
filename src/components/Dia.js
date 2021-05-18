import React from "react";

const Dia = ({ dia, mes, ano }) => {
  return (
    <p>
      {dia}/{mes + 1}/{ano}
    </p>
  );
};

export default Dia;
