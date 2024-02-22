import React from "react";
import { useDispatch } from "react-redux";
import { toggleCategory } from "../../../Redux/slices/categorize";

const SideBar = () => {
  let dispatch = useDispatch();

  function hadleChange(event) {
    const { checked, name } = event.target;
    dispatch(toggleCategory(event.target));
  }
  return (
    <section className="max-w-[425px] flex-shrink-0 rounded-[16px] border border-[var(--Gray-Off-Cultured, #E9ECEF)] bg-[white] px-4 py-3">
      <div>
        <h5></h5>
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
              Hiking
            </div>
          </div>
          <div className=" gap-2 flex">
            <div>
              <input
                name="Beach"
                onChange={hadleChange}
                type="checkbox"
                className="w-6 h-6 checked:bg-teal-500 rounded-lg"
              />
            </div>
            <div className="text-neutral-800 text-base font-normal font-['Poppins'] tracking-wide">
              Beach
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
