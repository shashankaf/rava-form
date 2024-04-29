import React from "react";

const Instruction = ({ text }) => {
  return (
    <div className="gap-2 m-auto w-2/3">
      <p className="text-lg font-bold text-right">{text}</p>
    </div>
  );
};
export default Instruction;
