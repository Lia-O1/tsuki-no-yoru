import React, { useState, useEffect } from "react";
import { NavLink, useMatch, useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import logo from "../images/logo.png";
import "../styles/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="Navbar">
      <nav className="d-flex">
        <ul className="d-flex justify-content-end align-items-center sticky-top ps-4">
          <li>
            {" "}
            <NavLink to="/" className="nav-logo d-flex align-items-center">
              <img src={logo} alt="logo" />
            </NavLink>
          </li>
          <li className="d-none d-lg-flex">
            <NavLink
              to="/"
              className={`nav-link d-flex align-items-center px-4 ${
                useMatch("/") ? "active" : ""
              }`}
            >
              HOME
            </NavLink>
          </li>
          <li className="d-none d-lg-flex">
            <NavLink
              to="/menu"
              className={`nav-link d-flex align-items-center px-4 ${
                useMatch("/menu") ? "active" : ""
              }`}
            >
              MENU
            </NavLink>
          </li>
          <li className="d-none d-lg-flex">
            <NavLink
              to="/reservations"
              className={`nav-link d-flex align-items-center px-4 ${
                useMatch("/reservations") ? "active" : ""
              }`}
            >
              RESERVATIONS
            </NavLink>
          </li>
        </ul>
        <button
          className="d-flex d-lg-none align-items-center justify-content-end pe-4 my-button-class"
          onClick={toggle}
        >
          <FiMenu size="36px" color="white" />
        </button>
      </nav>
      <nav className="d-flex">
        <ul
          className={`sidebar d-flex flex-column justify-content-center align-items-center ${
            isOpen ? "open" : ""
          }`}
        >
          <li className="d-flex justify-content-center align-items-center">
            <img src={logo} alt="logo" />
          </li>
          <li className="d-flex justify-content-center align-items-center">
            <button className="my-button-class" onClick={toggle}>
              <MdClose size="36px" color="white" />
            </button>
          </li>
          <li>
            <NavLink
              to="/"
              className={`nav-link d-flex justify-content-center align-items-center ${
                useMatch("/") ? "active" : ""
              }`}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={`nav-link d-flex justify-content-center align-items-center  ${
                useMatch("/menu") ? "active" : ""
              }`}
            >
              MENU
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reservations"
              className={`nav-link d-flex justify-content-center align-items-center ${
                useMatch("/reservations") ? "active" : ""
              }`}
            >
              RESERVATIONS
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
