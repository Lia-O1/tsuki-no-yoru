import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./images/logo.png";

export default function Navbar() {
  return (
    <Fragment className="Navbar">
      <div class="container-fluid">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <span className="navbar-logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </span>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/menu">Menu</Link>
            </li>
            <li className="nav-item">
              <Link to="/reservations">Reservations</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
}
