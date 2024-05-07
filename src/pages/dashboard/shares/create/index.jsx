import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import localFont from "next/font/local";
import { supabase } from "../../../../lib/supabase";
import Title from "../../../../components/Title";
import InputCmp from "../../../../components/InputCmp";
import AuthLayout from "../../../../components/AuthLayout";
import DashCmp from "../../../../components/DashCmp";
import SelectComponent from "../../../../components/SelectComponent";
import SelectSecond from "../../../../components/SelectSecond";

const shasenem = localFont({ src: "../../../../pages/fonts/shasenem.ttf" });

const CreateShare = () => {
  const [teacher, setTeacher] = useState("");
  const [teachers, setTeachers] = useState([]);
  const [course, setCourse] = useState("");
  const [courses, setCourses] = useState([]);
  const [percent, setPercent] = useState("");

  const router = useRouter();

  const teacherFetcher = async() => {
    try {
    const {data, error} = await supabase.from("teacher").select()
    if(error) throw Error;
    setTeachers(data)
    } catch(e) {
      console.log(e)
    }
  }

  const courseFetcher = async() => {
    try {
    const {data, error} = await supabase.from("course").select()
    if(error) throw Error;
    setCourses(data)
    } catch(e) {
      console.log(e)
    }
  }

  useEffect(() => {
    teacherFetcher()
  }, [])

  useEffect(() => {
    courseFetcher()
  }, [])

  const submitShare = async () => {
    const percentage = parseInt(percent)
    try {
      const { error } = await supabase.from("share").insert({
        teacher,
        course,
        percentage,
      });
      if (error) throw Error;
      router.push("../shares");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AuthLayout>
      <Head>
        <title>تۆمارکردنی پشکەکانی راڤە</title>
      </Head>
      <DashCmp>
        <div dir="rtl" className={`${shasenem.className} w-2/3`}>
          <Title text="تۆمارکردنی پشکی نوێ" />
          <SelectSecond label="مامۆستا" values={teachers} item={teacher} setItem={setTeacher} />
          <SelectComponent label="خول" values={courses} item={course} setItem={setCourse} />
          <InputCmp
            label="رێژەی پشک"
            placeholder="پشکی مامۆستا چەندە؟"
            state={percent}
            setState={setPercent}
          />

          <button
            onClick={submitShare}
            className="bg-indigo-500 hover:bg-indigo-700 text-white 
                       font-bold py-2 px-4 rounded focus:outline-none 
                       focus:shadow-outline text-xl"
          >
            تۆماری خول
          </button>
        </div>
      </DashCmp>
    </AuthLayout>
  );
};

export default CreateShare;
