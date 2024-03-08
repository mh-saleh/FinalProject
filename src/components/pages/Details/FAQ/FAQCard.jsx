import React, { useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import ImageOne from "../../../../assets/images/Details/FAQ/question.png";

const FAQCard = ({ questions }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Check if questions is undefined or not an array
  if (!Array.isArray(questions) || questions.length === 0) {
    return <div>No questions available</div>;
  }

  return (
    <div className="w-[580px] mx-auto bg-[#FBFBFB] rounded-2xl border-2 border-gray-50">
      {questions.map((question, index) => (
        <div key={index}>
          <div className="border-b border-gray-200">
            <div className="flex items-center px-4 py-2 cursor-pointer">
              <div className="flex-shrink-0 w-10">
                {" "}
                {/* Ensure fixed width for the image */}
                <img src={ImageOne} alt="" />
              </div>
              <div
                className={`flex justify-between items-center w-full ml-4 ${
                  activeIndex === index ? "" : ""
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-slate-800 text-base font-semibold font-['Poppins'] leading-tight">
                  {question.question}
                </span>
                <div className="toggle-icon">
                  {activeIndex === index ? (
                    <RiArrowUpSLine className="text-2xl" />
                  ) : (
                    <RiArrowDownSLine className="text-2xl" />
                  )}
                </div>
              </div>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ${
                activeIndex === index
                  ? "max-h-96 px-4 py-2"
                  : "max-h-0 px-4 py-0"
              }`}
            >
              {activeIndex === index && (
                <div className="text-slate-800 px-2 py-10 text-base font-normal font-['Poppins'] tracking-wide">
                  {question.answer}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQCard;
