import React from "react";

const RightArrow = ({ onclick }) => {
  return (
    <div className="">
      {" "}
      <div className="arrrow w-[72px] h-[72px] rounded-full  border-2 hover:border-[#28B0A6] hover:bg-[#28B0A6] duration-500">
        {" "}
        <i className="arrow right mt-[24px] mr-3"></i>{" "}
      </div>{" "}
    </div>
  );
};

export default RightArrow;
