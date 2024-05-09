import React, { useEffect, useState } from "react";
import Head from "next/head";
import InputCmp from "../../components/InputCmp";
import Classes from "../../components/Classes";
import Ragaz from "../../components/Ragaz";
import Blood from "../../components/Blood";
import Travel from "../../components/Travel";
import Lectures from "../../components/Lectures";
import Title from "../../components/Title";
import { useAtom } from "jotai";
import {
  bloodAtom,
  classAtom,
  ragazAtom,
  teacherAtom,
  travelAtom,
} from "../../lib/store";
import { supabase } from "../../lib/supabase";
import Image from "next/image";
import localFont from "next/font/local";
import Heading from "../../components/Heading";
import Modal from "../../components/Modal";
import Link from "next/link";
import SelectComponent from "../../components/SelectComponent";

const shasenem = localFont({ src: "../fonts/shasenem.ttf" });

export default function Home() {
  const [name, setName] = useState("");
  const [school, setSchool] = useState("");
  const [phone, setPhone] = useState("");
  const [secondPhone, setSecondPhone] = useState("");
  const [address, setAddress] = useState("");
  const [health, setHealth] = useState("");
  const [course, setCourse] = useState("");
  const [courses, setCourses] = useState([]);
  const [blood] = useAtom(bloodAtom);
  const [travel] = useAtom(travelAtom);
  const [ragaz] = useAtom(ragazAtom);
  const [clas] = useAtom(classAtom);
  const [pay, setPay] = useState("");
  const [secondpay, setSecondpay] = useState("");
  const [teacher] = useAtom(teacherAtom);
  const [errors, setErrors] = useState([]);
  const logo =
    "https://grocviikgcjxaxnkdvrv.supabase.co/storage/v1/object/public/general/paimangai_rava.jpg";
  const [errorSubmit, setErrorSubmit] = useState(false);
  const [success, setSuccess] = useState(false);

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
  console.log("c", course);
  const handleSave = async () => {
    const info = {
      name,
      class: clas?.id,
      school,
      blood: blood?.id,
      phone,
      pay,
      secondpay,
      second_phone: secondPhone,
      course,
      address,
      travel: travel?.id,
      health,
      ragaz: ragaz?.id,
      teacher: teacher,
    };

    if (!name || name.length < 2 || name.length > 50)
      setErrors([...errors, "تکایە ناوێکی گونجاو هەڵبژێرە"]);
    if (!clas.id) setErrors([...errors, "تکایە پۆلەکەت هەڵبژێرە"]);
    if (phone.length < 3)
      setErrors([...errors, "تکایە ژمارەی مۆبایل داخڵ بکە"]);
    if (!teacher.length)
      setErrors([...errors, "تکایە مامۆستایەک یان زیاتر هەڵبژێرە"]);
    if (!ragaz.id) setErrors([...errors, "تکایە رەگەزت هەڵبژێرە"]);
    if(!course.id) setErrors([...errors, "تکایە خولێک هەڵبژێرە"])
    if (!name || !clas.id || !teacher.length || !ragaz.id) {
      return;
    }

    const { error } = await supabase.from("student").insert(info);

    if (error) {
      setErrorSubmit(true);
    } else {
      setSuccess(true);
    }
  };
  if (errorSubmit) {
    return (
      <>
        <div>
          <Link href="/form">گەڕانەوە</Link>
          <Title text="ببورە هەڵەیەک روویداوە، تکایە هەوڵبدەرەوە" />
        </div>
      </>
    );
  }
  if (success) {
    return (<div className="text-center py-8 bg-gray-100">
      <p className="text-2xl text-gray-800">
        سوپاس بۆ خۆ تۆمارکردنت، بەمزوانە پەیوەندیت پێوە دەکرێت
      </p>
      <Link href="/">
        <a className="mt-4 inline-block px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
          ماڵەوە
        </a>
      </Link>
    </div>);
  }
  return (
    <>
      <Head>
        <title>فۆرمی پەیمانگای راڤە</title>
      </Head>
      <Modal title="فۆرمەکەت گەیشت">
        <Heading text="سوپاس، بە زووترین کات وەڵامت دەدرێتەوە" />
      </Modal>
      <main className="bg-white border rounded-lg px-8 py-6 mx-auto my-8 max-w-2xl">
        <div className="">
          <Image
            src={logo}
            alt={`Rava Institute`}
            width={160}
            height={160}
            className="rounded-full m-auto"
          />
          <Title text="فۆرمی تۆمارکردنی خوێندکار لە پەیمانگای راڤە" />
          <div className="flex flex-col items-end space-y-4">
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
              placeholder="ژمارەی تەلەفۆنی ماڵەوەتان چەندە؟"
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
            <SelectComponent
              label="خولێک هەڵبژێرە"
              item={course}
              setItem={setCourse}
              values={courses}
            />
            <Lectures />
            <button
              onClick={handleSave}
              className={`${shasenem.className} m-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 border border-blue-700 rounded text-xl`}
            >
              تۆمارکردن
            </button>
          </div>
          {errors.map((item, index) => (
            <p
              key={index}
              style={{ fontFamily: shasenem.className }}
              className="block text-orange-900 font-bold text-xl text-center my-4"
            >
              {item}
            </p>
          ))}
        </div>
      </main>
    </>
  );
}
