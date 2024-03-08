import React, { useState } from "react";
import Tick from "../../../../assets/images/Details/instructions/Tick.png";
import Cross from "../../../../assets/images/Details/instructions/Cross.png";
import ReadMoreLess from "../ReadMoreLess";

const InstructionsCard = () => {
  const [showContentBelow, setShowContentBelow] = useState(false);

  return (
    <div>
      <div className="main-container w-[652px] h-[672px] text-[0px] relative mx-auto my-0">
        <div className="">
          <span className="flex w-[648px] h-[96px] justify-start items-start font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#1d293f] tracking-[0.5px] relative text-left z-[34] mt-0 mr-0 mb-0 ml-[4px]">
            <ReadMoreLess
              TextToHide={`Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt
          etile pariatur dolor mollit reprehenderit magna tempor ex minim velit
          sunt do. Elit dolore sunt cupidatat minim nisi nulla fugiat sit dolor
          adipisicing excepteur eiusmod. Mollit reprehenderit magna tempor ex.`}
              TextToShow={`Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt
          etile pariatur dolor mollit reprehenderit magna tempor ex minim velit 
          sunt do.   Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corrupti, atque porro adipisci aspernatur laborum explicabo, reiciendis, asperiores quidem accusantium alias nam ab!   `}
            />
          </span>
        </div>

        <div className="">
          <img
            src={Tick}
            alt="Tick"
            className="w-[24px] h-[24px] bg-cover bg-no-repeat absolute top-1/2 left-px translate-x-0 translate-y-[-579.17%] z-[31]"
          />
          <span className="flex h-[20px] justify-start items-center font-['Poppins'] text-[16px] font-normal leading-[20px] text-[#1d293f] absolute top-[calc(50%-137px)] left-[5.06%] text-left whitespace-nowrap z-30">
            All breakfasts, 4 packed lunches, and 6 dinners
          </span>
          <img
            src={Tick}
            alt="Tick"
            className="w-[24px] h-[24px] bg-cover bg-no-repeat absolute top-1/2 left-px translate-x-0 translate-y-[-383.33%] z-[28]"
          />
          <span className="flex h-[20px] justify-start items-center font-['Poppins'] text-[16px] font-normal leading-[20px] text-[#1d293f] absolute top-[calc(50%-89px)] left-[5.06%] text-left whitespace-nowrap z-[27]">
            All Fees and Taxes
          </span>
          <img
            src={Tick}
            alt="Tick"
            className="w-[3.68%] h-[3.58%] bg-cover bg-no-repeat absolute top-[43.3%] left-[0.15%] z-[25]"
          />
          <span className="flex h-[20px] justify-start items-center font-['Poppins'] text-[16px] font-normal leading-[20px] text-[#1d293f] absolute top-[calc(50%-41px)] left-[5.06%] text-left whitespace-nowrap z-[24]">
            All necessary documents and paperwork (TIMS cards and permit)
          </span>
          <img
            src={Tick}
            alt="Tick"
            className="w-[24px] h-[24px] bg-cover bg-no-repeat absolute top-1/2 left-px translate-x-0 translate-y-[16.67%] z-[22]"
          />
          <span className="flex h-[20px] justify-start items-center font-['Poppins'] text-[16px] font-normal leading-[20px] text-[#1d293f] absolute top-[calc(50%--7px)] left-[5.06%] text-left whitespace-nowrap z-[21]">
            Highly experienced Government Registered guide
          </span>
          <img
            src={Tick}
            alt="Tick"
            className="w-[3.68%] h-[3.58%] bg-cover bg-no-repeat absolute top-[57.63%] left-[0.15%] z-[19]"
          />
          <span className="flex h-[20px] justify-start items-center font-['Poppins'] text-[16px] font-normal leading-[20px] text-[#1d293f] absolute top-[calc(50%--55px)] left-[5.06%] text-left whitespace-nowrap z-[18]">
            First aid box
          </span>
          <img
            src={Tick}
            alt="Tick"
            className="w-[3.68%] h-[3.58%] bg-cover bg-no-repeat absolute top-[64.8%] left-[0.15%] z-[16]"
          />
          <span className="flex h-[20px] justify-start items-center font-['Poppins'] text-[16px] font-normal leading-[20px] text-[#1d293f] absolute top-[calc(50%--103px)] left-[5.06%] text-left whitespace-nowrap z-[15]">
            Farewell dinner
          </span>
          <img
            src={Cross}
            alt="Cross"
            className="w-[24px] h-[24px] bg-cover bg-no-repeat absolute top-1/2 left-px translate-x-0 translate-y-[616.67%] z-[13]"
          />
          <span className="flex h-[20px] justify-start items-center font-['Poppins'] text-[16px] font-normal leading-[20px] text-[#1d293f] absolute top-[calc(50%--151px)] left-[5.06%] text-left whitespace-nowrap z-[12]">
            Alcoholic Beverages
          </span>
          <img
            src={Cross}
            alt="Cross"
            className="w-[3.68%] h-[3.58%] bg-cover bg-no-repeat absolute top-[79.13%] left-[0.15%] z-10"
          />
          <span className="flex h-[20px] justify-start items-center font-['Poppins'] text-[16px] font-normal leading-[20px] text-[#1d293f] absolute top-[calc(50%--199px)] left-[5.06%] text-left whitespace-nowrap z-[9]">
            Portugal visa fee
          </span>
          <img
            src={Cross}
            alt="Cross"
            className="w-[3.68%] h-[3.58%] bg-cover bg-no-repeat absolute top-[86.3%] left-[0.15%] z-[7]"
          />
          <span className="flex h-[20px] justify-start items-center font-['Poppins'] text-[16px] font-normal leading-[20px] text-[#1d293f] absolute top-[calc(50%--247px)] left-[5.06%] text-left whitespace-nowrap z-[6]">
            Personal expenses (Phone calls, bar bills, battery recharge,
            laundry)
          </span>
          <img
            src={Cross}
            alt="Cross"
            className="w-[3.68%] h-[3.58%] bg-cover bg-no-repeat absolute top-[93.46%] left-0 z-[4]"
          />
          <span className="flex h-[20px] justify-start items-center font-['Poppins'] text-[16px] font-normal leading-[20px] text-[#1d293f] absolute top-[calc(50%--295px)] left-[4.91%] text-left whitespace-nowrap z-[3]">
            Tipping and donations
          </span>
        </div>
      </div>
    </div>
  );
};

export default InstructionsCard;
