import React from "react";
import Globe from "../../assets/images/Footer/globe.png";
import Arrow from "../../assets/images/Footer/arrow.png";

const FooterTwo = () => {
  return (
    <section className="max-w-Container mx-auto box-border px-[1vw] my-5 ">
      <div className="flex justify-between pb-4 border-b-2">
        <div className="w-[388px] h-[162.95px] relative">
          <div className="left-0 top-0 absolute text-teal-500 text-2xl font-normal font-['Poppins']">
            Get in touch
          </div>
          <div className="left-0 top-[42.95px] absolute text-slate-800 text-[40px] font-medium font-['Poppins']">
            Adventures Calling <br />
            You Guys!
          </div>
        </div>
        <div className="w-[350px] h-[128.11px] relative">
          <div className="w-20 h-[78.09px] left-0 top-0 absolute">
            <img
              src={Globe}
              className="w-20 h-[78.09px] left-0 top-0 absolute bg-teal-500 rounded-full"
            />
            <div className="w-14 h-[54.66px] left-[12px] top-[11.71px] absolute">
              <div className="w-14 h-[54.66px] left-0 top-0 absolute opacity-0 bg-white" />
              <div className="w-[45px] h-[43.93px] left-[6px] top-[5.86px] absolute"></div>
            </div>
          </div>
          <div className="w-[250px] h-[78.95px] left-[104px] top-0 absolute">
            <div className="left-0 top-0 absolute text-black text-2xl font-normal font-['Poppins']">
              Our Offices
            </div>
            <div className="w-full left-0 top-[42.95px] absolute text-black text-2xl font-medium font-['Poppins']">
              {" "}
              Nepal, USA, India
            </div>
          </div>
          <img
            src={Arrow}
            className="w-[39.73px] h-[18.78px] left-[104px] top-[109.33px] absolute"
          />
        </div>
      </div>
    </section>
  );
};

export default FooterTwo;
