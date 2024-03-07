import React from "react";
import Hero from "./01.Hero/Hero";
import MySlider from "./MySlider";
import TopDestination from "./04.TopDestinations/TopDestination";
import CatagorySlider from "./02.Catagory/CatagorySlider";

import { useDispatch, useSelector } from "react-redux";
import TrendingSlider from "./03.Trending/TrendingSlider";
import BestSeller from "./05.BestSeller/BestSeller";
import TourGuide from "./06.TourGuide/TourGuide";
import PartOne from "./07.Others/PartOne";
import PartTwo from "./07.Others/PartTwo";
import PartThree from "./07.Others/PartThree";
import Other from "./07.Others/Other";
import BestSellerSlider from "./05.BestSeller/BestSellerSlider";
import TopDestinationSlider from "./04.TopDestinations/TopDestinationSlider";

const Homepage = () => {
  return (
    <section className=" max-w-Container mx-auto ">
      <Hero />
      <CatagorySlider />
      <TrendingSlider />
      <TopDestinationSlider />
      <BestSellerSlider />
      <TourGuide />
      <Other />
    </section>
  );
};

export default Homepage;
