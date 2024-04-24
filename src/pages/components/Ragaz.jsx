import React from "react";
import Dropdown from "./Dropdown"
import { useAtom } from "jotai";
import { ragazAtom } from "../lib/store";

const Ragaz = () => {
  const [ragaz, setRagaz] = useAtom(ragazAtom)

  const handleSelect = (option) => {
    setRagaz(option)
  }
  const options = [
    {id: 1, name: "نێر"},
    {id: 2, name: "مێ"},
  ]
  return (
     <Dropdown options={options} text="رەگەزت چیە؟" handleSelect={handleSelect} /> 
  );
};

export default Ragaz;
