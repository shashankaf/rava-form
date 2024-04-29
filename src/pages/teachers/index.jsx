import Image from "next/image";
import React, { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const fetcher = async () => {
    try {
      const { data, error } = await supabase.from("teacher").select();
      if (error) throw Error;
      setTeachers(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetcher();
  }, []);
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {teachers?.map((item) => {
              return (
                <>
                  <li>
                    <div className="flex items-center gap-x-6">
                      <Image
                        className="h-16 w-16 rounded-full"
                        src={item?.photo}
                        alt=""
                        height={200}
                        width={200}
                      />
                      <div>
                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                          {item?.name}                        </h3>
                        <p className="text-sm font-semibold leading-6 text-indigo-600">
                          {item?.specialty}
                        </p>
                      </div>
                    </div>
                  </li>
                </>
              );
            })}
          </ul>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-right">
              مامۆستایانی راڤە
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-right">
              لە پەیمانگای راڤە، باشترین مامۆستایان وانەکانی بەهێزکردنی وانەکانی خوێندنگە و پیشەکان دەڵێنەوە. راڤە هەمیشە لەکاردایە بۆ لە پەیوەندیدابوون لەگەڵ باشترین هەربۆیە باشترین خزمەت بە فێرخوازان دەکات
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teachers;
