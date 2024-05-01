import React, { useState } from "react";
import Image from "next/image";
import { useAtom } from "jotai";
import { teacherAtom } from "../lib/store";
import localFont from "next/font/local";
import Teacher from "./Teacher";

const shasenem = localFont({ src: "../pages/fonts/shasenem.ttf" });

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

  const handleTeacherClick = (optionId) => {
    // Toggle the checkbox when the Teacher component is clicked
    handleOptionToggle(optionId);
  };

  return (
    <div className={`${shasenem.className} text-xl relative`}>
      <h3 className="text-xl font-bold text-right">{text}</h3>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
        {options?.map((option) => (
          <div key={option.id} className="flex items-center">
            <label class="checkbox-container">
              <input
                type="checkbox"
                id={`option-${option.id}`}
                checked={selectedOptions.includes(option.id)}
                onChange={() => handleOptionToggle(option.id)}
                className="mr-2 text-right hidden"
              />

              <div class="checkmark"></div>
            </label>
            <Teacher
              name={option.name}
              specialty={option.specialty}
              image={option.photo}
              onClick={() => handleTeacherClick(option.id)}
            />
          </div>
        ))}
      </div>
      <div className="text-right text-xl">
        <p>
          بژاردەکانت{" "}
          {selectedOptions
            ?.map((id) => options.find((option) => option.id === id).name)
            .join("، ")}
        </p>
      </div>
    </div>
  );
};

export default MultiSelectComponent;
