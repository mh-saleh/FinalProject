import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleCategory } from "../../../Redux/slices/categorize";
import OneStar from "../../../assets/images/cartpage/oneStar.png";
import TwoStar from "../../../assets/images/cartpage/twoStars.png";
import ThreeStar from "../../../assets/images/cartpage/threeStars.png";
import FourStar from "../../../assets/images/cartpage/fourStars.png";
import FiveStar from "../../../assets/images/cartpage/fiveStars.png";
import MultiRangeSlider from "./PriceSlider";

const SideBar = () => {
  let [minValue, setMinValue] = useState(0);
  let [maxValue, setMaxValue] = useState(0);
  console.log(maxValue, minValue);
  let dispatch = useDispatch();

  function hadleChange(event) {
    const { checked, name } = event.target;
    dispatch(toggleCategory(event.target));
  }
  return (
    <section className="w-[400px] flex-shrink-0 rounded-[16px] border border-[var(--Gray-Off-Cultured, #E9ECEF)] bg-[white] px-4 py-3">
      <div>
        <h5 className="text-slate-600 text-base font-medium font-['Poppins'] leading-tight mb-3">
          Popular Tags
        </h5>
        <div className="flex flex-col gap-4">
          <div className=" gap-2 flex">
            <div>
              <input
                name="ChildFriendly"
                onChange={hadleChange}
                type="checkbox"
                className="w-6 h-6 checked:bg-teal-500 rounded-lg"
              />
            </div>
            <div className="text-neutral-800 text-base font-normal font-['Poppins'] tracking-wide">
              Child Friendly
            </div>
          </div>
          <div className=" gap-2 flex">
            <div>
              <input
                name="Hiking"
                onChange={hadleChange}
                type="checkbox"
                className="w-6 h-6 checked:bg-teal-500 rounded-lg"
              />
            </div>
            <div className="text-neutral-800 text-base font-normal font-['Poppins'] tracking-wide">
              Taking extra precautions
            </div>
          </div>
          <div className=" gap-2 flex">
            <div>
              <input
                name="  "
                onChange={hadleChange}
                type="checkbox"
                className="w-6 h-6 checked:bg-teal-500 rounded-lg"
              />
            </div>
            <div className="text-neutral-800 text-base font-normal font-['Poppins'] tracking-wide">
              Away from the chaos
            </div>
          </div>
          <div className=" gap-2 flex">
            <div>
              <input
                name="EpicChallenges"
                onChange={hadleChange}
                type="checkbox"
                className="w-6 h-6 checked:bg-teal-500 rounded-lg"
              />
            </div>
            <div className="text-neutral-800 text-base font-normal font-['Poppins'] tracking-wide">
              Epic Challenges
            </div>
          </div>
          <div className=" gap-2 flex">
            <div>
              <input
                name="VirtualExperiences"
                onChange={hadleChange}
                type="checkbox"
                className="w-6 h-6 checked:bg-teal-500 rounded-lg"
              />
            </div>
            <div className="text-neutral-800 text-base font-normal font-['Poppins'] tracking-wide">
              Virtual Experiences
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="main-container w-[328px] h-[141px] text-[0px] relative mx-auto my-0">
          <span className="block h-[20px] font-['Poppins'] text-[16px] font-normal leading-[20px] text-[#546179] relative text-left whitespace-nowrap z-[8] mt-0 mr-0 mb-0 ml-0">
            Price Range
          </span>
          <div className="absolute top-[60px]">
            <MultiRangeSlider
              min={250}
              max={10000}
              onChange={({ min, max }) => {
                setMaxValue(max);
                setMinValue(min);
              }}
            />
          </div>
          <div className="w-[428px] h-[40px] relative z-[6] mt-[81px] mr-0 mb-0 ml-0">
            <div className="w-[152px] h-[40px] bg-[#fff] rounded-[8px] border-solid border border-[#dce5eb] absolute top-0 left-0 z-[6]">
              <span className="flex h-[24px] justify-start items-start font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#99a3ad] tracking-[0.5px] absolute top-[6px] left-[15px] text-left whitespace-nowrap z-[7]">
                $ {minValue}
              </span>
            </div>
            <div className="w-[152px] h-[40px] bg-[#fff] rounded-[8px] border-solid border border-[#dce5eb] absolute top-0 left-[176px] z-[2]">
              <span className="flex h-[24px] justify-start items-start font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#99a3ad] tracking-[0.5px] absolute top-[6px] left-[15px] text-left whitespace-nowrap z-[3]">
                $ {maxValue}
              </span>
            </div>
            <div className="w-[8px] h-[2px] bg-[url(../assets/images/1c2acffd-1719-445f-a8a4-380074207cb7.png)] bg-cover bg-no-repeat absolute top-[19px] left-[160px] z-[4]" />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h5 className="text-slate-600 text-base font-medium font-['Poppins'] leading-tight mb-3">
          Duration
        </h5>
        <div className="flex flex-col gap-4">
          <div className=" gap-2 flex">
            <div>
              <input
                name="ChildFriendly"
                onChange={hadleChange}
                type="checkbox"
                className="w-6 h-6 checked:bg-teal-500 rounded-lg"
              />
            </div>
            <div className="text-neutral-800 text-base font-normal font-['Poppins'] tracking-wide">
              Upto 1 Hour
            </div>
          </div>
          <div className=" gap-2 flex">
            <div>
              <input
                name="Hiking"
                onChange={hadleChange}
                type="checkbox"
                className="w-6 h-6 checked:bg-teal-500 rounded-lg"
              />
            </div>
            <div className="text-neutral-800 text-base font-normal font-['Poppins'] tracking-wide">
              1 to 4 Hours
            </div>
          </div>
          <div className=" gap-2 flex">
            <div>
              <input
                name="  "
                onChange={hadleChange}
                type="checkbox"
                className="w-6 h-6 checked:bg-teal-500 rounded-lg"
              />
            </div>
            <div className="text-neutral-800 text-base font-normal font-['Poppins'] tracking-wide">
              4 Hours to 1 Day
            </div>
          </div>
          <div className=" gap-2 flex">
            <div>
              <input
                name="EpicChallenges"
                onChange={hadleChange}
                type="checkbox"
                className="w-6 h-6 checked:bg-teal-500 rounded-lg"
              />
            </div>
            <div className="text-neutral-800 text-base font-normal font-['Poppins'] tracking-wide">
              1 to 3 Days
            </div>
          </div>
          <div className=" gap-2 flex">
            <div>
              <input
                name="VirtualExperiences"
                onChange={hadleChange}
                type="checkbox"
                className="w-6 h-6 checked:bg-teal-500 rounded-lg"
              />
            </div>
            <div className="text-neutral-800 text-base font-normal font-['Poppins'] tracking-wide">
              3 Days or More
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h5 className="text-slate-600 text-base font-medium font-['Poppins'] leading-tight mb-3">
          Duration
        </h5>
        <div className="flex flex-col gap-4">
          <div className=" gap-2 flex">
            <div>
              <input
                name="ChildFriendly"
                onChange={hadleChange}
                type="checkbox"
                className="w-6 h-6 checked:bg-teal-500 rounded-lg"
              />
            </div>
            <div className="text-neutral-800 text-base font-normal font-['Poppins'] tracking-wide">
              Upto 1 Hour
            </div>
          </div>
          <div className=" gap-2 flex">
            <div>
              <input
                name="Hiking"
                onChange={hadleChange}
                type="checkbox"
                className="w-6 h-6 checked:bg-teal-500 rounded-lg"
              />
            </div>
            <div className="text-neutral-800 text-base font-normal font-['Poppins'] tracking-wide">
              1 to 4 Hours
            </div>
          </div>
          <div className=" gap-2 flex">
            <div>
              <input
                name="  "
                onChange={hadleChange}
                type="checkbox"
                className="w-6 h-6 checked:bg-teal-500 rounded-lg"
              />
            </div>
            <div className="text-neutral-800 text-base font-normal font-['Poppins'] tracking-wide">
              4 Hours to 1 Day
            </div>
          </div>
          <div className=" gap-2 flex">
            <div>
              <input
                name="EpicChallenges"
                onChange={hadleChange}
                type="checkbox"
                className="w-6 h-6 checked:bg-teal-500 rounded-lg"
              />
            </div>
            <div className="text-neutral-800 text-base font-normal font-['Poppins'] tracking-wide">
              1 to 3 Days
            </div>
          </div>
          <div className=" gap-2 flex">
            <div>
              <input
                name="VirtualExperiences"
                onChange={hadleChange}
                type="checkbox"
                className="w-6 h-6 checked:bg-teal-500 rounded-lg"
              />
            </div>
            <div className="text-neutral-800 text-base font-normal font-['Poppins'] tracking-wide">
              3 Days or More
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h5 className="text-slate-600 text-base font-medium font-['Poppins'] leading-tight mb-3">
          Tour Rating
        </h5>
        <div className="flex flex-col gap-4">
          <div className=" gap-2 flex">
            <div>
              <input
                name="OtherStar"
                onChange={hadleChange}
                type="checkbox"
                className="w-6 h-6 checked:bg-teal-500 rounded-lg"
              />
            </div>
            <div className="text-neutral-800 text-base font-normal font-['Poppins'] tracking-wide">
              <img src={OneStar} alt="" />
            </div>
          </div>
          <div className=" gap-2 flex">
            <div>
              <input
                name="OtherStar"
                onChange={hadleChange}
                type="checkbox"
                className="w-6 h-6 checked:bg-teal-500 rounded-lg"
              />
            </div>
            <div className="text-neutral-800 text-base font-normal font-['Poppins'] tracking-wide">
              <img src={TwoStar} alt="" />
            </div>
          </div>
          <div className=" gap-2 flex">
            <div>
              <input
                name="OtherStar"
                onChange={hadleChange}
                type="checkbox"
                className="w-6 h-6 checked:bg-teal-500 rounded-lg"
              />
            </div>
            <div className="text-neutral-800 text-base font-normal font-['Poppins'] tracking-wide">
              <img src={ThreeStar} alt="" />
            </div>
          </div>
          <div className=" gap-2 flex">
            <div>
              <input
                name="OtherStar"
                onChange={hadleChange}
                type="checkbox"
                className="w-6 h-6 checked:bg-teal-500 rounded-lg"
              />
            </div>
            <div className="text-neutral-800 text-base font-normal font-['Poppins'] tracking-wide">
              <img src={FourStar} alt="" />
            </div>
          </div>
          <div className=" gap-2 flex">
            <div>
              <input
                name="FiveStars"
                onChange={hadleChange}
                type="checkbox"
                className="w-6 h-6 checked:bg-teal-500 rounded-lg"
              />
            </div>
            <div className="text-neutral-800 text-base font-normal font-['Poppins'] tracking-wide">
              <img src={FiveStar} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h5 className="text-slate-600 text-base font-medium font-['Poppins'] leading-tight mb-3">
          Specials
        </h5>
        <div className="flex flex-col gap-4">
          <div className=" gap-2 flex">
            <div>
              <input
                name="ChildFriendly"
                onChange={hadleChange}
                type="checkbox"
                className="w-6 h-6 checked:bg-teal-500 rounded-lg"
              />
            </div>
            <div className="text-neutral-800 text-base font-normal font-['Poppins'] tracking-wide">
              Discounted deals
            </div>
          </div>
          <div className=" gap-2 flex">
            <div>
              <input
                name="Hiking"
                onChange={hadleChange}
                type="checkbox"
                className="w-6 h-6 checked:bg-teal-500 rounded-lg"
              />
            </div>
            <div className="text-neutral-800 text-base font-normal font-['Poppins'] tracking-wide">
              Free Cancellations
            </div>
          </div>
          <div className=" gap-2 flex">
            <div>
              <input
                name="  "
                onChange={hadleChange}
                type="checkbox"
                className="w-6 h-6 checked:bg-teal-500 rounded-lg"
              />
            </div>
            <div className="text-neutral-800 text-base font-normal font-['Poppins'] tracking-wide">
              Private Groups
            </div>
          </div>
          <div className=" gap-2 flex">
            <div>
              <input
                name="EpicChallenges"
                onChange={hadleChange}
                type="checkbox"
                className="w-6 h-6 checked:bg-teal-500 rounded-lg"
              />
            </div>
            <div className="text-neutral-800 text-base font-normal font-['Poppins'] tracking-wide">
              New on Entrada
            </div>
          </div>
          <div className=" gap-2 flex">
            <div>
              <input
                name="VirtualExperiences"
                onChange={hadleChange}
                type="checkbox"
                className="w-6 h-6 checked:bg-teal-500 rounded-lg"
              />
            </div>
            <div className="text-neutral-800 text-base font-normal font-['Poppins'] tracking-wide">
              Entrada Specials
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
