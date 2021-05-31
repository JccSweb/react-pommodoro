import React from "react";

const Footer = () => {
  let ano = new Date();
  ano = ano.getFullYear();
  return (
    <footer>
      <p>
        {" "}
        <a href="https://joaquimsaraiva.pt/" rel="noreferrer">
          {" "}
          Joaquim Saraiva - {ano}{" "}
        </a>
      </p>
    </footer>
  );
};

export default Footer;
