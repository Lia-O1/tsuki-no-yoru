import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Welcome.css";

export default function Welcome() {
  return (
    <div className="d-flex justify-content-center align-items-center position-relative Welcome">
      <div className="d-flex flex-column justify-content-center align-items-cente text-center bg">
        <h1 className="mb-0">TSUKI NO YORU</h1>

        <p className="mb-5">
          | SAVOR THE AUTHENTIC FLAVOURS OF JAPAN WITH EVERY BITE |
        </p>

        <button className="mt-2 form-button">
          {" "}
          <NavLink to="/reservations" className="link">
            BOOK A TABLE
          </NavLink>
        </button>
      </div>
    </div>
  );
}
