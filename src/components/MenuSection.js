import React from "react";
import "../styles/MenuPage.css";

export default function MenuSection({ title, items }) {
  return (
    <div className="MenuSection">
      <hr />
      <div className="d-none d-md-flex position-absolute bookmark">
        <hr className="m-0 h-30" />
        <span className="d-flex flex-column align-items-center justify-content-start text-uppercase px-1 pt-2 lh-sm bookmark-text">
          {title.split("").map((letter, index) => (
            <span key={index} className="px-1">
              {letter}
            </span>
          ))}
        </span>
        <hr className="m-0 h-30" />
      </div>
      <br />
      <div className="my-5 p-3 mx-auto menu-bg">
        <div className="menu-border py-3">
          <div className="d-flex justify-content-center text-uppercase text-center pb-1 title">
            {title}
          </div>
          {items.map((item) => (
            <div
              key={item.id}
              className="d-flex flex-wrap justify-content-between text-uppercase menu-item "
            >
              <div className="px-4 py-3">{item.item}</div>
              <div className="px-4 py-3">{item.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
