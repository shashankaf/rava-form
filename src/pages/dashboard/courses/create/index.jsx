import React, { useEffect, useState } from "react";
import Title from "../../../../components/Title";
import InputCmp from "../../../../components/InputCmp";
import AuthLayout from "../../../../components/AuthLayout";
import DashCmp from "../../../../components/DashCmp";
import DatePickerComponent from "../../../../components/DatePickerComponent";
import localFont from "next/font/local";
import { supabase } from "../../../../lib/supabase";
import SelectComponent from "../../../../components/SelectComponent";
import { useRouter } from "next/router";
import Head from "next/head";

const shasenem = localFont({ src: "../../../../pages/fonts/shasenem.ttf" });

const CreateCourse = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("summer");
  const [teachers, setTeachers] = useState([]);
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [teacher, setTeacher] = useState("");
  const [share, setShare] = useState(null);

  const router = useRouter();

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const teacherFetcher = async () => {
    try {
      const { data, error } = await supabase.from("teacher").select();
      if (error) throw Error;
      setTeachers(data);
    } catch (e) {
      console.log(e);
    }
  };

  const submitCourse = async () => {
    const properShare = parseInt(share);
    try {
      const { error } = await supabase.from("course").insert({
        title,
        course_type: type,
        start,
        end,
        share: properShare,
        teacher,
      });
      if (error) throw Error;
      router.push("../courses");
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    teacherFetcher();
  }, []);

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
          <div className="">
            <label htmlFor="typeSelect" className="text-xl font-bold">
              جۆری خول:
            </label>
            <select
              id="typeSelect"
              value={type}
              onChange={handleTypeChange}
              className="block w-full px-4 py-2 border border-gray-300 
                     rounded-md shadow-sm focus:outline-none 
                     focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
            >
              <option value="hourly">بە کاتژمێر</option>
              <option value="private">تایبەت</option>
              <option value="summer">هاوینە</option>
            </select>
          </div>
          <DatePickerComponent selectedDate={start} setSelectedDate={setStart} date={start} label="دەستپێک" />
          <DatePickerComponent selectedDate={end} setSelectedDate={setEnd} date={end} label="کۆتایی" />
          <SelectComponent
            label="مامۆستای خول"
            values={teachers}
            item={teacher}
            setItem={setTeacher}
          />
          <InputCmp
            label="پشکی مامۆستا"
            placeholder="پشکی مامۆستا چەندە؟"
            state={share}
            setState={setShare}
          />
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
