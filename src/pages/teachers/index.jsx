import Image from "next/image";
import React, { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import localFont from 'next/font/local';
import Head from "next/head";
import Link from "next/link";

const goran = localFont({ src: '../fonts/goran.ttf' })
const shasenem = localFont({src: '../fonts/shasenem.ttf'})


const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const fetcher = async () => {
    try {
      const { data, error } = await supabase.from("teacher").select().order('order', {ascending: true});
      if (error) throw Error;
      setTeachers(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetcher();
  }, []);

  const handleTeacher = (teacherId) => {
    router.push(`/teachers/${teacherId}`);
  };

  return (
    <>
      <Head>
        <title>Rava Institute - Teachers</title>
        <meta name="description" content="Rava Institute" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`${goran.className} bg-white py-24 sm:py-32`} dir="rtl">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className={`${shasenem.className} text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-right`}>
              مامۆستایانی راڤە
            </h2>
            <p className="mt-6 text-xl leading-8 text-gray-600 text-right">
              لە پەیمانگای راڤە، باشترین مامۆستایان وانەکانی بەهێزکردنی وانەکانی خوێندنگە و پیشەکان دەڵێنەوە. راڤە هەمیشە لەکاردایە بۆ لە پەیوەندیدابوون لەگەڵ باشترین هەربۆیە باشترین خزمەت بە فێرخوازان دەکات
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {teachers?.map((item) => {
              return (
                <Link key={item.id} href={`/teachers/${item.id}`}>
                  <li>
                    <div className="flex border-[1px] border-gray-100 items-center gap-x-6 hover:shadow-sm hover:shadow-black rounded-lg transition-600 p-4">
                      <Image
                        className="h-16 w-16 rounded-full"
                        src={item?.photo}
                        alt=""
                        height={200}
                        width={200}
                      />
                      <div>
                        <h3 className={`${shasenem.className} text-xl font-semibold leading-7 tracking-tight text-gray-900`}>
                          {item?.name}                        </h3>
                        <p className={`${goran.className} text-lg font-semibold leading-6 text-indigo-600`}>
                          {item?.specialty}
                        </p>
                      </div>
                    </div>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Teachers;
