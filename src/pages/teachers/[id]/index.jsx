import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";
import Image from "next/image";
import localFont from "next/font/local";

const goran = localFont({ src: "../../fonts/goran.ttf" });
const shasenem = localFont({ src: "../../fonts/shasenem.ttf" });

const SingleTeacher = () => {
  const [teacher, setTeacher] = useState(null);

  const router = useRouter();
  const { id } = router.query;

  const fetcher = async () => {
    const { data, error } = await supabase
      .from("teacher")
      .select()
      .eq("id", id);
    if (error) throw Error;
    setTeacher(data[0]);
  };
  useEffect(() => {
    fetcher();
  }, [id]);
  if (teacher === null) {
    return <p>Loading...</p>;
  }
  console.log(teacher);
  return (
    <>
      <section  className="pt-10 overflow-hidden text-right">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
            <div>
              <h2 className={`${shasenem.className} text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl`}>
                <br className="block sm:hidden" />
                👋
                سڵاو، من
                <br className="block sm:hidden" />
                {` ${teacher.name}م`}               </h2>
              <p className={`${shasenem.className} text-2xl my-2 py-2 font-bold`}>مامۆستای {teacher.specialty}</p>
              <p className={`${goran.className} max-w-lg mt-3 text-xl text-gray-600 md:mt-8`}>
                {teacher.bio}
              </p>

              <p className="mt-4 text-xl text-gray-600 md:mt-8">
                <span className="relative inline-block">
                  <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 "></span>
                  <span className={`${shasenem.className} relative`}> دەتوانیت پەیوەندیم پێوەبکەیت لە پەیمانگای راڤە </span>
                </span>
                <br className="block sm:hidden" />
              </p>
            </div>

            <div className="relative">
              <Image
                className="relative h-full"
                src={teacher?.photo}
                alt={teacher.name}
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleTeacher;
