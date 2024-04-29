import React from "react";
import localFont from "@next/font/local"

const rudaw = localFont({src: "../lib/rudawbold.woff"})
const Signatures = () => {
  return <div className="flex flex-row justify-between my-10 w-2/3 m-auto">
    <div className="flex flex-col items-center justify-center">
    <p style={{fontFamily: 'rudaw'}}>مەریوان فەتاح کەریم</p>
    <p style={{fontFamily: 'rudaw'}} className="font-bold">بەڕێوەبەر</p>
    </div>
    <div className="flex flex-col items-center justify-center">
    <p style={{fontFamily: 'rudaw'}}>ناوو واژۆی بەشداربوو</p>
    <p style={{fontFamily: 'rudaw'}} >....................</p>
    </div>
  </div>;
};

export default Signatures;
