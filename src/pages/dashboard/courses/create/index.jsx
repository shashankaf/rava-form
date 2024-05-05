import React, { useState } from "react";
import Title from "../../../../components/Title";
import InputCmp from "../../../../components/InputCmp";
import AuthLayout from "../../../../components/AuthLayout";
import DashCmp from "../../../../components/DashCmp";
import DatePickerComponent from "../../../../components/DatePickerComponent";
import localFont from "next/font/local";
import { supabase } from "../../../../lib/supabase";
import { useRouter } from "next/router";
import Head from "next/head";

const shasenem = localFont({ src: "../../../../pages/fonts/shasenem.ttf" });

const CreateCourse = () => {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  const router = useRouter();



  const submitCourse = async () => {
    try {
      const { error } = await supabase.from("course").insert({
        title,
        start,
        end,
      });
      if (error) throw Error;
      router.push("../courses");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AuthLayout>
      <Head>
        <title>تۆماری خولی نوێ لە راڤە</title>
      </Head>
      <DashCmp>
        <div dir="rtl" className={`${shasenem.className} w-2/3`}>
          <Title text="تۆمارکردنی خولی نوێ" />
          <InputCmp
            label="ناونیشانی خول"
            placeholder="ناوی خولەکە بنووسە"
            state={title}
            setState={setTitle}
          />
          <DatePickerComponent selectedDate={start} setSelectedDate={setStart} date={start} label="دەستپێک" />
          <DatePickerComponent selectedDate={end} setSelectedDate={setEnd} date={end} label="کۆتایی" />
          <button
            onClick={submitCourse}
            className="bg-indigo-500 hover:bg-indigo-700 text-white 
                       font-bold py-2 px-4 rounded focus:outline-none 
                       focus:shadow-outline text-xl">
            تۆماری خول
          </button>
        </div>
      </DashCmp>
    </AuthLayout>
  );
};

export default CreateCourse;
