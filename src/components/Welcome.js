import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Welcome.css";

export default function Welcome() {
  return (
    <div className="d-flex justify-content-center align-items-center Welcome">
      <div className="d-flex flex-column justify-content-center align-items-cente text-center bg">
        <h1 className="mt-5 mb-0">TSUKI NO YORU</h1>
        <hr className="b-block d-md-none" />
        <p className="mb-4 mx-auto">
          <span className="d-none d-md-inline">|</span> SAVOR THE AUTHENTIC
          FLAVOURS OF JAPAN WITH EVERY BITE{" "}
          <span className="d-none d-md-inline">|</span>
        </p>

        <button className="mb-5 form-button">
          {" "}
          <NavLink to="/reservations" className="link">
            BOOK A TABLE
          </NavLink>
        </button>
      </div>
    </div>
  );
}
