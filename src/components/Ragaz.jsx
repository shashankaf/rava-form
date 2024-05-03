import React, {useState, useEffect} from "react";
import { useAtom } from "jotai";
import { ragazAtom } from "../lib/store";
import { supabase } from "@/lib/supabase";
import localFont from 'next/font/local';

const shasenem = localFont({src: '../pages/fonts/shasenem.ttf'})

const Ragaz = () => {
  const [ragaz, setRagaz] = useAtom(ragazAtom)
  const [isOpen, setIsOpen] = useState(false);
  const [ragazakan, setRagazakan] = useState([]);
  const handleSelect = (option) => {
    setRagaz(option);
    setIsOpen(false); // Close the dropdown after selecting an option
  };
  const fetcher = async () => {
    try {
      const { data, error } = await supabase.from("ragaz").select();
      if (error) throw Error;
      setRagazakan(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetcher();
  }, []);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const blurEffect = () => {
    setTimeout(() => {
      setIsOpen(false)
    }, 100)
  }
  return (
    <>
      <div className={`${shasenem.className} text-xl relative`}>
        <button
          onClick={toggleDropdown}
          onBlur={blurEffect}
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-400 min-w-48"
        >
          {ragaz.title ? ragaz.title : "رەگەزت چیە؟"}
        </button>
        {isOpen && (
          <div className="absolute top-full right-0 mt-1 bg-white border border-gray-300 shadow-lg rounded-md z-10">
            {ragazakan?.map((option) => (
              <div
                key={option.id}
                onClick={() => handleSelect(option)}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                <p className="text-center min-w-28">{option.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Ragaz;
