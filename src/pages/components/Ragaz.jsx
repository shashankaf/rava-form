import React from "react";
import Dropdown from "./Dropdown"

const Ragaz = () => {
  const options = [
    {id: 1, name: "نێر"},
    {id: 2, name: "مێ"},
  ]
  return (
     <Dropdown options={options} text="رەگەزت چیە؟" /> 
  );
};

export default Ragaz;
