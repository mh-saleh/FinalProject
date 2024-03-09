import { useDispatch, useSelector } from "react-redux";
import PaginatedItems from "../../Pagination/PaginatedItems";
import { matchItem } from "../../../Redux/slices/categorize";
import SideBar from "./SideBar";
import MultiRangeSlider from "./PriceSlider";
import SubmenuCard from "../Details/Submenu/SubmenuCard";
import BestSeller from "../Homepage/05.BestSeller/BestSeller";

const Cartpage = () => {
  let items = useSelector((state) => state.Catagory.sortedItems);
  console.log(items, "Sale");
  let dispatch = useDispatch();
  const handleSearchChange = (e) => {
    dispatch(matchItem(e.target.value));
  };

  return (
    <section className="my-10 max-w-[1600px] mx-auto ">
      <SubmenuCard />
      <div className="relative ml-[400px] mb-5 text-center">
        <input
          id="inputSearch"
          type="search"
          className="border-[2px] w-[350px] h-14 box-border py-1 px-3 font-semibold   rounded-lg text-[22px]"
          onChange={handleSearchChange}
          placeholder="Search"
          autoFocus
        />
      </div>
      <div className="flex justify-between">
        {" "}
        <div className="w-[430px]">
          <SideBar />
        </div>
        <div className="">
          <div>
            <PaginatedItems items={items} itemsPerPage={9} />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <BestSeller />
      </div>
    </section>
  );
};

export default Cartpage;
