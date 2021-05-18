import React from "react";

const Footer = () => {
  let ano = new Date();
  ano = ano.getFullYear();
  return (
    <footer>
      <p>Joaquim Saraiva {ano}</p>
    </footer>
  );
};

export default Footer;
