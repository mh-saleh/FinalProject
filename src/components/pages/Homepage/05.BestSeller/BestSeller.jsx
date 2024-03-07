import React from "react";
import ImageOne from "../../../../assets/images/Homepage/bestseller/One.png";
import ImageTwo from "../../../../assets/images/Homepage/bestseller/Two.png";
import ImageThree from "../../../../assets/images/Homepage/bestseller/Three.png";
import LeftArrow from "../LeftArrow";
import RightArrow from "../RightArrow";
const BestSeller = () => {
  return (
    <div className="max-w-Container box-border">
      <div className="main-container w-[1600px] h-[478px] relative mx-auto my-0">
        <div className="flex w-[1600px] h-[346px] justify-between items-center relative z-[14] mt-0 mr-0 mb-0 ml-0">
          <div
            className="w-[512px] h-[346px] shrink-0 bg-[url(../assets/images/8ea816f0-a97d-4d23-9a36-0a375ac5c3f2.png)] bg-[length:100%_100%] bg-no-repeat rounded-[32px] relative z-[14]"
            style={{ backgroundImage: `url(${ImageOne})` }}
          >
            <div className="flex w-[56px] h-[32px] justify-center items-center bg-[#f9c7d2] rounded-[16px] relative z-[28] mt-[32px] mr-0 mb-0 ml-[424px]">
              <span className="flex w-[37px] h-[20px] justify-center items-start shrink-0 font-['Poppins'] text-[18px] font-medium leading-[20px] text-[#ee5879] relative text-center whitespace-nowrap z-[28]">
                30%
              </span>
            </div>
            <span className="block h-[27px] font-['Poppins'] text-[18px] font-normal leading-[27px] text-[#fff] relative text-left whitespace-nowrap z-[25] mt-[151px] mr-0 mb-0 ml-[32px]">
              10 Days | 09 Night
            </span>
            <div className="w-[448px] h-[48px] relative z-[24] mt-[24px] mr-0 mb-0 ml-[32px]">
              <span className="flex h-full justify-start items-start font-['Poppins'] text-[32px] font-semibold leading-[48px] text-[#fff] tracking-[-0.48px] absolute top-0 left-0 text-left whitespace-nowrap z-[24]">
                $895.50
              </span>
              <div className="w-[10.71%] h-full bg-[url(../assets/images/786f472f-a04c-4742-b546-f3cfdab3eb45.png)] bg-[length:100%_100%] bg-no-repeat rounded-[50%] absolute top-0 left-[55.36%] z-[19]" />
              <div className="w-[30.36%] h-full bg-[#28b0a6] rounded-[24px] absolute top-0 left-[69.64%] z-[16]">
                <span className="flex h-[56.25%] justify-start items-start font-['Poppins'] text-[18px] font-normal leading-[27px] text-[#fff] absolute top-[22.92%] left-[27.21%] text-left whitespace-nowrap z-[17]">
                  Explore
                </span>
              </div>
              <div className="w-[3.12%] h-[33%] bg-[url(../assets/images/c485d7d7-29d8-46a8-b777-ad57c95049cd.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[33.33%] left-[59.15%] z-[21]" />
              <div className="w-[28.79%] h-[6.25%] bg-[url(../assets/images/bc2d414f-83dd-4670-9a06-69c7fe436dae.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[93.75%] left-0 z-[23]" />
            </div>
          </div>
          <img
            src={ImageTwo}
            className="w-[512px] h-[346px] shrink-0 bg-[url(../assets/images/8f7f67ec-1e7a-4b29-a11f-fe55e30b8ab1.png)] bg-[length:100%_100%] bg-no-repeat rounded-[32px] relative z-[9]"
          />
          <img
            src={ImageThree}
            className="w-[512px] h-[346px] shrink-0 bg-[url(../assets/images/ee7a9f8f-1396-4a89-ae26-40426ab8088a.png)] bg-[length:100%_100%] bg-no-repeat rounded-[32px] relative z-[4]"
          />
        </div>
        <div className="flex w-[1293px] h-[36px] justify-between items-center relative z-[12] mt-[32px] mr-0 mb-0 ml-[153px]">
          <span className="flex w-[206px] h-[36px] justify-center items-start shrink-0 font-['Poppins'] text-[24px] font-medium leading-[36px] text-[#1d293f] tracking-[-0.38px] relative text-center whitespace-nowrap z-[12]">
            Train Tour Skyline
          </span>
          <span className="flex w-[205px] h-[36px] justify-center items-start shrink-0 font-['Poppins'] text-[24px] font-medium leading-[36px] text-[#1d293f] tracking-[-0.38px] relative text-center whitespace-nowrap z-[7]">
            Sea Nature Views
          </span>
          <span className="flex w-[204px] h-[36px] justify-center items-start shrink-0 font-['Poppins'] text-[24px] font-medium leading-[36px] text-[#1d293f] tracking-[-0.38px] relative text-center whitespace-nowrap z-[2]">
            Trilogy Market Ptr
          </span>
        </div>
        <div className="flex w-[1496px] h-[48px] justify-between items-center relative z-[13] mt-[16px] mr-0 mb-0 ml-[52px]">
          <span className="flex w-[408px] h-[48px] justify-center items-start shrink-0 font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#99a3ad] tracking-[0.5px] relative text-center overflow-hidden z-[13]">
            Check Out Daily Deals and Promotion on Hotels. <br />
            Easy & Fast Booking
          </span>
          <span className="flex w-[408px] h-[48px] justify-center items-start shrink-0 font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#99a3ad] tracking-[0.5px] relative text-center overflow-hidden z-[8]">
            Check Out Daily Deals and Promotion on Hotels. <br />
            Easy & Fast Booking
          </span>
          <span className="flex w-[408px] h-[48px] justify-center items-start shrink-0 font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#99a3ad] tracking-[0.5px] relative text-center overflow-hidden z-[3]">
            Check Out Daily Deals and Promotion on Hotels. <br />
            Easy & Fast Booking
          </span>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
