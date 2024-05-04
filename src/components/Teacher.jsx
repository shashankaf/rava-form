import React from "react";
import localFont from 'next/font/local';

const shasenem = localFont({src: '../pages/fonts/shasenem.ttf'})

const Teacher = ({image, specialty, name, onClick}) => {
  const handleClick = () => {
    onClick()
  }
  return (
    <>
      <div  className="relative grid h-[20rem] w-full 
                       max-w-[16rem] flex-col items-end 
                       justify-center overflow-hidden rounded-xl 
                       bg-white text-center
                       text-gray-700 m-4 shadow-lg shadow-black 
                       hover:shadow-indigo-500 transition-600 cursor-pointer"
        onClick={handleClick}
      >
        <div
          className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover"
          style={{
            backgroundImage:
              `url(${image})`,
          }}
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/20 via-black/30"></div>
        </div>
        <div className="relative py-2 px-6  md:px-12">
          <h2 style={{fontFamily: shasenem.className}} className="w-40 text-center bg-indigo-500 rounded-t-md px-4 text-left block text-2xl font-black leading-[1.5] tracking-normal text-white antialiased">
            {specialty}
          </h2>
          <h5 style={{fontFamily: shasenem.className}} className="w-40 bg-gray-900 text-center rounded-b-md px-2 py-1 block mb-4 text-xl antialiased leading-snug tracking-normal text-white shadow">
            {name}
          </h5>
        </div>
      </div>
    </>
  );
};

export default Teacher;
