import React from "react";
import StarsIcon from "../../../../assets/images/Details/Stars.png";
import ShareIcon from "../../../../assets/images/Details/Share.png";
import LoveIcon from "./LoveIcon";
const DetailTitle = ({ className }) => {
  return (
    <div>
      {" "}
      <div className="main-container w-[784px] h-[128px] text-[0px] relative  my-0">
        <span className="block h-[20px] font-['Poppins'] text-[16px] font-normal leading-[20px] text-[#99a3ad] relative text-left whitespace-nowrap z-10 mt-0 mr-0 mb-0 ml-0">
          {`Destination > Portugal > Laos`}
        </span>
        <div className="w-[784px] h-[58.991px] relative z-[5] mt-[8px] mr-0 mb-0 ml-0">
          <span className="flex h-[48px] justify-start items-center font-['Poppins'] text-[36px] font-bold leading-[48px] text-[#1d293f] absolute top-0 left-0 text-left whitespace-nowrap z-[5]">
            Sandy beach holiday in Lagos
          </span>
          <div className="w-[15.31%] h-full absolute top-0 left-[84.69%] z-[3]">
            <img
              src={ShareIcon}
              className="w-2/5 h-[81.63%] bg-[url(../assets/images/5fa3aa98-4aee-4233-b9fe-02f723a70d2a.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[18.37%] left-0 z-[3]"
            />
            {/* <img
              src={LoveIcon}
              className="w-2/5 h-[81.63%] bg-[url(../assets/images/044adb36-69ba-47cc-9e31-7d078defb1ac.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[18.37%] left-[60%] z-[2]"
            /> */}
            <div className="mt-4 ml-20">
              <LoveIcon />
            </div>
          </div>
        </div>
        <div className="flex w-[193px] h-[20px] justify-between items-center relative z-[9] mt-[5.009px] mr-0 mb-0 ml-0">
          <img
            src={StarsIcon}
            className="w-[76px] h-[16px] shrink-0 bg-[url(../assets/images/6f1b3251-487d-4837-a5ec-e20f9cdb0b14.png)] bg-cover bg-no-repeat relative z-[9]"
          />
          <span className="flex w-[113px] h-[20px] justify-end items-start shrink-0 font-['Poppins'] text-[16px] font-normal leading-[20px] text-[#99a3ad] relative text-right whitespace-nowrap z-[8]">
            6,788 Reviews
          </span>
        </div>
        <div className="border-b-2 w-[784px] h-[1.6px] bg-[url(../assets/images/80843c73-656c-4284-8210-29fd68a5cda4.png)] bg-cover bg-no-repeat absolute top-[126.4px] left-0" />
      </div>
    </div>
  );
};

export default DetailTitle;
