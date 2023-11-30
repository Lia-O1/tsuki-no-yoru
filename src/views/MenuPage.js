import React from "react";
import {
  entrees,
  mains,
  salads,
  sushi,
  soups,
  desserts,
} from "../data/MenuLists";
import Navbar from "../components/Navbar";
import PhotosCarousel from "../components/PhotosCarousel";
import MenuSection from "../components/MenuSection";
import Footer from "../components/Footer";
import "../styles/MenuPage.css";

export default function MenuPage() {
  return (
    <div className="MenuPage">
      <div className="wrap pt-5">
        <Navbar />
        <br />
        <div className="pt-5">
          <div className="d-flex flex-column align-items-center justify-content-center mx-auto mb-4 bookmark">
            <hr className="w-35 mb-0" />
            <div className="d-flex">
              <hr className="h-15 m-0" />
              <span className="d-flex flex-column align-items-center justify-content-start px-1 pt-2 lh-sm bookmark-text">
                <span>メ</span>
                <span>ニ</span>
                <span>ュ</span>
                <span>ー</span>
              </span>
              <hr className="h-15 m-0" />
            </div>
          </div>
          <h2 className="text-center pt-2 pb-2">MENU</h2>
          <hr className="w-35 mx-auto mb-5" />
          <PhotosCarousel />
          <div className="mb-4" />
          <MenuSection title="Entrees" items={entrees} />
          <MenuSection title="Mains" items={mains} />
          <MenuSection title="Salads" items={salads} />
          <MenuSection title="Sushi" items={sushi} />
          <MenuSection title="Soups" items={soups} />
          <MenuSection title="Desserts" items={desserts} />
        </div>
        <Footer />
      </div>
    </div>
  );
}
