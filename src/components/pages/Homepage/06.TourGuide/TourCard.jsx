import React from "react";

const TourCard = ({ Image }) => {
  return (
    <div className="max-w-Container box-border">
      {" "}
      <div className="main-container w-[1296px] h-[670px] relative mx-auto my-0">
        <div
          className="w-[39.51%] h-full bg-[rgba(108,117,125,0.2)] bg-[url(../assets/images/f1b57c086bc2a8c0935661067cbaa4d0bee2281a.png)] bg-cover bg-no-repeat rounded-[20px] absolute top-0 left-0 z-[14]"
          style={{ backgroundImage: `url(${Image})` }}
        >
          <div className="w-[72px] h-[72px] bg-[#fff] rounded-tl-none rounded-tr-[20px] rounded-br-none rounded-bl-[20px] relative z-[16] mt-[598px] mr-0 mb-0 ml-0">
            <span className="flex h-1/2 justify-start items-start font-['Poppins'] text-[24px] font-normal leading-[36px] text-[#1d293f] tracking-[-0.4px] absolute top-1/4 left-[34.72%] text-left whitespace-nowrap z-[17]">
              01
            </span>
          </div>
        </div>
        <span className="flex h-[5.37%] justify-start items-start font-['Poppins'] text-[24px] font-normal leading-[36px] text-[#28b0a6] tracking-[-0.38px] absolute top-[5.82%] left-[41.98%] text-left whitespace-nowrap z-[11]">
          Adventure Guru
        </span>
        <span className="flex w-[270px] h-[17.91%] justify-start items-start font-['Poppins'] text-[40px] font-medium leading-[60px] text-[#1d293f] tracking-[-0.38px] absolute top-[13.58%] left-[41.98%] text-left overflow-hidden z-[12]">
          Martina
          <br />
          James Junior
        </span>
        <span className="flex h-[5.37%] justify-start items-start font-['Poppins'] text-[24px] font-normal leading-[36px] text-[#000] tracking-[-0.38px] absolute top-[45.82%] left-[41.98%] text-left whitespace-nowrap z-[8]">
          About
        </span>
        <span className="flex h-[5.37%] justify-start items-start font-['Poppins'] text-[24px] font-normal leading-[36px] text-[#000] tracking-[-0.38px] absolute top-[46.12%] left-[73.61%] text-left whitespace-nowrap z-[5]">
          Journey
        </span>
        <span className="flex w-[342px] h-[7.16%] justify-start items-start font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#99a3ad] tracking-[0.5px] absolute top-[53.58%] left-[41.98%] text-left overflow-hidden z-[9]">
          Check Out Daily Deals and Promotion on
          <br />
          hotels. Easy & Fast Booking.
        </span>
        <span className="flex w-[342px] h-[7.16%] justify-start items-start font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#99a3ad] tracking-[0.5px] absolute top-[53.88%] left-[73.61%] text-left overflow-hidden z-[6]">
          Check Out Daily Deals and Promotion on
          <br />
          hotels. Easy & Fast Booking.
        </span>
        <span className="flex h-[4.03%] justify-start items-start font-['Poppins'] text-[18px] font-normal leading-[27px] text-[#000] absolute top-[86.42%] left-[51.23%] text-left whitespace-nowrap z-[2]">
          Instagram
        </span>
        <span className="flex h-[4.03%] justify-start items-start font-['Poppins'] text-[18px] font-normal leading-[27px] text-[#000] absolute top-[86.42%] left-[41.98%] text-left whitespace-nowrap z-[1]">
          Facebook
        </span>
        <span className="flex h-[4.03%] justify-start items-start font-['Poppins'] text-[18px] font-normal leading-[27px] text-[#000] absolute top-[86.42%] left-[60.96%] text-left whitespace-nowrap z-[3]">
          Twitter
        </span>
      </div>
    </div>
  );
};

export default TourCard;
