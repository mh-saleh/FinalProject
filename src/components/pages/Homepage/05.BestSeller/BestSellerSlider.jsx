import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../../ProductCard/ProductCard";
import LeftArrow from "../LeftArrow";
import RightArrow from "../RightArrow";
import BestSeller from "./BestSeller";

const BestSellerSlider = () => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);
  const items = useSelector((state) => state.Catagory.products);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    const x = e.clientX;
    const diff = startX - x;
    sliderRef.current.scrollLeft = scrollLeft + diff;
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleScroll = (amount) => {
    const targetScrollLeft = sliderRef.current.scrollLeft + amount;
    sliderRef.current.scrollTo({
      left: targetScrollLeft,
      behavior: "smooth", // Enable smooth scrolling
    });
  };

  return (
    <section className="mx-2 px-[1vw]">
      {" "}
      <div className="flex justify-between items-start">
        <div className=" pr-[7px] flex-col justify-center items-start gap-4 inline-flex">
          <div className="text-slate-800 text-[40px] font-bold font-['Poppins']">
            Best Seller
          </div>
          <div className="text-slate-600 text-2xl font-normal font-['Poppins'] leading-9">
            Sost Brilliant reasons Entrada should be your one-stop-shop!
          </div>
        </div>
        <div className="pt-3 cursor-pointer w-[188px] h-[60px] bg-[#28B0A6] inline-block px-3 rounded-[40px] flex-shrink-0 self-end">
          <div className="text-center text-white text-2xl font-normal font-['Poppins']">
            Check All
          </div>
        </div>
      </div>
      <div className="mt-10">
        <BestSeller />
      </div>
    </section>
  );
};

export default BestSellerSlider;
