import React from "react";
import ImageOne from "../../../../assets/images/Homepage/destinations/one.png";
import ImageTwo from "../../../../assets/images/Homepage/destinations/two.png";
import ImageThree from "../../../../assets/images/Homepage/destinations/three.png";
import ImageFour from "../../../../assets/images/Homepage/destinations/four.png";
import ImageFive from "../../../../assets/images/Homepage/destinations/five.png";
import ImageSix from "../../../../assets/images/Homepage/destinations/six.png";
import LeftArrow from "../LeftArrow";
import RightArrow from "../RightArrow";
const TopDestination = () => {
  return (
    <div className="max-w-Container box-border">
      <div className="main-container max-w-[1600px] h-[702px] relative mx-auto my-0">
        <div
          className={`w-[512px] h-[702px] bg-[url(${ImageThree})] bg-cover bg-no-repeat rounded-[32px] absolute top-0 left-[408px] z-[25]`}
          style={{ backgroundImage: `url(${ImageThree})` }}
        >
          <div className="w-[56px] h-[32px] bg-[#fef2de] rounded-[16px] relative z-30 mt-[32px] mr-0 mb-0 ml-[32px]">
            <span className="flex w-[37px] h-[20px] justify-center items-start font-['Poppins'] text-[18px] font-medium leading-[20px] text-[#f5a623] absolute top-[calc(50%-10px)] left-[calc(50%-18px)] text-center whitespace-nowrap z-[31]">
              4.7
            </span>
          </div>
          <span className="block h-[20px] font-['Poppins'] text-[24px] font-normal leading-[20px] text-[#fff] tracking-[-0.38px] relative text-left whitespace-nowrap z-[27] mt-[554px] mr-0 mb-0 ml-[32px]">
            Greece
          </span>
          <span className="block h-[24px] font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#fff] tracking-[0.5px] relative text-left whitespace-nowrap z-[28] mt-[8px] mr-0 mb-0 ml-[32px]">
            Waterfall
          </span>
        </div>
        <div
          className="w-[648px] h-[335px] bg-[url(../assets/images/1786e06d-4638-4643-be25-b29e1e4822a5.png)] bg-cover bg-no-repeat rounded-[32px] absolute top-0 left-[952px] z-[17]"
          style={{ backgroundImage: `url(${ImageFour})` }}
        >
          <div className="w-[56px] h-[32px] bg-[#fef2de] rounded-[16px] relative z-[22] mt-[32px] mr-0 mb-0 ml-[32px]">
            <span className="flex w-[37px] h-[20px] justify-center items-start font-['Poppins'] text-[18px] font-medium leading-[20px] text-[#f5a623] absolute top-[calc(50%-10px)] left-[calc(50%-18px)] text-center whitespace-nowrap z-[23]">
              4.2
            </span>
          </div>
          <span className="block h-[20px] font-['Poppins'] text-[24px] font-normal leading-[20px] text-[#fff] tracking-[-0.38px] relative text-left whitespace-nowrap z-[19] mt-[187px] mr-0 mb-0 ml-[32px]">
            London
          </span>
          <span className="block h-[24px] font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#fff] tracking-[0.5px] relative text-left whitespace-nowrap z-20 mt-[8px] mr-0 mb-0 ml-[32px]">
            Waterfall
          </span>
        </div>
        <div
          className="w-[376px] h-[335px] bg-[url(../assets/images/1685cbf1-43e0-4595-ac4d-49c670a6b982.png)] bg-cover bg-no-repeat rounded-[32px] absolute top-0 left-0 z-[41]"
          style={{ backgroundImage: `url(${ImageOne})` }}
        >
          <div className="w-[56px] h-[32px] bg-[#fef2de] rounded-[16px] relative z-[46] mt-[32px] mr-0 mb-0 ml-[32px]">
            <span className="flex w-[37px] h-[20px] justify-center items-start font-['Poppins'] text-[18px] font-medium leading-[20px] text-[#f5a623] absolute top-[calc(50%-10px)] left-[calc(50%-18px)] text-center whitespace-nowrap z-[47]">
              4.5
            </span>
          </div>
          <span className="block h-[20px] font-['Poppins'] text-[24px] font-normal leading-[20px] text-[#fff] tracking-[-0.38px] relative text-left whitespace-nowrap z-[43] mt-[187px] mr-0 mb-0 ml-[32px]">
            Vietnam
          </span>
          <span className="block h-[24px] font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#fff] tracking-[0.5px] relative text-left whitespace-nowrap z-[44] mt-[8px] mr-0 mb-0 ml-[32px]">
            Waterfall
          </span>
        </div>
        <div
          className="w-[376px] h-[335px] bg-[url(../assets/images/2d05a6e9-1cbb-4f66-8db8-5f522dc812eb.png)] bg-cover bg-no-repeat rounded-[32px] absolute top-[367px] left-[1224px] z-[1]"
          style={{ backgroundImage: `url(${ImageSix})` }}
        >
          <div className="w-[56px] h-[32px] bg-[#fef2de] rounded-[16px] relative z-[6] mt-[32px] mr-0 mb-0 ml-[32px]">
            <span className="flex w-[37px] h-[20px] justify-center items-start font-['Poppins'] text-[18px] font-medium leading-[20px] text-[#f5a623] absolute top-[calc(50%-10px)] left-[calc(50%-18px)] text-center whitespace-nowrap z-[7]">
              4.7
            </span>
          </div>
          <span className="block h-[20px] font-['Poppins'] text-[24px] font-normal leading-[20px] text-[#fff] tracking-[-0.38px] relative text-left whitespace-nowrap z-[3] mt-[187px] mr-0 mb-0 ml-[32px]">
            Paris
          </span>
          <span className="block h-[24px] font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#fff] tracking-[0.5px] relative text-left whitespace-nowrap z-[4] mt-[8px] mr-0 mb-0 ml-[32px]">
            Waterfall
          </span>
        </div>
        <div
          className="w-[376px] h-[335px] bg-[url(../assets/images/286dacf4-c891-4f72-89cc-c4ff603dd944.png)] bg-cover bg-no-repeat rounded-[32px] absolute top-[367px] left-px z-[33]"
          style={{ backgroundImage: `url(${ImageTwo})` }}
        >
          <div className="w-[56px] h-[32px] bg-[#fef2de] rounded-[16px] relative z-[38] mt-[32px] mr-0 mb-0 ml-[32px]">
            <span className="flex w-[37px] h-[20px] justify-center items-start font-['Poppins'] text-[18px] font-medium leading-[20px] text-[#f5a623] absolute top-[calc(50%-10px)] left-[calc(50%-18px)] text-center whitespace-nowrap z-[39]">
              4.2
            </span>
          </div>
          <span className="block h-[20px] font-['Poppins'] text-[24px] font-normal leading-[20px] text-[#fff] tracking-[-0.38px] relative text-left whitespace-nowrap z-[35] mt-[187px] mr-0 mb-0 ml-[32px]">
            Old Rain
          </span>
          <span className="block h-[24px] font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#fff] tracking-[0.5px] relative text-left whitespace-nowrap z-[36] mt-[8px] mr-0 mb-0 ml-[32px]">
            Waterfall
          </span>
        </div>
        <div
          className="w-[240px] h-[335px] bg-[url(../assets/images/8e0078e5-c44b-42b1-a462-a70d777890a1.png)] bg-cover bg-no-repeat rounded-[32px] absolute top-[367px] left-[952px] z-[9]"
          style={{ backgroundImage: `url(${ImageFive})` }}
        >
          <div className="w-[56px] h-[32px] bg-[#fef2de] rounded-[16px] relative z-[14] mt-[32px] mr-0 mb-0 ml-[32px]">
            <span className="flex w-[37px] h-[20px] justify-center items-start font-['Poppins'] text-[18px] font-medium leading-[20px] text-[#f5a623] absolute top-[calc(50%-10px)] left-[calc(50%-18px)] text-center whitespace-nowrap z-[15]">
              4.5
            </span>
          </div>
          <span className="block h-[20px] font-['Poppins'] text-[24px] font-normal leading-[20px] text-[#fff] tracking-[-0.38px] relative text-left whitespace-nowrap z-[11] mt-[187px] mr-0 mb-0 ml-[32px]">
            Amsterdam
          </span>
          <span className="block h-[24px] font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#fff] tracking-[0.5px] relative text-left whitespace-nowrap z-[12] mt-[8px] mr-0 mb-0 ml-[32px]">
            Waterfall
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopDestination;
