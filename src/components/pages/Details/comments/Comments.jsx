import React from "react";
import CommentsCard from "./CommentsCard";
import ImageOne from "../../../../assets/images/Details/comments/One.png";
import ImageTwo from "../../../../assets/images/Details/comments/Two.png";
import ImageThree from "../../../../assets/images/Details/comments/Three.png";
import FiveStarts from "../../../../assets/images/Details/comments/5Star.png";
import FourStarts from "../../../../assets/images/Details/comments/4Star.png";
import Comment from "../../../../assets/images/Details/comments/Comment.png";
import CardMoreLess from "./CommentsCardMoreLess";
const Comments = () => {
  let arr = [
    <CommentsCard Profile={ImageOne} Starts={FiveStarts} />,
    <CommentsCard Profile={ImageTwo} Starts={FourStarts} />,
    <CommentsCard Profile={ImageThree} Starts={FiveStarts} />,
    <CommentsCard Profile={ImageOne} Starts={FiveStarts} />,
    <CommentsCard Profile={ImageTwo} Starts={FourStarts} />,
    <CommentsCard Profile={ImageThree} Starts={FiveStarts} />,
  ];
  return (
    <div className="max-w-Container mx-auto">
      <div className="flex w-[800px] justify-between items-start">
        <div>
          <img src={Comment} alt="" />
        </div>
        <CardMoreLess cards={arr} verticalSpace={10} />
      </div>
    </div>
  );
};

export default Comments;
