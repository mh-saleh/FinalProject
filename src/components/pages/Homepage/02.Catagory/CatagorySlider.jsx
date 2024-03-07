import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";

import CatagoryCard from "./CatagoryCard";
import LeftArrow from "../LeftArrow";
import RightArrow from "../RightArrow";
import ImageIconone from "../../../../assets/images/Homepage/catagory/one.png";
import ImageIcontwo from "../../../../assets/images/Homepage/catagory/two.png";
import ImageIconthree from "../../../../assets/images/Homepage/catagory/three.png";
import ImageIconfour from "../../../../assets/images/Homepage/catagory/four.png";
import ImageIconfive from "../../../../assets/images/Homepage/catagory/five.png";

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
    <section className="max-w-Container mx-auto my-20">
      <div className="flex justify-between mb-16 items-end ">
        <div className="flex justify-between ml-4">
          <div className=" pr-[7px] flex-col justify-center items-start gap-4 inline-flex">
            <div className="text-slate-800 text-[40px] font-bold font-['Poppins']">
              Select Category
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
          <CatagoryCard ImageOne={ImageIconone} Ratings={4.9} />
          <CatagoryCard ImageOne={ImageIcontwo} Ratings={4.5} />
          <CatagoryCard ImageOne={ImageIconthree} Ratings={3.8} />
          <CatagoryCard ImageOne={ImageIconfour} Ratings={4.8} />
          <CatagoryCard ImageOne={ImageIconfive} Ratings={4.6} />
        </div>
      </div>
    </section>
  );
};

export default TrendingSlider;
