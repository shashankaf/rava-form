import React from "react"
import Dropdown from "./Dropdown"
import { useAtom } from "jotai";
import { travelAtom } from "../lib/store";

const Travel = () => {
  const [travel, setTravel] = useAtom(travelAtom)

  const handleSelect = (option) => {
    setTravel(option)
  }

  const options = [
    {id: 1, name: "خۆی هاتوچۆدەکات"},
    {id: 2, name: "پاسی پەیمانگا بەکاردەهێنێت"},
  ];
  return (
      <Dropdown options={options} text="جۆری هاتوچۆکردن" handleSelect={handleSelect} />
  )
}

export default Travel
