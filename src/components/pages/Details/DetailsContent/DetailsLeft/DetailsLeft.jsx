import React from "react";
import DetailsLeftCard from "./DetailsLeftCard";
import DetailLeftBttom from "./DetailLeftBttom";

const DetailsLeft = () => {
  return (
    <div>
      <DetailsLeftCard />
      <div className="mt-10">
        <DetailLeftBttom />
      </div>
    </div>
  );
};

export default DetailsLeft;
