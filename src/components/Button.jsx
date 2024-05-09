import React from "react";
import localFont from 'next/font/local';

const shasenem = localFont({src: '../pages/fonts/shasenem.ttf'})

function Button({ text, handleClick, bg = "indigo" }) {
  return (
    <button
      onClick={handleClick}
      className={`${shasenem.className} px-4 py-2 bg-${bg}-500 hover:bg-${bg}-800 text-white rounded-md outline-none text-xl`}
    >
      {text}
    </button>
  );
}

export default Button;
