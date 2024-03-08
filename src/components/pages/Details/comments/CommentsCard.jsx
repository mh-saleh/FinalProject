import React from "react";

const CommentsCard = ({ Profile, Starts }) => {
  return (
    <div>
      {" "}
      <div className="main-container w-[648px] h-[312px] bg-[#fff] relative overflow-hidden mx-auto my-0">
        <div className="w-[616px] h-[138px] relative z-[1] mt-[122px] mr-0 mb-0 ml-[16px]">
          <div className="w-[616px] h-[42px] relative z-[3] mt-0 mr-0 mb-0 ml-0">
            <div className="w-[608px] h-[26px] relative z-[6] mt-0 mr-0 mb-0 ml-[8px]">
              <span className="flex w-[43.91%] h-[92.31%] justify-end items-center font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#546179] tracking-[0.5px] absolute top-0 left-[56.09%] text-right whitespace-nowrap z-[6]">
                Reviewed 23rd, November
              </span>
              <span className="flex h-[20px] justify-start items-start font-['Poppins'] text-[18px] font-semibold leading-[20px] text-[#1d293f] absolute top-[6px] left-0 text-left whitespace-nowrap z-[5]">
                “Exceptional”
              </span>
            </div>
            <div className="border-b-2 w-[616px] h-px bg-[url(../assets/images/5e74b336-c615-47de-9cda-92b7379df789.png)] bg-cover bg-no-repeat relative z-[4] mt-[15px] mr-0 mb-0 ml-0" />
          </div>
          <span className="flex w-[600px] h-[72px] justify-start items-start font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#1d293f] tracking-[0.5px] relative text-left z-[2] mt-[24px] mr-0 mb-0 ml-[8px]">
            Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt
            etile pariatur dolor mollit reprehenderit magna tempor ex minim
            velit sunt do.
          </span>
        </div>
        <div className=" w-[648px] h-[312px] bg-[#fff] rounded-[16px] border-solid border-2 border-[#f8f9fa] absolute top-0 left-0" />
        <div className="w-[648px] h-[80px] absolute top-0 left-0 z-[7]">
          <div className="w-full  h-full bg-[#fafafa] rounded-tl-[16px] rounded-tr-[16px] rounded-br-none rounded-bl-none absolute top-0 left-0 z-[8]" />
          <div className="w-[9.1%] h-[73.75%] absolute top-[10%] left-[2.47%] z-[12]">
            <img
              src={Profile}
              className="w-full  h-full bg-[url(../assets/images/0440c2e4-4754-43df-8692-b7bf4ce1882f.png)] bg-[length:100%_100%] bg-no-repeat rounded-[50%] absolute top-0 left-0 z-[13]"
            />
          </div>
          <div className="w-[25.62%] h-[33.75%] absolute top-[45%] left-[14.04%] z-10">
            <span className="flex h-full justify-start items-center font-['Poppins'] text-[18px] font-normal leading-[27px] text-[#546179] absolute top-0 left-0 text-left whitespace-nowrap z-[11]">
              Brooklyn Simmons
            </span>
          </div>
          <div className="w-full h-[1.25%] bg-[url(../assets/images/ce0cceb6-de64-431d-9198-323d93521fc4.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[98.75%] left-0 z-[9] border-b-2" />
        </div>
        <div className="w-[88px] h-[16.985px] absolute top-[32px] left-[544px] z-[14] ">
          <img src={Starts} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CommentsCard;
