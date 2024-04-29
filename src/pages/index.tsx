import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rava Institute Website</title>
        <meta name="description" content="Rava Institute" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ fontFamily: "rudaw" }} className="p-4 m-4">
        <div className="relative" id="home">
          <div
            aria-hidden="true"
            className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
          >
            <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
            <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
          </div>
          <div className="relative pt-36 ml-auto">
            <div className="lg:w-2/3 text-center mx-auto">
              <h1 className="text-gray-900 font-bold text-5xl md:text-6xl xl:text-7xl font-bold">
                پەروەردەیەکی شیاو، بۆ نەوەیەکی{" "}
                <span className="text-indigo-800">سەرکەوتوو</span>
              </h1>
              <p className="mt-8 text-gray-700">
                پەیمانگای راڤە وانەی فێرکاریی بە فێرخوازان پێشکەش دەکات. باشترین
                و بەناوبانگترین مامۆستایان لە کەشێکی شیاوو بە هاوکاریی
                تەکنەلۆژیای پێشکەوتوو وانەکان دەڵێنەوەو تا دڵنیابن لە تێگەیشتن و
                فێربوونی فێرخوازان. خوێندکاران، لە بەهێزکردنی وانەکانی پۆلی ١٢وە
                تا فێربوونی دەستیکار، دەتوانن سوود لە راڤە ببینن{" "}
              </p>
              <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
                <Link
                  href="/form"
                  className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
                >
                  <span className="relative text-base font-semibold text-primary dark:text-white">
                    فۆرمی فێربوون
                  </span>
                </Link>
              </div>
              <div className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
                <div className="text-left">
                  <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                    گونجاوترین نرخ
                  </h6>
                  <p className="mt-2 text-gray-500">گونجاترین نرخ</p>
                </div>
                <div className="text-left">
                  <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                    باشترین کوالیتی{" "}
                  </h6>
                  <p className="mt-2 text-gray-500">باشترین کوالیتی</p>
                </div>
                <div className="text-left">
                  <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                    خوازراوترین پەیمانگا{" "}
                  </h6>
                  <p className="mt-2 text-gray-500">خوازراوترون پەیمانگا</p>
                </div>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6"></div>
          </div>
        </div>
      </main>
    </>
  );
}
