import React from "react";
import PaymentLogos from "../../assets/images/Footer/PaymentLogos.png";

const FooterFour = () => {
  return (
    <section className="max-w-Container mx-auto">
      <div className="flex justify-between border-b-2 pb-4">
        <div className="text-black text-2xl font-normal font-['Poppins']">
          Privacy Policy
        </div>
        <div className="text-right text-black text-2xl font-normal font-['Poppins']">
          Linkedin / Facebook / Instagram
        </div>
      </div>
      <div className="flex justify-between mt-3">
        <div className="text-black text-base font-normal font-['Poppins'] tracking-wide">
          2016-2021 © Emprise
        </div>
        <div>
          <img className="w-[294px] h-[19.52px]" src={PaymentLogos} />
        </div>
      </div>
    </section>
  );
};

export default FooterFour;
