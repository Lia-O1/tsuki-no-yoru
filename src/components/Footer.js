import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="Footer py-5">
      <div className="container">
        <div className="row d-flex justify-content-evenly text-uppercase">
          <div className="col-md-4 d-flex flex-column justify-content-center align-items-center py-4">
            <span>Location</span>
            <span>2/5 Imaginary St</span>
            <span>Melbourne VIC</span>
          </div>
          <div className="col-md-4 d-flex flex-column justify-content-center align-items-center py-4">
            <span>Open Hours</span>
            <span>Tue-Sun, 5PM-11PM</span>
            <span>Closed mondays</span>
          </div>
          <div className="col-md-4 d-flex flex-column justify-content-center align-items-center py-4">
            <span>Contact Us</span>
            <span>(07) 4246 7575</span>
            <span>tsukinoyoru@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
