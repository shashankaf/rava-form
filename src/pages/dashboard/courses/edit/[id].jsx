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
  const [teacher, setTeacher] = useState(null);
  const [teachers, setTeachers] = useState([]);
  const [title, setTitle] = useState("");
  const [share, setShare] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [type, setType] = useState("");

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
      setShare(data.share || "");
      setStart(data.start || "");
      setEnd(data.end || "");
      setType(data.course_type || "");
      setTeacher(data.teacher || null);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetcher();
  }, [id]);

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const updateCourse = async () => {
    try {
      const { data, error } = await supabase
        .from("course")
        .update({
          title,
          share,
          course_type: type,
          start,
          end,
          teacher,
        })
        .eq("id", id);
      if (error) throw Error;
      console.log(data);
      router.push("../")
    } catch (e) {
      console.log(e);
    }
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

  useEffect(() => {
    teacherFetcher();
  }, [id]);

  const handleTeacherSelect = (teacherId) => {
    setTeacher(teacherId);
  };

  const teacherRadioInputs = teachers.map((item) => (
    <label key={item.id} className="flex items-center space-x-2">
      <input
        type="radio"
        checked={item.id === teacher}
        onChange={() => handleTeacherSelect(item.id)}
        className="form-radio h-5 w-5 text-blue-600 m-2"
      />
      <span className="text-lg">{item.name}</span>
    </label>
  ));

  if (course === null) {
    return <p>...</p>;
  }
  return (
    <AuthLayout>
      <DashCmp>
        <Title text="نوێکردنەوەی مامۆستا" />
        <InputCmp label="ناوی خول" state={title} setState={setTitle} />
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
        <Heading text="مامۆستای خول" />
        {teacherRadioInputs}
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
