import React, { useState, useEffect } from "react";
import MultiSelectComponent from "./MultiSelectComponent";
import { supabase } from "@/lib/supabase";


const Lectures = () => {
  const [teachers, setTeachers] = useState([])
  const fetcher = async () => {
    try {
      const { data, error } = await supabase.from("teacher").select();
      if (error) throw Error;
      setTeachers(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetcher();
  }, []);

  const options = [
    {
      id: 1,
      value: "رابەر خالید",
      teacher: "بیرکاری",
      photo: "/assets/teacher_1.png",
    },
    {
      id: 2,
      value: "رەوەند رەزا",
      teacher: "کیمیا",
      photo: "/assets/teacher_2.png",
    },
    {
      id: 3,
      value: "سۆران قادر",
      teacher: "کیمیا",
      photo: "/assets/teacher_3.png",
    },
    {
      id: 4,
      value: "گۆڤەند ئەبوبەکر",
      teacher: "ئینگلیزی",
      photo: "/assets/teacher_4.png",
    },
    {
      id: 5,
      value: "رێبین سابیر",
      teacher: "فیزیا",
      photo: "/assets/teacher_5.png",
    },
    {
      id: 6,
      value: "ئالان حەمەسەعید",
      teacher: "فیزیا",
      photo: "/assets/teacher_6.png",
    },
    {
      id: 7,
      value: "ئارام نەریمان",
      teacher: "زیندەوەرزانی",
      photo: "/assets/teacher_7.png",
    },
    {
      id: 8,
      value: "مەریوان سەعید",
      teacher: "عەرەبی",
      photo: "/assets/teacher_9.png",
    },
    {
      id: 9,
      value: "زرار سەردار",
      teacher: "کوردی",
      photo: "/assets/teacher_8.png",
    },
  ];
  return (
    <MultiSelectComponent options={teachers} text="وانە و مامۆستا هەڵبژێرە" />
  );
};

export default Lectures;
