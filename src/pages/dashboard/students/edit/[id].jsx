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
import SelectComponent from "../../../../components/SelectComponent";
import Button from "../../../../components/Button";
import Head from "next/head";
import Title from "../../../../components/Title";

const shasenem = localFont({ src: "../../../fonts/shasenem.ttf" });

const StudentEdit = () => {
  const router = useRouter();
  const [student, setStudent] = useState(null);
  const [teacherIds, setTeacherIds] = useAtom(teacherAtom);
  const [allTeachers, setAllTeachers] = useState([]);
  const { id } = router.query;

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
  const [course, setCourse] = useState("");
  const [courses, setCourses] = useState([]);
  const [incomeErr, setIncomeErr] = useState(false);
  const [incomeMsg, setIncomeMsg] = useState(false);

  const fetchCourses = async () => {
    try {
      const { data, error } = await supabase.from("course").select();
      if (error) throw Error;
      setCourses(data);
      setCourse(data[0].id);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetcher = async () => {
    try {
      let { data: student, error } = await supabase
        .from("student")
        .select(`*, class(*), blood(*), travel(*), ragaz(*)`)
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
      setPay(student.pay || "0");
      setSecondpay(student.secondpay || "0");
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
    const selected = selectedTeachers.filter((item) => item.id !== null);
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
          course,
          teacher: selected,
          second_phone: secondPhone,
          pay,
          secondpay,
        })
        .eq("id", id);
      if (error) throw Error;
      setIncomeErr(false);
      setIncomeMsg(false);
      await handleIncome()
      router.push("/dashboard/students");
    } catch (e) {
      console.log(e);
    }
  };

  const handleIncome = async () => {
    if (pay.length === 0) {
      setIncomeErr(true);
    }
    const amount = Number(pay) + Number(0);
    const { error } = await supabase.from("income").insert({
      amount,
      course,
      teacher: teacherIds,
      student: id,
    });
    if (error) {
      setIncomeErr(true);
    } 
    setIncomeMsg(true)
  };

  const handleTeacherSelect = (teacherId) => {
    setSelectedTeachers((prevSelected) => {
      if (prevSelected.includes(teacherId)) {
        return prevSelected.filter((id) => id !== teacherId);
      } else {
        return [...prevSelected, teacherId];
      }
    });
  };

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
      <Head>
        <title>فۆرمی پەیمانگای راڤە</title>
      </Head>
      <DashCmp>
        <div dir="rtl" className="flex flex-col space-y-4 w-2/3">
          <Title text="نوێکردنەوەی فۆرمی خوێندکار" />
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
          <InputCmp label="بڕی پارەی یەکەم" state={pay} setState={setPay} />
          <InputCmp
            label="بڕی پارەی دووەم"
            state={secondpay}
            setState={setSecondpay}
          />
          <SelectComponent
            label="خولێک هەڵبژێرە"
            item={course}
            setItem={setCourse}
            values={courses}
          />
          <div className="flex flex-wrap"></div>
          <label>بڵاوکراوەتەوە؟</label>
          <Heading text="مامۆستایانی هەڵبژێردراو" />
          {checkboxInput}
          <div>
            {incomeErr === true ? (
              <p className="text-red-500 font-bold text-lg">
                داهاتی خوێندکار بنووسە
              </p>
            ) : (
              ""
            )}
            {incomeMsg === true ? (
              <p className="text-red-500 font-bold text-lg">
                داهات و خەرجی تۆمارکرا
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="flex flex-wrap justify-around">
            <Button text={"نوێکردنەوەی فۆرم"} handleClick={handleUpdate} />
          </div>
        </div>
      </DashCmp>
    </AuthLayout>
  );
};

export default StudentEdit;
