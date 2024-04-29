import React from "react";
import localFont from 'next/font/local';

const shasenem = localFont({src: '../pages/fonts/shasenem.ttf'})

const Signatures = () => {
  return <div className="flex flex-row justify-between my-10 w-2/3 m-auto">
    <div className="flex flex-col items-center justify-center">
    <p className={`${shasenem.className}`}> مەریوان فەتاح کەریم</p>
    <p className={`${shasenem.className} font-bold`}>بەڕێوەبەر</p>
    </div>
    <div className="flex flex-col items-center justify-center">
    <p className={`${shasenem.className}`}>ناوو واژۆی بەشداربوو</p>
    <p className={`${shasenem.className}`}>....................</p>
    </div>
  </div>;
};

export default Signatures;
