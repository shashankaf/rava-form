import React from "react";
import localFont from 'next/font/local';

const shasenem = localFont({src: '../pages/fonts/shasenem.ttf'})

const Instruction = ({ text }) => {
  return (
    <div dir="rtl" className="gap-2 m-auto w-2/3">
      <p className={`${shasenem.className} text-lg font-bold text-right`}>- {text}</p>
    </div>
  );
};
export default Instruction;
