import React from "react";
import { v4 as uuidv4 } from "uuid";
import Navbar from "../components/Navbar";
import PhotosCarousel from "../components/PhotosCarousel";
import MenuSection from "../components/MenuSection";
import "../styles/MenuPage.css";

export default function MenuPage() {
  return (
    <div className="MenuPage">
      <div className="wrap pt-5">
        <Navbar />
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
        </div>
      </div>
    </div>
  );
}

const entrees = [
  { id: uuidv4(), item: "Edamame (枝豆)", price: "$12.00" },
  { id: uuidv4(), item: "Gyoza (餃子)", price: "$16.00" },
  { id: uuidv4(), item: "Takoyaki (たこ焼き)", price: "$18.00" },
  { id: uuidv4(), item: "Yakitori (焼き鳥)", price: "$20.00" },
  { id: uuidv4(), item: "Agedashi Tofu (揚げ出し豆腐)", price: "$16.00" },
  { id: uuidv4(), item: "Karaage (唐揚げ)", price: "$18.00" },
  { id: uuidv4(), item: "Tempura (天ぷら)", price: "$24.00" },
];
