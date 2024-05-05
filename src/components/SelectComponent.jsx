import React from "react";

function SelectComponent({ label, values, item, setItem, onChange }) {
  const handleTypeChange = (event) => {
    setItem(event.target.value);
  };

  return (
    <div className="">
      <label htmlFor="typeSelect" className="text-xl font-bold">
        {label}
      </label>
      <select
        id="typeSelect"
        value={item}
        onChange={handleTypeChange}
        className="block w-full px-4 py-2 border border-gray-300 
                     rounded-md shadow-sm focus:outline-none 
                     focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
      >
        {values?.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectComponent;
