import React, { useState } from "react";
import Overview from "./overview/Overview";
import Comments from "./comments/Comments";
import Itinerary from "./itinerary/Itinerary";
import Instructions from "./instruction/Instructions";
import FAQ from "./FAQ/FAQ";

const Practice = () => {
  const [selectedButton, setSelectedButton] = useState("button1");

  const ContentOne = () => (
    <div>
      <Overview />
    </div>
  );

  const ContentTwo = () => (
    <div>
      <Itinerary />
    </div>
  );

  const ContentThree = () => (
    <div>
      <Instructions />
    </div>
  );

  const ContentFour = () => (
    <div>
      <Comments />
    </div>
  );

  const ContentFive = () => (
    <div>
      <FAQ />
    </div>
  );

  const ContentSix = () => (
    <div>
      <h2 className="text-xl font-bold mb-2">Content Six</h2>
      <p>This is the content for the sixth button.</p>
    </div>
  );

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <div className="max-w-[850px] mx-auto mt-8">
      <div className="flex space-x-4">
        <button
          className={`px-4 py-2 rounded ${
            selectedButton === "button1"
              ? "border-b-2 border-[#28B0A6] text-[#28B0A6]"
              : " text-gray-700"
          }`}
          onClick={() => handleButtonClick("button1")}
        >
          Overview
        </button>
        <button
          className={`px-4 py-2 rounded ${
            selectedButton === "button2"
              ? "border-[#28B0A6] text-[#28B0A6] border-b-2"
              : " text-gray-700"
          }`}
          onClick={() => handleButtonClick("button2")}
        >
          Itinerary
        </button>
        <button
          className={`px-4 py-2 rounded ${
            selectedButton === "button3"
              ? "border-[#28B0A6] text-[#28B0A6] border-b-2"
              : " text-gray-700"
          }`}
          onClick={() => handleButtonClick("button3")}
        >
          Inclusions
        </button>
        <button
          className={`px-4 py-2 rounded ${
            selectedButton === "button4"
              ? "border-[#28B0A6] text-[#28B0A6] border-b-2"
              : " text-gray-700"
          }`}
          onClick={() => handleButtonClick("button4")}
        >
          Reviews
        </button>
        <button
          className={`px-4 py-2 rounded ${
            selectedButton === "button5"
              ? "border-[#28B0A6] text-[#28B0A6] border-b-2"
              : " text-gray-700"
          }`}
          onClick={() => handleButtonClick("button5")}
        >
          FAQ
        </button>
        <button
          className={`px-4 py-2 rounded ${
            selectedButton === "button6"
              ? "border-[#28B0A6] text-[#28B0A6] border-b-2"
              : " text-gray-700"
          }`}
          onClick={() => handleButtonClick("button6")}
        >
          Essential Info
        </button>
      </div>

      <div className="mt-8">
        {selectedButton === "button1" && <ContentOne />}
        {selectedButton === "button2" && <ContentTwo />}
        {selectedButton === "button3" && <ContentThree />}
        {selectedButton === "button4" && <ContentFour />}
        {selectedButton === "button5" && <ContentFive />}
        {selectedButton === "button6" && <ContentSix />}
      </div>
    </div>
  );
};

export default Practice;
