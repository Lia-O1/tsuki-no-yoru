import React, { Fragment, useState } from "react";
import { NavLink, useMatch } from "react-router-dom";
import LineIcon from "react-lineicons";
import "./Navbar.css";
import logo from "./images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Fragment>
      <div className="container-fluid Navbar">
        <nav className="navbar navbar-expand-lg fixed-top px-4 my-navbar">
          <NavLink to="/" className="navbar-brand">
            <img src={logo} alt="logo" />
          </NavLink>
          <button
            onClick={toggle}
            className={`navbar-toggler  ${isOpen ? "" : "collapsed"}`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <LineIcon name="menu" style={{ color: "white" }} />
          </button>
          <div
            className={`${
              isOpen ? "collapse show " : "collapse"
            } navbar-collapse`}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item px-3">
                <NavLink
                  to="/"
                  className={`nav-link ${useMatch("/") ? "active" : ""}`}
                >
                  HOME
                </NavLink>
              </li>
              <li className="nav-item px-3">
                <NavLink
                  to="/menu"
                  className={`nav-link ${useMatch("/menu") ? "active" : ""}`}
                >
                  MENU
                </NavLink>
              </li>
              <li className="nav-item px-3 ">
                <NavLink
                  to="/reservations"
                  className={`nav-link ${
                    useMatch("/reservations") ? "active" : ""
                  }`}
                >
                  RESERVATIONS
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Fragment>
  );
}
