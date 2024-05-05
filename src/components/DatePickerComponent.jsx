import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import localFont from "next/font/local";
import { formatDate } from "../lib/utility_functions";

const shasenem = localFont({ src: "../pages/fonts/shasenem.ttf" });

const DatePickerComponent = ({ date, label, selectedDate, setSelectedDate }) => {

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div dir="rtl" className={`${shasenem.className}`}>
      <label htmlFor="datePicker" className="block text-xl font-bold">
        بەرواری {label}
      </label>
      <DatePicker
        id="datePicker"
        selected={selectedDate}
        onChange={handleDateChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm 
                     focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
      <p className="mt-2 text-sm text-gray-500">
        {selectedDate ? formatDate(selectedDate) : `رۆژی ${label} دیاری نەکراوە`}
      </p>
    </div>
  );
};

export default DatePickerComponent;
