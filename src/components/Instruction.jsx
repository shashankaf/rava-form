import React from "react";
import localFont from "@next/font/local"

const rudaw = localFont({src: "../lib/rudawbold.woff"})
const Instruction = ({ text }) => {
  return (
    <div className="gap-2 m-auto w-2/3">
      <p style={{fontFamily: 'radaw'}} className="text-lg font-bold text-right">{text}</p>
    </div>
  );
};
export default Instruction;
