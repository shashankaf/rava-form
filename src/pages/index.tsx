import React from "react";
import Head from "next/head";
import Link from "next/link";
import localFont from "next/font/local";
import Image from "next/image";

const goran = localFont({ src: "./fonts/goran.ttf" });
const shasenem = localFont({ src: "./fonts/shasenem.ttf" });

export default function Home() {

  return (
    <>
      <Head>
        <title>Rava Institute Website</title>
        <meta name="description" content="Rava Institute" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${shasenem.className} m-4 p-4`}>
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
              <h1
                className={` text-gray-900 font-bold text-5xl md:text-6xl xl:text-7xl font-bold`}
              >
                پەروەردەیەکی شیاو، بۆ نەوەیەکی{" "}
                <span className="text-indigo-800 block">سەرکەوتوو</span>
              </h1>
              <Image
                src={`/gl.webp`}
                alt={"illustration"}
                height={400}
                width={400}
                className="mx-auto"
                />
              <p className={`${goran.className} text-xl mt-8 text-gray-700`}>
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
                  <span className="relative text-xl font-semibold text-primary dark:text-white">
                    فۆرمی فێربوون
                  </span>
                </Link>
              </div>
              <div className="py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
                <div className="text-left">
                  <Link href="/dashboard" className="text-lg font-semibold text-gray-700">
                    گونجاوترین نرخ
                  </Link>
                </div>
                <div className="text-left">
                  <h6 className="text-lg font-semibold text-gray-700">
                    باشترین کوالیتی{" "}
                  </h6>
                </div>
                <div className="text-left">
                  <h6 className="text-lg font-semibold text-gray-700">
                    خوازراوترین پەیمانگا{" "}
                  </h6>
                </div>
              </div>
              <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
