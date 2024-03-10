import axios from "axios";
import React, { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";
import DownArrow from "../../../../assets/images/Homepage/downarrow.png";
import Search from "../../../../assets/images/Homepage/search.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

const SearchSection = () => {
  let [mew, setMew] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(function () {
    async function halum() {
      let data = await axios.get("https://restcountries.com/v3.1/all");

      setMew(data.data);
    }

    halum();
  }, []);

  let countriesArray = mew.map(function (item) {
    let y = <option>{item.name.common}</option>;
    return y;
  });
  let CapitalsArray = mew.map(function (item) {
    let y = <option>{item.capital}</option>;
    return y;
  });
  return (
    <div
      id="HeroRoot"
      className="flex flex-col lg:flex-row  justify-between  font-['Poppins'] items-start  "
    >
      <div className="flex flex-row  mt-4 justify-between lg:gap-[97px]  lg:w-3/4 items-center ">
        <div className="flex flex-col gap-4 w-full lg:w-1/3 items-start mt-px mr-1 ">
          <div className="relative flex flex-row w-full items-start">
            <div
              id="Highlight2"
              className="border-solid border-t-8 border-[#f5a623] w-[128px] h-2 opacity-70 absolute top-6 left-px"
            />
            <div className="text-3xl font-semibold tracking-[0.56] text-[#212529] relative w-full">
              Location
            </div>
          </div>
          <div className="flex flex-row ml-px gap-4 items-start">
            <div className="text-lg underline leading-[20px] text-[#99a3ad] w-10 ">
              <select
                id="countries"
                className="border-b-2 border-[#F0F0F0] w-[240px] appearance-none outline-none py-1"
              >
                <option value="">Enter your destination</option>
                {countriesArray}
              </select>
            </div>
            <CiLocationOn className="ml-[200px] text-2xl" />
          </div>
        </div>
        <div
          id="Divider1"
          className="border-solid border-r border-[#dce5eb] my-5 lg:my-8 w-px h-12"
        />
        <div className="flex flex-col lg:flex-row gap-4 w-full lg:w-1/5 font-['Poppins'] items-start mt-px mr-px">
          <div className="flex flex-col mb-px gap-4 w-full items-start">
            <div className="relative flex flex-row w-full items-start">
              <div
                id="Highlight1"
                className="border-solid border-t-8 border-[#f5a623] w-[114px] h-2 opacity-70 absolute top-6 left-px"
              />
              <div className="text-3xl font-semibold tracking-[0.56] text-[#212529] relative">
                Activity
              </div>
            </div>
            <div className="text-lg w-[125px] underline leading-[20px] text-[#99a3ad] ml-px">
              Bungee jump
            </div>
          </div>
          <img src={DownArrow} alt="settings" className="mt-12 w-6" />
        </div>
        <div
          id="Divider"
          className="border-solid border-r border-[#dce5eb] my-5 lg:my-8 w-px h-12"
        />
        <div className="flex flex-col gap-3 w-full lg:w-1/6 font-['Poppins'] items-start">
          <div className="relative flex flex-row w-full items-start">
            <div
              id="Highlight"
              className="border-solid border-t-8 border-[#f5a623] w-[70px] h-2 opacity-70 absolute top-6 left-px"
            />
            <div className="text-3xl font-semibold tracking-[0.56] text-[#212529] relative">
              Date
            </div>
          </div>
          <div className="relative top-1 right-1 flex">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy" // customize date format if needed
              className="w-[150px] text-lg underline leading-[20px] text-[#99a3ad] ml-px outline-none"
              placeholderText="Set Date"
              id="halum"
            />
            <label htmlFor="halum">
              {" "}
              <FaCalendarAlt className="text-lg relative right-4" />
            </label>
          </div>
        </div>

        <div className="bg-red-400 h-[112px] w-[112px]"></div>
      </div>
      <div className="mt-4 ">
        <Link to={"/shop#inputSearch"}>
          <img src={Search} alt="" className="cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default SearchSection;
