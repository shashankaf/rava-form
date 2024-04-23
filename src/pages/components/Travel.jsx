import React from "react"
import Dropdown from "./Dropdown"

const Travel = () => {
  const options = [
    {id: 1, name: "خۆی هاتوچۆدەکات"},
    {id: 2, name: "پاسی پەیمانگا بەکاردەهێنێت"},
  ];
  return (
      <Dropdown options={options} text="جۆری هاتوچۆکردن" />
  )
}

export default Travel
