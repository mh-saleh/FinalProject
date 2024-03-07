import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";

import FooterOne from "./FooterOne";
import FooterTwo from "./FooterTwo";
import FooterThree from "./FooterThree";
import FooterFour from "./FooterFour";

const Footer = () => {
  return (
    <section className="max-w-Container mx-auto py-10">
      <FooterOne />
      <div className="py-10">
        <FooterTwo />
      </div>
      <FooterThree />
      <FooterFour />
    </section>
  );
};

export default Footer;
