import React from "react";
import "../styles/MenuPage.css";

export default function MenuSection() {
  return (
    <div className="MenuSection">
      <hr />
      <div className="d-flex position-absolute bookmark">
        <hr className="h-15 m-0" />
        <span className="d-flex flex-column align-items-center justify-content-start px-1 pt-2 lh-sm bookmark-text">
          <span>月</span>
          <span>の</span>
          <span>夜</span>
        </span>
        <hr className="h-15 m-0" />
      </div>
      <div className="menu-bg mt-5">
        <div className="menu-border p-2"></div>
      </div>
    </div>
  );
}
