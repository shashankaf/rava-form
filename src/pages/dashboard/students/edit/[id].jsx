import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { supabase } from "../../../../lib/supabase";
import InputCmp from "../../../../components/InputCmp";
import Classes from "../../../../components/Classes";
import Ragaz from "../../../../components/Ragaz";
import Blood from "../../../../components/Blood";
import Travel from "../../../../components/Travel";
import DashCmp from "../../../../components/DashCmp";
import localFont from "next/font/local";
import { useAtom } from "jotai";
import {
  bloodAtom,
  classAtom,
  ragazAtom,
  teacherAtom,
  travelAtom,
} from "../../../../lib/store";
import Heading from "../../../../components/Heading";
import AuthLayout from "../../../../components/AuthLayout";

const shasenem = localFont({ src: "../../../fonts/shasenem.ttf" });

const StudentEdit = () => {
  const router = useRouter();
  const [student, setStudent] = useState(null);
  const [teacherIds, setTeacherIds] = useAtom(teacherAtom);
  const [allTeachers, setAllTeachers] = useState([]);
  const { id } = router.query;

  // STUDENT UPDATE
  const [name, setName] = useState("");
  const [school, setSchool] = useState("");
  const [phone, setPhone] = useState("");
  const [secondPhone, setSecondPhone] = useState("");
  const [address, setAddress] = useState("");
  const [health, setHealth] = useState("");
  const [blood, setBlood] = useAtom(bloodAtom);
  const [travel, setTravel] = useAtom(travelAtom);
  const [ragaz, setRagaz] = useAtom(ragazAtom);
  const [clas, setClas] = useAtom(classAtom);
  const [pay, setPay] = useState("");
  const [secondpay, setSecondpay] = useState("");
  const [publish, setPublish] = useState(false);
  const [selectedTeachers, setSelectedTeachers] = useState([]);

  const fetcher = async () => {
    try {
      let { data: student, error } = await supabase
        .from("student")
        .select(`*, class(*), blood(*), travel(*), ragaz(*), cohort(*)`)
        .eq("id", id)
        .single();
      if (error) {
        throw error;
      }
      setStudent(student);
      setTeacherIds(student.teacher);
      setName(student.name || "");
      setSchool(student.school || "");
      setPhone(student.phone || "");
      setSecondPhone(student.second_phone || "");
      setAddress(student.address || "");
      setHealth(student.health || "");
      setBlood(student.blood || "");
      setTravel(student.travel || "");
      setRagaz(student.ragaz || "");
      setClas(student.class || "");
      setPay(student.pay || "");
      setSecondpay(student.secondpay || "");
      setPublish(student.publish || false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetcher();
  }, [id]);

  const teacherFetcher = async () => {
    try {
      const { data, error } = await supabase.from("teacher").select();
      if (error) throw Error;
      setSelectedTeachers(teacherIds);
      setAllTeachers(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    teacherFetcher();
  }, [teacherIds]);

  const handleUpdate = async () => {
    const selected = selectedTeachers.filter(item => item !== null)
    try {
      const { error } = await supabase
        .from("student")
        .update({
          name,
          class: clas.id,
          school,
          blood: blood.id,
          phone,
          address,
          travel: travel.id,
          health,
          ragaz: ragaz.id,
          publish,
          teacher: selected,
          second_phone: secondPhone,
          cohort: null,
          pay,
          secondpay,
        })
        .eq("id", id);
      if (error) throw Error;
      router.push("/dashboard/students");
    } catch (e) {
      console.log(e);
    }
  };

  // Function to handle selection changes
  const handleTeacherSelect = (teacherId) => {
    setSelectedTeachers((prevSelected) => {
      if (prevSelected.includes(teacherId)) {
        return prevSelected.filter((id) => id !== teacherId);
      } else {
        return [...prevSelected, teacherId];
      }
    });
  };

  // Function to check if a teacher is selected
  const isTeacherSelected = (teacherId) => {
    return selectedTeachers.includes(teacherId);
  };

  const teacherCheckboxes = allTeachers.map((teacher) => (
    <label key={teacher.id} className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={isTeacherSelected(teacher.id)}
        onChange={() => handleTeacherSelect(teacher.id)}
        className="form-checkbox h-5 w-5 text-blue-600 m-2"
      />
      <span className="text-lg">{teacher.name}</span>
    </label>
  ));

  // JSX for rendering teacher checkboxes
  const checkboxInput = <div>{teacherCheckboxes}</div>;

  return (
    <AuthLayout>
      <DashCmp>
        <div dir="rtl" className="flex flex-col space-y-4 w-2/3">
          <InputCmp
            label="ناوی بەشداربوو"
            placeholder="ناوی سیانییت بنووسە"
            state={name}
            setState={setName}
          />
          <Classes />
          <InputCmp
            label="خوێندنگە"
            placeholder="ناوی خوێندنگەکەت چیە؟"
            state={school}
            setState={setSchool}
          />
          <Ragaz />
          <Blood />
          <InputCmp
            label="ژمارەی تەلەفۆن"
            placeholder="ژمارەی تەلەفۆنەکەت چەندە؟"
            state={phone}
            setState={setPhone}
          />
          <InputCmp
            label="ژمارەی تەلەفۆنی ماڵەوە"
            placeholder="ژمارەی تەلەفۆنی ماڵەوە چەندە؟"
            state={secondPhone}
            setState={setSecondPhone}
          />
          <InputCmp
            label="ناونیشان"
            placeholder="ناونیشان - گەڕەک کوێیە؟"
            state={address}
            setState={setAddress}
          />
          <Travel />
          <InputCmp
            label="کێشەی تەندروستی"
            placeholder="گەر کێشەیەکی تەندروستیت هەیە بینووسە"
            state={health}
            setState={setHealth}
          />
          <InputCmp
            label="بڕی پارەی یەکەم"
            state={pay}
            setState={setPay}
          />
          <InputCmp
            label="بڕی پارەی دووەم"
            state={secondpay}
            setState={setSecondpay}
          />
          <label>بڵاوکراوەتەوە؟</label>
          <div className="flex justify-start items-center flex-row flex-wrap">
            <p
              onClick={() => setPublish(true)}
              className={`${publish === true ? "bg-indigo-600" : "bg-gray-400"} ${shasenem.className} hover:bg-indigo-400 transition-400 cursor-pointer text-white py-1 px-6 rounded-lg rounded-tl-none rounded-bl-none text-2xl`}
            >
              بەڵێ
            </p>
            <p
              onClick={() => setPublish(false)}
              className={`${publish === false ? "bg-indigo-600" : "bg-gray-400"} ${shasenem.className} hover:bg-indigo-400 transition-400 cursor-pointer text-white py-1 px-6 rounded-lg rounded-tr-none rounded-br-none text-2xl`}
            >
              نەخێر
            </p>
          </div>
          <Heading text="مامۆستایانی هەڵبژێردراو" />
          {checkboxInput}
          <button
            onClick={handleUpdate}
            className={`${shasenem.className} m-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 border border-blue-700 rounded text-xl`}
          >
            نوێکردنەوە
          </button>
        </div>
      </DashCmp>
    </AuthLayout>
  );
};

export default StudentEdit;
