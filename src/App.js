import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import MenuPage from "./MenuPage";
import ReservationsPage from "./ReservationsPage";

function App() {
  return (
    <Fragment className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/reservations" element={<ReservationsPage />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
