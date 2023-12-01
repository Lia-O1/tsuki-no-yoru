import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";
import "../styles/ReservationsPage.css";

export default function ReservationsPage() {
  return (
    <div className="ReservationsPage">
      <div className="wrap pt-5">
        <Navbar />
        <div className="m-5 p-5">
          <h2 className="text-center">BOOK A TABLE</h2>
          <hr className="mb-0 mx-auto w-40" />
          <BookingForm />
        </div>
        <Footer />
      </div>
    </div>
  );
}
