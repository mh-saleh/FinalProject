import React from "react";
import Gallery from "./Gallery";
import ImageOne from "../../../assets/images/Details/Gallery/One.png";
import Hero from "../../../assets/images/Details/Gallery/Hero.png";
import ImageFour from "../../../assets/images/Details/Gallery/Two.png";
import ImageTwo from "../../../assets/images/Details/Gallery/Three.png";
import ImageThree from "../../../assets/images/Details/Gallery/Four.png";
const DetailsTop = () => {
  return (
    <div className="mx-auto ml-2">
      <div className="flex gap-4">
        <div className="w-[15%] flex flex-col gap-4">
          <div className="w-full h-[152px]  ">
            <img src={ImageFour} className="w-full h-full" alt="" />
          </div>
          <div className="w-full h-[152px]  ">
            <img src={ImageTwo} className="w-full h-full" alt="" />
          </div>
          <div className="w-full h-[152px]  ">
            <img src={ImageThree} className="w-full h-full" alt="" />
          </div>
          <div className="w-full h-[152px]  ">
            <img src={Hero} className="w-full h-full" alt="" />
          </div>
        </div>
        <div className="w-[82%] box-border  h-[656px]">
          <Gallery />
        </div>
      </div>
    </div>
  );
};

export default DetailsTop;
