import React from "react";
import ReadMoreLess from "../ReadMoreLess";
import Clock from "../../../../assets/images/Details/overview/clock.png";
import Walking from "../../../../assets/images/Details/overview/walking.png";
import Meter from "../../../../assets/images/Details/overview/meter.png";
import People from "../../../../assets/images/Details/overview/people.png";
import Cake from "../../../../assets/images/Details/overview/cake.png";
import Tree from "../../../../assets/images/Details/overview/tree.png";
const OverviewCard = () => {
  return (
    <div>
      <div className="main-container w-[662px] h-[396px] text-[0px] relative mx-auto my-0">
        <span className="flex w-[648px] h-[96px] justify-start items-start font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#1d293f] tracking-[0.5px] relative text-left z-[34] mt-0 mr-0 mb-0 ml-0">
          <ReadMoreLess
            TextToShow={` Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit`}
            TextToHide={`Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do. Elit dolore sunt cupidatat minim nisi nulla fugiat sit dolor adipisicing excepteur eiusmod. Mollit reprehenderit magna tempor ex.`}
          />
        </span>

        <div className="w-[614px] h-[24px] relative z-[31] mt-[56px] mr-0 mb-0 ml-0">
          <span className="flex h-[24px] justify-start items-center font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#546179] tracking-[0.5px] absolute top-0 left-0 text-left whitespace-nowrap z-[31]">
            Duration
          </span>
          <span className="flex h-[24px] justify-start items-center font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#546179] tracking-[0.5px] absolute top-0 left-[272px] text-left whitespace-nowrap z-[26]">
            Activity
          </span>
          <span className="flex h-[24px] justify-start items-center font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#546179] tracking-[0.5px] absolute top-0 left-[544px] text-left whitespace-nowrap z-20">
            Physical
          </span>
        </div>
        <div className="w-[662px] h-[32.102px] relative z-30 mt-[21px] mr-0 mb-0 ml-0">
          <img
            src={Clock}
            className="w-[4.83%] h-full bg-[length:100%_100%] bg-no-repeat border-none absolute top-0 left-0 z-[28] pointer"
          />
          <img
            src={Walking}
            className="w-[4.83%] h-full bg-[url(../assets/images/3b126170-48ce-4771-90cf-73d5af7dd663.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-[41.09%] z-[23]"
          />
          <div className="flex w-[17.82%] h-full justify-between items-center absolute top-0 left-[82.18%] z-[21]">
            <img
              src={Meter}
              className="w-[32px] h-[32.102px] shrink-0 bg-[url(../assets/images/73024239-6aa6-453f-beb3-3b606f85b4b3.png)] bg-[length:100%_100%] bg-no-repeat relative z-[21]"
            />
            <span className="h-[20px] shrink-0 font-['Poppins'] text-[16px] font-normal leading-[20px] text-[#1d293f] relative text-left whitespace-nowrap z-[19]">
              Strenuous
            </span>
          </div>
          <span className="flex h-[20px] justify-start items-center font-['Poppins'] text-[16px] font-normal leading-[20px] text-[#1d293f] absolute top-[calc(50%-10.05px)] left-[36px] text-left whitespace-nowrap z-30">
            2 Days
          </span>
          <span className="flex h-[20px] justify-start items-center font-['Poppins'] text-[16px] font-normal leading-[20px] text-[#1d293f] absolute top-[calc(50%-10.05px)] left-[308px] text-left whitespace-nowrap z-[25]">
            Walking
          </span>
        </div>
        <div className="w-[606px] h-[24px] relative z-[14] mt-[22.898px] mr-0 mb-0 ml-0">
          <span className="flex h-[24px] justify-start items-center font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#546179] tracking-[0.5px] absolute top-0 left-0 text-left whitespace-nowrap z-[14]">
            Group Size
          </span>
          <span className="flex h-[24px] justify-start items-center font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#546179] tracking-[0.5px] absolute top-0 left-[272px] text-left whitespace-nowrap z-[9]">
            Age
          </span>
          <span className="flex h-[24px] justify-start items-center font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#546179] tracking-[0.5px] absolute top-0 left-[544px] text-left whitespace-nowrap z-[4]">
            Season
          </span>
        </div>
        <div className="w-[648px] h-[32.102px] relative z-[16] mt-[21px] mr-0 mb-0 ml-0">
          <img
            src={People}
            className="w-[4.94%] h-full bg-[url(../assets/images/11670319-c7c8-4c22-9d4c-f2883aa12ed9.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-0 z-[16]"
          />
          <img
            src={Cake}
            className="w-[4.94%] h-full bg-[url(../assets/images/5cf32d42-c228-48ef-8aac-65960183bdc7.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-[41.98%] z-[11]"
          />
          <img
            src={Tree}
            className="w-[4.94%] h-full bg-[url(../assets/images/8cb11bc8-0967-4e6d-a304-de068b12ecc9.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-[83.95%] z-[6]"
          />
          <span className="flex h-[20px] justify-start items-center font-['Poppins'] text-[16px] font-normal leading-[20px] text-[#1d293f] absolute top-[calc(50%-10.05px)] left-[36px] text-left whitespace-nowrap z-[15]">
            8
          </span>
          <span className="flex h-[20px] justify-start items-center font-['Poppins'] text-[16px] font-normal leading-[20px] text-[#1d293f] absolute top-[calc(50%-10.05px)] left-[308px] text-left whitespace-nowrap z-10">
            7+
          </span>
          <span className="flex h-[20px] justify-start items-center font-['Poppins'] text-[16px] font-normal leading-[20px] text-[#1d293f] absolute top-[calc(50%-10.05px)] left-[580px] text-left whitespace-nowrap z-[5]">
            Apr-Sep
          </span>
        </div>
        <div className="border-b-2 w-[648px] h-px bg-[url(../assets/images/30d3b9ea-0a40-47e7-a0f9-413684c51934.png)] bg-cover bg-no-repeat relative mt-[25.898px] mr-0 mb-0 ml-0" />
      </div>
    </div>
  );
};

export default OverviewCard;
