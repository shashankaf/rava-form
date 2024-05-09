import React, { useState } from "react";
import localFont from "next/font/local";

const shasenem = localFont({ src: "../pages/fonts/shasenem.ttf" });

function SelectComponent({ label, values, item, setItem }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleTypeChange = (id) => {
    setItem(id); // Set the ID instead of the title
    setIsOpen(false); // Close the values pane when an option is selected
  };

  const toggleValuesPane = () => {
    setIsOpen(!isOpen);
  };

  const blurEffect = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 250);
  };

  return (
    <div dir="rtl" className={`${shasenem.className}  text-xl relative w-full`}>
      <label htmlFor="typeSelect">
        {label}
      </label>
      <div className="relative w-full">
        <button
          onClick={toggleValuesPane}
          onBlur={blurEffect}
          className="w-full text-xl bg-white px-4 py-2 rounded-md border-[1px] border-gray-200 text-right text-lg"
        >
          {values.find((option) => option.id === item)?.title || ""}
          {isOpen ? <span className="mr-6 my-auto">⇨</span> : <span className="mr-6 my-auto">⇩</span> }
        </button>
        {isOpen && (
          <div className="absolute top-full right-0 mt-1 bg-white border border-gray-300 shadow-lg rounded-md z-10 min-w-48">
            {values?.map((option) => (
              <div
                key={option.id}
                onClick={() => handleTypeChange(option.id)}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-xl"
              >
                <p className="text-center min-w-28">{option.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Remove the hidden select element as it's not needed anymore */}
    </div>
  );
}

export default SelectComponent;
