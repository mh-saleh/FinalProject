import React from "react";
import InstructionsCard from "./InstructionsCard";
import Umbrella from "../../../../assets/images/Details/instructions/Umbrella.png";

const Instructions = () => {
  return (
    <div>
      <div className="flex w-[800px] gap-20 items-start">
        <div>
          <img src={Umbrella} alt="" />
        </div>
        <InstructionsCard />
      </div>
    </div>
  );
};

export default Instructions;
