import React from "react";
import localFont from "next/font/local";

const shasenem = localFont({ src: "../pages/fonts/shasenem.ttf" });

const InputCmp = ({ label, placeholder, state, setState }) => {
  return (
    <div className={`${shasenem.className} text-right flex flex-col w-full`}>
      <label className="text-xl font-bold my-2">{label}</label>
        <input
          type="text"
          className="px-4 py-2 text-right border rounded-md w-full"
          placeholder={placeholder}
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
    </div>
  );
};

export default InputCmp;
