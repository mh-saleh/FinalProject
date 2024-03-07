import React from "react";
import Arrow from "../../assets/images/Footer/arrow.png";
import Mail from "../../assets/images/Footer/mail.png";
const FooterThree = () => {
  return (
    <section className="max-w-Container mx-auto box-border px-[1vw] flex justify-between pb-[100px] ">
      <div className="w-[646px] h-[290.76px] relative">
        <div className="left-0 top-0 absolute text-slate-800 text-2xl font-medium font-['Poppins']">
          Services
        </div>
        <div className="left-[272px] top-0 absolute text-slate-800 text-2xl font-medium font-['Poppins']">
          Adventures
        </div>
        <div className="left-[544px] top-0 absolute text-slate-800 text-2xl font-medium font-['Poppins']">
          Country
        </div>
        <div className="left-0 top-[50.76px] absolute text-slate-600 text-base font-normal font-['Poppins'] leading-10">
          Budget Tours
          <br />
          Expert Insight
          <br />
          Independent
          <br />
          Luxury Tours
          <br />
          Safety Tips
          <br />
          Tips n Tricks
        </div>
        <div className="left-[272px] top-[50.76px] absolute text-slate-600 text-base font-normal font-['Poppins'] leading-10">
          Beach Activity
          <br />
          Bungee Jump
          <br />
          City Tour
          <br />
          Hiking Trips
          <br />
          Jungle Safari
          <br />
          Night City Walk
        </div>
        <div className="left-[544px] top-[50.76px] absolute text-slate-600 text-base font-normal font-['Poppins'] leading-10">
          USA
          <br />
          Australia
          <br />
          South Africa
          <br />
          West Indies
          <br />
          New Zealand
          <br />
          Srilanka
        </div>
      </div>
      {/* fgafa */}
      <div className="w-[648px] h-[234.27px] relative">
        <div className="left-0 top-0 absolute text-slate-800 text-2xl font-medium font-['Poppins']">
          Get In Touch
        </div>
        <div className="left-0 top-[50.76px] absolute text-slate-800 text-[40px] font-medium font-['Poppins']">
          Let’s Talk
        </div>
        <img
          src={Arrow}
          className="w-[39.73px] h-[18.78px] left-[202px] top-[70.28px] absolute"
        />
        <div className="w-[648px] h-[85.90px] left-0 top-[148.37px] absolute">
          <div className="w-[648px] h-[85.90px] left-0 top-0 absolute bg-white shadow" />
          <div className="left-[69px] top-[30.26px] absolute text-gray-400 text-lg font-normal font-['Poppins']">
            <input
              type="text"
              placeholder=" Enter your email"
              className="outline-none"
            />
          </div>
          <div className="w-[188px] h-[85.90px] left-[460px] top-0 absolute">
            <div className="w-[188px] h-[85.90px] left-0 top-0 absolute bg-teal-500" />
            <div className="left-[33px] top-[25.38px] absolute text-center text-white text-2xl font-normal font-['Poppins']">
              Send Now!
            </div>
          </div>
          <div className="w-[21px] h-[15.62px] left-[24px] top-[35.14px] absolute">
            <img src={Mail} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterThree;
