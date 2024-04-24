import React from 'react'
import Dropdown from './Dropdown'
import { useAtom } from 'jotai'
import {bloodAtom} from "../lib/store"

const Blood = () => {
  const [blood, setBlood] = useAtom(bloodAtom)

  const handleOptionSelect = (option) => {
    setBlood(option)
    // setIsOpen(!isOpen)
  };

  const options = [
    {id: 1, name: "A+"},
    {id: 2, name: "A-"},
    {id: 3, name: "B+"},
    {id: 4, name: "B-"},
    {id: 5, name: "AB+"},
    {id: 6, name: "AB-"},
    {id: 7, name: "O+"},
    {id: 8, name: "O-"},
  ]
  return (
  <Dropdown options={options} text="جۆری خوێنەکەت چیە؟" handleSelect={handleOptionSelect} />
  )
}

export default Blood
