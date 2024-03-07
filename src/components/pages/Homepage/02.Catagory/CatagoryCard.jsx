import React from "react";

const CatagoryCard = ({ ImageOne, Ratings }) => {
  return (
    <div className="">
      {" "}
      <div className="main-container w-[375px] h-[293px] relative mx-auto my-0 ">
        <button className="w-[56px] h-[32px] text-[0px] border-none relative z-[5] pointer mt-[32px] mr-0 mb-0 ml-[288px]">
          <span className="flex w-[37px] h-[20px] justify-center items-start font-['Poppins'] text-[18px] font-medium leading-[20px] text-[#f5a623] relative text-center whitespace-nowrap z-[7] mt-[6px] mr-0 mb-0 ml-[10px]">
            {Ratings}
          </span>
          <div className="w-full h-full bg-[#fef2de] rounded-[16px] absolute top-0 left-0 z-[6]" />
        </button>
        <img
          src={ImageOne}
          className="w-[56px] h-[56px] bg-[url(../assets/images/3fc192cd-88b9-4b76-aae1-25c8ce964c92.png)] bg-[length:100%_100%] bg-no-repeat relative z-[4] mt-[49px] mr-0 mb-0 ml-[32px]"
        />
        <div className="w-[167px] h-[76px] relative z-[1] mt-[16px] mr-0 mb-0 ml-[32px]">
          <div className="w-[167px] h-[36px] font-['Poppins'] text-[24px] font-medium leading-[36px] tracking-[-0.38px] relative text-left whitespace-nowrap z-[3] mt-0 mr-0 mb-0 ml-0">
            <span className="font-['Poppins'] text-[24px] font-medium leading-[36px] text-[#1d293f] tracking-[-0.38px] relative text-left">
              Beach Activit
            </span>
            <span className="font-['Poppins'] text-[24px] font-medium leading-[36px] text-[#1d293f] tracking-[0.38px] relative text-left">
              y
            </span>
          </div>
          <span className="block h-[24px] font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#99a3ad] tracking-[0.5px] relative text-left whitespace-nowrap z-[2] mt-[16px] mr-0 mb-0 ml-0">
            196 Activities
          </span>
        </div>
        <div className="w-full h-full bg-[#fff] rounded-[8px] border-solid border border-[#dce5eb] absolute top-0 left-0 shadow-[0_2px_4px_0_rgba(14,86,124,0.16)]" />
      </div>
    </div>
  );
};

export default CatagoryCard;
