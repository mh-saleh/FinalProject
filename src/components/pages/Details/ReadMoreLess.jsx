import React, { useState } from "react";

function ReadMoreLess({ TextToShow, TextToHide }) {
  const [isShowMore, setIsShowMore] = useState(true);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
    // Toggle content visibility in parent component
  };

  return (
    <div className={`card  `}>
      <p>{isShowMore ? TextToShow : TextToHide}</p>
      <button onClick={toggleReadMoreLess}>
        <span className="block h-[24px] font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#99a3ad] tracking-[0.5px] relative text-left whitespace-nowrap z-[33] mt-[24px] mr-0 mb-0 ">
          {isShowMore ? "Show More" : "Show Less"}
        </span>
      </button>
    </div>
  );
}

export default ReadMoreLess;
