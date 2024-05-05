import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { supabase } from "../../../../lib/supabase";
import InputCmp from "../../../../components/InputCmp";
import DashCmp from "../../../../components/DashCmp";
import Title from "../../../../components/Title";
import AuthLayout from "../../../../components/AuthLayout";
import DatePickerComponent from "../../../../components/DatePickerComponent";
import Heading from "../../../../components/Heading";

const EditCourse = () => {
  const router = useRouter();
  const { id } = router.query;
  const [course, setCourse] = useState(null);
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const fetcher = async () => {
    try {
      const { data, error } = await supabase
        .from("course")
        .select()
        .eq("id", id)
        .single();
      if (error) throw Error;
      setCourse(data);
      setTitle(data.title || "");
      setStart(data.start || "");
      setEnd(data.end || "");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetcher();
  }, [id]);

  const updateCourse = async () => {
    try {
      const { data, error } = await supabase
        .from("course")
        .update({
          title,
          start,
          end,
        })
        .eq("id", id);
      if (error) throw Error;
      console.log(data);
      router.push("../")
    } catch (e) {
      console.log(e);
    }
  };

  if (course === null) {
    return <p>...</p>;
  }
  return (
    <AuthLayout>
      <DashCmp>
        <Title text="نوێکردنەوەی خول" />
        <InputCmp label="ناوی خول" state={title} setState={setTitle} />
        <DatePickerComponent
          label="دەستپێک"
          date={start}
          selectedDate={start}
          setSelectedDate={setStart}
        />
        <DatePickerComponent
          label="کۆتایی"
          date={end}
          selectedDate={end}
          setSelectedDate={setEnd}
        />
        <div className="mb-4">
            <button
              onClick={updateCourse}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4"
            >
            نوێکردنەوە
          </button>
        </div>
      </DashCmp>
    </AuthLayout>
  );
};

export default EditCourse;
