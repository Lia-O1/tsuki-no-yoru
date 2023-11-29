import React from "react";
import showcase from "../images/showcase.jpg";
import chef from "../images/chef.jpg";
import "../styles/About.css";

export default function About() {
  return (
    <div className="About">
      <div className="wrap">
        <div className="d-flex position-absolute bookmark-1">
          <hr className="h-20 m-0" />
          <span className="d-flex flex-column align-items-center justify-content-start px-1 pt-4 lh-sm bookmark-text">
            <span>月</span>
            <span>の</span>
            <span>夜</span>
          </span>
          <hr className="h-20 m-0" />
        </div>
        <div className="pt-5">
          <hr className="w-35 mx-auto" />
          <h2 className="text-center pt-2 pb-4">ABOUT US</h2>
          <div className="d-flex pt-3">
            <div className="py-4 pe-4 me-5 image-wrap-left">
              <img src={showcase} alt="Meals" />
            </div>
            <div className="d-flex flex-column justify-content-center ms-5">
              <p>
                At Tsuki no Yoru, we are dedicated to providing our customers
                with an unforgettable Japanese culinary adventure. Our menu
                features a wide variety of traditional Japanese dishes, prepared
                using only the freshest and highest quality ingredients. The
                aroma of sizzling meats, the delicate flavors of fresh seafood,
                and the vibrant colors of seasonal vegetables all come together
                to create a feast for the senses. Our skilled chefs are
                constantly experimenting with new flavors and techniques to
                bring you the very best of Japan. Join us for a gastronomic
                journey that will transport you to the heart of Japan with every
                bite.
              </p>
            </div>
          </div>
          <hr className="mt-5 mb-4 me-0 mx-auto w-70" />
          <div className="d-flex justify-content-end align-items-center me-0 mb-2">
            <h2 className="me-5 pe-4">OUR HISTORY</h2>
            <hr className="w-35 me-0 mt-1" />
          </div>
          <div className="d-flex justify-content-end pt-3">
            <div className="d-flex flex-column justify-content-center text-end me-5">
              <p>
                Tsuki no Yoru was founded by Hiroshi Nakamura, who moved from
                Japan to Australia at a young age. Growing up, he was always
                fascinated by the rich culture and traditions of his homeland,
                and he dreamed of one day sharing his love for Japanese cuisine
                with others. After years of honing his skills and perfecting his
                recipes, he finally realized his dream by opening Tsuki no Yoru.
                Since then, our restaurant has become a beloved destination for
                those seeking an authentic taste of Japan.
              </p>
            </div>
            <div className="d-flex pt-3">
              <div className="py-4 ps-4 ms-5 image-wrap-right ">
                <img src={chef} alt="Chef" />
              </div>
            </div>
          </div>
          <div className="position-relative bookmark-2-wrap">
            <div className="d-flex position-relative bookmark-2">
              <hr className="h-20 m-0" />
              <span className="d-flex flex-column align-items-center justify-content-end px-1 pb-0 mb-0 lh-sm bookmark-text">
                <span>月</span>
                <span>の</span>
                <span>夜</span>
              </span>
              <hr className="h-20 m-0" />
            </div>
            <hr className="d-flex justify-content-end m-0 w-35" />
            <hr className="mt-5 w-70" />
          </div>
        </div>
      </div>
    </div>
  );
}
