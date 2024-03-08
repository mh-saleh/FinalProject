import React, { useState } from "react";
import IconOne from "../../../../assets/images/cartpage/top/One.png";
import IconTwo from "../../../../assets/images/cartpage/top/Two.png";
import IconThree from "../../../../assets/images/cartpage/top/Three.png";
import IconFour from "../../../../assets/images/cartpage/top/Four.png";
import IconFive from "../../../../assets/images/cartpage/top/Five.png";
import IconSix from "../../../../assets/images/cartpage/top/Six.png";

const SubmenuCard = () => {
  return (
    <div className="my-10">
      <div className="flex justify-between py-4 border px-3 rounded-[20px] mb-5">
        <div className="text-neutral-800 text-lg font-normal font-['Poppins'] leading-tight">
          Showing 1 - 10 of 2037 results for “cultural”
        </div>
        <div>
          <div>
            <span className="text-slate-600 text-lg font-normal font-['Poppins'] leading-tight">
              Sort by:{" "}
            </span>
            <span className="text-neutral-800 text-lg font-semibold font-['Poppins'] leading-tight">
              <select className="px-2 outline-none" name="" id="">
                <option value="">Most Popular</option>
                <option value="">Best Price</option>
                <option value="">Highest Price</option>
                <option value="">Lowest Price</option>
              </select>
            </span>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <div
          className={`w-1/6 px-4 py-[18px] rounded-2xl border border-gray-200 flex items-center gap-2 cursor-pointer `}
        >
          <div>
            <img src={IconOne} alt="" />
          </div>
          <p
            className={`text-base font-normal font-['Poppins'] tracking-wide `}
          >
            Discounted Deals
          </p>
        </div>
        <div
          className={`w-1/6 px-4 py-[18px] rounded-2xl border border-gray-200 flex items-center gap-2 cursor-pointer `}
        >
          <div>
            <img src={IconTwo} alt="" />
          </div>
          <p
            className={`text-base font-normal font-['Poppins'] tracking-wide `}
          >
            Discounted Deals
          </p>
        </div>
        <div
          className={`w-1/6 px-4 py-[18px] rounded-2xl border border-gray-200 flex items-center gap-2 cursor-pointer `}
        >
          <div>
            <img src={IconThree} alt="" />
          </div>
          <p
            className={`text-base font-normal font-['Poppins'] tracking-wide `}
          >
            Discounted Deals
          </p>
        </div>
        <div
          className={`w-1/6 px-4 py-[18px] rounded-2xl border border-gray-200 flex items-center gap-2 cursor-pointer `}
        >
          <div>
            <img src={IconFour} alt="" />
          </div>
          <p
            className={`text-base font-normal font-['Poppins'] tracking-wide `}
          >
            Discounted Deals
          </p>
        </div>
        <div
          className={`w-1/6 px-4 py-[18px] rounded-2xl border border-gray-200 flex items-center gap-2 cursor-pointer `}
        >
          <div>
            <img src={IconFive} alt="" />
          </div>
          <p
            className={`text-base font-normal font-['Poppins'] tracking-wide `}
          >
            Discounted Deals
          </p>
        </div>
        <div
          className={`w-1/6 px-4 py-[18px] rounded-2xl border border-gray-200 flex items-center gap-2 cursor-pointer `}
        >
          <div>
            <img src={IconSix} alt="" />
          </div>
          <p
            className={`text-base font-normal font-['Poppins'] tracking-wide `}
          >
            Discounted Deals
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubmenuCard;
