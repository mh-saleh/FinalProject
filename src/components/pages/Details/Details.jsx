import React from "react";

import ReadMoreLess from "./ReadMoreLess";
import Comments from "./comments/Comments";
import Instructions from "./instruction/InstructionsCard";

import ItineraryCard from "./itinerary/ItineraryCard";
import Itinerary from "./itinerary/Itinerary";
import OverviewCard from "./overview/OverviewCard";
import Practice from "./Practice";
import Overview from "./overview/Overview";
import FAQ from "./FAQ/FAQCard";
import DetailTitle from "./DetailsContent/DetailTitle";
import DetailsLeft from "./DetailsContent/DetailsLeft/DetailsLeft";
import DetailsDate from "./DetailsContent/DetailsLeft/DetailsDate";
import Gallery from "./Gallery";
import DetailsTop from "./DetailsTop";
import BestSellerSlider from "../Homepage/05.BestSeller/BestSellerSlider";

const Details = ({ Index }) => {
  return (
    <div className="max-w-Container mx-auto my-5">
      <div className="mb-20">
        <DetailsTop Index={Index} />
      </div>
      <div className="flex justify-between ">
        <div className="ml-[250px]">
          <DetailTitle />
          <div className="">
            <Practice />
          </div>
        </div>

        <div>
          <DetailsLeft />
        </div>
      </div>
      <div className="mt-10">
        <BestSellerSlider />
      </div>
    </div>
  );
};

export default Details;
