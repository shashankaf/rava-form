import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { classAtom, isOpenClass } from "../lib/store";
import { supabase } from "@/lib/supabase";
import localFont from "next/font/local";
import { ArrowDown, ArrowRight } from "./Arrow";

const shasenem = localFont({ src: "../pages/fonts/shasenem.ttf" });

const Classes = () => {
  const [clas, setClas] = useAtom(classAtom);
  const [isOpen, setIsOpen] = useAtom(isOpenClass);
  const [classes, setClasses] = useState([]);
  const handleSelect = (option) => {
    setClas(option);
    setIsOpen(false);
  };
  const fetcher = async () => {
    try {
      const { data, error } = await supabase.from("class").select();
      if (error) throw Error;
      setClasses(data);
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
          className="border-[1px] border-gray-100 px-2 py-1 rounded-md w-full text-right flex flex-row gap-4"
        >
          {clas.title ? clas.title : "لە پۆلی چەندیت؟"}
          {isOpen ? <ArrowRight /> : <ArrowDown />}
        </button>
        {isOpen && (
          <div className="absolute top-full right-0 mt-1 bg-white border border-gray-300 shadow-lg rounded-md z-10">
            {classes?.map((option) => (
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

export default Classes;
