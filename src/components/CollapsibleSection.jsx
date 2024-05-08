import React, { useState } from "react";
import localFont from 'next/font/local';

const shasenem = localFont({src: '../pages/fonts/shasenem.ttf'})

const CollapsibleSection = ({ title, children, state }) => {
  const [isExpanded, setIsExpanded] = useState(state);

  const toggleVisibility = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="border border-gray-200 shadow-md">
      <div
        className="flex items-center justify-between bg-gray-100 p-4 cursor-pointer"
        onClick={toggleVisibility}
      >
        <h3 className={`${shasenem.className} text-2xl font-semibold`}>{title}</h3>
        <div className="flex items-center">
          <span
            className={`transform transition-transform ${isExpanded ? "rotate-0" : "-rotate-90"} text-gray-500 text-xl`}
          >
            &#9658;
          </span>
        </div>
      </div>
      {isExpanded && (
        <div className="p-4 border-t border-gray-200">{children}</div>
      )}
    </div>
  );
};

export default CollapsibleSection;
