import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const ReservationForm = () => {
  const [form, setForm] = useState({
    name: "",
    date: "",
    time: "",
    guests: "",
    email: "",
    mobile: "",
  });
  const [showSummary, setShowSummary] = useState(false);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleNext = (event) => {
    event.preventDefault();
    const allFieldsFilled = Object.values(form).every((field) => field !== "");
    if (!allFieldsFilled) {
      alert("Please fill all the fields");
      return;
    }

    const guests = Number(form.guests);
    if (!Number.isInteger(guests) || guests <= 0) {
      alert("Please enter a valid number of guests.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const regex = /^04\d{8}$/;
    if (!regex.test(form.mobile)) {
      alert("Please enter a valid Australian mobile number.");
      return;
    }

    setShowSummary(true);
  };

  const handleBack = () => {
    setShowSummary(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      {!showSummary ? (
        <>
          <div className="d-flex flex-wrap justify-content-center my-5 form-gap">
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                className="text-uppercase mb-2 formInput"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                className="text-uppercase mb-2 formInput"
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formTime">
              <Form.Label>Time</Form.Label>
              <Form.Control
                className="text-uppercase mb-2 formInput"
                as="select"
                name="time"
                value={form.time}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select...
                </option>
                <option value="17:00">5:00 PM</option>
                <option value="17:30">5:30 PM</option>
                <option value="18:00">6:00 PM</option>
                <option value="18:30">6:30 PM</option>
                <option value="19:00">7:00 PM</option>
                <option value="19:30">7:30 PM</option>
                <option value="20:00">8:00 PM</option>
                <option value="20:30">8:30 PM</option>
                <option value="21:00">9:00 PM</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formGuests">
              <Form.Label>Number of Guests</Form.Label>
              <Form.Control
                className="text-uppercase mb-2 formInput"
                type="number"
                name="guests"
                value={form.guests}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                className="text-uppercase mb-2 formInput"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formMobile">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                className="text-uppercase mb-2 formInput"
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
              />
            </Form.Group>
          </div>
          <Button
            className="d-flex justify-content-center text-uppercase form-button"
            onClick={handleNext}
          >
            Next
          </Button>
        </>
      ) : (
        <div className="">
          <div className="mx-auto wrap p-3 my-5">
            <p>Name: {form.name}</p>
            <p>Date: {form.date}</p>
            <p>Time: {form.time}</p>
            <p>Number of Guests: {form.guests}</p>
            <p>Email: {form.email}</p>
            <p>Mobile: {form.mobile}</p>
          </div>
          <div className="d-flex justify-content-center ">
            <Button
              className="text-uppercase mx-2 form-button"
              onClick={handleBack}
            >
              Back
            </Button>
            <Button className="text-uppercase mx-2 form-button" type="submit">
              Submit
            </Button>
          </div>
        </div>
      )}
    </Form>
  );
};

export default ReservationForm;
