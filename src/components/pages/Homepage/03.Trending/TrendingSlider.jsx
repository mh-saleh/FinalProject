import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../../ProductCard/ProductCard";
import LeftArrow from "../LeftArrow";
import RightArrow from "../RightArrow";

const TrendingSlider = () => {
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
    <section className="max-w-Container mx-auto my-20 px-[1vw]">
      <div className="flex justify-between mb-16 items-end ">
        <div className="flex justify-between ">
          <div className=" pr-[7px] flex-col justify-center items-start gap-4 inline-flex">
            <div className="text-slate-800 text-[40px] font-bold font-['Poppins']">
              Trending 2021
            </div>
            <div className="text-slate-600 text-2xl font-normal font-['Poppins'] leading-9">
              Sost Brilliant reasons Entrada should be your one-stop-shop!
            </div>
          </div>
        </div>
        <div className="btn-div  flex  gap-4  ">
          <button className="btn-left" onClick={() => handleScroll(-200)}>
            <LeftArrow />
          </button>
          <button className="btn-right" onClick={() => handleScroll(200)}>
            <RightArrow />
          </button>
        </div>
      </div>
      <div
        className="overflow-x-auto hideScrollbar  w-full min-w-screen relative"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        ref={sliderRef}
      >
        <div className="flex gap-4">
          {items.map((item) => (
            <div key={item.id}>
              <ProductCard Index={item.id} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSlider;
