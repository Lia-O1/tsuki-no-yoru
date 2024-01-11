import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";
import "../styles/ReservationsPage.css";

export default function ReservationsPage() {
  return (
    <div className="ReservationsPage">
      <div className="wrap">
        <Navbar />
        <div className="main-body mb-5 px-5">
          <h2 className="text-center">BOOK A TABLE</h2>
          <hr className="mb-0 mx-auto w-40" />
          <BookingForm />
        </div>
        <Footer />
      </div>
    </div>
  );
}
