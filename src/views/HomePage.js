import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import About from "../components/About";

export default function HomePage() {
  return (
    <Fragment>
      <Navbar />
      <Welcome />
      <About />
    </Fragment>
  );
}
