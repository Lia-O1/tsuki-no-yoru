import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "./images/logo.png";

export default function Navbar() {
  return (
    <Fragment>
      <div className="container-fluid Navbar">
        <nav className="navbar navbar-expand-lg fixed-top d-flex justify-content-between px-4 my-navbar">
          <NavLink to="/" className="navbar-brand">
            <img src={logo} alt="logo" />
          </NavLink>
          <ul className="navbar-nav">
            <li className="nav-item px-3">
              <NavLink to="/" className="nav-link" activeClassName="active">
                HOME
              </NavLink>
            </li>
            <li className="nav-item px-3">
              <NavLink to="/menu" className="nav-link" activeClassName="active">
                MENU
              </NavLink>
            </li>
            <li className="nav-item px-3 ">
              <NavLink
                to="/reservations"
                className="nav-link"
                activeClassName="active"
              >
                RESERVATIONS
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
}
