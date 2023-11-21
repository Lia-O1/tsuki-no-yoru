import React from "react";
import showcase from "../images/showcase.jpg";
import "../styles/About.css";

export default function About() {
  return (
    <div className="About">
      <div>
        {" "}
        {/* Add borders to the div! */}
        <p>月の夜</p>
      </div>
      <hr />
      <p>ABOUT US</p>
      <div>
        <img src={showcase} alt="showcase" />
      </div>
      <p>
        At Tsuki no Yoru, we are dedicated to providing our customers with an
        unforgettable Japanese culinary adventure. Our menu features a wide
        variety of traditional Japanese dishes, prepared using only the freshest
        and highest quality ingredients. The aroma of sizzling meats, the
        delicate flavors of fresh seafood, and the vibrant colors of seasonal
        vegetables all come together to create a feast for the senses. Our
        skilled chefs are constantly experimenting with new flavors and
        techniques to bring you the very best of Japan. Join us for a
        gastronomic journey that will transport you to the heart of Japan with
        every bite.
      </p>
      <hr />
      <hr />
      <p>OUR HISTORY</p>
      <p>
        Tsuki no Yoru was founded by Hiroshi Nakamura, who moved from Japan to
        Australia at a young age. Growing up, he was always fascinated by the
        rich culture and traditions of his homeland, and he dreamed of one day
        sharing his love for Japanese cuisine with others. After years of honing
        his skills and perfecting his recipes, he finally realized his dream by
        opening Tsuki no Yoru. Since then, our restaurant has become a beloved
        destination for those seeking an authentic taste of Japan.
      </p>
      <div>
        <p>月の夜</p>
      </div>
      <hr />
      <hr />
    </div>
  );
}
