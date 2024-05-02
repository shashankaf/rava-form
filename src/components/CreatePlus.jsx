import React from "react";
import localFont from 'next/font/local';

const shasenem = localFont({src: '../pages/fonts/shasenem.ttf'})

const CreatePlus = ({handleClick}) => {
  return (
    <button onClick={handleClick} dir="rtl" className={`${shasenem.className} text-2xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}>
      زیادکردن
      <svg
        className="w-5 h-5 inline-block mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 4v16m8-8H4"
        ></path>
      </svg>
    </button>
  )
};

export default CreatePlus;
