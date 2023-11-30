import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styles/PhotosCarousel.css";
import meal1 from "../images/meal1-meat.jpg";
import meal2 from "../images/meal2-lunch.jpg";
import meal3 from "../images/meal3-sushi.jpg";
import meal4 from "../images/meal4-sashimi.jpg";
import drinks from "../images/drinks.jpg";

export default function PhotosCarousel() {
  return (
    <div className="PhotosCarousel">
      <Carousel>
        <Carousel.Item>
          <div className="d-flex justify-content-center carousel-item">
            <img className="mx-5 mb-5" src={meal1} alt="Meat" />
            <img
              className="d-none d-md-inline mx-5 mb-5"
              src={meal2}
              alt="Lunch"
            />
            <img
              className="d-none d-lg-inline mx-5 mb-5"
              src={meal3}
              alt="Sushi"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <img className="mx-5 mb-5" src={meal2} alt="Lunch" />
            <img
              className="d-none d-md-inline mx-5 mb-5"
              src={meal3}
              alt="Sushi"
            />
            <img
              className="d-none d-lg-inline mx-5 mb-5"
              src={meal4}
              alt="Sashimi Platter"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <img className="mx-5 mb-5" src={meal3} alt="Sushi" />
            <img
              className="d-none d-md-inline mx-5 mb-5"
              src={meal4}
              alt="Sashimi Platter"
            />
            <img
              className="d-none d-lg-inline mx-5 mb-5"
              src={drinks}
              alt="Drinks"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <img className="mx-5 mb-5" src={drinks} alt="Drinks" />
            <img
              className="d-none d-md-inline mx-5 mb-5"
              src={meal1}
              alt="Meat"
            />
            <img
              className="d-none d-lg-inline mx-5 mb-5"
              src={meal2}
              alt="Lunch"
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
