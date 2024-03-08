import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
const DetailsDate = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div>
      <div className="relative z-50 top-1 right-1 flex">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy" // customize date format if needed
          className="w-[200px] text-lg underline leading-[20px] text-[#99a3ad] ml-px outline-none z-50"
          placeholderText="Select preferred dates"
          id="halum"
        />
        <label htmlFor="halum">
          <FaCalendarAlt className="text-lg relative ml-[80px]" />
        </label>
      </div>
    </div>
  );
};

export default DetailsDate;
