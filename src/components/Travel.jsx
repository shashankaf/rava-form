import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { travelAtom } from "../lib/store";
import { supabase } from "@/lib/supabase";
import localFont from "next/font/local";

const shasenem = localFont({ src: "../pages/fonts/shasenem.ttf" });

const Travel = () => {
  const [travel, setTravel] = useAtom(travelAtom);
  const [isOpen, setIsOpen] = useState(false);
  const [travels, setTravels] = useState([]);
  const handleSelect = (option) => {
    setTravel(option);
    setIsOpen(false); // Close the dropdown after selecting an option
  };
  const fetcher = async () => {
    try {
      const { data, error } = await supabase.from("travel").select();
      if (error) throw Error;
      setTravels(data);
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
      setIsOpen(false);
    }, 250);
  };

  return (
    <>
      <div
        dir="rtl"
        className={`${shasenem.className} text-xl relative w-full`}
      >
        <button
          onClick={toggleDropdown}
          onBlur={blurEffect}
          className="border-[1px] border-gray-100 px-2 py-1 rounded-md w-full text-right"
        >
          {travel.title ? travel.title : "جۆری هاتووچۆکردن"}
          {isOpen ? (
            <span className="mr-6 my-auto">⇨</span>
          ) : (
            <span className="mr-6 my-auto">⇩</span>
          )}
        </button>
        {isOpen && (
          <div className="absolute top-full right-0 mt-1 bg-white border border-gray-300 shadow-lg rounded-md z-10">
            {travels?.map((option) => (
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

export default Travel;
