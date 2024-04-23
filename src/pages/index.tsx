import React, { useState } from "react";
import Head from "next/head";
import InputCmp from "./components/InputCmp";
import Classes from "./components/Classes";
import Ragaz from "./components/Ragaz";
import Blood from "./components/Blood";
import Travel from "./components/Travel";
import Lectures from "./components/Lectures";
import Title from "./components/Title";

export default function Home() {
  const [name, setName] = useState("");
  const [school, setSchool] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [firstPay, setFirstPay] = useState("");
  const [secondPay, setSecondPay] = useState("");
  const [health, setHealth] = useState("");
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
      <main className="flex items-center justify-center">
        <div className="w-full max-w-lg px-4 py-8 bg-white shadow-lg rounded-lg">
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
{/*             <InputCmp
              label="بڕی واسڵکراو \ ١"
              placeholder="یەکەم بڕی پارەی واسڵکراو"
              state={firstPay}
              setState={setFirstPay}
            />
            <InputCmp
              label="بڕی واسڵکراو \ ٢"
              placeholder="دووەم بڕی پارەی واسڵکراو"
              state={secondPay}
              setState={setSecondPay}
            /> */}
            <InputCmp
              label="کێشەی تەندروستی"
              placeholder="گەر کێشەیەکی تەندروستیت هەیە بینووسە"
              state={health}
              setState={setHealth}
            />
            <Lectures />
          </div>
        </div>
      </main>
    </>
  );
}
