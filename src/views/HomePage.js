import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";

export default function HomePage() {
  return (
    <Fragment>
      <Navbar />
      <Welcome />
    </Fragment>
  );
}
