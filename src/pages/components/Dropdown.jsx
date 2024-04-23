
import React, { useState } from 'react';

const Dropdown = ({options, text}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    console.log('Selected option:', option);
    setIsOpen(!isOpen)
    // Perform any action when an option is selected
    // For example, you can update state or call a function
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
      >
        {text}
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 shadow-lg rounded-md z-10">
          {options.map((option) => (
            <div
              key={option.id}
              onClick={() => handleOptionSelect(option)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              <p className="text-center min-w-28">{option.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
