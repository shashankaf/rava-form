import React, { useState } from "react";
import Image from "next/image";
import { useAtom } from "jotai";
import { teacherAtom } from "../lib/store";

const MultiSelectComponent = ({ options, text }) => {
  const [selectedOptions, setSelectedOptions] = useAtom(teacherAtom);

  const handleOptionToggle = (optionId) => {
    const isSelected = selectedOptions.includes(optionId);

    if (isSelected) {
      // If the option is already selected, remove it
      setSelectedOptions(selectedOptions.filter((id) => id !== optionId));
    } else {
      // Check if the option is unique before adding it
      if (!selectedOptions.includes(optionId)) {
        setSelectedOptions([...selectedOptions, optionId]);
      }
    }
  };

  return (
    <div>
      <h3 className="text-lg font-bold text-right">{text}</h3>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
        {options?.map((option) => (
          <div
            key={option.id}
            className="flex items-center bg-gray-100 p-2 rounded-md"
          >
            <input
              type="checkbox"
              id={`option-${option.id}`}
              checked={selectedOptions.includes(option.id)}
              onChange={() => handleOptionToggle(option.id)}
              className="mr-2 text-right"
            />
            <div className="flex items-center">
              <Image
                src={option.photo}
                alt={`Teacher: ${option.teacher}`}
                width={48}
                height={48}
                className="rounded-full mr-2"
              />
              <label htmlFor={`option-${option.id}`}>
                {option.teacher} - {option.value}
              </label>
            </div>
          </div>
        ))}
      </div>
      <div>
        <p>
          بژاردەکانت:{" "}
          {selectedOptions
            ?.map((id) => options.find((option) => option.id === id).value)
            .join("، ")}
        </p>
      </div>
    </div>
  );
};

export default MultiSelectComponent;
