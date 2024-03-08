import React from "react";
import OverviewCard from "./OverviewCard";
import PaperIcon from "../../../../assets/images/Details/overview/PaperIcon.png";
const Overview = () => {
  return (
    <div>
      <div className="w-[850px] box-border flex gap-20 items-start">
        <div>
          <img src={PaperIcon} alt="" />
        </div>
        <OverviewCard />
      </div>
    </div>
  );
};

export default Overview;
