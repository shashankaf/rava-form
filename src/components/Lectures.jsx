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

  return (
    <MultiSelectComponent options={teachers} text="وانە و مامۆستا هەڵبژێرە" />
  );
};

export default Lectures;
