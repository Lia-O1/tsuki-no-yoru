import React from "react";
import "../styles/MenuPage.css";

export default function MenuSection({ title, items }) {
  return (
    <div className="MenuSection">
      <hr />
      <div className="d-flex position-absolute bookmark">
        <hr className="m-0 h-15" />
        <span className="d-flex flex-column align-items-center justify-content-start px-1 pt-2 lh-sm bookmark-text">
          <span>月</span>
          <span>の</span>
          <span>夜</span>
        </span>
        <hr className="m-0 h-15" />
      </div>
      <br />
      <div className="mt-5 p-3 mx-auto menu-bg">
        <div className="menu-border py-3">
          <div className="d-flex justify-content-center text-uppercase title">
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
