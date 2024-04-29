import React from "react";
import localFont from 'next/font/local';

const shasenem = localFont({src: '../pages/fonts/shasenem.ttf'})

const Title = ({text}) => {
  return (
  <h1 className={`${shasenem.className} text-center sm:text-2xl lg:text-3xl font-bold my-2 p-2`} role="heading">{text}</h1>
  )
}

export default Title;
