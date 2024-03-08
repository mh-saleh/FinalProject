import React, { useState } from "react";

const DivComponent = ({ cards, verticalSpace, className }) => {
  const [showAll, setShowAll] = useState(false);

  const displayedCards = showAll ? cards : cards.slice(0, 4);

  return (
    <div className={`flex flex-col ${className}`}>
      {displayedCards.map((card, index) => (
        <div
          key={index}
          className={`mb-${verticalSpace}`}
          style={{ marginBottom: verticalSpace }}
        >
          {card}
        </div>
      ))}
      {!showAll && (
        <button
          className="mt-2 px-4 py-2 text-[#6C757D] rounded"
          onClick={() => setShowAll(true)}
        >
          <div className="main-container w-[509px] h-[44px] text-[0px] relative mx-auto my-0">
            <span className="block h-[28px] font-['Poppins'] text-[16px] font-normal leading-[28px] text-[#6c757d] tracking-[1px] relative text-left whitespace-nowrap z-[1] mt-0 mr-0 mb-0 ml-[3px]">
              Show 10+ more reviews
            </span>
            <div className="border-b-2 w-full h-px bg-[url(../assets/images/647434aa-e240-4bde-9775-1bd7b4b3a749.png)] bg-cover bg-no-repeat absolute top-[43px] left-0" />
          </div>
        </button>
      )}
    </div>
  );
};

export default DivComponent;
