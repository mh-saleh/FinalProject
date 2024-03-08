import React from "react";
import ImageOne from "../../../../assets/images/Details/itinerary/one.png";
import ImageTwo from "../../../../assets/images/Details/itinerary/Two.png";
import ImageThree from "../../../../assets/images/Details/itinerary/Three.png";
import ImageFour from "../../../../assets/images/Details/itinerary/Four.png";
import MAPIcon from "../../../../assets/images/Details/itinerary/map.png";
const ItineraryCard = () => {
  return (
    <div>
      {" "}
      <div className="main-container w-[616px] h-[836px] text-[0px] relative mx-auto my-0">
        <span className="block h-[20px] font-['Poppins'] text-[16px] font-semibold leading-[20px] text-[#212529] relative text-left whitespace-nowrap z-[38] mt-0 mr-0 mb-0 ml-[8px]">
          Lake Nakuru National Park
        </span>
        <div className="border-b-2 w-[616px] h-px bg-[url(../assets/images/c1adc675-c60c-4561-ac38-71c0c0627b77.png)] bg-cover bg-no-repeat relative z-[37] mt-[15px] mr-0 mb-0 ml-0" />
        <span className="flex w-[600px] h-[72px] justify-start items-start font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#1d293f] tracking-[0.5px] relative text-left z-[35] mt-[24px] mr-0 mb-0 ml-[8px]">
          Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt
          etile pariatur dolor mollit reprehenderit magna tempor ex minim velit
          sunt do.
        </span>
        <div className="flex w-[384px] h-[128px] justify-between items-center relative z-[34] mt-[56px] mr-0 mb-0 ml-[8px]">
          <img
            src={ImageOne}
            className="w-[176px] h-[128px] shrink-0 bg-[url(../assets/images/588d37e7d198729592c5312c76b12d85f4b3a351.png)] bg-cover bg-no-repeat rounded-[16px] relative z-[34]"
          />
          <div className="bg-[#F8F9FA] rounded-[16px] w-[176px] h-[128px] shrink-0 bg-[url(../assets/images/7b08b023-e205-42f1-ba5f-f02472a7d803.png)] bg-cover bg-no-repeat relative z-[29]">
            <div className="w-[115px] h-[108.086px] bg-[url(../assets/images/2788e6f8-a07a-4331-a88a-46187cffd48e.png)] bg-[length:100%_100%] bg-no-repeat relative z-[31] mt-[10px] mr-0 mb-0 ml-[31px]">
              <img
                src={MAPIcon}
                className="w-[20px] h-[28px] bg-[url(../assets/images/17066e69-3abe-483b-a7b8-8e203b0f8601.png)] bg-cover bg-no-repeat relative z-30 mt-[22px] mr-0 mb-0 ml-[47px]"
              />
              <span className="block h-[20px] font-['Poppins'] text-[16px] font-medium leading-[20px] text-[#1d293f] relative text-left whitespace-nowrap z-[32] mt-[16px] mr-0 mb-0 ml-[3px]">
                View on Map
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-[534px] h-[20px] justify-between items-center relative z-[26] mt-[48px] mr-0 mb-0 ml-[8px]">
          <span className="h-[20px] shrink-0 font-['Poppins'] text-[16px] font-medium leading-[20px] text-[#99a3ad] relative text-left whitespace-nowrap z-[23]">
            Accommodation
          </span>
          <span className="h-[20px] shrink-0 font-['Poppins'] text-[16px] font-medium leading-[20px] text-[#1d293f] relative text-left whitespace-nowrap z-[24]">
            Meals
          </span>
          <span className="h-[20px] shrink-0 font-['Poppins'] text-[16px] font-medium leading-[20px] text-[#1d293f] relative text-left whitespace-nowrap z-[25]">
            Inclusions
          </span>
          <span className="h-[20px] shrink-0 font-['Poppins'] text-[16px] font-medium leading-[20px] text-[#1d293f] relative text-left whitespace-nowrap z-[26]">
            Special Info
          </span>
        </div>
        <div className="border-b-2 w-[616px] h-px bg-[url(../assets/images/bbd17b71-fafc-4529-89af-4e19597fd820.png)] bg-cover bg-no-repeat relative z-[22] mt-[15px] mr-0 mb-0 ml-0" />
        <span className="flex w-[600px] h-[72px] justify-start items-start font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#1d293f] tracking-[0.5px] relative text-left z-20 mt-[24px] mr-0 mb-0 ml-[8px]">
          Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt
          etile pariatur dolor mollit reprehenderit magna tempor ex minim velit
          sunt do.
        </span>
        <div className="flex w-[336px] h-[24px] justify-between items-center relative z-[17] mt-[36px] mr-0 mb-0 ml-[8px]">
          <span className="h-[24px] shrink-0 font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#99a3ad] tracking-[0.5px] relative text-left whitespace-nowrap z-[14]">
            Shared Room
          </span>
          <span className="h-[24px] shrink-0 font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#1d293f] tracking-[0.5px] relative text-left whitespace-nowrap z-[17]">
            Included in package
          </span>
        </div>
        <div className="flex w-[337px] h-[24px] justify-between items-center relative z-[18] mt-[12px] mr-0 mb-0 ml-[8px]">
          <span className="h-[24px] shrink-0 font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#99a3ad] tracking-[0.5px] relative text-left whitespace-nowrap z-[15]">
            Double Room
          </span>
          <span className="h-[24px] shrink-0 font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#1d293f] tracking-[0.5px] relative text-left whitespace-nowrap z-[18]">
            £45 per person extra
          </span>
        </div>
        <div className="flex w-[338px] h-[24px] justify-between items-center relative z-[19] mt-[12px] mr-0 mb-0 ml-[8px]">
          <span className="h-[24px] shrink-0 font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#99a3ad] tracking-[0.5px] relative text-left whitespace-nowrap z-[16]">
            Single Room
          </span>
          <span className="h-[24px] shrink-0 font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#1d293f] tracking-[0.5px] relative text-left whitespace-nowrap z-[19]">
            £80 per person extra
          </span>
        </div>
        <div className="flex w-[467px] h-[24px] justify-between items-center relative z-[12] mt-[44px] mr-0 mb-0 ml-[11px]">
          <span className="h-[24px] shrink-0 font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#99a3ad] tracking-[0.5px] relative text-left whitespace-nowrap z-[5]">
            Shared
          </span>
          <span className="h-[24px] shrink-0 font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#99a3ad] tracking-[0.5px] relative text-left whitespace-nowrap z-[8]">
            Double
          </span>
          <span className="h-[24px] shrink-0 font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#28b0a6] tracking-[0.5px] relative text-left whitespace-nowrap z-[12]">
            Single
          </span>
        </div>
        <div className="flex w-[592px] h-[128px] justify-between items-center relative z-10 mt-[12px] mr-0 mb-0 ml-[8px]">
          <img
            src={ImageTwo}
            className="w-[176px] h-[128px] shrink-0 bg-[url(../assets/images/4491e4488b4cac6665ca36ea29f7cba53645b372.png)] bg-cover bg-no-repeat rounded-[16px] relative z-[4]"
          />
          <img
            src={ImageThree}
            className="w-[176px] h-[128px] shrink-0 bg-[url(../assets/images/b17542314f94f5706f339cbfd008bf7dfd7b8b56.png)] bg-cover bg-no-repeat rounded-[16px] relative z-[7]"
          />
          <div className="w-[176px] h-[128px] shrink-0 bg-[rgba(0,0,0,0.08000000000000002)] bg-[url(../assets/images/ec45e37ab30275b4234e977f3d1002e6f72e4e64.png)] bg-cover bg-no-repeat rounded-[16px] relative z-10">
            <img src={ImageFour} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryCard;
