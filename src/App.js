import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import HomePage from "./views/HomePage";
import MenuPage from "./views/MenuPage";
import ReservationsPage from "./views/ReservationsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/reservations" element={<ReservationsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
