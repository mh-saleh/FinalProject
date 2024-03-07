import React from "react";
import Plus from "../../assets/images/Footer/Plus.png";
const FooterOne = () => {
  return (
    <div>
      <section className="max-w-Container mx-auto box-border px-[1vw]">
        <div className="w-full h-[73.21px] relative">
          <div className="w-full h-[0px] left-0 top-[73.21px] absolute border border-gray-200"></div>
          <div className="left-[1000px] top-0 absolute text-neutral-800 text-2xl font-normal font-['Poppins']">
            0123-456-324-54 | hello@entrada.com
          </div>
          <div className="w-[33px] h-[32.21px] left-0 top-[0.98px] absolute">
            <img src={Plus} alt="" />
          </div>
          <div className="left-[49px] top-0 absolute text-slate-800 text-2xl font-semibold font-['Poppins'] leading-9">
            QUICK LINKS
          </div>
          <div className="left-[263px] top-0 absolute text-slate-600 text-2xl font-normal font-['Poppins']">
            Explore more categories
          </div>
        </div>
      </section>
    </div>
  );
};

export default FooterOne;
