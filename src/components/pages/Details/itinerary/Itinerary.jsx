import React from "react";
import ItineraryCard from "./ItineraryCard";
import ItineraryCardMoreLess from "./ItineraryCardMoreLess";
import ItineraryFAQCard from "./ItineraryFAQCard";
import CountOne from "../../../../assets/images/Details/itinerary/CountOne.png";
import CountTwo from "../../../../assets/images/Details/itinerary/CountTwo.png";
import CountThree from "../../../../assets/images/Details/itinerary/CountThree.png";
import CountFour from "../../../../assets/images/Details/itinerary/CountFour.png";
import CountFive from "../../../../assets/images/Details/itinerary/CountFive.png";
import CountSix from "../../../../assets/images/Details/itinerary/CountSix.png";
import CountSeven from "../../../../assets/images/Details/itinerary/CountSeven.png";
import MapIcon from "../../../../assets/images/Details/itinerary/MapIcon.png";

const Itinerary = () => {
  const faqData = [
    {
      question: "Day 1",
      answer: <ItineraryCard />,
    },
  ];

  let arr = [
    <ItineraryFAQCard Day={`Day 1`} questions={faqData} ImageIcon={CountOne} />,
    <ItineraryFAQCard Day={`Day 2`} questions={faqData} ImageIcon={CountTwo} />,
    <ItineraryFAQCard
      Day={`Day 3`}
      questions={faqData}
      ImageIcon={CountThree}
    />,
    <ItineraryFAQCard
      Day={`Day 4`}
      questions={faqData}
      ImageIcon={CountFour}
    />,
    <ItineraryFAQCard
      Day={`Day 5`}
      questions={faqData}
      ImageIcon={CountFive}
    />,
    <ItineraryFAQCard Day={`Day 6`} questions={faqData} ImageIcon={CountSix} />,
    <ItineraryFAQCard
      Day={`Day 7`}
      questions={faqData}
      ImageIcon={CountSeven}
    />,
  ];
  return (
    <div>
      <div className="w-[850px]  flex gap-20 items-start">
        <div>
          <img src={MapIcon} alt="" />
        </div>
        <ItineraryCardMoreLess cards={arr} />
      </div>
    </div>
  );
};

export default Itinerary;
