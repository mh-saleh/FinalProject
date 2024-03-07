import React from "react";
import { IconContext } from "react-icons";
import { RiArrowLeftSLine } from "react-icons/ri";

const LeftArrow = () => {
  return (
    <div onClick={onclick} className="">
      <div className="arrrow w-[72px] h-[72px] rounded-full border-2 hover:border-[#28B0A6] hover:bg-[#28B0A6]">
        <i className="arrow left mt-[24px] ml-2"></i>
      </div>
    </div>
  );
};

export default LeftArrow;
