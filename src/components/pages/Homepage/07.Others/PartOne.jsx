import React from "react";
import ImageOne from "../../../../assets/images/Homepage/others/One.png";

const PartOne = () => {
  return (
    <section className="my-12">
      <div className="main-container max-w-[1600px] h-[612px] relative mx-auto my-0">
        <div
          className="max-w-[1600px] h-[508px] text-[0px] bg-[#28b0a6] rounded-[16px] relative mt-[104px] mr-0 mb-0 ml-0 pt-1"
          style={{ backgroundImage: `url(${ImageOne})` }}
        >
          <span className="flex w-[1076px] h-[168px] justify-center items-start font-['Poppins'] text-[56px] font-normal leading-[84px] text-[#fff] tracking-[-0.38px] relative text-center z-[6] mt-[72px] mr-0 mb-0 ml-[262px]">
            Tour the World from Your Couch with #ExperienceLive!
          </span>
          <span className="flex w-[750px] h-[48px] justify-center items-start font-['Poppins'] text-[32px] font-normal leading-[48px] text-[#bcf0ec] tracking-[-0.38px] relative text-center whitespace-nowrap z-[5] mt-[28px] mr-0 mb-0 ml-[425px]">
            To kickstart your digital adventures with Entrada
          </span>
          <div className="cursor-pointer flex w-[188px] h-[80px] justify-center items-center bg-[#fff] rounded-[40px] relative z-[3] mt-[56px] mr-0 mb-0 ml-[706px]">
            <span className="flex w-[108px] h-[36px] justify-center items-start shrink-0 font-['Poppins'] text-[24px] font-normal leading-[36px] text-[#28b0a6] tracking-[-0.38px] relative text-center whitespace-nowrap z-[3] ">
              Check All
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartOne;
