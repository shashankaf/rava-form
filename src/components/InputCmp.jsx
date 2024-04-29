import React from 'react'
import localFont from 'next/font/local';

const shasenem = localFont({src: '../pages/fonts/shasenem.ttf'})

const InputCmp = ({label, placeholder, state, setState}) => {
  return (
    <div className={`${shasenem.className} text-right my-1 p-1`}>
    <label className="text-xl font-bold">{label}</label>
      <div className="">
        <input type="text" className="min-w-72 px-3 py-2 text-right border rounded-md focus:outline-none focus:ring focus:ring-blue-400" placeholder={placeholder} value={state} onChange={(e) => setState(e.target.value)} />
      </div>
    </div>
  );
};

export default InputCmp;
