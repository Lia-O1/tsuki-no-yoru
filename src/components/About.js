import React from "react";
import Footer from "./Footer";
import showcase from "../images/showcase.jpg";
import chef from "../images/chef.jpg";
import "../styles/About.css";

export default function About() {
  return (
    <div className="About">
      <div className="wrap">
        <div className="d-none d-md-flex position-absolute bookmark">
          <hr className="h-15 m-0" />
          <span className="d-flex flex-column align-items-center justify-content-start px-1 pt-2 lh-sm bookmark-text">
            <span>月</span>
            <span>の</span>
            <span>夜</span>
          </span>
          <hr className="h-15 m-0" />
        </div>
        <div className="container pt-5">
          <div className="row py-3">
            <hr className="w-35 mx-auto" />
            <h2 className="text-center">ABOUT US</h2>
          </div>
          <div className="row d-flex flex-md-row-reverse align-items-center pb-5">
            <div className="col-md-6">
              <p className="my-4 mx-auto">
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
            <div className="col-md-6">
              <div className="py-5 ps-5 mt-4 image-wrap-left">
                <img
                  src={showcase}
                  alt="Japanese meal with ramen, gyoza, and karaage"
                />
              </div>
            </div>
          </div>
          <div className="row py-3">
            <hr className="w-35 mx-auto" />
            <h2 className="text-center">OUR HISTORY</h2>
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <p className="text-end my-4 mx-auto">
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
            <div className="col-md-6">
              <div className="py-5 ps-5 mt-4 image-wrap-right ">
                <img src={chef} alt="Chef" />
              </div>
            </div>
          </div>
        </div>

        <div className="d-none d-md-block my-5">
          <hr className="d-flex justify-content-end m-0 w-35" />
          <hr className="mt-5 w-70" />
        </div>
        <br />
        <Footer />
      </div>
    </div>
  );
}
