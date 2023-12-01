import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const ReservationForm = () => {
  const [form, setForm] = useState({
    name: "",
    date: "",
    time: "",
    guests: "",
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
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formTime">
            <Form.Label>Time</Form.Label>
            <Form.Control
              as="select"
              name="time"
              value={form.time}
              onChange={handleChange}
            >
              <option value="">Select...</option>
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
              type="number"
              name="guests"
              value={form.guests}
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" onClick={handleNext}>
            Next
          </Button>
        </>
      ) : (
        <>
          <p>Name: {form.name}</p>
          <p>Date: {form.date}</p>
          <p>Time: {form.time}</p>
          <p>Number of Guests: {form.guests}</p>

          <Button variant="secondary" onClick={handleBack}>
            Back
          </Button>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </>
      )}
    </Form>
  );
};

export default ReservationForm;
