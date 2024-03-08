import React from "react";
import ImageOne from "../../../../assets/images/Homepage/bestseller/One.png";
import ImageTwo from "../../../../assets/images/Homepage/bestseller/Two.png";
import ImageThree from "../../../../assets/images/Homepage/bestseller/Three.png";
import LeftArrow from "../LeftArrow";
import RightArrow from "../RightArrow";
const BestSeller = () => {
  return (
    <div className=" box-border mx-2">
      <div className="flex gap-3">
        <div className="w-1/3 rounded-[32px]">
          <img src={ImageOne} alt="" className="w-full" />
          <div className="mt-5">
            <h3 className="text-center text-slate-800 text-2xl font-medium font-['Poppins']">
              Sea Nature Views
            </h3>
            <p className="text-center text-gray-400 text-base font-normal font-['Poppins'] tracking-wide">
              Check Out Daily Deals and Promotion on Hotels. <br />
              Easy & Fast Booking
            </p>
          </div>
        </div>
        <div className="w-1/3 rounded-[32px]">
          <img src={ImageTwo} alt="" className="w-full" />
          <div className="mt-5">
            <h3 className="text-center text-slate-800 text-2xl font-medium font-['Poppins']">
              Trilogy Market Ptr
            </h3>
            <p className="text-center text-gray-400 text-base font-normal font-['Poppins'] tracking-wide">
              Check Out Daily Deals and Promotion on Hotels. <br />
              Easy & Fast Booking
            </p>
          </div>
        </div>
        <div className="w-1/3 rounded-[32px]">
          <img src={ImageThree} alt="" className="w-full" />
          <div className="mt-5">
            <h3 className="text-center text-slate-800 text-2xl font-medium font-['Poppins']">
              Train Tour Skyline
            </h3>
            <p className="text-center text-gray-400 text-base font-normal font-['Poppins'] tracking-wide">
              Check Out Daily Deals and Promotion on Hotels. <br />
              Easy & Fast Booking
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
