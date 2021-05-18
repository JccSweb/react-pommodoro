import React from "react";
import { Link } from "react-router-dom";
import tomato from "./../media/tomato.png";
import "./styles/navbar.css";
import hamburguer from "./../media/hamburguer.svg";
import { useState } from "react";

const Navbar = () => {
  const [responsive, setResponsive] = useState(false);
  return (
    <nav>
      <div className="container-nav">
        <img src={tomato} alt="" className="logo" />
        <ul className="link-list-full-width">
          <li>
            <Link to="/" className="nav-link">
              {" "}
              Pomodoro{" "}
            </Link>{" "}
          </li>{" "}
          <li>
            <Link to="/about" className="nav-link">
              {" "}
              What is it?{" "}
            </Link>{" "}
          </li>{" "}
          <li>
            <Link to="/daily-tomato" className="nav-link">
              {" "}
              History by day
            </Link>{" "}
          </li>{" "}
          <li>
            <Link to="/all-your-tomatos" className="nav-link">
              {" "}
              All your tomatos{" "}
            </Link>{" "}
          </li>{" "}
        </ul>{" "}
        <img
          src={hamburguer}
          alt=""
          className="hamburguer"
          onClick={() => setResponsive(!responsive)}
        />
      </div>
      {responsive ? (
        <ul className="menu-nav-smaller">
          <li>
            <Link
              to="/"
              className="nav-link"
              onClick={() => setResponsive(!responsive)}
            >
              {" "}
              Pomodoro{" "}
            </Link>{" "}
          </li>{" "}
          <li>
            <Link
              to="/about"
              className="nav-link"
              onClick={() => setResponsive(!responsive)}
            >
              {" "}
              What is it?{" "}
            </Link>{" "}
          </li>{" "}
          <li>
            <Link
              to="/daily-tomato"
              className="nav-link"
              onClick={() => setResponsive(!responsive)}
            >
              {" "}
              History by day{" "}
            </Link>{" "}
          </li>{" "}
          <li>
            <Link
              to="/all-your-tomatos"
              className="nav-link"
              onClick={() => setResponsive(!responsive)}
            >
              All your tomatos{" "}
            </Link>{" "}
          </li>{" "}
        </ul>
      ) : (
        ""
      )}
    </nav>
  );
};

export default Navbar;
