import React, { useState } from "react";
import PlusIcon from "../../../../../assets/images/Details/detailsLeft/Plus.png";
import MinusIcon from "../../../../../assets/images/Details/detailsLeft/Minus.png";
import ButtonIcon from "../../../../../assets/images/Details/detailsLeft/Button.png";
import DetailsDate from "./DetailsDate";
const DetailsLeftCard = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  return (
    <div>
      <div className="main-container pt-2 w-[376px] h-[557px] relative mx-auto my-0">
        <div className="w-[328px] h-[89px] rounded-[24px] relative z-[23] mt-[16px] mr-0 mb-0 ml-[24px]">
          <div className="w-[237px] h-full text-[0px] absolute top-0 left-0 z-[27]">
            <span className="block h-[18px] font-['Poppins'] text-[14px] font-medium leading-[18px] text-[#fa3e2c] relative text-left whitespace-nowrap z-[27] mt-0 mr-0 mb-0 ml-0">
              <s>£2469</s>
            </span>
            <span className="block h-[21px] font-['Poppins'] text-[14px] font-normal leading-[21px] text-[#99a3ad] relative text-left whitespace-nowrap z-[24] mt-[50px] mr-0 mb-0 ml-0">
              *Price based on selections bellow.
            </span>
            <span className="flex h-[53.93%] justify-start items-center font-['Poppins'] text-[36px] font-bold leading-[48px] text-[#1d293f] absolute top-[17.98%] left-0 text-left whitespace-nowrap z-[25]">
              £1759
            </span>
            <span className="flex h-[18px] justify-start items-center font-['Poppins'] text-[14px] font-normal leading-[18px] text-[#546179] absolute top-[32px] left-[107px] text-left whitespace-nowrap z-[26]">
              per person
            </span>
          </div>
          <button className="w-[101px] h-[38px] text-[0px] rounded-[24px] border-none absolute top-[22px] left-[227px] z-[28] pointer">
            <span className="flex w-[69px] h-[28px] justify-center items-center font-['Poppins'] text-[16px] font-medium leading-[20px] text-[#28b0a6] relative text-center whitespace-nowrap z-30 mt-[5px] mr-0 mb-0 ml-[17px]">
              20% OFF
            </span>
            <div className="w-[101px] h-[38px] bg-[#28b0a6] rounded-[24px] opacity-[0.08] absolute top-0 right-0 z-[29]" />
          </button>
        </div>
        <div className="w-[328px] h-[288px] relative z-[4] mt-[32px] mr-0 mb-0 ml-[24px]">
          <div className="w-[328px] h-[80px] text-[0px] relative z-[18] mt-0 mr-0 mb-0 ml-0">
            <span className="block h-[24px] font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#546179] tracking-[0.5px] relative text-left whitespace-nowrap z-[22] mt-0 mr-0 mb-0 ml-0">
              Dates
            </span>
            <div className="w-[328px] h-[48px] relative z-50 mt-[8px] mr-0 mb-0 ml-0">
              <button className="h-full rounded-[8px] border-solid border border-[#dce5eb] absolute top-0 left-0 right-0 z-[19] pointer" />
              <span className="flex h-[24px] justify-start items-center font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#99a3ad] tracking-[0.5px] absolute top-[calc(50%-12px)] left-[4.88%] text-left whitespace-nowrap z-[100]">
                <DetailsDate />
              </span>
              <div className="w-[24px] h-[24px] bg-[url(../assets/images/2b76abeb-fe80-4b35-bc37-67779f29a6d6.png)] bg-cover bg-no-repeat absolute top-[12px] left-[288px] z-20" />
            </div>
          </div>
          <div className="w-[328px] h-[80px] relative z-10 mt-[24px] mr-0 mb-0 ml-0">
            <div className="w-[272px] h-[64px] text-[0px] absolute top-[4px] left-0 z-[14]">
              <span className="block h-[20px] font-['Poppins'] text-[16px] font-normal leading-[20px] text-[#546179] relative text-left whitespace-nowrap z-[17] mt-0 mr-0 mb-0 ml-0">
                Travelers
              </span>
              <div className="flex w-[256px] h-[24px] justify-between items-center relative z-[16] mt-[20px] mr-0 mb-0 ml-[16px]">
                <span className="h-[24px] shrink-0 font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#99a3ad] tracking-[0.5px] relative text-left whitespace-nowrap z-[16]">
                  2 Adult, 1 Child
                </span>
                <span className="h-[20px] shrink-0 font-['Poppins'] text-[18px] font-semibold leading-[20px] text-[#000] relative text-left whitespace-nowrap z-[15]">
                  {count}
                </span>
              </div>
            </div>
            <div className="h-3/5 rounded-[8px] border-solid border border-[#dce5eb] absolute top-[40%] left-0 right-0 z-[11]" />
            <img
              onClick={increment}
              src={PlusIcon}
              className="w-[24px] hover:bg-gray-200 rounded-full h-[24px] bg-[url(../assets/images/53129523-9c9c-4f0f-b9b2-2b9decc80a2c.png)] bg-cover bg-no-repeat absolute top-[44px] left-[288px] z-[12] cursor-pointer"
            />
          </div>
          <button
            className="z-50 bottom-[116px] left-[220px] absolute"
            onClick={decrement}
          >
            <img
              src={MinusIcon}
              className="w-[24px] hover:bg-gray-200 rounded-full h-[24px] "
            />
          </button>
          <div className="w-[328px] h-[80px] text-[0px] relative z-[5] mt-[24px] mr-0 mb-0 ml-0">
            <span className="block h-[24px] font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#546179] tracking-[0.5px] relative text-left whitespace-nowrap z-[9] mt-0 mr-0 mb-0 ml-0">
              Selections
            </span>
            <div className="w-[328px] h-[48px] relative z-[8] mt-[8px] mr-0 mb-0 ml-0">
              <div className="h-full rounded-[8px] border-solid border border-[#dce5eb] absolute top-0 left-0 right-0 z-[6]" />
              <span className="flex h-[24px] justify-start items-center font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#99a3ad] tracking-[0.5px] absolute top-[calc(50%-12px)] left-[4.88%] text-left whitespace-nowrap z-[8]">
                Flight, hotel, car etc.
              </span>
              <img
                src={PlusIcon}
                className="w-[24px] h-[24px] bg-[url(../assets/images/b7953b60-3122-40cc-88b3-bbabb50b70fb.png)] bg-cover bg-no-repeat absolute top-[12px] left-[288px] z-[7]"
              />
            </div>
          </div>
        </div>
        <button className="group duration-500 text-orange-200 group w-[328px] h-[52px] text-[0px] rounded-[8px] border-none relative z-[1] pointer mt-[40px] mr-0 mb-0 ml-[24px]">
          <span className="duration-500 group-hover:text-orange-200 flex w-[166px] h-[27px] justify-center items-start font-['Poppins'] text-[18px] font-semibold leading-[27px] text-[#fff] relative text-center whitespace-nowrap z-[3] mt-[5px] mr-0 mb-0 ml-[83px]">
            Check Availability
          </span>
          <img
            src={ButtonIcon}
            className=" h-[52px] bg-[url(../assets/images/d3c4eeb1-0c7f-4595-b6fd-11f77737a7f7.png)] bg-cover bg-no-repeat rounded-[8px] absolute top-0 left-0 right-0 z-[2]"
          />
        </button>
        <div className="w-full h-full bg-[#fafafa] rounded-[8px] absolute top-0 left-0" />
      </div>
    </div>
  );
};

export default DetailsLeftCard;
