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
          <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/80 via-black/50"></div>
        </div>
        <div className="relative p-6 px-6 py-14 md:px-12">
          <h2 style={{fontFamily: shasenem.className}} className="mb-6 block text-4xl font-black leading-[1.5] tracking-normal text-white antialiased">
            {specialty}
          </h2>
          <h5 style={{fontFamily: shasenem.className}} className="block mb-4text-xl antialiased leading-snug tracking-normal text-white shadow">
            {name}
          </h5>
        </div>
      </div>
    </>
  );
};

export default Teacher;
