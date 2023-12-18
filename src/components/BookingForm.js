import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {
  validateName,
  validateDate,
  validateTime,
  validateGuests,
  validateEmail,
  validateMobile,
} from "../helpers/formValidation.js";

const ReservationForm = () => {
  const [form, setForm] = useState({
    name: "",
    date: "",
    time: "",
    guests: "",
    email: "",
    mobile: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    date: "",
    time: "",
    guests: "",
    email: "",
    mobile: "",
  });
  const [showForm, setShowForm] = useState(true);
  const [showSummary, setShowSummary] = useState(false);
  const [showSubmitMessage, setShowSubmitMessage] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    let errorMessage = "";
    if (name === "name") {
      errorMessage = validateName(value);
    } else if (name === "date") {
      errorMessage = validateDate(value);
    } else if (name === "time") {
      errorMessage = validateTime(value);
    } else if (name === "guests") {
      errorMessage = validateGuests(value);
    } else if (name === "email") {
      errorMessage = validateEmail(value);
    } else if (name === "mobile") {
      errorMessage = validateMobile(value);
    }

    setForm({
      ...form,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: errorMessage,
    });
  };

  const handleNext = (event) => {
    event.preventDefault();

    let newErrors = {
      name: "",
      date: "",
      time: "",
      guests: "",
      email: "",
      mobile: "",
    };

    if (!form.name) {
      newErrors.name = "Please fill out this field.";
    }
    if (!form.date) {
      newErrors.date = "Please fill out this field.";
    }
    if (!form.time) {
      newErrors.time = "Please fill out this field.";
    }
    if (!form.guests) {
      newErrors.guests = "Please fill out this field.";
    } else {
      const guests = Number(form.guests);
      if (!Number.isInteger(guests) || guests <= 0) {
        newErrors.guests = "Please enter a valid number of guests.";
      }
    }
    if (!form.email) {
      newErrors.email = "Please fill out this field.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email)) {
        newErrors.email = "Please enter a valid email address.";
      }
    }
    if (!form.mobile) {
      newErrors.mobile = "Please fill out this field.";
    } else {
      const mobileRegex = /^04\d{8}$/;
      if (!mobileRegex.test(form.mobile)) {
        newErrors.mobile = "Please enter a valid Australian mobile number.";
      }
    }

    if (Object.values(newErrors).some((error) => error !== "")) {
      setErrors(newErrors);
      return;
    }
    setShowForm(false);
    setShowSummary(true);
  };

  const handleBack = () => {
    setShowSummary(false);
    setShowForm(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSummary(false);
    setShowSubmitMessage(true);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {showForm && (
        <>
          <div className="d-flex flex-wrap justify-content-center my-5 form-gap">
            <Form.Group controlId="formName">
              <Form.Label className="text-uppercase">Name</Form.Label>
              <Form.Control
                className="mb-2 formInput"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && <small>{errors.name}</small>}
            </Form.Group>

            <Form.Group controlId="formDate">
              <Form.Label className="text-uppercase">Date</Form.Label>
              <Form.Control
                className="mb-2 formInput"
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
              />
              {errors.date && <small>{errors.date}</small>}
            </Form.Group>

            <Form.Group controlId="formTime">
              <Form.Label className="text-uppercase">Time</Form.Label>
              <Form.Control
                className="mb-2 formInput"
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
              {errors.time && <small>{errors.time}</small>}
            </Form.Group>

            <Form.Group controlId="formGuests">
              <Form.Label className="text-uppercase">
                Number of Guests
              </Form.Label>
              <Form.Control
                className="mb-2 formInput"
                type="number"
                name="guests"
                value={form.guests}
                onChange={handleChange}
              />
              {errors.guests && <small>{errors.guests}</small>}
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label className="text-uppercase">Email</Form.Label>
              <Form.Control
                className="mb-2 formInput"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && <small>{errors.email}</small>}
            </Form.Group>

            <Form.Group controlId="formMobile">
              <Form.Label className="text-uppercase">Mobile</Form.Label>
              <Form.Control
                className="mb-2 formInput"
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
              />
              {errors.mobile && <small>{errors.mobile}</small>}
            </Form.Group>
          </div>
          <Button
            className="d-flex justify-content-center text-uppercase form-button"
            onClick={handleNext}
            disabled={
              Object.values(form).some((value) => value === "") ||
              Object.values(errors).some((error) => error !== "")
            }
          >
            Next
          </Button>
        </>
      )}
      {showSummary && !showForm && (
        <div>
          <div className="mx-auto wrap p-3 my-5">
            <p>
              <span className="text-uppercase">Name:</span> {form.name}
            </p>
            <p>
              <span className="text-uppercase">Date:</span> {form.date}
            </p>
            <p>
              <span className="text-uppercase">Time:</span> {form.time}
            </p>
            <p>
              <span className="text-uppercase">Number of Guests:</span>{" "}
              {form.guests}
            </p>
            <p>
              <span className="text-uppercase">Email:</span> {form.email}
            </p>
            <p>
              <span className="text-uppercase">Mobile:</span> {form.mobile}
            </p>
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
      {showSubmitMessage && !showForm && !showSummary && (
        <div>
          <div className="d-flex flex-column justify-content-center align-items-center text-center px-3 py-5 my-5 wrap-submit">
            <p>Thank you, {form.name}! Your booking has been submitted.</p>
            <p>Date: {form.date}</p>
            <p className="mb-0">Time: {form.time}</p>
          </div>
        </div>
      )}
    </Form>
  );
};

export default ReservationForm;
