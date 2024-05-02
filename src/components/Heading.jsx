import React from "react";
import localFont from 'next/font/local';

const shasenem = localFont({src: '../pages/fonts/shasenem.ttf'})

const Heading = ({text}) => {
  return (
  <h1 className={`${shasenem.className} text-right text-xl font-bold p-2`} role="heading">{text}</h1>
  )
}

export default Heading;
