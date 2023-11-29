import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="Footer py-5">
      <div className="d-flex justify-content-evenly text-uppercase py-5">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <span>Location</span>
          <span>2/5 Imaginary St</span>
          <span>Melbourne VIC</span>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <span>Open Hours</span>
          <span>Tue-Sun, 5PM-11PM</span>
          <span>Closed mondays</span>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <span>Contact Us</span>
          <span>(07) 4246 7575</span>
          <span>tsukinoyoru@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
