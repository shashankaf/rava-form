import React from "react";
import Dropdown from "./Dropdown"

const Classes = () => {
  const options = [
    {id: 1, name: "پۆلی ١"},
    {id: 2, name: "پۆلی ٢"},
    {id: 3, name: "پۆلی ٣"},
    {id: 4, name: "پۆلی ٤"},
    {id: 5, name: "پۆلی ٥"},
    {id: 6, name: "پۆلی ٦"},
    {id: 7, name: "پۆلی ٧"},
    {id: 8, name: "پۆلی ٨"},
    {id: 9, name: "پۆلی ٩"},
    {id: 10, name: "پۆلی ١٠"},
    {id: 11, name: "پۆلی ١١"},
    {id: 12, name: "پۆلی ١٢"},
  ]
  return (
    <>
     <Dropdown options={options} text="پۆلەکەت دیاری بکە" /> 
    </>
  );
};

export default Classes;
