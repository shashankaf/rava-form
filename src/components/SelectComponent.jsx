import React, { useState } from "react";
import localFont from "next/font/local";

const shasenem = localFont({ src: "../pages/fonts/shasenem.ttf" });

function SelectComponent({ label, values, item, setItem }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleTypeChange = (value) => {
    setItem(value);
    setIsOpen(false); // Close the values pane when an option is selected
  };

  const toggleValuesPane = () => {
    setIsOpen(!isOpen);
  };

  const blurEffect = () => {
    setTimeout(() => {
      setIsOpen(false)
    }, 250)
  }

  return (
    <div dir="rtl" className={`${shasenem.className}`}>
      <label htmlFor="typeSelect" className="text-xl font-bold">
        {label}
      </label>
      <div className="relative">
        <button
          onClick={toggleValuesPane}
          onBlur={blurEffect}
          className="bg-white text-gray-400 px-4 py-3 rounded-md border-[1px] border-gray-200 focus:outline-none focus:ring focus:ring-blue-400 min-w-48"
        >
          {item}
        </button>
        {isOpen && (
          <div className="absolute top-full right-0 mt-1 bg-white border border-gray-300 shadow-lg rounded-md z-10 min-w-48">
            {values?.map((option) => (
              <div
                key={option.id}
                onClick={() => handleTypeChange(option.title)}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-xl"
              >
                <p className="text-center min-w-28">{option.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Hide the native select element */}
      <select
        id="hiddenSelect"
        value={item}
        onChange={() => {}}
        style={{ display: "none" }}
      >
        {values?.map((option) => (
          <option key={option.id} value={option.title}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectComponent;
