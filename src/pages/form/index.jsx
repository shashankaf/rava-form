import React, { useState } from "react";
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

const shasenem = localFont({ src: "../fonts/shasenem.ttf" });

export default function Home() {
  const [name, setName] = useState("");
  const [school, setSchool] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [health, setHealth] = useState("");
  const [blood] = useAtom(bloodAtom);
  const [travel] = useAtom(travelAtom);
  const [ragaz] = useAtom(ragazAtom);
  const [clas] = useAtom(classAtom);
  const [teacher] = useAtom(teacherAtom);
  const [errors, setErrors] = useState([]);
  const logo =
    "https://grocviikgcjxaxnkdvrv.supabase.co/storage/v1/object/public/general/paimangai_rava.jpg";
  const [errorSubmit, setErrorSubmit] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSave = async () => {
    const info = {
      name,
      class: clas?.id,
      school,
      blood: blood?.id,
      phone,
      address,
      travel: travel?.id,
      health,
      ragaz: ragaz?.id,
      teacher: teacher,
    };

    // Push error messages into the errors array
    if (!name || name.length < 2 || name.length > 50)
      setErrors([...errors, "تکایە ناوێکی گونجاو هەڵبژێرە"]);
    if (!clas.id) setErrors([...errors, "تکایە پۆلەکەت هەڵبژێرە"]);
    if (!teacher.length)
      setErrors([...errors, "تکایە مامۆستایەک یان زیاتر هەڵبژێرە"]);
    if (!ragaz.id) setErrors([...errors, "تکایە رەگەزت هەڵبژێرە"]);
    if (!name || !clas.id || !teacher.length || !ragaz.id) {
      return; // Exit the function if validation fails
    }

    const { error } = await supabase.from("student").insert(info);

    if (error) {
      console.log(error);
      setErrorSubmit(true);
    } else {
      setSuccess(true);
    }
  };
  if (errorSubmit) {
    return <Title text="ببورە هەڵەیەک روویداوە، تکایە هەوڵبدەرەوە" />;
  }
  if (success) {
    return <Title text="زۆر سوپاس، فۆرمەکەت گەیشت" />;
  }
  return (
    <>
      <Head>
        <title>Rava Registeration Form</title>
        <meta
          name="description"
          content="Register Yourself in Rava Institute"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center justify-center mb-12">
        <div className="w-full max-w-2xl px-4 py-8 bg-white shadow-lg rounded-lg">
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
            <Lectures />
            <button
              onClick={handleSave}
              className={`${shasenem.className} m-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 border border-blue-700 rounded text-xl`}
            >
              تۆمارکردن
            </button>
          </div>
          {errors.map((item, index) => (
            <p key={index} style={{fontFamily: shasenem.className}} className="block text-orange-900 font-bold text-xl text-center my-4">
              {item}
            </p>
          ))}
        </div>
      </main>
    </>
  );
}
