import React from "react";

const DetailLeftBttom = () => {
  return (
    <div>
      {" "}
      <div className="main-container  w-[328px] h-[161px] text-[0px] rounded-[40px] relative mx-auto my-0">
        <span className="flex w-[328px] h-[48px] justify-start items-start font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#546179] tracking-[0.5px] relative text-left overflow-hidden z-[1] mt-0 mr-0 mb-0 ml-0">
          If you have question about this tour,
          <br />
          please feel free to ask
        </span>
        <div className="duration-500 cursor-pointer w-[328px] hover:bg-gray-300 h-[54px] bg-[#fff] rounded-[40px] border-solid border-2 border-[#dce5eb] relative z-[4] mt-[16px] mr-0 mb-0 ml-0">
          <span className="duration-500 flex w-[169px] h-[27px] justify-center items-start font-['Poppins'] text-[18px] font-normal leading-[27px] text-[#99a3ad]  absolute top-[11px] left-[81px] text-center whitespace-nowrap z-[5]">
            Ask the Tour Expert
          </span>
        </div>
        <span className="block h-[21px] font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#99a3ad] relative text-left whitespace-nowrap z-[2] mt-[22px] mr-0 mb-0 ml-0">
          *All questions are replied to within 24-48 hrs
        </span>
      </div>
    </div>
  );
};

export default DetailLeftBttom;
