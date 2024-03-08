import React from "react";
import AutoImageSlider from "./AutoImageSlider";
import SearchSection from "./SearchSection";
import ImageOne from "../../../../assets/images/Homepage/banner.png";
import ImageTwo from "../../../../assets/images/Homepage/banner2.png";
import ImageThree from "../../../../assets/images/Homepage/banner3.png";
import ImageFour from "../../../../assets/images/Homepage/banner4.png";
import ImageFive from "../../../../assets/images/Homepage/banner5.png";

const Hero = () => {
  let halum = [ImageOne, ImageTwo, ImageThree, ImageFour, ImageFive];
  return (
    <div className="max-w-Container mx-auto">
      <AutoImageSlider images={halum} interval={5000} />
      <div className="w-[1230px] py-4 px-6 h-[170px]  bg-white rounded-xl shadow-lg relative left-[175px] top-[-100px]">
        <div>
          <SearchSection />
        </div>
      </div>
    </div>
  );
};

export default Hero;
